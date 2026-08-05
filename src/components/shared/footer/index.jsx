import React from "react"
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"

const links = [
  {
    href: "https://www.linkedin.com/in/gokul-prabhu-supersaiyan/",
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
    <div className="mx-auto grid max-w-5xl gap-8 px-5 py-10 sm:grid-cols-[1fr_auto] sm:items-end">
      <div>
        <p className="text-sm font-bold uppercase">Code from Dude</p>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
          Engineering, systems, and the decisions behind durable work.
        </p>
      </div>
      <div className="flex items-center gap-5 sm:justify-end">
        {links.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-text"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
      <p className="text-xs text-muted sm:col-span-2">
        © {new Date().getFullYear()}, Gokul Prabhu
      </p>
    </div>
  </footer>
)

export default Footer
