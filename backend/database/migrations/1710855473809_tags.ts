import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'tags'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('entity_id').unsigned().references('id').inTable('books').onUpdate('CASCADE').onDelete('CASCADE').notNullable()
      table.string('entity_type').notNullable()
      table.string('name').notNullable()
      table.string('value').notNullable()
      table.integer('order').notNullable()
      table.timestamp('created_at', { useTz: true }).nullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
