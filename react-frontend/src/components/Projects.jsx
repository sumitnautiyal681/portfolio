import "../App.css";
import mediAid from "../assets/MediAid.png";
import disease from "../assets/disease prediction.jpg";
import potato from "../assets/potato.jpg";

const projects = [
  {
    img: mediAid,
    title: "MediAid",
    desc: `MediAid is a smart healthcare solution designed to make medical support more accessible and efficient. The platform integrates AI-driven disease prediction, doctor appointment booking, and video consultation features into a single user-friendly application.`,
    link: "https://github.com/sumitnautiyal681/MediAid",
  },
  {
    img: disease,
    title: "Disease Prediction Model",
    desc: `The “Disease Prediction” method predicts the user's disease based on symptoms provided as input and returns the disease's likelihood as output.`,
    link: "https://github.com/sumitnautiyal681/Disease-Prediction-",
  },
  {
    img: potato,
    title: "Potato Disease Classification",
    desc: `This project uses Convolutional Neural Networks (CNNs) to classify potato plant leaves into healthy or diseased categories, achieving high accuracy.`,
    link: "https://github.com/sumitnautiyal681/Potato-Disease-Detection",
  },
];

const Projects = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">Projects</h1>

        <div className="work-list">
          {projects.map((project, index) => (
            <div className="work" key={index}>
              <img src={project.img} alt={project.title} />
              <div className="layer">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://github.com/sumitnautiyal681"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          See More
        </a>
      </div>
    </div>
  );
};

export default Projects;
