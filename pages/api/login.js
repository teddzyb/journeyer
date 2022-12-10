const loginHandler = (req, res) => {
  res.status(200).json({ email: req.body.email });
};

export default loginHandler;
