const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function fetchPosts() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function createPost(newPost) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

export async function updatePost(updatedPost) {
  const response = await fetch(`${BASE_URL}/${updatedPost.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedPost),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}

export async function deletePost(postId) {
  const response = await fetch(`${BASE_URL}/${postId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
}