import type { Metadata } from 'next';

import pageStyles from '../../page.module.css';

export const metadata: Metadata = {
  title: "Sebastian Bailey | ClearScore Design System",
  description: "A case study on ClearScore's new Design System: Slate. Building and leading on a brand new multi-brand, multi-platform Design System from the ground up in a short space of time, creating true impact and efficiency improvements across a global team.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={pageStyles.pageContainer}>
      <h1>ClearScore Design System</h1>
      {children}
    </div>
  );
}