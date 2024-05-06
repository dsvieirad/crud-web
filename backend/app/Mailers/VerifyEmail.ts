import { BaseMailer, MessageContract } from '@ioc:Adonis/Addons/Mail'
import User from 'App/Models/User'

export default class VerifyEmail extends BaseMailer {
  constructor(private user: User) {
    super()
  }

  public prepare(message: MessageContract) {
    message.subject('Email Verificado').from('jeondani0105@gmail.com').to(this.user.email)
  }
}
