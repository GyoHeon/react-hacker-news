import { useState } from "react";
import styled from "styled-components";

function InfoModal() {
  const [open, setOpen] = useState(false);
  function onDismiss() {
    setOpen(false);
  }
  return (
    <>
      <Div>
        <button onClick={() => setOpen(true)}>Open</button>
      </Div>
    </>
  );
}

const Div = styled.div`
  background-color: red;
  height: 600px;
`;

export default InfoModal;
