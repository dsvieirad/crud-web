import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Image extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public url: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public createdBy: number

  @column()
  public updatedBy: number

  @column()
  public path: string

  @column()
  public type: string

  @column()
  public uploadedTo: number

  @hasMany(() => User)
  public users: HasMany<typeof User>
}
