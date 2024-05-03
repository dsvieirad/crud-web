import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public entityId: number

  @column()
  public entityType: string

  @column()
  public text: string

  @column()
  public parentId: number

  @column()
  public localId: number

  @column()
  public createdBy: number

  @column()
  public updatedBy: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
