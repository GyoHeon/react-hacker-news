import { BottomSheet } from "react-spring-bottom-sheet";
import { useState } from "react";
import styled from "styled-components";
import "react-spring-bottom-sheet/dist/style.css";

function InfoModal() {
  const [open, setOpen] = useState(false);
  function onDismiss() {
    setOpen(false);
  }
  return (
    <>
      <Div className="App">
        <button onClick={() => setOpen(true)}>Open</button>
        <BottomSheet open={open} onDismiss={onDismiss}>
          <p>
            Using onDismiss lets users close the sheet by swiping it down,
            tapping on the backdrop or by hitting esc on their keyboard.
          </p>
          <div className="bg-gray-200 block rounded-md h-10 w-full my-10" />
          <p>The height adjustment is done automatically, it just works™!</p>
          <div className="bg-gray-200 block rounded-md h-10 w-full my-10" />
          <button onClick={onDismiss} className="w-full">
            Dismiss
          </button>
        </BottomSheet>
      </Div>
    </>
  );
}

const Div = styled.div`
  background-color: red;
`;

export default InfoModal;
