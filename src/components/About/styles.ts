import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.6); /* Fundo preto com opacidade para suavizar */
  color: white; /* Texto branco para contraste */

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.4rem;
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3 {
    margin-top: 2rem;
    color: var(--green);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  .about-image {
    text-align: center;
    img {
      margin-top: 2rem;
      width: 50%; /* Reduza a largura para 50% */
      border-radius: 15px; /* Adiciona bordas arredondadas */
      filter: grayscale(0);
      transition: filter 0.5s;
      &:hover {
        filter: grayscale(0);
      }
    }
  }
  
  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img {
        margin-top: 2rem;
        width: 80%; /* Para telas menores, ajusta a largura */
        border-radius: 15px; /* Mantém as bordas arredondadas */
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }
  
  @media (max-width: 960px) {
    display: block;
    text-align: center;
  
    .hard-skills {
      justify-content: center;
    }
  
    .about-image {
      display: flex;
      max-width: 100%;
      img {
        margin-top: 2rem;
        width: 70%; /* Ajuste intermediário para telas médias */
        border-radius: 15px; /* Mantém as bordas arredondadas */
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }  
`;
