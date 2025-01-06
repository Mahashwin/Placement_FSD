import { Outlet } from 'react-router'
import '../components/navbar.css'
// import { Link } from 'react-router-dom'
// var handleLogout=()=>{
//      localStorage.clear("k")
// }

const Navbar = () => {
    var User = localStorage.getItem("k")
    return (
        <header>
            <nav className="jii">
                <div >
                    <h1>{User}</h1>
                    {/* <button onClick={handleLogout}><a href="\">Logout</a>
                    </button> */}
                </div>
                <div>
                    <ul>
                        <li><a href="/"></a></li>
                        <li><a href="/navbar"></a>
                        </li>
                        <li><a href="/navbar/contact">Contact</a></li>
                        {/* <li><a href="/about">About</a></li> */}
                        {/* <li><a href="/navbar/project">Project</a></li> */}
                        <li><a href="/navbar/usestate">Usestate</a>
                        </li>
                        <li><a href="/navbar/useref">Useref</a></li>
                        <li><a href="/navbar/usecontext">UseContext</a></li>
                        {/* <li><a href="/usememo">Usememo</a></li> */}
                        {/* <li><a href="/home">Home</a></li> */}
                        {/* <li><a href="/signup">Signup</a></li> */}
                    </ul>
                </div>
            </nav>
        <Outlet/>    
        </header>

    )
}

export default Navbar