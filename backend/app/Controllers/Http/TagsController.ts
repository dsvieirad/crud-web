import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Tag from 'App/Models/Tag'
import StoreTagValidator from 'App/Validators/StoreTagValidator'
import UpdateTagValidator from 'App/Validators/UpdateTagValidator'

export default class TagsController {
  public async index({}: HttpContextContract) {
    return await Tag.all()
  }

  public async store({ response, request }: HttpContextContract) {
    const tag = await request.validate(StoreTagValidator)
    await Tag.create(tag)
    return response.status(201)
  }

  public async show({ params }: HttpContextContract) {
    return await Tag.query().where('id', params.id).firstOrFail()
  }

  public async update({ request, response, params }: HttpContextContract) {
    const tag = await request.validate(UpdateTagValidator)
    await Tag.query().where('id', params.id).update(tag)
    return response.status(200)
  }

  public async destroy({ params, response }: HttpContextContract) {
    await Tag.query().where('id', params.id).delete()

    return response.status(204)
  }
}
