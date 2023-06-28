export default function Header() {
  return (
    <header className="p-8 bg-red-500 flex items-center justify-between">
      <h1 className="text-xl">
        <a href="#">GymRat</a>
      </h1>
      <nav className="flex gap-8">
        <span>
          <a href="#">Program</a>
        </span>
        <span>
          <a href="#">About</a>
        </span>
      </nav>
    </header>
  );
}
