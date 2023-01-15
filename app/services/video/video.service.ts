import { api } from '@api/axios';
import type { VideoModel } from '@models/video.interface';

export const VIDEO = '/video';

const videoService = {
  async getAll() {
    return api.get<VideoModel[]>(VIDEO);
  },
  async getMostPopular() {
    return api.get<VideoModel[]>(`${VIDEO}/most-popular`);
  }
};

export default videoService;
