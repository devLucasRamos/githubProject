import React from "react";
import * as S from "./styled";

function Footer() {
  return (

      <footer>
        <S.Wrapper>
          <div className="container">
              <p className="link">App desenvolvido por <a href="https://www.linkedin.com/in/devlucasramos/" target="_blank" rel="noreferrer">Lucas Ramos</a></p>
              <p className="link">e esse é o meu <a href="https://github.com/devLucasRamos" target="_blank" rel="noreferrer">Github</a></p>
          </div>
        </S.Wrapper>
      </footer>
  );
}
export default Footer;