module.exports = function(req, res, next) {
  // if (req.files.file === null) return res.status(400).send('no file uploaded');

  const file = req.files.file;
  const image = new Date().getTime() + '-' + file.name;

  file.mv(`./client/public/uploads/${image}`, err => {
    if (err) return res.status(500).send('server error');

    const imageFile = {
      fileName: file.name,
      filePath: `uploads/${image}`
    };

    req.image = imageFile;
    next();
  });
};
