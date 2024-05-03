import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Attachment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public path: string

  @column()
  public extension: string

  @column()
  public uploadedTo: number

  @column()
  public external: number

  @column()
  public order: number

  @column()
  public createdBy: number

  @column()
  public updatedBy: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
