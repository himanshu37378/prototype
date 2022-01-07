import Sheading from "./Sheading";
import facebook from "./facebook (1).png"
import linkedin from "./linkedin (2).png"
import twitter from "./twitter (1).png"

function Footer(){

    return(
<div className="footer">
<div className="side-1">
    <div  className="headings">
    <ul>
    <li><Sheading txt="Fingertipe" className="margin-bottom-10"/></li>
    <li>Home</li>
    <li>Examples</li>
    <li>Pricing</li>
    <li>Update</li>
</ul>
    </div>
<br/>
    <div className="headings-1">
    <ul>
    <li><Sheading txt="Resources" className="margin-bottom-10"/></li>
    <li>Home</li>
    <li>Examples</li>
    <li>Pricing</li>
    <li>Update</li>
</ul>
    </div>
    <br/>
    <div className="headings-2">
    <ul>
    <li><Sheading txt="About" className="margin-bottom-10"/></li>
    <li>Home</li>
    <li>Examples</li>
    <li>Pricing</li>
    <li>Update</li>
</ul>
    </div>

</div>






<div>
<div className="side-2 margin-bottom-30">
    <ul>
    <li>7480 Mockingbird Hill undefined </li>
    <li>(239) 555-0108</li>
    <li ><img src={facebook} alt="ffff" className="social"/><img src={twitter} alt="ffff" className="social"/><img src={linkedin} alt="ffff" className="social"/></li>

</ul>
</div>





</div>
</div>
    );
}

export default Footer;