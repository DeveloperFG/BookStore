export default class BookSchema extends Realm.Object{
    static schema = {
      name:'Book',
      primaryKey: 'id',
      properties:{
        id: { type: 'int', indexed: true },
        nome: 'string',
        preco: 'string'
      }
    }
  }