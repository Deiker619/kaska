import { useAuthStore } from "@/store/session/useAuthStore";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = () => {
  const session = useAuthStore((state) => state.session);
  const loading = useAuthStore((state) => state.loading);
  const user = localStorage.getItem("session") ?? null;
  useEffect(() => {
    console.log(session);
  }, [session]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Cargando...
      </div>
    );
  }
  if (session && user) return <Navigate to="/dashboard" replace />;

  return <Outlet />;
};
