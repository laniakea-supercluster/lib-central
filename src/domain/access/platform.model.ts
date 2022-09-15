/* eslint-disable require-jsdoc */
import { IPlatform } from './access.type';

export class Platform implements IPlatform {
    _id: string;
    name: string;
    createdOn: Date;
    changedOn: Date;
    signature: string;
}
