import '../components/navbar.css'
// import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <header>
            <nav class="jii">
                <div >
                    <h1>{props.Name}</h1>
                </div>
                <div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/project">Project</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar