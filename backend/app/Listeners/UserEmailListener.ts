import Mail from '@ioc:Adonis/Addons/Mail'
import Event from '@ioc:Adonis/Core/Event'
import User from 'App/Models/User'
export class UserEmailListener {
  public static async handle(user: User, confirmationToken: string) {
    await Mail.send((message) => {
      message
        .from('dsvk06@gmail.com')
        .to(user.email)
        .subject('Confirmação de Cadastro')
        .htmlView('emails.confirmation', { token: confirmationToken })
    })
  }
}

Event.on('user.created', UserEmailListener.handle)
