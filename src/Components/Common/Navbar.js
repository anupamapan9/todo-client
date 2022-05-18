import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ children }) => {
    const navBar = <>
        <li><NavLink to='/'>Home</NavLink ></li>
        <li><NavLink to='/todo'>Todo</NavLink ></li>
    </>
    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div class="w-full navbar bg-base-300 px-20">
                    <div class="flex-1 px-2 mx-2"><Link to='/'>ToDo App</Link></div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal gap-5">
                            {/* <!-- Navbar menu content here --> */}
                            {navBar}
                        </ul>
                    </div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                </div>
                {/* <!-- Page content here --> */}
                {
                    children
                }
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    {navBar}

                </ul>

            </div>
        </div>
    );
};

export default Navbar;