import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'books'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('slug').notNullable()
      table.text('description').notNullable()
      table.timestamp('created_at', { useTz: true }).nullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
      table.integer('created_by').notNullable()
      table.integer('updated_by').notNullable()
      table.tinyint('restricted').notNullable()
      table.integer('image_id').unsigned().references('id').inTable('images').onUpdate('CASCADE').onDelete('CASCADE').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
