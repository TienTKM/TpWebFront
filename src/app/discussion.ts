import { Commentaire } from './commentaire';
import { Personne } from './personne';
export class Discussion {
    id: number | undefined;
    commentaires: Commentaire[] | undefined;
    participants: Personne[] | undefined;

    constructor() {}
}