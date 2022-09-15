import { RecordtType } from '../../core/base';
import * as regionType from './region.type';
import { StreetType } from './street.enum';

// eslint-disable-next-line require-jsdoc
export class Street implements regionType.IStreet {
    createdOn: Date;
    changedOn: Date;
    signature: string;
    district: regionType.IDistrict;
    name: string;
    postalCode: number;
    type: RecordtType;
    streetType: StreetType
    _id: number;
}
