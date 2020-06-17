import React from "react";
import { Message } from "semantic-ui-react";

const VerbLearnedMessage: React.FC<{ learned: boolean }> = ({ learned }) => {
  if (learned) {
    return (
      <Message color="green">
        Great job! You've learned this verb. Carry on with this one or try
        another
      </Message>
    );
  } else {
    return null;
  }
};

export default VerbLearnedMessage;
