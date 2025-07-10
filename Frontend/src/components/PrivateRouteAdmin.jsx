import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PrivateRouteAdmin = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token && user?.role === "admin") {
      setAuthorized(true);
    }

    setLoading(false);
  }, []);

  if (loading) return null; // or loader spinner

  return authorized ? children : <Navigate to="/auth" />;
};

export default PrivateRouteAdmin;
