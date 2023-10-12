
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Read from "./API/api";
import React, { useState } from 'react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import axios from 'axios';
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

export default function List() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const ApiData = Read();
  const [oneData, setOneData] = useState([]);

  function obtenerColor(numero) {
    if (numero >= 1 && numero <= 34) {
      return 'red';
    } else if (numero >= 35 && numero <= 67) {
      return 'orange';
    } else if (numero >= 68 && numero <= 100) {
      return 'green';
    } else {
      return 'Color no definido';
    }
  }

  const getOne = async (id) => {
    axios.get(`http://localhost:7234/api/indicador/one/${id}`)
      .then((response) => {
        setOneData(response.data)
        onOpen(true)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <div className="list">
      <div className="header">
        <div className="negrilla">Indicador</div>
        <div className="negrilla">Descripcion</div>
        <div className="negrilla">Categoria</div>
        <div className="negrilla">Fecha de Inicio</div>
        <div className="negrilla">Fecha de Terminación</div>
        <div className="negrilla">Formula</div>
        <div className="negrilla">Frecuencia</div>
        <div className="negrilla">Cumplimiento</div>
        <div className="negrilla">Area</div>
      </div>
      <div className='padre'>
        {ApiData.map((data) => {
          const desc = data.Descripcion.slice(0, 9);
          const id = data._id
          return (
            <div className='items'>
              <div className="item" onClick={() => { getOne(id); }}>
                <div>{data.Indicador}</div>
                <div>{desc}...</div>
                <div>{data.Categoria}</div>
                <div>{data.FechaInicio}</div>
                <div>{data.FechaTerminacion}</div>
                <div>{data.Formula}</div>
                <div>{data.Frecuencia}</div>
                <div>
                  <CircularProgress value={data.Cumplimiento} size='70px' color={obtenerColor(data.Cumplimiento)}>
                    <CircularProgressLabel>{data.Cumplimiento}%</CircularProgressLabel>
                  </CircularProgress>
                </div>
                <div>{data.Area}</div>
              </div>
              <div className='faBarss'>
                <FontAwesomeIcon icon={faBars} size="2xl" style={{ color: "#000000", }} />
              </div>
            </div>
          )
        })}
      </div>
      <div>
        <Link to="/indicador">
          <button className='btnAddelement'>Añadir Elemento</button>
        </Link>
      </div>
      <Modal isOpen={isOpen} size='6xl' onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Detalles</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          {oneData.length > 0 && (
            <table class="rounded-table">
              <thead>
                <tr>
                  <th>Indicador</th>
                  <th>Descripcion</th>
                  <th>Categoria</th>
                  <th>Fecha de Inicio</th>
                  <th>Fecha de Terminacion</th>
                  <th>Formula</th>
                  <th>Frecuencia</th>
                  <th>Cumplimiento</th>
                  <th>Area</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{oneData[0].Indicador}</td>
                  <td>{oneData[0].Descripcion}</td>
                  <td>{oneData[0].Categoria}</td>
                  <td>{oneData[0].FechaInicio}</td>
                  <td>{oneData[0].FechaTerminacion}</td>
                  <td>{oneData[0].Formula}</td>
                  <td>{oneData[0].Frecuencia}</td>
                  <td>{oneData[0].Cumplimiento}%</td>
                  <td>{oneData[0].Area}</td>
                </tr>
              </tbody>
            </table>
          )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}