import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserInvite from 'App/Models/UserInvite'
import StoreUserInviteValidator from 'App/Validators/StoreUserInviteValidator'

export default class UserInvitesController {
  public async index({}: HttpContextContract) {}

  public async store({ response, request }: HttpContextContract) {
    const userInvite = await request.validate(StoreUserInviteValidator)

    await UserInvite.create(userInvite)

    return response.status(201)
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
