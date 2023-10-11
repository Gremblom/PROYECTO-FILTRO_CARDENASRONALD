import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react'
import {useState} from "react";  

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear,faBell } from '@fortawesome/free-solid-svg-icons'
import logo from "../asset/KARIO_LOGO.png";

export default function Gestor(){
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <div className='gestor'>
            <FontAwesomeIcon icon={faGear} size="lg" style={{color: "#000000",}} />
            <FontAwesomeIcon icon={faBell} size="lg" style={{color: "#000000",}}/>
            <img src={logo} onClick={onOpen} className='redondear' width={50} alt="" />

            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
                <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    A
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </div>
    )
};