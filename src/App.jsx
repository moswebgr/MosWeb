import mosweb from './assets/mosweb.jpg'
import './App.css'

const suiteApps = [
  {
    name: 'GridForge',
    description: 'Plan your schedule with calendar views, event management, and import/export tools.',
  },
  {
    name: 'SlideSpark',
    description: 'Create and edit presentations, arrange slides, and present your ideas.',
  },
  {
    name: 'PlanPilot',
    description: 'Organize tasks, set due dates, prioritize work, and track progress.',
  },
  {
    name: 'DataNest',
    description: 'Manage structured records with custom fields, tables, and CSV import/export.',
  },
  {
    name: 'MailNest',
    description: 'A mail workspace with folder views, message composition, local drafts, and Outlook connection controls.',
  },
]

function App() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={mosweb} className="mosweb-logo" alt="MosWeb logo" />
        </div>
        <div>
          <h1>Welcome to MosWeb</h1>
          <p className="hero-subtitle">
            We build modern web applications and useful digital experiences.
          </p>
        </div>
      </section>

      <div className="ticks" aria-hidden="true"></div>

      <section id="portfolio" aria-labelledby="portfolio-title">
        <div className="portfolio-heading">
          <span className="eyebrow">SELECTED PROJECT</span>
          <h2 id="portfolio-title">Our Works</h2>
          <p>Tools and digital products designed to make everyday work simpler.</p>
        </div>

        <article className="project-card">
          <div className="project-mark" aria-hidden="true">
            <span className="mark-tile mark-blue"></span>
            <span className="mark-tile mark-green"></span>
            <span className="mark-tile mark-yellow"></span>
            <span className="mark-tile mark-red"></span>
          </div>
          <div className="project-content">
            <div className="project-meta">
              <span className="project-type">PRODUCTIVITY SUITE</span>
              <span className="project-status">In active development</span>
            </div>
            <h3>MosSuite</h3>
            <p className="project-description">
              MosSuite is a collection of free, open-source, browser-based productivity
              apps brought together in one workspace. It aims to give people practical
              tools for planning, creating presentations, organizing information, and
              working with email—all with a consistent, responsive experience.
            </p>

            <div className="app-list" aria-label="MosSuite applications">
              {suiteApps.map((app) => (
                <div className="suite-app" key={app.name}>
                  <h4>{app.name}</h4>
                  <p>{app.description}</p>
                </div>
              ))}
            </div>

            <p className="project-note">
              The suite is evolving; some features run locally in the browser, while
              integrations such as Outlook require valid provider configuration.
            </p>

            <div className="project-links">
              <a
                className="project-link project-link-primary"
                href="https://moswebgr.github.io/Office/"
                target="_blank"
                rel="noreferrer"
              >
                Explore MosSuite <span aria-hidden="true">↗</span>
              </a>
              <a
                className="project-link"
                href="https://github.com/moswebgr/Office"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="button-icon" aria-hidden="true" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.7.08-.69.08-.69 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.29-2.62 5.24-5.11 5.51.4.35.75 1.02.75 2.06V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z" />
                </svg>
                View source
              </a>
            </div>
          </div>
        </article>
      </section>

      <div className="ticks" aria-hidden="true"></div>

      <section id="social">
        <svg className="icon" role="presentation" aria-hidden="true">
          <use href="/icons.svg#social-icon"></use>
        </svg>
        <h2>Connect with us</h2>
        <p>Follow MosWeb and explore our work.</p>
        <ul>
          <li>
            <a href="https://github.com/moswebgr" target="_blank" rel="noreferrer">
              <svg className="button-icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#github-icon"></use>
              </svg>
              GitHub
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <svg className="button-icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#facebook-icon"></use>
              </svg>
              Facebook
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <svg className="button-icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#instagram-icon"></use>
              </svg>
              Instagram
            </a>
          </li>
        </ul>
      </section>

      <div className="ticks" aria-hidden="true"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
