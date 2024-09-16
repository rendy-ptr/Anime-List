import CardPage from "./components/Card/Card.JSX";
import NavbarPage from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavbarPage />
      <Outlet />
    </>
  );
}

export default App;
