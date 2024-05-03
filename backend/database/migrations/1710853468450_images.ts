import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'images'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('url').notNullable()
      table.timestamp('created_at', { useTz: true }).nullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
      table.integer('created_by').notNullable()
      table.integer('updated_by').notNullable()
      table.string('path').notNullable()
      table.string('type').notNullable()
      table.integer('uploaded_to').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
