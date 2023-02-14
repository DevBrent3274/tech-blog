const { Blog } =require ('../models');
const blogData = 
[
  {
    title: "Frameworks",
    content: "Learn all about React, Angualr and Vue.js.",
    user_id: 3
  },
  {
    title: "JavaScript",
    content: "A bit about this lightweight,, interpreted programming language that can be used for front and back end development.",
    user_id: 1
  },
  {
    title: "HTML & CSS",
    content: "Improving your website structure and styling.",
    user_id: 2
  },
  {
    title: "Git Frustrations",
    content: "So simple but yet tricky.  Lets show you some ins and outs",
    user_id: 5
  },
  {
    title: "What database to use?",
    content: "Lets help you understand and choose between Relational(ex. Mysql) and Non-Relational(ex. MongoDB)",
    user_id: 4
  }
]
 const seedBlogs = () => Blog.bulkCreate(blogData);

 module.exports = seedBlogs