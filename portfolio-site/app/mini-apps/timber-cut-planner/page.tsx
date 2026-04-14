'use client'
import { useEffect } from 'react'

export default function TimberCutPlanner() {
  useEffect(() => {
    // ── CONSTANTS ─────────────────────────────────────────────────────────────────
    const PRESET_KEY   = 'timberPlanner_presets_v1'
    const PROFILES_KEY = 'timberPlanner_profiles_v1'
    const LENGTHS_KEY  = 'timberPlanner_lengths_v1'

    const PROFILE_COLOURS = ['#4a7fb5','#3d8f74','#b57840','#7060b0','#b54a6a','#5a9fb5','#9f8040','#6a9f40']

    // ── STATE ─────────────────────────────────────────────────────────────────────
    let AVAIL = [900, 1200, 1500, 1800, 2100]
    function DEFAULT_LEN() { return AVAIL[AVAIL.length - 1] }

    let profiles: { id: string; w: number; d: number; price: number }[] = [
      { id:'p1', w:19, d:35,  price:1.20 },
      { id:'p2', w:19, d:50,  price:1.60 },
      { id:'p3', w:25, d:50,  price:2.00 },
    ]

    let panels: { w: number; h: number; qty: number; frameProfileId: string; braceProfileId: string }[] = [
      { w:1220, h:808, qty:1, frameProfileId:'p1', braceProfileId:'p1' },
    ]

    let strips: any[] = []
    let modified = false
    let activeTab = 'all'

    // ── PROFILES HELPERS ──────────────────────────────────────────────────────────
    function profileById(id: string) {
      return profiles.find(p => p.id === id) || profiles[0]
    }
    function profileColour(id: string) {
      const idx = profiles.findIndex(p => p.id === id)
      return PROFILE_COLOURS[idx % PROFILE_COLOURS.length] || '#888'
    }
    function nextProfileId() {
      return 'p' + Date.now()
    }
    function sanitisePanelProfiles() {
      const ids = profiles.map(p => p.id)
      const fallback = ids[0] || null
      for (const panel of panels) {
        if (!ids.includes(panel.frameProfileId)) panel.frameProfileId = fallback!
        if (!ids.includes(panel.braceProfileId)) panel.braceProfileId = fallback!
      }
    }
    function saveProfilesToStorage() {
      try { localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles)) } catch(e) {}
    }
    function loadProfilesFromStorage() {
      try {
        const stored = JSON.parse(localStorage.getItem(PROFILES_KEY) || 'null')
        if (stored && Array.isArray(stored) && stored.length) profiles = stored
      } catch(e) {}
    }
    function saveLengthsToStorage() {
      try { localStorage.setItem(LENGTHS_KEY, JSON.stringify(AVAIL)) } catch(e) {}
    }
    function loadLengthsFromStorage() {
      try {
        const stored = JSON.parse(localStorage.getItem(LENGTHS_KEY) || 'null')
        if (stored && Array.isArray(stored) && stored.length) AVAIL = stored.map(Number).filter((n: number) => n > 0).sort((a: number, b: number) => a - b)
      } catch(e) {}
    }

    // ── SETTINGS ─────────────────────────────────────────────────────────────────
    function getS() {
      return {
        bufOpt:       parseInt((document.getElementById('s-bufOpt') as HTMLInputElement).value)      || 25,
        bufMin:       parseInt((document.getElementById('s-bufMin') as HTMLInputElement).value)      || 15,
        braceThresh:  parseInt((document.getElementById('s-braceThresh') as HTMLInputElement).value)  || 501,
        brace2Thresh: parseInt((document.getElementById('s-brace2Thresh') as HTMLInputElement).value) || 1200,
        maxOffcut:    parseInt((document.getElementById('s-maxOffcut') as HTMLInputElement).value)   || 100,
      }
    }

    // ── BRACE LOGIC ───────────────────────────────────────────────────────────────
    function getBraces(w: number, h: number, s: ReturnType<typeof getS>, frameProfile: { w: number } | null) {
      const longer  = Math.max(w, h), shorter = Math.min(w, h)
      const deduct  = (frameProfile ? frameProfile.w : 19) * 2
      const nShort  = longer  > s.brace2Thresh ? 2 : longer  > s.braceThresh ? 1 : 0
      const nLong   = shorter > s.brace2Thresh ? 2 : shorter > s.braceThresh ? 1 : 0
      const sLen = Math.max(1, shorter - deduct)
      const lLen = Math.max(1, longer  - deduct)
      const pieces: { len: number; type: string }[] = []
      for (let i=0; i<nShort; i++) pieces.push({ len:sLen, type:'bs' })
      for (let i=0; i<nLong;  i++) pieces.push({ len:lLen, type:'bl' })
      return { pieces, nShort, nLong, sLen, lLen, deduct }
    }

    function getPanelPieces(panel: typeof panels[0], s: ReturnType<typeof getS>) {
      const { w, h, qty, frameProfileId, braceProfileId } = panel
      const fp = profileById(frameProfileId)
      const bp = profileById(braceProfileId)
      const { pieces: bracePcs, nShort, nLong, sLen, lLen, deduct } = getBraces(w, h, s, fp)
      const perPanel = [
        { len:w, type:'w', pricePerM: fp ? fp.price : 0, profileId: frameProfileId },
        { len:w, type:'w', pricePerM: fp ? fp.price : 0, profileId: frameProfileId },
        { len:h, type:'h', pricePerM: fp ? fp.price : 0, profileId: frameProfileId },
        { len:h, type:'h', pricePerM: fp ? fp.price : 0, profileId: frameProfileId },
        ...bracePcs.map(pc => ({ ...pc, pricePerM: bp ? bp.price : 0, profileId: braceProfileId })),
      ]
      const all: any[] = []
      for (let i=0; i<qty; i++) all.push(...perPanel.map(p=>({...p})))
      return { perPanel, all, nShort, nLong, sLen, lLen, deduct, fp, bp }
    }

    // ── OPTIMISER ────────────────────────────────────────────────────────────────
    function calcUsed(cuts: { len: number }[], buf: number) {
      const n = cuts.length
      return cuts.reduce((s,c) => s+c.len, 0) + Math.max(0, n-1) * buf
    }

    function fitsInStrip(cuts: any[], newCut: any, buf: number, stripLen: number) {
      return calcUsed([...cuts, newCut], buf) <= stripLen
    }

    function optimiseForProfile(pieces: any[], s: ReturnType<typeof getS>, stripLen: number) {
      const pool = [...pieces]
      const unplaced = new Set(pool.map((_: any, i: number) => i))
      const newStrips: any[] = []

      function byIdx(i: number) { return pool[i] }
      function sortedUnplaced() {
        return [...unplaced].sort((a, b) => byIdx(b).len - byIdx(a).len)
      }

      function greedyFill(startIdx: number, buf: number) {
        const placed = [startIdx]
        const tmpUnplaced = new Set([...unplaced])
        tmpUnplaced.delete(startIdx)
        let changed = true
        while (changed) {
          changed = false
          const sorted = [...tmpUnplaced].sort((a,b) => byIdx(b).len - byIdx(a).len)
          for (const idx of sorted) {
            const cuts = placed.map(i => byIdx(i))
            if (fitsInStrip(cuts, byIdx(idx), buf, stripLen)) {
              placed.push(idx)
              tmpUnplaced.delete(idx)
              changed = true
              break
            }
          }
        }
        const used = calcUsed(placed.map(i => byIdx(i)), buf)
        return { placedIdxs: placed, used, remaining: stripLen - used }
      }

      while (unplaced.size > 0) {
        const ordered = sortedUnplaced()
        const firstIdx = ordered[0]

        if (byIdx(firstIdx).len > stripLen) { unplaced.delete(firstIdx); continue }

        let result = greedyFill(firstIdx, s.bufOpt)
        let bufUsed = s.bufOpt

        if (result.remaining > s.maxOffcut && s.bufMin < s.bufOpt) {
          const resultMin = greedyFill(firstIdx, s.bufMin)
          if (resultMin.placedIdxs.length > result.placedIdxs.length ||
              (resultMin.placedIdxs.length === result.placedIdxs.length && resultMin.remaining < result.remaining)) {
            result = resultMin
            bufUsed = s.bufMin
          }
        }

        if (result.remaining > s.maxOffcut) {
          let improved = true
          while (improved && result.remaining > s.maxOffcut) {
            improved = false
            const tryOrder = [...result.placedIdxs].sort((a,b) => byIdx(a).len - byIdx(b).len)
            for (const removeIdx of tryOrder) {
              const withoutRemoved = result.placedIdxs.filter((i: number) => i !== removeIdx)
              const tmpPool = [...unplaced, removeIdx].sort((a,b) => byIdx(b).len - byIdx(a).len)

              for (const tryBuf of [s.bufOpt, s.bufMin]) {
                const added = [...withoutRemoved]
                const tmpAvail = new Set(tmpPool)
                for (const pi of withoutRemoved) tmpAvail.delete(pi)

                let ch = true
                while (ch) {
                  ch = false
                  for (const idx of [...tmpAvail].sort((a,b) => byIdx(b).len - byIdx(a).len)) {
                    const cuts = added.map((i: number) => byIdx(i))
                    if (fitsInStrip(cuts, byIdx(idx), tryBuf, stripLen)) {
                      added.push(idx); tmpAvail.delete(idx); ch = true; break
                    }
                  }
                }

                const newUsed = calcUsed(added.map((i: number) => byIdx(i)), tryBuf)
                const newRemaining = stripLen - newUsed

                if (newRemaining < result.remaining) {
                  result = { placedIdxs: added, used: newUsed, remaining: newRemaining }
                  bufUsed = tryBuf
                  improved = true
                  break
                }
              }
              if (improved) break
            }
          }
        }

        for (const idx of result.placedIdxs) unplaced.delete(idx)

        const cuts = result.placedIdxs.map((i: number) => byIdx(i))
        const usedLen = calcUsed(cuts, bufUsed)
        const purchasedLen = AVAIL.find(l => l >= usedLen) || DEFAULT_LEN()

        const bufs = cuts.map((_: any, i: number) => i < cuts.length-1 ? bufUsed : 0)

        newStrips.push({
          profileId: cuts[0]?.profileId || null,
          purchasedLen,
          cuts,
          bufs,
          buf: bufUsed,
          remaining: purchasedLen - usedLen,
          minBufUsed: bufUsed < s.bufOpt,
        })
      }

      for (const strip of newStrips) {
        strip.tight = strip.remaining <= s.maxOffcut
      }

      return newStrips
    }

    function optimise(pieces: any[], s: ReturnType<typeof getS>) {
      const byProfile: Record<string, any[]> = {}
      for (const p of pieces) {
        const pid = p.profileId || '__none__'
        if (!byProfile[pid]) byProfile[pid] = []
        byProfile[pid].push(p)
      }

      const allStrips: any[] = []
      for (const pid of Object.keys(byProfile)) {
        const sorted = [...byProfile[pid]].sort((a,b) => b.len - a.len)
        const profileStrips = optimiseForProfile(sorted, s, DEFAULT_LEN())
        allStrips.push(...profileStrips)
      }

      // Assign stable numbers once at creation — preserved across manual reorders
      const localCountByProfile: Record<string, number> = {}
      allStrips.forEach((strip, i) => {
        strip.num = i + 1
        const pid = strip.profileId || '__none__'
        localCountByProfile[pid] = (localCountByProfile[pid] || 0) + 1
        strip.localNum = localCountByProfile[pid]
      })

      return allStrips
    }

    // ── COST ─────────────────────────────────────────────────────────────────────
    function stripCost(strip: any) {
      const prof = profileById(strip.profileId)
      const pricePerM = prof ? prof.price : 0
      return (strip.purchasedLen / 1000) * pricePerM
    }
    function totalCost() {
      return strips.reduce((sum, st) => sum + stripCost(st), 0)
    }

    // ── SEG COLOUR ────────────────────────────────────────────────────────────────
    const TYPE_LBL: Record<string, string> = { w:'W', h:'H', bs:'B↔', bl:'B↕' }

    function segColour(cut: any) {
      const col = profileColour(cut.profileId)
      if (cut.type === 'bs' || cut.type === 'bl') return col + 'cc'
      return col
    }

    // ── RENDER: LENGTHS LIST ─────────────────────────────────────────────────────
    function renderLengthsList() {
      const el = document.getElementById('lengths-list')
      if (!el) return
      el.innerHTML = AVAIL.map((l, i) => `
        <div class="profile-row" style="padding:4px 7px;">
          <span style="flex:1;font-size:11px;color:var(--ink);font-family:var(--mono);">${l}mm</span>
          <span style="font-size:10px;color:var(--ink3);margin-right:6px;">${(l/1000).toFixed(2)}m</span>
          ${AVAIL.length > 1
            ? `<button class="profile-del" onclick="timberPlanner.removeLength(${i})" title="Remove">×</button>`
            : `<span style="width:16px;"></span>`}
        </div>`).join('')
    }

    function addLength() {
      const el = document.getElementById('nl-val') as HTMLInputElement
      const val = parseInt(el.value)
      if (!val || val < 100 || val > 9999) { showNotification('Enter a length between 100 and 9999mm'); return }
      if (AVAIL.includes(val)) { showNotification(`${val}mm is already in the list`); return }
      AVAIL = [...AVAIL, val].sort((a,b) => a-b)
      el.value = ''
      saveLengthsToStorage()
      renderLengthsList()
    }

    function removeLength(i: number) {
      if (AVAIL.length <= 1) { showNotification("Can't remove the last length"); return }
      AVAIL = AVAIL.filter((_,idx) => idx !== i)
      saveLengthsToStorage()
      renderLengthsList()
    }

    // ── RENDER: PROFILES LIST ─────────────────────────────────────────────────────
    function renderProfilesList() {
      const el = document.getElementById('profiles-list')
      if (!el) return
      el.innerHTML = profiles.map((p, i) => {
        const col = PROFILE_COLOURS[i % PROFILE_COLOURS.length]
        return `<div class="profile-row">
          <div class="profile-swatch" style="background:${col};"></div>
          <div class="profile-edit-inputs">
            <input class="pinput pinput-w" type="number" value="${p.w}" min="1" max="200"
              oninput="timberPlanner.updateProfile('${p.id}','w',this.value)" title="Width">
            <span class="psep">×</span>
            <input class="pinput pinput-d" type="number" value="${p.d}" min="1" max="200"
              oninput="timberPlanner.updateProfile('${p.id}','d',this.value)" title="Depth">
            <span class="psep">£</span>
            <input class="pinput pinput-p" type="number" value="${p.price.toFixed(2)}" min="0" step="0.01"
              oninput="timberPlanner.updateProfile('${p.id}','price',this.value)" title="Price per metre">
            <span class="psep">/m</span>
          </div>
          <button class="profile-del" onclick="timberPlanner.deleteProfile('${p.id}')" title="Remove profile">×</button>
        </div>`
      }).join('')
      renderPanelsList()
    }

    function updateProfile(id: string, field: string, val: string) {
      const p = profiles.find(p => p.id === id)
      if (!p) return
      if (field === 'price') p.price = parseFloat(val) || 0
      else (p as any)[field] = parseInt(val) || 1
      saveProfilesToStorage()
      renderPanelsList()
    }

    function addProfile() {
      const w = parseInt((document.getElementById('np-w') as HTMLInputElement).value)
      const d = parseInt((document.getElementById('np-d') as HTMLInputElement).value)
      const price = parseFloat((document.getElementById('np-p') as HTMLInputElement).value) || 0
      if (!w || !d) { showNotification('Enter W and D for the new profile'); return }
      profiles.push({ id: nextProfileId(), w, d, price });
      (document.getElementById('np-w') as HTMLInputElement).value = '';
      (document.getElementById('np-d') as HTMLInputElement).value = '';
      (document.getElementById('np-p') as HTMLInputElement).value = ''
      saveProfilesToStorage()
      renderProfilesList()
    }

    function deleteProfile(id: string) {
      if (profiles.length <= 1) { showNotification("Can't delete the last profile"); return }
      profiles = profiles.filter(p => p.id !== id)
      sanitisePanelProfiles()
      saveProfilesToStorage()
      renderProfilesList()
    }

    // ── RENDER: PANELS LIST ───────────────────────────────────────────────────────
    function buildProfileOptions(selectedId: string) {
      return profiles.map(p => {
        return `<option value="${p.id}" ${p.id===selectedId?'selected':''}>${p.w}×${p.d}mm · £${p.price.toFixed(2)}/m</option>`
      }).join('')
    }

    function renderPanelsList() {
      const s = getS()
      const el = document.getElementById('panels-list')
      if (!el) return
      el.innerHTML = panels.map((p, i) => {
        const fp = profileById(p.frameProfileId)
        const bp = profileById(p.braceProfileId)
        const { nShort, nLong, sLen, lLen, deduct } = getBraces(p.w, p.h, s, fp)
        let braceNote = ''
        if (nShort > 0 || nLong > 0) {
          const parts = []
          if (nShort > 0) parts.push(`${nShort}× <span class="bpill bpill-s">${sLen}mm</span>`)
          if (nLong > 0)  parts.push(`${nLong}× <span class="bpill bpill-l">${lLen}mm</span>`)
          braceNote = `<div class="pi-braces">${parts.join(' + ')} <span style="color:var(--ink3);font-size:9px;">(deduct ${deduct}mm)</span></div>`
        }
        const frameCol = fp ? profileColour(fp.id) : '#888'
        const braceCol = bp ? profileColour(bp.id) : '#888'
        return `<div class="panel-item">
          <div class="pi-row">
            <span class="pi-dim">${p.w}×${p.h}</span>
            <div class="pi-qty">
              <button class="qbtn" onclick="timberPlanner.changeQty(${i},-1)">−</button>
              <span class="qval">×${p.qty}</span>
              <button class="qbtn" onclick="timberPlanner.changeQty(${i},+1)">+</button>
            </div>
            <button class="delbtn" onclick="timberPlanner.deletePanel(${i})">×</button>
          </div>
          <div class="pi-profiles">
            <div class="pi-select-wrap">
              <span style="width:7px;height:7px;border-radius:50%;background:${frameCol};flex-shrink:0;display:inline-block;"></span>
              <span class="pi-select-label">Frame</span>
              <select class="pi-select" onchange="timberPlanner.setPanelProfile(${i},'frame',this.value)">
                ${buildProfileOptions(p.frameProfileId)}
              </select>
            </div>
            <div class="pi-select-wrap">
              <span style="width:7px;height:7px;border-radius:50%;background:${braceCol};flex-shrink:0;display:inline-block;"></span>
              <span class="pi-select-label">Brace</span>
              <select class="pi-select" onchange="timberPlanner.setPanelProfile(${i},'brace',this.value)">
                ${buildProfileOptions(p.braceProfileId)}
              </select>
            </div>
          </div>
          ${braceNote}
        </div>`
      }).join('')
    }

    function setPanelProfile(i: number, which: string, id: string) {
      if (which === 'frame') panels[i].frameProfileId = id
      else panels[i].braceProfileId = id
      renderPanelsList()
    }
    function changeQty(i: number, d: number) { panels[i].qty = Math.max(1, panels[i].qty + d); renderPanelsList() }
    function deletePanel(i: number)   { panels.splice(i, 1); renderPanelsList() }
    function addPanel() {
      const w = parseInt((document.getElementById('add-w') as HTMLInputElement).value)
      const h = parseInt((document.getElementById('add-h') as HTMLInputElement).value)
      const q = parseInt((document.getElementById('add-q') as HTMLInputElement).value) || 1
      if (!w || !h) return
      const defaultId = profiles[0]?.id || null
      panels.push({ w, h, qty:q, frameProfileId:defaultId!, braceProfileId:defaultId! });
      (document.getElementById('add-w') as HTMLInputElement).value = '';
      (document.getElementById('add-h') as HTMLInputElement).value = '';
      (document.getElementById('add-q') as HTMLInputElement).value = '1'
      renderPanelsList()
    }

    // ── DRAG & DROP ───────────────────────────────────────────────────────────────
    let dragState: { stripIdx: number; cutIdx: number; type: 'cut' | 'strip' } | null = null

    function onDragStart(e: DragEvent, stripIdx: number, cutIdx: number) {
      dragState = { stripIdx, cutIdx, type: 'cut' }
      e.dataTransfer!.effectAllowed = 'move'
      e.dataTransfer!.setData('text/plain', `${stripIdx},${cutIdx}`)
      setTimeout(() => { if (e.target) (e.target as Element).classList.add('dragging') }, 0)
    }
    function onStripDragStart(e: DragEvent, si: number) {
      dragState = { stripIdx: si, cutIdx: -1, type: 'strip' }
      e.dataTransfer!.effectAllowed = 'move'
      e.dataTransfer!.setData('text/plain', `strip:${si}`)
      const card = document.getElementById(`strip-${si}`)
      if (card) {
        // Clone must live inside the .timberPlanner wrapper so all scoped CSS rules apply
        const timberRoot = document.getElementById('main')?.parentElement?.parentElement as HTMLElement | null
        const clone = card.cloneNode(true) as HTMLElement
        clone.style.position = 'absolute'
        clone.style.top = '-9999px'
        clone.style.left = '0'
        clone.style.width = card.offsetWidth + 'px'
        clone.style.opacity = '0.9'
        clone.style.pointerEvents = 'none'
        ;(timberRoot || document.body).appendChild(clone)
        const rect = card.getBoundingClientRect()
        e.dataTransfer!.setDragImage(clone, e.clientX - rect.left, e.clientY - rect.top)
        setTimeout(() => { clone.remove(); card.classList.add('strip-dragging') }, 0)
      }
    }
    function updateDropIndicator(toIdx: number, e: DragEvent) {
      const toCard = document.getElementById(`strip-${toIdx}`)
      if (!toCard) return
      const rect = toCard.getBoundingClientRect()
      const insertBefore = e.clientY < rect.top + rect.height / 2
      const listEl = document.getElementById('strips-list')
      if (!listEl) return
      document.querySelectorAll('.drop-indicator').forEach(el => el.remove())
      const indicator = document.createElement('div')
      indicator.className = 'drop-indicator'
      listEl.insertBefore(indicator, insertBefore ? toCard : toCard.nextSibling)
    }
    function clearDropIndicator() {
      document.querySelectorAll('.drop-indicator').forEach(el => el.remove())
    }
    function onDragEnd(_e: DragEvent) {
      document.querySelectorAll('.dragging').forEach(el => el.classList.remove('dragging'))
      document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'))
      document.querySelectorAll('.strip-dragging').forEach(el => el.classList.remove('strip-dragging'))
      clearDropIndicator()
      dragState = null
    }
    function onDragOver(e: DragEvent, toIdx: number) {
      e.preventDefault(); e.dataTransfer!.dropEffect = 'move'
      if (dragState?.type === 'strip') {
        updateDropIndicator(toIdx, e)
      } else {
        const card = document.getElementById(`strip-${toIdx}`)
        if (card && dragState && dragState.stripIdx !== toIdx) card.classList.add('drag-over')
      }
    }
    function onDragLeave(_e: DragEvent, toIdx: number) {
      if (dragState?.type !== 'strip') {
        const card = document.getElementById(`strip-${toIdx}`)
        if (card) card.classList.remove('drag-over')
      }
    }
    function onDrop(e: DragEvent, toIdx: number) {
      e.preventDefault()
      const card = document.getElementById(`strip-${toIdx}`)
      if (card) card.classList.remove('drag-over')
      if (!dragState) return

      if (dragState.type === 'strip') {
        const fromIdx = dragState.stripIdx
        dragState = null
        clearDropIndicator()
        document.querySelectorAll('.strip-dragging').forEach(el => el.classList.remove('strip-dragging'))

        const fromCard = document.getElementById(`strip-${fromIdx}`)
        const toCard = document.getElementById(`strip-${toIdx}`)
        const listEl = document.getElementById('strips-list')
        if (!fromCard || !toCard || !listEl) { renderAll(); return }

        const insertBefore = e.clientY < toCard.getBoundingClientRect().top + toCard.getBoundingClientRect().height / 2

        // FLIP: snapshot positions of all strip cards before moving
        const allCards = Array.from(listEl.querySelectorAll('.strip-card')) as HTMLElement[]
        const oldRects = new Map<HTMLElement, DOMRect>()
        allCards.forEach(c => oldRects.set(c, c.getBoundingClientRect()))

        // Move in DOM
        listEl.insertBefore(fromCard, insertBefore ? toCard : toCard.nextSibling)

        // Animate each card from its old position to its new position
        allCards.forEach(c => {
          const old = oldRects.get(c)
          if (!old) return
          const dy = old.top - c.getBoundingClientRect().top
          if (Math.abs(dy) > 0.5) {
            c.animate(
              [{ transform: `translateY(${dy}px)` }, { transform: 'translateY(0px)' }],
              { duration: 220, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' }
            )
          }
        })

        // Reorder strips array to match new DOM order
        const [strip] = strips.splice(fromIdx, 1)
        const insertPos = insertBefore
          ? (fromIdx < toIdx ? toIdx - 1 : toIdx)
          : (fromIdx < toIdx ? toIdx : toIdx + 1)
        strips.splice(Math.max(0, Math.min(insertPos, strips.length)), 0, strip)

        modified = true
        setTimeout(() => renderAll(), 230)
        return
      }

      const { stripIdx:fromIdx, cutIdx } = dragState
      if (fromIdx === toIdx) return
      const s = getS()
      const from = strips[fromIdx], to = strips[toIdx]
      const piece = from.cuts[cutIdx]

      const toBuf = to.buf || s.bufOpt
      const usedWithOpt = calcUsed([...to.cuts, piece], toBuf)
      const usedWithMin = calcUsed([...to.cuts, piece], s.bufMin)
      // Prefer min buffer only if it avoids needing a longer strip
      let actualBuf = toBuf
      if (usedWithOpt > to.purchasedLen && usedWithMin <= to.purchasedLen) {
        actualBuf = s.bufMin
      }
      // Block only if the combined cuts won't fit in any available strip length
      if (calcUsed([...to.cuts, piece], actualBuf) > DEFAULT_LEN()) {
        showNotification(`Won't fit — needs ${usedWithMin}mm but longest strip is ${DEFAULT_LEN()}mm`)
        return
      }

      from.cuts.splice(cutIdx, 1)
      to.cuts.push(piece)
      to.buf = actualBuf
      recomputeStrip(from)
      recomputeStrip(to)
      for (let i=strips.length-1; i>=0; i--) { if(strips[i].cuts.length===0) strips.splice(i,1) }
      modified = true; dragState = null; renderAll()
    }

    function changeStripLength(si: number, newLen: number) {
      const strip = strips[si]
      if (!strip) return
      const s = getS()
      const buf = strip.buf || s.bufOpt
      const used = calcUsed(strip.cuts, buf)
      if (newLen < used) {
        showNotification(`Cuts need ${used}mm — can't fit in ${newLen}mm`)
        renderAll()
        return
      }
      strip.purchasedLen = newLen
      strip.remaining = newLen - used
      strip.tight = strip.remaining <= s.maxOffcut
      modified = true
      renderAll()
    }

    function recomputeStrip(strip: any) {
      const s = getS()
      const buf = strip.buf || s.bufOpt
      const used = calcUsed(strip.cuts, buf)
      strip.purchasedLen = AVAIL.find(l => l >= used) || DEFAULT_LEN()
      strip.remaining = strip.purchasedLen - used
      strip.bufs = strip.cuts.map((_: any, i: number) => i < strip.cuts.length-1 ? buf : 0)
      strip.tight = strip.remaining <= s.maxOffcut
      strip.minBufUsed = buf < s.bufOpt
    }

    // ── RENDER: MAIN ─────────────────────────────────────────────────────────────
    function setTab(id: string) {
      activeTab = id
      renderAll()
    }

    function renderAll() {
      const s = getS()
      const main = document.getElementById('main')
      if (!main) return
      if (!strips.length) {
        main.innerHTML = '<div class="empty">Configure panels on the left<br>then press <em>Recalculate cut list</em></div>'
        return
      }

      const totalMM = strips.reduce((a: number,b: any) => a+b.purchasedLen, 0)
      const realWasteMM = strips.reduce((a: number,st: any) => a+st.remaining, 0)
      const wasteP = Math.round(realWasteMM/totalMM*100)
      const tightN = strips.filter((st: any) => st.tight).length
      const minBufN = strips.filter((st: any) => st.minBufUsed).length
      const cost = totalCost()

      const lcAll: Record<number, number> = {}
      for (const st of strips) lcAll[st.purchasedLen]=(lcAll[st.purchasedLen]||0)+1

      const costByProfile: Record<string, number> = {}
      for (const strip of strips) {
        const pid = strip.profileId || 'unknown'
        costByProfile[pid] = (costByProfile[pid]||0) + stripCost(strip)
      }
      const costBreakdown = profiles
        .filter(p => costByProfile[p.id])
        .map(p => `${p.w}×${p.d}: £${(costByProfile[p.id]||0).toFixed(2)}`)
        .join(' · ')

      const profileSummary = profiles.map(p => `${p.w}×${p.d}mm`).join(', ')
      const topbarSub = document.getElementById('topbar-sub')
      if (topbarSub) topbarSub.textContent = `Profiles: ${profileSummary} · mitre joints · drag cuts between strips`

      const usedProfileIds = [...new Set(strips.map((st: any) => st.profileId).filter(Boolean))] as string[]
      usedProfileIds.sort((a,b) => profiles.findIndex(p=>p.id===a) - profiles.findIndex(p=>p.id===b))

      if (activeTab !== 'all' && !usedProfileIds.includes(activeTab)) activeTab = 'all'

      const visibleStrips = activeTab === 'all' ? strips : strips.filter((st: any) => st.profileId===activeTab)

      let html = `
      <div class="stats-row">
        <div class="stat-card">
          <div class="stat-val">${strips.length}</div>
          <div class="stat-lbl">Strips to buy</div>
          <div class="stat-sub" style="line-height:1.6;">`

      for (const pid of usedProfileIds) {
        const prof = profileById(pid)
        const col = profileColour(pid)
        const lc: Record<number, number> = {}
        strips.filter((st: any) => st.profileId===pid).forEach((st: any) => { lc[st.purchasedLen]=(lc[st.purchasedLen]||0)+1 })
        const summary = AVAIL.filter(l => lc[l]).map(l => `${lc[l]}×${l}`).join('+')
        html += `<span style="display:flex;align-items:center;gap:3px;margin-top:1px;">
          <span style="width:6px;height:6px;border-radius:50%;background:${col};flex-shrink:0;"></span>
          <span>${prof?prof.w+'×'+prof.d:'?'}: ${summary}mm</span>
        </span>`
      }
      html += `</div></div>
        <div class="stat-card"><div class="stat-val">${(totalMM/1000).toFixed(2)}m</div><div class="stat-lbl">Total timber</div><div class="stat-sub">${totalMM}mm</div></div>
        <div class="stat-card"><div class="stat-val">${wasteP}%</div><div class="stat-lbl">Offcut waste</div><div class="stat-sub">${realWasteMM}mm total</div></div>
        <div class="stat-card"><div class="stat-val">${tightN}/${strips.length}</div><div class="stat-lbl">Tight strips</div><div class="stat-sub">${minBufN} use min buffer</div></div>
        <div class="stat-card" style="border-color:rgba(212,130,42,0.3);">
          <div class="stat-val" style="color:var(--accent2);">£${cost.toFixed(2)}</div>
          <div class="stat-lbl">Est. timber cost</div>
          <div class="stat-sub" style="line-height:1.5;">${costBreakdown || '—'}</div>
        </div>
      </div>

      <div class="legend">
        ${profiles.filter(p => usedProfileIds.includes(p.id)).map(p => {
          const ci = profiles.indexOf(p)
          const col = PROFILE_COLOURS[ci%PROFILE_COLOURS.length]
          return `<div class="leg"><div class="leg-dot" style="background:${col};"></div>${p.w}×${p.d}mm</div>`
        }).join('')}
        <div class="leg"><div class="leg-dot" style="background:repeating-linear-gradient(135deg,rgba(90,171,143,0.4) 0,rgba(90,171,143,0.4) 3px,rgba(90,171,143,0.15) 3px,rgba(90,171,143,0.15) 8px)"></div>Offcut ✓</div>
        <div class="leg"><div class="leg-dot" style="background:repeating-linear-gradient(135deg,rgba(196,130,74,0.4) 0,rgba(196,130,74,0.4) 3px,rgba(196,130,74,0.15) 3px,rgba(196,130,74,0.15) 8px)"></div>Offcut loose</div>
        <div class="leg"><div style="width:10px;height:10px;background:repeating-linear-gradient(45deg,rgba(255,255,255,0.15) 0,rgba(255,255,255,0.15) 2px,transparent 2px,transparent 5px);border-radius:2px;flex-shrink:0;"></div>Buffer</div>
      </div>

      <div class="algo-note">Strips are profile-specific. Buffer model: N cuts = N−1 inter-cut buffers, no trailing buffer. Buffer uniform per strip — optimal ${s.bufOpt}mm or min ${s.bufMin}mm (★). Offcut target ≤${s.maxOffcut}mm. Brace deduct = 2 × frame W.</div>

      <div class="tabs-bar">
        <button class="tab-btn${activeTab==='all'?' active':''}" onclick="timberPlanner.setTab('all')">
          All profiles <span class="tab-count">${strips.length}</span>
        </button>
        ${usedProfileIds.map(pid => {
          const prof = profileById(pid)
          const col = profileColour(pid)
          const cnt = strips.filter((st: any) => st.profileId===pid).length
          const label = prof ? `${prof.w}×${prof.d}mm` : pid
          return `<button class="tab-btn${activeTab===pid?' active':''}" onclick="timberPlanner.setTab('${pid}')">
            <span class="tab-dot" style="background:${col};"></span>
            ${label} <span class="tab-count">${cnt}</span>
          </button>`
        }).join('')}
      </div>

      <div class="strips-list" id="strips-list">`

      for (const strip of visibleStrips) {
        const si = strips.indexOf(strip)
        const total = strip.purchasedLen
        const waste = strip.remaining
        const cutsDisplay = strip.cuts
          .map((c: any, i: number) => ({...c, origIdx: i}))
          .sort((a: any, b: any) => b.len - a.len)
          .map((c: any, di: number, arr: any[]) => ({...c, buf: di < arr.length - 1 ? (strip.buf || 0) : 0}))
        const sc = stripCost(strip)
        const bufLabel = strip.minBufUsed ? `${strip.buf}mm ★` : `${strip.buf}mm`
        const stripProfile = profileById(strip.profileId)
        const stripProfileLabel = stripProfile ? `${stripProfile.w}×${stripProfile.d}mm` : '?'
        const usedByStrip = calcUsed(strip.cuts, strip.buf || s.bufOpt)

        const wasteStyle = strip.tight
          ? 'background:repeating-linear-gradient(135deg,rgba(90,171,143,0.45) 0,rgba(90,171,143,0.45) 3px,rgba(90,171,143,0.15) 3px,rgba(90,171,143,0.15) 8px);'
          : 'background:repeating-linear-gradient(135deg,rgba(196,130,74,0.35) 0,rgba(196,130,74,0.35) 3px,rgba(196,130,74,0.12) 3px,rgba(196,130,74,0.12) 8px);'

        const lenOptions = AVAIL.map(l => {
          const fits = l >= usedByStrip
          return `<option value="${l}" ${l===total?'selected':''} ${!fits?'disabled':''} style="${!fits?'color:#666;':''}">
            ${l}mm${!fits?' (too short)':''}
          </option>`
        }).join('')
        const isOversize = !AVAIL.includes(total)
        const lenSelectClass = `strip-len-select${isOversize?' oversize':''}`

        let segs='', chips=''
        for (const cut of cutsDisplay) {
          const pct  = (cut.len/total*100).toFixed(3)
          const bpct = (cut.buf/total*100).toFixed(3)
          const showLbl = cut.len/total > 0.06
          const isMinBuf = strip.minBufUsed
          const col = segColour(cut)
          const isBrace = cut.type==='bs'||cut.type==='bl'
          const profile = profileById(cut.profileId)
          const bufAfter = cut.buf > 0 ? ` + ${cut.buf}mm buf` : ' (last cut)'
          const tipText = `${TYPE_LBL[cut.type]}: ${cut.len}mm · ${profile?profile.w+'×'+profile.d+'mm':'?'}${bufAfter} · £${((cut.len/1000)*(cut.pricePerM||0)).toFixed(3)}`
          segs += `<div class="seg" style="width:${pct}%;background:${col};border-right:1px solid rgba(0,0,0,0.2);${isBrace?'opacity:0.75;':''}"
            draggable="true" data-strip="${si}" data-cut="${cut.origIdx}"
            data-tip="${tipText}"
            onmouseenter="timberPlanner.showTip(event,this)" onmouseleave="timberPlanner.hideTip()"
            ondragstart="timberPlanner.onDragStart(event,${si},${cut.origIdx})"
            ondragend="timberPlanner.onDragEnd(event)">
            ${showLbl?`<span class="seg-lbl" style="color:rgba(255,255,255,0.9);">${cut.len}${isMinBuf?'★':''}</span>`:''}
          </div>
          ${cut.buf > 0 ? `<div class="seg-buf" style="width:${bpct}%;" data-tip="Buffer: ${cut.buf}mm" onmouseenter="timberPlanner.showTip(event,this)" onmouseleave="timberPlanner.hideTip()"></div>` : ''}`
          chips += `<span class="chip" style="background:${col}22;color:${col};"
            draggable="true" data-strip="${si}" data-cut="${cut.origIdx}"
            data-tip="${tipText}"
            onmouseenter="timberPlanner.showTip(event,this)" onmouseleave="timberPlanner.hideTip()"
            ondragstart="timberPlanner.onDragStart(event,${si},${cut.origIdx})"
            ondragend="timberPlanner.onDragEnd(event)"
            >${TYPE_LBL[cut.type]} ${cut.len}${isMinBuf?'★':''}</span>`
        }
        if (waste > 0) {
          const wpct=(waste/total*100).toFixed(3)
          const showWL=waste/total>0.04
          segs+=`<div class="seg-waste" style="flex:1;min-width:${wpct}%;${wasteStyle}" data-tip="Offcut: ${waste}mm" onmouseenter="timberPlanner.showTip(event,this)" onmouseleave="timberPlanner.hideTip()">
            ${showWL?`<span class="waste-lbl" style="color:${strip.tight?'#5aab8f':'#c4824a'};">${waste}mm</span>`:''}
          </div>`
          chips+=`<span class="chip" style="background:${strip.tight?'rgba(90,171,143,0.12)':'rgba(196,130,74,0.1)'};color:${strip.tight?'#5aab8f':'#c4824a'};cursor:default;">${waste}mm offcut${strip.tight?' ✓':''}</span>`
        }

        const profileStrips = strips.filter((st: any) => st.profileId===strip.profileId)
        const stripNumLabel = activeTab === 'all'
          ? `STRIP ${strip.num ?? si + 1}`
          : `${stripProfileLabel} · ${strip.localNum ?? profileStrips.indexOf(strip) + 1}/${profileStrips.length}`

        html += `<div class="strip-card${strip.tight?' tight':''}" id="strip-${si}"
          ondragover="timberPlanner.onDragOver(event,${si})" ondragleave="timberPlanner.onDragLeave(event,${si})" ondrop="timberPlanner.onDrop(event,${si})">
          <div class="strip-head">
            <div class="strip-drag-handle" draggable="true"
              ondragstart="timberPlanner.onStripDragStart(event,${si})"
              ondragend="timberPlanner.onDragEnd(event)"
              title="Drag to reorder strip">⠿</div>
            <span class="strip-num">${stripNumLabel}</span>
            <div class="strip-badges">
              <select class="${lenSelectClass}" onchange="timberPlanner.changeStripLength(${si}, parseInt(this.value))"
                data-tip="Change purchased length for this strip"
                onmouseenter="timberPlanner.showTip(event,this)" onmouseleave="timberPlanner.hideTip()">
                ${lenOptions}
              </select>
              <span class="sbadge sb-cost">£${sc.toFixed(2)}</span>
              ${strip.minBufUsed?`<span class="sbadge sb-minbuf">buf ${bufLabel}</span>`:`<span class="sbadge" style="background:rgba(255,255,255,0.04);color:var(--ink3);">buf ${bufLabel}</span>`}
              ${strip.tight?`<span class="sbadge sb-tight">offcut ${waste}mm ✓</span>`:`<span class="sbadge sb-loose">offcut ${waste}mm</span>`}
            </div>
          </div>
          <div class="vis-wrap"><div class="vis-bar">${segs}</div></div>
          <div class="chips-row">${chips}</div>
        </div>`
      }

      html += '</div>'
      main.innerHTML = html
      const modIndicator = document.getElementById('mod-indicator')
      if (modIndicator) modIndicator.style.display = modified ? 'block' : 'none'
    }

    // ── NOTIFICATIONS / TOOLTIP ───────────────────────────────────────────────────
    function showNotification(msg: string) {
      const el = document.createElement('div')
      el.style.cssText = `position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--bg4);border:1px solid var(--warn);color:var(--ink);font-family:var(--mono);font-size:11px;padding:8px 16px;border-radius:4px;z-index:9999;transition:opacity 0.3s;`
      el.textContent = msg
      document.body.appendChild(el)
      setTimeout(() => { el.style.opacity='0'; setTimeout(() => el.remove(), 300) }, 2500)
    }
    const tooltip = document.getElementById('tooltip')!
    function showTip(e: MouseEvent, el: HTMLElement) {
      tooltip.textContent = el.dataset.tip || ''
      tooltip.style.opacity = '1'
      moveTip(e)
      el.addEventListener('mousemove', moveTip as EventListener)
    }
    function moveTip(e: MouseEvent) {
      tooltip.style.left = (e.clientX+12)+'px'
      tooltip.style.top  = (e.clientY-28)+'px'
    }
    function hideTip() { tooltip.style.opacity = '0' }

    // ── PRESETS ───────────────────────────────────────────────────────────────────
    function loadPresets() {
      try { return JSON.parse(localStorage.getItem(PRESET_KEY) || 'null') || [] } catch(e) { return [] }
    }
    function savePresetsToStorage(p: any[]) { localStorage.setItem(PRESET_KEY, JSON.stringify(p)) }

    function savePreset() {
      const nameEl = document.getElementById('preset-name') as HTMLInputElement
      const name = nameEl.value.trim()
      if (!name) { nameEl.focus(); showNotification('Enter a name for this preset first'); return }
      if (!panels.length) { showNotification('No panels to save'); return }
      const presets = loadPresets()
      const existing = presets.findIndex((p: any) => p.name===name)
      const entry = {
        name,
        panels: JSON.parse(JSON.stringify(panels)),
        strips: JSON.parse(JSON.stringify(strips)),
        savedAt: Date.now(),
        count: panels.reduce((s,p) => s+p.qty, 0),
        hasManualChanges: modified,
      }
      if (existing>=0) { presets[existing]=entry; showNotification(`Preset "${name}" updated`) }
      else { presets.unshift(entry); showNotification(`Preset "${name}" saved`) }
      savePresetsToStorage(presets)
      nameEl.value = ''
      renderPresetList()
    }
    function loadPreset(name: string) {
      const entry = loadPresets().find((p: any) => p.name===name)
      if (!entry) return
      panels = JSON.parse(JSON.stringify(entry.panels))
      sanitisePanelProfiles()
      renderPanelsList()
      if (entry.strips && entry.strips.length) {
        strips = JSON.parse(JSON.stringify(entry.strips))
        modified = entry.hasManualChanges || false
        activeTab = 'all'
        renderAll()
        showNotification(`Loaded preset "${name}"${entry.hasManualChanges ? ' (includes manual overrides)' : ''}`)
      } else {
        runCalc()
        showNotification(`Loaded preset "${name}"`)
      }
    }
    function deletePreset(name: string) {
      confirm2(`Delete preset <strong>"${name}"</strong>? This can't be undone.`, () => {
        savePresetsToStorage(loadPresets().filter((p: any) => p.name!==name))
        renderPresetList()
        showNotification(`Preset "${name}" deleted`)
      })
    }
    function renderPresetList() {
      const presets = loadPresets()
      const el = document.getElementById('preset-list')
      if (!el) return
      if (!presets.length) { el.innerHTML='<div class="preset-empty">No saved presets yet</div>'; return }
      el.innerHTML = presets.map((p: any) => {
        const dateStr = new Date(p.savedAt).toLocaleDateString('en-GB',{day:'numeric',month:'short'})
        const sn = p.name.replace(/"/g,'&quot;').replace(/'/g,'&#39;')
        const manualTag = p.hasManualChanges
          ? `<span style="font-size:9px;color:var(--accent2);padding:1px 4px;background:rgba(232,200,122,0.1);border-radius:2px;">edited</span>`
          : ''
        return `<div class="preset-row">
          <span class="preset-row-name" title="${sn}">${p.name}</span>
          <span class="preset-row-meta">${p.count} panels · ${dateStr}</span>
          ${manualTag}
          <button class="preset-loadbtn" onclick="timberPlanner.loadPreset('${sn}')">Load</button>
          <button class="preset-delbtn" onclick="timberPlanner.deletePreset('${sn}')" title="Delete">×</button>
        </div>`
      }).join('')
    }

    // ── RESET ─────────────────────────────────────────────────────────────────────
    function confirmReset() {
      confirm2('Clear all panels and start from scratch?', () => {
        panels=[]; strips=[]; modified=false
        renderPanelsList(); renderAll()
        showNotification('Panels cleared')
      })
    }

    // ── CONFIRM ───────────────────────────────────────────────────────────────────
    function confirm2(msg: string, cb: () => void) {
      const msgEl = document.getElementById('confirm-msg')
      if (msgEl) msgEl.innerHTML = msg
      document.getElementById('confirm-overlay')?.classList.add('visible')
      const okBtn = document.getElementById('confirm-ok-btn')
      if (okBtn) okBtn.onclick = () => { closeConfirm(); cb() }
    }
    function closeConfirm() { document.getElementById('confirm-overlay')?.classList.remove('visible') }
    document.getElementById('confirm-overlay')?.addEventListener('click', e => {
      if (e.target === e.currentTarget) closeConfirm()
    })

    // ── CALC ──────────────────────────────────────────────────────────────────────
    function runCalc() {
      const s = getS()
      const allPieces: any[] = []
      for (const p of panels) allPieces.push(...getPanelPieces(p,s).all)
      strips = optimise(allPieces, s)
      modified = false
      activeTab = 'all'
      renderAll()
    }

    function safeRunCalc() {
      if (modified) {
        confirm2('You have manual strip edits that will be lost. Recalculate anyway?', runCalc)
      } else {
        runCalc()
      }
    }

    // ── EXPOSE TO WINDOW FOR INLINE HANDLERS ──────────────────────────────────────
    ;(window as any).timberPlanner = {
      savePreset, addProfile, deleteProfile, updateProfile,
      addLength, removeLength,
      changeQty, deletePanel, addPanel, setPanelProfile,
      safeRunCalc, confirmReset, closeConfirm,
      loadPreset, deletePreset,
      setTab, changeStripLength,
      onDragStart, onStripDragStart, onDragEnd, onDragOver, onDragLeave, onDrop,
      showTip, hideTip, moveTip,
    }

    // ── INIT ──────────────────────────────────────────────────────────────────────
    loadProfilesFromStorage()
    loadLengthsFromStorage()
    renderProfilesList()
    renderLengthsList()
    renderPresetList()
    runCalc()

    return () => {
      delete (window as any).timberPlanner
    }
  }, [])

  return (
    <>
      <div className="topbar">
        <div style={{display:'flex',alignItems:'baseline',gap:'8px'}}>
          <span className="topbar-title">Timber Cut Planner</span>
          <span className="topbar-sub" id="topbar-sub">mitre joints · drag cuts between strips</span>
        </div>
        <div className="topbar-right">
          <span id="mod-indicator" style={{fontSize:'10px',color:'var(--ink3)',display:'none'}}>● unsaved changes</span>
        </div>
      </div>

      <div className="layout">
        <div className="sidebar">
          <div className="sidebar-scroll">

            {/* PRESETS */}
            <span className="section-label">Presets</span>
            <div className="presets-block">
              <div className="preset-save-row">
                <input className="preset-name-input" id="preset-name" type="text" placeholder="Name this panel set…" maxLength={40} />
                <button className="preset-savebtn" onClick={() => (window as any).timberPlanner?.savePreset()}>Save</button>
              </div>
              <div className="preset-list" id="preset-list"></div>
            </div>

            {/* TIMBER PROFILES */}
            <span className="section-label section-gap">Timber profiles</span>
            <div className="settings-block">
              <div style={{fontSize:'9px',color:'var(--ink3)',marginBottom:'8px',lineHeight:'1.6'}}>Define your available sizes. Each panel picks a <em>frame</em> and <em>brace</em> profile. Frame width drives brace deduct (2×W).</div>
              <div style={{display:'grid',gridTemplateColumns:'8px 59px 59px 60px 16px',gap:'4px',marginBottom:'5px',padding:'0 7px'}}>
                <span style={{paddingLeft: '6px', gridColumnStart:2, fontSize:'9px',color:'var(--ink3)'}}>W</span>
                <span style={{paddingLeft: '6px', fontSize:'9px',color:'var(--ink3)'}}>D</span>
                <span style={{paddingLeft: '6px', fontSize:'9px',color:'var(--ink3)'}}>£/m</span>
                <span></span>
              </div>
              <div className="profiles-list" id="profiles-list"></div>
              <div className="add-profile-row">
                <input className="pinput pinput-w" id="np-w" type="number" placeholder="W" min={1} max={200} />
                <span className="psep">×</span>
                <input className="pinput pinput-d" id="np-d" type="number" placeholder="D" min={1} max={200} />
                <span className="psep">£</span>
                <input className="pinput pinput-p" id="np-p" type="number" placeholder="0.00" min={0} step={0.01} />
                <button className="add-profile-btn" onClick={() => (window as any).timberPlanner?.addProfile()}>+ Add</button>
              </div>
            </div>

            {/* AVAILABLE LENGTHS */}
            <span className="section-label section-gap">Available lengths</span>
            <div className="settings-block">
              <div style={{fontSize:'9px',color:'var(--ink3)',marginBottom:'8px',lineHeight:'1.6'}}>Lengths you can buy. The longest is used as the default strip length.</div>
              <div className="profiles-list" id="lengths-list"></div>
              <div className="add-profile-row">
                <input
                  className="pinput"
                  id="nl-val"
                  type="number"
                  placeholder="mm"
                  min={100}
                  max={9999}
                  style={{width:'70px'}}
                  onKeyDown={(e) => { if (e.key === 'Enter') (window as any).timberPlanner?.addLength() }}
                />
                <span className="psep">mm</span>
                <button className="add-profile-btn" onClick={() => (window as any).timberPlanner?.addLength()}>+ Add</button>
              </div>
            </div>

            {/* CUT SETTINGS */}
            <span className="section-label section-gap">Cut settings</span>
            <div className="settings-block">
              <div className="srow">
                <span className="slabel">Optimal / min buffer (mm)</span>
                <div className="buffer-pair">
                  <input className="sinput" id="s-bufOpt" type="number" defaultValue={25} min={0} max={50} title="Optimal buffer" />
                  <span className="buf-sep">→</span>
                  <input className="sinput" id="s-bufMin" type="number" defaultValue={15} min={0} max={50} title="Min buffer" />
                </div>
              </div>
              <div className="srow">
                <span className="slabel">Single brace &gt; (mm)</span>
                <input className="sinput" id="s-braceThresh" type="number" defaultValue={501} min={0} max={2000} />
              </div>
              <div className="srow">
                <span className="slabel">Double brace &gt; (mm)</span>
                <input className="sinput" id="s-brace2Thresh" type="number" defaultValue={1200} min={0} max={3000} />
              </div>
              <div className="srow">
                <span className="slabel">Target max offcut (mm)</span>
                <input className="sinput" id="s-maxOffcut" type="number" defaultValue={100} min={0} max={500} />
              </div>
            </div>

            {/* PANELS */}
            <span className="section-label section-gap">Panels</span>
            <div id="panels-list"></div>
            <div className="add-form">
              <span className="section-label" style={{marginBottom:'4px'}}>Add panel</span>
              <div className="add-row">
                <input className="ainput" id="add-w" type="number" placeholder="W mm" />
                <span className="alabel">×</span>
                <input className="ainput" id="add-h" type="number" placeholder="H mm" />
                <span className="alabel">qty</span>
                <input className="ainput" id="add-q" type="number" defaultValue={1} min={1} style={{width:'38px'}} />
                <button className="addbtn" onClick={() => (window as any).timberPlanner?.addPanel()}>+ Add</button>
              </div>
            </div>

          </div>
          <div className="sidebar-foot">
            <button className="calcbtn" onClick={() => (window as any).timberPlanner?.safeRunCalc()}>Recalculate cut list</button>
            <button className="resetbtn" onClick={() => (window as any).timberPlanner?.confirmReset()}>Reset panels</button>
          </div>
        </div>

        <div className="main" id="main">
          <div className="empty">Configure panels on the left<br />then press <em>Recalculate cut list</em></div>
        </div>
      </div>

      <div className="tooltip" id="tooltip"></div>

      <div className="confirm-overlay" id="confirm-overlay">
        <div className="confirm-box">
          <div id="confirm-msg"></div>
          <div className="confirm-btns">
            <button className="confirm-cancel" onClick={() => (window as any).timberPlanner?.closeConfirm()}>Cancel</button>
            <button className="confirm-ok" id="confirm-ok-btn">Confirm</button>
          </div>
        </div>
      </div>
    </>
  )
}
