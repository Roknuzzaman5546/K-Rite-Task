import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

const MainLayout = () => {
    return (
        <div className="flex gap-5 w-11/12 mx-auto mt-5">
            {/* SideMenuBar import from sidebar components */}
            <div className=" w-[22%] border rounded-md shadow-md px-3 py-2">
                <Sidebar></Sidebar>
            </div>
            <div className=" w-[78%] border">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;