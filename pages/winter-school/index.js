import Image from "next/image";
import styles from "./WinterSchool.module.scss";
import winterSchoolLogo from "../../images/winterSchoolLogo.png";
import Link from "next/link";
import CourseCard from "../../components/cards/CourseCard";
import winterBackground from "../../images/winterBackground.jpg";
import webdev from "../../images/webdev.png";
import github from "../../images/github.png";
import dsa from "../../images/dsa.png";
import cert from "../../images/winterSchool/cert.svg";
import project from "../../images/winterSchool/project.svg";
import intern from "../../images/winterSchool/intern.svg";
import doubt from "../../images/winterSchool/doubt.svg";
import ritvik from "../../images/team/Ritvik.png";
import mamoor from "../../images/team/IMG_20221123_235128_261 - Mamoor Jaan Khan.jpg";
import karthik from "../../images/team/Vobugari Raja Karthik - Raja Karthik.jpg";

const Card = ({ name, imageURL, designation }) => {
  return (
    <div className={styles.facilitatorCard}>
      <Image src={imageURL} alt="facilitator" />
      <p>{name}</p>
      <span>{designation}</span>
    </div>
  );
};

function index() {
  return (
    <div id={styles.winterSchoolContainer}>
      <Image
        id={styles.winterBackground}
        priority={true}
        src={winterBackground}
        alt=""
      />
      <section id={styles.winterTheme}>
        <Image src={winterSchoolLogo} id={styles.winterSchoolLogo} alt="" />
        <h1 id={styles.winterSchoolTitle}>Winter School</h1>
      </section>
      <section id={styles.coursesContainer}>
        <h1>Courses Offered</h1>
        <div id={styles.winterSchoolCourses}>
          <CourseCard
            imgURL={github}
            courseName={"Git & GitHub"}
            courseDescription={
              "Learn how the business world uses Git and its cloud sister, Github, to keep track of all its code. By the end of this course, you will be able to comprehend the fundamentals of Git and Github, as well as design a template website using Jekyll or start your portfolio website using Github Pages."
            }
          />
          <CourseCard
            imgURL={dsa}
            courseName={"Data Structure & Algorithm"}
            courseDescription={
              "DSA is a magnet for high-paying professions and a competency required to be a successful programmer. It provides the groundwork for who you want to be. By the end of this course, you should be able to grasp how data structures are used in real-world scenarios and have received some basic training in answering practical interview questions."
            }
          />
          <CourseCard
            imgURL={webdev}
            courseName={"Web Development"}
            courseDescription={
              "Through project-based learning, learn how to build a website using HTML/CSS and Javascript. By the conclusion of this course, you will have built your own personal portfolio website and launched it on Github."
            }
          />
        </div>
      </section>
      <div id={styles.benefitsWrapper}>
        <section id={styles.courseBenefitsContainer}>
          <div className={styles.benefitsIcon}>
            <Image src={cert} alt="" />
            <p className={styles.benefitText}>Certificate from GDSC</p>
          </div>
          <div className={styles.benefitsIcon}>
            <Image src={doubt} alt="" />
            <p className={styles.benefitText}>1:1 Doubt Clearance Session</p>
          </div>
          <div className={styles.benefitsIcon}>
            <Image src={intern} alt="" />
            <p className={styles.benefitText}>
              Potential Internship Counselling
            </p>
          </div>
          <div className={styles.benefitsIcon}>
            <Image src={project} alt="" />
            <p className={styles.benefitText}>
              Practical Project Implementation
            </p>
          </div>
        </section>
      </div>
      <h1 id={styles.FacilitatorsTitle}>Course Facilitators</h1>
      <section id={styles.courseFacilitators}>
        <Card
          name={"Mamoor Jaan Khan"}
          designation={"Development Lead"}
          imageURL={mamoor}
        />
        <Card name={"Ritvik G"} designation={"GDSC Lead"} imageURL={ritvik} />
        <Card
          name={"Vobugari Raja Karthik"}
          designation={"Senior Web Developer"}
          imageURL={karthik}
        />
      </section>
    </div>
  );
}

export default index;
