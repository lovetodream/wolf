import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server'
import { disconnect } from 'mongoose';

let mongodb: MongoMemoryServer;

export const rootMongooseTestModule = (options: MongooseModuleOptions = {}) => MongooseModule.forRootAsync({
  useFactory: async () => {
    mongodb = await MongoMemoryServer.create();
    const mongoUri = mongodb.getUri();
    return {
      uri: mongoUri,
      ...options,
    };
  },
});

export const closeInMongodbConnection = async () => {
  await disconnect();
  if (mongodb) await mongodb.stop();
}
