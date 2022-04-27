import React from "react";
import "./about.css";
import Award from '../../img/award.png'
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Looking for a new carreer as a developer and my first job.
        </p>
        <p className="a-desc">
          Self employed for the last 7 years in my own small logistics company with  10 employees, traying to shift my carreer into new things. Always had a passion for coding, i think that it's time persue it. 
        </p>
        <div className="a-award">
            <img src={Award} alt="" className="a-award-img" />
            <div className="a-award-texts">
                <h4 className="a-award-title">Un award</h4>
                <p className="a-award-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, similique totam. Harum veniam quos modi cum aut inventore veritatis est.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
