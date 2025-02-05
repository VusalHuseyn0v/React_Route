import { Outlet } from "react-router-dom";
import NavBar_2 from "./NavBar_2";

const Accaunt = () => {
  return (
    <>
      Account
      <NavBar_2 />
      <Outlet />
    </>
  );
};
export default Accaunt;
