const cloudinary = require('cloudinary').v2;
module.exports = function(req, res, next) {
  if (req.files === null) {
    return next();
  }

  const file = req.files.file;
  console.log(file);
  const properties = {
    public_id: req.body.public_id,
    quality: 'auto'
  };
  cloudinary.uploader.upload(file.tempFilePath, properties, function(
    err,
    result
  ) {
    if (!err) {
      req.imageData = {
        url: result.url,
        public_id: result.public_id
      };
      return next();
    } else {
      console.log(err);
    }
  });

  //const image = new Date().getTime() + '-' + file.name;

  /* file.mv(`./client/public/uploads/${image}`, err => {
    if (err) return res.status(500).send('server error');

    const imageFile = {
      fileName: file.name,
      filePath: `uploads/${image}`
    };

    req.image = imageFile;
    next();
  }); */
};
