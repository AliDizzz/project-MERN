const mongoose = require("mongoose");

mongoose
.connect('mongodb+srv://AliYildizDB:AliYildizDB@cluster0.qkd1q.mongodb.net/projectMERN',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("Failed to connect to MongoDB", err));