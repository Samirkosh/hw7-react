import React from "react";
import styled from "styled-components";

export const ModalUi = ({ children, onClose }) => {
  return (
    <ContainerModal className="container-modal">
      <Backdrop className="backdrop" onClick={onClose}></Backdrop>
      <Modal className="modal">{children}</Modal>
    </ContainerModal>
  );
};

const ContainerModal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 2;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.633);
  position: fixed;
  z-index: -1;
`;

const Modal = styled.div`
  width: 400px;
  height: auto;
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  color: black;
  position: relative;
  z-index: 99;
`;
