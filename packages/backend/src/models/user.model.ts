import { Model } from 'sequelize';

export class User extends Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public nonce!: number;
  public publicAddress!: string;
  public username?: string; // for nullable fields

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
