import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateChapterValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    bookId: schema.string.optional(),
    slug: schema.string.optional(),
    name: schema.string.optional(),
    description: schema.string.optional(),
    priority: schema.number.optional(),
    createdBy: schema.number.optional([rules.exists({ table: 'users', column: 'id' })]),
    updatedBy: schema.number.optional([rules.exists({ table: 'users', column: 'id' })]),
    restricted: schema.number.optional(),
  })
}
