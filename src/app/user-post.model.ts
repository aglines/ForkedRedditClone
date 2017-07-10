export class UserPost {
  constructor(
    public postTitle: string,
    public description: string,
    public comments: string[],
    public id: number
  ) {}
}
