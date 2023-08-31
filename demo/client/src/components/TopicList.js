import React from 'react';
import Topic from './Topic';

export default function TopicList({ topics, setTopics }) {
  return (
    <div className="topicList">
      {topics ? (
        topics.map((topic) => (
          <Topic key={topic.id} topic={topic} setTopics={setTopics} />
        ))
      ) : (
        <p> There are no topics yet</p>
      )}
    </div>
  );
}
