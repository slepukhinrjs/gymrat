import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="p-8 flex items-center justify-between uppercase  tracking-wider">
      <h1 className="text-2xl font-bold hover:text-teal-500">
        <Link to="/">GymRat</Link>
      </h1>
      <nav className="flex gap-8">
        <span className="hover:text-teal-500">
          <Link to="/program">Program</Link>
        </span>
        <span className="hover:text-teal-500">
          <Link to="/about">About</Link>
        </span>
      </nav>
    </header>
  );
}
