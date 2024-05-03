import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Permission from 'App/Models/Permission'
import StorePermissionValidator from 'App/Validators/StorePermissionValidator'

export default class PermissionsController {
  public async index({}: HttpContextContract) {
    return await Permission.all()
  }

  public async store({ response, request }: HttpContextContract) {
    const permission = await request.validate(StorePermissionValidator)

    await Permission.create(permission)

    return response.status(201)
  }

  public async show({ params }: HttpContextContract) {
    return await Permission.query().where('id', params.id).firstOrFail()
  }

  public async update({}: HttpContextContract) {}

  public async destroy({ response, params }: HttpContextContract) {
    await Permission.query().where('id', params.id).delete()

    return response.status(204)
  }
}
