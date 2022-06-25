const Blog = require("../models/blogModel");

// GET All Blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json({ blogs });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// GET Single Blog
const getSingleBlog = async (req, res) => {
  const id = req.params.id;

  const blog = await Blog.findById({ _id: id });

  if (!blog) {
    return res.status(404).json({ error: "Blog could not be found" });
  }

  res.status(200).json({ blog });
};

// POST a Single Blog
const createNewBlog = async (req, res) => {
  const { title, body, author } = req.body;

  if (!title || !body || !author) {
    return res.status(400).json({ msg: "Blog could not be posted" });
  }

  // const newBlog = await Blog.create({ title, body, author });
  const blog = new Blog({
    title,
    body,
    author,
  });

  if (!blog) {
    return res.status(400).json({ msg: "Blog could not be posted" });
  }

  const newBlog = await blog.save();

  res.status(200).json({ newBlog });
};

// PATCH/Update a Single Blog
const updateBlog = async (req, res) => {
  const id = req.params.id;
  const { title, body, author } = req.body;

  if (!title || !body || !author) {
    return res.status(400).json({ error: "Blog could not be updated" });
  }

  const updatedBlog = await Blog.findByIdAndUpdate(
    { _id: id },
    { title, body, author }
  );

  if (!updatedBlog) {
    return res.status(400).json({ error: "Blog could not be updated" });
  }

  res.status(200).json({ updatedBlog });
};

// DELETE a Single Blog
const deleteBlog = async (req, res) => {
  const id = req.params.id;

  const deletedBlog = await Blog.deleteOne({ _id: id });

  if (!deletedBlog) {
    return res.status(404).json({ error: "Blog could not be deleted" });
  }
  res.status(200).json({ deleteBlog });
};

module.exports = {
  getAllBlogs,
  getSingleBlog,
  createNewBlog,
  updateBlog,
  deleteBlog,
};
