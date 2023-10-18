import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import NoPage from "../NoPage.jsx";
import Layout from "../Layout";
import BarChart from "../BarChartPage";
import LoginModelPage from "../Login";
import MainDashboardRoute from "./MainDashboardRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="chart" element={<BarChart />} />
          <Route path="login" element={<LoginModelPage />} />
          {MainDashboardRoute()}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
