import { Route, Routes } from "react-router-dom";
import { PublicRoute } from "./routes/PublicRoutes";
import { ProtectedRoute } from "./routes/PrivateRoutes";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Home/auth/Login";
import Dashboard from "./layouts/dashboard/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Login></Login>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<p>/</p>} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<Dashboard />}>
            <Route path="/dashboard" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
