import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateSearchTermValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    term: schema.string.optional(),
    entityType: schema.string.optional(),
    entityId: schema.number.optional([rules.exists({ table: 'books', column: 'id' })]),
    score: schema.string.optional(),
  })
}
