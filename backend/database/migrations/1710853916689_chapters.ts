import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'chapters'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('books_id').unsigned().references('id').inTable('books').onUpdate('CASCADE').onDelete('CASCADE').notNullable()
      table.string('slug').notNullable()
      table.string('name').notNullable()
      table.text('description').notNullable()
      table.integer('priority').notNullable()
      table.timestamp('created_at', { useTz: true }).nullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
      table.integer('created_by').notNullable()
      table.integer('updated_by').notNullable()
      table.tinyint('restricted').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
