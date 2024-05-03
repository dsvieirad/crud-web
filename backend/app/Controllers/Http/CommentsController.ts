import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment'
import StoreCommentValidator from 'App/Validators/StoreCommentValidator'
import UpdateCommentValidator from 'App/Validators/UpdateCommentValidator'

export default class CommentsController {
  public async index({}: HttpContextContract) {
    return await Comment.all()
  }

  public async store({ request, response }: HttpContextContract) {
    const comment = await request.validate(StoreCommentValidator)

    await Comment.create(comment)

    return response.status(201)
  }

  public async show({ params }: HttpContextContract) {
    return await Comment.query().where('id', params.id).firstOrFail()
  }

  public async update({ request, response, params }: HttpContextContract) {
    const comment = await request.validate(UpdateCommentValidator)

    await Comment.query().where('id', params.id).update(comment)

    return response.status(200)
  }

  public async destroy({ response, params }: HttpContextContract) {
    await Comment.query().where('id', params.id).delete()

    return response.status(204)
  }
}
