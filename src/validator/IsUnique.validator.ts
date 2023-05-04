import { Injectable } from '@nestjs/common'
import {
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator'
import { DataSource } from 'typeorm'

@ValidatorConstraint({ name: 'isUnique', async: true })
@Injectable()
export class IsUniqueConstraint implements ValidatorConstraintInterface {
    constructor(private dataSource: DataSource) {}
    validate(value: any, args: ValidationArguments) {
        return this.dataSource
            .getRepository(args.constraints[0])
            .findOne({
                where: {
                    [args.property]: value,
                },
            })
            .then((entity) => {
                return !entity
            })
    }
}
