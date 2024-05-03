import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import StoreUserValidator from 'App/Validators/StoreUserValidator'
import UpdateUserValidator from 'App/Validators/UpdateUserValidator'
import Event from '@ioc:Adonis/Core/Event'

export default class UsersController {
  public async index({}: HttpContextContract) {
    return await User.all()
  }

  public async store({ response, request }: HttpContextContract) {
    const user = await request.validate(StoreUserValidator)

    await User.create(user)
    Event.emit('user.created', user)

    return response.status(201)
  }

  public async show({ params }: HttpContextContract) {
    return await User.query().where('id', params.id).firstOrFail()
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const user = await request.validate(UpdateUserValidator)

      await User.query().where('id', params.id).update(user)

      return response.status(200)
    } catch (error) {
      console.log(error)
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    await User.query().where('id', params.id).delete()

    return response.status(204)
  }
}
