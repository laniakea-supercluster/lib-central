/* eslint-disable require-jsdoc */
import { IModule } from './access.type';

// eslint-disable-next-line require-jsdoc
export class Module implements IModule {
    ancestor?: IModule
    name: string;
    parent: string;
    serviceId: string;
    _id: string;
    createdOn: Date;
    changedOn: Date;
    signature: string;
    path: string;
    icon: string;
    class: string;
    extralink: string;
    order: number;
}
