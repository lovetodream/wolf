export const environment = {
  production: false,
  mongodb: process.env.MONGODB ?? 'mongodb://root:example@localhost:27017',
};
