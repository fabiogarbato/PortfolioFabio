import { Container } from "./styles";
import VinayakSingh from "../../assets/VinayakSingh.png";
import wordpress from "../../assets/wordpress.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";

export function About() {
  const { language } = useContext(LanguageContext);

  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>{language === 'pt' ? 'Sobre mim' : 'About me'}</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            {language === 'pt'
              ? "Olá! Eu sou Fábio, um desenvolvedor full-stack com paixão por criar aplicações web robustas, escaláveis e fáceis de usar. Com expertise em HTML5, CSS3, JavaScript (ES6+), React.js, VueJS e Node.js, eu me especializo em criar experiências front-end dinâmicas e responsivas. No back end, trabalho com C#, .NET, MS-SQL Server, PostgreSQL e MySQL para garantir um gerenciamento de dados eficiente e de alto desempenho."
              : "Hi there! I'm Fábio, a full-stack developer with a passion for building robust, scalable, and user-friendly web applications. With expertise in HTML5, CSS3, JavaScript (ES6+), React.js, VueJS, and Node.js, I specialize in creating dynamic and responsive front-end experiences. On the back end, I work with C#, .NET, MS-SQL Server, PostgreSQL, and MySQL to ensure seamless data management and performance."}
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            {language === 'pt'
              ? "Também tenho ampla experiência em desenvolvimento de e-commerce, trabalhando com plataformas como Magento para entregar soluções personalizadas B2B e B2C. Seja criando funcionalidades personalizadas, otimizando desempenho ou integrando APIs REST, estou aqui para transformar suas ideias em realidade."
              : "I also have extensive experience in e-commerce development, working with platforms like Magento to deliver tailored B2B and B2C solutions. Whether it's crafting custom features, optimizing performance, or integrating REST APIs, I’m here to turn your ideas into reality."}
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            {language === 'pt'
              ? "Além do desenvolvimento, sou experiente em metodologias ágeis como Scrum, garantindo que os projetos sejam entregues de forma eficiente e colaborativa. Também priorizo código limpo e sustentável, com testes unitários e controle de versão usando Git, Gitea e GitHub."
              : "Beyond development, I’m well-versed in Agile methodologies like Scrum, ensuring projects are delivered efficiently and collaboratively. I also prioritize clean, maintainable code with unit testing and version control using Git, Gitea, and GitHub."}
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            {language === 'pt'
              ? "Se você está procurando criar um sistema, construir um site ou aprimorar sua presença online, adoraria ajudar. Vamos trabalhar juntos para transformar sua visão em realidade!"
              : "If you're looking to create a system, build a website, or enhance your online presence, I’d love to help. Let’s work together to bring your vision to life!"}
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 1000}>
          <h3>{language === 'pt' ? 'Aqui estão minhas principais habilidades' : 'Here are my main skills'}</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={wordpress} alt="Wordpress" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={VinayakSingh} alt="Vinayak Singh" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}