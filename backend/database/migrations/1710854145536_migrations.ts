import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'migrations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('migration').notNullable()
      table.integer('batch').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
