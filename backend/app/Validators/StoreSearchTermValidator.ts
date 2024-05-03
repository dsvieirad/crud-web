import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreSearchTermValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    term: schema.string(),
    entityType: schema.string(),
    entityId: schema.number([rules.exists({ table: 'books', column: 'id' })]),
    score: schema.string(),
  })
}
