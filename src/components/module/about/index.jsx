import React from "react"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { FiArrowUpRight } from "react-icons/fi"
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
  <main className="page-frame about-page">
    <header className="profile-masthead">
      <div className="profile-copy">
        <p className="page-kicker">About / Gokul Prabhu</p>
        <h1>
          I build useful software and write down what the work teaches me.
        </h1>
        <p className="profile-deck">
          Software engineer, product builder, and the person behind Code From
          Dude.
        </p>
      </div>
      <div className="profile-stamp">
        <img src={Logo} alt="Code From Dude logo" />
        <div>
          <strong>Gokul Prabhu</strong>
          <span>Software developer</span>
        </div>
      </div>
    </header>

    <div className="profile-body">
      <section className="profile-note" aria-labelledby="profile-note-heading">
        <p className="section-label">A short introduction</p>
        <h2 id="profile-note-heading">
          Engineering is as much about judgment as it is about code.
        </h2>
        <div className="profile-prose">
          <p>
            I enjoy building for the web and Android, and writing about what I
            learn along the way. Code From Dude is where I share practical
            notes, tutorials, and ideas about programming, tooling, and
            developer productivity.
          </p>
          <p>
            I&rsquo;ve shipped Android apps, contributed to open source, and
            built developer tools and libraries. I care about clean code, sharp
            command-line workflows, and making complex things understandable.
          </p>
        </div>
      </section>

      <aside className="profile-details">
        <section>
          <p className="section-label">What I write about</p>
          <div className="profile-interests">
            {interests.map((item) => (
              <span className="tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>
        <section>
          <p className="section-label">Elsewhere</p>
          <div className="profile-socials">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon aria-hidden="true" />
                <span>{label}</span>
                <FiArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>
      </aside>
    </div>

    <section className="experience" aria-labelledby="experience-heading">
      <header className="section-heading">
        <p>Work history</p>
        <h2 id="experience-heading">Experience</h2>
      </header>
      <div className="experience-list">
        {experience.map((company) => (
          <article key={company.company} className="experience-entry">
            <header>
              <h3>{company.company}</h3>
              <span>{company.period}</span>
            </header>
            <ol>
              {company.roles.map((role) => (
                <li key={role.title}>
                  <div className="role-heading">
                    <h4>{role.title}</h4>
                    {role.dates && <span>{role.dates}</span>}
                  </div>
                  {role.dates && (
                    <span className="role-date-mobile">{role.dates}</span>
                  )}
                  {role.description && <p>{role.description}</p>}
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
