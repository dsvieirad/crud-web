import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateCommentValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    entityId: schema.number.optional([rules.exists({ table: 'books', column: 'id' })]),
    text: schema.string.optional(),
    parentId: schema.number.optional([rules.exists({ table: 'users', column: 'id' })]),
    localId: schema.number.optional(),
    createdBy: schema.number.optional([rules.exists({ table: 'users', column: 'id' })]),
    updatedBy: schema.number.optional([rules.exists({ table: 'users', column: 'id' })]),
  })
}
