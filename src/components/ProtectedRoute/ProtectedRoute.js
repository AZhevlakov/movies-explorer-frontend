import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';

const ProtectedRoute = ({ element: Component, ...props }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    currentUser ? <Component {...props} /> : <Navigate to="/" replace />
  )
}

export default ProtectedRoute;
