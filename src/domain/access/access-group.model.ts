import { RecordtType } from '../../core/base';
import { IAccessGroup, IComponentPermission } from './access.type';

// eslint-disable-next-line require-jsdoc
export class AccessGroup implements IAccessGroup {
    name: string;
    recordType: RecordtType;
    companyId: string;
    userIds: string[];
    components: IComponentPermission[];
    _id: string;
    createdOn: Date;
    changedOn: Date;
    signature: string;
}
