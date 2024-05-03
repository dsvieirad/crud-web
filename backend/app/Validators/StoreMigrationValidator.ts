import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreMigrationValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    migration: schema.string(),
    batch: schema.number(),
  })
}
