export class Ticket {
    id: number | undefined;
    titre: string | undefined;
    tags: Set<string> | undefined;
    demande: boolean = false;
    discussion: boolean = false;
    date: Date | undefined;
    auteurNom: string | undefined;
}
