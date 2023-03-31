import { Link } from "react-router-dom"

export default function Navabar(){
    return(
       <div className="navabar  container">
        <a href="#" className="logo" >F<span>oo</span>diesHub</a>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="reciepe">Recipes</Link>
            <Link to="about">Settings</Link>
        </div>

        <div className="sidebar-btn active">
           <div className="bar"></div>
           <div className="bar"></div>
           <div className="bar"></div>
        </div>
       </div>
    )
}