import Sheading from "./Sheading";
import Paragraph from "./Paragraph";
import Btn from "./Btn";



function Tiles(props){
return(
    <div className="container">
        <div className="margin-bottom-50"></div>
    <Sheading txt={props.title} className="black" />
    <div className="margin-bottom-50"></div>
   
    <Paragraph  className="black para">{props.text}</Paragraph>
    
    <div className="margin-bottom-50"></div>
    <Btn name={props.Btn} value={props.Btn} className="btn blue"/>
    <div className="margin-bottom-50"></div>
    <br/>
    <img src={props.src} alt="hloo" className="lessimg"/>

    </div>
);
}

export default Tiles;