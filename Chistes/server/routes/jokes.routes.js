const JokerController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes/", JokerController.findAllJokes);
    app.get("/api/jokes/:id", JokerController.findOneSingleJoke);
    app.put("/api/jokes/update/:id", JokerController.updateExistingJoke);
    app.post("/api/jokes/new", JokerController.createNewJoke);
    app.delete("/api/jokes/delete/:id", JokerController.deleteAnExistingJoke);
};