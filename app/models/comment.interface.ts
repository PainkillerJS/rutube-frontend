import type { BaseModel } from '@models/base.interface';
import type { UserModel } from '@models/user.interface';
import type { VideoModel } from '@models/video.interface';

export interface CommentModel extends BaseModel {
  user: UserModel;
  video: VideoModel;
  message: string;
}

export interface CommentDtoTypes extends Pick<CommentModel, 'message'> {
  videoId: VideoModel['id'];
}
