import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import EmailConfirmation from 'App/Models/EmailConfirmation'
import StoreEmailConfirmationValidator from 'App/Validators/StoreEmailConfirmationValidator'

export default class EmailConfirmationsController {
  public async index({}: HttpContextContract) {}

  public async store({ response, request }: HttpContextContract) {
    const emailConfirmation = await request.validate(StoreEmailConfirmationValidator)

    await EmailConfirmation.create(emailConfirmation)

    return response.status(201)
  }

  public async show({}: HttpContextContract) {}

  public async update({ params }: HttpContextContract) {
    const emailConfirmation = await EmailConfirmation.query()
      .where('token', params.token)
      .firstOrFail()

    const user = await emailConfirmation.related('users').query().firstOrFail()

    user.emailConfirmed = 1
    await user.save()
    await emailConfirmation.delete()
  }

  public async destroy({}: HttpContextContract) {}
}
