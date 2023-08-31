// Test
// const url =
//   'https://private-anon-400cce8b35-codemocracy.apiary-mock.com/topics';

// Server
const url = 'http://localhost:3005';

export async function getTopics() {
  try {
    const response = await fetch(`${url}/topics`);
    // const response = await fetch(`${url}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function addTopic(topic) {
  try {
    const response = await fetch(`${url}/topics`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: topic }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function upVoteTopic(id) {
  try {
    const response = await fetch(`${url}/topics/${id}/up`, {
      method: 'PUT',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function downVoteTopic(id) {
  try {
    const response = await fetch(`${url}/topics/${id}/down`, {
      method: 'PUT',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTopic(id) {
  try {
    const response = await fetch(`${url}/topics/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
