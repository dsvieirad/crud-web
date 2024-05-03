import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PermissionRole from 'App/Models/PermissionRole'
import StoreResetValidator from 'App/Validators/StoreResetValidator'

export default class PasswordResetsController {
  public async index({}: HttpContextContract) {}

  public async store({ response, request }: HttpContextContract) {
    const resets = await request.validate(StoreResetValidator)
    await PermissionRole.create(resets)
    return response.status(201)
  }

  public async show({ params }: HttpContextContract) {
    return await PermissionRole.query().where('id', params.id).firstOrFail()
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
