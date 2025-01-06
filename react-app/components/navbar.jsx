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
                        {/* <li><a href="/">Login</a></li> */}
                        <li><a href="/contact">Contact</a></li>
                        {/* <li><a href="/about">About</a></li> */}
                        <li><a href="/project">Project</a></li>
                        <li><a href="/usestate">Usestate</a>
                        </li>
                        <li><a href="/useref">Useref</a></li>
                        <li><a href="/usecontext">UseContext</a></li>
                        {/* <li><a href="/usememo">Usememo</a></li> */}
                        <li><a href="/home">Home</a></li>
                        {/* <li><a href="/signup">Signup</a></li> */}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar