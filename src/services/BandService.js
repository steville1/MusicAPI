import {apiCore} from './ApiCore';

export const bandService = {
  getAlbums(band) {
    return apiCore.get(`?limit=5&term=${band}`);
  }
};