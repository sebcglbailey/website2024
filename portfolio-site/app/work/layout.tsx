import pageStyles from '../page.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={pageStyles.pageContainer}>
      <h1>Work</h1>
      {children}
    </div>
  );
}