import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreEmailConfirmationValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    userId: schema.number([rules.exists({ table: 'users', column: 'id' })]),
    token: schema.string(),
  })
}
