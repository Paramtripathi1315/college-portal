// src/routes.jsx
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
import NoticeDetails from './pages/NoticeDetails';
import Admission from './pages/Admission';
import Login from './pages/Login';
import UserDashboard from './pages/UserDashboard';
import NotFound from './pages/NotFound'; // fallback page

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/faculty', element: <Faculty /> },
  { path: '/courses', element: <Courses /> },
  { path: '/contact', element: <Contact /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/studentCorner', element: <StudentCorner /> },
  { path: '/syllabus/:course', element: <Syllabus /> },
  { path: '/course/:id', element: <CourseDetails /> },
  { path: '/notices', element: <Notices /> },
  { path: '/notices/:id', element: <NoticeDetails /> },
  { path: '/admission', element: <Admission /> },
  { path: '/login', element: <Login /> },
  { path: '/dashboard', element: <UserDashboard /> },
  { path: '*', element: <NotFound /> } // fallback for undefined routes
];

export default routes;
