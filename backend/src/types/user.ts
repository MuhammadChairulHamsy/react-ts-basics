export type CreateUserInput = {
    name: string;
    email: string;
    address: string;
    company :string;
}

export type UpdateUserInput = Partial<CreateUserInput>