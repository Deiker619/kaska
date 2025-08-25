// src/routes/ProtectedRoute.tsx
import { useAuthStore } from "@/store/session/useAuthStore";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const user = useAuthStore((state) => state.user);
  const loading = useAuthStore((state) => state.loading);
  const checkSession = useAuthStore((state)=> state.checkSession)
  
  useEffect(() => {
   checkSession()
  }, []);
  if (loading ) {
    return <div className="flex justify-center items-center h-screen">Cargando...</div>;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};
