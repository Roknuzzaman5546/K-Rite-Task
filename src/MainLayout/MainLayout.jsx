import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

const MainLayout = () => {
    return (
        <div className=" my-5">
            {/* SideMenuBar import from sidebar components */}
            <div className="dropdown md:hidden flex">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="dropdown-content text-white border bg-[#0f172a] rounded-md shadow-md px-3 py-2">
                    <Sidebar></Sidebar>
                </ul>
            </div>
            <div className=" md:flex hidden">
                {/* sidebar and outlet flex in large and medium device */}
                <div className="flex gap-5 w-[95%] mx-auto">
                    <div className={`w-[22%] border rounded-md shadow-md px-3 py-2 transition-all duration-300`}>
                        <Sidebar></Sidebar>
                    </div>
                    <div className=" w-[78%] px-3 py-2 transition-all duration-300">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            {/* small device */}
            <div className=" md:hidden flex overflow-hidden">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;