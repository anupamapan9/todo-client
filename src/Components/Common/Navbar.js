import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Navbar = ({ children }) => {
    const [user, loading, error] = useAuthState(auth)
    const navBar = <>
        <li><NavLink to='/'>Home</NavLink ></li>
        <li><NavLink to='/todo'>Todo</NavLink ></li>
    </>
    const logout = <button onClick={() => signOut(auth)} className='btn btn-accent'> LogOut</button>
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar bg-base-300 px-20">
                    <div className="flex-1 px-2 mx-2"><Link to='/'>ToDo App</Link></div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal gap-5">
                            {/* <!-- Navbar menu content here --> */}
                            {navBar}

                            {user && logout}
                        </ul>
                    </div>
                    <div className="flex-none lg:hidden">
                        <label for="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                </div>
                {/* <!-- Page content here --> */}
                {
                    children
                }
            </div>
            <div className="drawer-side">
                <label for="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    {navBar}
                    {user && logout}
                </ul>

            </div>
        </div>
    );
};

export default Navbar;