import { DateTime } from 'luxon'
import { BaseModel, HasMany, ManyToMany, column, hasMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import RoleUser from './RoleUser'
import PermissionRole from './PermissionRole'

export default class Role extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public displayName: string

  @column()
  public description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public systemName: string

  @column()
  public externalAuthId: string

  @hasMany(() => RoleUser)
  public rolesUser: HasMany<typeof RoleUser>

  @hasMany(() => PermissionRole)
  public permissionRole: HasMany<typeof PermissionRole>

  @manyToMany(() => User, {
    pivotTable: 'role_user',
    pivotForeignKey: 'user_id',
    pivotRelatedForeignKey: 'role_id',
  })
  public user: ManyToMany<typeof User>
}
