import React from "react"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import Logo from "../../../images/site-logo.png"

const socials = [
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

const interests = [
  "Android",
  "Java",
  "Command line",
  "Databases",
  "Developer tools",
  "Productivity",
]

// Reverse-chronological by start date. Roles are grouped under each company.
const experience = [
  {
    company: "Amazon",
    period: "Mar 2021 – Present",
    roles: [
      {
        title: "Senior Software Development Engineer",
        dates: "Oct 2025 – Present",
      },
      {
        title: "SDE II",
        dates: "Mar 2021 – Nov 2025",
        description:
          "Backend developer on Fire TV systems, focused on infrastructure and operational excellence. Led the AWS migration for our microservices and drove peak readiness to serve millions of customers within SLA.",
      },
    ],
  },
  {
    company: "Freshworks",
    period: "May 2018 – Feb 2021",
    roles: [
      {
        title: "Senior Software Engineer",
        dates: "Oct 2019 – Feb 2021",
        description:
          "Full-stack developer on Freshdesk, mostly backend and infra. Set up CI/CD and operational readiness for the Solutions microservice serving 4L TPS/min, revamped the solutions module and article versioning, and mentored two engineers.",
      },
      {
        title: "Software Development Engineer",
        dates: "May 2018 – Oct 2019",
      },
    ],
  },
  {
    company: "Tuple.me",
    period: "Apr 2017 – Jan 2021 · Self-employed",
    roles: [
      {
        title: "Developer / Designer",
        description:
          "Built end-to-end products from scratch — Android apps published on the Play Store — to learn about customers, requirements, and UX/UI.",
      },
    ],
  },
  {
    company: "Zoho Corporation",
    period: "Nov 2015 – May 2018",
    roles: [
      {
        title: "Member of Technical Staff",
        dates: "May 2016 – May 2018",
        description:
          "Full-stack developer on O365 Manager Plus (ManageEngine). Improved performance with multithreaded data gathering and optimised disk/CPU usage, built the Office 365 management module, and owned the release cycle.",
      },
      {
        title: "Project Trainee",
        dates: "Nov 2015 – May 2016",
      },
    ],
  },
  {
    company: "The Hindu",
    period: "Mar 2014 – Jun 2014",
    roles: [
      {
        title: "Summer Intern · Android Developer",
      },
    ],
  },
]

const About = () => (
  <main className="mx-auto max-w-3xl px-5 pb-24 pt-28">
    <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
      <img
        src={Logo}
        alt="Code From Dude logo"
        className="h-24 w-24 shrink-0"
      />
      <div className="mt-4 sm:mt-0">
        <h1 className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
          Hey, I&rsquo;m Gokul Prabhu
        </h1>
        <p className="mt-2 text-lg text-muted">Software developer</p>
      </div>
    </div>

    <div className="markdown prose prose-lg mt-10 max-w-none">
      <p>
        I&rsquo;m a software developer who enjoys building things for the web
        and Android, and writing about what I learn along the way. This blog,{" "}
        <strong>Code From Dude</strong>, is where I share practical notes,
        tutorials, and the occasional &ldquo;today I learned&rdquo; on
        programming, tooling, and developer productivity.
      </p>
      <p>
        I&rsquo;ve shipped Android apps on the Play Store, contributed to open
        source, and built developer tools and libraries. I care about clean
        code, sharp command-line workflows, and making complex things simple.
      </p>
    </div>

    <section className="mt-10">
      <h2 className="text-sm font-bold uppercase tracking-wide text-muted">
        What I write about
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {interests.map(item => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    </section>

    <section className="mt-10">
      <h2 className="text-sm font-bold uppercase tracking-wide text-muted">
        Find me online
      </h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {socials.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Icon size={18} />
            {label}
          </a>
        ))}
      </div>
    </section>

    <section className="mt-14">
      <h2 className="mb-6 text-sm font-bold uppercase tracking-wide text-muted">
        Experience
      </h2>
      <div className="space-y-4">
        {experience.map(company => (
          <article key={company.company} className="card p-6">
            <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
              <h3 className="text-lg font-bold leading-tight tracking-tight">
                {company.company}
              </h3>
              <span className="font-mono text-xs tracking-wide text-muted sm:ml-auto">
                {company.period}
              </span>
            </header>
            <ol className="relative mt-5 ml-1 border-l border-border">
              {company.roles.map(role => (
                <li
                  key={role.title}
                  className="ml-5 pb-5 last:pb-0"
                >
                  <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                  <p className="font-medium text-accent">{role.title}</p>
                  {role.dates && (
                    <p className="mt-0.5 font-mono text-xs tracking-wide text-muted">
                      {role.dates}
                    </p>
                  )}
                  {role.description && (
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {role.description}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </section>
  </main>
)

export default About
