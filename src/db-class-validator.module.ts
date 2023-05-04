import { Module } from '@nestjs/common';
import { IsUniqueConstraint } from './validator/IsUnique.validator';

@Module({
  providers: [IsUniqueConstraint],
})
export class DbClassValidatorModule {}
