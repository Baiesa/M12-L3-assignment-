import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { createPost } from '../services/api';

function PostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const createPostMutation = useMutation(newPost => createPost(newPost));

  const handleSubmit = event => {
    event.preventDefault();
    createPostMutation.mutate({ title, body });
    setTitle('');
    setBody('');
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
        <textarea placeholder="Body" value={body} onChange={e => setBody(e.target.value)} required />
        <button type="submit" disabled={createPostMutation.isLoading}>
          {createPostMutation.isLoading ? 'Saving...' : 'Save'}
        </button>
      </form>
    </div>
  );
}

export default PostForm;