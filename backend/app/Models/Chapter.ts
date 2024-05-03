import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Book from './Book'

export default class Chapter extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public book_id: number

  @column()
  public slug: string

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public priority: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public createdBy: number

  @column()
  public updatedBy: number

  @column()
  public restricted: number

  @belongsTo(() => Book)
  public books: BelongsTo<typeof Book>
}
