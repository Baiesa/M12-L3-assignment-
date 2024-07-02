import React from 'react';
import { useMutation } from 'react-query';
import { deletePost, updatePost } from '../services/api';

function PostItem({ post }) {
  const updatePostMutation = useMutation(updatedPost => updatePost(updatedPost));
  const deletePostMutation = useMutation(postId => deletePost(postId));

  const handleUpdate = () => {
    // Implement update logic using updatePostMutation.mutate(...)
  };

  const handleDelete = () => {
    // Implement delete logic using deletePostMutation.mutate(post.id)
  };

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default PostItem;