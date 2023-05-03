import React from "react";
import styles from "../styles/About.module.css";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

export default function About() {
  function cycleSkills() {}

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <article style={{ width: "80%" }}>
          <h2>Bio</h2>
          <div>
            Hi, I'm Zach Barnes, a Database Software Developer with a passion
            for software engineering and delivering value wherever I go. Ever
            since I was a child, I've been fascinated by computers and the
            endless possibilities they offer. This lifelong interest led me to
            pursue a career in software development, where I specialize full
            stack development.
            <br /> <br />
            My love for coding and problem-solving has fueled my growth in the
            industry, allowing me to tackle complex projects with efficiency and
            precision. As a developer, I enjoy the challenge of creating
            dynamic, scalable, and user-friendly applications that make a
            positive impact on people's lives. I am constantly seeking to expand
            my skills and stay up-to-date with the latest technologies and best
            practices in the field.
            <br /> <br />
            Programming is my passion and I eagerly look forward to bringing
            that passion to a like-minded team that shares my enthusiasm for
            coding and innovation.
          </div>
        </article>
        <article style={{ width: "20%" }}>
          <h2>Links</h2>
          <div>
            <Link href="https://www.socphones.com">
              <p className={styles.link}>My Store</p>
            </Link>
          </div>
        </article>
      </section>
      <section className={styles.section}>
        <article style={{ width: "45%" }}>
          <h2>Skills</h2>
          <div className={styles.skills}>
            <p style={{ fontSize: "medium" }}>Apollo</p>
            <p>React</p>
            <p style={{ fontSize: "x-large" }}>REST</p>
            <p>Mocha</p>
            <p style={{ fontSize: "xx-large" }}>Next.js</p>
            <p style={{ fontSize: "x-large" }}>PostGres</p>
            <p>UX</p>
            <p style={{ fontSize: "xx-large" }}>SQL Server</p>
            <p style={{ fontSize: "medium" }}>prisma</p>
            <p style={{ fontSize: "xx-large" }}>Git</p>
            <p style={{ fontSize: "medium" }}>Nest.js</p>
            <p style={{ fontSize: "xx-large" }}>CSS</p>
            <p style={{ fontSize: "x-large" }}>HTML</p>
            <p style={{ fontSize: "x-large" }}>SSMS</p>
            <p style={{ fontSize: "medium" }}>Express</p>
            <p style={{ fontSize: "x-large" }}>MongoDB</p>
            <p style={{ fontSize: "x-large" }}>UI</p>
            <p style={{ fontSize: "small" }}>C++</p>
            <p style={{ fontSize: "xxx-large" }}>Javascript</p>
            <p style={{ fontSize: "small" }}>GrpahQL</p>
          </div>
        </article>
        <article style={{ width: "55%" }}>
          <h2>Socials</h2>
          <div className={styles.socials}>
            <span className={styles.socialLink}>
              <SocialIcon url="https://www.linkedin.com/in/zach-barnes-92436614b/" />
            </span>
            <span className={styles.socialLink}>
              <SocialIcon url="https://stackoverflow.com/users/15714528/zbarnz" />
            </span>
            <span className={styles.socialLink}>
              <SocialIcon url="https://github.com/zbarnz" />
            </span>
            <span className={styles.socialLink}>
              <SocialIcon url="https://open.spotify.com/user/21owwbqdhkmgcp67vkmx42amy?si=695a8a9eaa8846cf" />
            </span>
            <span className={styles.socialLink}>
              <SocialIcon url="mailto:zbarnz@yahoo.com" />
            </span>
          </div>
        </article>
      </section>
      <section className={styles.section}>
        <article>
          <h2>Experience</h2>
          <div>
            As an accomplished software developer with a passion for creating
            innovative solutions, I bring extensive experience working with a
            variety of programming languages and technologies, such as React,
            Next.js, MongoDB, GraphQL, Nest.js, PostgreSQL, Prisma, Express, and
            Apollo. I have a proven track record of developing and managing
            projects that streamline workflows, enhance user experiences, and
            drive business growth.
            <br /> <br />
            My recent projects include Agenda, a meeting streamlining
            application for professionals, the Bentley Consulting Association
            website, and Prescient, a daily habit tracker application. I have
            also been accepted into OpenAI's Alpha ChatGPT Plugin developer
            program, where I creatively leverage Generative Pretrained
            Transformers to develop new plugins. My portfolio, which showcases
            my diverse technical expertise, can be found at
            https://github.com/zbarnz.
            <br /> <br />
            In my professional career, I have worked as an SQL Database
            Developer at Vistar, where I developed a highly customized warehouse
            management system using SQL server database stored procedures, and
            as a Software Developer at SocNet, where I built and managed web
            applications using various JavaScript libraries.
            <br /> <br />I am well-versed in SCRUM and Agile project management
            techniques, allowing me to efficiently deliver solutions that meet
            business and customer deadlines. My strong communication skills
            enable me to effectively collaborate with team members,
            stakeholders, and clients to achieve common goals. I am always eager
            to learn new technologies and take on additional responsibilities to
            drive the success of any project I undertake.
          </div>
        </article>
      </section>
    </main>
  );
}
