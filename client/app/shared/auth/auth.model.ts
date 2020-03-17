export class Auth {
  constructor(
    public userID: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public picture: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }

    return this._token;
  }
}
