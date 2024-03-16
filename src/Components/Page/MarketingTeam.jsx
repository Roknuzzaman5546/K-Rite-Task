import { IoCopyOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { TbAdjustmentsHorizontal, TbBrand4Chan } from "react-icons/tb";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { HiOutlineAdjustments } from "react-icons/hi";
import { useState } from "react";
import { RiAddCircleLine } from "react-icons/ri";


const MarketingTeam = () => {
    return (
        <div>
            {/* header section */}
            <header>
                <div className="flex items-center justify-between">
                    <h2 className=" text-2xl font-bold">Products</h2>
                    {/* header right side */}
                    <div className=" flex items-center gap-2">
                        <div className=" flex items-center border rounded-md py-1 px-2">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2 font-bold"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            <input type="text" placeholder="Search by description" className=" border-none w-full max-w-xs" />
                        </div>
                        <i className=" border rounded-lg p-1">
                            <IoCopyOutline className=" text-xl font-extrabold" />
                        </i>
                        <i className=" border rounded-lg p-1">
                            <CiSettings className=" text-xl font-extrabold" />
                        </i>
                    </div>
                </div>
                <hr className="mt-3" />
            </header>
            {/* sort option */}
            <div className="mt-3 flex items-center justify-between">
                {/* Now this time just i design this shorted button and added dropdown just for design this buttons are not  workable*/}
                {/* left side sort */}
                <div>
                    {/* ALl brands sort */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="flex justify-center items-center gap-1 m-1 border-2 px-2 rounded-md py-1 font-bold">
                            <TbBrand4Chan></TbBrand4Chan>
                            All brands
                            <IoIosArrowDropdown />
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    {/* desk sort */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="flex justify-center items-center gap-1 m-1 border-2 px-2 rounded-md py-1 font-bold">
                            desk
                            <IoIosArrowDropdown />
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    {/* tags sort */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="flex justify-center items-center gap-1 m-1 border-2 px-2 rounded-md py-1 font-bold">
                            tags
                            <IoIosArrowDropdown />
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    {/* Sort option */}
                    <div className=" inline-block">
                        <div tabIndex={0} role="button" className="flex justify-center items-center gap-1 m-1 border-2 px-2 rounded-md py-1">
                            <HiOutlineAdjustments />
                            Sort
                        </div>
                    </div>
                    {/* Filter sort */}
                    <div className=" inline-block">
                        <div tabIndex={0} role="button" className="flex justify-center items-center gap-1 m-1 border-2 px-2 rounded-md py-1">
                            <TbAdjustmentsHorizontal />
                            Filter
                        </div>
                    </div>
                </div>
                {/* right side sort */}
                <div>
                    {/* marketing */}
                    <div className="inline-block">
                        <div tabIndex={0} role="button" className="flex justify-center items-center gap-1 m-1 border-2 px-2 rounded-md py-1 font-bold">
                            <RiAddCircleLine></RiAddCircleLine>
                            Marketing
                        </div>
                    </div>
                    {/* Import / export part */}
                    <div className=" inline-block">
                        <div tabIndex={0} role="button" className="flex justify-center items-center gap-1 m-1 border-2 px-2 rounded-md py-1 font-bold">
                            <RiAddCircleLine></RiAddCircleLine>
                            Marketing
                        </div>
                    </div>
                </div>
            </div>
            {/* table section */}
            <div>
                <table className=" border w-full py-3">
                    {/* table header */}
                    <tr className="">
                        <td className=" py-2">
                            <input type="checkbox" className=" checkbox ml-2" name="" id="" />
                        </td>
                        <td className=" border-l">
                            <div className=" flex items-center justify-between">
                                <p className=" ml-2">Brand</p>
                                <p className=" mr-2">+</p>
                            </div>
                        </td>
                        <td className=" border-l">
                            <p className=" ml-2">Description</p>
                        </td>
                        <td className=" border-l"><p className=" ml-2">Members</p></td>
                        <td className=" border-l"><p className=" ml-2">Tags</p></td>
                        <td className=" border-l"><p className=" ml-2">Team meeting</p></td>
                        <td className=" border-l"><p className=" ml-2">+</p></td>
                    </tr>
                    {/* row 1 */}
                    <tr className=" border-t">
                        <td className=" py-2">
                            <input type="checkbox" className=" checkbox ml-2" name="" id="" />
                        </td>
                        <td className=" border-l">
                            <div className=" flex items-center justify-between">
                                <p className=" ml-2">Brand</p>
                                <p className=" mr-2">+</p>
                            </div>
                        </td>
                        <td className=" border-l">
                            <p className=" ml-2">Description</p>
                        </td>
                        <td className=" border-l"><p className=" ml-2">Members</p></td>
                        <td className=" border-l"><p className=" ml-2">Tags</p></td>
                        <td className=" border-l"><p className=" ml-2">Team meeting</p></td>
                        <td className=" border-l"><p className=" ml-2">+</p></td>
                    </tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                </table>
            </div>
        </div>
    );
};

export default MarketingTeam;