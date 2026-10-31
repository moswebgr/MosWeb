import { useEffect, useState } from 'react'
import mosweb from './assets/mosweb.jpg'
import './App.css'

const logoBase = 'https://raw.githubusercontent.com/moswebgr/Office/main/'

const projects = [
  { name: 'GridForge', filter: 'planning', category: 'CALENDAR & PLANNING', description: 'A clearer way to organize events, schedules, and the moving parts of your week.', logo: `${logoBase}gridforge.png`, tone: 'blue' },
  { name: 'SlideSpark', filter: 'creative', category: 'PRESENTATIONS', description: 'Shape ideas into presentations, organize slides, and share your message with confidence.', logo: `${logoBase}SlideSpark.png`, tone: 'orange' },
  { name: 'DataNest', filter: 'data', category: 'DATA & ORGANIZATION', description: 'Keep structured information organized with flexible records, tables, and CSV tools.', logo: `${logoBase}datanest-removebg-preview.png`, tone: 'purple' },
  { name: 'MailNest', filter: 'email', category: 'EMAIL WORKSPACE', description: 'A focused mail workspace with folders, message composition, and local drafts.', logo: `${logoBase}mailnest.jpg`, tone: 'pink' },
]

function Arrow() {
  return <span aria-hidden="true" className="arrow">↗</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [projectQuery, setProjectQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  const [scrollProgress, setScrollProgress] = useState(0)

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = activeFilter === 'all' || project.filter === activeFilter
    const query = projectQuery.trim().toLowerCase()
    const matchesQuery = !query || `${project.name} ${project.category} ${project.description}`.toLowerCase().includes(query)
    return matchesFilter && matchesQuery
  })

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="reading-progress" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="MosWeb home" onClick={closeMenu}>
          <img src={mosweb} alt="" />
          <span>MOS<span className="brand-accent">WEB</span></span>
        </a>
        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="fullscreen-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
      </header>
      <div
        id="fullscreen-menu"
        className={`fullscreen-menu ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="fullscreen-menu-inner">
          <div className="menu-eyebrow">MOSWEB / NAVIGATION</div>
          <nav className="fullscreen-menu-links" aria-label="Main navigation">
            <a href="#top" onClick={closeMenu}><span>01</span> Home <Arrow /></a>
            <a href="#work" onClick={closeMenu}><span>02</span> Work <Arrow /></a>
            <a href="#about" onClick={closeMenu}><span>03</span> About <Arrow /></a>
            <a href="#process" onClick={closeMenu}><span>04</span> Approach <Arrow /></a>
          </nav>
          <div className="fullscreen-menu-bottom">
            <span>OPEN SOURCE. BUILT FOR REAL LIFE.</span>
            <a href="mailto:basilismoskofidis@gmail.com" onClick={closeMenu}>Let’s talk <Arrow /></a>
          </div>
        </div>
      </div>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="availability"><span className="availability-dot" /> INDEPENDENT DIGITAL STUDIO</div>
            <h1>I build digital<br /><span>things that matter.</span></h1>
            <p className="hero-lede">I specialize in building modern web applications and open-source software, creating practical digital tools with clear interfaces and real functionality.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my projects <Arrow /></a>
              <a className="text-link" href="mailto:basilismoskofidis@gmail.com">Start a conversation <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract geometric artwork representing digital ideas" role="img">
            <div className="art-grid" />
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core"><img src={mosweb} alt="MosWeb logo" /></div>
            <div className="art-chip chip-one">DESIGN</div>
            <div className="art-chip chip-two">BUILD</div>
            <div className="art-chip chip-three">REFINE</div>
            <div className="art-spark">✳</div>
          </div>
          <div className="hero-bottom">
            <span>OPEN SOURCE. BUILT FOR REAL LIFE.</span>
            <a href="#work">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
          </div>
        </section>

        <section className="intro section-wrap" id="about">
          <div className="section-label"><span>01</span> / ABOUT ME</div>
          <div className="intro-content">
            <h2>Open-source software and web apps, built <span>to be useful, accessible, and easy to use.</span></h2>
            <p>I’m Vasilis Moskofidis, an independent developer focused on web applications and open-source projects. I specialize in building practical software, user-friendly interfaces, and connected digital tools. My goal is to make useful technology more accessible by creating projects people can explore, use, and contribute to.</p>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-topline">
            <div>
              <div className="section-label"><span>02</span> / SELECTED WORK</div>
              <h2>Ideas, made <span>real.</span></h2>
            </div>
            <p>A growing collection of open-source projects and useful digital tools.</p>
          </div>

          <article className="featured-project">
            <div className="featured-visual">
              <div className="suite-window">
                <div className="window-top"><div className="window-dots"><i /><i /><i /></div><span>mossuite / workspace</span><span className="window-menu">•••</span></div>
                <div className="suite-preview">
                  <aside className="preview-sidebar"><div className="preview-logo"><b>m</b><span>mos<span>suite</span></span></div><div className="preview-nav active">◫ <span>Overview</span></div><div className="preview-nav">▦ <span>Calendar</span></div><div className="preview-nav">✓ <span>Tasks</span></div><div className="preview-nav">▤ <span>Presentations</span></div><div className="preview-nav">✉ <span>Mail</span></div><div className="preview-sidebar-bottom">YOUR WORKSPACE</div></aside>
                  <div className="preview-main"><div className="preview-greeting">YOUR WORKSPACE <span>↗</span></div><h4>Make room for<br />great work.</h4><div className="preview-cards"><div className="mini-card mini-blue"><img src={`${logoBase}gridforge.png`} alt="" /><span>GridForge</span><small>Calendar</small></div><div className="mini-card mini-yellow"><img src={`${logoBase}SlideSpark.png`} alt="" /><span>SlideSpark</span><small>Presentations</small></div><div className="mini-card mini-purple"><img src={`${logoBase}datanest-removebg-preview.png`} alt="" /><span>DataNest</span><small>Data</small></div><div className="mini-card mini-pink"><img src={`${logoBase}mailnest.jpg`} alt="" /><span>MailNest</span><small>Email</small></div></div></div>
                </div>
              </div>
              <div className="visual-caption">ONE WORKSPACE. MANY POSSIBILITIES.</div>
            </div>
            <div className="featured-info">
              <div className="project-kicker"><span className="project-dot" /> OPEN-SOURCE PRODUCT</div>
              <h3>MosSuite</h3>
              <p>A collection of free, open-source productivity apps brought together in one browser-based workspace. Built around a simple idea: useful tools should be accessible, connected, and easy to use.</p>
              <div className="tag-row"><span>Product design</span><span>Web applications</span><span>Open source</span></div>
              <a className="button button-light" href="https://moswebgr.github.io/Office/" target="_blank" rel="noreferrer">Explore MosSuite <Arrow /></a>
              <a className="source-link" href="https://github.com/moswebgr/Office" target="_blank" rel="noreferrer">View source on GitHub <Arrow /></a>
            </div>
          </article>

          <div className="project-grid-heading"><span>INSIDE MOSSUITE</span><span>{filteredProjects.length.toString().padStart(2, '0')} APPLICATIONS / ONE ECOSYSTEM</span></div>
          <div className="project-tools">
            <label className="project-search"><span aria-hidden="true">⌕</span><input type="search" value={projectQuery} onChange={(event) => setProjectQuery(event.target.value)} placeholder="Search applications..." aria-label="Search applications" /></label>
            <div className="project-filters" aria-label="Filter applications">
              {[['all', 'All'], ['planning', 'Planning'], ['creative', 'Creative'], ['data', 'Data'], ['email', 'Email']].map(([value, label]) => <button key={value} type="button" className={activeFilter === value ? 'active' : ''} aria-pressed={activeFilter === value} onClick={() => setActiveFilter(value)}>{label}</button>)}
            </div>
          </div>
          <div className="project-grid">
            {filteredProjects.length ? filteredProjects.map((project, index) => (
              <article className="product-card" key={project.name}>
                <div className="product-card-top"><img className={`product-logo ${project.tone}`} src={project.logo} alt={`${project.name} logo`} loading="lazy" /><span className="product-number">0{index + 1}</span></div>
                <div className="product-category">{project.category}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href="https://moswebgr.github.io/Office/" target="_blank" rel="noreferrer" aria-label={`Explore ${project.name}`}>Explore app <Arrow /></a>
              </article>
            )) : <div className="project-empty">No applications match that search. <button type="button" onClick={() => { setProjectQuery(''); setActiveFilter('all') }}>Clear filters</button></div>}
          </div>
        </section>

        <section className="approach-section" id="process">
          <div className="section-wrap approach-inner">
            <div className="section-label"><span>03</span> / HOW WE THINK</div>
            <div className="approach-copy"><h2>Less noise.<br /><span>More meaning.</span></h2><p>We believe the best digital experiences don’t need to shout. They need to solve the right problem, respect people’s time, and make the complex feel clear.</p><a className="button button-dark" href="mailto:basilismoskofidis@gmail.com">Explore my open-source work <Arrow /></a></div>
            <div className="principles"><div><span>01</span><h3>Purpose first</h3><p>Start with the problem, not the trend.</p></div><div><span>02</span><h3>Clarity in every detail</h3><p>Make every screen feel considered.</p></div><div><span>03</span><h3>Built to be useful</h3><p>Real functionality, not just a pretty surface.</p></div></div>
          </div>
        </section>

        <section className="contact-section section-wrap">
          <div className="contact-orb" aria-hidden="true">✳</div>
          <div><div className="section-label"><span>04</span> / NEXT UP</div><h2>Interested in what I build?<br /><span>Explore my projects.</span></h2></div>
          <a className="button button-dark" href="mailto:basilismoskofidis@gmail.com">Contact me <Arrow /></a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top"><img src={mosweb} alt="" /><span>MOS<span className="brand-accent">WEB</span></span></a>
        <p>Open-source projects. Useful digital products.</p>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} MosWeb. All rights reserved.</span><span className="footer-credit">Made by <strong>Vasilis Moskofidis</strong></span><a href="#top">BACK TO TOP ↑</a><a href="mailto:basilismoskofidis@gmail.com">CONTACT</a></div>
      </footer>
    </div>
  )
}

export default App
