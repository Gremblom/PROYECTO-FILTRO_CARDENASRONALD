import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear,faBell } from '@fortawesome/free-solid-svg-icons'
import {useHistory} from "react-router-dom";
import logo from "../asset/KARIO_LOGO.png";

export default function Gestor(){
    let history = useHistory();
    const { isOpen, onOpen, onClose } = useDisclosure()

    const logOut = ()=>{
        localStorage.removeItem("token");
        history.push("/login");
    }

    return(
        <div className='gestor'>
            <FontAwesomeIcon icon={faGear} size="lg" style={{color: "#000000",}} />
            <FontAwesomeIcon icon={faBell} size="lg" style={{color: "#000000",}}/>
            <img src={logo} onClick={onOpen} className='redondear' width={50} alt="" />

            <Modal isOpen={isOpen} onClose={onClose} top size='xs'>
            <ModalOverlay />
                <ModalContent>
                <ModalFooter>
                    <Button colorScheme='green' variant='outline' mr={3} onClick={onClose}>
                    Close
                    </Button>
                    <Button colorScheme='red' variant='outline' onClick={logOut}>LogOut</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </div>
    )
};