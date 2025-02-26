import { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";
import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
// import { Form } from "../Form/Form";

export function Contact() {
  // Aqui obtém a linguagem definida no contexto
  const { language } = useContext(LanguageContext);

  return (
    <Container id="contact">
      <header>
        <h2>{language === 'pt' ? 'Contato' : 'Contact'}</h2>
        <p>
          {language === 'pt'
            ? "Pronto para iniciar seu projeto?"
            : "Ready to get started on your project?"}
        </p>
        <p>
          {language === 'pt'
            ? "Fale comigo agora para uma consulta gratuita."
            : "Contact me now for a Free consultation."}
        </p>
      </header>

      <div className="contacts">
        <div>
          <a href="mailto:Hello@vinayaksingh.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:Hello@vinayaksingh.com">fabiogarbato3006@gmail.com</a>
        </div>
        <div>
          <a href="tel:+919630576848">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+919630576848">(+55) 41 98737-2059</a>
        </div>
      </div>


      {/* <Form></Form> */}
    </Container>
  );
}
