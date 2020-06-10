import React from "react";
import { Label } from "semantic-ui-react";

const Feedback: React.FC<{
  hasSubmittedAnswer: Boolean;
  isCorrect: Boolean;
  answer: string;
}> = ({ hasSubmittedAnswer, isCorrect, answer }) => {
  if (hasSubmittedAnswer) {
    if (isCorrect) {
      return (
        <Label pointing="left" color="green">
          {"✅"}
        </Label>
      );
    } else {
      return <Label pointing="left" color="red">{`╳ ${answer}`}</Label>;
    }
  }
  return null;
};

export default Feedback;
