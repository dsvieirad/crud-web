import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Role from './Role'

export default class RoleUser extends BaseModel {
  @column()
  public userId: number

  @column()
  public roleId: number

  @belongsTo(() => User)
  public users: BelongsTo<typeof User>

  @belongsTo(() => Role)
  public roles: BelongsTo<typeof Role>
}
