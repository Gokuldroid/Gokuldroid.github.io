import { Link } from "gatsby"
import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import ThemeToggle from "@components/shared/theme-toggle"
import Logo from "../../../images/site-logo.png"

const navLinks = [
  { to: "/", label: "Blog" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
]

const NavItems = ({ onClick }) =>
  navLinks.map(({ to, label }) => (
    <Link
      key={to}
      to={to}
      onClick={onClick}
      activeClassName="!text-text"
      className="text-xs font-semibold uppercase text-muted transition-colors hover:text-text"
    >
      {label}
    </Link>
  ))

const Header = () => {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
        <Link
          to="/"
          onClick={close}
          className="flex items-center gap-2.5 font-semibold"
        >
          <img src={Logo} alt="" className="h-7 w-7" />
          <span className="text-sm">
            CODE <span className="text-accent">/</span> FROM{" "}
            <span className="text-accent">/</span> DUDE
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-7 md:flex">
          <NavItems />
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-lg bg-surface-2 text-muted transition-colors hover:text-text"
          >
            {open ? <FaTimes size={15} /> : <FaBars size={15} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col border-t border-border bg-bg px-5 py-3 md:hidden">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={close}
              className="border-b border-border px-1 py-3 text-sm font-medium text-muted transition-colors last:border-0 hover:text-accent"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header
