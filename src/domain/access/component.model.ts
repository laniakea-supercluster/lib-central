/* eslint-disable require-jsdoc */
import { IComponent } from './access.type';
import { IApiPermission } from './client.type';
import { ActionType } from './access-type.enum';

// eslint-disable-next-line require-jsdoc
export class Component implements IComponent {
    name: string;
    title: string;
    moduleId: string;
    apis: IApiPermission[];
    permissions: ActionType[];
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
