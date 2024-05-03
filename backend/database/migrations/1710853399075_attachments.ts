import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'attachments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('path').notNullable()
      table.string('extension').notNullable()
      table.integer('uploaded_to').notNullable()
      table.tinyint('external').notNullable()
      table.integer('order').notNullable()
      table.integer('created_by').notNullable()
      table.integer('updates_by').notNullable()
      table.timestamp('created_at', { useTz: true }).nullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
