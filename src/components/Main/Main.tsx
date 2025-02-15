import Particles from "react-tsparticles";
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";

export function Main() {
  return (
    <Container>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1
          },
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onHover: {
                enable: true,
                mode: "bubble"
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 10
              },
              push: {
                quantity: 4
              }
            }
          },
          particles: {
            color: {
              value: "#00ff00"
            },
            move: {
              enable: true,
              speed: 1.5,
              outMode: "out"
            },
            number: {
              density: {
                enable: true,
                area: 1000
              },
              value: 50
            },
            opacity: {
              value: 0.7
            },
            shape: {
              type: "character",
              character: {
                value: [
                  "let", "const", "function", "if", "else", "for", "while", "def", "print", "#include", "int main()",
                  "return 0;", ";", "{", "}", "console.log", "import", "from", "class", "=>", "new", "async", "await"
                ],
                font: "monospace",
                style: "",
                weight: "400"
              }
            },
            size: {
              value: 16,
              random: true,
              animation: {
                enable: true,
                speed: 3,
                minimumValue: 10
              }
            }
          },
          background: {
            color: "#0a0a0a",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
          }
        }}
      />

      <Hero />
      <About />
      <Project />
      <Contact />
    </Container>
  );
}
