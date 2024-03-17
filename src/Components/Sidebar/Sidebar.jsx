import logoImg from "../../assets/logo/logo.jpg"
import memberImg from "../../assets/Members/member1.jpg"
import { LuPenTool } from "react-icons/lu";
import { FaCode, FaPlus, FaRegFolder } from "react-icons/fa6";
import { AiFillSound } from "react-icons/ai";
import { RiAddCircleLine } from "react-icons/ri";
import {  NavLink } from "react-router-dom";
import { IoIosArrowDropdown, IoIosArrowDropup, IoIosHelpCircleOutline, } from "react-icons/io";
import { GoPersonAdd } from "react-icons/go";
import { useState } from "react";

const Sidebar = () => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const [isDropDownOpen2, setIsDropDownOpen2] = useState(false)
    const [isDropDownOpen3, setIsDropDownOpen3] = useState(false)


    return (
        <div className=" h-fit text-sm">
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
                        <li className="font-bold">
                            <NavLink to="/design"><LuPenTool />Design Team<button className=" btn btn-xs">X + 1</button>
                            </NavLink>
                        </li>
                        <li className=" font-bold">
                            <NavLink to="/marketingTeam">
                                <AiFillSound></AiFillSound>
                                Marketing Team
                                <button className=" btn btn-xs">X + 2</button>
                            </NavLink>
                        </li>
                        <li className=" font-bold"><NavLink to="/development"><FaCode></FaCode> Development Team<button className=" btn btn-xs">X + 3</button></NavLink></li>
                        {/* this time this create menu don't work if you need workable then you can dynamic  */}
                        <li><a><RiAddCircleLine></RiAddCircleLine> Create Team</a></li>
                    </ul>
                </menu>
                {/* folder dropDown menu */}
                <div className=" ml-3 mt-2">
                    {/* folder title */}
                    <div className="flex items-center justify-between px-2">
                        <h2>Folder</h2>
                        <FaPlus></FaPlus>
                    </div>
                    {/* Products folder */}
                    <div className={`collapse mt-2 ${isDropDownOpen ? "" : "h-[35px]"}`}>
                        <input
                            className="max-h-[30px] min-h-[30px]"
                            type="checkbox"
                            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                        />
                        <div
                            className={`collapse-title max-h-[30px] min-h-[30px] font-bold flex justify-between gap-1.5 items-center p-2 ${isDropDownOpen ? " bg-neutral text-white" : ""}`}
                        >
                            <NavLink to="/product">
                                <div className=" flex items-center gap-2">
                                    <FaRegFolder></FaRegFolder>
                                    Products
                                </div>
                            </NavLink>
                            {isDropDownOpen ? <IoIosArrowDropup className=" text-[16px]" /> : <IoIosArrowDropdown className="text-[16px]" />}

                        </div>
                        <div className="collapse-content">
                            <ul className="menu menu-sm rounded-box w-full">
                                <li className="dashLi">
                                    <NavLink
                                        to="/roadmap"
                                        className="dashNav flex items-center gap-2"
                                    >
                                        Roadmap
                                    </NavLink>
                                </li>
                                <li className="dashLi pt-2">
                                    <NavLink
                                        to="/feedback"
                                        className="dashNav flex items-center gap-2"
                                    >
                                        Feedback
                                    </NavLink>
                                </li>
                                <li className="dashLi pt-2">
                                    <NavLink
                                        to="/performance"
                                        className="dashNav flex items-center gap-2"
                                    >
                                        Performance
                                    </NavLink>
                                </li>
                                <li className="dashLi pt-2">
                                    <NavLink
                                        to="/feedback"
                                        className="dashNav flex items-center gap-2"
                                    >
                                        Feedback
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* sales folder */}
                    <div className={`collapse mt-2 ${isDropDownOpen2 ? "" : "h-[35px]"}`}>
                        <input
                            className="max-h-[30px] min-h-[30px]"
                            type="checkbox"
                            onClick={() => setIsDropDownOpen2(!isDropDownOpen2)}
                        />
                        <div
                            className={`collapse-title max-h-[30px] min-h-[30px] font-bold flex justify-between gap-1.5 items-center p-2 ${isDropDownOpen2 ? " bg-neutral text-white" : ""}`}
                        >
                            <div className=" flex items-center gap-2">
                                <FaRegFolder></FaRegFolder>
                                Sales
                            </div>
                            {isDropDownOpen2 ? <IoIosArrowDropup className=" text-[16px]" /> : <IoIosArrowDropdown className="text-[16px]" />}
                        </div>
                        <div className="collapse-content">
                            <ul className="menu menu-sm rounded-box w-full">
                                <li className="dashLi">
                                    <NavLink
                                        to="/roadmap"
                                        className="dashNav flex items-center gap-2"
                                    >
                                        Website sales
                                    </NavLink>
                                </li>
                                <li className="dashLi pt-2">
                                    <NavLink
                                        to="/feedback"
                                        className="dashNav flex items-center gap-2"
                                    >
                                        App sales
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* design folder */}
                    <div className={`collapse mt-2 ${isDropDownOpen3 ? "" : "h-[35px]"}`}>
                        <input
                            className="max-h-[30px] min-h-[30px]"
                            type="checkbox"
                            onClick={() => setIsDropDownOpen3(!isDropDownOpen3)}
                        />
                        <div
                            className={`collapse-title max-h-[30px] min-h-[30px] font-bold flex justify-between gap-1.5 items-center p-2 ${isDropDownOpen3 ? " bg-neutral text-white" : ""}`}
                        >
                            <div className=" flex items-center gap-2">
                                <FaRegFolder></FaRegFolder>
                                Design
                            </div>
                            {isDropDownOpen3 ? <IoIosArrowDropup className=" text-[16px]" /> : <IoIosArrowDropdown className="text-[16px]" />}
                        </div>
                        <div className="collapse-content">
                            <ul className="menu menu-sm rounded-box w-full">
                                <li className="dashLi">
                                    <NavLink
                                        to="/webDesign"
                                        className="dashNav flex items-center gap-2"
                                    >
                                        Website design
                                    </NavLink>
                                </li>
                                <li className="dashLi pt-2">
                                    <NavLink
                                        to="/appDesign"
                                        className="dashNav flex items-center gap-2"
                                    >
                                        App design
                                    </NavLink>
                                </li>
                                <li className="dashLi pt-2">
                                    <NavLink
                                        to="/graphicDesign"
                                        className="dashNav flex items-center gap-2"
                                    >
                                        Graphic design
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* nonDropDown menu */}
                <menu className="ml-1">
                    <ul className="menu">
                        {/* office folder */}
                        <li>
                            <NavLink to="/office" className=" flex items-center gap-2 p-2 font-bold">
                                <FaRegFolder></FaRegFolder>
                                Office
                            </NavLink>
                        </li>
                        {/* legal folder */}
                        <li>
                            <NavLink to="/legal" className=" flex items-center gap-2 p-2 font-bold mt-1">
                                <FaRegFolder></FaRegFolder>
                                Legal
                            </NavLink>
                        </li>
                    </ul>
                </menu>
                {/* sidebar footer part */}
                <div className="mt-[180px]">
                    <menu className="ml-1">
                        <ul className="menu">
                            <li>
                                <NavLink to='/inviteFiend' className=" flex items-center gap-2 p-2 font-bold">
                                    <GoPersonAdd />
                                    Invite Friends
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/help' className=" flex justify-between items-center gap-2 p-2 font-bold">
                                    <div className=" flex gap-1">
                                        <IoIosHelpCircleOutline />
                                        Help and first step
                                    </div>
                                    <button className=" btn btn-xs">0^3</button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/help' className=" flex items-center justify-between p-2 gap-2 font-bold">
                                    <div className=" flex gap-1">
                                        <button className="btn btn-xs">7</button>
                                        Days left on trail
                                    </div>
                                    <button className="btn btn-xs bg-neutral text-white ml-5">Add trailing</button>
                                </NavLink>
                            </li>
                        </ul>
                    </menu>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;