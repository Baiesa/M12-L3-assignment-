import { useMutation } from 'react-query';
import { createPost, updatePost, deletePost } from '../services/api';

export function useCreatePost() {
  return useMutation(newPost => createPost(newPost));
}

export function useUpdatePost() {
  return useMutation(updatedPost => updatePost(updatedPost));
}

export function useDeletePost() {
  return useMutation(postId => deletePost(postId));
}