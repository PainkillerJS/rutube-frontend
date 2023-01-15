import type { BaseModel } from '@models/base.interface';
import type { CommentModel } from '@models/comment.interface';
import type { UserModel } from '@models/user.interface';

export interface VideoModel extends BaseModel {
  name: string;
  views: number;
  likes: number;
  duration: number;
  description: string;
  videoPath: string;
  thumbnailPath: string;
  user?: UserModel;
  comments?: CommentModel[];
  isPublic?: boolean;
}

export interface VideoDtoTypes
  extends Pick<
    VideoModel,
    'id' | 'thumbnailPath' | 'description' | 'name' | 'videoPath' | 'isPublic'
  > {}
