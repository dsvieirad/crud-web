import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreSettingValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    settingKey: schema.string(),
    value: schema.string(),
  })
}
