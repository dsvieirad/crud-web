import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreBookValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    slug: schema.string(),
    description: schema.string({}, [rules.minLength(20)]),
    createdBy: schema.number([rules.exists({ table: 'users', column: 'id' })]),
    updatedBy: schema.number.optional([rules.exists({ table: 'users', column: 'id' })]),
    restricted: schema.number(),
    imageId: schema.number([rules.nullable()]),
  })
}
