/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup
    .string()
    .required("firstName is required")
    .min(3, "firstName must be minimum 3 characters"),
  lastName: yup
    .string()
    .required("lastName is required")
    .min(3, "lastName must be minimum 3 characters"),
  email: yup
    .string()
    .email("Email Id must be valid")
    .required("Email id required"),
  profession: yup
    .string()
    .required("profession is required")
    .min(3, "profession must be minimum 3 characters"),
  image: yup
    .string()
    .required("Profile picture Url required")
    .url("Profile picture Url must be valid"),
  bio: yup
    .string()
    .required("Bio is required")
    .min(10, "profession must be minimum 10 characters")
    .max(300, "Bio must be maximum 300 characters"),
});
function AddContact({ addContact }) {
  const [startDate, setStartDate] = useState(new Date());

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue("dateOfBirth", startDate);
  }, [startDate]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        profession: "",
        image: "",
        bio: "",
      });
    }
  }, [isSubmitSuccessful]);
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <h2 className="text-center">AddContact</h2>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="firstName" column>
              First Name
            </Form.Label>
          </Col>

          <Col sm={9}>
            <Form.Control
              type="text"
              id="firstName"
              defaultValue=""
              {...register("firstName")}
              isInvalid={errors?.firstName}
              placeholder="Enter your First Name"
            />
            <Form.Control.Feedback type="invalid">
              {errors?.firstName?.message}
            </Form.Control.Feedback>
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
              id="lastName"
              defaultValue=""
              {...register("lastName")}
              isInvalid={errors?.lastName}
              placeholder="Enter your Last Name"
            />
            <Form.Control.Feedback type="invalid">
              {errors?.lastName?.message}
            </Form.Control.Feedback>
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
              id="email"
              defaultValue=""
              {...register("email")}
              isInvalid={errors?.email}
              placeholder="Enter your email id"
            />
            <Form.Control.Feedback type="invalid">
              {errors?.email?.message}
            </Form.Control.Feedback>
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
              id="profession"
              defaultValue=""
              {...register("profession")}
              isInvalid={errors?.profession}
              placeholder="Enter your Profession"
            />
            <Form.Control.Feedback type="invalid">
              {errors?.profession?.message}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="image" column>
              Profile Picture
            </Form.Label>
          </Col>

          <Col sm={9}>
            <Form.Control
              type="text"
              name="image"
              id="image"
              defaultValue=""
              {...register("image")}
              isInvalid={errors?.image}
              placeholder="Enter your profile picture url"
            />
            <Form.Control.Feedback type="invalid">
              {errors?.image?.message}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="dateOfBirth" column>
              Date of Birth
            </Form.Label>
          </Col>

          <Col sm={9}>
            <DatePicker
              selected={startDate}
              id="dateOfBirth"
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              maxDate={new Date()}
              {...register("dateOfBirth")}
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
              id="gender"
              value="male"
              defaultChecked={true}
              {...register("gender")}
            />
          </Col>
          <Col xs="auto">
            <Form.Check
              label="Female"
              type="radio"
              id="gender"
              value="female"
              {...register("gender")}
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
              id="bio"
              defaultValue=""
              {...register("bio")}
              isInvalid={errors?.bio}
              placeholder="Enter your Bio"
            />
            <Form.Control.Feedback type="invalid">
              {errors?.bio?.message}
            </Form.Control.Feedback>
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
