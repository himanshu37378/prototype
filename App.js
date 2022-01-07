
// import Features from "./Features";
// import Btntrans from "./Btntrans";
import Btn from "./Btn";
import Paragraph from "./Paragraph";
import Navbar from "./Navbar";
import image from "./Capture.PNG"
import coverimg from "./image.png"
import Lheading from "./Lheading";
import Sheading from "./Sheading";
import Tiles from "./Tiles";
import Macbook from "./Macbook.png"
import Imgtile from "./Imgtile";
import Smallimg from "./smallimg.jpg"
import Slogos from "./SLogos";
import logos from "./logos.png"
import Teastimolialtiles from "./Teastimonialtiles";
import Container from "./Container";
import Footer from "./Footer";
import person1 from "./person_1.jfif"
import person2 from "./person_2.jfif"
import fork from "./fork.png"
import infinity from "./infinity.png"
import alien from "./outer-space-alien.png"

import './App.css';





function App() {
return( 
    


    <div className="App">

<Navbar />
<div className="margin-bottom"></div>

<div className="heading">

    <h1 className="">Work at the speed</h1>
    <h1 className="">of thought</h1>

    </div>

<Paragraph className="padding-10 paragraph">Most calendars are designed for teams. Slate is designed for </Paragraph>
<Paragraph className="padding-10 paragraph">freelancers who want a simple way to plan their schedule. </Paragraph>

<div className="margin-bottom"></div>


<Btn  name="Try For Free" value="Try For Free" className="btn blue"/> 

<Btn  name="Learn More" value="Learn More"  className="btn trans"/><br/>

<img src={coverimg} alt="ffff" className="cover-img margin-top"/>

<div className="margin-bottom"></div>
<div className="margin-top-100"></div>

<Lheading txt="FEATURES"/>
<Paragraph className="padding-10 paragraph">Most calendars are designed for teams. Slate is designed for </Paragraph>
<Paragraph className="padding-10 paragraph">freelancers who want a simple way to plan their schedule. </Paragraph>

<div className="margin-bottom"></div>


<div className="feature">
<div className="feature-img">
    <img src={image} alt="ffff" className="image"/>
</div>

<div className="feature-text">

<div className="lable"><img src={fork} alt="ffff" className="icons"/><Sheading txt="A single source of truth"/></div>
<Paragraph>When you add work to your Slate calendar we automatically calculate useful insights</Paragraph>

<div className="lable"><img src={infinity} alt="ffff" className="icons"/><Sheading txt="Intuitive interface"/></div>
<Paragraph>When you add work to your Slate calendar we automatically calculate useful insights</Paragraph>

<div className="lable"><img src={alien} alt="ffff" className="icons"/><Sheading txt="Or with rules"/></div>
<Paragraph>When you add work to your Slate calendar we automatically calculate useful insights</Paragraph>
</div>
</div>


<div className="margin-bottom"></div>

<Lheading txt="CONTENTS"/>
<Paragraph className="padding-10 paragraph">Most calendars are designed for teams. Slate is designed for </Paragraph>
<Paragraph className="padding-10 paragraph">freelancers who want a simple way to plan their schedule. </Paragraph>

<div className="tiles">
<Tiles title="Work" text="Ever wondered if you're too reliant on a client for work? Slate helps you identify ." Btn="Sign up" src={Macbook}/>

<Tiles title="Design with real data" text="Ever wondered if you're too reliant on a client for work? Slate helps you identify ." Btn="Try For Free" src={Macbook}/>
</div>
<div className="margin-bottom"></div>

<Lheading txt="Gallery"/>
<Paragraph className="padding-10 paragraph">We focus on ergonomics and meeting you where you work.</Paragraph>
<Paragraph className="padding-10 paragraph">It's only a keystroke away.</Paragraph>
<div className="margin-bottom-50"></div>
<div className="tiles">
<Imgtile src={Smallimg} className="img-1"/>
<Imgtile src={Smallimg} className="img-1"/>
<Imgtile src={Smallimg} className="img-1"/>
<Imgtile src={Smallimg} className="img-1"/>
</div>

<div className="tiles">
<Imgtile src={Smallimg} className="img-2"/>
<Imgtile src={Smallimg} className="img-1"/>
<Imgtile src={Smallimg} className="img-2"/>
</div>
<div className="margin-bottom-50"></div>

<Btn  name="See more" value="See more" className="btn trans"/>

<div className="margin-bottom"></div><br/><br/>

<div className="margin-top-100"></div>
<Lheading txt="Partners"/>

<Paragraph className="padding-10 paragraph">We focus on ergonomics and meeting you where you work.</Paragraph>
<Paragraph className="padding-10 paragraph">It's only a keystroke away.</Paragraph>

<Slogos src={logos} className="logos"/>
<Slogos src={logos} className="logos"/>
<Slogos src={logos} className="logos"/>
<Slogos src={logos} className="logos"/>
<Slogos src={logos} className="logos"/>
<Slogos src={logos} className="logos"/>

<div className="margin-bottom-50"></div>

<Btn  name="All Partners" value="All Partners" className="btn trans"/>


<div className="margin-bottom"></div><br/><br/>

<div className="margin-top-100"></div>

<Lheading txt="Testimonials"/>
<div className="margin-bottom"></div>

<Teastimolialtiles text="Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.Slate helps you see how many more days you need to work to reach your financial goal for the month and year." title="Designer" name="Claire Bell" src={person1}/> 

<Teastimolialtiles text="Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.Slate helps you see how many more days you need to work to reach your financial goal for the month and year." title="Designer" name="Francisco Lane"  src={person2}/> 
<br/>
<Teastimolialtiles text="Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.Slate helps you see how many more days you need to work to reach your financial goal for the month and year." title="Designer" name="Ralph Fisher"  src={person1}/> 

<Teastimolialtiles text="Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.Slate helps you see how many more days you need to work to reach your financial goal for the month and year." title="Designer" name="Jorge Murphy"  src={person2}/> 

<div className="margin-bottom"></div><br/><br/>

<div className="margin-top-100"></div>


<div>
<Container/>
</div>
<br/>

<br/>

<div className="margin-bottom"></div><br/><br/>

<div className="margin-top-100"></div>

<div>
<Footer />
</div>




 </div>
)
}
    // <h1>hwelooo all</h1>
    // <Btntrans />
    // <Features />
    // <Btn />
export default App;