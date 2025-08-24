// src/routes/ProtectedRoute.tsx
import { useAuthStore } from "@/store/session/useAuthStore";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const session = useAuthStore((state) => state.session);
  const loading = useAuthStore((state) => state.loading);
  
  useEffect(() => {
    console.log("Estado de session:", session, "loading:", loading);
  }, [session, loading]);
  if (loading ) {
    return <div className="flex justify-center items-center h-screen">Cargando...</div>;
  }
  if (!session) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};
