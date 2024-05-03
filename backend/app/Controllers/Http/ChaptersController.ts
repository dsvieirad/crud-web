import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Chapter from 'App/Models/Chapter'
import StoreChapterValidator from 'App/Validators/StoreChapterValidator'
import UpdateChapterValidator from 'App/Validators/UpdateChapterValidator'

export default class ChaptersController {
  public async index({}: HttpContextContract) {
    return await Chapter.all()
  }

  public async store({ response, request }: HttpContextContract) {
    const chapter = await request.validate(StoreChapterValidator)
    await Chapter.create(chapter)
    return response.status(201)
  }

  public async show({ params }: HttpContextContract) {
    return await Chapter.query().where('id', params.id).firstOrFail()
  }

  public async update({ response, request, params }: HttpContextContract) {
    const chapter = await request.validate(UpdateChapterValidator)

    await Chapter.query().where('id', params.id).update(chapter)

    return response.status(200)
  }

  public async destroy({ response, params }: HttpContextContract) {
    await Chapter.query().where('id', params.id).delete()

    return response.status(204)
  }
}
