import { Outlet } from "react-router-dom";
import NavBar from "../components/Navigation/NavBar";

function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default RootLayout;
