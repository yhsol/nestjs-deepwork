<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

# nestjs-deepwork

# NOTE

- module

  - cli:
    nest g module "name"

  - The @Module() decorator provides metadata that Nest makes use of to organize the application structure.
  - 즉 Nest 애플리케이션의 구조를 잡는 역할을 한다.

  - 각 애플리케이션은 최소 하나의 모듈을 갖는다. (root module - 애플리케이션의 시작점)
  - 모듈은 비슷한 기능 (역할)의 컴포넌트를 조직하는 효율적인 방법
  - 모듈마다 모듈 컴포넌트를 갖고 있는 폴더를 구성하는것이 좋다.
  - 모듈은 싱글톤. 그러므로 다른 모듈들에서 가져다 쓸 수 있다.

  - Mobx 의 store 와 비슷한 듯하다.
    - update
      - store 와 비슷한데, root store 에 조금 더 가까운 듯.
      - 여러가지를 조합한다는 면에서.
      - 그리고 각각의 특정 기능을 담당하는 mobx의 store 는 service 에 가까운 듯.
      - 그리고 service 는 store 와 model 의 역할을 다 갖고 있는 듯 하다.
      - nest 의 model 은 정말 그 shape 만을 갖고 있는 듯. (이거는 좀 더 봐야)
  - 여러개, 여러 요소를 필요에 따라 조합

  - 정의 방법:

    - @Module decorator

    - @Module decorator properties:

      - Module 이 애플리케이션 구조를 만들며 포함하고 사용하는 구성요소들이다.

      - providers: dependency injection 을 통해 모듈내에서 사용할 수 있는 providers 배열
      - controllers: 모듈내에서 인스턴스화 할 컨트롤러 배열
      - exports: 다른 모듈로 export 할 providers 배열
      - imports: 해당 모듈에 필요한 모듈 리스트  
         모듈로 내보낸 모든 공급자는 종속성 주입을 통해 모듈에서 사용가능

    - 즉 기능 (역할)에 따라 독립적으로 구성하고, 가져오거나 내보내면서 서로를 연결해 사용


    - Module Definition Example

```
@Module({
  providers: [ForumService],
  controllers: [ForumController],
  imports: [
    PostModule,
    CommentModule,
    AuthModule
  ],
  exports: [
    ForumService
  ]
})

export class ForumModule {}
```

- Controller

  - 연결 통로
  - HTTP 통신등이 이루어지는 통로
  - path 설정, HTTP 메서드 설정
  - @Controller 데코레이터를 쓰며,
    @Controller("cats") 와 같이 특정 path 를 특정하여 사용한다.
  - Handler 는 각 메서드를 데코레이터를 써서 사용 가능
    @Get(), @Post(), @Delete()
  - Module 에서 import 해서 사용
  - Mobx 의 Repository 와 비슷한듯. (HTTP 통신 로직을 갖고있다는 점에서 비슷하기는 한데 좀 다른 느낌이다. 조금 더 봐야할 듯.)

  - @Get()

    - get 메서드
    - @Param
      특정 값을 param 으로 활용해서 활용하려는 경우 @Param() 데코레이터를 사용하여 쓸 수 있다. 이때 @Get() 과 @Param() 데코레이터 안에 해당 param 에 대한 정보를 전달한다.

    ```
    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
    }
    ```

    - @Query
      query 값을 쓸 경우 @Query() 를 사용한다.
      http://localhost:3000/tasks?status=OPEN&search=title5 와 같이 쓸 경우,
      객체에 담겨 값이 들어오게 된다.

    ```
    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
    console.log(filterDto);

    return this.tasksService.getAllTasks();
    }
    ```

- @Body()
  - post 와 같이 body 가 포함되는 요청의 경우 @Body() 를 사용하여 body 로 들어오는 값을 사용한다.
  - 혹은 특정 값을 명시해서 사용할 수도 있다.

```
@Post()
// post 요청의 body 값을 가져오기 위해 @Body 사용
createTask(@Body() body: Task): Task {
  const { title, desc } = body;
  return this.tasksService.createTask(title, desc);
}

  @Post()
// post 요청의 body 값을 가져오기 위해 @Body 사용
createTask(
  @Body("title") title: string,
  @Body("desc") desc: string)
  : Task {
  return this.tasksService.createTask(title, desc);
}
```

