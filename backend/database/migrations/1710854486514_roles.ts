import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'roles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('display_name').nullable()
      table.string('description').nullable()
      table.timestamp('created_at', { useTz: true }).nullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
      table.string('system_name').notNullable()
      table.string('external_auth_id').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
