import { Outlet } from "react-router-dom";
import SideBar from "../common/component/SideBar";

function RootLayout() {
  return (
    <>
      <div className="flex">  
      <SideBar />
      <main>
        <Outlet />
      </main>
      </div>
    </>
  );
}

export default RootLayout;