- @Delete()

  - get 과 비슷하게 param 을 지정해서 사용한다.

```
  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    return this.tasksService.deleteTask(id);
  }
```

- @Patch()
  - param 과 body 를 둘다 사용한다.
  - id 를 param 으로 받고, 그 뒤에 해당 메서드의 정보를 전달할 path 를 설정한다.
  - 그리고 전달할 정보를 body 에 담는다.

```
  @Patch('/:id/status')
  updateTask(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task {
    return this.tasksService.changeStatus(id, status);
  }
```

- 코드를 보면, @Patch() 안에 id 값을 전달받고, 그 뒤에 해당 메서드가 status 에 관한 것이라는 것을 명시한다.
- 그러면 id/status 로 구성된 path 로의 요청이 이 메서드로 전달되고, id 값은 param 으로, status 값은 body 로 전달받아서 Service 로 전달한다.
- @Patch() 안의 순서는 변경 가능. @Patch("/status/:id") 로 작성해서 status 라는 것을 먼저 명시하고, 그 뒤에 id 값을 전달받아도 된다.
- 각 메서드안의 값은 말그대로 Path 값인것.

- Providers

  - constuctors 로 injected 할 수 있다. (Service 등을 정의 하고, Providers 에 지정하여 Controller 등에서 constructor 로 전달받아 사용 가능)
  - Providers 를 사용하기 위해 module 로 provide 해야함.
  - 그것을 다른 module 에서 사용 가능.

- Service

  - providers 로 정의되는데, 모든 providers 가 service 는 아니다.
  - @Injectable() 로 감싸며, 싱글톤으로 사용한다.
    즉, 같은 인스턴스가 애플리케이션 전체에 쓰이는 것.
    Single source of truth.
  - business logic 이 메인.
  - Controller 를 호출하기도 하고, db에 item 을 생성하고, 응답을 return 하기도 한다.
  - Mobx 의 Model 에 가까운듯.
    - update
      - Mobx 의 Model 에 가까운 것은 Model 이다.
      - Service 는 그보다는 조금 더 큰 범위에서 비즈니스 로직을 담당하는 곳이라고 이해하는 게 더 가까울 듯.
      - 오히려 Store 에 더 가까운 것 같기도 하다.
  - Controller 에서 constructor 에 Service 를 받아서(injected) 연결해 사용
  - Service 가 Controller 와 같은 Module 에 있으면 해당 Controller 의 Constructor 에서 쓸 수 있다.
    그러면 this.CatsService 와 같이 쓸 수 있다.

  - Service 에서 행위(기능, 작업)을 정의하고, Controller 에서 injected 된 Service 의 해당 기능들을 HTTP 메서드등과 연결.

