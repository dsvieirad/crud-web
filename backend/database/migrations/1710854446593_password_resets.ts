import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'password_resets'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('email').notNullable()
      table.string('token').notNullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
