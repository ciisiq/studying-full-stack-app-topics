// Imports
const Router = require('koa-router');
const {
  getTopics,
  addTopic,
  deleteTopic,
  upVoteTopic,
  downVoteTopic,
} = require('./controllers/topicController');

//Instance
const router = new Router();

// Routes
router.get('/topics', getTopics);
router.post('/topics', addTopic);
router.delete('/topics/:id', deleteTopic);
router.put('/topics/:id/up', upVoteTopic);
router.put('/topics/:id/down', downVoteTopic);

// Exports
module.exports = router;
