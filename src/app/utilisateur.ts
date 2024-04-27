import { Personne } from "./personne";

export class Utilisateur extends Personne {
    constructor(username: string) {
        super(username);
    }
}