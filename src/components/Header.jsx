import React, { useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import Logo from "../assets/logo.svg";
import HamburgerMenuIcon from "../assets/hamburger-menu.svg";
import ArrowShow from "../assets/arrow-show.svg";
import ArrowHide from "../assets/arrow-hide.svg";
import HeaderTab from "../assets/header-tab.svg";
import Container from "./Container";

const Header = () => {  
  const query = useStaticQuery(graphql`
    query HeaderQuery {
      contentfulHeader {
        navLinks {
          label
          url
          subItems {
            label
            url
          }
        }
      }
    }
  `);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isHoverOpen, setIsHoverOpen] = useState(false);

  const navLinks = query?.contentfulHeader?.navLinks;


  const HeaderSubMenuItem = ({item}) => {

    const handleMouseEnter = () => {
      setIsHoverOpen(true)
    }
    const handleMouseLeave = () => {
      setIsHoverOpen(false)
    }
    return (
      <div 
        className="relative flex mx-[14px] xl:mx-[18px] items-center cursor-pointer"
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <div
          tabIndex="0"
          onKeyDown={(event) => {
            if (event.key === "Enter"){
              setIsHoverOpen(!isHoverOpen)
            }
          }}
          className={`${isHoverOpen ? 'text-red-primary relative  z-[999]': 'last:mr-0 first:ml-0 text-white'}`}
        >
          {item.label}
        </div>
        {!isHoverOpen && <img src={ArrowShow} alt="ArrowShow" className="w-[14px] h-[7px] ml-[7px] mt-[1px]"/>}
        {isHoverOpen && <img src={ArrowHide} alt="ArrowHide" className="w-[14px] h-[7px] ml-[7px] mt-[1px] relative z-[999]"/>}
        {isHoverOpen && (
          <div className="absolute w-[268px] z-20 -top-[20px] -left-[163px] ">
            <div className="flex justify-end right-[18px]"><img className="-mr-[16px]" src={HeaderTab} alt="HeaderTab" /></div>
            <div 
              className="shadow-[0px_4px_16px_rgba(63,142,201,0.46)] w-full"
            >
              <div className="flex pt-[14px] flex-col items-end bg-white h-full pr-[13px] gap-y-[9px] pb-[24px] bg-[url(../images/header-dropdown-background.png)] bg-bottom bg-no-repeat">
                {item.subItems.map((subItem, index) => (
                  <Link key={index} to={subItem.url} className="text-dark-blue ">{subItem.label}</Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
  return (
    <nav className="lg:absolute top-0 z-20 w-full">
      <Container
        innerContainerClassName="w-full bg-dark-blue flex justify-between py-[19px] md:py-8 lg:bg-transparent"
        outerContainerClassName="!overflow-visible"
      >
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-[31px] md:h-[37px]" />
        </Link>
        <div className="hidden lg:flex items-center">
          {navLinks.map((navLink, index) => (
            <React.Fragment key={index}>
              {navLink?.subItems?.length ? (
                <HeaderSubMenuItem item={navLink} />
              ) : (
                <Link
                  to={navLink.url}
                  className="mx-[14px] xl:mx-[18px] last:mr-0 first:ml-0 text-white no-underline relative z-30"
                >
                  {navLink.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={HamburgerMenuIcon} alt="Menu icon" />
        </button>
      </Container>
       {isMenuOpen && (
          <div className="bg-dark-blue flex flex-col items-end pr-[24px] md:pr-[64px] gap-y-[20px] lg:hidden">
            {navLinks.map((navLink, index) => (
              <React.Fragment key={index}>
                {navLink?.subItems?.length ? (
                  <div className="flex flex-col" onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>
                    <div className="flex items-center">
                      <div
                        className={`${isSubMenuOpen ? 'text-red-primary relative  z-[999]': 'last:mr-0 first:ml-0 text-white'}`}
                      >
                        {navLink.label}
                      </div>
                      {!isSubMenuOpen && <img src={ArrowShow} alt="ArrowShow" className="w-[14px] h-[7px] ml-[7px]"/>}
                      {isSubMenuOpen && <img src={ArrowHide} alt="ArrowHide" className="w-[14px] h-[7px] ml-[7px] relative z-[999]"/>}
                    </div>
                    {isSubMenuOpen && (
                      <div className="flex flex-col items-end gap-y-[12px] pt-[12px]">
                        {navLink.subItems.map((subItem, index) => (
                          <Link key={index} to={subItem.url} className="text-white ">{subItem.label}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={navLink.url}
                    className="text-white no-underline"
                  >
                    {navLink.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
    </nav>
  );
};

export default Header;
