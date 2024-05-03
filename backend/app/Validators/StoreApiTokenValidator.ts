import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreApiTokenValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    token: schema.string(),
    type: schema.string(),
    userId: schema.number([rules.exists({ table: 'users', column: 'id' })]),
    expiresAt: schema.date.optional(),
  })
}
