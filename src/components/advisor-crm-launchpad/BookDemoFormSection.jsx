import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useFormik } from "formik";
import * as Yup from "yup";

import Container from "../Container";
import Button from "../basic/Button";
import Input from "../basic/Input";
import RRichtext from "../RichtextRenderer";

import { submitForm } from "../../utils/submitForm";

import circles5 from "../../assets/background/circles5.svg";

const BookDemoFormSection = ({ image, title, text, buttonLabel, hubspotForm }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      company: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(50, "First Name should be shorter then 50 letters")
        .required("First Name is required"),
      lastname: Yup.string().max(50, "Last Name should be shorter then 50 letters").required("Last Name is required"),
      company: Yup.string().max(50, "Company Name should be shorter then 50 letters"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      console.log("Form submitted: " + JSON.stringify(values));

      await submitForm(hubspotForm.guid, values, Date.now(), true);

      if (typeof window !== "undefined" && hubspotForm.redirect) {
        window.open(hubspotForm.redirect, "_blank", "noopener,noreferrer");
      }

      setSubmitting(false);
      setIsSubmitted(true);
    },
  });

  return (
    <Container innerContainerClassName="relative">
      <img
        src={circles5}
        alt="Background circles 1"
        className="absolute max-w-none w-[496px] lg:w-[966px] -top-[150px] lg:-top-[68px] left-1/2 lg:-left-[470px] -translate-x-1/2 lg:translate-x-0 -z-10"
      />
      <div className="flex flex-col lg:flex-row mt-14 lg:mt-0">
        <div className="flex items-center justify-center w-full lg:max-w-[376px] lg:mr-4">
          <GatsbyImage
            image={image?.gatsbyImageData}
            alt={image?.title}
            layout="fullWidth"
            objectFit="cover"
            quality={100}
            className="w-full max-w-[360px] lg:-mr-[60px] shrink-0"
          />
        </div>
        <div className="flex flex-col w-full pt-[94px] pb-[82px] lg:py-16 lg:ml-14 xl:ml-[95px]">
          <RRichtext data={title} config={{ h2: "text-[32px] lg:text-[38px] leading-[38px] lg:leading-[46px]" }} />
          <RRichtext data={text} config={{ h3: "mt-6" }} />
          <form
            id="book-form"
            onSubmit={formik.handleSubmit}
            className="w-full max-w-[1217px] grid grid-cols-1 lg:grid-cols-2 gap-[17px] lg:gap-x-[17px] lg:gap-y-6 mt-8"
          >
            <Input
              id="firstname"
              name="firstname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isError={formik.errors.firstname && formik.touched.firstname}
              title={formik.errors.firstname}
              value={formik.values.firstname}
              disabled={isSubmitted}
              placeholder="First Name*"
            />
            <Input
              id="lastname"
              name="lastname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isError={formik.errors.lastname && formik.touched.lastname}
              title={formik.errors.lastname}
              value={formik.values.lastname}
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
              placeholder="Company Name"
              className="lg:col-span-2"
            />
          </form>
          <div className="w-full flex flex-col items-center xl:flex-row-reverse justify-between xl:mt-8">
            <div className="text-red-primary my-4 xl:my-0">*Please enter all required fields</div>
            <Button type="submit" form="book-form" disabled={isSubmitted} px="min-w-[223px]">
              {isSubmitted ? "Submitted" : buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BookDemoFormSection;
