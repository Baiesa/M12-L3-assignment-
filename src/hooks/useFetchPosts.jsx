import { useQuery } from 'react-query';
import { fetchPosts } from '../services/api';

function useFetchPosts() {
  return useQuery('posts', fetchPosts);
}

export default useFetchPosts;