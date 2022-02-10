import { useState, useEffect } from "react";
import styled from "styled-components";

function ProfileModal({ open, data }) {
  return (
    <Dim opened={open}>
      <Modal opened={open} className={open ? "opened modal" : "closed modal"}>
        <header></header>
        <h1>About This Site</h1>
        <p></p>
        <ul>
          <ModalList>Submissions</ModalList>
          <ModalList>Favorites</ModalList>
          <ModalList>Comments</ModalList>
        </ul>
        <span>Copyright 2022. 02. Hacker News. All rights reserved</span>
      </Modal>
    </Dim>
  );
}

const Dim = styled.div`
  display: ${(props) => (props.opened ? "flex" : "none")};
  position: fixed;
  height: 771px;
  width: 375px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
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
  width: 100%;
  height: 48px;
  border-radius: 8px;
  padding: 12px 20px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

export default ProfileModal;
