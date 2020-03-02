export class HomeFeed {
  constructor(
    public author: string,
    public description: string,
    public date: Date,
    public isHighPriority: boolean
  ) {}
}
