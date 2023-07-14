const express = require('express')
const dotenv = require("dotenv");
const LuisHelper = require('../app/helpers/LuisHelper')
const WhatsappService = require('../app/services/WhatsappService');
const RecognizeMessage = require('../app/helpers/RecognizeMessage');
dotenv.config();

const app = express();
new WhatsappService().main()

const port = process.env.port || process.env.PORT || 3000
const appName = process.env.APP_NAME
const appEnv = process.env.APP_ENV

app.listen(port, async () => {
  // const recognizer = await RecognizeMessage.main("P")
  // console.log(recognizer)
  // console.log(await new LuisHelper().recognizer("Min, ada jurusan apa aja?"))
  console.log(`\n${ appName } (${appEnv}) listening to http://localhost:${ port }`)
})


