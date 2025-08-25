export default function Navbar() {
  return (
    <nav className="border border-red-200 w-full bg-background text-foreground px-6 py-4 flex items-center justify-between">
      {/* Logo / Name */}
      <div className="text-xl font-bold">Temp navbar</div>

      {/* Links */}
      <ul className="flex space-x-6 text-sm font-medium">
        <li><a href="#about" className="hover:text-red-400">About</a></li>
        <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
  );
}