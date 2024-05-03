import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Image from 'App/Models/Image'
import StoreImageValidator from 'App/Validators/StoreImageValidator'
import UpdateChapterValidator from 'App/Validators/UpdateChapterValidator'

export default class ImagesController {
  public async index({}: HttpContextContract) {}

  public async store({ response, request }: HttpContextContract) {
    const image = await request.validate(StoreImageValidator)
    const newImage = await Image.create(image)
    return response.status(201).json(newImage.id)
  }

  public async show({ params }: HttpContextContract) {
    return await Image.query().where('id', params.id).firstOrFail()
  }

  public async update({ request, response, params }: HttpContextContract) {
    const image = await request.validate(UpdateChapterValidator)

    await Image.query().where('id', params.id).update(image)

    return response.status(200)
  }

  public async destroy({ params, response }: HttpContextContract) {
    await Image.query().where('id', params.id).delete()
    return response.status(204)
  }
}
