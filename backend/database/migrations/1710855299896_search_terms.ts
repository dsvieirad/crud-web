import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'search_terms'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('term').notNullable()
      table.string('entity_type').notNullable()
      table.integer('entity_id').unsigned().references('id').inTable('books').onUpdate('CASCADE').onDelete('CASCADE').notNullable()
      table.integer('score').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
