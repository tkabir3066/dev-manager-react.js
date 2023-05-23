/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";

function AddContact({ addContact }) {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    image: "",
    bio: "",
    gender: "male",
    dateOfBirth: new Date(),
  });

  const {
    firstName,
    lastName,
    email,
    profession,
    image,
    bio,
    gender,
    dateOfBirth,
  } = contact;

  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
    //checking validation

    // form submission

    addContact(contact);
  };
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
            <Form.Label htmlFor="email" column>
              Profile Picture
            </Form.Label>
          </Col>

          <Col sm={9}>
            <Form.Control
              type="text"
              name="image"
              id="image"
              onChange={handleChange}
              value={image}
              placeholder="Enter your profile picture url"
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
            {/* <Form.Control
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              onChange={handleChange}
              value={dateOfBirth}
              placeholder="Enter yourDate of Birth"
            /> */}

            <DatePicker
              selected={startDate}
              name="dateOfBirth"
              id="dateOfBirth"
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              maxDate={new Date()}
              onChange={(date) => setStartDate(date)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="gender" column>
              Gender
            </Form.Label>
          </Col>

          <Col xs="auto">
            <Form.Check
              label="Male"
              type="radio"
              name="male"
              id="gender"
              onChange={handleChange}
              value="male"
              placeholder="Enter yourDate of Birth"
            />
          </Col>
          <Col xs="auto">
            <Form.Check
              label="Female"
              type="radio"
              name="female"
              id="gender"
              onChange={handleChange}
              value="female"
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
              as="textarea"
              type="text"
              name="bio"
              id="bio"
              onChange={handleChange}
              value={bio}
              placeholder="Enter your Bio"
            />
          </Col>
        </Form.Group>

        <Button variant="primary" size="md" type="submit">
          Add Contact
        </Button>
      </Form>
    </>
  );
}

export default AddContact;
