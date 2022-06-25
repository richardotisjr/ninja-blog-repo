const getAllBlogs = (req, res) => {
  res.status(200).json({ msg: "GET All the blogs" });
};
const getSingleBlog = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ msg: "GET Single blogs" });
};
const createNewBlog = (req, res) => {
  res.status(200).json({ msg: "POST New Blog" });
};
const updateBlog = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ msg: "PATCH Blog" });
};
const deleteBlog = (req, res) => {
  const id = req.params.id;
  res.status(200).json({ msg: "DELETE Blog" });
};

module.exports = {
  getAllBlogs,
  getSingleBlog,
  createNewBlog,
  updateBlog,
  deleteBlog,
};
