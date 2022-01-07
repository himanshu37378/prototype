
import Btn from "./Btn";
import Macbook from "./Macbook.png"
function Container(){

    return (
       <div className="large-container">
           <div className="cont-write">
           <h1 className="cont-heading">OpenType features</h1>
           <h1 className="cont-heading">and Variable fonts</h1>

           <Btn value="Try For Free" name="Try For Free" className="btn blue"/>
           </div>

 <div className="cont-img">
           <img src={Macbook} alt="Cimage" className="cont-img"/>
           </div>
           
       </div>
    )

}

export default Container;