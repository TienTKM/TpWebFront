import { Utilisateur } from './utilisateur';
import { Personne } from './personne';
import { Discussion } from './discussion';

export enum Statut {
    OPEN, CLOSED
}

export class Ticket {
    id!: number;
    titre: string;
    tags: string[];
    statut: Statut;
    suivis: Personne[];
    demande: boolean;
    date: Date;
    discussion!: Discussion;
    auteur: Utilisateur;

    constructor(auteur: Utilisateur, date: Date, titre: string, demande: boolean, discussion: boolean) {
        this.auteur = auteur;
        this.date = date;
        this.titre = titre;
        this.demande = demande;
        if (discussion) {
            this.discussion = new Discussion();
        }
        this.statut = Statut.OPEN;
        this.suivis = [];
        this.tags = [];
    }
}