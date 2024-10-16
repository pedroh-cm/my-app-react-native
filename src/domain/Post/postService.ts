import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(): Promise<Post[]> {
  const postPageAPI = await postApi.getList();

  return postPageAPI.data.map(post => postAdapter.toPost(post));
}

export const postService = {
  getList,
};
