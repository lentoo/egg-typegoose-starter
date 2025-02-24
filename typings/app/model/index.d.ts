// This file is created by egg-ts-helper@1.26.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBaseModel from '../../../app/model/BaseModel';
import ExportProduct from '../../../app/model/Product';
import ExportStudent from '../../../app/model/Student';
import ExportUser from '../../../app/model/User';

declare module 'egg' {
  interface IModel {
    BaseModel: ReturnType<typeof ExportBaseModel>;
    Product: ReturnType<typeof ExportProduct>;
    Student: ReturnType<typeof ExportStudent>;
    User: ReturnType<typeof ExportUser>;
  }
}
