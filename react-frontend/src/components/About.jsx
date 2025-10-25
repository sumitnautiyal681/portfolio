import "../App.css";
import profile from "../assets/Sumit Nautiyal Photo.jpg";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row about-row">
          {/* Left column: photo */}
          <div className="about-col-1">
            <img src={profile} alt="Sumit Nautiyal" />
          </div>

          {/* Right column: text content */}
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              Hi, I’m <b>Sumit Nautiyal</b> – a passionate Web Developer,
              Competitive Programmer, and Machine Learning Enthusiast from
              India. I love building smart, user-friendly web applications and
              exploring the potential of AI and data-driven solutions.
              <br />
              <br />
              With hands-on experience in <b>C++</b>, <b>Java</b>, and{" "}
              <b>Python</b>, I strive to create projects that are not only
              functional but also impactful. I enjoy solving challenging
              problems, learning new technologies, and sharing knowledge with
              the community.
            </p>

            {/* Tabs */}
            <div className="tab-titles">
              <p
                className="tab-links active-link"
                onClick={() => openTab("skills")}
              >
                Skills
              </p>
              <p
                className="tab-links"
                onClick={() => openTab("coding-profiles")}
              >
                My Coding Profiles
              </p>
              <p className="tab-links" onClick={() => openTab("education")}>
                Education
              </p>
            </div>

            {/* Tab contents */}
            <div className="tab-contents active-tab" id="skills">
              <ul>
                <li>
                  <span>C++/C</span>
                  <br /> Competitive Programmer
                </li>
                <li>
                  <span>Web Development</span>
                  <br /> Frontend + Backend (MERN)
                </li>
                <li>
                  <span>Machine Learning</span>
                  <br /> ML Enthusiast
                </li>
              </ul>
            </div>

            <div className="tab-contents" id="coding-profiles">
              <ul>
                <li>
                  <span>LeetCode</span> <br />
                  <a
                    href="https://leetcode.com/u/_sumit__nautiyal/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    _sumit__nautiyal
                  </a>
                </li>
                <li>
                  <span>Codeforces</span> <br />
                  <a
                    href="https://codeforces.com/profile/sumitnautiyal681"
                    target="_blank"
                    rel="noreferrer"
                  >
                    sumitnautiyal681
                  </a>
                </li>
                <li>
                  <span>CodeChef</span> <br />
                  <a
                    href="https://www.codechef.com/users/sumit_780"
                    target="_blank"
                    rel="noreferrer"
                  >
                    sumit_780
                  </a>
                </li>
              </ul>
            </div>

            <div className="tab-contents" id="education">
              <ul>
                <li>
                  <span>2022 - Current</span>
                  <br /> B.Tech CSE at Graphic Era Hill University
                </li>
                <li>
                  <span>2019 - 2021</span>
                  <br /> Intermediate at Sant Kabeer Academy, Dehradun
                </li>
                <li>
                  <span>2017 - 2019</span>
                  <br /> High School at APS, Ranikhet
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Tab logic
function openTab(tabName) {
  const tabLinks = document.querySelectorAll(".tab-links");
  const tabContents = document.querySelectorAll(".tab-contents");

  tabLinks.forEach((tab) => tab.classList.remove("active-link"));
  tabContents.forEach((content) => content.classList.remove("active-tab"));

  const activeLink = Array.from(tabLinks).find(
    (t) => t.textContent.replace(/\s+/g, "").toLowerCase() === tabName
  );
  const activeTab = document.getElementById(tabName);

  if (activeLink) activeLink.classList.add("active-link");
  if (activeTab) activeTab.classList.add("active-tab");
}

export default About;
