import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useFormik } from "formik";
import * as Yup from "yup";

import Container from "../Container";
import Button from "../basic/Button";
import Input from "../basic/Input";
import InputPhone from "../basic/InputPhone";
import RRichtext from "../RichtextRenderer";

import { submitForm } from "../../utils/submitForm";

import circles5 from "../../assets/background/circles5.svg";

const SandboxFormSection = ({ title, subtitle, buttonLabel, hubspotForm }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

  const formik = useFormik({
    initialValues: {
      company: "",
      firstname: "",
      email: "",
      phone: "",
      main_objective: "",
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
        className="absolute max-w-none w-[496px] md:w-[700px] xl:w-[814px] -top-[250px] xl:-top-[40px] -left-[80px] xl:-left-[260px] -z-10"
      />
      <div className="flex flex-col xl:flex-row mt-14 xl:mt-0">
        <div className="flex items-center justify-center xl:mr-4 xl:-mb-8">
          <div className="relative w-full md:w-fit">
            <StaticImage
              src="../../images/amplify-your-crm/microsoft-chart.png"
              placeholder="blur"
              alt="Microsoft Chart"
              layout="fullWidth"
              objectFit="contain"
              quality={100}
              className="hidden md:block w-[468px] shrink-0"
            />
            <StaticImage
              src="../../images/amplify-your-crm/microsoft-chart-mobile.png"
              placeholder="blur"
              alt="Microsoft Chart"
              layout="fullWidth"
              objectFit="contain"
              quality={100}
              className="md:hidden w-full shrink-0"
            />
            <div className="absolute w-[90%] md:w-[500px] h-[70%] md:h-[200px] md:-left-6 top-2/3 -translate-y-1/2 bg-blue-secondary blur-[60px] opacity-50 -z-10"></div>
          </div>
        </div>
        <div className="flex flex-col pt-[88px] pb-[67px] md:py-[92px] xl:ml-[92px]">
          <RRichtext data={title} />
          <div className="max-w-[545px] mt-6 md:mt-5 text-[16px] leading-[21px] text-dark-blue">{subtitle}</div>
          <form
            id="book-form"
            onSubmit={formik.handleSubmit}
            className="w-full max-w-[1217px] grid grid-cols-1 md:grid-cols-2 gap-[17px] md:gap-x-[17px] md:gap-y-7 mt-8"
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
              placeholder="Company"
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
            <Input
              id="main_objective"
              name="main_objective"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isError={formik.errors.main_objective && formik.touched.main_objective}
              title={formik.errors.main_objective}
              value={formik.values.main_objective}
              disabled={isSubmitted}
              placeholder="Describe your number one objective"
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
              px="px-[26px] md:px-[73px]"
            >
              {isSubmitted ? "Submitted" : buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SandboxFormSection;
