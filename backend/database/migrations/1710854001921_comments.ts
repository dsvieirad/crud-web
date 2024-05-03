import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('entity_id').unsigned().references('id').inTable('books').onUpdate('CASCADE').onDelete('CASCADE').notNullable()
      table.text('text').nullable()
      table.integer('parent_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE').notNullable()
      table.integer('local_id').nullable()
      table.integer('created_by').notNullable()
      table.integer('updated_by').nullable()
      table.timestamp('created_at', { useTz: true }).nullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
