import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from './pages/context/UserContext';
import './index.css'

export default function Layout() 
{

   const {currentUser, logout} = useContext(UserContext)

  return (
    <div>

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  {/* <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a className="navbar-brand " href="#"><h3>Kazi Tracker</h3></a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only"></span>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li className="nav-item">
          <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >Home</Link>
        </li>
        {
          currentUser ?
          <>
           <li className="nav-item">
              <Link to="/dashboard" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Dashboard</Link>
            </li>
            <li className="nav-item">
                <p onClick={()=>logout()} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</p>
            </li>
        </>
          :
          <>
          <li className="nav-item">
            <Link to="/register" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</Link>
          </li>
          </>
        }
      </ul>
    </div>
  </div> */}
</nav>
    
  <div className='bg-gray-100 text-lg container mx-auto min-h-[90vh]'>
    <Outlet />
    {/* render current route selected */}
  </div>
   
{/* <div>
  FOOTER
</div> */}


    </div>
  )
}
