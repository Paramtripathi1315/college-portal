import { Navigate } from "react-router-dom";

const PrivateRouteAdmin = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token || user?.role !== "admin") {
    return <Navigate to="/auth" />;
  }

  return children;
};

export default PrivateRouteAdmin;
