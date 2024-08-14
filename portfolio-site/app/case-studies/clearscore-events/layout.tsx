import type { Metadata } from 'next';

import pageStyles from '../../page.module.css';

export const metadata: Metadata = {
  title: "Sebastian Bailey | ClearScore Events",
  description: "",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={pageStyles.pageContainer}>
      <h1>ClearScore Events</h1>
      {children}
    </div>
  );
}