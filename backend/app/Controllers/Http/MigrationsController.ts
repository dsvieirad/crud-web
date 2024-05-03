import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Migration from 'App/Models/Migration'
import StoreMigrationValidator from 'App/Validators/StoreMigrationValidator'

export default class MigrationsController {
  public async index({}: HttpContextContract) {}

  public async store({ response, request }: HttpContextContract) {
    const migration = await request.validate(StoreMigrationValidator)

    await Migration.create(migration)

    return response.status(201)
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
