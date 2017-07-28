var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/resume', function(req, res){
  var file = './downloaded_docs/ResumeGrandJulivan.pdf';
  res.download(file); // Set disposition and send it.
});

router.post('/new-message', function(req, res, next) {
  const {message} = req.body

  //Each message contains "text" and a "chat" object, which has an "id" which is the chat id

  if (!message || message.text.toLowerCase().indexOf('marco') <0) {
    // In case a message is not present, or if our message does not have the word marco in it, do nothing and return an empty response
    return res.end()
  }
  axios.post('https://api.telegram.org/bot393006670:AAH1VDIqKfLLIYB88wslgt9_x0c8SBnkk8w/sendMessage', {
    chat_id: message.chat.id,
    text: 'Polo!!'
  })
    .then(response => {
      // We get here if the message was successfully posted
      console.log('Message posted')
      res.end('ok')
    })
    .catch(err => {
      // ...and here if it was not
      console.log('Error :', err)
      res.end('Error :' + err)
    })
});


module.exports = router;
