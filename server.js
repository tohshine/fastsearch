const express = require('express');
const app = express();
const database = require('./config/db');
const fileUploader = require('express-fileupload');
const path = require('path');

app.use(express.json({ extended: false }));
app.use(
  fileUploader({
    useTempFiles: true
  })
);

const PORT = process.env.PORT || 5000;

app.use('/account', require('./data/account'));
app.use('/create_account', require('./data/auth/register'));
app.use('/auth', require('./data/auth/auth'));
app.use('/search', require('./clientServer/enterprise'));

//serve static asset in production
if (process.env.NODE_ENV === 'production') {
  //server asset
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

database();

app.listen(PORT, () => {
  console.log(`server is listen on port ${PORT}`);
});
