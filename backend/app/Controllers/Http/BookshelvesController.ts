import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BookShelf from 'App/Models/Bookshelf'
import StoreBookshelfValidator from 'App/Validators/StoreBookshelfValidator'
import UpdateBookshelfValidator from 'App/Validators/UpdateBookshelfValidator'

export default class BookshelvesController {
  public async index({}: HttpContextContract) {
    return await BookShelf.all()
  }

  public async store({ response, request }: HttpContextContract) {
    const bookshelve = await request.validate(StoreBookshelfValidator)
    await BookShelf.create(bookshelve)
    return response.status(201)
  }

  public async show({ params }: HttpContextContract) {
    return await BookShelf.query().where('id', params.id).firstOrFail()
  }

  public async update({ request, response, params }: HttpContextContract) {
    const bookshelf = await request.validate(UpdateBookshelfValidator)

    await BookShelf.query().where('id', params.id).update(bookshelf)

    return response.status(200)
  }

  public async destroy({ response, params }: HttpContextContract) {
    await BookShelf.query().where('id', params.id).delete()
    return response.status(204)
  }
}
