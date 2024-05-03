import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RoleUser from 'App/Models/RoleUser'
import StoreRoleUseValidator from 'App/Validators/StoreRoleUseValidator'

export default class RoleUsersController {
  public async index({}: HttpContextContract) {}

  public async store({ response, request }: HttpContextContract) {
    const roleUser = await request.validate(StoreRoleUseValidator)

    await RoleUser.create(roleUser)

    return response.status(201)
  }

  public async show({ params }: HttpContextContract) {
    return await RoleUser.query().where('id', params.id).firstOrFail()
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
