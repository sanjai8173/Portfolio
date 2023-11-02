import fb from "./fb.png";
import x from "./x.png";
import lin from "./lin.png";
import "./Contactme.css";

function  Contactus(){
	return(
		<div>
            <div className="container" style={{marginTop: '17vh'}}>
                <div className="about">
                	<div className="image-container">
                    <img src={lin} alt="linked-in" className="img"/>
                    </div>
                    <a href="https://www.linkedin.com/in/sanjai-gandhi/"><h2>@SANJAI GANDHI S</h2></a>
                </div>
                <div className="about">
                    <div className="image-container">
                    <img src={x} alt="twitter-x" className="img"/>
                    </div>
                    <a href="https://twitter.com/SANJAI_GANDHI_0"><h2>@SANJAI_GANDHI_0</h2></a>
                </div>
                <div className="about">
                	<div className="image-container">
                    <img src={fb} alt="facebook" className="img"/>
                    </div>
              		<a href="https://github.com/sanjai8173"><h2>@sanjai8173</h2></a>
                </div>
            </div>
        </div>
		)
}

export default Contactus;