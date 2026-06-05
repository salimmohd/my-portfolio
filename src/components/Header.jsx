export default function Header() {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="text-2xl font-semibold tracking-[0.18em] uppercase text-sky-300">
        Salim
      </div>
      <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
        <a className="transition hover:text-sky-300" href="#home">
          Home
        </a>
        <a className="transition hover:text-sky-300" href="#about">
          About
        </a>
        <a className="transition hover:text-sky-300" href="#education">
          Education
        </a>
        <a className="transition hover:text-sky-300" href="#company">
          Company
        </a>
        <a className="transition hover:text-sky-300" href="#projects">
          Projects
        </a>
        <a className="transition hover:text-sky-300" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  )
}


