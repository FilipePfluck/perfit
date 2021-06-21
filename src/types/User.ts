export type User = {
    id: string;
    name: string
    email: string
    phone: string
    city: {id: string, name: string, uf: string}
    street: string
    number: string
    district: string
    type: 'COMMON' | 'PERSONAL'
}