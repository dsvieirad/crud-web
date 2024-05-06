import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User'

export default class LoginController {
  public async login({ auth, response, request }: HttpContextContract) {
    try {
      const email = request.input('email')
      const password = request.input('password')

      const user = await User.findBy('email', email)

      if (!user || !(await Hash.verify(user.password, password))) {
        return response.unauthorized('Email ou senha incorretos.')
      }

      const token = await auth.use('api').generate(user, {
        expiresIn: '15 mins',
      })

      return token.toJSON()
    } catch (error) {
      console.error('Erro durante a autenticação:', error.message)
      return response.internalServerError('Ocorreu um erro durante a autenticação.')
    }
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.use('api').revoke()

    return !auth.use('api').isLoggedIn
  }
}
