/* import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import LoadingScreen from "../Shared/LoadingScreen/LoadingScreen";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <LoadingScreen />;
  }
  return <>{user?.email ? children : <Navigate to="/signUp" />}</>;
};

export default PrivateRoute;
 */
