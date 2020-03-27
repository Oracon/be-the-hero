const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
   beforeEach(async () => {
      await connection.migrate.rollback();
      await connection.migrate.latest();
   });

   afterAll(async () => {
      await connection.destroy();
   });

   it('should be able to create a new ONG', async () => {
      const response = await request(app)
         .post('/ongs')
         //.set('Authorization', 'id_da_ong') //Caso precisar de Authorization
         .send({
            name: "APAD test",
            email: "apad@apad.com.br",
            whatsapp: "+5535991905049",
            city: "Rio do Sul",
            uf: "SC"
         });
      
      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toHaveLength(8);
   });
});