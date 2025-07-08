import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Faculty from './pages/Faculty';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import StudentCorner from './pages/StudentCorner';
import Syllabus from './pages/Syllabus';
import CourseDetails from './pages/CourseDetails';
import Notices from './pages/Notices';
import Admission from './pages/Admission';
import NoticeDetails from './pages/NoticeDetails';
import './App.css'; 

function App() { 
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/studentCorner" element={<StudentCorner />} />
        <Route path="/syllabus/:course" element={<Syllabus />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/notices/:id" element={<NoticeDetails />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
