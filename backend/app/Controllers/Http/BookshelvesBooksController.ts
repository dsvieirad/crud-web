import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BookshelvesBook from 'App/Models/BookshelvesBook'
import StoreBookshelvesBookValidator from 'App/Validators/StoreBookshelvesBookValidator'

export default class BookshelvesBooksController {
  public async index({}: HttpContextContract) {}

  public async store({ response, request }: HttpContextContract) {
    const bookshelvesbooks = await request.validate(StoreBookshelvesBookValidator)

    await BookshelvesBook.create(bookshelvesbooks)

    return response.status(201)
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
