import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreImageValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    name: schema.string(),
    url: schema.string(),
    createdBy: schema.number.optional([rules.exists({ table: 'users', column: 'id' })]),
    updatedBy: schema.number.optional([rules.exists({ table: 'users', column: 'id' })]),
    path: schema.string(),
    type: schema.string(),
    uploadedTo: schema.number(),
  })
}
