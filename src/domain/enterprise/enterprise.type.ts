import { IIdentifier, ITrackable } from '../../core/base';
import { IUser, IPlatform } from '../access/access.type';
import { IAddress } from '../region/region.type';


export interface IEnterprise extends IIdentifier<string>, ITrackable {
    name: string;
    fantasyName: string;
    address: IAddress;
    systemAccount: IUser;
    platforms: IPlatform[];
}
