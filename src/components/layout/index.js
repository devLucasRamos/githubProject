import React from "react";
import Header from "../header";
import ooter from "../footer";
import * as S from "./styled";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <S.WrapperLayout>
      <Header />
      {children}
      <Footer/>
    </S.WrapperLayout>
  );
};

export default Layout;
