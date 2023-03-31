

export default function Navabar(){
    return(
       <div className="navabar  container">
        <a href="#" className="logo" >F<span>oo</span>diesHub</a>
        <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Recipes</a>
            <a href="#">Settings</a>
        </div>

        <div className="sidebar-btn active">
           <div className="bar"></div>
           <div className="bar"></div>
           <div className="bar"></div>
        </div>
       </div>
    )
}