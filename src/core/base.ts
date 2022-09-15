export interface IIdentifier<T> {
  _id: T;
}

export interface ITrackable {
  createdOn: Date;
  changedOn: Date;
  signature: string;
}

export enum RecordtType {
  System
  , User
}
