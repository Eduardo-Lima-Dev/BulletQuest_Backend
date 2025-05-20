import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'BULLETQUEST API',
      version: '1.0.0',
      description: 'Documentação da API BULLETQUEST',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
      },
    ],
  },
  apis: ['src/routes/*.ts', 'src/controllers/*.ts'], // Onde estão os comentários JSDoc
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);