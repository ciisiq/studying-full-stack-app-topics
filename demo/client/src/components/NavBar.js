import React from 'react';
import { addTopic } from '../apiService';
import sortTopics from '../utils/sortTopics';

export default function Navbar({ setTopics }) {
  function handleSubmit(event) {
    event.preventDefault();
    const topic = event.target.userTopic.value;
    addTopic(topic).then((data) => {
      setTopics((prev) => {
        return sortTopics([...prev, data]);
      });
    });
    event.target.reset();
  }

  return (
    <div className="navBar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your topic here"
          name="userTopic"
          required={true}
        />
        <button type="submit">Add Topic</button>
      </form>
    </div>
  );
}
