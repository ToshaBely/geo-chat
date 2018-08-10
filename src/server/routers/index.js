const express = require('express');
const router = express.Router();

const controller = require('../controllers/message.controller');

router.get('/', (req, res) => {
  res.send('api router works');
});

router.route('/messages')
  .get((req, res) => {
    console.log('[GET ALL MESSAGES]');
    res.json(controller.getAllMessages());
  })
  .post((req, res) => {
    controller.addMessage(req.body.message);
    console.log('[SEND]:', req.body.message);
    res
      .status(200)
      .end();
  });

router.get('/test', (req, res) => {
  res.json({
    success: true,
    message: 'Hello from api',
  });
});

module.exports = router;
