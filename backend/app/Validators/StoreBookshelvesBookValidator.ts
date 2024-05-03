import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreBookshelvesBookValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    bookshelfId: schema.number([rules.exists({ table: 'bookshelf', column: 'id' })]),
    bookId: schema.number([rules.exists({ table: 'book', column: 'id' })]),
    order: schema.number(),
  })
}
