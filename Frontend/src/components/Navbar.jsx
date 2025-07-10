import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; 
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setMenuOpen(false); // Auto-close menu on link click
  };
const handleLogout = async () => {
  try {
    // 1. Clear local user data (optional if you're using Redux)
    localStorage.removeItem('token');
    localStorage.removeItem('user'); // if stored
    
    // 2. Call backend to clear cookie (if using cookies)
    await fetch('http://localhost:5000/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });

    // 3. Redirect to auth
    navigate('/auth');
  } catch (err) {
    console.error("Logout failed:", err);
  }
};


  return (
    <nav className="navbar">
      <h2 className="logo">
        <Link to="/" className="logo-link">
          <img src="../logo.png" alt="College Logo" className="logo-img" />
          <span className="logo-text">College Portal</span>
        </Link>
      </h2>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
        <li><Link to="/courses" onClick={handleLinkClick}>Courses</Link></li>
        <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
        <li><Link to="/faculty" onClick={handleLinkClick}>Faculty</Link></li>
        <li><Link to="/gallery" onClick={handleLinkClick}>Gallery</Link></li>
        <li><Link to="/notices" onClick={handleLinkClick}>Notices</Link></li>
        <li><Link to="/studentCorner" onClick={handleLinkClick}>Student Corner</Link></li>
        <li><Link to="/admission" onClick={handleLinkClick}>Admission</Link></li>
        <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
      </ul>
    </nav>
  );
}

export default Navbar;
