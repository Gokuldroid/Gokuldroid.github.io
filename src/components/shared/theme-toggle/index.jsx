import React, { useEffect, useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa"

// Reads the theme the no-flash script (gatsby-ssr.js) already applied, then
// keeps <html>.dark and localStorage in sync on toggle.
const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"))
    setMounted(true)
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle("dark", next)
    try {
      localStorage.setItem("theme", next ? "dark" : "light")
    } catch (e) {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle theme"
      className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted transition-colors hover:text-accent hover:border-accent"
    >
      {/* Avoid an icon mismatch before we've read the real theme */}
      {mounted && isDark ? <FaSun size={15} /> : <FaMoon size={15} />}
    </button>
  )
}

export default ThemeToggle
