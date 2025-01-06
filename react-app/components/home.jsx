import React from "react";
import aj from '../src/assets/ajyajaya.jpg'
import '../components/navbar.css'
var handleLogout=()=>{
    localStorage.clear("k")
}
const Jayaanth = (props) => {
    // var User = localStorage.getItem("k")
    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>

                <h1 style={{
                    width: "300px",
                    border: "15px solid black",
                    padding: "100px",
                    margin: "20px",
                    // marginLeft:"350px",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center"
                }}>This is my Home page {props.Name}</h1>
                <button onClick={handleLogout}><a href="\">Logout</a>
                </button>
            </div>
            <img src={aj} alt="" />
        </>
    )
}
export default Jayaanth;