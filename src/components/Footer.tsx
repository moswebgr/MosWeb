import "./Footer.css";

export default function Footer() {
  return (
    <footer className="vasilis-footer">
      <div className="vasilis-footer-container">
        <div className="vasilis-footer-column">
          <h4 className="vasilis-footer-title">Projects</h4>
          <ul className="vasilis-footer-list">
              <li><a href="https://moswebgr.github.io/FitTracker/" className="vasilis-footer-link">FitTracker</a></li>
              <li><a href="https://calendar.mosweb.gr/" className="vasilis-footer-link">Calendar</a></li>
              <li><a href="Projects" className="vasilis-footer-link">Authenticator (Ruby)</a></li>
              <li><a href="Projects" className="vasilis-footer-link">RPG Enemy Guide (C++)</a></li>
              <li><a href="Projects" className="vasilis-footer-link">Rock Paper Scissors (C)</a></li>
              <li><a href="https://hakairyu.itch.io/mastro-adventures" className="vasilis-footer-link">Mastro Adventures</a></li>
              <li><a href="https://hakairyu.itch.io/rifts-a-world-apart" className="vasilis-footer-link">Rifts: A World Apart</a></li>
          </ul>
        </div>
        <div className="vasilis-footer-column">
          <h4 className="vasilis-footer-title">Our Toolbox</h4>
          <ul className="vasilis-footer-list">
            <li>
              <img
                src="https://logos-world.net/wp-content/uploads/2020/10/WordPress-Logo.png"
                alt="WordPress Icon"
                className="vasilis-footer-icon"
              />
              <a href="https://wordpress.org/" className="vasilis-footer-link">WordPress</a>
            </li>
            <li>
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn3d.iconscout.com%2F3d%2Ffree%2Fthumb%2Ffree-elementor-3d-logo-download-in-png-blend-fbx-gltf-file-formats--software-social-media-pack-logos-4642754.png&f=1&nofb=1&ipt=dfdcd9b12986f2a1c5645700417022878ada640f1b50a426da9c236818dc664b"
                alt="Elementor Icon"
                className="vasilis-footer-icon"
              />
              <a href="https://elementor.com/" className="vasilis-footer-link">Elementor</a>
            </li>
            <li>
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogospng.org%2Fdownload%2Fphp%2Flogo-php-1024.png&f=1&nofb=1&ipt=2e5469ace964317176e345b99751f44fb21f62a8bb6a5ce6d1ff798b830cb394"
                alt="PHP Icon"
                className="vasilis-footer-icon"
              />
              <a href="https://www.php.net/" className="vasilis-footer-link">PHP</a>
            </li>
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                alt="HTML & CSS Icon"
                className="vasilis-footer-icon"
              />
              <a href="https://html.spec.whatwg.org/" className="vasilis-footer-link">HTML & CSS</a>
            </li>
            <li>
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpluspng.com%2Fimg-png%2Freact-logo-png-react-js-logo-history-design-history-and-evolution-5500x3094.png&f=1&nofb=1&ipt=51a1db4bef02b6a8319fad039aebd759e7c540bda5a7624018e60c29d0b58d6b"
                alt="React & Next.js Icon"
                className="vasilis-footer-icon"
              />
              <a href="https://react.dev/" className="vasilis-footer-link">React & Next.js</a>
            </li>
          </ul>
        </div>
        <div className="vasilis-footer-column">
          <h4 className="vasilis-footer-title">Contact</h4>
          <ul className="vasilis-footer-list">
            <li>vasilismoskofidis@mosweb.gr</li>
            <li>solonmosios@mosweb.gr</li>
          </ul>
        </div>
        <div className="vasilis-footer-column">
          <h4 className="vasilis-footer-title">Social Media</h4>
          <ul className="vasilis-footer-list">
            <li><a href="https://github.com/moswebgr" className="vasilis-footer-link">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="vasilis-footer-bottom">
        <img
          src="/logos/mosweb.png"
          alt="MosWeb Team Logo"
          className="vasilis-footer-logo"
        />
        <p>© 2025 Made by MosWeb Team all rights reserved.</p>
      </div>
    </footer>
  );
}