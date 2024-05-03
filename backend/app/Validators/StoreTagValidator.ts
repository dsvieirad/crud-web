import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreTagValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    entityId: schema.number([rules.exists({ table: 'books', column: 'id' })]),
    entityType: schema.string(),
    name: schema.string(),
    value: schema.string(),
    order: schema.number(),
  })
}
