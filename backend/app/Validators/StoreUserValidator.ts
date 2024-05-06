import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
    password: schema.string(),
    rememberToken: schema.string.optional({}, [rules.nullable()]),
    emailConfirmed: schema.number(),
    imageId: schema.number.optional([rules.exists({ table: 'images', column: 'id' })]),
    externalAuthId: schema.string.optional(),
    systemName: schema.string.optional([rules.nullable()]),
  })
  public messages: CustomMessages = {
    'password.regex':
      'A Senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial',
    'password.required': 'O campo Senha é obrigatório',
    'password.minLength': 'O campo Senha deve conter pelo menos 8 caracteres',
    'password.maxLength': 'O campo Senha deve conter no máximo 191 caracteres',
    'name.required': 'O campo Nome é obrigatório',
    'name.maxLength': 'O campo Nome deve conter no máximo 191 caracteres',
    'email.required': 'O campo Email é obrigatório',
    'email.email': 'Email inválido',
    'email.unique': 'O Email deve ser único',
    'email.maxLength': 'O campo Email deve conter no máximo 191 caracteres',
    'passwordConfirmation.confirmed': 'Senhas não coincidem',
  }
}
