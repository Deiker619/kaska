import { useAuthStore } from "@/store/session/useAuthStore";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = () => {
  const user = useAuthStore((state) => state.user);
  const loading = useAuthStore((state) => state.loading);
  const checkSession = useAuthStore((state) => state.checkSession)
  useEffect(() => {
    checkSession()
    return () => {
      const unsubscribe = useAuthStore.getState().unsubscribe;
      if (unsubscribe) unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Cargando...
      </div>
    );
  }
  if (user) return <Navigate to="/dashboard" replace />;

  return <Outlet />;
};
