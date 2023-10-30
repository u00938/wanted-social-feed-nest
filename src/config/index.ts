import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'test';
const conf = `.${process.env.NODE_ENV}.env`;
const env = dotenv.config({ path: conf });
if (env.error) {
  throw new Error('Couldn\'t find .env file');
}

export default {
  port: process.env.NODE_PORT,
  db: [
    {
      // name: 'social_feed',
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [process.env.TYPEORM_ENTITIES]
    } as TypeOrmModuleOptions
  ],
  proxy: {
    twitter: {
      baseUrl: process.env.PROXY_TWITTER_BASEURL,
      sharePath: process.env.PROXY_TWITTER_SHAREPATH,
      likePath: process.env.PROXY_TWITTER_LIKEPATH
    },
    instagram: {
      baseUrl: process.env.PROXY_INSTAGRAM_BASEURL,
      sharePath: process.env.PROXY_INSTAGRAM_SHAREPATH,
      likePath: process.env.PROXY_INSTAGRAM_LIKEPATH
    },
    threads: {
      baseUrl: process.env.PROXY_THREADS_BASEURL,
      sharePath: process.env.PROXY_THREADS_SHAREPATH,
      likePath: process.env.PROXY_THREADS_LIKEPATH
    },
    facebook: {
      baseUrl: process.env.PROXY_FACEBOOK_BASEURL,
      sharePath: process.env.PROXY_FACEBOOK_SHAREPATH,
      likePath: process.env.PROXY_FACEBOOK_LIKEPATH
    }
  }
}