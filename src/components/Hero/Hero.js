import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Привіт! <br />
        Я, Богдан, твій особистий бухгалтер
      </SectionTitle>
      <SectionText>
        Моя ціль надати якісні бухгалтерські послуги 📓 для підприємців які
        працюють в ІТ сфері 🧑‍💻. <br />
        <br />
        Маєш питання? ✍️
      </SectionText>
      <Button onClick={() => (window.location = "https://t.me/b_veretelnik")}>
        Telegram
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
