import { DateTime } from 'luxon'
import { BaseModel, ManyToMany, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Book from './Book'

export default class Tag extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public entityId: number

  @column()
  public entityType: string

  @column()
  public name: string

  @column()
  public value: string

  @column()
  public order: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Book, {
    pivotTable: 'tags_book',
  })
  public books: ManyToMany<typeof Book>
}
