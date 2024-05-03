import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateBookshelfValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    name: schema.string.optional(),
    slug: schema.string.optional(),
    description: schema.string.optional(),
    userId: schema.number.optional([rules.exists({ table: 'users', column: 'id' })]),
    createdBy: schema.number.optional([rules.exists({ table: 'users', column: 'id' })]),
    updatedBy: schema.number.optional([rules.exists({ table: 'users', column: 'id' })]),
  })
}
