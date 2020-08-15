import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // NOTE: root.
  //  react 에서라면 index 랑 비슷.
  //  AppModule 은 마찬가지로 리액트에서 App 이랑 비슷.
  //  작업을 진행하고 정리해서 AppModule 을 구성하고 여기서 연결.
  //  그렇기 때문에 작업이 진행되도 main.ts 는 추가 작업이 많지 않은 듯 하다.
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