- ![https://miro.medium.com/max/864/1*a3Tny9DwSI90zsfQtBgJDQ.jpeg]
  (Getting Started With NestJS)[https://medium.com/better-programming/getting-started-with-nestjs-a4e8b0b09db4]

* Service 와 Controller 사이의 작업
  - Service 에서 작업을 정의.
  - Controller 에서 Service 의 작업을 HTTP 메서드 등과 연결.
  - Controller 는 pure 하게 handle the request 하고, return the response 한다.
  - Mobx 에서도 Repository 는 pure 하게 request 를 담당해야 할 듯.
    그 안에서 params 나 query 를 가공하지 말고 그 전에 Model 이나 Store 에서 해야 할 듯.

- Model

  - interface 와 class 로 구현 가능
  - class 는 객체 기반의 blueprint 를 그리기 좋다.

- DTO

  - "A DTO is an object that defines how the data will be sent over the network." - NestJs Documentation
  - Model 과 비슷한듯? 한데 다르다고 한다. 중요! 하다고 한다.
  - 객체의 형태를 정의해두는 것인 듯.
  - 어떤 행위를 정의해두지 않고, 어떤 행위가 일어나거나 할 때 해당 data 의 shape 을 정의해두는 역할인듯 하다.
  - createTask 라고 하면 create 하는 행위를 갖고있는것이 아니라 create 되는 Task 의 shape 을 갖는것.
  - classes 또는 interface 로 가능.
  - 그렇지만 classes 가 권장됨
    - interface 는 typescript 의 영역. 컴파일 문제
    - 좀 더 기능이 많다.
    - javascript. 컴파일에 유리
    - NestJs 는 interface 는 run-time 에 참조 불가, classes 는 가능.
  - 쉽게 생각하면 type 정의라고 생각할 수도 있을 듯. 객체의 type 정의.
  - 더 확장되고 유용하다고 하는데 아직은 type 정의 정도의 느낌이고, 또 type 정의와 같이 사용가능하다.

- 작업 과정

  - 기본 구조를 설정한다.
  - 기본 구조가 잡히고 기능 개발을 시작하게 되면 Service 를 정의하고, Controller 에서 연결한다.

- Pipes

  - client - controller - (Pipes) - service
  - 요청이 들어오고, 그에 따라 validation check 등을 수행한다.
  - 결과가 성공이면 service 의 메서드로 연결하고,  
    실패이면 client 로 다시 에러메시지등을 전송.

  - middleware 랑 비슷한 개념인듯.
    - update
      - 미들웨어는 아님. 미들웨어는 따로 있다.
      - 말그대로 요청에 대한 파이프로써, 그 과정에서 처리를 해주는 것.
      - 어떻게 보면 개념으로는 비슷한거 같기도 하고.
  - data transformation or data validation 가능.
  - original or modified data를 return 한다.
  - error 출력 등 가능.

  - 기본 Pipes

    - ValidationPipe

      - 정해진 DTO 등에 맞는지 체크.

    - ParseIntPipe
      - arguments 가 string 인데 number 로 바꾸고 싶거나 할 때 pipes 에서 가능.

- Custom Pipes

  - @Injectable() 사용하여 정의가능.
  - PipeTransform generic interface 를 구현해야한다.  
    그러므로, 모든 pipe 는 transform() 메서드를 갖는다.
    이 메서드는 arguments 를 처리하기위해 NestJs 에 의해 불려진다.
  - transform() 메서드는 두개의 파라미터를 받는다.
    - value: 처리된 argument 의 value
    - metadata: argument 의 metadata 를 갖고있는 객체
  - transform() 메서드에서 return 된 모든 내용은 route handler 로 전달된다.  
    예외는 http error response 의 형태로 client 로 다시 전송된다.

  - Pipes can be consumed in different ways.

    - Handler-level pipes
      - @UsePipes()
      - 들어오는 요청에 대한 모든 parameters 를 처리한다.
    - Parameter-level pipes
      - pipe 가 지정된 특정 parameter 만 처리한다.
    - Global pipes
      - application level
      - application 으로 들어오는 모든 요청에 반영됨.
      - main.ts 같은 곳에서와 같이 전체에 반영하려고 쓰는 듯.

  - 사용법
    - validation 같은 경우 dto 에 체크할 요소를 지정하고,
    - controller 에서 해당 요청에 pipe 를 사용할 것이라고 알린다.

```dto 에 정의
  import { IsNotEmpty } from 'class-validator';

  export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  desc: string;
  }

```

```controller 에 정의
  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    // const { title, desc } = createTaskDto;
    return this.tasksService.createTask(createTaskDto);
  }
```

- Error handling

  - NotFoundException

        - 기본 제공
        - 해당 상황에 맞는 에러 메시지 출력해줌
        - 없으면 빈 페이지

        - 보여주고자 하는 메시지를 NotFoundException(`Task with Id "${id}" not found`) 와 같은 식으로 보여줄 수 있음

        - format
          - 기본 statusCode, error
          - 메시지 전달 시 message 추가
          ```
            {
              "statusCode": 404,
              "message": "Task with Id \"none\" not found",
              "error": "Not Found"
            }
          ```

```
getTaskById(id: string): Task {
  const task: Task = this.tasks.find(task => task.id === id);

  if (!task) {
    throw new NotFoundException();
  }

  return task;
}
```

- dto

  - 데이터 통신의 형태를 정의

- database 연결
  - PostgreSQL, typeORM 사용
  - pgAdmin 에 데이터베이스 생성
  - typeorm.config.ts 에 데이터베이스 연결 및 설정
  - app.module.ts 에 typeOrmModule 설정
