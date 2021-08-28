import React from 'react';
import styled from "styled-components";

const BackgroundModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 90;
    background-color: rgba(0, 0, 0, 0.7);
`;

const AreaModal = styled.div`
    background-color: var(--white-active);
    padding: 15px;
    border-radius: 10px;
`;


const Modal = (props) => {

    return (
        <>
        {props.visible === true &&
            <BackgroundModal>
                <AreaModal>
                    {props.children}
                </AreaModal>
            </BackgroundModal>        
        }
        </>
    );
}

export default Modal;