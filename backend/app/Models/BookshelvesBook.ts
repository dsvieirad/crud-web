import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import BookShelf from './Bookshelf'
import Book from './Book'

export default class BookshelvesBook extends BaseModel {
  @column()
  public bookshelfId: number

  @column()
  public bookId: number

  @column()
  public order: number

  @belongsTo(() => BookShelf)
  public bookshelves: BelongsTo<typeof BookShelf>

  @belongsTo(() => Book)
  public books: BelongsTo<typeof Book>
}
