import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StorePermissionRoleValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    permissionId: schema.number([rules.exists({ table: 'permissions', column: 'id' })]),
    roleId: schema.number([rules.exists({ table: 'roles', column: 'id' })]),
  })
}
