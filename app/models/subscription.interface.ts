import type { BaseModel } from '@models/base.interface';
import type { UserModel } from '@models/user.interface';

export interface SubscriptionModel extends BaseModel {
  toChannel: UserModel;
}
