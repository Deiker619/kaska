import { Route, Routes } from "react-router-dom";
import { PublicRoute } from "./routes/PublicRoutes";
import { ProtectedRoute } from "./routes/PrivateRoutes";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/auth/Login";
import Dashboard from "./layouts/dashboard/Dashboard";
import { Productos } from "./pages/Productos/Productos";

function App() {
  
  return (
    <>

      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Login></Login>} />
          <Route path="/login" element={<Login></Login>} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<Dashboard />}>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/dashboard/productos" element={<Productos />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
