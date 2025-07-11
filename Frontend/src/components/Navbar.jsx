// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import axios from 'axios';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setMenuOpen(false); // Auto-close menu on link click
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data.user);
      } catch (err) {
        console.error("Navbar user fetch error:", err);
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Optional logout request (only needed if you set httpOnly cookies in backend)
      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      navigate("/auth");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <nav className="navbar">
      <h2 className="logo">
        <Link to="/" className="logo-link" onClick={handleLinkClick}>
          <img
            src="/logo.png" // ✅ FIXED: Use absolute path so public/logo.png works
            alt="College Logo"
            className="logo-img"
          />
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
        <li>
          {user?.role === "admin" && (
            <Link to="/admin-dashboard">Admin Dashboard</Link>
          )}

          </li>
        <li>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
