export class Feed {
  constructor(
    public description: string, 
    public date: string, 
    public user: string, 
    public highPriority: boolean
  ) {}
}