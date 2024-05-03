import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreCommentValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    entityId: schema.number([rules.exists({ table: 'books', column: 'id' })]),
    text: schema.string(),
    parentId: schema.number([rules.exists({ table: 'users', column: 'id' })]),
    localId: schema.number(),
    createdBy: schema.number([rules.exists({ table: 'users', column: 'id' })]),
    updatedBy: schema.number.optional([rules.exists({ table: 'users', column: 'id' })]),
  })
}
