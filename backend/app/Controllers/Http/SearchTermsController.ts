import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SearchTerm from 'App/Models/SearchTerm'
import StoreSearchTermValidator from 'App/Validators/StoreSearchTermValidator'
import UpdateSearchTermValidator from 'App/Validators/UpdateSearchTermValidator'

export default class SearchTermsController {
  public async index({}: HttpContextContract) {
    return await SearchTerm.all()
  }

  public async store({ request, response }: HttpContextContract) {
    const searchTerm = await request.validate(StoreSearchTermValidator)

    await SearchTerm.create(searchTerm)

    return response.status(201)
  }

  public async show({ params }: HttpContextContract) {
    return await SearchTerm.query().where('id', params.id).firstOrFail()
  }

  public async update({ request, response, params }: HttpContextContract) {
    const searchTerm = await request.validate(UpdateSearchTermValidator)

    await SearchTerm.query().where('id', params.id).update(searchTerm)

    return response.status(200)
  }

  public async destroy({ response, params }: HttpContextContract) {
    await SearchTerm.query().where('id', params.id).delete()

    return response.status(204)
  }

  public async search({ request, response }: HttpContextContract) {
    const { term } = request.qs()
    let searchTerm = await SearchTerm.query().where('term', term).first()
    if (!searchTerm) {
      const ctx: HttpContextContract = {
        request,
        response,
        inspect: function () {
          throw new Error('Function not implemented.')
        },
      }
      await this.store(ctx)
      return
    }

    searchTerm.score += 1
    await searchTerm.save()

    return response.status(200).json({ term })
  }
}
