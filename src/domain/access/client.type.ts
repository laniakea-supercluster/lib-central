import { IIdentifier, ITrackable } from '../../core/base';
import { PermissionType } from './permission-type.enum';

export interface ICredentials {
    clientId: string;
    secretId: string;
}

export interface IApiPermission extends IIdentifier<string>, ITrackable {
    api: string;
    permissions: PermissionType[];
}

export interface IAppClient extends IIdentifier<string>, ITrackable {
    name: string;
    credentials: ICredentials;
    apis: IApiPermission[];
}

export interface IApi extends IIdentifier<string>, ITrackable {};
