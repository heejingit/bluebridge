export class Schedule {
    constructor(
      public _id: string,
      public type: string,
      public user: Array<string>,
      public startDate: Date,
      public endDate: Date,
      public isApproved: boolean,
      public title: string,
      public description: string
    ) {}
  }