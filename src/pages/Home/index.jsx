//import React from "react";
import Header from "../../Components/Header";
import Carousel from "../../Components/Carousel";
import About from "../../Components/About";
import Clinica from "../../Components/Clinica";
import Servicos from "../../Components/Servicos";
import Equipe from "../../Components/Equipe";
import Localaizacao from "../../Components/Localizacao"
import Contato from "../../Components/Contato";
import Titulo from "../../Components/Titulo";
//import "./index.css";

function Home() {
  return (
    <div>
      
      <Header />
      <Carousel />
      <Titulo title="QUEM SOMOS"/>
      <About />
      <Titulo title="A CLÍNICA"/>
      <Clinica />
      <Titulo title="SERVIÇOS"/>
      <Servicos />
      <Titulo title="EQUIPE"/>
      <Equipe />
      <Titulo title="LOCALIZAÇÃO"/>
      <Localaizacao/>
      <Titulo title="CONTATO"/>
      <Contato/>
    </div>
  );
}
export default Home;
