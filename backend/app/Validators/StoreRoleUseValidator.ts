import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreRoleUseValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    userId: schema.number([rules.exists({ table: 'users', column: 'id' })]),
    roleId: schema.number([rules.exists({ table: 'roles', column: 'id' })]),
  })
}
