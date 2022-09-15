import { IApiPermission } from './client.type';
import { AccessCondition } from './access-condition.enum';
import { OperatorType } from './operator-type.enum';
import { ActionType } from './access-type.enum';
import { IEnterprise } from '../enterprise/enterprise.type';
import { IIdentifier, ITrackable, RecordtType } from '../../core/base';

export interface IPlatform extends IIdentifier<string>, ITrackable {
  name: string;
}

// FIXME: Permisions are wrong.
export interface IComponentPermission {
  component: IComponent,
  permissions: ActionType
}

export interface IAccessGroup extends IIdentifier<string>, ITrackable {
  name: string;
  recordType: RecordtType;
  companyId: string;
  userIds: string[];
  components: IComponentPermission[];
}

export interface IUser extends IIdentifier<string>, ITrackable {
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
  defaultCompany?: string;
  companies?: string[];
}

export interface IProfile extends IUser {
  company: IEnterprise;
  accessGroups: IAccessGroup[];
  modules: IModule[];
  components: IComponent[];
}

export interface IFeature {
  path: string;
  icon: string;
  class: string;
  extralink: string;
  order: number;
}

export interface IComponent extends IIdentifier<string>, ITrackable, IFeature {
  name: string;
  title: string;
  moduleId: string;
  apis: IApiPermission[];
  permissions: ActionType[];
}

export interface IModule extends IIdentifier<string>, ITrackable, IFeature {
  ancestor?: IModule;
  name: string;
  parent: string;
  serviceId: string;
}
