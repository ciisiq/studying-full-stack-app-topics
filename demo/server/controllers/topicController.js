const Topic = require('../models/Topic');

async function getTopics(ctx) {
  try {
    const topics = await Topic.findAll();
    ctx.body = topics;
    ctx.status = 200;
  } catch (error) {
    ctx.status = 500;
    console.log(error);
  }
}

async function addTopic(ctx) {
  try {
    const topic = ctx.request.body;
    const savedTopic = await Topic.create(topic);
    ctx.body = savedTopic;
    ctx.status = 201;
  } catch (error) {
    ctx.status = 500;
    console.log(error);
  }
}

async function deleteTopic(ctx) {
  try {
    const { id } = ctx.params;
    await Topic.destroy({
      where: {
        id: id,
      },
    });
    ctx.body = JSON.stringify({ message: 'Topic was deleted sucessfully' });
    ctx.status = 200;
  } catch (error) {
    ctx.status = 500;
    console.log(error);
  }
}

async function upVoteTopic(ctx) {
  try {
    const { id } = ctx.params;
    const topic = await Topic.findOne({
      where: { id: id },
    });
    topic.increment('score');
    // topic.score = topic.score + 1;
    await topic.save();
    ctx.body = topic;
    ctx.status = 200;
  } catch (error) {
    ctx.status = 500;
    console.log(error);
  }
}

async function downVoteTopic(ctx) {
  try {
    const { id } = ctx.params;
    const topic = await Topic.findOne({
      where: { id: id },
    });
    topic.decrement('score');
    // topic.score = topic.score - 1;
    await topic.save();
    ctx.body = topic;
    ctx.status = 200;
  } catch (error) {
    ctx.status = 500;
    console.log(error);
  }
}

module.exports = {
  getTopics,
  addTopic,
  deleteTopic,
  upVoteTopic,
  downVoteTopic,
};
