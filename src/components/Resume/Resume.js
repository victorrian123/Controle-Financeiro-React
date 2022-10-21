import React from "react";
import ResumeItens from "../ResumeItens/ResumeItens";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = ({ income, expense, total }) => {
  return (
    <C.Container>
      <ResumeItens
        Icon={FaRegArrowAltCircleUp}
        title='Entradas'
        value={income}
      />
      <ResumeItens
        Icon={FaRegArrowAltCircleDown}
        title='Saidas'
        value={expense}
      />
      <ResumeItens Icon={FaDollarSign} title='Total' value={total} />
    </C.Container>
  );
};

export default Resume;
