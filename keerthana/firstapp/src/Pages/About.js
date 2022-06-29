import React from "react"
import Menubar from "./Menubar"
import Footer from "./Footer"
import './About.css'
const About = () => {
    return ( 
    <React.Fragment >
        <Menubar />
        <div className = " <aboutimage">
            <img src="https://www.bel-india.com/wp-content/uploads/2020/03/stage-company.jpg" alt="about"/>
            <h1 className="title" style={{  color: "white",fontSize:"43px",marginTop:"200px"}}>About Us</h1>
        </div><br /><br />
        <div className = "about">
            <div className = "content">
            <h2>NU Technology</h2>
            <p>NU Technology is one of the world's leading solution provider in the services and manufacturing industry. With our exceptional expertise in various software development platforms and core embedded industry, we strive to be the best when it comes to reliability, quality and support.
                <br />Founded in the year 2008 and headquartered at CA, USA, we are presently operating through many countries.</p>
            </div>
            <div className = "content2">
            </div>
            <div className = "content1">
                <img src="https://mechomotive.com/wp-content/uploads/2021/10/NU-logo.png" alt="Loading"></img>
            </div>
        </div>
        <h1>PROJECTS</h1>
        <div class="row1">
      
  <div class="column1">
    <img src="https://www.nutechnologyinc.com/wp-content/themes/nutechnology/img/oracle-commerce-cloud.png" alt="Oracle"/>
  </div>
  <div class="column1">
    <img src="https://www.nutechnologyinc.com/wp-content/themes/nutechnology/img/Elasticpath_color.png" alt="ElasticPath"/>
  </div>
  <div class="column1">
    <img src="https://www.nutechnologyinc.com/wp-content/themes/nutechnology/img/demandware_png.png" alt="Salesforce"/>
  </div>
  <div class="column1">
    <img src="https://www.nutechnologyinc.com/wp-content/themes/nutechnology/img/Magento_icon.png" alt="Magento" style={{width:"120px",heighr:"100px"}}/>
  </div>
  <div class="column1">
    <img src="https://www.nutechnologyinc.com/wp-content/themes/nutechnology/img/sap_hybr.png" alt="SAP Hybris"/>
  </div>
  <div class="column1">
    <img src="https://www.nutechnologyinc.com/wp-content/themes/nutechnology/img/commercetools.png" alt="CommerceTools"/>
  </div>
  <div class="column1">
    <img src="https://www.nutechnologyinc.com/wp-content/themes/nutechnology/img/demandware_png.png" alt="Salesforce CRM"/>
  </div>
  <div class="column1">
    <img src="https://www.nutechnologyinc.com/wp-content/themes/nutechnology/img/devops-icon.png" alt="Devops" style={{width:"120px",height:"120px"}}/>
  </div>
</div>
<div className = "about">
            <div className = "content">
            <h2>Mission</h2>
            <p>NU Technology is one of the world's leading solution provider in the services and manufacturing industry. With our exceptional expertise in various software development platforms and core embedded industry, we strive to be the best when it comes to reliability, quality and support.
                <br />Founded in the year 2008 and headquartered at CA, USA, we are presently operating through many countries.</p>
            </div>
            <div className = "content2">
            </div>
            <div className = "content1">
                <img src="https://www.projectmanager.com/wp-content/uploads/2018/11/181112_Blog_Feature_Mission.jpg" alt="Loading"></img>
            </div>
        </div>
        <div className = "about">
            <div className = "content">
            <h2>Vission</h2>
            <p>NU Technology is one of the world's leading solution provider in the services and manufacturing industry. With our exceptional expertise in various software development platforms and core embedded industry, we strive to be the best when it comes to reliability, quality and support.
                <br />Founded in the year 2008 and headquartered at CA, USA, we are presently operating through many countries.</p>
            </div>
            <div className = "content2">
            </div>
            <div className = "content1">
              <img src="http://www.delbylubricants.com/wp-content/uploads/2018/02/vision-542x340.png "alt="loadin"  />
            </div>
        </div>
<h1>Team</h1>
<div className="row11">
<div className="column11">
    <img src="https://www.pngrepo.com/png/170216/512/woman-avatar.png" alt="Person" style={{width:"220px",height:"200px"}}/>
    <h2>Member 1</h2>
  </div> 
  <div className="column11">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxj4nspNbebIUDkyktVan1PHs5d8XikbnlFQ&usqp=CAU" alt="Person" style={{width:"220px",height:"200px"}}/>
    <h2>Member 2</h2>
  </div> 
  <div className="column11">
    <img src="https://e7.pngegg.com/pngimages/431/495/png-clipart-computer-icons-avatar-female-avatar-heroes-black.png" alt="Person" style={{width:"220px",height:"200px"}}/>
    <h2>Member 3</h2>
  </div>  
  <div className="column11">
    <img src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg" alt="Person" style={{width:"220px",height:"200px"}}/>
    <h2>Member 4</h2>
  </div>  
</div>
        <Footer />
        </React.Fragment>
    )
}
export default About