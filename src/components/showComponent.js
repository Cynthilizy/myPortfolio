import React from "react";
import MobileComponent from "./mobileComponent";
import WebsiteEmbed from "./websiteComponent";
import "../App.css";

const ShowComponent = () => {
  return (
    <div className="show">
      <div>
        <MobileComponent
          mobileName="Restaurant Customers App"
          description="this is the Customerss view of the restaurant app made with <span class='highlight'>React Native</span>, <span class='highlight'>Javascript</span> and <span class='highlight'>Firebase</span>. For best view, watch in full-screen mode."
          videoEmbed=""
          repoLink="https://github.com/Cynthilizy/foodie.git"
        />
      </div>
      <div>
        <MobileComponent
          mobileName="Restaurant Staff App"
          description="this is the Staffs view of the restaurant app made with <span class='highlight'>React Native</span>, <span class='highlight'>Javascript</span> and <span class='highlight'>Firebase</span>. For best view, watch in full-screen mode."
          videoEmbed="https://www.youtube.com/embed/bn0KEHmBKyQ?si=41Jk32maOMiny8Lm"
          repoLink="https://github.com/Cynthilizy/foodie.git"
        />
      </div>
      <div>
        <MobileComponent
          mobileName="Restaurant Riders App"
          description="this is the Riders view of the restaurant app made with <span class='highlight'>React Native</span>, <span class='highlight'>Javascript</span> and <span class='highlight'>Firebase</span>. For best view, watch in full-screen mode."
          videoEmbed="https://www.youtube.com/embed/N2xZ_gje0uY?si=drLm2QMHO13Pwxy3"
          repoLink="https://github.com/Cynthilizy/foodie.git"
        />
      </div>
      <div>
        <MobileComponent
          mobileName="Robotic Automation Process"
          description="this is a Mobile to automate a process using a robotic arm, made with <span class='highlight'>Python</span> and <span class='highlight'>AWS</span>. For best view, watch in full-screen mode."
          videoEmbed="https://example.com/demo2"
          repoLink="https://github.com/example/Mobile2"
        />
      </div>
      <div>
        <WebsiteEmbed
          websiteName="Bike Website"
          description="This is a React application that shows bike trips and station information in the Helsinki area. made with <span class='highlight'>React JS</span> <span class='highlight'>Javascript</span>, <span class='highlight'>SQL</span>, <span class='highlight'>Node JS</span>. For best view, watch in full-screen mode."
          src="https://8gwhwf-3000.csb.app/trip/stations"
          repoLink="https://github.com/Cynthilizy/dev_academy_exercise.git"
        />
      </div>
      <div>
        <WebsiteEmbed
          websiteName="Fashion House"
          description="this website gives the staffs an easier way to modify and save materials to the database, made with <span class='highlight'>React JS</span> <span class='highlight'>Javascript</span>, <span class='highlight'>SQL</span>, <span class='highlight'>Node JS</span>. For best view, watch in full-screen mode."
          src=""
          repoLink=""
        />
      </div>
    </div>
  );
};

export default ShowComponent;
