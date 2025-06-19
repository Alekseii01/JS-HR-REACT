import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import LoadingBar from "../components/loadingBar/LoadingBar";

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ element }) => {
  const user = useAppSelector((state) => state.auth.user);
  const isAuthLoading = useAppSelector((state) => state.auth.loading);

  if (isAuthLoading) {
    return <LoadingBar variant="loaderSpinner" />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default ProtectedRoute;