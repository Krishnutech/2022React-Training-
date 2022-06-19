
import './design.css';

import { BiCalendarEvent } from "react-icons/bi";
function Design() {
    return (
        <div className="banner">
            <div className="container">
                <div className="header-part">

                    <div className="header-left">
                        <div className="small-box"></div>

                        <div className="header-name">
                            <h1>YOUR LOGO</h1>
                        </div>
                    </div>

                    <div className="header-right">
                        <ul>
                            <li>HOME</li>
                            <li>ABOUT</li>
                            <li>SERVICE</li>
                            <li>CONTACT</li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className=" second-section">
                <div className="content">

                    <h1>TRAVELING</h1>
                    <span>WITH A PLEASANT TRIP</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and  text of the  ever since  text of the printing  <br />
                        typesetting industry. Lorem Ipsum has been the industry text of the printing and
                        dummy text ever since<br /> text of the printing and  text of  the 1500s, printer took a galley of type and when an unknown   <br />
                        crambled it to make a type specimen book. It has survived not only text of the
                        .</p>
                </div>

            </div>
            <div className="btn-style">
                <button className="button-color">GET STARTED</button>
            </div>

            <div className=" container box-content">
                <div className="box-content1">
                    <div className="box-head">
                        <h2>Package 01</h2>
                        <div></div>
                        <p>Lorem Ipsum industry type <br />
                            setting has  has been<br />
                            has been the  text
                            dummy text <br /> text of ever since</p>
                    </div>
                    <div className="box-head">
                        <h2>Package 02</h2>
                        <div></div>
                        
                        <p>Lorem Ipsum industry type <br />
                            setting has  has been<br />
                            has been the  text
                            dummy text <br /> text of ever since</p>
                    </div>


                    <div className="box-head">
                        <h2>Package 03</h2>
                        <div></div>
                        <p>Lorem Ipsum industry type <br />
                            setting has  has been<br />
                            has been the  text
                            dummy text <br /> text of ever since</p>
                    </div>     


                </div>
            </div>


        </div>
    );

}
export default Design;