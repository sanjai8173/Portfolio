import './Mywork.css';
import blog from './blog.png';
import EDWAC from './EDWAC.png';
import bid from './bidding.png';

function  Mywork(){
	return(
		 <div>
            <div className="container" style={{ marginTop: '100px' }}>
                <div className="about">
                    <h1>#1 Blog-app</h1>
                    <p>The "Blog App" is a dynamic and interactive full-stack web application that allows users to read and share blog posts on various topics. This platform provides an engaging space for bloggers to create, publish, and manage their articles. </p>
                </div>
                <div className="image-container">
                	<img src={blog} alt="Blog-app" />
                </div>
            </div>
            <div className="container" style={{ marginTop: '200px' }}>
            	<div className="image-container">
                	<img src={EDWAC} alt="EDWAC" />
                </div>
                <div className="about">
                    <h1>#2 EDWAC</h1>
                    <p>EDWAC is a social media-like blog posting site developed using React as the frontend framework. The name EDWAC stands for "Even Dead We Are Connected," emphasizing the platform's purpose to keep people connected through posts and discussions.</p>
                </div>
            </div>
            <div className="container" style={{ marginTop: '200px' }}>
                <div className="about">
                    <h1>#2 BID-2-SELL</h1>
                    <p>Hello everyone this is BID2SELL.It is india's one of the leading bidding platform to sell and bid for those products.here you can independently bid foor any products without any interruptions which means with full fledge freedom.</p>
                </div>
                <div className="image-container">
                	<img src={bid} alt="bidding" />
                </div>
            </div>
        </div>
		)
}

export default Mywork;