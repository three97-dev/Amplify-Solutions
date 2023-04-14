import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Container from "../Container";
import Button from "../basic/Button";
import Input from "../basic/Input";
import InputPhone from "../basic/InputPhone";
import Textarea from "../basic/Textarea";
import RRichtext from "../RichtextRenderer";

import { submitForm } from "../../utils/submitForm";

import circles3 from "../../assets/background/circles3.svg";

const BookFormSection = ({ title, subtitle, buttonLabel, hubspotForm }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

  const formik = useFormik({
    initialValues: {
      company: "",
      firstname: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      company: Yup.string().max(50, "Company Name should be shorter then 50 letters"),
      firstname: Yup.string().max(50, "Full Name should be shorter then 50 letters").required("Full Name is required"),
      email: Yup.string().email("Valid email is required").required("Email Address is required"),
      phone: Yup.string()
        .matches(phoneRegExp, "Phone Number should match XXX-XXX-XXXX")
        .min(12, "Too short to be valid phone number"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      console.log("Form submitted: " + JSON.stringify(values));
      await submitForm(hubspotForm.guid, values, Date.now(), true);

      if (typeof window !== "undefined" && hubspotForm.redirect) {
        let [firstName, ...lastName] = values.firstname.split(" ");
        lastName = lastName.join(" ") || "-";
        const redirectUrl = `${hubspotForm.redirect}?firstName=${firstName}&lastName=${lastName}&email=${values.email}`;

        window.open(redirectUrl, "_blank", "noopener,noreferrer");
      }

      setSubmitting(false);
      setIsSubmitted(true);
    },
  });

  return (
    <Container outerContainerClassName="bg-light-blue" innerContainerClassName="relative">
      <img src={circles3} alt="Background circles 1" className="hidden md:block absolute top-14 -left-[170px] -z-10" />
      <img
        src={circles3}
        alt="Background circles 2"
        className="hidden md:block absolute top-[226px] -right-[195px] -z-10"
      />
      <div id="book-form" className="flex flex-col items-center pt-[85px] pb-[55px] md:py-[85px] text-center">
        <RRichtext data={title} config={{ h2: "text-[32px] md:text-[38px] leading-[38px] md:leading-[46px]" }} />
        <p className="max-w-[703px] mt-8 md:mt-[25px] text-dark-blue">{subtitle}</p>
        <form
          id="book-form"
          onSubmit={formik.handleSubmit}
          className="w-full max-w-[1217px] grid grid-cols-1 md:grid-cols-2 gap-[17px] md:gap-x-8 md:gap-y-7 mt-[59px]"
        >
          <Input
            id="company"
            name="company"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={formik.errors.company && formik.touched.company}
            title={formik.errors.company}
            value={formik.values.company}
            disabled={isSubmitted}
            placeholder="Company Name"
          />
          <Input
            id="firstname"
            name="firstname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={formik.errors.firstname && formik.touched.firstname}
            title={formik.errors.firstname}
            value={formik.values.firstname}
            disabled={isSubmitted}
            placeholder="Full Name*"
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
          />
          <InputPhone
            id="phone"
            name="phone"
            onChange={(value, country, e, formattedValue) => {
              formik.setFieldValue("phone", formattedValue);
            }}
            onBlur={formik.handleBlur}
            isError={formik.errors.phone && formik.touched.phone}
            title={formik.errors.phone}
            value={formik.values.phone}
            disabled={isSubmitted}
            placeholder="Phone Number"
          />
          <Textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isError={formik.errors.message && formik.touched.message}
            title={formik.errors.message}
            value={formik.values.message}
            disabled={isSubmitted}
            placeholder="Describe your number one objective"
            className="md:col-span-2"
          />
        </form>
        <div className="text-red-primary my-4 md:my-3">*Please enter all required fields</div>
        <Button
          type="submit"
          form="book-form"
          variant="outline-grey"
          disabled={isSubmitted}
          px="px-[26px] md:px-[74px]"
          onClick={formik.handleSubmit}
        >
          {isSubmitted ? "Submitted" : buttonLabel}
        </Button>
      </div>
    </Container>
  );
};

export default BookFormSection;
