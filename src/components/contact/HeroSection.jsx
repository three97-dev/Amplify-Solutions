import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Container from "../Container";
import RRenderer from "../RichtextRenderer";
import Button from "../basic/Button";
import Input from "../basic/Input";
import InputPhone from "../basic/InputPhone";

import { submitForm } from "../../utils/submitForm";

import circles4 from "../../assets/background/circles4.svg";

const HeroSection = ({ title, subtitle, buttonLabel, hubspotForm }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      company: "",
      phone: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(50, "First Name should be shorter then 50 letters")
        .required("First Name is required"),
      lastName: Yup.string().max(50, "Last Name should be shorter then 50 letters").required("Last Name is required"),
      phone: Yup.string()
        .matches(phoneRegExp, "Phone Number should match XXX-XXX-XXXX")
        .min(12, "Too short to be valid phone number"),
      email: Yup.string().email("Valid email is required").required("Email Address is required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      const payload = {
        company: values.company,
        firstname: `${values.firstName} ${values.lastName}`,
        email: values.email,
        phone: values.phone,
      };

      console.log("Form submitted: " + JSON.stringify(values));

      await submitForm(hubspotForm.guid, payload, Date.now(), true);

      if (typeof window !== "undefined" && hubspotForm.redirect) {
        const redirectUrl = `${hubspotForm.redirect}?firstName=${values.firstName}&lastName=${values.lastName}&email=${values.email}`;

        window.open(redirectUrl, "_blank", "noopener,noreferrer");
      }

      setSubmitting(false);
      setIsSubmitted(true);
    },
  });

  return (
    <Container outerContainerClassName="bg-dark-blue" innerContainerClassName="relative">
      <img src={circles4} alt="Background circles 1" className="hidden md:block absolute top-16 -right-[146px] -z-10" />
      <img
        src={circles4}
        alt="Background circles 2"
        className="hidden md:block absolute w-[362px] -bottom-[176px] -left-[156px] -z-10"
      />
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(393px,auto)_minmax(auto,712px)] pt-[97px] pb-[78px] lg:pt-[136px] lg:pb-12">
        <div className="flex flex-col justify-center text-white">
          <RRenderer
            data={title}
            config={{
              h1: "!text-[32px] md:!text-[52px] !leading-[38px] md:!leading-[66px] mx-auto",
            }}
          />
          <p className="mt-4 md:mt-2 max-w-[376px]">{subtitle}</p>
        </div>
        <div className="relative">
          <form
            id="book-form"
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-[17px] md:gap-x-5 md:gap-y-7 w-full mt-[44px] lg:mt-0"
          >
            <Input
              id="firstName"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isError={formik.errors.firstName && formik.touched.firstName}
              title={formik.errors.firstName}
              value={formik.values.firstName}
              disabled={isSubmitted}
              placeholder="First Name*"
            />
            <Input
              id="lastName"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isError={formik.errors.lastName && formik.touched.lastName}
              title={formik.errors.lastName}
              value={formik.values.lastName}
              disabled={isSubmitted}
              placeholder="Last Name*"
            />
            <Input
              id="company"
              name="company"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isError={formik.errors.company && formik.touched.company}
              title={formik.errors.company}
              value={formik.values.company}
              disabled={isSubmitted}
              placeholder="Business"
            />
            <InputPhone
              id="phone"
              name="phone"
              onChange={(value, country, e, formattedValue) => {
                formik.setFieldValue("phone", formattedValue);
              }}
              onBlur={formik.handleBlur}
              disabled={isSubmitted}
              isError={formik.errors.phone && formik.touched.phone}
              title={formik.errors.phone}
              value={formik.values.phone}
              placeholder="Phone Number"
            />
            <Input
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isError={formik.errors.email && formik.touched.email}
              title={formik.errors.email}
              value={formik.values.email}
              disabled={isSubmitted}
              placeholder="Email*"
              className="md:col-span-2"
            />
          </form>
          <img
            src={circles4}
            alt="Background circles 3"
            className="hidden lg:block absolute w-[262px] -top-[72px] -left-[190px] -z-10"
          />
        </div>
        <div className="flex flex-col items-center lg:col-start-2">
          <div className="text-red-primary my-4 md:my-3 mx-auto">*Please enter all required fields</div>
          <Button type="submit" form="book-form" disabled={isSubmitted} px="px-[26px] md:px-[115px]">
            {isSubmitted ? "Submitted" : buttonLabel}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
