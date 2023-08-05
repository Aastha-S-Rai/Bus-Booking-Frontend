import React from "react";
import Button from 'react-bootstrap/Button';

export const Submit = (props) => {
  const { text } = props;
  return (
    <>
      <div className="submitButton">
        <Button variant="primary" size="lg">
          {text}
        </Button>
      </div>
    </>
  );
};

export default Submit;
