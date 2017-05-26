var controller = require('../controllers/primaryController.js')
var path =require('path')


module.exports = function (app) {
  // User management routes
  app.post('/login', controller.login)
  app.get('/logout', controller.logout)
  app.get('/checkStatus', controller.checkStatus)
  // Question Routes
  app.post('/addNewQuestion', controller.addQuestion)
  app.get('/makeQuiz', controller.makeQuiz)
  app.post('/addGame', controller.addGame)
  app.get('/getGames', controller.getGames)
  // Catch All Route
  app.all('*', (req, res) => {
    res.sendFile(path.resolve('client/dist/index.html'))
  })
}

