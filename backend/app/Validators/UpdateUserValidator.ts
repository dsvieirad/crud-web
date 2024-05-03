import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string.optional(),
    email: schema.string.optional(),
    password: schema.string.optional(),
    rememberToken: schema.string.optional(),
    emailConfirmed: schema.number.optional(),
    imageId: schema.number.optional(),
    externalAuthId: schema.string.optional(),
    systemName: schema.number.optional(),
  })
}
