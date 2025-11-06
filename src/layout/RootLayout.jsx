import { Outlet } from "react-router-dom";
import SideBar from "../common/component/SideBar.jsx";
function RootLayout() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <main className="flex-1 px-4">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default RootLayout;
