const LuisHelper = require('./LuisHelper')

class RecognizeMessage {
  async main(message) {
    console.log(`MESSAGE : ${message}`)
    const recognize = await new LuisHelper().recognizer(message)

    const topIntent = recognize.topIntent
    console.log(`topIntent : ${topIntent}`)
    
    let replyMessage = `Sorry we can't understand what you mean. Could you clarify again that again?. Or you can access our website for different information https://www.sampoernauniversity.ac.id/`;

    switch (topIntent) {
        
        case 'greetings': {
            replyMessage = 'Hello! What can i help you?';
            break;
        }

        case 'scholarship': {
            replyMessage = 'STT Nurul Fikri offers different types of Merit Awards ranging from 25% up to 100% .  For more detail, please go our website https://nurulfikri.ac.id/';
            break;
        }

        case 'major': {
          replyMessage = `In the STT Nurul Fikri, we have 3 majoring, such as:
1. Sistem Informasi
2. Teknik Informatika
3. Bisnis Digital

You can check our website for more detail : https://nurulfikri.ac.id/`
          break;
      }

        case 'fee': {
            replyMessage = 'Please go to https://nurulfikri.ac.id/penerimaan-mahasiswa-baru-pmb/#:~:text=Biaya%20Kuliah%20Per%20Semester&text=Biaya%20Operasional%20Rp%203.500.000,pindahan%20per%20sks%20Rp%2010.000%2C%2D for detail fee'
            break;
        }

        case 'admission': {
            replyMessage = `Just login to https://admisi.nurulfikri.ac.id/daftar-reguler and follow the simple step below:
- Fill in the online application form
- Submit scan/copy of your last one year transcript (semester 1&2 report card of your last grade)
- Pay IDR 300,000 application fee (non-refundable)
- Schedule your Placement Test
- Take our test`
            break;
        }

        case 'facilities': {
            replyMessage = `
            STT Nurul Fikri provides various facilities for all provided programs:
- Library 
- Multipurpose Court
- Auditorium
- Musholla

You can access for detail facilites https://nurulfikri.ac.id/sttnf/profil-sttnf/fasilitas/`
            break;
        }

        case 'thanks': {
            replyMessage = 'You’re welcome. I am very happy to help you.'
            break;
        }

        default: {
            replyMessage = `Sorry, we cannot understand what you mean. Can you clarify that again? So far, this bot has covered several topics related to Frequently Asked Questions (FAQ), such as:    
- Scholarship Information
- Admission
- Tuition Fee
- How to Apply
- List of Facilities             
            `;
        }
    }

    return replyMessage
  }
}

module.exports = new RecognizeMessage()
