import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'bookshelves_books'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .integer('bookshelf_id')
        .unsigned()
        .references('id')
        .inTable('bookshelves')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('book_id')
        .unsigned()
        .references('id')
        .inTable('books')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table.integer('order').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
