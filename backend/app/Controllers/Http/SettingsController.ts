import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Setting from 'App/Models/Setting'
import StoreSettingValidator from 'App/Validators/StoreSettingValidator'

export default class SettingsController {
  public async index({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const setting = await request.validate(StoreSettingValidator)

    await Setting.create(setting)

    return response.status(201)
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
