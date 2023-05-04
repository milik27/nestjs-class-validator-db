import { registerDecorator, ValidationOptions } from 'class-validator';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { IsUniqueConstraint } from '../validator/IsUnique.validator';

export function IsUnique(
  model: EntityClassOrSchema,
  validationOptions?: ValidationOptions,
) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: {
        ...validationOptions,
        message: validationOptions?.message || `${propertyName} already exists`,
      },
      constraints: [model],
      validator: IsUniqueConstraint,
    });
  };
}
