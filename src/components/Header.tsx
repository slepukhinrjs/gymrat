export default function Header() {
  return (
    <header className="p-8 flex items-center justify-between uppercase  tracking-wider">
      <h1 className="text-2xl font-bold hover:text-teal-500">
        <a href="#">GymRat</a>
      </h1>
      <nav className="flex gap-8">
        <span className="hover:text-teal-500">
          <a href="#">Program</a>
        </span>
        <span className="hover:text-teal-500">
          <a href="#">About</a>
        </span>
      </nav>
    </header>
  );
}
