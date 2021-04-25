import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from "typeorm";

import { User } from "../entity/User";

import * as bcrypt from "bcryptjs";

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  async hashPassword(entity: User): Promise<void> {
    entity.password = await bcrypt.hash(entity.password, 10);
  }

  beforeInsert(event: InsertEvent<User>): Promise<void> {
    return this.hashPassword(event.entity);
  }
}
