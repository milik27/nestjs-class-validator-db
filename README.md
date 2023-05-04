# nestjs-class-validator-db
[![NPM version][npm-image]][npm-url]
![npm-typescript]
[![License][github-license]][github-license-url]

## Installation

```bash
  npm install nestjs-class-validator-db
  or
  yarn add nestjs-class-validator-db
```

## Usage :
```typescript
// main.ts

import { useContainer } from 'class-validator'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.useGlobalPipes(new ValidationPipe())
    useContainer(app.select(AppModule), { fallbackOnErrors: true })
    ...
}
bootstrap()
```

```typescript
// app.module.ts

import { DbClassValidatorModule } from 'nestjs-class-validator-db'

@Module({
  imports: [
    ...
    DbClassValidatorModule
  ],
    ...
})
export class AppModule {}
```

```typescript
// x.dto.ts

import { IsUnique } from 'nestjs-class-validator-db'
import { User } from '../entities/user.entity'

export class UserDto {
    @IsUnique(User)
    @IsEmail()
    email: string
}
```

[npm-url]: https://github.com/milik27/nestjs-class-validator-db
[npm-image]: https://img.shields.io/npm/v/nestjs-class-validator-db
[github-license]: https://img.shields.io/github/license/milik27/nestjs-class-validator-db
[github-license-url]: https://github.com/milik27/nestjs-class-validator-db/blob/master/LICENSE
[npm-typescript]: https://img.shields.io/npm/types/nestjs-class-validator-db
