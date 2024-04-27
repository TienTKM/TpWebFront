export abstract class Personne {
    id: number | undefined;
    username: string;

    constructor(username: string) {
        this.username = username;
    }
}