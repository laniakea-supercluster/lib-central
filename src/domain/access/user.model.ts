import { IUser } from './access.type';
import { AccessCondition } from './access-condition.enum';
import { OperatorType } from './operator-type.enum';
// import { ObjectId } from 'mongodb';

// eslint-disable-next-line require-jsdoc
export class User implements IUser {
    public readonly _id: string;
    public createdOn: Date;
    public changedOn: Date;
    public signature: string;
    public name: string;
    public surname: string;
    public email: string;
    public username: string;
    public secret: string;
    public accessCondition: AccessCondition;
    public operatorType: OperatorType;
    public confirmed: boolean;
    public token: string;
    public key: string;
    public defaultCompanyId?: string;
    public companies?: string[];

    constructor();
    constructor(_id: string = null) {
        this._id = _id;
    }

}
