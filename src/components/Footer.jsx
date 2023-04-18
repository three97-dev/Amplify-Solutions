import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import Container from "./Container";
import Logo from "../assets/logo.svg";
import LinkedInIcon from "../assets/linkedin-icon.svg";
import FacebookIcon from "../assets/facebook-icon.svg";
import InstagramIcon from "../assets/instagram-icon.svg";

const Footer = () => {
  const query = useStaticQuery(graphql`
    query FooterQuery {
      contentfulFooter {
        socialsLabel
        linkedinLink
        facebookLink
        instagramLink
        amplifyYourCrmLabel
        amplifyYourCrmLink
        fractionalServicesLabel
        fractionalServicesLink
        navLinks {
          label
          url
        }
        termsOfUseLabel
        termsOfUseLink
        privacyPolicyLabel
        privacyPolicyLink
        copyright
      }
    }
  `);

  const data = query.contentfulFooter;

  return (
    <Container outerContainerClassName="bg-dark-blue">
      <div className="py-14 md:py-[38px]">
        <div className="grid grid-cols-[207px_auto] sm:grid-cols-[207px_auto_251px] lg:grid-cols-[minmax(199px,317px)_minmax(180px,376px)_minmax(auto,336px)_251px] gap-y-[38px] lg:gap-x-7 text-white">
          <img
            src={Logo}
            alt="Logo"
            className="h-[31px] lg:h-[50px] mb-0.5 sm:mb-0 col-span-2 sm:col-span-3 lg:col-span-1"
          />
          <div className="w-[138px] shrink-0">
            <div className="text-[16px] md:text-[14px] uppercase">{data.socialsLabel}</div>
            <div className="grid grid-cols-3 gap-x-[37px] mt-[24px] md:mt-6">
              {data.linkedinLink !== "none" && (
                <a href={data.linkedinLink}>
                  <img src={LinkedInIcon} alt="LinkedIn icon" />
                </a>
              )}
              {data.facebookLink !== "none" && (
                <a href={data.facebookLink}>
                  <img src={FacebookIcon} alt="Facebook icon" />
                </a>
              )}
              {data.instagramLink !== "none" && (
                <a href={data.instagramLink}>
                  <img src={InstagramIcon} alt="Instagram icon" />
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:mr-5 lg:mr-0 text-[16px] leading-[21px] uppercase">
            <Link to={data.amplifyYourCrmLink}>{data.amplifyYourCrmLabel}</Link>
            <Link to={data.fractionalServicesLink} className="mt-[11px]">
              {data.fractionalServicesLabel}
            </Link>
          </div>
          <div className="grid grid-cols-[207px_auto] sm:grid-cols-[180px_auto] gap-y-2.5 self-start">
            {data.navLinks.map((navLink, index) => (
              <Link key={index} to={navLink.url} className="justify-self-start w-max">
                {navLink.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between mt-[42px] md:mt-[50px] text-grey-blue opacity-50">
          <div className="text-center sm:text-left">
            <Link to={data.termsOfUseLink}>{data.termsOfUseLabel}</Link>
            <Link to={data.privacyPolicyLink} className="ml-[29px]">
              {data.privacyPolicyLabel}
            </Link>
          </div>
          <div className="text-center sm:text-left mt-4 sm:mt-0">{data.copyright}</div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
