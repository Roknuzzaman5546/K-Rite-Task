import logoImg from "../../assets/logo/logo.jpg"
import memberImg from "../../assets/Members/member1.jpg"
import { LuPenTool } from "react-icons/lu";
import { FaCode, FaRegFolder } from "react-icons/fa6";
import { AiFillSound } from "react-icons/ai";
import { RiAddCircleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { IoIosArrowDropdown, IoIosArrowDropup, } from "react-icons/io";
import { useState } from "react";

const Sidebar = () => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)

    const handleDropDownClick = () => {
        setIsDropDownOpen(!isDropDownOpen);
        // console.log(isDropDownOpen);
    }

    return (
        <div className=" h-screen">
            {/* sidebar header */}
            <div className=" flex items-center justify-between">
                <div className=" flex items-center gap-2">
                    <img className="h-[40px] w-[40px] rounded-lg" src={logoImg} alt="" />
                    <div className=" text-left">
                        <h2 className=" text-xs">INC</h2>
                        <h2 className=" font-bold">Innovated</h2>
                    </div>
                </div>
                {/* logo img */}
                <div>
                    <img className="w-[25px] h-[25px] rounded-full" src={memberImg} alt="" />
                </div>
            </div>
            {/* sidebar menu */}
            <div className=" mt-3">
                {/* Team menu */}
                <menu>
                    <ul className="menu rounded-box w-full">
                        <li className=" font-bold"><a><LuPenTool />Design Team<button className=" btn btn-xs">X + 1</button></a></li>
                        <li className=" font-bold"><a><AiFillSound></AiFillSound> Marketing Team<button className=" btn btn-xs">X + 2</button></a></li>
                        <li className=" font-bold"><a><FaCode></FaCode> Development Team<button className=" btn btn-xs">X + 3</button></a></li>
                        {/* this time this create menu don't work if you need workable then you can dynamic  */}
                        <li><a><RiAddCircleLine></RiAddCircleLine> Create Team</a></li>
                    </ul>
                </menu>
                {/* folder menu */}
                <div className="menu ml-3">
                    {/* Products folder */}
                    <div className={`collapse mt-2 ${isDropDownOpen ? "" : "h-[35px]"}`}>
                        <input
                            className="max-h-[30px] min-h-[30px]"
                            type="checkbox"
                            onClick={handleDropDownClick}
                        />
                        <div
                            className={`collapse-title max-h-[30px] min-h-[30px] xl:text-[20px] font-bold flex justify-between gap-1.5 items-center p-2 ${isDropDownOpen ? "bg-base-200" : ""}`}
                        >
                            <div className=" flex items-center gap-2">
                                <FaRegFolder></FaRegFolder>
                                Products
                            </div>
                            {isDropDownOpen ? <IoIosArrowDropup className=" text-[16px]" /> : <IoIosArrowDropdown className="text-[16px]" />}

                        </div>
                        <div className="collapse-content">
                            <ul className="menu menu-sm rounded-box w-full">
                                <li className="dashLi xl:text-[20px]">
                                    <NavLink
                                        to="/dashboard/rentReq"
                                        className="dashNav flex items-center gap-2"
                                    >
                                        Roadmap
                                    </NavLink>
                                </li>
                                <li className="dashLi xl:text-[20px] pt-2">
                                    <NavLink
                                        to="/dashboard/buyReq"
                                        className="dashNav flex items-center gap-2"
                                    >
                                        Feedback
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;