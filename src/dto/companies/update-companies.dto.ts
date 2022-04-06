import { BaseCompany } from "./base-companies.dto";

export class UpdateCompanyDto extends BaseCompany {
  completedAt: Date;
}