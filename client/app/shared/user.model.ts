export class User {
  constructor(
    public _id: string,
    public personalInfo: any,
    public email: string,
    public password: string,
    public firstName: string,
    public lastName: string,
    public isLogin: boolean
  ) {}
}
