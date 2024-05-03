import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreRoleValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    name: schema.string(),
    displayName: schema.string(),
    description: schema.string.optional(),
    systemName: schema.string(),
    externalAuthId: schema.string(),
  })
}
