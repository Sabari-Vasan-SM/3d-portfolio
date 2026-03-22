import "./styles/About.css";
import { aboutData } from "../data/contactData";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          {aboutData.careerObjectiveSummary}
        </p>
      </div>
    </div>
  );
};

export default About;
