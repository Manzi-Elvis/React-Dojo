import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import BoardPage from "./components/pages/BoardPage";
import MainLayout from "./components/layouts/mainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/boards/:boardId" element={<BoardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;