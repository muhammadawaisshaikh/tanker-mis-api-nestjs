import { BaseUsers } from "./base-users.dto";

export class UpdateUsersDto extends BaseUsers {
  completedAt: Date;
}