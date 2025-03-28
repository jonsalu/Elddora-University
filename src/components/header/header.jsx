import React from "react";
import './header.css'
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement('#root')

const Header = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    function handleModal () {
        if (modalIsOpen === true) {closeModal()}
         else
            {openModal()}
    }

    return(
        <div className="header">
            <div className="logo">
                <img src="/logo-sem-fundo.png" alt="" />
                
            </div>
            <button id="menu-header" onClick={handleModal}>Menu</button>

            <div className="navbar-header">
                <a href="#">Home</a>
                <a href="#">About us</a>
                <a href="#">Scholarhip</a>
                <a href="#">Event</a>
                <a href="#">New semester</a>
            </div>

            <div className="resp-nav">

                <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                        <div className="modal-bar">
                            <button onClick={closeModal}>Close</button>
                            <a href="#">Home</a>
                            <a href="#">About us</a>
                            <a href="#">Scholarhip</a>
                            <a href="#">Event</a>
                            <a href="#">New semester</a>
                        </div>
                </Modal>
                    
            </div>
        </div>
    )
}

export default Header