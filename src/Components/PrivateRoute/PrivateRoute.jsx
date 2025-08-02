import React, { useEffect } from "react";
import useUserData from "../../utils/Hooks/useUserData";
import LoadingScreen from "../Shared/LoadingScreen/LoadingScreen";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = useUserData();
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = React.useState();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    let loggedInToken = undefined;
    try {
      const raw = localStorage.getItem("token");
      if (raw) {
        loggedInToken = JSON.parse(raw);
      }
    } catch (e) {
      loggedInToken = undefined;
    }
    // Prefer Redux user, fallback to token in localStorage
    if ((user && user !== null) || loggedInToken) {
      setLoading(false);
      setToken(loggedInToken || true);
    } else {
      setLoading(true);
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [user, location, navigate]);

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
