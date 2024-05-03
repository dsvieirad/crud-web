import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  HasMany,
  ManyToMany,
  beforeSave,
  belongsTo,
  column,
  hasMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import ApiToken from './ApiToken'
import EmailConfirmation from './EmailConfirmation'
import SearchTerm from './SearchTerm'
import UserInvite from './UserInvite'
import Setting from './Setting'
import Image from './Image'
import Role from './Role'
import RoleUser from './RoleUser'
import Hash from '@ioc:Adonis/Core/Hash'
import BookShelf from './Bookshelf'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public rememberToken: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public emailConfirmed: number

  @column()
  public imageId: number

  @column()
  public externalAuthId: string

  @column()
  public systemName: string

  @belongsTo(() => Image)
  public images: BelongsTo<typeof Image>

  @hasMany(() => ApiToken)
  public api: HasMany<typeof ApiToken>

  @hasMany(() => EmailConfirmation)
  public emails: HasMany<typeof EmailConfirmation>

  @hasMany(() => RoleUser)
  public rolesUser: HasMany<typeof RoleUser>

  @hasMany(() => Setting)
  public settings: HasMany<typeof Setting>

  @hasMany(() => SearchTerm)
  public search: HasMany<typeof SearchTerm>

  @hasMany(() => BookShelf)
  public bookshelf: HasMany<typeof BookShelf>

  @hasMany(() => UserInvite)
  public users: HasMany<typeof UserInvite>

  @manyToMany(() => Role, {
    pivotTable: 'role_user',
  })
  public roles: ManyToMany<typeof Role>

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
