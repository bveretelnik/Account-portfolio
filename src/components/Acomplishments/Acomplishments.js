import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 130, text: "Задоволених клієнтів" },
  { number: 80, text: "Успіщно відкритих ФОПів" },
  { number: 2000, text: "Успішно поданих звітів" },
  { number: 5000, text: "Підготовлено первинних документів" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Особисті досягнення</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
