import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Permission from './Permission'
import Role from './Role'

export default class PermissionRole extends BaseModel {
  @column()
  public permissionId: number

  @column()
  public roleId: number

  @belongsTo(() => Permission)
  public permissions: BelongsTo<typeof Permission>

  @belongsTo(() => Role)
  public roles: BelongsTo<typeof Role>
}
