const { Client } = require('whatsapp-web.js');
const qrcode  = require("qrcode-terminal")
const RecognizeMessage = require('../helpers/RecognizeMessage')
class WhatsappService {
  async main() {

    const client = new Client();

    client.on('qr', (qr) => {
        qrcode.generate(qr, {small: true});
    });

    client.on('ready', () => {
        console.log('Client is ready!');
    });

    client.on('message', async msg => {
      if (msg.type == 'chat') {
          const recognize = await RecognizeMessage.main(msg.body)
          msg.reply(recognize);
        }
    });

    client.initialize();
  }
}

module.exports = WhatsappService
