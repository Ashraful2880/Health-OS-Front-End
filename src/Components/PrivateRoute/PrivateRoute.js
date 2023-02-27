import React, { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
// import useAuth from "../../Hooks/UseAuth";
import LoadingScreen from "../Shared/LoadingScreen/LoadingScreen";

const PrivateRoute = ({ children }) => {
  // const { user, loading } = useAuth();
  const [loading, setLoading] = React.useState(true);
  const [token, setToken] = React.useState();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("token"))?.token;
    if (loggedInUser) {
      setLoading(false);
      setToken(loggedInUser);
    } else {
      setLoading(true);
      navigate("/login");
    }
  }, [token, location]);

  if (loading) {
    return (
      <div>
        <LoadingScreen />
      </div>
    );
  }
  if (!token) {
    return (
      <>
        <Navigate to="/login" state={{ from: location }} replace />
      </>
    );
  }

  return children;
};

export default PrivateRoute;
