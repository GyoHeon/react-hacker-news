import { useState, useEffect } from "react";
import styled from "styled-components";

function InfoModal(props) {
  return (
    <Dim opened={props.open}>
      <Modal
        opened={props.open}
        className={props.open ? "opened modal" : "closed modal"}
      >
        <header></header>
        <h1>About This Site</h1>
        <p>
          This is a simple Hacker News clone, built with React. It was created
          as part of a collaboration project, [KDT]Megabyte School : UXUI &
          K-Digital Training FE.
          <br />
          <br /> You can't write on this site, but only read.
          <br /> It suports some unique setting options. Below are some tips to
          help you use the site.
        </p>
        <ul>
          <ModalList>Menu</ModalList>
          <ModalList>Appearance</ModalList>
          <ModalList>Sort option</ModalList>
          <ModalList>Title mode</ModalList>
        </ul>
        <span>Copyright 2022. 02. Hacker News. All rights reserved</span>
      </Modal>
    </Dim>
  );
}

const Dim = styled.div`
  display: ${(props) => (props.opened ? "flex" : "none")};
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
  animation: modal-dim 0.5s;
  @keyframes modal-dim {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const Modal = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  position: fixed;
  height: 600px;
  width: 375px;
  bottom: 0;
  left: 0;
  z-index: 9;
  padding: 0 20px;
  display: ${(props) => (props.opened ? "flex" : "none")};
  flex-direction: column;
  border-radius: 20px 20px 0px 0px;
  animation: modal-show 0.5s;
  @keyframes modal-show {
    from {
      bottom: -600px;
    }
    to {
      bottom: 0;
    }
  }
  header {
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
  }
  h1 {
    color: ${(props) => props.theme.textColor};
    font-size: 28px;
    font-weight: 500;
    padding-bottom: 32px;
    border-bottom: 1px solid ${(props) => props.theme.listItem.line};
    margin-bottom: 20px;
  }
  p {
    text-align: left;
    font-size: 14px;
    line-height: 20px;
    color: ${(props) => props.theme.listTop.text};
    margin-bottom: 40px;
  }
  span {
    color: ${(props) => props.theme.listTop.text};
    font-size: 10px;
    text-align: left;
    margin-top: 20px;
  }
`;
const ModalList = styled.li`
  background-color: ${(props) => props.theme.modalBtn};
  color: ${(props) => props.theme.textColor};
  width: 100%;
  height: 48px;
  border-radius: 8px;
  padding: 12px 20px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

export default InfoModal;
