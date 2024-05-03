import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('password').notNullable()
      table.string('remember_token').nullable()
      table.timestamp('created_at', { useTz: true }).nullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
      table.tinyint('email_confirmed').notNullable()
      table
        .integer('image_id')
        .unsigned()
        .references('id')
        .inTable('images')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table.string('external_auth_id').notNullable()
      table.string('system_name').nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
