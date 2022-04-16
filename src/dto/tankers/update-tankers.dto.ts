import { BaseTanker } from "./base-tankers.dto";

export class UpdateTankerDto extends BaseTanker {
  completedAt: Date;
}