import logo from "./logo.png"
import Btn from "./Btn";
import Sheading from "./Sheading";
import ham from "./hamburger.png"
import './App.css';

function Navbar(){
return(
    
    <div className="navigation">
    <div>
    
    </div>
    <div className="">
    <img src={logo} alt="ffff" className="logo " />
        <a href="#d"><Sheading txt="Home" className="nav  " /></a>
        <a href="#d"><Sheading txt="Product" className="nav " /></a>
        <a href="#d"><Sheading txt="About" className="nav " /></a>
        <a href="#d"><Sheading txt="Contact" className="nav " /></a>
        <Btn name="Login" value="Login" className="btn trans " />
        <a href="#d"><img src={ham} alt="ffff" className="ham up" /></a>
    </div>
    </div>
    );
}

export default Navbar;