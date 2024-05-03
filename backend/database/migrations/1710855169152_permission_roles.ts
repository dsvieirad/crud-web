import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'permission_roles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('permission_id').unsigned().references('id').inTable('permissions').onUpdate('CASCADE').onDelete('CASCADE').notNullable()
      table.integer('role_id').unsigned().references('id').inTable('roles').onUpdate('CASCADE').onDelete('CASCADE').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
