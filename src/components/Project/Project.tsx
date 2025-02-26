import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";

export function Project() {
  const { language } = useContext(LanguageContext);

  return (
    <Container id="project">
      <h2>{language === 'pt' ? 'Meus Projetos' : 'My Projects'}</h2>
      <div className="projects">

        {/* Projeto 1 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/CodeVinayak/Serverless-Voting-Application" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://vote.vinayaksingh.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>{language === 'pt' ? 'Aplicação de Votação Serverless para Linguagens de Programação' : 'Serverless Voting Application for Programming Languages'}</h3>
              <p>
                {language === 'pt'
                  ? "Desenvolvi uma aplicação de votação serverless usando React, AWS Lambda, API Gateway e DynamoDB, permitindo que os usuários visualizem linguagens de programação, votem e acessem detalhes por meio de uma interface interativa, aproveitando a arquitetura serverless para escalabilidade e eficiência de custos."
                  : "Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI, leveraging serverless architecture for scalability and cost-efficiency."}
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>AWS Lambda</li>
                <li>API Gateway</li>
                <li>DynamoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Projeto 2 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/CodeVinayak/AI-Chatbot-Assistant" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://ai-chatbot-t8fn.onrender.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>{language === 'pt' ? 'GeniusBot: Assistência com IA e Análise de PDF' : 'GeniusBot: AI-Powered Assistance with PDF Insight'}</h3>
              <p>
                {language === 'pt'
                  ? "Desenvolvi um chatbot interativo usando Streamlit, o modelo de linguagem GPT-3.5-turbo da OpenAI e PyPDF2 para extração de texto de PDFs, permitindo que os usuários façam perguntas contextuais sobre PDFs enviados e consultas gerais."
                  : "Developed an interactive chatbot application using Streamlit, OpenAI's GPT-3.5-turbo language model, and PyPDF2 for PDF text extraction, enabling users to ask context-based questions on uploaded PDFs and general queries."}
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Streamlit</li>
                <li>PyPDF2</li>
                <li>LangChain</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Projeto 3 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/CodeVinayak/Jupyter-Notebook/tree/main/Credit%20Risk%20Analysis" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://github.com/CodeVinayak/Jupyter-Notebook/blob/main/Credit%20Risk%20Analysis/Credit_Risk_Analysis.ipynb" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>{language === 'pt' ? 'Análise de Risco de Crédito' : 'Credit Risk Analysis Project'}</h3>
              <p>
                {language === 'pt'
                  ? "Desenvolvi um modelo de classificação de risco de crédito altamente preciso usando XGBoost, alcançando 100% de precisão, recall e F1-scores para prever inadimplências. Implementei pré-processamento de dados, engenharia de features e ajuste de hiperparâmetros em dados desbalanceados, utilizando métodos de ensemble, validação cruzada e técnicas de interpretação de modelos."
                  : "Developed a highly accurate credit risk classification model using XGBoost, achieving 100% precision, recall, and F1-scores for predicting loan defaults. Implemented rigorous data preprocessing, feature engineering, and hyperparameter tuning on imbalanced credit risk data, employing ensemble methods, cross-validation, and model interpretation techniques."}
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>XGBoost</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Projeto 4 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/CodeVinayak/MediBook-Medical-Appointment-Scheduler-with-Health-History" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://medibook.vinayaksingh.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>{language === 'pt' ? 'MediBook: Agendador de Consultas Médicas com Histórico de Saúde' : 'MediBook: Medical Appointment Scheduler with Health History'}</h3>
              <p>
                {language === 'pt'
                  ? "Desenvolvi uma plataforma segura de gerenciamento de consultas médicas com funcionalidades CRUD, utilizando controle de acesso baseado em papéis, técnicas de criptografia e um banco de dados MySQL robusto com esquema normalizado e stored procedures para agendamento eficiente, privacidade de dados e recuperação confiável de registros de pacientes."
                  : "Developed a secure medical appointment management platform with CRUD functionality, utilizing role-based access control, encryption techniques, and a robust MySQL database with normalized schema design and stored procedures for efficient scheduling, data privacy, and reliable retrieval of patient records."}
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Projeto 5 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/CodeVinayak/Real-Time-Hand-Gesture-Driven-3D-Object-Manipulation" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://youtu.be/NOm-3MynPLE" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>{language === 'pt' ? 'Manipulação de Objetos 3D com Gestos de Mão em Tempo Real' : 'Real-Time Hand Gesture-Driven 3D Object Manipulation'}</h3>
              <p>
                {language === 'pt'
                  ? "Desenvolvi um sistema de reconhecimento de gestos de mão em tempo real para manipulação intuitiva de objetos 3D. Utilizei uma abordagem multimodal integrando OpenCV para processamento de vídeo, MediaPipe para detecção de mãos e extração de landmarks, e scikit-learn para treinamento de modelos de machine learning. Alcançei 95,2% de precisão na classificação de gestos com desempenho eficiente em tempo real."
                  : "Developed a real-time hand gesture recognition system for intuitive 3D object manipulation. Leveraged a multimodal approach integrating OpenCV for video processing, MediaPipe for hand detection/landmark extraction, and scikit-learn for machine learning model training. Achieved 95.2% accuracy in hand gesture classification with efficient real-time performance."}
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>OpenCV</li>
                <li>MediaPipe</li>
                <li>scikit-learn</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Projeto 6 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://velocityai.vinayaksingh.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>VeloCityAI</h3>
              <p>
                {language === 'pt'
                  ? "VelocityAI é um site que permite aos usuários obter respostas instantâneas para qualquer pergunta e gerar imagens impressionantes usando os modelos GPT-3 e DALL-E da OpenAI. Com o VelocityAI, os usuários podem digitar prompts baseados em texto e receber uma resposta correspondente."
                  : "VelocityAI is a website that allows users to get instant answers to any question and generate stunning AI pictures using OpenAI's GPT-3 and DALL-E model. With VelocityAI, users can type in text-based prompts and receive a corresponding response."}
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}