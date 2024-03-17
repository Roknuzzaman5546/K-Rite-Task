import { IoCopyOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { TbAdjustmentsHorizontal, TbBrand4Chan } from "react-icons/tb";
import { IoIosArrowDropdown, IoIosNotifications } from "react-icons/io";
import { RiDeleteBin2Line, RiDeleteBin7Line } from "react-icons/ri";
import { HiOutlineAdjustments } from "react-icons/hi";
import { RiAddCircleLine } from "react-icons/ri";
import { FaMeta } from "react-icons/fa6";


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
            <div className="mt-5">
                <table className=" border w-full py-3 text-sm">
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
                        <td className=" border-l w-[200px]">
                            <p className=" ml-2">Description</p>
                        </td>
                        <td className=" border-l w-[170px]"><p className=" ml-2">Members</p></td>
                        <td className=" border-l w-[170px]"><p className=" ml-2">Categories</p></td>
                        <td className=" border-l w-[170px]"><p className=" ml-2">Tags</p></td>
                        <td className=" border-l w-[170px]"><p className=" ml-2">Team meeting</p></td>
                        <td className=" border-l"><p className=" ml-2">+</p></td>
                    </tr>
                    {/* row 1 */}
                    <tr className=" border-t">
                        <td className=" py-2 w-10">
                            <input type="checkbox" className=" checkbox ml-2" name="" id="" />
                        </td>
                        {/* brand part */}
                        <td className=" border-l w-[110px]">
                            <div className=" flex items-center justify-between gap-2">
                                <div className=" flex items-center justify-center ml-2 gap-1">
                                    <img className="w-5 h-5 rounded-md" src="https://i.ibb.co/1qPGDYR/wfox.jpg" alt="" />
                                    <p className=" font-bold">Wfox</p>
                                </div>
                                <p className=" mr-2 flex items-center gap-1"><IoCopyOutline></IoCopyOutline> 2</p>
                            </div>
                        </td>
                        {/* description part */}
                        <td className=" border-l text-sm">
                            <p className=" ml-2 line-clamp-1 font-bold">Development personalized fitness</p>
                        </td>
                        {/* avatar part */}
                        <td className=" border-l">
                            <p className=" ml-2">
                                <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/Nr4CPXt/ROY-0012-1.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/v4rNR8z/Whats-App-Image-2024-02-27-at-16-31-58-b363b7e5.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/B6zjvx1/profile-pic-4.png" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/dKGPbn2/photo-1508214751196-bcfd4ca60f91-1.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </p>
                        </td>
                        {/* categories part */}
                        <td className=" border-l">
                            <p className=" ml-2">
                                <span className=" text-purple-500 border bg-purple-100 border-purple-500 font-semibold p-[2px] rounded">Automation</span>
                            </p>
                        </td>
                        {/* tags part */}
                        <td className=" border-l"><p className=" ml-2 flex items-center space-x-1 line-clamp-1">
                            <span className=" border-2 font-semibold p-[2px] rounded">#DigitalTransition</span>
                            <span className=" border-2 font-semibold p-[2px]  rounded">#Motor</span>
                        </p>
                        </td>
                        {/* Next meeting part */}
                        <td className=" border-l"><p className=" ml-2">
                            <span className=" text-green-400 border border-green-400 bg-green-200 shadow-md  font-semibold p-[2px] rounded">Automation</span>
                        </p>
                        </td>
                        <td className=" border-l w-8"><p className=" ml-2">+</p></td>
                    </tr>
                    {/* row 2 */}
                    <tr className=" border-t">
                        <td className=" py-2 w-10">
                            <input type="checkbox" className=" checkbox ml-2" name="" id="" />
                        </td>
                        {/* brand part */}
                        <td className=" border-l w-[160px]">
                            <div className=" flex items-center justify-between gap-2">
                                <div className=" flex items-center justify-center ml-2 gap-1">
                                    <img className="w-5 h-5 rounded-md" src="https://i.ibb.co/9TGpxcd/Shophipy.png" alt="" />
                                    <p className=" font-bold">Shopify</p>
                                </div>
                            </div>
                        </td>
                        {/* description part */}
                        <td className=" border-l text-sm">
                            <p className=" ml-2 line-clamp-1 font-bold">Include design purpose used</p>
                        </td>
                        {/* avatar part */}
                        <td className=" border-l">
                            <p className=" ml-2">
                                <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/B6zjvx1/profile-pic-4.png" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/D4HvFvw/293340925-1276517123087848-1178323713058583906-n.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/dKGPbn2/photo-1508214751196-bcfd4ca60f91-1.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </p>
                        </td>
                        {/* categories part */}
                        <td className=" border-l">
                            <p className=" ml-2 space-x-1">
                                <span className=" text-orange-300 border bg-orange-100 border-orange-300 font-semibold p-[2px] rounded">E commerce</span>
                                <span className=" text-yellow-300 border bg-yellow-100 border-yellow-300 font-semibold p-[2px] rounded">B-2B</span>
                            </p>
                        </td>
                        {/* tags part */}
                        <td className=" border-l"><p className=" ml-2 flex items-center space-x-1 line-clamp-1">
                            <span className=" border-2 font-semibold p-[2px] rounded">#OnlineShopping</span>
                            <span className=" border-2 font-semibold p-[2px]  rounded">#Digital</span>
                        </p>
                        </td>
                        {/* Next meeting part */}
                        <td className=" border-l"><p className=" ml-2">
                            <span className=" text-blue-400 border border-blue-400 bg-blue-200 shadow-md  font-semibold p-[2px] rounded">Tomorrow</span>
                        </p>
                        </td>
                        <td className=" border-l w-8"><p className=" ml-2">+</p></td>
                    </tr>
                    {/* row 3 */}
                    <tr className=" border-t">
                        <td className=" py-2 w-10">
                            <input type="checkbox" className=" checkbox ml-2" name="" id="" />
                        </td>
                        {/* brand part */}
                        <td className=" border-l w-[110px]">
                            <div className=" flex items-center justify-between gap-2">
                                <div className=" flex items-center justify-center ml-2 gap-1">
                                    <img className="w-5 h-5 rounded-md" src="https://i.ibb.co/HG9krDV/mainchip.png" alt="" />
                                    <p className=" font-bold">Mainchip</p>
                                </div>
                            </div>
                        </td>
                        {/* description part */}
                        <td className=" border-l text-sm">
                            <p className=" ml-2 line-clamp-1 font-bold">Development app in an a Automation</p>
                        </td>
                        {/* avatar part */}
                        <td className=" border-l">
                            <p className=" ml-2">
                                <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/v4rNR8z/Whats-App-Image-2024-02-27-at-16-31-58-b363b7e5.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/Nr4CPXt/ROY-0012-1.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/B6zjvx1/profile-pic-4.png" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/dKGPbn2/photo-1508214751196-bcfd4ca60f91-1.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </p>
                        </td>
                        {/* categories part */}
                        <td className=" border-l">
                            <p className=" ml-2 space-x-1">
                                <span className=" text-green-300 border bg-green-100 border-green-500 font-semibold p-[2px] rounded">SAAS</span>
                                <span className=" text-orange-300 border bg-orange-100 border-orange-500 font-semibold p-[2px] rounded">Mobile</span>
                            </p>
                        </td>
                        {/* tags part */}
                        <td className=" border-l"><p className=" ml-2 flex items-center space-x-1 line-clamp-1">
                            <span className=" border-2 font-semibold p-[2px] rounded">#TaliCommunication</span>
                            <span className=" border-2 font-semibold p-[2px]  rounded">#Coding</span>
                        </p>
                        </td>
                        {/* Next meeting part */}
                        <td className=" border-l"><p className=" ml-2">
                            <span className=" text-blue-400 border border-blue-400 bg-blue-200 shadow-md  font-semibold p-[2px] rounded">Tomorrow</span>
                        </p>
                        </td>
                        <td className=" border-l w-8"><p className=" ml-2">+</p></td>
                    </tr>
                    {/* row 4 */}
                    <tr className=" border-t">
                        <td className=" py-2 w-10">
                            <input type="checkbox" className=" checkbox ml-2" name="" id="" />
                        </td>
                        {/* brand part */}
                        <td className=" border-l w-[110px]">
                            <div className=" flex items-center justify-between gap-2">
                                <div className=" flex items-center justify-center ml-2 gap-1">
                                    <img className="w-5 h-5 rounded-md" src="https://i.ibb.co/2Nkdf02/Paypal.jpg" alt="" />
                                    <p className=" font-bold">Paypal</p>
                                </div>
                                <p className=" mr-2 flex items-center gap-1"><IoCopyOutline></IoCopyOutline> 2</p>
                            </div>
                        </td>
                        {/* description part */}
                        <td className=" border-l text-sm">
                            <p className=" ml-2 line-clamp-1 font-bold">Payment method by Paypal</p>
                        </td>
                        {/* avatar part */}
                        <td className=" border-l">
                            <p className=" ml-2">
                                <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/v4rNR8z/Whats-App-Image-2024-02-27-at-16-31-58-b363b7e5.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/Nr4CPXt/ROY-0012-1.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/ChqTCD0/albert-dera-ILip77-Sbm-OE-unsplash.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/dKGPbn2/photo-1508214751196-bcfd4ca60f91-1.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/B6zjvx1/profile-pic-4.png" />
                                        </div>
                                    </div>
                                </div>
                            </p>
                        </td>
                        {/* categories part */}
                        <td className=" border-l">
                            <p className=" ml-2">
                                <span className=" text-purple-500 border bg-purple-100 border-purple-500 font-semibold p-[2px] rounded">Automation</span>
                            </p>
                        </td>
                        {/* tags part */}
                        <td className=" border-l"><p className=" ml-2 flex items-center space-x-1 line-clamp-1">
                            <span className=" border-2 font-semibold p-[2px] rounded">#DigitalTransition</span>
                            <span className=" border-2 font-semibold p-[2px]  rounded">#Motor</span>
                        </p>
                        </td>
                        {/* Next meeting part */}
                        <td className=" border-l"><p className=" ml-2">
                            <span className=" text-green-400 border border-green-400 bg-green-200 shadow-md  font-semibold p-[2px] rounded">Automation</span>
                        </p>
                        </td>
                        <td className=" border-l w-8"><p className=" ml-2">+</p></td>
                    </tr>
                    {/* row 5 */}
                    <tr className=" border-t">
                        <td className=" py-2 w-10">
                            <input type="checkbox" className=" checkbox ml-2" name="" id="" />
                        </td>
                        {/* brand part */}
                        <td className=" border-l w-[110px]">
                            <div className=" flex items-center justify-between gap-2">
                                <div className=" flex items-center justify-center ml-2 gap-1">
                                    <img className="w-5 h-5 rounded-md" src="https://i.ibb.co/1qPGDYR/wfox.jpg" alt="" />
                                    <p className=" font-bold">Wfox</p>
                                </div>
                                <p className=" mr-2 flex items-center gap-1"><IoCopyOutline></IoCopyOutline> 2</p>
                            </div>
                        </td>
                        {/* description part */}
                        <td className=" border-l text-sm">
                            <p className=" ml-2 line-clamp-1 font-bold">Development personalized fitness</p>
                        </td>
                        {/* avatar part */}
                        <td className=" border-l">
                            <p className=" ml-2">
                                <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/Nr4CPXt/ROY-0012-1.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/v4rNR8z/Whats-App-Image-2024-02-27-at-16-31-58-b363b7e5.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/B6zjvx1/profile-pic-4.png" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/dKGPbn2/photo-1508214751196-bcfd4ca60f91-1.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </p>
                        </td>
                        {/* categories part */}
                        <td className=" border-l">
                            <p className=" ml-2">
                                <span className=" text-purple-500 border bg-purple-100 border-purple-500 font-semibold p-[2px] rounded">Automation</span>
                            </p>
                        </td>
                        {/* tags part */}
                        <td className=" border-l"><p className=" ml-2 flex items-center space-x-1 line-clamp-1">
                            <span className=" border-2 font-semibold p-[2px] rounded">#DigitalTransition</span>
                            <span className=" border-2 font-semibold p-[2px]  rounded">#Motor</span>
                        </p>
                        </td>
                        {/* Next meeting part */}
                        <td className=" border-l"><p className=" ml-2">
                            <span className=" text-green-400 border border-green-400 bg-green-200 shadow-md  font-semibold p-[2px] rounded">Automation</span>
                        </p>
                        </td>
                        <td className=" border-l w-8"><p className=" ml-2">+</p></td>
                    </tr>
                    {/* row 6 */}
                    <tr className=" border-t">
                        <td className=" py-2 w-10">
                            <input type="checkbox" className=" checkbox ml-2" name="" id="" />
                        </td>
                        {/* brand part */}
                        <td className=" border-l w-[110px]">
                            <div className=" flex items-center justify-between gap-2">
                                <div className=" flex items-center justify-center ml-2 gap-1">
                                    <img className="w-5 h-5 rounded-md" src="https://i.ibb.co/1qPGDYR/wfox.jpg" alt="" />
                                    <p className=" font-bold">Wfox</p>
                                </div>
                                <p className=" mr-2 flex items-center gap-1"><IoCopyOutline></IoCopyOutline> 2</p>
                            </div>
                        </td>
                        {/* description part */}
                        <td className=" border-l text-sm">
                            <p className=" ml-2 line-clamp-1 font-bold">Development personalized fitness</p>
                        </td>
                        {/* avatar part */}
                        <td className=" border-l">
                            <p className=" ml-2">
                                <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/Nr4CPXt/ROY-0012-1.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/v4rNR8z/Whats-App-Image-2024-02-27-at-16-31-58-b363b7e5.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/B6zjvx1/profile-pic-4.png" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/dKGPbn2/photo-1508214751196-bcfd4ca60f91-1.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </p>
                        </td>
                        {/* categories part */}
                        <td className=" border-l">
                            <p className=" ml-2">
                                <span className=" text-purple-500 border bg-purple-100 border-purple-500 font-semibold p-[2px] rounded">Automation</span>
                            </p>
                        </td>
                        {/* tags part */}
                        <td className=" border-l"><p className=" ml-2 flex items-center space-x-1 line-clamp-1">
                            <span className=" border-2 font-semibold p-[2px] rounded">#DigitalTransition</span>
                            <span className=" border-2 font-semibold p-[2px]  rounded">#Motor</span>
                        </p>
                        </td>
                        {/* Next meeting part */}
                        <td className=" border-l"><p className=" ml-2">
                            <span className=" text-green-400 border border-green-400 bg-green-200 shadow-md  font-semibold p-[2px] rounded">Automation</span>
                        </p>
                        </td>
                        <td className=" border-l w-8"><p className=" ml-2">+</p></td>
                    </tr>
                    {/* row 7 */}
                    <tr className=" border-t">
                        <td className=" py-2 w-10">
                            <input type="checkbox" className=" checkbox ml-2" name="" id="" />
                        </td>
                        {/* brand part */}
                        <td className=" border-l w-[160px]">
                            <div className=" flex items-center justify-between gap-2">
                                <div className=" flex items-center justify-center ml-2 gap-1">
                                    <img className="w-5 h-5 rounded-md" src="https://i.ibb.co/9TGpxcd/Shophipy.png" alt="" />
                                    <p className=" font-bold">Shopify</p>
                                </div>
                            </div>
                        </td>
                        {/* description part */}
                        <td className=" border-l text-sm">
                            <p className=" ml-2 line-clamp-1 font-bold">Include design purpose used</p>
                        </td>
                        {/* avatar part */}
                        <td className=" border-l">
                            <p className=" ml-2">
                                <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/B6zjvx1/profile-pic-4.png" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/D4HvFvw/293340925-1276517123087848-1178323713058583906-n.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/dKGPbn2/photo-1508214751196-bcfd4ca60f91-1.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </p>
                        </td>
                        {/* categories part */}
                        <td className=" border-l">
                            <p className=" ml-2 space-x-1">
                                <span className=" text-orange-300 border bg-orange-100 border-orange-300 font-semibold p-[2px] rounded">E commerce</span>
                                <span className=" text-yellow-300 border bg-yellow-100 border-yellow-300 font-semibold p-[2px] rounded">B-2B</span>
                            </p>
                        </td>
                        {/* tags part */}
                        <td className=" border-l"><p className=" ml-2 flex items-center space-x-1 line-clamp-1">
                            <span className=" border-2 font-semibold p-[2px] rounded">#OnlineShopping</span>
                            <span className=" border-2 font-semibold p-[2px]  rounded">#Digital</span>
                        </p>
                        </td>
                        {/* Next meeting part */}
                        <td className=" border-l"><p className=" ml-2">
                            <span className=" text-blue-400 border border-blue-400 bg-blue-200 shadow-md  font-semibold p-[2px] rounded">Tomorrow</span>
                        </p>
                        </td>
                        <td className=" border-l w-8"><p className=" ml-2">+</p></td>
                    </tr>
                    {/* row 8 */}
                    <tr className=" border-t">
                        <td className=" py-2 w-10">
                            <input type="checkbox" className=" checkbox ml-2" name="" id="" />
                        </td>
                        {/* brand part */}
                        <td className=" border-l w-[110px]">
                            <div className=" flex items-center justify-between gap-2">
                                <div className=" flex items-center justify-center ml-2 gap-1">
                                    <img className="w-5 h-5 rounded-md" src="https://i.ibb.co/HG9krDV/mainchip.png" alt="" />
                                    <p className=" font-bold">Mainchip</p>
                                </div>
                            </div>
                        </td>
                        {/* description part */}
                        <td className=" border-l text-sm">
                            <p className=" ml-2 line-clamp-1 font-bold">Development app in an a Automation</p>
                        </td>
                        {/* avatar part */}
                        <td className=" border-l">
                            <p className=" ml-2">
                                <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/v4rNR8z/Whats-App-Image-2024-02-27-at-16-31-58-b363b7e5.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/Nr4CPXt/ROY-0012-1.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/B6zjvx1/profile-pic-4.png" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/dKGPbn2/photo-1508214751196-bcfd4ca60f91-1.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </p>
                        </td>
                        {/* categories part */}
                        <td className=" border-l">
                            <p className=" ml-2 space-x-1">
                                <span className=" text-green-300 border bg-green-100 border-green-500 font-semibold p-[2px] rounded">SAAS</span>
                                <span className=" text-orange-300 border bg-orange-100 border-orange-500 font-semibold p-[2px] rounded">Mobile</span>
                            </p>
                        </td>
                        {/* tags part */}
                        <td className=" border-l"><p className=" ml-2 flex items-center space-x-1 line-clamp-1">
                            <span className=" border-2 font-semibold p-[2px] rounded">#TaliCommunication</span>
                            <span className=" border-2 font-semibold p-[2px]  rounded">#Coding</span>
                        </p>
                        </td>
                        {/* Next meeting part */}
                        <td className=" border-l"><p className=" ml-2">
                            <span className=" text-blue-400 border border-blue-400 bg-blue-200 shadow-md  font-semibold p-[2px] rounded">Tomorrow</span>
                        </p>
                        </td>
                        <td className=" border-l w-8"><p className=" ml-2">+</p></td>
                    </tr>
                    {/* row 9 */}
                    <tr className=" border-t">
                        <td className=" py-2 w-10">
                            <input type="checkbox" className=" checkbox ml-2" name="" id="" />
                        </td>
                        {/* brand part */}
                        <td className=" border-l w-[110px]">
                            <div className=" flex items-center justify-between gap-2">
                                <div className=" flex items-center justify-center ml-2 gap-1">
                                    <img className="w-5 h-5 rounded-md" src="https://i.ibb.co/2Nkdf02/Paypal.jpg" alt="" />
                                    <p className=" font-bold">Paypal</p>
                                </div>
                                <p className=" mr-2 flex items-center gap-1"><IoCopyOutline></IoCopyOutline> 2</p>
                            </div>
                        </td>
                        {/* description part */}
                        <td className=" border-l text-sm">
                            <p className=" ml-2 line-clamp-1 font-bold">Payment method by Paypal</p>
                        </td>
                        {/* avatar part */}
                        <td className=" border-l">
                            <p className=" ml-2">
                                <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/v4rNR8z/Whats-App-Image-2024-02-27-at-16-31-58-b363b7e5.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/Nr4CPXt/ROY-0012-1.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/ChqTCD0/albert-dera-ILip77-Sbm-OE-unsplash.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/dKGPbn2/photo-1508214751196-bcfd4ca60f91-1.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/B6zjvx1/profile-pic-4.png" />
                                        </div>
                                    </div>
                                </div>
                            </p>
                        </td>
                        {/* categories part */}
                        <td className=" border-l">
                            <p className=" ml-2">
                                <span className=" text-purple-500 border bg-purple-100 border-purple-500 font-semibold p-[2px] rounded">Automation</span>
                            </p>
                        </td>
                        {/* tags part */}
                        <td className=" border-l"><p className=" ml-2 flex items-center space-x-1 line-clamp-1">
                            <span className=" border-2 font-semibold p-[2px] rounded">#DigitalTransition</span>
                            <span className=" border-2 font-semibold p-[2px]  rounded">#Motor</span>
                        </p>
                        </td>
                        {/* Next meeting part */}
                        <td className=" border-l"><p className=" ml-2">
                            <span className=" text-green-400 border border-green-400 bg-green-200 shadow-md  font-semibold p-[2px] rounded">Automation</span>
                        </p>
                        </td>
                        <td className=" border-l w-8"><p className=" ml-2">+</p></td>
                    </tr>
                    {/* row 10 */}
                    <tr className=" border-t">
                        <td className=" py-2 w-10">
                            <input type="checkbox" className=" checkbox ml-2" name="" id="" />
                        </td>
                        {/* brand part */}
                        <td className=" border-l w-[110px]">
                            <div className=" flex items-center justify-between gap-2">
                                <div className=" flex items-center justify-center ml-2 gap-1">
                                    <img className="w-5 h-5 rounded-md" src="https://i.ibb.co/1qPGDYR/wfox.jpg" alt="" />
                                    <p className=" font-bold">Wfox</p>
                                </div>
                                <p className=" mr-2 flex items-center gap-1"><IoCopyOutline></IoCopyOutline> 2</p>
                            </div>
                        </td>
                        {/* description part */}
                        <td className=" border-l text-sm">
                            <p className=" ml-2 line-clamp-1 font-bold">Development personalized fitness</p>
                        </td>
                        {/* avatar part */}
                        <td className=" border-l">
                            <p className=" ml-2">
                                <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/Nr4CPXt/ROY-0012-1.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/v4rNR8z/Whats-App-Image-2024-02-27-at-16-31-58-b363b7e5.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/B6zjvx1/profile-pic-4.png" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-6 border-none">
                                            <img src="https://i.ibb.co/dKGPbn2/photo-1508214751196-bcfd4ca60f91-1.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </p>
                        </td>
                        {/* categories part */}
                        <td className=" border-l">
                            <p className=" ml-2">
                                <span className=" text-purple-500 border bg-purple-100 border-purple-500 font-semibold p-[2px] rounded">Automation</span>
                            </p>
                        </td>
                        {/* tags part */}
                        <td className=" border-l"><p className=" ml-2 flex items-center space-x-1 line-clamp-1">
                            <span className=" border-2 font-semibold p-[2px] rounded">#DigitalTransition</span>
                            <span className=" border-2 font-semibold p-[2px]  rounded">#Motor</span>
                        </p>
                        </td>
                        {/* Next meeting part */}
                        <td className=" border-l"><p className=" ml-2">
                            <span className=" text-green-400 border border-green-400 bg-green-200 shadow-md  font-semibold p-[2px] rounded">Automation</span>
                        </p>
                        </td>
                        <td className=" border-l w-8"><p className=" ml-2">+</p></td>
                    </tr>
                    {/* row 11 */}
                    <tr className=" border-t">
                        <td className=" py-2 w-10">
                        </td>
                        {/* brand part */}
                        <td className=" border-l w-[110px]">
                            <div className=" flex items-center justify-end gap-2">
                                <p className=" mr-2 flex items-center gap-1">
                                    <FaMeta></FaMeta> Count
                                </p>
                            </div>
                        </td>
                        {/* description part */}
                        <td className=" border-l">
                            <div className=" flex items-center justify-end gap-2">
                                <p className=" mr-2 flex items-center gap-1">
                                    + Add Calculation
                                </p>
                            </div>
                        </td>
                        {/* avatar part */}
                        <td className=" border-l">
                            <div className=" flex items-center justify-end gap-2">
                                <p className=" mr-2 flex items-center gap-1">
                                    + Add Calculation
                                </p>
                            </div>
                        </td>
                        {/* categories part */}
                        <td className=" border-l">
                            <div className=" flex items-center justify-end gap-2">
                                <p className=" mr-2 flex items-center gap-1">
                                    + Add Calculation
                                </p>
                            </div>
                        </td>
                        {/* tags part */}
                        <td className=" border-l py-2">
                            <div className=" flex items-center justify-end gap-2">
                                <p className=" mr-2 flex items-center gap-1">
                                    + Add Calculation
                                </p>
                            </div>
                        </td>
                        {/* Next meeting part */}
                        <td className=" border-l"><p className=" ml-2">
                            <span className=" text-green-400 border border-green-400 bg-green-200 shadow-md  font-semibold p-[2px] rounded">Automation</span>
                        </p>
                        </td>
                        <td className=" border-l w-8"><p className=" ml-2">+</p></td>
                    </tr>
                </table>
            </div>
            {/* Footer button */}
            <div className=" mt-20 flex items-center justify-center">
                <div className=" flex justify-center items-center gap-2 border rounded shadow w-fit p-1">
                    {/* Notification button */}
                    <button className=" flex gap-2 items-center border rounded-md py-2 px-3 font-bold">
                        <IoIosNotifications />
                        Selected
                    </button>
                    {/* Archive button */}
                    <button className=" flex gap-2 items-center border rounded-md py-2 px-3 font-bold">
                        <RiDeleteBin2Line />
                        Archived
                    </button>
                    {/* Delete button */}
                    <button className=" text-red-700 flex gap-2 items-center border rounded-md py-2 px-3 font-bold">
                        <RiDeleteBin7Line />
                        Delete
                    </button>
                    {/* more button */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="flex justify-center items-center gap-1 border-2 px-2 rounded-md py-2 font-bold">
                            More
                            <IoIosArrowDropdown />
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    {/* cross button */}
                    <button className=" btn btn-sm text-xl">
                        X
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MarketingTeam;