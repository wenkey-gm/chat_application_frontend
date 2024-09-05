import { Route, Routes } from "react-router-dom";
import Login from "../ui/pages/Login";
import Chat from "../ui/pages/chat";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/chat/:email" element={<Chat />} />
    </Routes>
  );
};

export default AppRoutes;
