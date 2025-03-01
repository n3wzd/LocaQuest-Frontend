import URL from '../config/url';
import ASSET from '../config/asset';

const getUri = (userId: number) => URL.API_BASE.CORE + `/resource/user-profile/${userId}.jpg?timestamp=${Date.now()}`;

export const profileImage = async (userId: number) => {
  const uri = getUri(userId);
  try {
    const response = await fetch(uri, { method: 'HEAD' });
    console.log(response);
    return response.ok ? uri : ASSET.profile.default;
  } catch {
    return ASSET.profile.default;
  }
};
