import React from "react";
import { AiOutlineKey } from "react-icons/ai";
import { TiFolderOpen } from "react-icons/ti";
import { AiOutlineTable } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Інструменти для роботи</SectionTitle>
    <SectionText>
      Для надання якісних послуг, обираю лише якісні сервіси 🙂
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <AiOutlineKey size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>ЦСК "Україна" </ListTitle>
          <ListParagraph>
            Кваліфікований надавач <br />
            електронних довірчих послуг
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <TiFolderOpen size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Вчасно</ListTitle>
          <ListParagraph>
            Сучасний сервіс електронного <br />
            документообігу
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiOutlineTable size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Taxer</ListTitle>
          <ListParagraph>
            Особистий онлайн <br />
            кабінет підприємця
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
