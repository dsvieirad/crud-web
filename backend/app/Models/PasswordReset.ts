import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class PasswordReset extends BaseModel {
  @column()
  public email: string

  @column() 
  public token: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
}
