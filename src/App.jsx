import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NavBar from "./Pages/NavBar";
import Accaunt from "./Pages/Accaunt";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import Subscription from "./Pages/Subscription";
import Orders from "./Pages/Orders";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Accaunt />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="orders" element={<Orders />} />
        </Route>git push -u origin main
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
