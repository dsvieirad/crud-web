import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Attachment from 'App/Models/Attachment'
import StoreAttachmentValidator from 'App/Validators/StoreAttachmentValidator'

export default class AttachmentsController {
  public async index({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const attachment = await request.validate(StoreAttachmentValidator)

    await Attachment.create(attachment)

    return response.status(201)
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
