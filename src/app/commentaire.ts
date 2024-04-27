import { Personne } from './personne';
export class Commentaire {
    id: number | undefined;
    auteur: Personne | undefined;
    contenu: string | undefined;
    date: Date | undefined;

    constructor() {}
}