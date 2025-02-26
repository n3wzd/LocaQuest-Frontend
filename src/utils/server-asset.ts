import * as FileSystem from "expo-file-system";
import URL from '../config/url';
import ASSET from '../config/asset';

export const profileImage = async (userId: number) => {
  const serverUrl = URL.API_BASE + `/user-profile/${userId}.jpg`;
  const cachePath = URL.ASSET.profile + `/${userId}.jpg`;
  
  let imageUri;
  const fileInfo = await FileSystem.getInfoAsync(cachePath);
  if (fileInfo.exists) {
    imageUri = cachePath;
  } else {
    try {
      imageUri = (await FileSystem.downloadAsync(serverUrl, cachePath)).uri;
    } catch(e) {
      imageUri = ASSET.profile.default;
    }
  }
  return imageUri;
};

export const syncProfileImage = async (userId: number) => {
  const serverUrl = URL.API_BASE + `/user-profile/${userId}.jpg`;
  const cachePath = URL.ASSET.profile + `/${userId}.jpg`;
  await FileSystem.downloadAsync(serverUrl, cachePath);
}
