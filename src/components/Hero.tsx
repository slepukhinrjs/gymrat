export default function Hero() {
  return (
    <main className="flex-1 p-8 flex items-center">
      <div className="p-8 max-w-sm flex flex-col gap-12 items-start lg:ml-32">
        <h2 className="text-7xl lg:text-8xl">Work. Dream. Repeat</h2>
        <p className="text-xl">Build yourself. We know how</p>
        <button className="inline-block px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-700">
          Start Now
        </button>
      </div>
    </main>
  );
}
