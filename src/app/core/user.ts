export interface Roles{
    lecturer?: boolean;
    admin?: boolean;
    superAdmin?: boolean;
}

export interface User{
    uid: string;
    emai: string;
    password: string;
    roles: Roles;
}