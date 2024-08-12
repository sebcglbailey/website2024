import pageStyles from '../page.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={pageStyles.pageContainer}>
      <h1>Education</h1>
      {children}
    </div>
  );
}