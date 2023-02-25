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

/* import { CardMedia } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import GetAuth from "../GetAuth";
import UseData from "../useData";

const RequireAuth = ({ children }) => {
	const [data] = UseData();
	const url = window.location.pathname;
	const { user, loading } = GetAuth();
	const location = useLocation();
	if (loading) {
		return (
			<div
				style={{
					position: "absolute",
					left: "50%",
					top: "50%",
					transform:
"translate(-50%, -50%)",
				}}>
				<CardMedia
					image='/loading.png'
					alt='loading logo'
					className='loading-logo'
					sx={{
						width: 170,
						height: 170,
					}}
				/>
			</div>
		);
	}
	if (!user) {
		return (
			<>
				{data && (
					<Navigate
						to={!url.includes("/@") ? "/login" : `/@${data?.url}/login`}
						state={{ from: location }}
						replace
					/>
				)}
			</>
		);
	}

	return children;
};

export default RequireAuth; */
