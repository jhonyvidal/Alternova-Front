export interface User {
    name: string;
    lastName: string;
    email: string;
    passwordHash: string;
    role?:string;
}