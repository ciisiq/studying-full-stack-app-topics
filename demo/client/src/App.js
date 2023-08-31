import './App.css';
import TopicList from './components/TopicList';
import Navbar from './components/NavBar.js';
import { useEffect, useState } from 'react';
import { getTopics } from './apiService';
import sortTopics from './utils/sortTopics';

function App() {
  const [topics, setTopics] = useState();

  useEffect(() => {
    getTopics().then((res) => {
      setTopics(sortTopics(res));
    });
  }, []);

  return (
    <div className="App">
      <Navbar setTopics={setTopics} />
      <TopicList topics={topics} setTopics={setTopics} />
    </div>
  );
}

export default App;
