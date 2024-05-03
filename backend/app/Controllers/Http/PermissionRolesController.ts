import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PermissionRole from 'App/Models/PermissionRole'
import StorePermissionRoleValidator from 'App/Validators/StorePermissionRoleValidator'

export default class PermissionRolesController {
  public async index({}: HttpContextContract) {}
  public async store({ response, request }: HttpContextContract) {
    const permissionRole = await request.validate(StorePermissionRoleValidator)

    await PermissionRole.create(permissionRole)

    return response.status(201)
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
