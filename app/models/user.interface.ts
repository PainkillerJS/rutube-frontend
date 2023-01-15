import type { BaseModel } from '@models/base.interface';
import type { SubscriptionModel } from '@models/subscription.interface';
import type { VideoModel } from '@models/video.interface';

export interface UserModel extends BaseModel {
  email: string;
  name: string;
  description: string;
  avatarPath: string;
  subscriptions: SubscriptionModel[];
  videos?: VideoModel[];
  isVerified?: boolean;
  subscribersCount?: number;
}
