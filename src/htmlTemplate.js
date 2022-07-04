const generateHTML = function (tString) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Team Portfolio</title>
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
  </style>
  </head>
  <body>
  <div class="header">
  <div class="jumbotron bg-warning">
     <h1 class="display-4 text-white text-center">My Employee Profile!</h1>
  </div>
  </div>
  <div class="container-body container-fluid">
     <div class="row">
          ${tString} 
      </div>
  </div>
  <script src="https://kit.fontawesome.com/04e4a42510.js" crossorigin="anonymous"></script>  
  </body>
  </html>`
}

// Employee cards
const generateCard = function (arr) {
  let positionIcon;
  let positionInfo;

  if (arr.getPosition() === "Manager") {
      positionIcon = `<i class="fas fa-mug-hot"></i>`
      positionInfo = `Office Number: ${arr.officeNumber}`
  } else if (arr.getPosition() === "Engineer") {
      positionIcon = `<i class="fas fa-glasses"></i>`
      positionInfo = `GitHub Username: <a href="https://github.com/${arr.github}" target="_blank">${arr.github}</a>`
  } else if (arr.getPosition() === "Intern") {
      positionIcon = `<i class="fas fa-user-graduate"></i>`
      positionInfo = `Institution: ${arr.school}`
  }

  return `
  <div class="col-md-4 col-sm-6 col-12 col-lg-3">
  <div class="card shadow-lg mb-5 bg-white rounded">
      <div class="card-header bg-primary">
          <h4 class="text-white text-center">${arr.name}</h4>
          <h4 class="text-white text-center">${arr.getPosition()}</h4>
      </div>
      <div class="card-body">
          <ul class="list-unstyled">
              <li>Employee ID: ${arr.id}</li>
              <li>Email: <a href="mailto:${arr.email}">${arr.email}</a></li>
              <li>${positionInfo}</li>
          </u>
      </div>
  </div>
</div>
`
}

exports.generateHTML = generateHTML;
exports.generateCard = generateCard;