const express = require('express');

const app = express();

app.get("/", (request, response) => {
  response.render("welcome");
});


app.listen(3000, () => {
  console.log('Express web app on localhost: 3000');
});