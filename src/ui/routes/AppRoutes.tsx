import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Chat from "../pages/chat";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/chat/:email" element={<Chat />} />
    </Routes>
  );
};

export default AppRoutes;
