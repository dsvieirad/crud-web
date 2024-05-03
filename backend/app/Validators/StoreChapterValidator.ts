import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreChapterValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    bookId: schema.string(),
    slug: schema.string(),
    name: schema.string(),
    description: schema.string(),
    priority: schema.number(),
    createdBy: schema.number([rules.exists({ table: 'users', column: 'id' })]),
    updatedBy: schema.number.optional([rules.exists({ table: 'users', column: 'id' })]),
    restricted: schema.number(),
  })
}
