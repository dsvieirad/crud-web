import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import StoreUserValidator from 'App/Validators/StoreUserValidator'
import UpdateUserValidator from 'App/Validators/UpdateUserValidator'
import Mail from '@ioc:Adonis/Addons/Mail'

export default class UsersController {
  public async index({}: HttpContextContract) {
    return await User.all()
  }

  public async store({ response, request }: HttpContextContract) {
    try {
      const user = await request.validate(StoreUserValidator)

      await User.create(user)
      await Mail.send((message) => {
        message
          .from('jeondani0105@gmail.com')
          .to(user.email)
          .subject('Email Autenticado')
          .htmlView('emails/verify-email', { user: user.name })
      })
      return response.status(201)
    } catch (error) {
      console.log(error)
    }
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

  public async getUsers() {
    const users = await User.query().select(['id', 'username', 'email'])
    return users
  }

  public async getUserRoles(userId: number) {
    try {
      const user = await User.findOrFail(userId)
      await user.load('roles')
      const roles = user.related('roles')
      return roles
    } catch (error) {
      console.error('Erro ao recuperar as roles do usuário:', error)
      throw error
    }
  }
}
