import Application from '@ioc:Adonis/Core/Application'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Book from 'App/Models/Book'
import StoreBookValidator from 'App/Validators/StoreBookValidator'
import UpdateBookValidator from 'App/Validators/UpdateBookValidator'

export default class BooksController {
  public async index({}: HttpContextContract) {
    return await Book.all()
  }

  public async store({ response, request }: HttpContextContract) {
    const book = await request.validate(StoreBookValidator)

    await Book.create(book)
    const coverImage = request.file('image', {
      size: '2mb',
      extnames: ['jpg', 'png', 'gif'],
    })

    if (!coverImage) {
      return
    }

    if (!coverImage.isValid) {
      return coverImage.errors
    }

    await coverImage.move(Application.tmpPath('uploads'))

    return response.status(201)
  }

  public async show({ params }: HttpContextContract) {
    return await Book.query().where('id', params.id).firstOrFail()
  }

  public async update({ request, response, params }: HttpContextContract) {
    const book = await request.validate(UpdateBookValidator)

    await Book.query().where('id', params.id).update(book)

    return response.status(200)
  }

  public async destroy({ response, params }: HttpContextContract) {
    await Book.query().where('id', params.id).delete()

    return response.status(204)
  }
}
