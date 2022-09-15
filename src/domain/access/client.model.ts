import { IAppClient, IApiPermission, ICredentials } from './client.type';

// eslint-disable-next-line require-jsdoc
export class AppClient implements IAppClient {
    name: string;
    credentials: ICredentials;
    apis: IApiPermission[];
    _id: string;
    createdOn: Date;
    changedOn: Date;
    signature: string;
}
