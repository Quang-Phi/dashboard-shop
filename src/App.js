import './index.css';
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import DashboardLayout from "./pages/layout/DashboardLayout";
import HomePage from "./pages/home/HomePage";
import ProductsPage from "./pages/dashboard/ProductsPage"
import AddEditPage from "./pages/dashboard/AddEditPage"
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<LoginPage/>} />
        <Route path="/dashboard" element={<DashboardLayout/>}>
          <Route index element={<HomePage/>} />
          <Route path="/dashboard/products" element={<ProductsPage/>} />
          <Route path="/dashboard/products/add" element={<AddEditPage />} />
          <Route path="/dashboard/products/edit/:id" element={<AddEditPage />} />
        </Route>
    </Routes>
    </>
  );
}

export default App;
