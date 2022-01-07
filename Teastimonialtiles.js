import Slogos from "./SLogos";

import Paragraph from "./Paragraph";


function Teastimolialtiles(props){
    return(
  
    <div className="reviews">

        <div className="name-bar">
<div className="pic">
<Slogos src={props.src} className="profile"/>
</div>
    <div className="name">
    <p>{props.name}</p>
    <p>{props.title}</p>
    
    </div>
    </div>
    <div className="write">
    <Paragraph>{props.text}</Paragraph>
    </div>
    </div>

    );
}

export default Teastimolialtiles;  