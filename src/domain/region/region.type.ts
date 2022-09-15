import {StreetType} from './street.enum';
import {PrecisionType} from './precision.enum';
import { IIdentifier, ITrackable, RecordtType } from '../../core/base';

export interface ICoordinate {
    latitude: number;
    longitude: number;
    precision: PrecisionType;
}

export interface ICountry extends IIdentifier<number>, ITrackable {
    code: number;
    name: string;
    mcc: number;
    initials: string;
}

export interface IState extends IIdentifier<string>, ITrackable {
    country: ICountry;
    name: string;
    areaCode: number;
    hasDST: boolean;
}

export interface ICity extends IIdentifier<number>, ITrackable {
    state: IState;
    code: number;
    name: string;
    postalCode: number;
}

export interface IDistrict extends IIdentifier<number>, ITrackable {
    city: ICity;
    name:string;
}

export interface IStreet extends IIdentifier<number>, ITrackable {
    district: IDistrict;
    name: string;
    postalCode: number;
    type: RecordtType;
    streetType: StreetType;
}

export interface IAddress extends IIdentifier<string>, ITrackable {
    addressType: StreetType;
    street: IStreet;
    addressNumber: number | number[];
    complement: string;
    location: ICoordinate;
}
