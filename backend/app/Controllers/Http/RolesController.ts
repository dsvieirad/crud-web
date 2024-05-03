import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Role from 'App/Models/Role'
import StoreRoleValidator from 'App/Validators/StoreRoleValidator'

export default class RolesController {
  public async index({}: HttpContextContract) {
    return await Role.all()
  }

  public async store({ response, request }: HttpContextContract) {
    const role = await request.validate(StoreRoleValidator)

    await Role.create(role)

    return response.status(201)
  }

  public async show({ params }: HttpContextContract) {
    return await Role.query().where('id', params.id).firstOrFail()
  }

  public async update({}: HttpContextContract) {}

  public async destroy({ response, params }: HttpContextContract) {
    await Role.query().where('id', params.id).delete()

    return response.status(204)
  }
}
