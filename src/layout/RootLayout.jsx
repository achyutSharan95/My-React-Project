import { Outlet } from "react-router-dom";
import SideBar from "../common/component/SideBar";

function RootLayout() {
  return (
    <div>
      <header>Header</header>
      <SideBar />
      <main>
        <Outlet /> {/* Nested routes render here */}
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default RootLayout;
