export class Ticket {
    id: number | undefined;
    titre: string | undefined;
    tags: Set<string> | undefined;
    demande: Boolean | undefined;
    date: Date | undefined;
}
