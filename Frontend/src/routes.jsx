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
import SignupLogin from './pages/SignupLogin';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import PrivateRouteAdmin from './components/PrivateRouteAdmin';

const routes = [
  { path: '/signup', element: <Signup /> },

  {
    path: '/',
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: '/about',
    element: (
      <PrivateRoute>
        <About />
      </PrivateRoute>
    ),
  },
  {
    path: '/faculty',
    element: (
      <PrivateRoute>
        <Faculty />
      </PrivateRoute>
    ),
  },
  {
    path: '/courses',
    element: (
      <PrivateRoute>
        <Courses />
      </PrivateRoute>
    ),
  },
  {
    path: '/contact',
    element: (
      <PrivateRoute>
        <Contact />
      </PrivateRoute>
    ),
  },
  {
    path: '/gallery',
    element: (
      <PrivateRoute>
        <Gallery />
      </PrivateRoute>
    ),
  },
  {
    path: '/studentCorner',
    element: (
      <PrivateRoute>
        <StudentCorner />
      </PrivateRoute>
    ),
  },
  {
    path: '/syllabus/:course',
    element: (
      <PrivateRoute>
        <Syllabus />
      </PrivateRoute>
    ),
  },
  {
    path: '/course/:id',
    element: (
      <PrivateRoute>
        <CourseDetails />
      </PrivateRoute>
    ),
  },
  {
    path: '/notices',
    element: (
      <PrivateRoute>
        <Notices />
      </PrivateRoute>
    ),
  },
  {
    path: '/notices/:id',
    element: (
      <PrivateRoute>
        <NoticeDetails />
      </PrivateRoute>
    ),
  },
  {
    path: '/admission',
    element: (
      <PrivateRoute>
        <Admission />
      </PrivateRoute>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <UserDashboard/>
      </PrivateRoute>
    ),
  },
  {
     
  
  path: '/admin-dashboard',
  element: (
    <PrivateRouteAdmin>
      <AdminDashboard />
    </PrivateRouteAdmin>
  )



  },
  {
      path: '/auth', element: <SignupLogin /> ,
  },
  { path: '*', element: <NotFound /> },
];

export default routes;
