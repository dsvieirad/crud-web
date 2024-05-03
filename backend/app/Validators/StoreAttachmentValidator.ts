import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreAttachmentValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    name: schema.string(),
    path: schema.string(),
    extension: schema.string(),
    uploadedTo: schema.number([rules.exists({ table: 'users', column: 'id' })]),
    external: schema.number(),
    order: schema.number(),
    createdBy: schema.number([rules.exists({ table: 'users', column: 'id' })]),
    updatedBy: schema.number.optional([rules.exists({ table: 'users', column: 'id' })]),
  })
}
