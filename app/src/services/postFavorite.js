import url, { endpoints } from './config';
import to from './to';

const postFavorite = async (body, id, headers) => {
  const postFavoriteUrl = `${url}${endpoints.characters}/${id}`;

  const response = await to('POST', postFavoriteUrl, body, headers);

  return response;
};

export default postFavorite;
