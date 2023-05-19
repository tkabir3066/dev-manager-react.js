/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function AddContact() {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    bio: "",
    gender: "male",
    dateOfBirth: new Date(),
  });

  const { firstName, lastName, email, profession, bio, gender, dateOfBirth } =
    contact;
  const handleChange = () => {};

  const handleSubmit = () => {};
  return (
    <>
      <h2 className="text-center">AddContact</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="firstName" column>
              First Name
            </Form.Label>
          </Col>

          <Col sm={9}>
            <Form.Control
              type="text"
              name="firstName"
              id="firstName"
              onChange={handleChange}
              value={firstName}
              placeholder="Enter your First Name"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="lastName" column>
              Last Name
            </Form.Label>
          </Col>

          <Col sm={9}>
            <Form.Control
              type="text"
              name="lastName"
              id="lastName"
              onChange={handleChange}
              value={lastName}
              placeholder="Enter your First Name"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="email" column>
              Email
            </Form.Label>
          </Col>

          <Col sm={9}>
            <Form.Control
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={email}
              placeholder="Enter your email id"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="profession" column>
              Profession
            </Form.Label>
          </Col>

          <Col sm={9}>
            <Form.Control
              type="text"
              name="profession"
              id="profession"
              onChange={handleChange}
              value={profession}
              placeholder="Enter your Profession"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="dateOfBirth" column>
              Date of Birth
            </Form.Label>
          </Col>

          <Col sm={9}>
            <Form.Control
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              onChange={handleChange}
              value={dateOfBirth}
              placeholder="Enter yourDate of Birth"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="gender" column>
              Gender
            </Form.Label>
          </Col>

          <Col sm={9}>
            <Form.Check
              type="radio"
              name="male"
              id="gender"
              onChange={handleChange}
              value="male"
              placeholder="Enter yourDate of Birth"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="bio" column>
              Bio
            </Form.Label>
          </Col>

          <Col sm={9}>
            <Form.Control
              type="text"
              name="bio"
              id="bio"
              onChange={handleChange}
              value={profession}
              placeholder="Enter your Bio"
            />
          </Col>
        </Form.Group>
      </Form>
    </>
  );
}

export default AddContact;
