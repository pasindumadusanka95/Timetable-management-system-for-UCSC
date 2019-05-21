export interface Roles{
    lecturer?: boolean;
    admin?: boolean;
    superAdmin?: boolean;
}

export interface User{
    uid: string;
    email: string;
    password: string;
    roles: Roles;
}