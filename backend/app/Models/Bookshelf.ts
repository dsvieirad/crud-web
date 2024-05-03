import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  HasMany,
  ManyToMany,
  belongsTo,
  column,
  hasMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Image from './Image'
import Book from './Book'
import BookshelvesBook from './BookshelvesBook'
import User from './User'

export default class BookShelf extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public slug: string

  @column()
  public description: string

  @column()
  public userId: number

  @column()
  public createdBy: number

  @column()
  public updatedBy: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public users: BelongsTo<typeof User>

  @hasMany(() => BookshelvesBook)
  public bookshelvesBoks: HasMany<typeof BookshelvesBook>

  @manyToMany(() => Book, {
    pivotTable: 'bookshelves_books',
  })
  public books: ManyToMany<typeof Book>
}
