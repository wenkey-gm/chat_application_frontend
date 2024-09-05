import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Chat from "../pages/Chat";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const AppRoutes = () => {
 const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/chat/:email"
        element={isLoggedIn ? <Chat /> : <Navigate to="/login" />}
      />
      <Route
        path="*"
        element={<Navigate to={isLoggedIn ? "/chat/:email" : "/login"} />}
      />
    </Routes>
  );
};

export default AppRoutes;
