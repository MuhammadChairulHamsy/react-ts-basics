export type CreateUserInput = {
    name: string;
    email: string;
    company :string;
}

export type UpdateUserInput = Partial<CreateUserInput>