export default function loginHandler(req, res) {
  res
    .status(200)
    .json({ email: req.body.email })
}