import Home from "./Home"
import './About.css';
import Footer from "./Footer";

function About() {
    return ( <div className = "text" >
        
        < Home />
        <img src ="https://media.istockphoto.com/photos/about-web-banner-the-word-about-built-from-letters-on-wooden-cubes-picture-id1335204621?b=1&k=20&m=1335204621&s=170667a&w=0&h=4Ttl3LHvYqyEGYLXEMDqyAY7CV8zhR2SlVS3f_W3SFw=" alt="bug"  style={{width:"300px",marginTop:"50px",marginLeft:"550px"}}/>
        <h1 style = {
            { color: "brown", textAlign: "center" }
        } > ABOUT US </h1>  <p> <b> About the florists: </b>< br/> Nikki Tibbles Wild at Heart is a creative London florists specialising in event planning and weddings, among other things.Nikki Tibbles founded the company back in 1993 and it’ s now a leading name in luxurious flower arrangement
        for events around the world as well as
        for businesses, media and private homes. < br />
        <br /> <b> Nikki </b> founded the Wild at Heart Foundation in 2015 with one ambition, to bring an end to the world's 600 million stray dog problem. The Wild at Heart Foundation now funds and supports animal welfare projects worldwide by organising and sponsoring rescue projects, neutering programmes, awareness campaigns and education initiatives.</p >
        <Footer />
        </div >
    )
}
export default About