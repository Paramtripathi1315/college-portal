import "../styles/Fotter.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} <strong>College Portal</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
