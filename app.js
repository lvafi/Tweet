const express = require('express');

const app = express();

app.get("/", (request, response) => {
  response.render("welcome");
});


app.get("/thank_you", (request, response) => {
  console.log(request.query);
  response.render("thankYou", {
    query: request.query,
    subHeading: "thank you!"
  });
});


app.listen(3000, () => {
  console.log('Express web app on localhost: 3000');
});