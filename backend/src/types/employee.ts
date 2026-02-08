export type CreateEmployeeInput = {
  name: string;
  job: string;
};

export type UpdateEmployeeInput = Partial<CreateEmployeeInput>;
