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

const BusinessCaseFormSection = ({ image, title, subtitle, buttonLabel, hubspotForm }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      company: "",
      firstname: "",
      email: "",
    },
    validationSchema: Yup.object({
      company: Yup.string().max(50, "Company Name should be shorter then 50 letters"),
      firstname: Yup.string().max(50, "Full Name should be shorter then 50 letters").required("Full Name is required"),
      email: Yup.string().email("Valid email is required").required("Email Address is required"),
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
    <Container outerContainerClassName="bg-light-blue" innerContainerClassName="relative">
      <img
        src={circles5}
        alt="Background circles 1"
        className="absolute max-w-none w-[496px] md:w-[814px] -top-[150px] md:-top-[68px] left-1/2 md:-left-[260px] -translate-x-1/2 md:translate-x-0 -z-10"
      />
      <div className="flex flex-col md:flex-row mt-14 md:mt-0">
        <div className="relative flex items-center justify-center w-full md:max-w-[376px] md:mr-4">
          <GatsbyImage
            image={image?.gatsbyImageData}
            alt={image?.title}
            layout="fullWidth"
            objectFit="cover"
            quality={100}
            className="w-full max-w-[360px] md:px-0 lg:-mr-[60px] shrink-0"
          />
          <div className="absolute w-[210px] md:w-[288px] h-[182px] md:h-[250px] top-1/2 -translate-y-1/2 bg-blue-secondary blur-[60px] opacity-50 -z-10"></div>
        </div>
        <div className="flex flex-col w-full pt-[94px] pb-[82px] md:py-[72px] md:ml-14 xl:ml-[150px]">
          <RRichtext data={title} config={{ h2: "text-[32px] md:text-[38px] leading-[38px] md:leading-[46px]" }} />
          <p className="max-w-[545px] mt-8 md:mt-5 text-dark-blue">{subtitle}</p>
          <form
            id="book-form"
            onSubmit={formik.handleSubmit}
            className="w-full max-w-[1217px] grid grid-cols-1 md:grid-cols-2 gap-[17px] md:gap-x-[17px] md:gap-y-6 mt-8"
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
              className="md:col-span-2"
            />
          </form>
          <div className="w-full flex flex-col items-center xl:flex-row-reverse justify-between xl:mt-8">
            <div className="text-red-primary my-4 xl:my-0">*Please enter all required fields</div>
            <Button
              type="submit"
              form="book-form"
              variant="outline-grey"
              disabled={isSubmitted}
              px="px-[26px] md:px-[47px]"
            >
              {isSubmitted ? "Submitted" : buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BusinessCaseFormSection;
