export default (req, res, next) => {
  if (req.url.includes('ebPreview=true')) {
    res.spa = true;
  }
  next();
};
