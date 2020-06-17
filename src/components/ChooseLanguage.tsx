import React from "react";
import { Button, ButtonProps } from "semantic-ui-react";
import styled from "styled-components";

const Padding = styled.div`
  padding-bottom: 10px;
`;

const ChooseLanguage: React.FC<{ language: string; setLanguage: Function }> = ({
  language,
  setLanguage,
}) => {
  const onChange = (_: ButtonProps, data: ButtonProps) =>
    setLanguage(data.value);

  return (
    <Padding>
      <Button.Group>
        <Button
          onClick={onChange}
          value="french"
          active={language === "french"}
        >
          <span role="img" aria-label="French">
            🇫🇷
          </span>
        </Button>
        <Button
          onClick={onChange}
          value="italian"
          active={language === "italian"}
        >
          <span role="img" aria-label="Italian">
            🇮🇹
          </span>
        </Button>
      </Button.Group>
    </Padding>
  );
};

export default ChooseLanguage;
