import { Navigate } from "react-router-dom";

const ProtectedSigninUserRoute = ({element, loggedIn}) => {
  return (
    !loggedIn ? element : <Navigate to="/movies" replace/>
)};

export default ProtectedSigninUserRoute;