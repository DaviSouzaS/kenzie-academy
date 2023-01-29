interface Client {
    name: string;
    cpf: string;
    birthYear: number;
}

type ClientRequiredKeys = "name" | "cpf" | "birthYear"

export {Client, ClientRequiredKeys}