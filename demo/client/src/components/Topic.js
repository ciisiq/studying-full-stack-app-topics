import React from 'react';
import moment from 'moment';
import { deleteTopic, downVoteTopic, upVoteTopic } from '../apiService';
import sortTopics from '../utils/sortTopics';

export default function Topic({ topic, setTopics }) {
  function handleUpVote() {
    upVoteTopic(topic.id).then((data) => {
      setTopics((prev) => {
        // method for the page reload each time click on the button
        const filteredTopics = prev.filter((el) => el.id !== data.id);
        return sortTopics([...filteredTopics, data]);
      });
    });
  }

  function handleDownVote() {
    downVoteTopic(topic.id).then((data) => {
      setTopics((prev) => {
        const filteredTopics = prev.filter((el) => el.id !== data.id);
        return sortTopics([...filteredTopics, data]);
      });
    });
  }

  function handleDelete() {
    deleteTopic(topic.id).then(() => {
      setTopics((prev) => {
        const filteredTopics = prev.filter((el) => el.id !== topic.id);
        return [...filteredTopics];
      });
    });
  }

  return (
    <div className="topic">
      <div className="vote-container">
        <p onClick={handleUpVote}>⬆️</p>
        <h3>{topic.score}</h3>
        <p onClick={handleDownVote}>⬇️</p>
      </div>
      <div className="title-container">
        <div className="container-text">
          <h3>{topic.title}</h3>
          <p className="p">
            CREATED ON{' '}
            <span>{moment(topic.published_at).format('MMM do YY')}</span>
          </p>
        </div>
      </div>
      <div className="delete-container">
        <p onClick={handleDelete}>🗑️</p>
      </div>
    </div>
  );
}
