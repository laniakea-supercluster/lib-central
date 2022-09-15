import { IEnterprise } from '../enterprise/enterprise.type';
import { IProfile, IComponent, IAccessGroup, IModule } from './access.type';
import { User } from './user.model';

// eslint-disable-next-line require-jsdoc
export class Profile extends User implements IProfile {
    company: IEnterprise;
    accessGroups: IAccessGroup[];
    modules: IModule[];
    components: IComponent[];
    defaultCompany?: string;
}
