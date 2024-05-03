import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Book from './Book'

export default class SearchTerm extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public term: string

  @column()
  public entityType: string

  @column()
  public entityId: number

  @column()
  public score: number

  @belongsTo(() => Book)
  public user: BelongsTo<typeof Book>
}
