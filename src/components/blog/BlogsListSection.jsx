import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import ReactPaginate from "react-paginate";

import Container from "../Container";
import Button from "../basic/Button";

const Card = ({ image, title, subtitle, date, buttonLabel, buttonLink }) => {
  return (
    <div className="relative">
      <div className="flex flex-col h-full bg-light-blue overflow-hidden rounded-[15px]">
        <GatsbyImage image={image?.gatsbyImageData} alt={image?.title} className="w-full h-[216px]" />
        <div className="flex flex-col justify-between grow py-10 px-[26px] md:px-[34px]">
          <div>
            <div className="text-[28px] md:text-[32px] leading-[120%] font-medium font-poppins">{title}</div>
            <h4 className="mt-2 md:mt-6">{subtitle}</h4>
          </div>
          <div>
            <div className="text-[16px] leading-[21px] mt-5">{date}</div>
            <Button variant="outline-red" link={buttonLink} className="mt-6" px="px-[47px]">
              {buttonLabel}
            </Button>
          </div>
        </div>
        <div className="absolute w-[80%] h-[40%] -bottom-[3px] left-1/2 -translate-x-1/2 bg-blue-secondary blur-[60px] opacity-50 -z-10"></div>
      </div>
    </div>
  );
};

const BlogsListSection = ({ blogs }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const pageBlogs = blogs.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(blogs.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % blogs.length;
    setItemOffset(newOffset);
  };

  return (
    <Container outerContainerClassName="-mt-[136px] md:-mt-[106px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-[28px] gap-y-6 md:gap-y-[58px]  pb-[81px] md:pb-[94px] ">
        {pageBlogs?.map((blog, index) => (
          <Card
            key={index}
            image={blog.previewImage}
            title={blog.title}
            subtitle={blog.subtitle}
            date={blog.postingDate}
            buttonLabel="Read More"
            buttonLink={blog.fields.pageUrl}
          />
        ))}
      </div>
      {blogs.length > itemsPerPage && (
        <ReactPaginate
          breakLabel="..."
          previousLabel={<div className="mr-3 mb-px text-center text-[18px] leading-[120%]">PREV</div>}
          nextLabel={<div className="ml-3 mb-px text-center text-[18px] leading-[120%]">NEXT</div>}
          disabledClassName="hidden"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          className="flex items-center justify-center pb-[81px] my-0 list-none mr-12 font-poppins"
          pageClassName="min-w-[29px] py-1 py-[3px] text-center text-[18px] leading-[120%] font-semibold [&_a]:w-full [&_a]:inline-block [&_a]:cursor-pointer border-b border-transparent"
          activeClassName="text-red-primary !border-red-primary"
        />
      )}
    </Container>
  );
};

export default BlogsListSection;
