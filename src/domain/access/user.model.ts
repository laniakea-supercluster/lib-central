import { IUser } from './access.type';
import { AccessCondition } from './access-condition.enum';
import { OperatorType } from './operator-type.enum';
// import { ObjectId } from 'mongodb';

// eslint-disable-next-line require-jsdoc
export class User implements IUser {
    name: string;
    surname: string;
    email: string;
    username: string;
    secret: string;
    accessCondition: AccessCondition;
    operatorType: OperatorType;
    confirmed: boolean;
    token: string;
    key: string;
    defaultCompanyId?: string;
    companies?: string[];
    _id: string;
    createdOn: Date;
    changedOn: Date;
    signature: string;
}
