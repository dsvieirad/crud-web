import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateTagValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    entityId: schema.number.optional([rules.exists({ table: 'books', column: 'id' })]),
    entityType: schema.string.optional(),
    name: schema.string.optional(),
    value: schema.string.optional(),
    order: schema.number.optional(),
  })
}
