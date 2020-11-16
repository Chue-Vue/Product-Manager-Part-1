const mongoose = require('mongoose');
    uri = "product_manager";

mongoose.connect(`mongodb://localhost/${uri}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("You're now in the server mainframe..."))
    .catch((err) => console.log("WARNING, NO LONGER IN MAINFRAME!", err))