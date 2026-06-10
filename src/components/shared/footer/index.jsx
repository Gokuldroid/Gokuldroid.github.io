import React from "react"
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"

const links = [
  {
    href: "https://www.linkedin.com/in/gokul-prabhu-536176102/",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  { href: "https://github.com/Gokuldroid/", label: "GitHub", Icon: FaGithub },
  {
    href: "https://www.instagram.com/gokul_supersaiyan/",
    label: "Instagram",
    Icon: FaInstagram,
  },
]

const Footer = () => (
  <footer className="border-t border-border">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 sm:flex-row sm:justify-between">
      <div className="flex items-center gap-5">
        {links.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
      <p className="text-sm text-muted">© 2022, Made by Gokulprabhu</p>
    </div>
  </footer>
)

export default Footer
