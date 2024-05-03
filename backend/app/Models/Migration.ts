import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Migration extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public migration: string

  @column()
  public batch: string
}
