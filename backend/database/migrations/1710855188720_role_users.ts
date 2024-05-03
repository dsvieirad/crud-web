import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'role_users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('user_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE').notNullable()
      table.integer('role_id').unsigned().references('id').inTable('roles').onUpdate('CASCADE').onDelete('CASCADE').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
