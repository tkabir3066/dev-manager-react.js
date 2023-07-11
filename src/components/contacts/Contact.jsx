/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import { format } from "date-fns";
import { object } from "yup";

const Contact = ({ contact, deleteContact }) => {
  const {
    id,
    firstName,
    lastName,
    email,
    profession,
    bio,
    gender,
    dateOfBirth,
    image,
  } = contact;
  return (
    <>
      <Card className="pb-2 mb-1">
        <div className="d-flex">
          <Card.Img variant="top" className="card-image" src={image} />
          <Card.Body>
            <Card.Title className="text-dark">
              Name : {firstName} {lastName}
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              Bio : {profession}
            </Card.Subtitle>
            <Card.Text>{bio}</Card.Text>

            <ListGroup className="list-group-flush">
              <ListGroup.Item>Gender: {gender}</ListGroup.Item>
              <ListGroup.Item>Email: {email}</ListGroup.Item>
              <ListGroup.Item>
                D.O.B:{" "}
                {dateOfBirth instanceof Object
                  ? format(dateOfBirth, "dd/MM/yyyy")
                  : dateOfBirth}
              </ListGroup.Item>
            </ListGroup>

            <div className="card-btn mt-3">
              <Card.Link>
                <Button variant="warning ms-5" size="md" type="view">
                  <FaEye />
                </Button>
              </Card.Link>
              <Card.Link>
                <Button
                  variant="danger ms-2"
                  size="md"
                  onClick={() => deleteContact(id)}
                >
                  <FaTrashAlt />
                </Button>
              </Card.Link>
            </div>
          </Card.Body>
        </div>
      </Card>
    </>
  );
};

export default Contact;
