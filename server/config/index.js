
require("dotenv").config();

if ((process.env.NODE_ENV = "development")) {
    module.exports = {
      SECTARE:"jnf98haduasbd89ashbdusah79bf9sd248348",
      DB:"mongodb+srv://amitrai:amitrai@cluster0-nnb0s.mongodb.net/test?retryWrites=true&w=majority",
      PORT:5000
    };
}else{
        module.exports = {
          SECTARE: process.env.APP_SECTARE,
          DB: process.env.APP_DB,
        };
}
