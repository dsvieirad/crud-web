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
import Chapter from './Chapter'
import BookShelf from './Bookshelf'
import BookshelvesBook from './BookshelvesBook'
import SearchTerm from './SearchTerm'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public slug: string

  @column()
  public description: string

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

  @column()
  public imageId: number

  @belongsTo(() => Image)
  public images: BelongsTo<typeof Image>

  @hasMany(() => Chapter)
  public chapters: HasMany<typeof Chapter>

  @hasMany(() => SearchTerm)
  public searchTerm: HasMany<typeof SearchTerm>

  @hasMany(() => BookshelvesBook)
  public bookshelvesBoks: HasMany<typeof BookshelvesBook>

  @manyToMany(() => BookShelf, {
    pivotTable: 'bookshelves_books',
  })
  public bookshelves: ManyToMany<typeof BookShelf>
}
