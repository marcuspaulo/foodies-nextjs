import Link from 'next/link';
import NavLink from './components/main-header/nav-link';

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Page Not Found</h1>
      <p>The requested page could not be found.</p>
      <NavLink href="/">Go back to the home page</NavLink>
    </main>
  );
}
