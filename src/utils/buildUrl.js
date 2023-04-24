const slugify = require("slugify");

const strToUrl = (str, fallback) => {
  let slug = slugify(str, { lower: true, remove: /[*+~.()'"!:@]/g, strict: true });
  if (slug === "") {
    return fallback;
  }
  return slug;
};

exports.buildCareerUrl = (career) => {
  return `/careers/${strToUrl(career.title, career.contentful_id)}`;
};

exports.buildBlogUrl = (blog) => {
  return `/blog/${strToUrl(blog.title, blog.contentful_id)}`;
};
