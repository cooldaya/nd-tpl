/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AdminResetPwdQO {
  /**
   * 密码
   * @minLength 1
   */
  password: string;
  /**
   * UserId
   * @format int64
   */
  userId: number;
}

export interface AlarmRecordFO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 报警时长
   * @format int64
   */
  duration?: number | null;
  /**
   * 所属设备
   * @format int64
   */
  equipmentId?: number;
  /** 所属设备 */
  equipmentName?: string | null;
  /**
   * 所属因子
   * @format int64
   */
  equipmentParamId?: number;
  /** 所属因子 */
  equipmentParamName?: string | null;
  /** @format int64 */
  id?: number;
  /** 报警信息 */
  prealarmInfo?: string | null;
  /**
   * 开始时间-日
   * @format int32
   */
  sday?: number;
  /**
   * 开始时间-小时
   * @format int32
   */
  shour?: number;
  /**
   * 开始时间-月
   * @format int32
   */
  smonth?: number;
  /**
   * 报警开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 报警结束时间
   * @format date-time
   */
  stopTime?: string | null;
  /**
   * 开始时间-年
   * @format int32
   */
  syear?: number;
  /**
   * 所属工艺系统
   * @format int64
   */
  technicsId?: number;
  /** 所属工艺系统 */
  technicsName?: string | null;
  /** 报警类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface AlarmRecordPQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 报警时长
   * @format int64
   */
  duration?: number | null;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 所属设备
   * @format int64
   */
  equipmentId?: number;
  /** 所属设备 */
  equipmentName?: string | null;
  /**
   * 所属因子
   * @format int64
   */
  equipmentParamId?: number;
  /** 所属因子 */
  equipmentParamName?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 报警信息 */
  prealarmInfo?: string | null;
  /**
   * 开始时间-日
   * @format int32
   */
  sday?: number;
  /**
   * 开始时间-小时
   * @format int32
   */
  shour?: number;
  /**
   * 开始时间-月
   * @format int32
   */
  smonth?: number;
  /**
   * 报警开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 报警结束时间
   * @format date-time
   */
  stopTime?: string | null;
  /**
   * 开始时间-年
   * @format int32
   */
  syear?: number;
  /**
   * 所属工艺系统
   * @format int64
   */
  technicsId?: number;
  /** 所属工艺系统 */
  technicsName?: string | null;
  /** 报警类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface AlarmRecordQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 报警时长
   * @format int64
   */
  duration?: number | null;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 所属设备
   * @format int64
   */
  equipmentId?: number;
  /** 所属设备 */
  equipmentName?: string | null;
  /**
   * 所属因子
   * @format int64
   */
  equipmentParamId?: number;
  /** 所属因子 */
  equipmentParamName?: string | null;
  /** @format int64 */
  id?: number;
  /** 报警信息 */
  prealarmInfo?: string | null;
  /**
   * 开始时间-日
   * @format int32
   */
  sday?: number;
  /**
   * 开始时间-小时
   * @format int32
   */
  shour?: number;
  /**
   * 开始时间-月
   * @format int32
   */
  smonth?: number;
  /**
   * 报警开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 报警结束时间
   * @format date-time
   */
  stopTime?: string | null;
  /**
   * 开始时间-年
   * @format int32
   */
  syear?: number;
  /**
   * 所属工艺系统
   * @format int64
   */
  technicsId?: number;
  /** 所属工艺系统 */
  technicsName?: string | null;
  /** 报警类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface AlarmRecordVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 报警时长
   * @format int64
   */
  duration?: number | null;
  /**
   * 所属设备
   * @format int64
   */
  equipmentId?: number;
  /** 所属设备 */
  equipmentName?: string | null;
  /**
   * 所属因子
   * @format int64
   */
  equipmentParamId?: number;
  /** 所属因子 */
  equipmentParamName?: string | null;
  /** @format int64 */
  id?: number;
  /** 报警信息 */
  prealarmInfo?: string | null;
  /**
   * 开始时间-日
   * @format int32
   */
  sday?: number;
  /**
   * 开始时间-小时
   * @format int32
   */
  shour?: number;
  /**
   * 开始时间-月
   * @format int32
   */
  smonth?: number;
  /**
   * 报警开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 报警结束时间
   * @format date-time
   */
  stopTime?: string | null;
  /**
   * 开始时间-年
   * @format int32
   */
  syear?: number;
  /**
   * 所属工艺系统
   * @format int64
   */
  technicsId?: number;
  /** 所属工艺系统 */
  technicsName?: string | null;
  /** 报警类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface AmJobFO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 职务描述 */
  jobDesc?: string | null;
  /** 名称 */
  name?: string | null;
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface AmJobPQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 职务描述 */
  jobDesc?: string | null;
  /** 名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface AmJobQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 职务描述 */
  jobDesc?: string | null;
  /** 名称 */
  name?: string | null;
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface AmJobVO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 职务描述 */
  jobDesc?: string | null;
  /** 名称 */
  name?: string | null;
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface AmPostFO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 关联职务
   * @format int64
   */
  jobId?: number | null;
  /** 名称 */
  name?: string | null;
  /**
   * 所属组织机构
   * @format int64
   */
  organizationId?: number | null;
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface AmPostPQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 关联职务
   * @format int64
   */
  jobId?: number | null;
  /** 名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 所属组织机构
   * @format int64
   */
  organizationId?: number | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface AmPostQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 关联职务
   * @format int64
   */
  jobId?: number | null;
  /** 名称 */
  name?: string | null;
  /**
   * 所属组织机构
   * @format int64
   */
  organizationId?: number | null;
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface AmPostVO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 职务编码 */
  jobCode?: string | null;
  /**
   * 关联职务
   * @format int64
   */
  jobId?: number | null;
  /** 职务名称 */
  jobName?: string | null;
  /** 名称 */
  name?: string | null;
  /**
   * 所属组织机构
   * @format int64
   */
  organizationId?: number | null;
  /** 组织结构名称 */
  organizationName?: string | null;
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export type ApiAlarmRecordAddPostData = FurionResultAlarmRecordVO;

export type ApiAlarmRecordEditPostData = FurionResultAlarmRecordVO;

export type ApiAlarmRecordListPostData = FurionResultListAlarmRecordVO;

export type ApiAlarmRecordPagedListPostData =
  FurionResultSqlSugarPagedListAlarmRecordVO;

export type ApiAlarmRecordRemoveMulPostData = FurionResultListInt64;

export type ApiAlarmRecordRemovePostData = FurionResultInt64;

export type ApiAlarmRecordShowPostData = FurionResultAlarmRecordVO;

export type ApiAmJobAddPostData = FurionResultAmJobVO;

export type ApiAmJobEditPostData = FurionResultAmJobVO;

export type ApiAmJobListPostData = FurionResultListAmJobVO;

export type ApiAmJobPagedListPostData = FurionResultSqlSugarPagedListAmJobVO;

export type ApiAmJobRemoveMulPostData = FurionResultListInt64;

export type ApiAmJobRemovePostData = FurionResultInt64;

export type ApiAmJobShowPostData = FurionResultAmJobVO;

export type ApiAmPostAddPostData = FurionResultAmPostVO;

export type ApiAmPostCountByNamePostData = FurionResultListNameCount;

export type ApiAmPostEditPostData = FurionResultAmPostVO;

export type ApiAmPostListPostData = FurionResultListAmPostVO;

export type ApiAmPostPagedListPostData = FurionResultSqlSugarPagedListAmPostVO;

export type ApiAmPostRemoveMulPostData = FurionResultListInt64;

export type ApiAmPostRemovePostData = FurionResultInt64;

export type ApiAmPostShowPostData = FurionResultAmPostVO;

export type ApiAuthCheckloginPostData = FurionResultLoginResultUserAO;

export type ApiAuthLoginByUserNamePostData = FurionResultLoginResultVO;

export type ApiAuthLoginPostData = FurionResultLoginResultVO;

export type ApiAuthLogoutPostData = any;

export type ApiAuthPkinfoPostData = FurionResultString;

export type ApiCommonFileDownloadGetData = any;

export interface ApiCommonFileDownloadGetParams {
  filename?: string;
  filepath?: string;
}

export type ApiCommonGenIdPostData = FurionResultInt64;

export type ApiCommonGenIdsPostData = FurionResultListInt64;

export type ApiCommonUploadFilePostData = FurionResultRecordFile;

export interface ApiCommonUploadFilePostPayload {
  /**
   * 文件
   * @format binary
   */
  File?: File;
  /** 是否静态 */
  IsStatic?: boolean;
  /** 模块 */
  ModelName?: string;
  /**
   * 业务对象id
   * @format int64
   */
  RecordId: number;
}

export type ApiCommonUploadFilesPostData = FurionResultListRecordFile;

export interface ApiCommonUploadFilesPostPayload {
  Files?: File[];
  /** 是否静态 */
  IsStatic?: boolean;
  /** 模块 */
  ModelName?: string;
  /**
   * 业务对象id
   * @format int64
   */
  RecordId: number;
}

export type ApiDataDictionaryAddPostData = FurionResultDataDictionaryVO;

export type ApiDataDictionaryEditPostData = FurionResultDataDictionaryVO;

export type ApiDataDictionaryListPostData = FurionResultListDataDictionaryVO;

export type ApiDataDictionaryPagedListPostData =
  FurionResultSqlSugarPagedListDataDictionaryVO;

export type ApiDataDictionaryRemovePostData = FurionResultListInt64;

export type ApiDataDictionaryShowPostData = FurionResultDataDictionaryVO;

export type ApiDataDictionaryTreedataPostData = FurionResultListTreeNode;

export type ApiDataDictionaryTypedataPostData = FurionResultListTreeNode;

export type ApiEquipmentAddPostData = FurionResultEquipmentVO;

export type ApiEquipmentEditPostData = FurionResultEquipmentVO;

export type ApiEquipmentListPostData = FurionResultListEquipmentVO;

export type ApiEquipmentPagedListPostData =
  FurionResultSqlSugarPagedListEquipmentVO;

export type ApiEquipmentParamAddPostData = FurionResultEquipmentParamVO;

export type ApiEquipmentParamDdAddPostData = FurionResultEquipmentParamDdVO;

export type ApiEquipmentParamDdEditPostData = FurionResultEquipmentParamDdVO;

export type ApiEquipmentParamDdListPostData =
  FurionResultListEquipmentParamDdVO;

export type ApiEquipmentParamDdPagedListPostData =
  FurionResultSqlSugarPagedListEquipmentParamDdVO;

export type ApiEquipmentParamDdRemoveMulPostData = FurionResultListInt64;

export type ApiEquipmentParamDdRemovePostData = FurionResultInt64;

export type ApiEquipmentParamDdShowPostData = FurionResultEquipmentParamDdVO;

export type ApiEquipmentParamEditPostData = FurionResultEquipmentParamVO;

export type ApiEquipmentParamHdAddPostData = FurionResultEquipmentParamHdVO;

export type ApiEquipmentParamHdEditPostData = FurionResultEquipmentParamHdVO;

export type ApiEquipmentParamHdListPostData =
  FurionResultListEquipmentParamHdVO;

export type ApiEquipmentParamHdPagedListPostData =
  FurionResultSqlSugarPagedListEquipmentParamHdVO;

export type ApiEquipmentParamHdRemoveMulPostData = FurionResultListInt64;

export type ApiEquipmentParamHdRemovePostData = FurionResultInt64;

export type ApiEquipmentParamHdShowPostData = FurionResultEquipmentParamHdVO;

export type ApiEquipmentParamListPostData = FurionResultListEquipmentParamVO;

export type ApiEquipmentParamMdAddPostData = FurionResultEquipmentParamMdVO;

export type ApiEquipmentParamMdEditPostData = FurionResultEquipmentParamMdVO;

export type ApiEquipmentParamMdListPostData =
  FurionResultListEquipmentParamMdVO;

export type ApiEquipmentParamMdPagedListPostData =
  FurionResultSqlSugarPagedListEquipmentParamMdVO;

export type ApiEquipmentParamMdRemoveMulPostData = FurionResultListInt64;

export type ApiEquipmentParamMdRemovePostData = FurionResultInt64;

export type ApiEquipmentParamMdShowPostData = FurionResultEquipmentParamMdVO;

export type ApiEquipmentParamPagedListPostData =
  FurionResultSqlSugarPagedListEquipmentParamVO;

export type ApiEquipmentParamRemoveMulPostData = FurionResultListInt64;

export type ApiEquipmentParamRemovePostData = FurionResultInt64;

export type ApiEquipmentParamShowPostData = FurionResultEquipmentParamVO;

export type ApiEquipmentRemoveMulPostData = FurionResultListInt64;

export type ApiEquipmentRemovePostData = FurionResultInt64;

export type ApiEquipmentShowPostData = FurionResultEquipmentVO;

export type ApiEsAlarmRecordAddPostData = FurionResultEsAlarmRecordVO;

export type ApiEsAlarmRecordEditPostData = FurionResultEsAlarmRecordVO;

export type ApiEsAlarmRecordGetCountByMonthPostData =
  FurionResultListMonthAndCount;

export type ApiEsAlarmRecordListPostData = FurionResultListEsAlarmRecordVO;

export type ApiEsAlarmRecordPagedListPostData =
  FurionResultSqlSugarPagedListEsAlarmRecordVO;

export type ApiEsAlarmRecordRemoveMulPostData = FurionResultListInt64;

export type ApiEsAlarmRecordRemovePostData = FurionResultInt64;

export type ApiEsAlarmRecordShowPostData = FurionResultEsAlarmRecordVO;

export type ApiEsFleetAddPostData = FurionResultEsFleetVO;

export type ApiEsFleetEditPostData = FurionResultEsFleetVO;

export type ApiEsFleetListPostData = FurionResultListEsFleetVO;

export type ApiEsFleetPagedListPostData =
  FurionResultSqlSugarPagedListEsFleetVO;

export type ApiEsFleetRemoveMulPostData = FurionResultListInt64;

export type ApiEsFleetRemovePostData = FurionResultInt64;

export type ApiEsFleetShowPostData = FurionResultEsFleetVO;

export type ApiEsGarbageCategoryListPostData =
  FurionResultListEsGarbageCategoryVO;

export type ApiEsGarbageCategoryPagedListPostData =
  FurionResultSqlSugarPagedListEsGarbageCategoryVO;

export type ApiEsGarbageCategoryShowPostData = FurionResultEsGarbageCategoryVO;

export type ApiEsGarbageCategoryTreedataPostData = FurionResultListTreeNodeKfSk;

export type ApiEsGarbageTypeListPostData = FurionResultListEsGarbageTypeVO;

export type ApiEsGarbageTypePagedListPostData =
  FurionResultSqlSugarPagedListEsGarbageTypeVO;

export type ApiEsGarbageTypeShowPostData = FurionResultEsGarbageTypeVO;

export type ApiEsGpsAlarmRecordAddPostData = FurionResultEsGpsAlarmRecordVO;

export type ApiEsGpsAlarmRecordEditPostData = FurionResultEsGpsAlarmRecordVO;

export type ApiEsGpsAlarmRecordFileAddPostData =
  FurionResultEsGpsAlarmRecordFileVO;

export type ApiEsGpsAlarmRecordFileEditPostData =
  FurionResultEsGpsAlarmRecordFileVO;

export type ApiEsGpsAlarmRecordFileListPostData =
  FurionResultListEsGpsAlarmRecordFileVO;

export type ApiEsGpsAlarmRecordFilePagedListPostData =
  FurionResultSqlSugarPagedListEsGpsAlarmRecordFileVO;

export type ApiEsGpsAlarmRecordFileRemoveMulPostData = FurionResultListInt64;

export type ApiEsGpsAlarmRecordFileRemovePostData = FurionResultInt64;

export type ApiEsGpsAlarmRecordFileShowPostData =
  FurionResultEsGpsAlarmRecordFileVO;

export type ApiEsGpsAlarmRecordGetGpsAlarmRecordPostData =
  FurionResultSqlSugarPagedListEsGpsAlarmRecordVO;

export type ApiEsGpsAlarmRecordGroupByDayPostData =
  FurionResultListGpsAlarmStVO;

export type ApiEsGpsAlarmRecordGroupByLicencePostData =
  FurionResultListGpsAlarmStVO;

export type ApiEsGpsAlarmRecordGroupByMonthPostData =
  FurionResultListGpsAlarmStVO;

export type ApiEsGpsAlarmRecordGroupByYearPostData =
  FurionResultListGpsAlarmStVO;

export type ApiEsGpsAlarmRecordListPostData =
  FurionResultListEsGpsAlarmRecordVO;

export type ApiEsGpsAlarmRecordPagedListPostData =
  FurionResultSqlSugarPagedListEsGpsAlarmRecordVO;

export type ApiEsGpsAlarmRecordRemoveMulPostData = FurionResultListInt64;

export type ApiEsGpsAlarmRecordRemovePostData = FurionResultInt64;

export type ApiEsGpsAlarmRecordShowPostData = FurionResultEsGpsAlarmRecordVO;

export type ApiEsSanitationFacilityAddPostData =
  FurionResultEsSanitationFacilityVO;

export type ApiEsSanitationFacilityEditPostData =
  FurionResultEsSanitationFacilityVO;

export type ApiEsSanitationFacilityListPostData =
  FurionResultListEsSanitationFacilityVO;

export type ApiEsSanitationFacilityPagedListPostData =
  FurionResultSqlSugarPagedListEsSanitationFacilityVO;

export type ApiEsSanitationFacilityRemoveMulPostData = FurionResultListInt64;

export type ApiEsSanitationFacilityRemovePostData = FurionResultInt64;

export type ApiEsSanitationFacilityShowPostData =
  FurionResultEsSanitationFacilityVO;

export type ApiEsSanitationFacilityTypeAddPostData =
  FurionResultEsSanitationFacilityTypeVO;

export type ApiEsSanitationFacilityTypeEditPostData =
  FurionResultEsSanitationFacilityTypeVO;

export type ApiEsSanitationFacilityTypeListPostData =
  FurionResultListEsSanitationFacilityTypeVO;

export type ApiEsSanitationFacilityTypePagedListPostData =
  FurionResultSqlSugarPagedListEsSanitationFacilityTypeVO;

export type ApiEsSanitationFacilityTypeRemoveMulPostData =
  FurionResultListInt64;

export type ApiEsSanitationFacilityTypeRemovePostData = FurionResultInt64;

export type ApiEsSanitationFacilityTypeShowPostData =
  FurionResultEsSanitationFacilityTypeVO;

export type ApiEsShipAddPostData = FurionResultEsShipVO;

export type ApiEsShipEditPostData = FurionResultEsShipVO;

export type ApiEsShipListPostData = FurionResultListEsShipVO;

export type ApiEsShipPagedListPostData = FurionResultSqlSugarPagedListEsShipVO;

export type ApiEsShipRealtimeAddPostData = FurionResultEsShipRealtimeVO;

export type ApiEsShipRealtimeEditPostData = FurionResultEsShipRealtimeVO;

export type ApiEsShipRealtimeListPostData = FurionResultListEsShipRealtimeVO;

export type ApiEsShipRealtimePagedListPostData =
  FurionResultSqlSugarPagedListEsShipRealtimeVO;

export type ApiEsShipRealtimeRemoveMulPostData = FurionResultListInt64;

export type ApiEsShipRealtimeRemovePostData = FurionResultInt64;

export type ApiEsShipRealtimeShowPostData = FurionResultEsShipRealtimeVO;

export type ApiEsShipRemovePostData = FurionResultInt64;

export type ApiEsShipShowPostData = FurionResultEsShipVO;

export type ApiEsVehicleAddPostData = FurionResultEsVehicleVO;

export type ApiEsVehicleDpRecordAddPostData = FurionResultEsVehicleDpRecordVO;

export type ApiEsVehicleDpRecordEditPostData = FurionResultEsVehicleDpRecordVO;

export type ApiEsVehicleDpRecordListPostData =
  FurionResultListEsVehicleDpRecordVO;

export type ApiEsVehicleDpRecordPagedListPostData =
  FurionResultSqlSugarPagedListEsVehicleDpRecordVO;

export type ApiEsVehicleDpRecordShowPostData = FurionResultEsVehicleDpRecordVO;

export type ApiEsVehicleEditPostData = FurionResultEsVehicleVO;

export type ApiEsVehicleGetVehicleCountByTypeNamePostData =
  FurionResultListEsVehicleCountByTypeVO;

export type ApiEsVehicleGetVehicleCountByTypePostData =
  FurionResultListEsVehicleCountByTypeVO;

export type ApiEsVehicleLcRecordAddPostData = FurionResultEsVehicleLcRecordVO;

export type ApiEsVehicleLcRecordEditPostData = FurionResultEsVehicleLcRecordVO;

export type ApiEsVehicleLcRecordGroupByDayPostData = FurionResultListCommonStVO;

export type ApiEsVehicleLcRecordGroupByMonthPostData =
  FurionResultListCommonStVO;

export type ApiEsVehicleLcRecordGroupByYearPostData =
  FurionResultListCommonStVO;

export type ApiEsVehicleLcRecordListPostData =
  FurionResultListEsVehicleLcRecordVO;

export type ApiEsVehicleLcRecordPagedListPostData =
  FurionResultSqlSugarPagedListEsVehicleLcRecordVO;

export type ApiEsVehicleLcRecordRemoveMulPostData = FurionResultListInt64;

export type ApiEsVehicleLcRecordRemovePostData = FurionResultInt64;

export type ApiEsVehicleLcRecordShowPostData = FurionResultEsVehicleLcRecordVO;

export type ApiEsVehicleListPostData = FurionResultListEsVehicleVO;

export type ApiEsVehiclePagedListPostData =
  FurionResultSqlSugarPagedListEsVehicleVO;

export type ApiEsVehicleRealtimeAddPostData = FurionResultEsVehicleRealtimeVO;

export type ApiEsVehicleRealtimeEditPostData = FurionResultEsVehicleRealtimeVO;

export type ApiEsVehicleRealtimeListPostData =
  FurionResultListEsVehicleRealtimeVO;

export type ApiEsVehicleRealtimePagedListPostData =
  FurionResultSqlSugarPagedListEsVehicleRealtimeVO;

export type ApiEsVehicleRealtimeRemoveMulPostData = FurionResultListInt64;

export type ApiEsVehicleRealtimeRemovePostData = FurionResultInt64;

export type ApiEsVehicleRealtimeShowPostData = FurionResultEsVehicleRealtimeVO;

export type ApiEsVehicleRealtimeVehicleStateStPostData =
  FurionResultListEsVehicleStateStVO;

export type ApiEsVehicleRemovePostData = FurionResultInt64;

export type ApiEsVehicleShowPostData = FurionResultEsVehicleVO;

export type ApiEsVehicleTrackPostData = FurionResultListEsVehicleRecordPoint;

export type ApiEsWeightRecordAddPostData = FurionResultEsWeightRecordVO;

export type ApiEsWeightRecordEditPostData = FurionResultEsWeightRecordVO;

export type ApiEsWeightRecordGroupByDayPostData =
  FurionResultListEsWeightRecordStVO;

export type ApiEsWeightRecordGroupByLicencePostData =
  FurionResultListEsWeightRecordStVO;

export type ApiEsWeightRecordGroupByMonthPostData =
  FurionResultListEsWeightRecordStVO;

export type ApiEsWeightRecordGroupByYearPostData =
  FurionResultListEsWeightRecordStVO;

export type ApiEsWeightRecordListPostData = FurionResultListEsWeightRecordVO;

export type ApiEsWeightRecordMainStPostData = FurionResultWrMainStVO;

export type ApiEsWeightRecordPagedListPostData =
  FurionResultSqlSugarPagedListEsWeightRecordVO;

export type ApiEsWeightRecordQueryStatisticsPostData =
  FurionResultEsWeightRecordStatisticsVO;

export type ApiEsWeightRecordRemoveMulPostData = FurionResultListInt64;

export type ApiEsWeightRecordRemovePostData = FurionResultInt64;

export type ApiEsWeightRecordShowPostData = FurionResultEsWeightRecordVO;

export type ApiEsWorkPlanPwAddPostData = FurionResultEsWorkPlanPwVO;

export type ApiEsWorkPlanPwEditPostData = FurionResultEsWorkPlanPwVO;

export type ApiEsWorkPlanPwGroupByDayPostData = FurionResultListEsWorkPlanStVO;

export type ApiEsWorkPlanPwGroupByMonthPostData =
  FurionResultListEsWorkPlanStVO;

export type ApiEsWorkPlanPwGroupByYearPostData = FurionResultListEsWorkPlanStVO;

export type ApiEsWorkPlanPwListPostData = FurionResultListEsWorkPlanPwVO;

export type ApiEsWorkPlanPwPagedListPostData =
  FurionResultSqlSugarPagedListEsWorkPlanPwVO;

export type ApiEsWorkPlanPwRemovePostData = FurionResultInt64;

export type ApiEsWorkPlanPwSaveListPostData = any;

export type ApiEsWorkPlanPwShowPostData = FurionResultEsWorkPlanPwVO;

export type ApiEsWorkPlanSwAddPostData = FurionResultEsWorkPlanSwVO;

export type ApiEsWorkPlanSwEditPostData = FurionResultEsWorkPlanSwVO;

export type ApiEsWorkPlanSwGroupByDayPostData = FurionResultListEsWorkPlanStVO;

export type ApiEsWorkPlanSwGroupByMonthPostData =
  FurionResultListEsWorkPlanStVO;

export type ApiEsWorkPlanSwGroupByYearPostData = FurionResultListEsWorkPlanStVO;

export type ApiEsWorkPlanSwListPostData = FurionResultListEsWorkPlanSwVO;

export type ApiEsWorkPlanSwPagedListPostData =
  FurionResultSqlSugarPagedListEsWorkPlanSwVO;

export type ApiEsWorkPlanSwRemovePostData = FurionResultInt64;

export type ApiEsWorkPlanSwSaveListPostData = any;

export type ApiEsWorkPlanSwShowPostData = FurionResultEsWorkPlanSwVO;

export type ApiEsWorkPlanVwAddPostData = FurionResultEsWorkPlanVwVO;

export type ApiEsWorkPlanVwEditPostData = FurionResultEsWorkPlanVwVO;

export type ApiEsWorkPlanVwGroupByDayPostData = FurionResultListEsWorkPlanStVO;

export type ApiEsWorkPlanVwGroupByMonthPostData =
  FurionResultListEsWorkPlanStVO;

export type ApiEsWorkPlanVwGroupByYearPostData = FurionResultListEsWorkPlanStVO;

export type ApiEsWorkPlanVwListPostData = FurionResultListEsWorkPlanVwVO;

export type ApiEsWorkPlanVwPagedListPostData =
  FurionResultSqlSugarPagedListEsWorkPlanVwVO;

export type ApiEsWorkPlanVwRemovePostData = FurionResultInt64;

export type ApiEsWorkPlanVwSaveListPostData = any;

export type ApiEsWorkPlanVwShowPostData = FurionResultEsWorkPlanVwVO;

export type ApiEsWorkRouteAddPostData = FurionResultEsWorkRouteVO;

export type ApiEsWorkRouteEditPostData = FurionResultEsWorkRouteVO;

export type ApiEsWorkRouteListPostData = FurionResultListEsWorkRouteVO;

export type ApiEsWorkRoutePagedListPostData =
  FurionResultSqlSugarPagedListEsWorkRouteVO;

export type ApiEsWorkRoutePointListPostData =
  FurionResultListEsWorkRoutePointVO;

export type ApiEsWorkRoutePointPagedListPostData =
  FurionResultSqlSugarPagedListEsWorkRoutePointVO;

export type ApiEsWorkRoutePointShowPostData = FurionResultEsWorkRoutePointVO;

export type ApiEsWorkRouteRemovePostData = FurionResultInt64;

export type ApiEsWorkRouteShowPostData = FurionResultEsWorkRouteVO;

export type ApiEsWorkRuleAddPostData = FurionResultEsWorkRuleVO;

export type ApiEsWorkRuleEditPostData = FurionResultEsWorkRuleVO;

export type ApiEsWorkRuleListPostData = FurionResultListEsWorkRuleVO;

export type ApiEsWorkRulePagedListPostData =
  FurionResultSqlSugarPagedListEsWorkRuleVO;

export type ApiEsWorkRuleRemovePostData = FurionResultInt64;

export type ApiEsWorkRuleShowPostData = FurionResultEsWorkRuleVO;

export type ApiEsWorkShiftPwAddPostData = FurionResultEsWorkShiftPwVO;

export type ApiEsWorkShiftPwEditPostData = FurionResultEsWorkShiftPwVO;

export type ApiEsWorkShiftPwListPostData = FurionResultListEsWorkShiftPwVO;

export type ApiEsWorkShiftPwPagedListPostData =
  FurionResultSqlSugarPagedListEsWorkShiftPwVO;

export type ApiEsWorkShiftPwRemoveMulPostData = FurionResultListInt64;

export type ApiEsWorkShiftPwRemovePostData = FurionResultInt64;

export type ApiEsWorkShiftPwShowPostData = FurionResultEsWorkShiftPwVO;

export type ApiEsWorkShiftSwAddPostData = FurionResultEsWorkShiftSwVO;

export type ApiEsWorkShiftSwEditPostData = FurionResultEsWorkShiftSwVO;

export type ApiEsWorkShiftSwListPostData = FurionResultListEsWorkShiftSwVO;

export type ApiEsWorkShiftSwPagedListPostData =
  FurionResultSqlSugarPagedListEsWorkShiftSwVO;

export type ApiEsWorkShiftSwRemoveMulPostData = FurionResultListInt64;

export type ApiEsWorkShiftSwRemovePostData = FurionResultInt64;

export type ApiEsWorkShiftSwShowPostData = FurionResultEsWorkShiftSwVO;

export type ApiEsWorkShiftVwAddPostData = FurionResultEsWorkShiftVwVO;

export type ApiEsWorkShiftVwEditPostData = FurionResultEsWorkShiftVwVO;

export type ApiEsWorkShiftVwListPostData = FurionResultListEsWorkShiftVwVO;

export type ApiEsWorkShiftVwPagedListPostData =
  FurionResultSqlSugarPagedListEsWorkShiftVwVO;

export type ApiEsWorkShiftVwRemoveMulPostData = FurionResultListInt64;

export type ApiEsWorkShiftVwRemovePostData = FurionResultInt64;

export type ApiEsWorkShiftVwShowPostData = FurionResultEsWorkShiftVwVO;

export type ApiEsWorkWatercourseAddPostData = FurionResultEsWorkWatercourseVO;

export type ApiEsWorkWatercourseEditPostData = FurionResultEsWorkWatercourseVO;

export type ApiEsWorkWatercourseListPostData =
  FurionResultListEsWorkWatercourseVO;

export type ApiEsWorkWatercoursePagedListPostData =
  FurionResultSqlSugarPagedListEsWorkWatercourseVO;

export type ApiEsWorkWatercoursePointAddPostData =
  FurionResultEsWorkWatercoursePointVO;

export type ApiEsWorkWatercoursePointEditPostData =
  FurionResultEsWorkWatercoursePointVO;

export type ApiEsWorkWatercoursePointListPostData =
  FurionResultListEsWorkWatercoursePointVO;

export type ApiEsWorkWatercoursePointPagedListPostData =
  FurionResultSqlSugarPagedListEsWorkWatercoursePointVO;

export type ApiEsWorkWatercoursePointRemoveMulPostData = FurionResultListInt64;

export type ApiEsWorkWatercoursePointRemovePostData = FurionResultInt64;

export type ApiEsWorkWatercoursePointShowPostData =
  FurionResultEsWorkWatercoursePointVO;

export type ApiEsWorkWatercourseRemovePostData = FurionResultInt64;

export type ApiEsWorkWatercourseShowPostData = FurionResultEsWorkWatercourseVO;

export type ApiEsWtGeneralAddPostData = FurionResultEsWtGeneralVO;

export type ApiEsWtGeneralEditPostData = FurionResultEsWtGeneralVO;

export type ApiEsWtGeneralListPostData = FurionResultListEsWtGeneralVO;

export type ApiEsWtGeneralPagedListPostData =
  FurionResultSqlSugarPagedListEsWtGeneralVO;

export type ApiEsWtGeneralRemoveMulPostData = FurionResultListInt64;

export type ApiEsWtGeneralRemovePostData = FurionResultInt64;

export type ApiEsWtGeneralShowPostData = FurionResultEsWtGeneralVO;

export type ApiEsWtGeneralTreedataPostData = FurionResultListTreeNodeKfSk;

export type ApiEsWtShiftListPostData = FurionResultListEsWtShiftVO;

export type ApiEsWtShiftPagedListPostData =
  FurionResultSqlSugarPagedListEsWtShiftVO;

export type ApiEsWtShiftShowPostData = FurionResultEsWtShiftVO;

export type ApiEsWtSpecificAddPostData = FurionResultEsWtSpecificVO;

export type ApiEsWtSpecificEditPostData = FurionResultEsWtSpecificVO;

export type ApiEsWtSpecificListPostData = FurionResultListEsWtSpecificVO;

export type ApiEsWtSpecificPagedListPostData =
  FurionResultSqlSugarPagedListEsWtSpecificVO;

export type ApiEsWtSpecificRemoveMulPostData = FurionResultListInt64;

export type ApiEsWtSpecificRemovePostData = FurionResultInt64;

export type ApiEsWtSpecificShowPostData = FurionResultEsWtSpecificVO;

export type ApiGpsGpsTokenPostData = FurionResultString;

export type ApiHikCruiseRoutesControllingPostData = FurionResultString;

export type ApiHikPlaybackHlsUrlPostData = FurionResultString;

export type ApiHikPlaybackUrlPostData = FurionResultString;

export type ApiHikPreviewUrlPostData = FurionResultString;

export type ApiHikPtzsControllingPostData = FurionResultString;

export type ApiLogaccessAddPostData = FurionResultLogaccessVO;

export type ApiLogaccessEditPostData = FurionResultLogaccessVO;

export type ApiLogaccessListPostData = FurionResultListLogaccessVO;

export type ApiLogaccessPagedListPostData =
  FurionResultSqlSugarPagedListLogaccessVO;

export type ApiLogaccessRemoveMulPostData = FurionResultListInt64;

export type ApiLogaccessRemovePostData = FurionResultInt64;

export type ApiLogaccessShowPostData = FurionResultLogaccessVO;

export type ApiLogerrorAddPostData = FurionResultLogerrorVO;

export type ApiLogerrorEditPostData = FurionResultLogerrorVO;

export type ApiLogerrorListPostData = FurionResultListLogerrorVO;

export type ApiLogerrorPagedListPostData =
  FurionResultSqlSugarPagedListLogerrorVO;

export type ApiLogerrorRemoveMulPostData = FurionResultListInt64;

export type ApiLogerrorRemovePostData = FurionResultInt64;

export type ApiLogerrorShowPostData = FurionResultLogerrorVO;

export type ApiLogoperationAddPostData = FurionResultLogoperationVO;

export type ApiLogoperationEditPostData = FurionResultLogoperationVO;

export type ApiLogoperationListPostData = FurionResultListLogoperationVO;

export type ApiLogoperationPagedListPostData =
  FurionResultSqlSugarPagedListLogoperationVO;

export type ApiLogoperationRemoveMulPostData = FurionResultListInt64;

export type ApiLogoperationRemovePostData = FurionResultInt64;

export type ApiLogoperationShowPostData = FurionResultLogoperationVO;

export type ApiMessageListPostData = FurionResultListMessageVO;

export type ApiMessagePagedListPostData =
  FurionResultSqlSugarPagedListMessageVO;

export type ApiMessageShowPostData = FurionResultMessageVO;

export type ApiMmInventoryListPostData = FurionResultListMmInventoryVO;

export type ApiMmInventoryPagedListPostData =
  FurionResultSqlSugarPagedListMmInventoryVO;

export type ApiMmInventoryShowPostData = FurionResultMmInventoryVO;

export type ApiMmMaterialAddPostData = FurionResultMmMaterialVO;

export type ApiMmMaterialCategoryAddPostData = FurionResultMmMaterialCategoryVO;

export type ApiMmMaterialCategoryEditPostData =
  FurionResultMmMaterialCategoryVO;

export type ApiMmMaterialCategoryListPostData =
  FurionResultListMmMaterialCategoryVO;

export type ApiMmMaterialCategoryPagedListPostData =
  FurionResultSqlSugarPagedListMmMaterialCategoryVO;

export type ApiMmMaterialCategoryRemovePostData = FurionResultInt64;

export type ApiMmMaterialCategoryShowPostData =
  FurionResultMmMaterialCategoryVO;

export type ApiMmMaterialEditPostData = FurionResultMmMaterialVO;

export type ApiMmMaterialListPostData = FurionResultListMmMaterialVO;

export type ApiMmMaterialPagedListPostData =
  FurionResultSqlSugarPagedListMmMaterialVO;

export type ApiMmMaterialRemovePostData = FurionResultInt64;

export type ApiMmMaterialShowPostData = FurionResultMmMaterialVO;

export type ApiMmRequisitionApproveRequisitionPostData =
  FurionResultMmRequisitionVO;

export type ApiMmRequisitionGenerateStockOutPostData =
  FurionResultListMmStockInOutVO;

export type ApiMmRequisitionListPostData = FurionResultListMmRequisitionVO;

export type ApiMmRequisitionPagedListPostData =
  FurionResultSqlSugarPagedListMmRequisitionVO;

export type ApiMmRequisitionShowPostData = FurionResultMmRequisitionVO;

export type ApiMmRequisitionSubmitRequisitionPostData =
  FurionResultMmRequisitionVO;

export type ApiMmStockInOutApprovePostData = FurionResultMmStockInOutVO;

export type ApiMmStockInOutListPostData = FurionResultListMmStockInOutVO;

export type ApiMmStockInOutPagedListPostData =
  FurionResultSqlSugarPagedListMmStockInOutVO;

export type ApiMmStockInOutPendingApproveListPostData =
  FurionResultSqlSugarPagedListMmStockInOutVO;

export type ApiMmStockInOutShowPostData = FurionResultMmStockInOutVO;

export type ApiMmStockInOutStockInPostData = FurionResultMmStockInOutVO;

export type ApiMmStockInOutStockOutPostData = FurionResultMmStockInOutVO;

export type ApiOrganizationAddPostData = FurionResultOrganizationVO;

export type ApiOrganizationEditPostData = FurionResultOrganizationVO;

export type ApiOrganizationListPostData = FurionResultListOrganizationVO;

export type ApiOrganizationPagedListPostData =
  FurionResultSqlSugarPagedListOrganizationVO;

export type ApiOrganizationRemovePostData = FurionResultListInt64;

export type ApiOrganizationShowPostData = FurionResultOrganizationVO;

export type ApiOrganizationTreedataPostData = FurionResultListTreeNode;

export type ApiReportStwaGroupByDayPostData = FurionResultListEsWorkPlanStVO;

export type ApiReportStwaGroupByMonthPostData = FurionResultListEsWorkPlanStVO;

export type ApiReportStwaGroupByYearPostData = FurionResultListEsWorkPlanStVO;

export type ApiReportStwpGroupByGeneralPostData = FurionResultListCommonStVO;

export type ApiResourceAddPostData = FurionResultResourceVO;

export type ApiResourceEditPostData = FurionResultResourceVO;

export type ApiResourceGetResourcesPostData = FurionResultListInt64;

export type ApiResourceListPostData = FurionResultListResourceVO;

export type ApiResourcePagedListPostData =
  FurionResultSqlSugarPagedListResourceVO;

export type ApiResourceRemovePostData = FurionResultListInt64;

export type ApiResourceRoutePathsPostData = FurionResultListString;

export type ApiResourceShowPostData = FurionResultResourceVO;

export type ApiResourceTreedataPostData = FurionResultListTreeNode;

export type ApiRoleAddPostData = FurionResultRoleVO;

export type ApiRoleAssignResourcePostData = any;

export type ApiRoleEditPostData = FurionResultRoleVO;

export type ApiRoleListPostData = FurionResultListRoleVO;

export type ApiRolePagedListPostData = FurionResultSqlSugarPagedListRoleVO;

export type ApiRoleRemoveMulPostData = FurionResultListInt64;

export type ApiRoleRemovePostData = FurionResultInt64;

export type ApiRoleShowPostData = FurionResultRoleVO;

export type ApiSsoDoLoginByTicketPostData = FurionResultUserVO;

export interface ApiSsoDoLoginByTicketPostParams {
  ticket?: string;
}

export type ApiSsoGetSsoAuthUrlPostData = FurionResultString;

export interface ApiSsoGetSsoAuthUrlPostParams {
  clientloginurl?: string;
}

export type ApiSysCacheDeleteKeyPostData = FurionResultInt32;

export interface ApiSysCacheDeleteKeyPostParams {
  key: string;
}

export type ApiSysCacheDeletebyprekeyPrefixkeyPostData = FurionResultInt32;

export interface ApiSysCacheDeletebyprekeyPrefixkeyPostParams {
  /** 键名前缀 */
  prefixkey: string;
}

export type ApiSysCacheKeyListGetData = FurionResultListString;

export type ApiSysCacheKeysByPrefixKeyPrefixkeyGetData = FurionResultListString;

export interface ApiSysCacheKeysByPrefixKeyPrefixkeyGetParams {
  /** 键名前缀 */
  prefixkey: string;
}

export type ApiSysCacheValueKeyGetData = FurionResultObject;

export interface ApiSysCacheValueKeyGetParams {
  key: string;
}

export type ApiSysNoticeAddPostData = FurionResultSysNoticeVO;

export type ApiSysNoticeEditPostData = FurionResultSysNoticeVO;

export type ApiSysNoticeListPostData = FurionResultListSysNoticeVO;

export type ApiSysNoticePagedListPostData =
  FurionResultSqlSugarPagedListSysNoticeVO;

export type ApiSysNoticeRemovePostData = FurionResultInt64;

export type ApiSysNoticeShowPostData = FurionResultSysNoticeVO;

export type ApiTechnicsAddPostData = FurionResultTechnicsVO;

export type ApiTechnicsEditPostData = FurionResultTechnicsVO;

export type ApiTechnicsListPostData = FurionResultListTechnicsVO;

export type ApiTechnicsPagedListPostData =
  FurionResultSqlSugarPagedListTechnicsVO;

export type ApiTechnicsRemoveMulPostData = FurionResultListInt64;

export type ApiTechnicsRemovePostData = FurionResultInt64;

export type ApiTechnicsShowPostData = FurionResultTechnicsVO;

export type ApiUserAddPostData = FurionResultUserVO;

export type ApiUserAssignRolesPostData = any;

export type ApiUserAssignUsergroupsPostData = any;

export type ApiUserCountByJobPostData = FurionResultListNameCount;

export type ApiUserEditPostData = FurionResultUserVO;

export type ApiUserEditPwdPostData = any;

export type ApiUserEditSelfPostData = FurionResultUserVO;

export type ApiUserGetRolesPostData = FurionResultListRoleVO;

export type ApiUserGetUserCountPostData = FurionResultUserCountVO;

export type ApiUserGetUsergroupsPostData = FurionResultListUsergroupVO;

export type ApiUserListPostData = FurionResultListUserVO;

export type ApiUserMessageAmountstPostData = FurionResultMessageStRes;

export type ApiUserMessageDeleteMessagePostData = FurionResultBoolean;

export type ApiUserMessageListPostData = FurionResultListUserMessageVO;

export type ApiUserMessagePagedListPostData =
  FurionResultSqlSugarPagedListUserMessageVO;

export type ApiUserMessageReadAllMessagePostData = FurionResultBoolean;

export type ApiUserMessageReadMessagePostData = FurionResultBoolean;

export type ApiUserMessageShowPostData = FurionResultUserMessageVO;

export type ApiUserPagedListPostData = FurionResultSqlSugarPagedListUserVO;

export type ApiUserPagedListWpPostData = FurionResultSqlSugarPagedListUserWpVO;

export type ApiUserRemoveMulPostData = FurionResultListInt64;

export type ApiUserRemovePostData = FurionResultInt64;

export type ApiUserResetPwdPostData = any;

export type ApiUserShowPostData = FurionResultUserVO;

export type ApiUserShowSelfPostData = FurionResultUserVO;

export type ApiUsergroupAddPostData = FurionResultUsergroupVO;

export type ApiUsergroupAssignRolesPostData = any;

export type ApiUsergroupEditPostData = FurionResultUsergroupVO;

export type ApiUsergroupGetRolesPostData = FurionResultListRoleVO;

export type ApiUsergroupListPostData = FurionResultListUsergroupVO;

export type ApiUsergroupPagedListPostData =
  FurionResultSqlSugarPagedListUsergroupVO;

export type ApiUsergroupRemoveMulPostData = FurionResultListInt64;

export type ApiUsergroupRemovePostData = FurionResultInt64;

export type ApiUsergroupShowPostData = FurionResultUsergroupVO;

export type ApiWeatherWeatherTokenPostData = FurionResultString;

export interface ApproveRequisitionFO {
  /** 审批结果 */
  approved: boolean;
  /**
   * 领料申请单id必填
   * @format int64
   */
  id: number;
  /** 备注 */
  remark?: string | null;
}

export interface ApproveSioFO {
  /** 审批结果 */
  approved: boolean;
  /**
   * 领料申请单id
   * @format int64
   */
  id: number;
  /** 备注 */
  remark?: string | null;
}

export interface CommonStVO {
  /** @format double */
  avg?: number | null;
  /** @format int64 */
  count?: number;
  label?: string | null;
  /** @format double */
  sum?: number | null;
}

export interface CruiseRoutesControllingQO {
  /**
   * 监控点编号
   * @minLength 1
   */
  cameraIndexCode: string;
  /**
   * 控制命令，不区分大小写，开始巡航：START_CRUISE；停止巡航：STOP_CRUISE
   * @minLength 1
   */
  command: string;
  /**
   * 巡航路径序号，范围：[1,8]，可通过查询巡航路径接口获取返回参数cruiseIndex
   * @format int32
   */
  cruiseIndex: number;
}

export interface DataDictionaryFO {
  /** 编号 */
  code?: string | null;
  /**
   * created_at
   * @format date-time
   */
  createdAt?: string | null;
  /** created_person */
  createdPerson?: string | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 是否启用 */
  isEnable?: boolean | null;
  /**
   * 级别
   * @format int32
   */
  level?: number | null;
  /** 名称 */
  name?: string | null;
  nestedcode?: string | null;
  /** 路径 */
  nestedpath?: string | null;
  parentCode?: string | null;
  /**
   * 父级
   * @format int64
   */
  parentId?: number | null;
  parentName?: string | null;
  /**
   * 路径key
   * @format int32
   */
  pathkey?: number;
  /** 其他属性 */
  props?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * updated_at
   * @format date-time
   */
  updatedAt?: string | null;
  /** updated_person */
  updatedPerson?: string | null;
}

export interface DataDictionaryPQO {
  /** 编号 */
  code?: string | null;
  /**
   * created_at
   * @format date-time
   */
  createdAt?: string | null;
  /** created_person */
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 是否启用 */
  isEnable?: boolean | null;
  /**
   * 级别
   * @format int32
   */
  level?: number | null;
  /** 名称 */
  name?: string | null;
  nestedcode?: string | null;
  /** 路径 */
  nestedpath?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  parentCode?: string | null;
  /**
   * 父级
   * @format int64
   */
  parentId?: number | null;
  parentName?: string | null;
  /**
   * 路径key
   * @format int32
   */
  pathkey?: number;
  /** 其他属性 */
  props?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * updated_at
   * @format date-time
   */
  updatedAt?: string | null;
  /** updated_person */
  updatedPerson?: string | null;
}

export interface DataDictionaryQO {
  /** 编号 */
  code?: string | null;
  /**
   * created_at
   * @format date-time
   */
  createdAt?: string | null;
  /** created_person */
  createdPerson?: string | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 是否启用 */
  isEnable?: boolean | null;
  /**
   * 级别
   * @format int32
   */
  level?: number | null;
  /** 名称 */
  name?: string | null;
  nestedcode?: string | null;
  /** 路径 */
  nestedpath?: string | null;
  parentCode?: string | null;
  /**
   * 父级
   * @format int64
   */
  parentId?: number | null;
  parentName?: string | null;
  /**
   * 路径key
   * @format int32
   */
  pathkey?: number;
  /** 其他属性 */
  props?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * updated_at
   * @format date-time
   */
  updatedAt?: string | null;
  /** updated_person */
  updatedPerson?: string | null;
}

export interface DataDictionaryVO {
  /** 编号 */
  code?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否启用 */
  isEnable?: boolean | null;
  /**
   * 级别
   * @format int32
   */
  level?: number | null;
  /** 名称 */
  name?: string | null;
  nestedcode?: string | null;
  parentCode?: string | null;
  /**
   * 父级
   * @format int64
   */
  parentId?: number | null;
  parentName?: string | null;
  /** 其他属性 */
  props?: string | null;
  /** 备注 */
  remark?: string | null;
}

export interface DdTypedataQO {
  /**
   * Nestedcode
   * @minLength 1
   */
  nestedcode: string;
}

export interface EquipmentFO {
  /** 地址 */
  address?: string | null;
  /** 品牌 */
  brand?: string | null;
  /** 编码 */
  code?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
  /** 设备功率 */
  equipmentPower?: string | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** imei */
  imei?: string | null;
  /** 是否报警 */
  isAlarm?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /** 规格型号 */
  modelSpec?: string | null;
  /** 名称 */
  name?: string | null;
  /**
   * 排序序号
   * @format int32
   */
  orderNumber?: number;
  /** 图片路径 */
  picUrl?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 设备状态编码 */
  stateCode?: string | null;
  /** 测站编码 */
  stcode?: string | null;
  /**
   * 所属工艺系统
   * @format int64
   */
  technicsId?: number | null;
  /** 设备类型编码 */
  typeCode?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface EquipmentPQO {
  /** 地址 */
  address?: string | null;
  /** 品牌 */
  brand?: string | null;
  /** 编码 */
  code?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
  /** 设备功率 */
  equipmentPower?: string | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** imei */
  imei?: string | null;
  /** 是否报警 */
  isAlarm?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /** 规格型号 */
  modelSpec?: string | null;
  /** 名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 排序序号
   * @format int32
   */
  orderNumber?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 图片路径 */
  picUrl?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 设备状态编码 */
  stateCode?: string | null;
  /** 测站编码 */
  stcode?: string | null;
  /**
   * 所属工艺系统
   * @format int64
   */
  technicsId?: number | null;
  /** 设备类型编码 */
  typeCode?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface EquipmentParamDdFO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string;
  /**
   * 设备id
   * @format int64
   */
  equipmentId?: number | null;
  /** 设备名称 */
  equipmentName?: string | null;
  /**
   * 监测因子id
   * @format int64
   */
  equipmentParamId?: number;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 数据时间-日
   * @format int32
   */
  sday?: number;
  /**
   * 数据时间-月
   * @format int32
   */
  smonth?: number;
  /**
   * 数据时间-年
   * @format int32
   */
  syear?: number;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number | null;
  /** 水库名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 平均值
   * @format double
   */
  valueAvg?: number | null;
  /**
   * 总量
   * @format double
   */
  valueCount?: number | null;
  /**
   * 最大值
   * @format double
   */
  valueMax?: number | null;
  /**
   * 最小值
   * @format double
   */
  valueMin?: number | null;
}

export interface EquipmentParamDdPQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 设备id
   * @format int64
   */
  equipmentId?: number | null;
  /** 设备名称 */
  equipmentName?: string | null;
  /**
   * 监测因子id
   * @format int64
   */
  equipmentParamId?: number;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /**
   * 数据时间-日
   * @format int32
   */
  sday?: number;
  /**
   * 数据时间-月
   * @format int32
   */
  smonth?: number;
  /**
   * 数据时间-年
   * @format int32
   */
  syear?: number;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number | null;
  /** 水库名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 平均值
   * @format double
   */
  valueAvg?: number | null;
  /**
   * 总量
   * @format double
   */
  valueCount?: number | null;
  /**
   * 最大值
   * @format double
   */
  valueMax?: number | null;
  /**
   * 最小值
   * @format double
   */
  valueMin?: number | null;
}

export interface EquipmentParamDdQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 设备id
   * @format int64
   */
  equipmentId?: number | null;
  /** 设备名称 */
  equipmentName?: string | null;
  /**
   * 监测因子id
   * @format int64
   */
  equipmentParamId?: number;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 数据时间-日
   * @format int32
   */
  sday?: number;
  /**
   * 数据时间-月
   * @format int32
   */
  smonth?: number;
  /**
   * 数据时间-年
   * @format int32
   */
  syear?: number;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number | null;
  /** 水库名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 平均值
   * @format double
   */
  valueAvg?: number | null;
  /**
   * 总量
   * @format double
   */
  valueCount?: number | null;
  /**
   * 最大值
   * @format double
   */
  valueMax?: number | null;
  /**
   * 最小值
   * @format double
   */
  valueMin?: number | null;
}

export interface EquipmentParamDdVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string;
  /**
   * 设备id
   * @format int64
   */
  equipmentId?: number | null;
  /** 设备名称 */
  equipmentName?: string | null;
  /**
   * 监测因子id
   * @format int64
   */
  equipmentParamId?: number;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 数据时间-日
   * @format int32
   */
  sday?: number;
  /**
   * 数据时间-月
   * @format int32
   */
  smonth?: number;
  /**
   * 数据时间-年
   * @format int32
   */
  syear?: number;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number | null;
  /** 水库名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 平均值
   * @format double
   */
  valueAvg?: number | null;
  /**
   * 总量
   * @format double
   */
  valueCount?: number | null;
  /**
   * 最大值
   * @format double
   */
  valueMax?: number | null;
  /**
   * 最小值
   * @format double
   */
  valueMin?: number | null;
}

export interface EquipmentParamFO {
  /** 编码 */
  code?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /** 数据代码 */
  dataCode?: string | null;
  /**
   * 数据信号（0-模拟量，1-开关量，2-文本型）
   * @format int32
   */
  dataSignal?: number | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
  /**
   * 数据类型（0-实时，1-统计）
   * @format int32
   */
  dataType?: number | null;
  /**
   * 数据值
   * @format double
   */
  dataValue?: number | null;
  /**
   * 小数位数
   * @format int32
   */
  decimalPlaces?: number;
  /** 展示名称 */
  displayName?: string | null;
  /**
   * 所属设备
   * @format int64
   */
  equipmentId?: number | null;
  /**
   * 报警上限
   * @format double
   */
  hiValue?: number | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 是否报警 */
  isAlarm?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /**
   * 报警下限
   * @format double
   */
  loValue?: number | null;
  /** 单位 */
  measureUnit?: string | null;
  /** 名称 */
  name?: string | null;
  /** 关状态颜色 */
  offColor?: string | null;
  /** 开状态颜色 */
  onColor?: string | null;
  /**
   * 排序序号
   * @format int32
   */
  orderNumber?: number | null;
  /**
   * 读写类型（0-只读，1-读写，2-只写）
   * @format int32
   */
  readWrite?: number | null;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: number | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface EquipmentParamHdFO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string;
  /**
   * 设备id
   * @format int64
   */
  equipmentId?: number | null;
  /** 设备名称 */
  equipmentName?: string | null;
  /**
   * 监测因子id
   * @format int64
   */
  equipmentParamId?: number;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 数据时间-日
   * @format int32
   */
  sday?: number;
  /**
   * 数据时间-小时
   * @format int32
   */
  shour?: number;
  /**
   * 数据时间-月
   * @format int32
   */
  smonth?: number;
  /**
   * 数据时间-年
   * @format int32
   */
  syear?: number;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number | null;
  /** 水库名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 平均值
   * @format double
   */
  valueAvg?: number | null;
  /**
   * 总量
   * @format double
   */
  valueCount?: number | null;
  /**
   * 最大值
   * @format double
   */
  valueMax?: number | null;
  /**
   * 最小值
   * @format double
   */
  valueMin?: number | null;
}

export interface EquipmentParamHdPQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 设备id
   * @format int64
   */
  equipmentId?: number | null;
  /** 设备名称 */
  equipmentName?: string | null;
  /**
   * 监测因子id
   * @format int64
   */
  equipmentParamId?: number;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /**
   * 数据时间-日
   * @format int32
   */
  sday?: number;
  /**
   * 数据时间-小时
   * @format int32
   */
  shour?: number;
  /**
   * 数据时间-月
   * @format int32
   */
  smonth?: number;
  /**
   * 数据时间-年
   * @format int32
   */
  syear?: number;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number | null;
  /** 水库名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 平均值
   * @format double
   */
  valueAvg?: number | null;
  /**
   * 总量
   * @format double
   */
  valueCount?: number | null;
  /**
   * 最大值
   * @format double
   */
  valueMax?: number | null;
  /**
   * 最小值
   * @format double
   */
  valueMin?: number | null;
}

export interface EquipmentParamHdQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 设备id
   * @format int64
   */
  equipmentId?: number | null;
  /** 设备名称 */
  equipmentName?: string | null;
  /**
   * 监测因子id
   * @format int64
   */
  equipmentParamId?: number;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 数据时间-日
   * @format int32
   */
  sday?: number;
  /**
   * 数据时间-小时
   * @format int32
   */
  shour?: number;
  /**
   * 数据时间-月
   * @format int32
   */
  smonth?: number;
  /**
   * 数据时间-年
   * @format int32
   */
  syear?: number;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number | null;
  /** 水库名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 平均值
   * @format double
   */
  valueAvg?: number | null;
  /**
   * 总量
   * @format double
   */
  valueCount?: number | null;
  /**
   * 最大值
   * @format double
   */
  valueMax?: number | null;
  /**
   * 最小值
   * @format double
   */
  valueMin?: number | null;
}

export interface EquipmentParamHdVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string;
  /**
   * 设备id
   * @format int64
   */
  equipmentId?: number | null;
  /** 设备名称 */
  equipmentName?: string | null;
  /**
   * 监测因子id
   * @format int64
   */
  equipmentParamId?: number;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 数据时间-日
   * @format int32
   */
  sday?: number;
  /**
   * 数据时间-小时
   * @format int32
   */
  shour?: number;
  /**
   * 数据时间-月
   * @format int32
   */
  smonth?: number;
  /**
   * 数据时间-年
   * @format int32
   */
  syear?: number;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number | null;
  /** 水库名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 平均值
   * @format double
   */
  valueAvg?: number | null;
  /**
   * 总量
   * @format double
   */
  valueCount?: number | null;
  /**
   * 最大值
   * @format double
   */
  valueMax?: number | null;
  /**
   * 最小值
   * @format double
   */
  valueMin?: number | null;
}

export interface EquipmentParamMdFO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string;
  /**
   * 数据值
   * @format double
   */
  dataValue?: number | null;
  /**
   * 设备id
   * @format int64
   */
  equipmentId?: number | null;
  /** 设备名称 */
  equipmentName?: string | null;
  /**
   * 监测因子id
   * @format int64
   */
  equipmentParamId?: number;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /** 是否已参与计算统计数据 */
  hasCalcst?: boolean;
  /** @format int64 */
  id?: number;
  /** 是否有效 */
  isEffective?: boolean | null;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: number;
  /**
   * 数据时间-日
   * @format int32
   */
  sday?: number;
  /**
   * 数据时间-小时
   * @format int32
   */
  shour?: number;
  /**
   * 数据时间-月
   * @format int32
   */
  smonth?: number;
  /**
   * 数据时间-年
   * @format int32
   */
  syear?: number;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number | null;
  /** 水库名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EquipmentParamMdPQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string;
  /**
   * 数据值
   * @format double
   */
  dataValue?: number | null;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 设备id
   * @format int64
   */
  equipmentId?: number | null;
  /** 设备名称 */
  equipmentName?: string | null;
  /**
   * 监测因子id
   * @format int64
   */
  equipmentParamId?: number;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** 是否已参与计算统计数据 */
  hasCalcst?: boolean;
  /** @format int64 */
  id?: number;
  /** 是否有效 */
  isEffective?: boolean | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100000000
   */
  pageSize?: number;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: number;
  /**
   * 数据时间-日
   * @format int32
   */
  sday?: number;
  /**
   * 日期（1:小时， 2：日，3：周， 4：旬，5：月，6：季， 7：年）
   * @format int32
   */
  searchMode?: number | null;
  /**
   * 数据时间-小时
   * @format int32
   */
  shour?: number;
  /**
   * 数据时间-月
   * @format int32
   */
  smonth?: number;
  /**
   * 数据时间-年
   * @format int32
   */
  syear?: number;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number | null;
  /** 水库名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 乡镇 */
  village?: string | null;
}

export interface EquipmentParamMdQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string;
  /**
   * 数据值
   * @format double
   */
  dataValue?: number | null;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 设备id
   * @format int64
   */
  equipmentId?: number | null;
  /** 设备名称 */
  equipmentName?: string | null;
  /**
   * 监测因子id
   * @format int64
   */
  equipmentParamId?: number;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /** 是否已参与计算统计数据 */
  hasCalcst?: boolean;
  /** @format int64 */
  id?: number;
  /** 是否有效 */
  isEffective?: boolean | null;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: number;
  /**
   * 数据时间-日
   * @format int32
   */
  sday?: number;
  /**
   * 日期（1:小时， 2：日，3：周， 4：旬，5：月，6：季， 7：年）
   * @format int32
   */
  searchMode?: number | null;
  /**
   * 数据时间-小时
   * @format int32
   */
  shour?: number;
  /**
   * 数据时间-月
   * @format int32
   */
  smonth?: number;
  /**
   * 数据时间-年
   * @format int32
   */
  syear?: number;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number | null;
  /** 水库名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 乡镇 */
  village?: string | null;
}

export interface EquipmentParamMdVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string;
  /**
   * 数据值
   * @format double
   */
  dataValue?: number | null;
  /**
   * 设备id
   * @format int64
   */
  equipmentId?: number | null;
  /** 设备名称 */
  equipmentName?: string | null;
  /**
   * 监测因子id
   * @format int64
   */
  equipmentParamId?: number;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /** 是否已参与计算统计数据 */
  hasCalcst?: boolean;
  /** @format int64 */
  id?: number;
  /** 是否有效 */
  isEffective?: boolean | null;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: number;
  /**
   * 数据时间-日
   * @format int32
   */
  sday?: number;
  /**
   * 数据时间-小时
   * @format int32
   */
  shour?: number;
  /**
   * 数据时间-月
   * @format int32
   */
  smonth?: number;
  /**
   * 数据时间-年
   * @format int32
   */
  syear?: number;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number | null;
  /** 水库名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EquipmentParamPQO {
  /** 编码 */
  code?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /** 数据代码 */
  dataCode?: string | null;
  /**
   * 数据信号（0-模拟量，1-开关量，2-文本型）
   * @format int32
   */
  dataSignal?: number | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
  /**
   * 数据类型（0-实时，1-统计）
   * @format int32
   */
  dataType?: number | null;
  /**
   * 数据值
   * @format double
   */
  dataValue?: number | null;
  /**
   * 小数位数
   * @format int32
   */
  decimalPlaces?: number;
  /** 展示名称 */
  displayName?: string | null;
  /**
   * 所属设备
   * @format int64
   */
  equipmentId?: number | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * 报警上限
   * @format double
   */
  hiValue?: number | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 是否报警 */
  isAlarm?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /**
   * 报警下限
   * @format double
   */
  loValue?: number | null;
  /** 单位 */
  measureUnit?: string | null;
  /** 名称 */
  name?: string | null;
  /** 关状态颜色 */
  offColor?: string | null;
  /** 开状态颜色 */
  onColor?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 排序序号
   * @format int32
   */
  orderNumber?: number | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /**
   * 读写类型（0-只读，1-读写，2-只写）
   * @format int32
   */
  readWrite?: number | null;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: number | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface EquipmentParamQO {
  /** 编码 */
  code?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /** 数据代码 */
  dataCode?: string | null;
  /**
   * 数据信号（0-模拟量，1-开关量，2-文本型）
   * @format int32
   */
  dataSignal?: number | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
  /**
   * 数据类型（0-实时，1-统计）
   * @format int32
   */
  dataType?: number | null;
  /**
   * 数据值
   * @format double
   */
  dataValue?: number | null;
  /**
   * 小数位数
   * @format int32
   */
  decimalPlaces?: number;
  /** 展示名称 */
  displayName?: string | null;
  /**
   * 所属设备
   * @format int64
   */
  equipmentId?: number | null;
  /**
   * 报警上限
   * @format double
   */
  hiValue?: number | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 是否报警 */
  isAlarm?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /**
   * 报警下限
   * @format double
   */
  loValue?: number | null;
  /** 单位 */
  measureUnit?: string | null;
  /** 名称 */
  name?: string | null;
  /** 关状态颜色 */
  offColor?: string | null;
  /** 开状态颜色 */
  onColor?: string | null;
  /**
   * 排序序号
   * @format int32
   */
  orderNumber?: number | null;
  /**
   * 读写类型（0-只读，1-读写，2-只写）
   * @format int32
   */
  readWrite?: number | null;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: number | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface EquipmentParamVO {
  /** 编码 */
  code?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /** 数据代码 */
  dataCode?: string | null;
  /**
   * 数据信号（0-模拟量，1-开关量，2-文本型）
   * @format int32
   */
  dataSignal?: number | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
  /**
   * 数据类型（0-实时，1-统计）
   * @format int32
   */
  dataType?: number | null;
  /**
   * 数据值
   * @format double
   */
  dataValue?: number | null;
  /**
   * 小数位数
   * @format int32
   */
  decimalPlaces?: number;
  /** 展示名称 */
  displayName?: string | null;
  /**
   * 所属设备
   * @format int64
   */
  equipmentId?: number | null;
  /** 设备名称 */
  equipmentName?: string | null;
  /**
   * 报警上限
   * @format double
   */
  hiValue?: number | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 是否报警 */
  isAlarm?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /**
   * 报警下限
   * @format double
   */
  loValue?: number | null;
  /** 单位 */
  measureUnit?: string | null;
  /** 名称 */
  name?: string | null;
  /** 关状态颜色 */
  offColor?: string | null;
  /** 开状态颜色 */
  onColor?: string | null;
  /**
   * 排序序号
   * @format int32
   */
  orderNumber?: number | null;
  /**
   * 读写类型（0-只读，1-读写，2-只写）
   * @format int32
   */
  readWrite?: number | null;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: number | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number | null;
  /** 所属水库 */
  technicsName?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface EquipmentQO {
  /** 地址 */
  address?: string | null;
  /** 品牌 */
  brand?: string | null;
  /** 编码 */
  code?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
  /** 设备功率 */
  equipmentPower?: string | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** imei */
  imei?: string | null;
  /** 是否报警 */
  isAlarm?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /** 规格型号 */
  modelSpec?: string | null;
  /** 名称 */
  name?: string | null;
  /**
   * 排序序号
   * @format int32
   */
  orderNumber?: number;
  /** 图片路径 */
  picUrl?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 设备状态编码 */
  stateCode?: string | null;
  /** 测站编码 */
  stcode?: string | null;
  /**
   * 所属工艺系统
   * @format int64
   */
  technicsId?: number | null;
  /** 设备类型编码 */
  typeCode?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface EquipmentVO {
  /** 地址 */
  address?: string | null;
  /** 品牌 */
  brand?: string | null;
  /** 编码 */
  code?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
  /** 设备功率 */
  equipmentPower?: string | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** imei */
  imei?: string | null;
  /** 是否报警 */
  isAlarm?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /** 规格型号 */
  modelSpec?: string | null;
  /** 名称 */
  name?: string | null;
  /**
   * 排序序号
   * @format int32
   */
  orderNumber?: number;
  /** 图片路径 */
  picUrl?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 设备状态编码 */
  stateCode?: string | null;
  /** 设备状态 */
  stateName?: string | null;
  /** 测站编码 */
  stcode?: string | null;
  /**
   * 所属工艺系统
   * @format int64
   */
  technicsId?: number | null;
  /** 所属水库 */
  technicsName?: string | null;
  /** 设备类型编码 */
  typeCode?: string | null;
  /** 设备类型 */
  typeName?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface EsAlarmRecordFO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  duration?: number | null;
  /** @format int64 */
  equipmentId?: number;
  equipmentName?: string | null;
  /** @format int64 */
  equipmentParamId?: number;
  equipmentParamName?: string | null;
  /** @format int64 */
  id?: number;
  prealarmInfo?: string | null;
  /** @format int32 */
  sday?: number;
  /** @format int32 */
  shour?: number;
  /** @format int32 */
  smonth?: number;
  /** @format date-time */
  startTime?: string;
  /** @format date-time */
  stopTime?: string | null;
  /** @format int32 */
  syear?: number;
  /** @format int64 */
  technicsId?: number;
  technicsName?: string | null;
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsAlarmRecordPQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  duration?: number | null;
  /** @format int64 */
  equipmentId?: number;
  equipmentName?: string | null;
  /** @format int64 */
  equipmentParamId?: number;
  equipmentParamName?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  prealarmInfo?: string | null;
  /** @format int32 */
  sday?: number;
  /** @format int32 */
  shour?: number;
  /** @format int32 */
  smonth?: number;
  /** @format date-time */
  startTime?: string;
  /** @format date-time */
  stopTime?: string | null;
  /** @format int32 */
  syear?: number;
  /** @format int64 */
  technicsId?: number;
  technicsName?: string | null;
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsAlarmRecordQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  duration?: number | null;
  /** @format int64 */
  equipmentId?: number;
  equipmentName?: string | null;
  /** @format int64 */
  equipmentParamId?: number;
  equipmentParamName?: string | null;
  /** @format int64 */
  id?: number;
  prealarmInfo?: string | null;
  /** @format int32 */
  sday?: number;
  /** @format int32 */
  shour?: number;
  /** @format int32 */
  smonth?: number;
  /** @format date-time */
  startTime?: string;
  /** @format date-time */
  stopTime?: string | null;
  /** @format int32 */
  syear?: number;
  /** @format int64 */
  technicsId?: number;
  technicsName?: string | null;
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsAlarmRecordVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  duration?: number | null;
  /** @format int64 */
  equipmentId?: number;
  equipmentName?: string | null;
  /** @format int64 */
  equipmentParamId?: number;
  equipmentParamName?: string | null;
  /** @format int64 */
  id?: number;
  prealarmInfo?: string | null;
  /** @format int32 */
  sday?: number;
  /** @format int32 */
  shour?: number;
  /** @format int32 */
  smonth?: number;
  /** @format date-time */
  startTime?: string;
  /** @format date-time */
  stopTime?: string | null;
  /** @format int32 */
  syear?: number;
  /** @format int64 */
  technicsId?: number;
  technicsName?: string | null;
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsFleetFO {
  /**
   * 编码
   * @minLength 1
   */
  code: string;
  /** @format int64 */
  id?: number | null;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  remark?: string | null;
}

export interface EsFleetPQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsFleetQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsFleetVO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsGarbageCategoryPQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsGarbageCategoryQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsGarbageCategoryVO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsGarbageTypePQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** 所属类别 */
  garbageCategoryCode?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsGarbageTypeQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 所属类别 */
  garbageCategoryCode?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsGarbageTypeVO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 所属类别 */
  garbageCategoryCode?: string | null;
  /** 垃圾类别名称 */
  garbageCategoryName?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsGpsAlarmRecordFO {
  /**
   * 报警结束状态1
   * @format int32
   */
  es1?: number | null;
  /**
   * 报警结束状态2
   * @format int32
   */
  es2?: number | null;
  /**
   * 报警参数1
   * @format int32
   */
  p1?: number | null;
  /**
   * 报警参数2
   * @format int32
   */
  p2?: number | null;
  /**
   * 报警参数3
   * @format int32
   */
  p3?: number | null;
  /**
   * 报警参数4
   * @format int32
   */
  p4?: number | null;
  /**
   * 报警开始状态1
   * @format int32
   */
  ss1?: number | null;
  /**
   * 报警开始状态2
   * @format int32
   */
  ss2?: number | null;
  /**
   * 报警类型
   * @format int32
   */
  atp?: number | null;
  /** 报警类型描述 */
  atpStr?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 更新时间 */
  createtime?: string | null;
  /** 报警描述 */
  desc?: string | null;
  /** 设备号 */
  did?: string | null;
  /** 报警结束纬度 */
  elat?: string | null;
  /**
   * 报警结束里程,单位: 米。
   * @format int64
   */
  elc?: number | null;
  /** 报警结束经度 */
  elng?: string | null;
  /** 报警结束纬度,经过转换后的经度 */
  emlat?: string | null;
  /** 报警结束经度,经过转换后的经度 */
  emlng?: string | null;
  /** 报警结束地理位置,解析后的地理位置 */
  eps?: string | null;
  /**
   * 报警结束速度,单位: km/h，使用中需先除以10。
   * @format int32
   */
  esp?: number | null;
  /**
   * 报警结束时间(UTC) 秒数
   * @format int64
   */
  etm?: number | null;
  /**
   * 报警结束时间
   * @format date-time
   */
  etmDt?: string | null;
  /** 报警唯一编号 */
  guid?: string | null;
  /**
   * 处理状态,1表示已处理，0表示未处理
   * @format int32
   */
  hd?: number | null;
  /** 处理时间 */
  hdt?: string | null;
  /**
   * 处理用户id
   * @format int64
   */
  hdu?: number | null;
  /** @format int64 */
  id?: number;
  /** 图片信息,用;分隔，为http地址路径，可以为多个图片信息。 */
  img?: string | null;
  /**
   * 报警信息
   * @format int32
   */
  info?: number | null;
  /** 报警开始纬度 */
  slat?: string | null;
  /**
   * 报警开始里程,单位: 米。
   * @format int64
   */
  slc?: number | null;
  /** 报警开始经度 */
  slng?: string | null;
  /** 报警开始纬度,经过转换后的经度 */
  smlat?: string | null;
  /** 报警开始经度,经过转换后的经度 */
  smlng?: string | null;
  /** 报警开始地理位置,解析后的地理位置 */
  sps?: string | null;
  /**
   * 报警开始速度,单位: km/h，使用中需先除以10。
   * @format int32
   */
  ssp?: number | null;
  /**
   * 报警开始时间(UTC) 秒数
   * @format int64
   */
  stm?: number | null;
  /**
   * 报警开始时间
   * @format date-time
   */
  stmDt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 车牌号 */
  vid?: string | null;
}

export interface EsGpsAlarmRecordFileFO {
  /** @format int32 */
  alarmParam?: number | null;
  alarmType?: string | null;
  /** @format int32 */
  channel?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  devIdno?: string | null;
  fileETime?: string | null;
  /** @format int64 */
  fileOffset?: number | null;
  fileSTime?: string | null;
  /** @format int64 */
  fileSize?: number | null;
  /** @format int64 */
  fileTime?: number | null;
  fileUrl?: string | null;
  /** @format int64 */
  id?: number;
  /** @format int64 */
  jingDu?: number | null;
  label?: string | null;
  /** @format int32 */
  mediaType?: number;
  position?: string | null;
  /** @format int32 */
  status?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  vehiIdno?: string | null;
  videoFile?: string | null;
  /** @format int64 */
  weiDu?: number | null;
}

export interface EsGpsAlarmRecordFilePQO {
  /** @format int32 */
  alarmParam?: number | null;
  alarmType?: string | null;
  /** @format int32 */
  channel?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  devIdno?: string | null;
  /** 排序字段 */
  field?: string | null;
  fileETime?: string | null;
  /** @format int64 */
  fileOffset?: number | null;
  fileSTime?: string | null;
  /** @format int64 */
  fileSize?: number | null;
  /** @format int64 */
  fileTime?: number | null;
  fileUrl?: string | null;
  /** @format int64 */
  id?: number;
  /** @format int64 */
  jingDu?: number | null;
  label?: string | null;
  /** @format int32 */
  mediaType?: number;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  position?: string | null;
  /** @format int32 */
  status?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  vehiIdno?: string | null;
  videoFile?: string | null;
  /** @format int64 */
  weiDu?: number | null;
}

export interface EsGpsAlarmRecordFileQO {
  /** @format int32 */
  alarmParam?: number | null;
  alarmType?: string | null;
  /** @format int32 */
  channel?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  devIdno?: string | null;
  fileETime?: string | null;
  /** @format int64 */
  fileOffset?: number | null;
  fileSTime?: string | null;
  /** @format int64 */
  fileSize?: number | null;
  /** @format int64 */
  fileTime?: number | null;
  fileUrl?: string | null;
  /** @format int64 */
  id?: number;
  /** @format int64 */
  jingDu?: number | null;
  label?: string | null;
  /** @format int32 */
  mediaType?: number;
  position?: string | null;
  /** @format int32 */
  status?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  vehiIdno?: string | null;
  videoFile?: string | null;
  /** @format int64 */
  weiDu?: number | null;
}

export interface EsGpsAlarmRecordFileVO {
  /** @format int32 */
  alarmParam?: number | null;
  alarmType?: string | null;
  /** @format int32 */
  channel?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  devIdno?: string | null;
  fileETime?: string | null;
  /** @format int64 */
  fileOffset?: number | null;
  fileSTime?: string | null;
  /** @format int64 */
  fileSize?: number | null;
  /** @format int64 */
  fileTime?: number | null;
  fileUrl?: string | null;
  /** @format int64 */
  id?: number;
  /** @format int64 */
  jingDu?: number | null;
  label?: string | null;
  /** @format int32 */
  mediaType?: number;
  position?: string | null;
  /** @format int32 */
  status?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  vehiIdno?: string | null;
  videoFile?: string | null;
  /** @format int64 */
  weiDu?: number | null;
}

export interface EsGpsAlarmRecordPQO {
  /**
   * 报警结束状态1
   * @format int32
   */
  es1?: number | null;
  /**
   * 报警结束状态2
   * @format int32
   */
  es2?: number | null;
  /**
   * 报警参数1
   * @format int32
   */
  p1?: number | null;
  /**
   * 报警参数2
   * @format int32
   */
  p2?: number | null;
  /**
   * 报警参数3
   * @format int32
   */
  p3?: number | null;
  /**
   * 报警参数4
   * @format int32
   */
  p4?: number | null;
  /**
   * 报警开始状态1
   * @format int32
   */
  ss1?: number | null;
  /**
   * 报警开始状态2
   * @format int32
   */
  ss2?: number | null;
  /**
   * 报警类型
   * @format int32
   */
  atp?: number | null;
  /** 报警类型描述 */
  atpStr?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 更新时间 */
  createtime?: string | null;
  /** 报警描述 */
  desc?: string | null;
  /** 设备号 */
  did?: string | null;
  /** 报警结束纬度 */
  elat?: string | null;
  /**
   * 报警结束里程,单位: 米。
   * @format int64
   */
  elc?: number | null;
  /** 报警结束经度 */
  elng?: string | null;
  /** 报警结束纬度,经过转换后的经度 */
  emlat?: string | null;
  /** 报警结束经度,经过转换后的经度 */
  emlng?: string | null;
  /**
   * 时间段查询条件，用于前端传入的时间段筛选。
   * @format date-time
   */
  endTime?: string | null;
  /** 报警结束地理位置,解析后的地理位置 */
  eps?: string | null;
  /**
   * 报警结束速度,单位: km/h，使用中需先除以10。
   * @format int32
   */
  esp?: number | null;
  /**
   * 报警结束时间(UTC) 秒数
   * @format int64
   */
  etm?: number | null;
  /**
   * 报警结束时间
   * @format date-time
   */
  etmDt?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** 报警唯一编号 */
  guid?: string | null;
  /**
   * 处理状态,1表示已处理，0表示未处理
   * @format int32
   */
  hd?: number | null;
  /** 处理时间 */
  hdt?: string | null;
  /**
   * 处理用户id
   * @format int64
   */
  hdu?: number | null;
  /** @format int64 */
  id?: number;
  /** 图片信息,用;分隔，为http地址路径，可以为多个图片信息。 */
  img?: string | null;
  /**
   * 报警信息
   * @format int32
   */
  info?: number | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 报警开始纬度 */
  slat?: string | null;
  /**
   * 报警开始里程,单位: 米。
   * @format int64
   */
  slc?: number | null;
  /** 报警开始经度 */
  slng?: string | null;
  /** 报警开始纬度,经过转换后的经度 */
  smlat?: string | null;
  /** 报警开始经度,经过转换后的经度 */
  smlng?: string | null;
  /** 报警开始地理位置,解析后的地理位置 */
  sps?: string | null;
  /**
   * 报警开始速度,单位: km/h，使用中需先除以10。
   * @format int32
   */
  ssp?: number | null;
  /**
   * 时间段查询条件，用于前端传入的时间段筛选。
   * @format date-time
   */
  startTime?: string | null;
  /**
   * 报警开始时间(UTC) 秒数
   * @format int64
   */
  stm?: number | null;
  /**
   * 报警开始时间
   * @format date-time
   */
  stmDt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 车牌号 */
  vid?: string | null;
}

export interface EsGpsAlarmRecordQO {
  /**
   * 报警结束状态1
   * @format int32
   */
  es1?: number | null;
  /**
   * 报警结束状态2
   * @format int32
   */
  es2?: number | null;
  /**
   * 报警参数1
   * @format int32
   */
  p1?: number | null;
  /**
   * 报警参数2
   * @format int32
   */
  p2?: number | null;
  /**
   * 报警参数3
   * @format int32
   */
  p3?: number | null;
  /**
   * 报警参数4
   * @format int32
   */
  p4?: number | null;
  /**
   * 报警开始状态1
   * @format int32
   */
  ss1?: number | null;
  /**
   * 报警开始状态2
   * @format int32
   */
  ss2?: number | null;
  /**
   * 报警类型
   * @format int32
   */
  atp?: number | null;
  /** 报警类型描述 */
  atpStr?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 更新时间 */
  createtime?: string | null;
  /** 报警描述 */
  desc?: string | null;
  /** 设备号 */
  did?: string | null;
  /** 报警结束纬度 */
  elat?: string | null;
  /**
   * 报警结束里程,单位: 米。
   * @format int64
   */
  elc?: number | null;
  /** 报警结束经度 */
  elng?: string | null;
  /** 报警结束纬度,经过转换后的经度 */
  emlat?: string | null;
  /** 报警结束经度,经过转换后的经度 */
  emlng?: string | null;
  /**
   * 时间段查询条件，用于前端传入的时间段筛选。
   * @format date-time
   */
  endTime?: string | null;
  /** 报警结束地理位置,解析后的地理位置 */
  eps?: string | null;
  /**
   * 报警结束速度,单位: km/h，使用中需先除以10。
   * @format int32
   */
  esp?: number | null;
  /**
   * 报警结束时间(UTC) 秒数
   * @format int64
   */
  etm?: number | null;
  /**
   * 报警结束时间
   * @format date-time
   */
  etmDt?: string | null;
  /** 报警唯一编号 */
  guid?: string | null;
  /**
   * 处理状态,1表示已处理，0表示未处理
   * @format int32
   */
  hd?: number | null;
  /** 处理时间 */
  hdt?: string | null;
  /**
   * 处理用户id
   * @format int64
   */
  hdu?: number | null;
  /** @format int64 */
  id?: number;
  /** 图片信息,用;分隔，为http地址路径，可以为多个图片信息。 */
  img?: string | null;
  /**
   * 报警信息
   * @format int32
   */
  info?: number | null;
  /** 报警开始纬度 */
  slat?: string | null;
  /**
   * 报警开始里程,单位: 米。
   * @format int64
   */
  slc?: number | null;
  /** 报警开始经度 */
  slng?: string | null;
  /** 报警开始纬度,经过转换后的经度 */
  smlat?: string | null;
  /** 报警开始经度,经过转换后的经度 */
  smlng?: string | null;
  /** 报警开始地理位置,解析后的地理位置 */
  sps?: string | null;
  /**
   * 报警开始速度,单位: km/h，使用中需先除以10。
   * @format int32
   */
  ssp?: number | null;
  /**
   * 时间段查询条件，用于前端传入的时间段筛选。
   * @format date-time
   */
  startTime?: string | null;
  /**
   * 报警开始时间(UTC) 秒数
   * @format int64
   */
  stm?: number | null;
  /**
   * 报警开始时间
   * @format date-time
   */
  stmDt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 车牌号 */
  vid?: string | null;
}

export interface EsGpsAlarmRecordVO {
  /**
   * 报警结束状态1
   * @format int32
   */
  es1?: number | null;
  /**
   * 报警结束状态2
   * @format int32
   */
  es2?: number | null;
  /**
   * 报警参数1
   * @format int32
   */
  p1?: number | null;
  /**
   * 报警参数2
   * @format int32
   */
  p2?: number | null;
  /**
   * 报警参数3
   * @format int32
   */
  p3?: number | null;
  /**
   * 报警参数4
   * @format int32
   */
  p4?: number | null;
  /**
   * 报警开始状态1
   * @format int32
   */
  ss1?: number | null;
  /**
   * 报警开始状态2
   * @format int32
   */
  ss2?: number | null;
  /**
   * 报警类型
   * @format int32
   */
  atp?: number | null;
  /** 报警类型描述 */
  atpStr?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 更新时间 */
  createtime?: string | null;
  /** 报警描述 */
  desc?: string | null;
  /** 设备号 */
  did?: string | null;
  /** 报警结束纬度 */
  elat?: string | null;
  /**
   * 报警结束里程,单位: 米。
   * @format int64
   */
  elc?: number | null;
  /** 报警结束经度 */
  elng?: string | null;
  /** 报警结束纬度,经过转换后的经度 */
  emlat?: string | null;
  /** 报警结束经度,经过转换后的经度 */
  emlng?: string | null;
  /** 报警结束地理位置,解析后的地理位置 */
  eps?: string | null;
  /**
   * 报警结束速度,单位: km/h，使用中需先除以10。
   * @format int32
   */
  esp?: number | null;
  /**
   * 报警结束时间(UTC) 秒数
   * @format int64
   */
  etm?: number | null;
  /**
   * 报警结束时间
   * @format date-time
   */
  etmDt?: string | null;
  /** 报警唯一编号 */
  guid?: string | null;
  /**
   * 处理状态,1表示已处理，0表示未处理
   * @format int32
   */
  hd?: number | null;
  /** 处理时间 */
  hdt?: string | null;
  /**
   * 处理用户id
   * @format int64
   */
  hdu?: number | null;
  /** @format int64 */
  id?: number;
  /** 图片信息,用;分隔，为http地址路径，可以为多个图片信息。 */
  img?: string | null;
  /**
   * 报警信息
   * @format int32
   */
  info?: number | null;
  /** 图片地址 */
  picUrl?: string[] | null;
  /** 报警开始纬度 */
  slat?: string | null;
  /**
   * 报警开始里程,单位: 米。
   * @format int64
   */
  slc?: number | null;
  /** 报警开始经度 */
  slng?: string | null;
  /** 报警开始纬度,经过转换后的经度 */
  smlat?: string | null;
  /** 报警开始经度,经过转换后的经度 */
  smlng?: string | null;
  /** 报警开始地理位置,解析后的地理位置 */
  sps?: string | null;
  /**
   * 报警开始速度,单位: km/h，使用中需先除以10。
   * @format int32
   */
  ssp?: number | null;
  /**
   * 报警开始时间(UTC) 秒数
   * @format int64
   */
  stm?: number | null;
  /**
   * 报警开始时间
   * @format date-time
   */
  stmDt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 视频地址 */
  vedioUrl?: string[] | null;
  /** 车牌号 */
  vid?: string | null;
}

export interface EsSanitationFacilityFO {
  /** 地址 */
  address?: string | null;
  /** @format int64 */
  id?: number | null;
  /** 是否重点关注 */
  isFollow: boolean;
  /** 是否地图显示 */
  isMapDisplay: boolean;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /**
   * 责任部门
   * @format int64
   */
  organizationId: number;
  /**
   * 车辆停靠半径(m)
   * @format double
   */
  parkRadius?: number | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 类型
   * @minLength 1
   */
  typeCode: string;
}

export interface EsSanitationFacilityPQO {
  /** 地址 */
  address?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否重点关注 */
  isFollow?: boolean | null;
  /** 是否地图显示 */
  isMapDisplay?: boolean | null;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /** 名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /**
   * 责任部门
   * @format int64
   */
  organizationId?: number | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /**
   * 车辆停靠半径(m)
   * @format double
   */
  parkRadius?: number | null;
  /** 备注 */
  remark?: string | null;
  /** 类型 */
  typeCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsSanitationFacilityQO {
  /** 地址 */
  address?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否重点关注 */
  isFollow?: boolean | null;
  /** 是否地图显示 */
  isMapDisplay?: boolean | null;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /** 名称 */
  name?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /**
   * 责任部门
   * @format int64
   */
  organizationId?: number | null;
  /**
   * 车辆停靠半径(m)
   * @format double
   */
  parkRadius?: number | null;
  /** 备注 */
  remark?: string | null;
  /** 类型 */
  typeCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsSanitationFacilityTypeFO {
  /**
   * 编码
   * @minLength 1
   */
  code: string;
  /** @format int64 */
  id?: number | null;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /** 备注 */
  remark?: string | null;
}

export interface EsSanitationFacilityTypePQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsSanitationFacilityTypeQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsSanitationFacilityTypeVO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsSanitationFacilityVO {
  /** 地址 */
  address?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否重点关注 */
  isFollow?: boolean | null;
  /** 是否地图显示 */
  isMapDisplay?: boolean | null;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /** 名称 */
  name?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /**
   * 责任部门
   * @format int64
   */
  organizationId?: number | null;
  /** 责任单位 */
  readonly organizationName?: string | null;
  /**
   * 车辆停靠半径(m)
   * @format double
   */
  parkRadius?: number | null;
  /** 备注 */
  remark?: string | null;
  /** 类型 */
  typeCode?: string | null;
  /** 类型 */
  readonly typeName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsShipFO {
  /**
   * 编码
   * @minLength 1
   */
  code: string;
  /** @format int64 */
  id?: number | null;
  /** 是否在地图显示 */
  isDisplay?: boolean | null;
  /**
   * 管理部门
   * @format int64
   */
  organizationId: number;
  /** 备注 */
  remark?: string | null;
  /**
   * 船只状态
   * @minLength 1
   */
  shipStateCode: string;
  /** 设备号 */
  terminalCode?: string | null;
}

export interface EsShipPQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否在地图显示 */
  isDisplay?: boolean | null;
  /** 是否安装设备 */
  isExistEquipment?: boolean | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 管理部门
   * @format int64
   */
  organizationId?: number | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 备注 */
  remark?: string | null;
  /** 船只状态 */
  shipStateCode?: string | null;
  /** 设备号 */
  terminalCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsShipQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否在地图显示 */
  isDisplay?: boolean | null;
  /** 是否安装设备 */
  isExistEquipment?: boolean | null;
  /**
   * 管理部门
   * @format int64
   */
  organizationId?: number | null;
  /** 备注 */
  remark?: string | null;
  /** 船只状态 */
  shipStateCode?: string | null;
  /** 设备号 */
  terminalCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsShipRealtimeFO {
  /**
   * 音频类型
   * @format int32
   */
  acType?: number | null;
  /**
   * 报警状态（0-未报警，1-报警中）
   * @format int32
   */
  alarmState?: number | null;
  /**
   * 方向，正北方向为0度，顺时针方向增大，最大值360度
   * @format int32
   */
  angle?: number | null;
  /**
   * 网络类型，0表示3G，1表示WIFI，2表示有线，3表示4G，4表示5G
   * @format int32
   */
  connetNet?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 磁盘类型（1-SD卡，2-硬盘，3-SSD卡）
   * @format int32
   */
  diskType?: number | null;
  /**
   * 里程(米)
   * @format int32
   */
  driverDistance?: number | null;
  /**
   * GPS定位状态（0为无效,1为有效）
   * @format int32
   */
  gpsState?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * 原始坐标纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 原始坐标经度
   * @format double
   */
  longitude?: number | null;
  /**
   * 发动机状态（0-停止，1-工作）
   * @format int32
   */
  motoState?: number | null;
  /**
   * 在线状态（0-离线，1-在线）
   * @format int32
   */
  onlineState?: number | null;
  /**
   * 停车时长(秒)
   * @format int32
   */
  parkingDuration?: number | null;
  /**
   * 刷新时间
   * @format date-time
   */
  refreshTime?: string | null;
  /** 船只编码 */
  shipCode?: string | null;
  /**
   * 速度，单位: km/h
   * @format double
   */
  speed?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsShipRealtimePQO {
  /**
   * 音频类型
   * @format int32
   */
  acType?: number | null;
  /**
   * 报警状态（0-未报警，1-报警中）
   * @format int32
   */
  alarmState?: number | null;
  /**
   * 方向，正北方向为0度，顺时针方向增大，最大值360度
   * @format int32
   */
  angle?: number | null;
  /**
   * 网络类型，0表示3G，1表示WIFI，2表示有线，3表示4G，4表示5G
   * @format int32
   */
  connetNet?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 磁盘类型（1-SD卡，2-硬盘，3-SSD卡）
   * @format int32
   */
  diskType?: number | null;
  /**
   * 里程(米)
   * @format int32
   */
  driverDistance?: number | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * GPS定位状态（0为无效,1为有效）
   * @format int32
   */
  gpsState?: number | null;
  /** @format int64 */
  id?: number;
  /** 是否在地图显示 */
  isDisplay?: boolean | null;
  /** 是否安装设备 */
  isExistEquipment?: boolean | null;
  /**
   * 原始坐标纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 原始坐标经度
   * @format double
   */
  longitude?: number | null;
  /**
   * 发动机状态（0-停止，1-工作）
   * @format int32
   */
  motoState?: number | null;
  /**
   * 在线状态（0-离线，1-在线）
   * @format int32
   */
  onlineState?: number | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /**
   * 停车时长(秒)
   * @format int32
   */
  parkingDuration?: number | null;
  /**
   * 刷新时间
   * @format date-time
   */
  refreshTime?: string | null;
  /** 船只编码 */
  shipCode?: string | null;
  /** 船只状态 */
  shipStateCode?: string | null;
  /**
   * 速度，单位: km/h
   * @format double
   */
  speed?: number | null;
  /** 设备号 */
  terminalCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsShipRealtimeQO {
  /**
   * 音频类型
   * @format int32
   */
  acType?: number | null;
  /**
   * 报警状态（0-未报警，1-报警中）
   * @format int32
   */
  alarmState?: number | null;
  /**
   * 方向，正北方向为0度，顺时针方向增大，最大值360度
   * @format int32
   */
  angle?: number | null;
  /**
   * 网络类型，0表示3G，1表示WIFI，2表示有线，3表示4G，4表示5G
   * @format int32
   */
  connetNet?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 磁盘类型（1-SD卡，2-硬盘，3-SSD卡）
   * @format int32
   */
  diskType?: number | null;
  /**
   * 里程(米)
   * @format int32
   */
  driverDistance?: number | null;
  /**
   * GPS定位状态（0为无效,1为有效）
   * @format int32
   */
  gpsState?: number | null;
  /** @format int64 */
  id?: number;
  /** 是否在地图显示 */
  isDisplay?: boolean | null;
  /** 是否安装设备 */
  isExistEquipment?: boolean | null;
  /**
   * 原始坐标纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 原始坐标经度
   * @format double
   */
  longitude?: number | null;
  /**
   * 发动机状态（0-停止，1-工作）
   * @format int32
   */
  motoState?: number | null;
  /**
   * 在线状态（0-离线，1-在线）
   * @format int32
   */
  onlineState?: number | null;
  /**
   * 停车时长(秒)
   * @format int32
   */
  parkingDuration?: number | null;
  /**
   * 刷新时间
   * @format date-time
   */
  refreshTime?: string | null;
  /** 船只编码 */
  shipCode?: string | null;
  /** 船只状态 */
  shipStateCode?: string | null;
  /**
   * 速度，单位: km/h
   * @format double
   */
  speed?: number | null;
  /** 设备号 */
  terminalCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsShipRealtimeVO {
  /**
   * 音频类型
   * @format int32
   */
  acType?: number | null;
  /**
   * 报警状态（0-未报警，1-报警中）
   * @format int32
   */
  alarmState?: number | null;
  /**
   * 方向，正北方向为0度，顺时针方向增大，最大值360度
   * @format int32
   */
  angle?: number | null;
  /**
   * 网络类型，0表示3G，1表示WIFI，2表示有线，3表示4G，4表示5G
   * @format int32
   */
  connetNet?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 磁盘类型（1-SD卡，2-硬盘，3-SSD卡）
   * @format int32
   */
  diskType?: number | null;
  /**
   * 里程(米)
   * @format int32
   */
  driverDistance?: number | null;
  /**
   * GPS定位状态（0为无效,1为有效）
   * @format int32
   */
  gpsState?: number | null;
  /** @format int64 */
  id?: number;
  /** 是否在地图显示 */
  isDisplay?: boolean | null;
  /**
   * 原始坐标纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 原始坐标经度
   * @format double
   */
  longitude?: number | null;
  /**
   * 发动机状态（0-停止，1-工作）
   * @format int32
   */
  motoState?: number | null;
  /**
   * 在线状态（0-离线，1-在线）
   * @format int32
   */
  onlineState?: number | null;
  /**
   * 停车时长(秒)
   * @format int32
   */
  parkingDuration?: number | null;
  /**
   * 刷新时间
   * @format date-time
   */
  refreshTime?: string | null;
  /** 船只编码 */
  shipCode?: string | null;
  /** 船只状态 */
  shipStateName?: string | null;
  /**
   * 速度，单位: km/h
   * @format double
   */
  speed?: number | null;
  /** 设备号 */
  terminalCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsShipVO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否在地图显示 */
  isDisplay?: boolean | null;
  /**
   * 管理部门
   * @format int64
   */
  organizationId?: number | null;
  /** 管理单位 */
  organizationName?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 船只状态 */
  shipStateCode?: string | null;
  /** 船只状态 */
  shipStateName?: string | null;
  /** 设备号 */
  terminalCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsVehicleCountByTypeVO {
  /**
   * 数量
   * @format int32
   */
  count?: number;
  /** 车辆类型 */
  type?: string | null;
}

export interface EsVehicleDpRecordFO {
  /**
   * 调动时间
   * @format date-time
   */
  dispatchTime: string;
  /** @format int64 */
  id?: number | null;
  /**
   * 纬度
   * @format double
   */
  latitude: number;
  /**
   * 车牌号
   * @minLength 1
   */
  licence: string;
  /**
   * 经度
   * @format double
   */
  longitude: number;
  /** 备注 */
  remark?: string | null;
}

export interface EsVehicleDpRecordPQO {
  /** 地址 */
  address?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 调动时间
   * @format date-time
   */
  dispatchTime?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /** 车牌号 */
  licence?: string | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 驾驶员
   * @format int64
   */
  userId?: number | null;
}

export interface EsVehicleDpRecordQO {
  /** 地址 */
  address?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 调动时间
   * @format date-time
   */
  dispatchTime?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /** 车牌号 */
  licence?: string | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 驾驶员
   * @format int64
   */
  userId?: number | null;
}

export interface EsVehicleDpRecordVO {
  /** 地址 */
  address?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 调动时间
   * @format date-time
   */
  dispatchTime?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /** 车牌号 */
  licence?: string | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 驾驶员
   * @format int64
   */
  userId?: number | null;
  /** 驾驶员姓名 */
  readonly userName?: string | null;
}

export interface EsVehicleFO {
  /**
   * 驾驶员
   * @format int64
   */
  driverId: number;
  /** 所属车队 */
  fleetCode?: string | null;
  /** @format int64 */
  id?: number | null;
  /** 是否在地图显示 */
  isDisplay?: boolean | null;
  /**
   * 车牌号
   * @minLength 1
   */
  licence: string;
  /**
   * 管理部门
   * @format int64
   */
  organizationId: number;
  /** 备注 */
  remark?: string | null;
  /** 终端号 */
  terminalCode?: string | null;
  /**
   * 车辆状态
   * @minLength 1
   */
  vehicleStateCode: string;
  /**
   * 车辆皮重(kg)
   * @format int32
   */
  vehicleTareWeight?: number | null;
  /**
   * 车辆类型
   * @minLength 1
   */
  vehicleTypeCode: string;
}

export interface EsVehicleLcRecordFO {
  /**
   * 数据时间(天)
   * @format date-time
   */
  dataTime: string;
  /**
   * 总里程(m)
   * @format double
   */
  dataValue: number;
  /**
   * 结束里程(m)
   * @format double
   */
  etValue: number;
  /**
   * 结束里程时间
   * @format date-time
   */
  etValueTime: string;
  /** @format int64 */
  id?: number | null;
  /**
   * 车牌号
   * @minLength 1
   */
  licence: string;
  /**
   * 开始里程(m)
   * @format double
   */
  stValue: number;
  /**
   * 开始里程时间
   * @format date-time
   */
  stValueTime: string;
}

export interface EsVehicleLcRecordPQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据时间(天)
   * @format date-time
   */
  dataTime?: string | null;
  /**
   * 总里程(米)
   * @format int64
   */
  dataValue?: number | null;
  /** 结束地址 */
  etAddress?: string | null;
  /**
   * 结束纬度
   * @format double
   */
  etLatitude?: number | null;
  /**
   * 结束经度
   * @format double
   */
  etLongitude?: number | null;
  /**
   * 结束里程(米)
   * @format int64
   */
  etValue?: number | null;
  /**
   * 结束里程时间
   * @format date-time
   */
  etValueTime?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 车牌号 */
  licence?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 开始地址 */
  stAddress?: string | null;
  /**
   * 开始纬度
   * @format double
   */
  stLatitude?: number | null;
  /**
   * 开始经度
   * @format double
   */
  stLongitude?: number | null;
  /**
   * 开始里程(米)
   * @format int64
   */
  stValue?: number | null;
  /**
   * 开始里程时间
   * @format date-time
   */
  stValueTime?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsVehicleLcRecordQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据时间(天)
   * @format date-time
   */
  dataTime?: string | null;
  /**
   * 总里程(米)
   * @format int64
   */
  dataValue?: number | null;
  /** 结束地址 */
  etAddress?: string | null;
  /**
   * 结束纬度
   * @format double
   */
  etLatitude?: number | null;
  /**
   * 结束经度
   * @format double
   */
  etLongitude?: number | null;
  /**
   * 结束里程(米)
   * @format int64
   */
  etValue?: number | null;
  /**
   * 结束里程时间
   * @format date-time
   */
  etValueTime?: string | null;
  /** @format int64 */
  id?: number;
  /** 车牌号 */
  licence?: string | null;
  /** 开始地址 */
  stAddress?: string | null;
  /**
   * 开始纬度
   * @format double
   */
  stLatitude?: number | null;
  /**
   * 开始经度
   * @format double
   */
  stLongitude?: number | null;
  /**
   * 开始里程(米)
   * @format int64
   */
  stValue?: number | null;
  /**
   * 开始里程时间
   * @format date-time
   */
  stValueTime?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsVehicleLcRecordStQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime: string;
  /** 车牌号 */
  licence?: string | null;
}

export interface EsVehicleLcRecordVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据时间(天)
   * @format date-time
   */
  dataTime?: string | null;
  /**
   * 总里程(米)
   * @format int64
   */
  dataValue?: number | null;
  /** 结束地址 */
  etAddress?: string | null;
  /**
   * 结束纬度
   * @format double
   */
  etLatitude?: number | null;
  /**
   * 结束经度
   * @format double
   */
  etLongitude?: number | null;
  /**
   * 结束里程(米)
   * @format int64
   */
  etValue?: number | null;
  /**
   * 结束里程时间
   * @format date-time
   */
  etValueTime?: string | null;
  /** @format int64 */
  id?: number;
  /** 车牌号 */
  licence?: string | null;
  /** 开始地址 */
  stAddress?: string | null;
  /**
   * 开始纬度
   * @format double
   */
  stLatitude?: number | null;
  /**
   * 开始经度
   * @format double
   */
  stLongitude?: number | null;
  /**
   * 开始里程(米)
   * @format int64
   */
  stValue?: number | null;
  /**
   * 开始里程时间
   * @format date-time
   */
  stValueTime?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsVehiclePQO {
  /** 驾驶员姓名 */
  driverName?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** 所属车队 */
  fleetCode?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否在地图显示 */
  isDisplay?: boolean | null;
  /** 是否安装设备 */
  isExistEquipment?: boolean | null;
  /** 车牌号 */
  licence?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 设备号 */
  terminalCode?: string | null;
  /** 车辆状态 */
  vehicleStateCode?: string | null;
  /** 车辆类型 */
  vehicleTypeCode?: string | null;
}

export interface EsVehicleQO {
  /** 驾驶员姓名 */
  driverName?: string | null;
  /** 所属车队 */
  fleetCode?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否在地图显示 */
  isDisplay?: boolean | null;
  /** 是否安装设备 */
  isExistEquipment?: boolean | null;
  /** 车牌号 */
  licence?: string | null;
  /** 设备号 */
  terminalCode?: string | null;
  /** 车辆状态 */
  vehicleStateCode?: string | null;
  /** 车辆类型 */
  vehicleTypeCode?: string | null;
}

export interface EsVehicleRealtimeFO {
  /**
   * 音频类型
   * @format int32
   */
  acType?: number | null;
  /**
   * 报警状态（0-未报警，1-报警中）
   * @format int32
   */
  alarmState?: number | null;
  /**
   * 方向，正北方向为0度，顺时针方向增大，最大值360度
   * @format int32
   */
  angle?: number | null;
  /**
   * 网络类型，0表示3G，1表示WIFI，2表示有线，3表示4G，4表示5G
   * @format int32
   */
  connetNet?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 磁盘类型（1-SD卡，2-硬盘，3-SSD卡）
   * @format int32
   */
  diskType?: number | null;
  /**
   * 里程(米)
   * @format int32
   */
  driverDistance?: number | null;
  /**
   * GPS定位状态（0为无效,1为有效）
   * @format int32
   */
  gpsState?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * 原始坐标纬度
   * @format double
   */
  latitude?: number | null;
  /** 车牌号 */
  licence?: string | null;
  /**
   * 原始坐标经度
   * @format double
   */
  longitude?: number | null;
  /**
   * 发动机状态(acc状态)（0-停止，1-工作）
   * @format int32
   */
  motoState?: number | null;
  /**
   * 在线状态（0-离线，1-在线）
   * @format int32
   */
  onlineState?: number | null;
  /**
   * 停车时长(秒)
   * @format int32
   */
  parkingDuration?: number | null;
  /**
   * 刷新时间
   * @format date-time
   */
  refreshTime?: string | null;
  /**
   * 速度，单位: km/h
   * @format double
   */
  speed?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsVehicleRealtimePQO {
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否在地图显示 */
  isDisplay?: boolean | null;
  /** 是否安装设备 */
  isExistEquipment?: boolean | null;
  /** 车牌号 */
  licence?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 设备号 */
  terminalCode?: string | null;
  /**
   * 车辆id
   * @format int64
   */
  vehicleId?: number;
  /** 车辆类型 */
  vehicleTypeCode?: string | null;
}

export interface EsVehicleRealtimeQO {
  /** @format int64 */
  id?: number;
  /** 是否在地图显示 */
  isDisplay?: boolean | null;
  /** 是否安装设备 */
  isExistEquipment?: boolean | null;
  /** 车牌号 */
  licence?: string | null;
  /** 设备号 */
  terminalCode?: string | null;
  /**
   * 车辆id
   * @format int64
   */
  vehicleId?: number;
  /** 车辆类型 */
  vehicleTypeCode?: string | null;
}

export interface EsVehicleRealtimeVO {
  /**
   * 音频类型
   * @format int32
   */
  acType?: number | null;
  /**
   * 报警状态（0-未报警，1-报警中）
   * @format int32
   */
  alarmState?: number | null;
  /**
   * 方向，正北方向为0度，顺时针方向增大，最大值360度
   * @format int32
   */
  angle?: number | null;
  /**
   * 网络类型，0表示3G，1表示WIFI，2表示有线，3表示4G，4表示5G
   * @format int32
   */
  connetNet?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 磁盘类型（1-SD卡，2-硬盘，3-SSD卡）
   * @format int32
   */
  diskType?: number | null;
  /**
   * 里程(米)
   * @format int32
   */
  driverDistance?: number | null;
  /**
   * GPS定位状态（0为无效,1为有效）
   * @format int32
   */
  gpsState?: number | null;
  /** @format int64 */
  id?: number;
  /** 是否在地图显示 */
  isDisplay?: boolean;
  /**
   * 原始坐标纬度
   * @format double
   */
  latitude?: number | null;
  /** 车牌号 */
  licence?: string | null;
  /**
   * 原始坐标经度
   * @format double
   */
  longitude?: number | null;
  /**
   * 发动机状态(acc状态)（0-停止，1-工作）
   * @format int32
   */
  motoState?: number | null;
  /**
   * 在线状态（0-离线，1-在线）
   * @format int32
   */
  onlineState?: number | null;
  /**
   * 停车时长(秒)
   * @format int32
   */
  parkingDuration?: number | null;
  /**
   * 刷新时间
   * @format date-time
   */
  refreshTime?: string | null;
  /**
   * 速度，单位: km/h
   * @format double
   */
  speed?: number | null;
  /** 设备号 */
  terminalCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 车辆类型 */
  vehicleTypeCode?: string | null;
  /** 车辆类型 */
  vehicleTypeName?: string | null;
}

/** 车辆轨迹点 */
export interface EsVehicleRecordPoint {
  /**
   * 音频类型
   * @format int32
   */
  acType?: number | null;
  /**
   * 报警状态（0-未报警，1-报警中）
   * @format int32
   */
  alarmState?: number | null;
  /**
   * 方向，正北方向为0度，顺时针方向增大，最大值360度
   * @format int32
   */
  angle?: number | null;
  /**
   * 网络类型，0表示3G，1表示WIFI，2表示有线，3表示4G，4表示5G
   * @format int32
   */
  connetNet?: number | null;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  createdAt?: string | null;
  /**
   * Desc:数据时间
   * Default:
   * Nullable:False
   * @format date-time
   */
  dataTime?: string;
  /**
   * 磁盘类型（1-SD卡，2-硬盘，3-SSD卡）
   * @format int32
   */
  diskType?: number | null;
  /**
   * 里程(米)
   * @format int32
   */
  driverDistance?: number | null;
  /**
   * GPS定位状态（0为无效,1为有效）
   * @format int32
   */
  gpsState?: number | null;
  id?: string | null;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /** 车牌号 */
  licence?: string | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /**
   * 发动机状态(acc状态)（0-停止，1-工作）
   * @format int32
   */
  motoState?: number | null;
  /**
   * 在线状态（0-离线，1-在线）
   * @format int32
   */
  onlineState?: number | null;
  /**
   * 停车时长(秒)
   * @format int32
   */
  parkingDuration?: number | null;
  /**
   * 速度，单位: km/h
   * @format double
   */
  speed?: number | null;
  /** 终端号 */
  terminalCode?: string | null;
}

export interface EsVehicleStateStVO {
  /**
   * 数量
   * @format int32
   */
  count?: number;
  /** 车辆状态 */
  state?: string | null;
}

export interface EsVehicleVO {
  /**
   * 通道数量
   * @format int32
   */
  cc?: number | null;
  /** 通道名称,以','分隔 */
  cn?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
  /**
   * 驾驶员
   * @format int64
   */
  driverId?: number | null;
  /** 驾驶员 */
  driverName?: string | null;
  /** 所属车队 */
  fleetCode?: string | null;
  /** 所属车队 */
  fleetName?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否在地图显示 */
  isDisplay?: boolean;
  /** 车牌号 */
  licence?: string | null;
  /**
   * 管理部门
   * @format int64
   */
  organizationId?: number | null;
  /** 管理单位 */
  organizationName?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 设备号 */
  terminalCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 车辆状态 */
  vehicleStateCode?: string | null;
  /** 车辆状态 */
  vehicleStateName?: string | null;
  /**
   * 车辆皮重
   * @format int32
   */
  vehicleTareWeight?: number | null;
  /** 车辆类型 */
  vehicleTypeCode?: string | null;
  /** 车辆类型 */
  vehicleTypeName?: string | null;
}

export interface EsWeightRecordFO {
  /**
   * 称重时间
   * @format date-time
   */
  dataTime: string;
  /** 设备编号 */
  equipmentCode?: string | null;
  /**
   * 毛重(kg)
   * @format double
   */
  gross?: number | null;
  /** @format int64 */
  id?: number | null;
  /**
   * 进出站标志(1进站2出站)
   * @format int32
   */
  inOut: number;
  /**
   * 车牌号
   * @minLength 1
   */
  licence: string;
  /**
   * 净重(kg)
   * @format double
   */
  netWeight?: number | null;
  /** 收货单位 */
  receiver?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 发货单位 */
  sender?: string | null;
  /**
   * 皮重(kg)
   * @format double
   */
  tare?: number | null;
  /**
   * 计量单号
   * @minLength 1
   */
  ticketNo: string;
  /** 垃圾来源 */
  trashSource?: string | null;
  /**
   * 垃圾类型
   * @minLength 1
   */
  trashType: string;
}

export interface EsWeightRecordPQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 称重时间
   * @format date-time
   */
  dataTime?: string | null;
  /** 设备编号 */
  equipmentCode?: string | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * 毛重(kg)
   * @format double
   */
  gross?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * 进出站标志(1进站2出站)
   * @format int32
   */
  inOut?: number | null;
  /** 车牌号 */
  licence?: string | null;
  /**
   * 净重(kg)
   * @format double
   */
  netWeight?: number | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 收货单位 */
  receiver?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 发货单位 */
  sender?: string | null;
  /**
   * 皮重(kg)
   * @format double
   */
  tare?: number | null;
  /** 计量单号 */
  ticketNo?: string | null;
  /** 垃圾来源 */
  trashSource?: string | null;
  /** 垃圾类型 */
  trashType?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsWeightRecordQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 称重时间
   * @format date-time
   */
  dataTime?: string | null;
  /** 设备编号 */
  equipmentCode?: string | null;
  /**
   * 毛重(kg)
   * @format double
   */
  gross?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * 进出站标志(1进站2出站)
   * @format int32
   */
  inOut?: number | null;
  /** 车牌号 */
  licence?: string | null;
  /**
   * 净重(kg)
   * @format double
   */
  netWeight?: number | null;
  /** 收货单位 */
  receiver?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 发货单位 */
  sender?: string | null;
  /**
   * 皮重(kg)
   * @format double
   */
  tare?: number | null;
  /** 计量单号 */
  ticketNo?: string | null;
  /** 垃圾来源 */
  trashSource?: string | null;
  /** 垃圾类型 */
  trashType?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsWeightRecordStQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime: string;
  /**
   * 进出站标志(1进站2出站)
   * @format int32
   */
  inOut?: number | null;
  /** 车牌号 */
  licence?: string | null;
  /** 收货单位 */
  receiver?: string | null;
  /** 发货单位 */
  sender?: string | null;
  /** 垃圾来源 */
  trashSource?: string | null;
  /** 垃圾类型 */
  trashType?: string | null;
}

export interface EsWeightRecordStVO {
  /**
   * 数量
   * @format double
   */
  count?: number | null;
  /** 维度 */
  label?: string | null;
  /**
   * 重量(kg)
   * @format double
   */
  sum?: number | null;
}

export interface EsWeightRecordStatisticsVO {
  /**
   * 进站量
   * @format double
   */
  totalWeight?: number | null;
  /**
   * 进站车次
   * @format int32
   */
  trainNumber?: number;
}

export interface EsWeightRecordVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 称重时间
   * @format date-time
   */
  dataTime?: string | null;
  /** 设备编号 */
  equipmentCode?: string | null;
  /**
   * 毛重(kg)
   * @format double
   */
  gross?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * 进出站标志(1进站2出站)
   * @format int32
   */
  inOut?: number | null;
  /** 车牌号 */
  licence?: string | null;
  /**
   * 净重(kg)
   * @format double
   */
  netWeight?: number | null;
  /** 收货单位 */
  receiver?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 发货单位 */
  sender?: string | null;
  /**
   * 皮重(kg)
   * @format double
   */
  tare?: number | null;
  /** 计量单号 */
  ticketNo?: string | null;
  /** 垃圾来源 */
  trashSource?: string | null;
  /** 垃圾类型 */
  trashType?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsWorkPlanPwFO {
  /** @format int64 */
  id?: number | null;
  /**
   * 排班日期
   * @format date-time
   */
  planDate: string;
  /** 人员列表 */
  userIdList?: number[] | null;
  /**
   * 人员作业班次
   * @format int64
   */
  workShiftId: number;
}

export interface EsWorkPlanPwPQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否执行 */
  isExe?: boolean | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /**
   * 排班日期
   * @format date-time
   */
  planDate?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 人员作业班次
   * @format int64
   */
  workShiftId?: number | null;
}

export interface EsWorkPlanPwQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否执行 */
  isExe?: boolean | null;
  /**
   * 排班日期
   * @format date-time
   */
  planDate?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 人员作业班次
   * @format int64
   */
  workShiftId?: number | null;
}

export interface EsWorkPlanPwStQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime: string;
  /** 是否执行 */
  isExe?: boolean | null;
}

export interface EsWorkPlanPwVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否执行 */
  isExe?: boolean | null;
  /**
   * 排班日期
   * @format date-time
   */
  planDate?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 人员列表 */
  userIdList?: number[] | null;
  /**
   * 人员作业班次
   * @format int64
   */
  workShiftId?: number | null;
  /** 人员作业班次名称 */
  workShiftName?: string | null;
  /** 班次时间编码 */
  wtShiftCode?: string | null;
  /** 班次时间名称 */
  wtShiftName?: string | null;
}

export interface EsWorkPlanStQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime: string;
  /** 是否执行 */
  isExe?: boolean | null;
}

export interface EsWorkPlanStVO {
  /** @format int64 */
  count?: number;
  label?: string | null;
  /** @format double */
  totalArea?: number | null;
}

export interface EsWorkPlanSwFO {
  /** @format int64 */
  id?: number | null;
  /**
   * 排班日期
   * @format date-time
   */
  planDate: string;
  /**
   * 船编号
   * @minLength 1
   */
  shipCode: string;
  /**
   * 船只作业班次
   * @format int64
   */
  workShiftId: number;
}

export interface EsWorkPlanSwPQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否执行 */
  isExe?: boolean | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /**
   * 排班日期
   * @format date-time
   */
  planDate?: string | null;
  /** 船编号 */
  shipCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 船只作业班次
   * @format int64
   */
  workShiftId?: number | null;
}

export interface EsWorkPlanSwQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否执行 */
  isExe?: boolean | null;
  /**
   * 排班日期
   * @format date-time
   */
  planDate?: string | null;
  /** 船编号 */
  shipCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 船只作业班次
   * @format int64
   */
  workShiftId?: number | null;
}

export interface EsWorkPlanSwStQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime: string;
  /** 是否执行 */
  isExe?: boolean | null;
  /** 船只编码 */
  shipCode?: string | null;
}

export interface EsWorkPlanSwVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否执行 */
  isExe?: boolean | null;
  /**
   * 排班日期
   * @format date-time
   */
  planDate?: string | null;
  /** 船编号 */
  shipCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 船只作业班次
   * @format int64
   */
  workShiftId?: number | null;
  /** 船只作业班次名称 */
  workShiftName?: string | null;
  /** 班次时间编码 */
  wtShiftCode?: string | null;
  /** 班次时间名称 */
  wtShiftName?: string | null;
}

export interface EsWorkPlanVwFO {
  /** @format int64 */
  id?: number | null;
  /**
   * 车牌号
   * @minLength 1
   */
  licence: string;
  /**
   * 排班日期
   * @format date-time
   */
  planDate: string;
  /**
   * 车辆作业班次
   * @format int64
   */
  workShiftId: number;
}

export interface EsWorkPlanVwPQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否执行 */
  isExe?: boolean | null;
  /** 车牌号 */
  licence?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /**
   * 排班日期
   * @format date-time
   */
  planDate?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 车辆作业班次
   * @format int64
   */
  workShiftId?: number | null;
}

export interface EsWorkPlanVwQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否执行 */
  isExe?: boolean | null;
  /** 车牌号 */
  licence?: string | null;
  /**
   * 排班日期
   * @format date-time
   */
  planDate?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 车辆作业班次
   * @format int64
   */
  workShiftId?: number | null;
}

export interface EsWorkPlanVwStQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime: string;
  /** 是否执行 */
  isExe?: boolean | null;
  /** 车牌号 */
  licence?: string | null;
}

export interface EsWorkPlanVwVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否执行 */
  isExe?: boolean | null;
  /** 车牌号 */
  licence?: string | null;
  /**
   * 排班日期
   * @format date-time
   */
  planDate?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 车辆作业班次
   * @format int64
   */
  workShiftId?: number | null;
  /** 车辆作业班次名称 */
  workShiftName?: string | null;
  /** 班次时间编码 */
  wtShiftCode?: string | null;
  /** 班次时间名称 */
  wtShiftName?: string | null;
}

export interface EsWorkRouteFO {
  /**
   * 保洁方式(机械化清扫,人工清扫)
   * @minLength 1
   */
  cleanMethodCode: string;
  /**
   * 编码
   * @minLength 1
   */
  code: string;
  /** 止点名称 */
  endName?: string | null;
  /** @format int64 */
  id?: number | null;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /** 点列表 */
  pointList?: EsWorkRoutePointFO[] | null;
  /**
   * 区域geojson
   * @minLength 1
   */
  polygonGeojson: string;
  /** 备注 */
  remark?: string | null;
  /**
   * 路面宽度(米)
   * @format double
   */
  roadWidth: number;
  /**
   * 路基宽度(米)
   * @format double
   */
  roadbedWidth?: number | null;
  /** 起点名称 */
  startName?: string | null;
  /**
   * 长度(米)
   * @format double
   */
  totalLength: number;
  /**
   * 类型（集镇,农村）
   * @minLength 1
   */
  typeCode: string;
}

export interface EsWorkRoutePQO {
  /** 保洁方式(机械化清扫,人工清扫) */
  cleanMethodCode?: string | null;
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 止点名称 */
  endName?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 区域geojson */
  polygonGeojson?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 路面宽度(米)
   * @format double
   */
  roadWidth?: number | null;
  /**
   * 路基宽度(米)
   * @format double
   */
  roadbedWidth?: number | null;
  /** 起点名称 */
  startName?: string | null;
  /**
   * 面积(平方米)(长度*路面宽度)
   * @format double
   */
  totalArea?: number | null;
  /**
   * 长度(米)
   * @format double
   */
  totalLength?: number | null;
  /** 类型（集镇,农村） */
  typeCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsWorkRoutePointFO {
  /** @format int64 */
  id?: number | null;
  /**
   * 纬度
   * @format double
   */
  latitude: number;
  /**
   * 经度
   * @format double
   */
  longitude: number;
  /**
   * 点顺序
   * @format int32
   */
  pointIdx: number;
  /**
   * 路线顺序
   * @format int32
   */
  routeIdx: number;
  /**
   * 所属路线
   * @format int64
   */
  workRouteId?: number | null;
}

export interface EsWorkRoutePointPQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /**
   * 点顺序
   * @format int32
   */
  pointIdx?: number | null;
  /**
   * 路线顺序
   * @format int32
   */
  routeIdx?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 所属路线
   * @format int64
   */
  workRouteId?: number | null;
}

export interface EsWorkRoutePointQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /**
   * 点顺序
   * @format int32
   */
  pointIdx?: number | null;
  /**
   * 路线顺序
   * @format int32
   */
  routeIdx?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 所属路线
   * @format int64
   */
  workRouteId?: number | null;
}

export interface EsWorkRoutePointVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /**
   * 点顺序
   * @format int32
   */
  pointIdx?: number | null;
  /**
   * 路线顺序
   * @format int32
   */
  routeIdx?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 所属路线
   * @format int64
   */
  workRouteId?: number | null;
}

export interface EsWorkRouteQO {
  /** 保洁方式(机械化清扫,人工清扫) */
  cleanMethodCode?: string | null;
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 止点名称 */
  endName?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 区域geojson */
  polygonGeojson?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 路面宽度(米)
   * @format double
   */
  roadWidth?: number | null;
  /**
   * 路基宽度(米)
   * @format double
   */
  roadbedWidth?: number | null;
  /** 起点名称 */
  startName?: string | null;
  /**
   * 面积(平方米)(长度*路面宽度)
   * @format double
   */
  totalArea?: number | null;
  /**
   * 长度(米)
   * @format double
   */
  totalLength?: number | null;
  /** 类型（集镇,农村） */
  typeCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsWorkRouteVO {
  /** 保洁方式(机械化清扫,人工清扫) */
  cleanMethodCode?: string | null;
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 止点名称 */
  endName?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 区域geojson */
  polygonGeojson?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 路面宽度(米)
   * @format double
   */
  roadWidth?: number | null;
  /**
   * 路基宽度(米)
   * @format double
   */
  roadbedWidth?: number | null;
  /** 起点名称 */
  startName?: string | null;
  /**
   * 面积(平方米)(长度*路面宽度)
   * @format double
   */
  totalArea?: number | null;
  /**
   * 长度(米)
   * @format double
   */
  totalLength?: number | null;
  /** 类型（集镇,农村） */
  typeCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsWorkRuleFO {
  /** 垃圾类型 */
  garbageTypeCode?: string | null;
  /** @format int64 */
  id?: number | null;
  /** 是否启用 */
  isEnabled?: boolean | null;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /** 备注 */
  remark?: string | null;
  /**
   * 限速(km/h)
   * @format double
   */
  speedLimit?: number | null;
  /**
   * 作业趟数
   * @format int32
   * @min 1
   * @max 9999999
   */
  times: number;
  /**
   * 作业类型
   * @minLength 1
   */
  wtSpecificCode: string;
}

export interface EsWorkRulePQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** 垃圾类型 */
  garbageTypeCode?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否启用(为false时排班的时候不显示) */
  isEnabled?: boolean | null;
  /** 名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 备注 */
  remark?: string | null;
  /**
   * 限速(km/h)
   * @format double
   */
  speedLimit?: number | null;
  /**
   * 作业趟数
   * @format int32
   */
  times?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 作业方式 */
  wtGeneralCode?: string | null;
  /** 作业类型 */
  wtSpecificCode?: string | null;
}

export interface EsWorkRuleQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 垃圾类型 */
  garbageTypeCode?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否启用(为false时排班的时候不显示) */
  isEnabled?: boolean | null;
  /** 名称 */
  name?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 限速(km/h)
   * @format double
   */
  speedLimit?: number | null;
  /**
   * 作业趟数
   * @format int32
   */
  times?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 作业方式 */
  wtGeneralCode?: string | null;
  /** 作业类型 */
  wtSpecificCode?: string | null;
}

export interface EsWorkRuleVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 垃圾类型 */
  garbageTypeCode?: string | null;
  /** 垃圾类型名称 */
  garbageTypeName?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否启用(为false时排班的时候不显示) */
  isEnabled?: boolean | null;
  /** 名称 */
  name?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 限速(km/h)
   * @format double
   */
  speedLimit?: number | null;
  /**
   * 作业趟数
   * @format int32
   */
  times?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 作业类型 */
  wtSpecificCode?: string | null;
  /** 作业类型名称 */
  wtSpecificName?: string | null;
}

export interface EsWorkShiftPwFO {
  /**
   * 结束时间(秒)
   * @format int32
   * @min 0
   * @max 86399
   */
  endTime: number;
  /** @format int64 */
  id?: number | null;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /** 备注 */
  reamrk?: string | null;
  /**
   * 开始时间(秒)
   * @format int32
   * @min 0
   * @max 86399
   */
  startTime: number;
  /**
   * 作业路线
   * @minLength 1
   */
  workRouteCode: string;
  /**
   * 作业规则
   * @format int64
   */
  workRuleId: number;
  /**
   * 班次时间
   * @minLength 1
   */
  wtShiftCode: string;
}

export interface EsWorkShiftPwPQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 结束时间(秒)
   * @format int32
   */
  endTime?: number | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 备注 */
  reamrk?: string | null;
  /**
   * 开始时间(秒)
   * @format int32
   */
  startTime?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 作业路线 */
  workRouteCode?: string | null;
  /**
   * 作业规则
   * @format int64
   */
  workRuleId?: number | null;
  /** 班次 */
  wtShiftCode?: string | null;
}

export interface EsWorkShiftPwQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 结束时间(秒)
   * @format int32
   */
  endTime?: number | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 备注 */
  reamrk?: string | null;
  /**
   * 开始时间(秒)
   * @format int32
   */
  startTime?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 作业路线 */
  workRouteCode?: string | null;
  /**
   * 作业规则
   * @format int64
   */
  workRuleId?: number | null;
  /** 班次 */
  wtShiftCode?: string | null;
}

export interface EsWorkShiftPwVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 结束时间(秒)
   * @format int32
   */
  endTime?: number | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 备注 */
  reamrk?: string | null;
  /**
   * 开始时间(秒)
   * @format int32
   */
  startTime?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 作业路线 */
  workRouteCode?: string | null;
  /** 作业路线名称 */
  readonly workRouteName?: string | null;
  /**
   * 作业规则
   * @format int64
   */
  workRuleId?: number | null;
  /** 作业规则名称 */
  readonly workRuleName?: string | null;
  /** 班次 */
  wtShiftCode?: string | null;
  /** 班次时间名称 */
  readonly wtShiftName?: string | null;
}

export interface EsWorkShiftSwFO {
  /**
   * 结束时间(秒)
   * @format int32
   * @min 0
   * @max 86399
   */
  endTime: number;
  /** @format int64 */
  id?: number | null;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /** 备注 */
  reamrk?: string | null;
  /**
   * 开始时间(秒)
   * @format int32
   * @min 0
   * @max 86399
   */
  startTime: number;
  /**
   * 作业规则
   * @format int64
   */
  workRuleId: number;
  /**
   * 作业河道
   * @minLength 1
   */
  workWatercourseCode: string;
  /**
   * 班次时间
   * @minLength 1
   */
  wtShiftCode: string;
}

export interface EsWorkShiftSwPQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 结束时间(秒)
   * @format int32
   */
  endTime?: number | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 备注 */
  reamrk?: string | null;
  /**
   * 开始时间(秒)
   * @format int32
   */
  startTime?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 作业规则
   * @format int64
   */
  workRuleId?: number | null;
  /** 作业河道 */
  workWatercourseCode?: string | null;
  /** 班次时间 */
  wtShiftCode?: string | null;
}

export interface EsWorkShiftSwQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 结束时间(秒)
   * @format int32
   */
  endTime?: number | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 备注 */
  reamrk?: string | null;
  /**
   * 开始时间(秒)
   * @format int32
   */
  startTime?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 作业规则
   * @format int64
   */
  workRuleId?: number | null;
  /** 作业河道 */
  workWatercourseCode?: string | null;
  /** 班次时间 */
  wtShiftCode?: string | null;
}

export interface EsWorkShiftSwVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 结束时间(秒)
   * @format int32
   */
  endTime?: number | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 备注 */
  reamrk?: string | null;
  /**
   * 开始时间(秒)
   * @format int32
   */
  startTime?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 作业规则
   * @format int64
   */
  workRuleId?: number | null;
  /** 作业规则 */
  readonly workRuleName?: string | null;
  /** 作业河道 */
  workWatercourseCode?: string | null;
  /** 作业河道 */
  readonly workWatercourseName?: string | null;
  /** 班次时间 */
  wtShiftCode?: string | null;
  /** 班次时间 */
  readonly wtShiftName?: string | null;
}

export interface EsWorkShiftVwFO {
  /**
   * 结束时间(秒)
   * @format int32
   * @min 0
   * @max 86399
   */
  endTime: number;
  /** @format int64 */
  id?: number | null;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /** 备注 */
  reamrk?: string | null;
  /**
   * 开始时间(秒)
   * @format int32
   * @min 0
   * @max 86399
   */
  startTime: number;
  /**
   * 作业路线
   * @minLength 1
   */
  workRouteCode: string;
  /**
   * 作业规则
   * @format int64
   */
  workRuleId: number;
  /**
   * 班次时间
   * @minLength 1
   */
  wtShiftCode: string;
}

export interface EsWorkShiftVwPQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 结束时间(秒)
   * @format int32
   */
  endTime?: number | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 备注 */
  reamrk?: string | null;
  /**
   * 开始时间(秒)
   * @format int32
   */
  startTime?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 作业路线 */
  workRouteCode?: string | null;
  /**
   * 作业规则
   * @format int64
   */
  workRuleId?: number | null;
  /** 班次 */
  wtShiftCode?: string | null;
}

export interface EsWorkShiftVwQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 结束时间(秒)
   * @format int32
   */
  endTime?: number | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 备注 */
  reamrk?: string | null;
  /**
   * 开始时间(秒)
   * @format int32
   */
  startTime?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 作业路线 */
  workRouteCode?: string | null;
  /**
   * 作业规则
   * @format int64
   */
  workRuleId?: number | null;
  /** 班次 */
  wtShiftCode?: string | null;
}

export interface EsWorkShiftVwVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 结束时间(秒)
   * @format int32
   */
  endTime?: number | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 备注 */
  reamrk?: string | null;
  /**
   * 开始时间(秒)
   * @format int32
   */
  startTime?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 作业路线 */
  workRouteCode?: string | null;
  /** 作业路线名称 */
  readonly workRouteName?: string | null;
  /**
   * 作业规则
   * @format int64
   */
  workRuleId?: number | null;
  /** 作业规则名称 */
  readonly workRuleName?: string | null;
  /** 班次 */
  wtShiftCode?: string | null;
  /** 班次时间名称 */
  readonly wtShiftName?: string | null;
}

export interface EsWorkWatercourseFO {
  /**
   * 编码
   * @minLength 1
   */
  code: string;
  /** 止点名称 */
  endName?: string | null;
  /** @format int64 */
  id?: number | null;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /** 点列表 */
  pointList?: EsWorkWatercoursePointFO[] | null;
  /**
   * 区域geojson
   * @minLength 1
   */
  polygonGeojson: string;
  /** 所属区域 */
  region?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 起点名称 */
  startName?: string | null;
  /**
   * 长度(米)
   * @format double
   */
  totalLength: number;
  /**
   * 宽度(米)
   * @format double
   */
  width: number;
}

export interface EsWorkWatercoursePQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 止点名称 */
  endName?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 区域geojson */
  polygonGeojson?: string | null;
  /** 所属区域 */
  region?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 起点名称 */
  startName?: string | null;
  /**
   * 面积(平方米)(长度*路面宽度)
   * @format double
   */
  totalArea?: number | null;
  /**
   * 长度(米)
   * @format double
   */
  totalLength?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 宽度(米)
   * @format double
   */
  width?: number | null;
}

export interface EsWorkWatercoursePointFO {
  /**
   * 纬度
   * @format double
   */
  latitude: number;
  /**
   * 经度
   * @format double
   */
  longitude: number;
  /**
   * 点顺序
   * @format int32
   */
  pointIdx: number;
  /**
   * 河道顺序
   * @format int32
   */
  routeIdx: number;
  /**
   * 所属河道
   * @format int64
   */
  workWatercourseId?: number | null;
}

export interface EsWorkWatercoursePointPQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /**
   * 点顺序
   * @format int32
   */
  pointIdx?: number | null;
  /**
   * 河道顺序
   * @format int32
   */
  routeIdx?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 所属河道
   * @format int64
   */
  workWatercourseId?: number | null;
}

export interface EsWorkWatercoursePointQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /**
   * 点顺序
   * @format int32
   */
  pointIdx?: number | null;
  /**
   * 河道顺序
   * @format int32
   */
  routeIdx?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 所属河道
   * @format int64
   */
  workWatercourseId?: number | null;
}

export interface EsWorkWatercoursePointVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /**
   * 点顺序
   * @format int32
   */
  pointIdx?: number | null;
  /**
   * 河道顺序
   * @format int32
   */
  routeIdx?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 所属河道
   * @format int64
   */
  workWatercourseId?: number | null;
}

export interface EsWorkWatercourseQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 止点名称 */
  endName?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 区域geojson */
  polygonGeojson?: string | null;
  /** 所属区域 */
  region?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 起点名称 */
  startName?: string | null;
  /**
   * 面积(平方米)(长度*路面宽度)
   * @format double
   */
  totalArea?: number | null;
  /**
   * 长度(米)
   * @format double
   */
  totalLength?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 宽度(米)
   * @format double
   */
  width?: number | null;
}

export interface EsWorkWatercourseVO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 止点名称 */
  endName?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 区域geojson */
  polygonGeojson?: string | null;
  /** 所属区域 */
  region?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 起点名称 */
  startName?: string | null;
  /**
   * 面积(平方米)(长度*路面宽度)
   * @format double
   */
  totalArea?: number | null;
  /**
   * 长度(米)
   * @format double
   */
  totalLength?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 宽度(米)
   * @format double
   */
  width?: number | null;
}

export interface EsWtGeneralFO {
  /**
   * 编码
   * @minLength 1
   */
  code: string;
  /** @format int64 */
  id?: number | null;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /** 备注 */
  remark?: string | null;
}

export interface EsWtGeneralPQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsWtGeneralQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsWtGeneralVO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsWtShiftPQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsWtShiftQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsWtShiftVO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EsWtSpecificFO {
  /**
   * 编码
   * @minLength 1
   */
  code: string;
  /** @format int64 */
  id?: number | null;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 作业方式
   * @minLength 1
   */
  wtGeneralCode: string;
}

export interface EsWtSpecificPQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 作业方式 */
  wtGeneralCode?: string | null;
}

export interface EsWtSpecificQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 作业方式 */
  wtGeneralCode?: string | null;
}

export interface EsWtSpecificVO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 作业方式 */
  wtGeneralCode?: string | null;
  /** 作业方式名称 */
  wtGeneralName?: string | null;
}

/** 全局返回结果 */
export interface FurionResultAlarmRecordVO {
  data?: AlarmRecordVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultAmJobVO {
  data?: AmJobVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultAmPostVO {
  data?: AmPostVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultBoolean {
  /** 数据 */
  data?: boolean;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultDataDictionaryVO {
  data?: DataDictionaryVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEquipmentParamDdVO {
  data?: EquipmentParamDdVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEquipmentParamHdVO {
  data?: EquipmentParamHdVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEquipmentParamMdVO {
  data?: EquipmentParamMdVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEquipmentParamVO {
  data?: EquipmentParamVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEquipmentVO {
  data?: EquipmentVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsAlarmRecordVO {
  data?: EsAlarmRecordVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsFleetVO {
  data?: EsFleetVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsGarbageCategoryVO {
  data?: EsGarbageCategoryVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsGarbageTypeVO {
  data?: EsGarbageTypeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsGpsAlarmRecordFileVO {
  data?: EsGpsAlarmRecordFileVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsGpsAlarmRecordVO {
  data?: EsGpsAlarmRecordVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsSanitationFacilityTypeVO {
  data?: EsSanitationFacilityTypeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsSanitationFacilityVO {
  data?: EsSanitationFacilityVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsShipRealtimeVO {
  data?: EsShipRealtimeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsShipVO {
  data?: EsShipVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsVehicleDpRecordVO {
  data?: EsVehicleDpRecordVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsVehicleLcRecordVO {
  data?: EsVehicleLcRecordVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsVehicleRealtimeVO {
  data?: EsVehicleRealtimeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsVehicleVO {
  data?: EsVehicleVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsWeightRecordStatisticsVO {
  data?: EsWeightRecordStatisticsVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsWeightRecordVO {
  data?: EsWeightRecordVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsWorkPlanPwVO {
  data?: EsWorkPlanPwVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsWorkPlanSwVO {
  data?: EsWorkPlanSwVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsWorkPlanVwVO {
  data?: EsWorkPlanVwVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsWorkRoutePointVO {
  data?: EsWorkRoutePointVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsWorkRouteVO {
  data?: EsWorkRouteVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsWorkRuleVO {
  data?: EsWorkRuleVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsWorkShiftPwVO {
  data?: EsWorkShiftPwVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsWorkShiftSwVO {
  data?: EsWorkShiftSwVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsWorkShiftVwVO {
  data?: EsWorkShiftVwVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsWorkWatercoursePointVO {
  data?: EsWorkWatercoursePointVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsWorkWatercourseVO {
  data?: EsWorkWatercourseVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsWtGeneralVO {
  data?: EsWtGeneralVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsWtShiftVO {
  data?: EsWtShiftVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEsWtSpecificVO {
  data?: EsWtSpecificVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultInt32 {
  /**
   * 数据
   * @format int32
   */
  data?: number;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultInt64 {
  /**
   * 数据
   * @format int64
   */
  data?: number;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListAlarmRecordVO {
  /** 数据 */
  data?: AlarmRecordVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListAmJobVO {
  /** 数据 */
  data?: AmJobVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListAmPostVO {
  /** 数据 */
  data?: AmPostVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListCommonStVO {
  /** 数据 */
  data?: CommonStVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListDataDictionaryVO {
  /** 数据 */
  data?: DataDictionaryVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEquipmentParamDdVO {
  /** 数据 */
  data?: EquipmentParamDdVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEquipmentParamHdVO {
  /** 数据 */
  data?: EquipmentParamHdVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEquipmentParamMdVO {
  /** 数据 */
  data?: EquipmentParamMdVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEquipmentParamVO {
  /** 数据 */
  data?: EquipmentParamVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEquipmentVO {
  /** 数据 */
  data?: EquipmentVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsAlarmRecordVO {
  /** 数据 */
  data?: EsAlarmRecordVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsFleetVO {
  /** 数据 */
  data?: EsFleetVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsGarbageCategoryVO {
  /** 数据 */
  data?: EsGarbageCategoryVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsGarbageTypeVO {
  /** 数据 */
  data?: EsGarbageTypeVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsGpsAlarmRecordFileVO {
  /** 数据 */
  data?: EsGpsAlarmRecordFileVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsGpsAlarmRecordVO {
  /** 数据 */
  data?: EsGpsAlarmRecordVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsSanitationFacilityTypeVO {
  /** 数据 */
  data?: EsSanitationFacilityTypeVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsSanitationFacilityVO {
  /** 数据 */
  data?: EsSanitationFacilityVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsShipRealtimeVO {
  /** 数据 */
  data?: EsShipRealtimeVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsShipVO {
  /** 数据 */
  data?: EsShipVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsVehicleCountByTypeVO {
  /** 数据 */
  data?: EsVehicleCountByTypeVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsVehicleDpRecordVO {
  /** 数据 */
  data?: EsVehicleDpRecordVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsVehicleLcRecordVO {
  /** 数据 */
  data?: EsVehicleLcRecordVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsVehicleRealtimeVO {
  /** 数据 */
  data?: EsVehicleRealtimeVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsVehicleRecordPoint {
  /** 数据 */
  data?: EsVehicleRecordPoint[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsVehicleStateStVO {
  /** 数据 */
  data?: EsVehicleStateStVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsVehicleVO {
  /** 数据 */
  data?: EsVehicleVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsWeightRecordStVO {
  /** 数据 */
  data?: EsWeightRecordStVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsWeightRecordVO {
  /** 数据 */
  data?: EsWeightRecordVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsWorkPlanPwVO {
  /** 数据 */
  data?: EsWorkPlanPwVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsWorkPlanStVO {
  /** 数据 */
  data?: EsWorkPlanStVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsWorkPlanSwVO {
  /** 数据 */
  data?: EsWorkPlanSwVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsWorkPlanVwVO {
  /** 数据 */
  data?: EsWorkPlanVwVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsWorkRoutePointVO {
  /** 数据 */
  data?: EsWorkRoutePointVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsWorkRouteVO {
  /** 数据 */
  data?: EsWorkRouteVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsWorkRuleVO {
  /** 数据 */
  data?: EsWorkRuleVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsWorkShiftPwVO {
  /** 数据 */
  data?: EsWorkShiftPwVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsWorkShiftSwVO {
  /** 数据 */
  data?: EsWorkShiftSwVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsWorkShiftVwVO {
  /** 数据 */
  data?: EsWorkShiftVwVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsWorkWatercoursePointVO {
  /** 数据 */
  data?: EsWorkWatercoursePointVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsWorkWatercourseVO {
  /** 数据 */
  data?: EsWorkWatercourseVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsWtGeneralVO {
  /** 数据 */
  data?: EsWtGeneralVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsWtShiftVO {
  /** 数据 */
  data?: EsWtShiftVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEsWtSpecificVO {
  /** 数据 */
  data?: EsWtSpecificVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListGpsAlarmStVO {
  /** 数据 */
  data?: GpsAlarmStVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListInt64 {
  /** 数据 */
  data?: number[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListLogaccessVO {
  /** 数据 */
  data?: LogaccessVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListLogerrorVO {
  /** 数据 */
  data?: LogerrorVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListLogoperationVO {
  /** 数据 */
  data?: LogoperationVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListMessageVO {
  /** 数据 */
  data?: MessageVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListMmInventoryVO {
  /** 数据 */
  data?: MmInventoryVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListMmMaterialCategoryVO {
  /** 数据 */
  data?: MmMaterialCategoryVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListMmMaterialVO {
  /** 数据 */
  data?: MmMaterialVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListMmRequisitionVO {
  /** 数据 */
  data?: MmRequisitionVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListMmStockInOutVO {
  /** 数据 */
  data?: MmStockInOutVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListMonthAndCount {
  /** 数据 */
  data?: MonthAndCount[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListNameCount {
  /** 数据 */
  data?: NameCount[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListOrganizationVO {
  /** 数据 */
  data?: OrganizationVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListRecordFile {
  /** 数据 */
  data?: RecordFile[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListResourceVO {
  /** 数据 */
  data?: ResourceVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListRoleVO {
  /** 数据 */
  data?: RoleVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListString {
  /** 数据 */
  data?: string[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListSysNoticeVO {
  /** 数据 */
  data?: SysNoticeVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListTechnicsVO {
  /** 数据 */
  data?: TechnicsVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListTreeNode {
  /** 数据 */
  data?: TreeNode[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListTreeNodeKfSk {
  /** 数据 */
  data?: TreeNodeKfSk[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListUserMessageVO {
  /** 数据 */
  data?: UserMessageVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListUserVO {
  /** 数据 */
  data?: UserVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListUsergroupVO {
  /** 数据 */
  data?: UsergroupVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultLogaccessVO {
  data?: LogaccessVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultLogerrorVO {
  data?: LogerrorVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultLoginResultUserAO {
  data?: LoginResultUserAO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultLoginResultVO {
  data?: LoginResultVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultLogoperationVO {
  data?: LogoperationVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultMessageStRes {
  data?: MessageStRes;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultMessageVO {
  data?: MessageVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultMmInventoryVO {
  /** 库存视图对象 */
  data?: MmInventoryVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultMmMaterialCategoryVO {
  /** 物料分类视图对象 */
  data?: MmMaterialCategoryVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultMmMaterialVO {
  /** 物料视图对象 */
  data?: MmMaterialVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultMmRequisitionVO {
  /** 领料申请视图对象 */
  data?: MmRequisitionVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultMmStockInOutVO {
  /** 出入库视图对象 */
  data?: MmStockInOutVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultObject {
  /** 数据 */
  data?: any;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultOrganizationVO {
  data?: OrganizationVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultRecordFile {
  data?: RecordFile;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultResourceVO {
  data?: ResourceVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultRoleVO {
  data?: RoleVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListAlarmRecordVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListAlarmRecordVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListAmJobVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListAmJobVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListAmPostVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListAmPostVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListDataDictionaryVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListDataDictionaryVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEquipmentParamDdVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEquipmentParamDdVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEquipmentParamHdVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEquipmentParamHdVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEquipmentParamMdVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEquipmentParamMdVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEquipmentParamVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEquipmentParamVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEquipmentVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEquipmentVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsAlarmRecordVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsAlarmRecordVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsFleetVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsFleetVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsGarbageCategoryVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsGarbageCategoryVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsGarbageTypeVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsGarbageTypeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsGpsAlarmRecordFileVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsGpsAlarmRecordFileVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsGpsAlarmRecordVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsGpsAlarmRecordVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsSanitationFacilityTypeVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsSanitationFacilityTypeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsSanitationFacilityVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsSanitationFacilityVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsShipRealtimeVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsShipRealtimeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsShipVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsShipVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsVehicleDpRecordVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsVehicleDpRecordVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsVehicleLcRecordVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsVehicleLcRecordVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsVehicleRealtimeVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsVehicleRealtimeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsVehicleVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsVehicleVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsWeightRecordVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsWeightRecordVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsWorkPlanPwVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsWorkPlanPwVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsWorkPlanSwVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsWorkPlanSwVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsWorkPlanVwVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsWorkPlanVwVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsWorkRoutePointVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsWorkRoutePointVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsWorkRouteVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsWorkRouteVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsWorkRuleVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsWorkRuleVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsWorkShiftPwVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsWorkShiftPwVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsWorkShiftSwVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsWorkShiftSwVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsWorkShiftVwVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsWorkShiftVwVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsWorkWatercoursePointVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsWorkWatercoursePointVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsWorkWatercourseVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsWorkWatercourseVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsWtGeneralVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsWtGeneralVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsWtShiftVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsWtShiftVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEsWtSpecificVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEsWtSpecificVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListLogaccessVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListLogaccessVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListLogerrorVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListLogerrorVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListLogoperationVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListLogoperationVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListMessageVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListMessageVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListMmInventoryVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListMmInventoryVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListMmMaterialCategoryVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListMmMaterialCategoryVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListMmMaterialVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListMmMaterialVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListMmRequisitionVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListMmRequisitionVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListMmStockInOutVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListMmStockInOutVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListOrganizationVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListOrganizationVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListResourceVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListResourceVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListRoleVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListRoleVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListSysNoticeVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListSysNoticeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListTechnicsVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListTechnicsVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListUserMessageVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListUserMessageVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListUserVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListUserVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListUserWpVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListUserWpVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListUsergroupVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListUsergroupVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultString {
  /** 数据 */
  data?: string | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSysNoticeVO {
  data?: SysNoticeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultTechnicsVO {
  data?: TechnicsVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultUserCountVO {
  data?: UserCountVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultUserMessageVO {
  data?: UserMessageVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultUserVO {
  data?: UserVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultUsergroupVO {
  data?: UsergroupVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultWrMainStVO {
  data?: WrMainStVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

export interface GpsAlarmStQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime: string;
  /** 车牌号 */
  licence?: string | null;
}

export interface GpsAlarmStVO {
  /**
   * 数量
   * @format double
   */
  count?: number | null;
  /** 时间 */
  label?: string | null;
}

export interface IdName {
  /**
   * Id
   * @format int64
   */
  id?: number;
  /** Name */
  name?: string | null;
}

export interface LogaccessFO {
  /** 登录名 */
  authkey?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** ip地址 */
  ip?: string | null;
  /** 是否异常 */
  isException?: boolean | null;
  /** 访问结果 */
  result?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface LogaccessPQO {
  /** 登录名 */
  authkey?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** ip地址 */
  ip?: string | null;
  /** 是否异常 */
  isException?: boolean | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 访问结果 */
  result?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface LogaccessQO {
  /** 登录名 */
  authkey?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** ip地址 */
  ip?: string | null;
  /** 是否异常 */
  isException?: boolean | null;
  /** 访问结果 */
  result?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface LogaccessVO {
  /** 登录名 */
  authkey?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** ip地址 */
  ip?: string | null;
  /** 是否异常 */
  isException?: boolean | null;
  /** 访问结果 */
  result?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface LogerrorFO {
  /** action */
  action?: string | null;
  /** controller */
  controller?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** ip */
  ip?: string | null;
  /** 异常信息 */
  message?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 操作用户标识
   * @format int64
   */
  userId?: number | null;
}

export interface LogerrorPQO {
  /** action */
  action?: string | null;
  /** controller */
  controller?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** ip */
  ip?: string | null;
  /** 异常信息 */
  message?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 操作用户标识
   * @format int64
   */
  userId?: number | null;
}

export interface LogerrorQO {
  /** action */
  action?: string | null;
  /** controller */
  controller?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** ip */
  ip?: string | null;
  /** 异常信息 */
  message?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 操作用户标识
   * @format int64
   */
  userId?: number | null;
}

export interface LogerrorVO {
  /** action */
  action?: string | null;
  /** controller */
  controller?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** ip */
  ip?: string | null;
  /** 异常信息 */
  message?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 操作用户标识
   * @format int64
   */
  userId?: number | null;
}

export interface LoginQO {
  /** 用户名 */
  authkey?: string | null;
  /**
   * 密码
   * @minLength 1
   */
  password: string;
}

export interface LoginResultUserAO {
  /** @format int64 */
  id?: number;
  /** 登录名 */
  loginname?: string | null;
  /** 手机号 */
  mobile?: string | null;
  /** 姓名 */
  name?: string | null;
  /**
   * 部门id
   * @format int64
   */
  organizationId?: number | null;
  /** 部门名称 */
  organizationName?: string | null;
  resources?: string[] | null;
  roles?: IdName[] | null;
  /** 性别 */
  sex?: string | null;
}

export interface LoginResultVO {
  accessToken?: string | null;
  refreshToken?: string | null;
  user?: LoginResultUserAO;
}

export interface LogoperationFO {
  /** action */
  action?: string | null;
  /** controller */
  controller?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 环境 */
  environment?: string | null;
  /** @format int64 */
  id?: number;
  /** ip */
  ip?: string | null;
  /** 是否异常 */
  isException?: boolean | null;
  /** 参数 */
  parameters?: string | null;
  /** 远程地址 */
  refererUrl?: string | null;
  /** 请求地址 */
  requestUrl?: string | null;
  /**
   * 操作时间(毫秒)
   * @format int64
   */
  timeElapsed?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 操作用户标识
   * @format int64
   */
  userId?: number | null;
}

export interface LogoperationPQO {
  /** action */
  action?: string | null;
  /** controller */
  controller?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 环境 */
  environment?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** ip */
  ip?: string | null;
  /** 是否异常 */
  isException?: boolean | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 参数 */
  parameters?: string | null;
  /** 远程地址 */
  refererUrl?: string | null;
  /** 请求地址 */
  requestUrl?: string | null;
  /**
   * 操作时间(毫秒)
   * @format int64
   */
  timeElapsed?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 操作用户标识
   * @format int64
   */
  userId?: number | null;
}

export interface LogoperationQO {
  /** action */
  action?: string | null;
  /** controller */
  controller?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 环境 */
  environment?: string | null;
  /** @format int64 */
  id?: number;
  /** ip */
  ip?: string | null;
  /** 是否异常 */
  isException?: boolean | null;
  /** 参数 */
  parameters?: string | null;
  /** 远程地址 */
  refererUrl?: string | null;
  /** 请求地址 */
  requestUrl?: string | null;
  /**
   * 操作时间(毫秒)
   * @format int64
   */
  timeElapsed?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 操作用户标识
   * @format int64
   */
  userId?: number | null;
}

export interface LogoperationVO {
  /** action */
  action?: string | null;
  /** controller */
  controller?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 环境 */
  environment?: string | null;
  /** @format int64 */
  id?: number;
  /** ip */
  ip?: string | null;
  /** 是否异常 */
  isException?: boolean | null;
  /** 参数 */
  parameters?: string | null;
  /** 远程地址 */
  refererUrl?: string | null;
  /** 请求地址 */
  requestUrl?: string | null;
  /**
   * 操作时间(毫秒)
   * @format int64
   */
  timeElapsed?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 操作用户标识
   * @format int64
   */
  userId?: number | null;
}

export interface MessagePQO {
  /** 内容 */
  content?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /**
   * 实体id
   * @format int64
   */
  recordId?: number | null;
  /** 标题 */
  title?: string | null;
  /** 类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface MessageQO {
  /** 内容 */
  content?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 实体id
   * @format int64
   */
  recordId?: number | null;
  /** 标题 */
  title?: string | null;
  /** 类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface MessageStRes {
  /** @format int32 */
  deletedAmount?: number;
  /** @format int32 */
  readAmount?: number;
  /** @format int32 */
  unReadAmount?: number;
}

export interface MessageVO {
  /** 内容 */
  content?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 实体id
   * @format int64
   */
  recordId?: number | null;
  /** 标题 */
  title?: string | null;
  /** 类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

/** 库存分页查询参数类 */
export interface MmInventoryPQO {
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /**
   * 最后入库时间
   * @format date-time
   */
  lastInTime?: string | null;
  /**
   * 最后出库时间
   * @format date-time
   */
  lastOutTime?: string | null;
  /**
   * 锁定数量
   * @format double
   */
  lockedQuantity?: number | null;
  /** 物料编码 */
  materialCode?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /**
   * 库存数量
   * @format double
   */
  stockQuantity?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface MmInventoryQO {
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /**
   * 最后入库时间
   * @format date-time
   */
  lastInTime?: string | null;
  /**
   * 最后出库时间
   * @format date-time
   */
  lastOutTime?: string | null;
  /**
   * 锁定数量
   * @format double
   */
  lockedQuantity?: number | null;
  /** 物料编码 */
  materialCode?: string | null;
  /**
   * 库存数量
   * @format double
   */
  stockQuantity?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 库存视图对象 */
export interface MmInventoryVO {
  /**
   * 可用库存
   * @format double
   */
  readonly availableQuantity?: number | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /**
   * 最后入库时间
   * @format date-time
   */
  lastInTime?: string | null;
  /**
   * 最后出库时间
   * @format date-time
   */
  lastOutTime?: string | null;
  /**
   * 锁定数量
   * @format double
   */
  lockedQuantity?: number | null;
  /** 物料编码 */
  materialCode?: string | null;
  /** 物料名称 */
  materialName?: string | null;
  /** 物料规格 */
  materialSpecification?: string | null;
  /** 物料单位 */
  materialUnit?: string | null;
  /**
   * 库存数量
   * @format double
   */
  stockQuantity?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 物料分类表单对象 */
export interface MmMaterialCategoryFO {
  /**
   * 分类编码
   * @minLength 1
   */
  code: string;
  /**
   * 主键ID
   * @format int64
   */
  id?: number | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /**
   * 分类名称
   * @minLength 1
   */
  name: string;
  /**
   * 排序号
   * @format int32
   */
  orderNumber?: number | null;
  /** 备注 */
  remark?: string | null;
}

/** 物料分类分页查询参数类 */
export interface MmMaterialCategoryPQO {
  /** 分类编码 */
  code?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 分类名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 排序号
   * @format int32
   */
  orderNumber?: number | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 备注 */
  remark?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface MmMaterialCategoryQO {
  /** 分类编码 */
  code?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 分类名称 */
  name?: string | null;
  /**
   * 排序号
   * @format int32
   */
  orderNumber?: number | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 物料分类视图对象 */
export interface MmMaterialCategoryVO {
  /** 分类编码 */
  code?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 分类名称 */
  name?: string | null;
  /**
   * 排序号
   * @format int32
   */
  orderNumber?: number | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 物料表单对象 */
export interface MmMaterialFO {
  /** @minLength 1 */
  categoryCode: string;
  /**
   * 物料编码
   * @minLength 1
   */
  code: string;
  /** @format int64 */
  id?: number | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /**
   * 最大库存
   * @format double
   */
  maxStock?: number | null;
  /**
   * 最小库存
   * @format double
   */
  minStock?: number | null;
  /**
   * 物料名称
   * @minLength 1
   */
  name: string;
  /** 备注 */
  remark?: string | null;
  /** 规格型号 */
  specification?: string | null;
  /**
   * 单位
   * @minLength 1
   */
  unit: string;
  /**
   * 单价
   * @format double
   */
  unitPrice?: number | null;
}

/** 物料分页查询参数类 */
export interface MmMaterialPQO {
  categoryCode?: string | null;
  /** 物料编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否启用 */
  isEnable?: boolean | null;
  /**
   * 最大库存
   * @format double
   */
  maxStock?: number | null;
  /**
   * 最小库存
   * @format double
   */
  minStock?: number | null;
  /** 物料名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 备注 */
  remark?: string | null;
  /** 规格型号 */
  specification?: string | null;
  /** 单位 */
  unit?: string | null;
  /**
   * 单价
   * @format double
   */
  unitPrice?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface MmMaterialQO {
  categoryCode?: string | null;
  /** 物料编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否启用 */
  isEnable?: boolean | null;
  /**
   * 最大库存
   * @format double
   */
  maxStock?: number | null;
  /**
   * 最小库存
   * @format double
   */
  minStock?: number | null;
  /** 物料名称 */
  name?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 规格型号 */
  specification?: string | null;
  /** 单位 */
  unit?: string | null;
  /**
   * 单价
   * @format double
   */
  unitPrice?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

/** 物料视图对象 */
export interface MmMaterialVO {
  categoryCode?: string | null;
  /** 分类名称 */
  categoryName?: string | null;
  /** 物料编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否启用 */
  isEnable?: boolean | null;
  /**
   * 最大库存
   * @format double
   */
  maxStock?: number | null;
  /**
   * 最小库存
   * @format double
   */
  minStock?: number | null;
  /** 物料名称 */
  name?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 规格型号 */
  specification?: string | null;
  /** 单位 */
  unit?: string | null;
  /**
   * 单价
   * @format double
   */
  unitPrice?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

/** 领料申请表单对象 */
export interface MmRequisitionFO {
  /**
   * 主键ID
   * @format int64
   */
  id?: number | null;
  /** 领料申请明细 */
  items?: MmRequisitionItemFO[] | null;
  /** 备注 */
  remark?: string | null;
}

/** 领料申请表单对象 */
export interface MmRequisitionItemFO {
  /**
   * 主键ID
   * @format int64
   */
  id?: number | null;
  /**
   * 物料编码
   * @minLength 1
   */
  materialCode: string;
  /**
   * 申请数量
   * @format double
   */
  quantity: number;
  /** 备注 */
  remark?: string | null;
  /**
   * 领料申请ID
   * @format int64
   */
  requisitionId?: number | null;
}

/** 领料申请分页查询参数类 */
export interface MmRequisitionPQO {
  /**
   * 申请人ID
   * @format int64
   */
  applicantId?: number | null;
  /**
   * 申请时间
   * @format date-time
   */
  applyTime?: string | null;
  /**
   * 结束时间(申请时间)
   * @format date-time
   */
  applyTimeEnd?: string | null;
  /**
   * 开始时间(申请时间)
   * @format date-time
   */
  applyTimeStart?: string | null;
  /** 审批备注 */
  approveRemark?: string | null;
  /**
   * 审批时间
   * @format date-time
   */
  approveTime?: string | null;
  /**
   * 审批人ID
   * @format int64
   */
  approverId?: number | null;
  /** 单据编号 */
  billNo?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 是否已生成出库记录 */
  isStockOutGenerated?: boolean | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 出库操作人ID
   * @format int64
   */
  outOperatorId?: number | null;
  /**
   * 出库时间
   * @format date-time
   */
  outTime?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 备注 */
  remark?: string | null;
  /**
   * 状态(0:待审批 1:已通过 2:已拒绝 3:已出库)
   * @format int32
   */
  status?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface MmRequisitionQO {
  /**
   * 申请人ID
   * @format int64
   */
  applicantId?: number | null;
  /**
   * 申请时间
   * @format date-time
   */
  applyTime?: string | null;
  /**
   * 结束时间(申请时间)
   * @format date-time
   */
  applyTimeEnd?: string | null;
  /**
   * 开始时间(申请时间)
   * @format date-time
   */
  applyTimeStart?: string | null;
  /** 审批备注 */
  approveRemark?: string | null;
  /**
   * 审批时间
   * @format date-time
   */
  approveTime?: string | null;
  /**
   * 审批人ID
   * @format int64
   */
  approverId?: number | null;
  /** 单据编号 */
  billNo?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 是否已生成出库记录 */
  isStockOutGenerated?: boolean | null;
  /**
   * 出库操作人ID
   * @format int64
   */
  outOperatorId?: number | null;
  /**
   * 出库时间
   * @format date-time
   */
  outTime?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 状态(0:待审批 1:已通过 2:已拒绝 3:已出库)
   * @format int32
   */
  status?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 领料申请视图对象 */
export interface MmRequisitionVO {
  /**
   * 申请人ID
   * @format int64
   */
  applicantId?: number | null;
  /** 申请人姓名 */
  applicantName?: string | null;
  /**
   * 申请时间
   * @format date-time
   */
  applyTime?: string | null;
  /** 审批备注 */
  approveRemark?: string | null;
  /**
   * 审批时间
   * @format date-time
   */
  approveTime?: string | null;
  /**
   * 审批人ID
   * @format int64
   */
  approverId?: number | null;
  /** 审批人姓名 */
  approverName?: string | null;
  /** 单据编号 */
  billNo?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 是否已生成出库记录 */
  isStockOutGenerated?: boolean | null;
  /**
   * 出库操作人ID
   * @format int64
   */
  outOperatorId?: number | null;
  /**
   * 出库时间
   * @format date-time
   */
  outTime?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 状态(0:待审批 1:已通过 2:已拒绝 3:已出库)
   * @format int32
   */
  status?: number | null;
  /** 状态名称 */
  readonly statusName?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 出入库表单对象 */
export interface MmStockInOutFO {
  /**
   * 物料编码
   * @minLength 1
   */
  materialCode: string;
  /**
   * 数量
   * @format double
   */
  quantity: number;
  /** 备注 */
  remark?: string | null;
  /**
   * 领料申请单ID
   * @format int64
   */
  requisitionId?: number | null;
  /**
   * 类型(1:入库 2:出库)
   * @format int32
   */
  type: number;
  /**
   * 单价(如果不传则使用物料标准单价)
   * @format double
   */
  unitPrice?: number | null;
}

/** 出入库分页查询参数类 */
export interface MmStockInOutPQO {
  /** 审批备注 */
  approveRemark?: string | null;
  /**
   * 审批时间
   * @format date-time
   */
  approveTime?: string | null;
  /**
   * 审批人ID
   * @format int64
   */
  approverId?: number | null;
  /** 单据编号 */
  billNo?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 物料编码 */
  materialCode?: string | null;
  /**
   * 操作时间
   * @format date-time
   */
  operationTime?: string | null;
  /**
   * 结束时间(操作时间)
   * @format date-time
   */
  operationTimeEnd?: string | null;
  /**
   * 开始时间(操作时间)
   * @format date-time
   */
  operationTimeStart?: string | null;
  /**
   * 操作人ID
   * @format int64
   */
  operatorId?: number | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /**
   * 数量
   * @format double
   */
  quantity?: number | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 领料申请单ID(关联mm_requisition.id)
   * @format int64
   */
  requisitionId?: number | null;
  /**
   * 状态(0:待审批 1:已通过 2:已拒绝)
   * @format int32
   */
  status?: number | null;
  /**
   * 总金额
   * @format double
   */
  totalAmount?: number | null;
  /**
   * 类型(1:入库 2:出库)
   * @format int32
   */
  type?: number | null;
  /**
   * 单价
   * @format double
   */
  unitPrice?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface MmStockInOutQO {
  /** 审批备注 */
  approveRemark?: string | null;
  /**
   * 审批时间
   * @format date-time
   */
  approveTime?: string | null;
  /**
   * 审批人ID
   * @format int64
   */
  approverId?: number | null;
  /** 单据编号 */
  billNo?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 物料编码 */
  materialCode?: string | null;
  /**
   * 操作时间
   * @format date-time
   */
  operationTime?: string | null;
  /**
   * 结束时间(操作时间)
   * @format date-time
   */
  operationTimeEnd?: string | null;
  /**
   * 开始时间(操作时间)
   * @format date-time
   */
  operationTimeStart?: string | null;
  /**
   * 操作人ID
   * @format int64
   */
  operatorId?: number | null;
  /**
   * 数量
   * @format double
   */
  quantity?: number | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 领料申请单ID(关联mm_requisition.id)
   * @format int64
   */
  requisitionId?: number | null;
  /**
   * 状态(0:待审批 1:已通过 2:已拒绝)
   * @format int32
   */
  status?: number | null;
  /**
   * 总金额
   * @format double
   */
  totalAmount?: number | null;
  /**
   * 类型(1:入库 2:出库)
   * @format int32
   */
  type?: number | null;
  /**
   * 单价
   * @format double
   */
  unitPrice?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 出入库视图对象 */
export interface MmStockInOutVO {
  /** 审批备注 */
  approveRemark?: string | null;
  /**
   * 审批时间
   * @format date-time
   */
  approveTime?: string | null;
  /**
   * 审批人ID
   * @format int64
   */
  approverId?: number | null;
  /** 审批人姓名 */
  approverName?: string | null;
  /** 单据编号 */
  billNo?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 物料编码 */
  materialCode?: string | null;
  /** 物料名称 */
  materialName?: string | null;
  /** 物料规格 */
  materialSpecification?: string | null;
  /**
   * 操作时间
   * @format date-time
   */
  operationTime?: string | null;
  /**
   * 操作人ID
   * @format int64
   */
  operatorId?: number | null;
  /** 操作人姓名 */
  operatorName?: string | null;
  /**
   * 数量
   * @format double
   */
  quantity?: number | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 领料申请单ID(关联mm_requisition.id)
   * @format int64
   */
  requisitionId?: number | null;
  /**
   * 状态(0:待审批 1:已通过 2:已拒绝)
   * @format int32
   */
  status?: number | null;
  /** 状态名称 */
  readonly statusName?: string | null;
  /**
   * 总金额
   * @format double
   */
  totalAmount?: number | null;
  /**
   * 类型(1:入库 2:出库)
   * @format int32
   */
  type?: number | null;
  /** 类型名称 */
  readonly typeName?: string | null;
  /**
   * 单价
   * @format double
   */
  unitPrice?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface MonthAndCount {
  /**
   * 数量
   * @format int32
   */
  count?: number;
  /**
   * 年月
   * @format date-time
   */
  month?: string | null;
  /** 年月字符串 */
  monthStr?: string | null;
}

export interface NameCount {
  /**
   * 总数
   * @format int32
   */
  count?: number;
  /** 名称 */
  name?: string | null;
}

export interface OnlyIdQO {
  /**
   * Id
   * @format int64
   */
  id: number;
}

export interface OnlyMsgIdList {
  /** MessageIds */
  ids: number[];
}

export interface OrganizationForm {
  /** 地址 */
  address?: string | null;
  /** 编号 */
  code?: string | null;
  /** 联系人 */
  contactPerson?: string | null;
  /** 联系人联系方式 */
  contactWay?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否在地图中显示 */
  isDisplayInmap?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否包含视频 */
  isVideo?: boolean | null;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /** 名称 */
  name?: string | null;
  /**
   * 父级
   * @format int64
   */
  parentId?: number | null;
  /** 备注 */
  remark?: string | null;
}

export interface OrganizationPQO {
  /** 地址 */
  address?: string | null;
  /** 编号 */
  code?: string | null;
  /** 联系人 */
  contactPerson?: string | null;
  /** 联系人联系方式 */
  contactWay?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否在地图中显示 */
  isDisplayInmap?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否包含视频 */
  isVideo?: boolean | null;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 级别
   * @format int32
   */
  level?: number | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /** 名称 */
  name?: string | null;
  /** 路径 */
  nestedpath?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /**
   * 父级
   * @format int64
   */
  parentId?: number | null;
  /**
   * 路径key
   * @format int32
   */
  pathkey?: number;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface OrganizationQO {
  /** 地址 */
  address?: string | null;
  /** 编号 */
  code?: string | null;
  /** 联系人 */
  contactPerson?: string | null;
  /** 联系人联系方式 */
  contactWay?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否在地图中显示 */
  isDisplayInmap?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否包含视频 */
  isVideo?: boolean | null;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 级别
   * @format int32
   */
  level?: number | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /** 名称 */
  name?: string | null;
  /** 路径 */
  nestedpath?: string | null;
  /**
   * 父级
   * @format int64
   */
  parentId?: number | null;
  /**
   * 路径key
   * @format int32
   */
  pathkey?: number;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface OrganizationVO {
  /** 地址 */
  address?: string | null;
  /** 编号 */
  code?: string | null;
  /** 联系人 */
  contactPerson?: string | null;
  /** 联系人联系方式 */
  contactWay?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否在地图中显示 */
  isDisplayInmap?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否包含视频 */
  isVideo?: boolean | null;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 级别
   * @format int32
   */
  level?: number | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /** 名称 */
  name?: string | null;
  /** 路径 */
  nestedpath?: string | null;
  /**
   * 父级
   * @format int64
   */
  parentId?: number | null;
  /** 上级组织机构 */
  parentName?: string | null;
  /**
   * 路径key
   * @format int32
   */
  pathkey?: number;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface PlaybackHlsUrlQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime: string;
  /**
   * 摄像头标识
   * @minLength 1
   */
  cameraIndexCode: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime: string;
  /** 内外网标识 */
  inout?: string | null;
  /** 取流协议 */
  protocol?: string | null;
}

export interface PlaybackUrlQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime: string;
  /**
   * 摄像头标识
   * @minLength 1
   */
  cameraIndexCode: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime: string;
  /** 取流协议 */
  protocol?: string | null;
}

export interface PreviewUrlQO {
  /**
   * 摄像头标识
   * @minLength 1
   */
  cameraIndexCode: string;
}

export interface PtzsControllingQO {
  /**
   * 0-开始 ，1-停止,注：GOTO_PRESET命令下填任意值均可转到预置点,建议填0即可
   * @format int32
   */
  action: number;
  /**
   * 监控点编号
   * @minLength 1
   */
  cameraIndexCode: string;
  /**
   * 命令
   * @minLength 1
   */
  command: string;
  /**
   * 预置点编号，可通过查询预置点信息接口获取整数，通常在300以内
   * @format int32
   */
  presetIndex?: number | null;
  /**
   * 云台速度，取值范围为1-100，默认50
   * @format int32
   */
  speed?: number | null;
}

export interface RecordFile {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 后缀名 */
  extname?: string | null;
  /** 文件标识 */
  fileId?: string | null;
  /** 文件名 */
  fileName?: string | null;
  /** 原始文件名 */
  fileNameOrigin?: string | null;
  /** 文件路径 */
  filePath?: string | null;
  /**
   * 文件大小(Byte)
   * @format int64
   */
  fileSize?: number;
  /** @format int64 */
  id?: number;
  /**
   * 实体标识
   * @format int64
   */
  recordId?: number;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface RemoveMulQO {
  ids: number[];
}

export interface ReqIdsQO {
  /**
   * id个数
   * @format int32
   * @min 0
   * @max 100
   */
  idCount?: number;
}

export interface ResourceForm {
  /** 编号 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否仅限管理员 */
  isAdmin?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /**
   * 级别
   * @format int32
   */
  level?: number | null;
  /** 名称 */
  name?: string | null;
  /** 路径 */
  nestedpath?: string | null;
  /**
   * 父级
   * @format int64
   */
  parentId?: number | null;
  /**
   * 路径key
   * @format int32
   */
  pathkey?: number;
  /** 备注 */
  remark?: string | null;
  /** 路由名称列表 */
  routeNames?: string[] | null;
  /** 类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

/** 用户分页查询参数类 */
export interface ResourcePQO {
  /** 编号 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否仅限管理员 */
  isAdmin?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /**
   * 级别
   * @format int32
   */
  level?: number | null;
  /** 名称 */
  name?: string | null;
  /** 路径 */
  nestedpath?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /**
   * 父级
   * @format int64
   */
  parentId?: number | null;
  /**
   * 路径key
   * @format int32
   */
  pathkey?: number;
  /** 备注 */
  remark?: string | null;
  /** 类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface ResourceQO {
  /** 编号 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否仅限管理员 */
  isAdmin?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /**
   * 级别
   * @format int32
   */
  level?: number | null;
  /** 名称 */
  name?: string | null;
  /** 路径 */
  nestedpath?: string | null;
  /**
   * 父级
   * @format int64
   */
  parentId?: number | null;
  /**
   * 路径key
   * @format int32
   */
  pathkey?: number;
  /** 备注 */
  remark?: string | null;
  /** 类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface ResourceRoute {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 资源id
   * @format int64
   */
  resourceId?: number;
  /** 后端路由名称 */
  routeName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface ResourceVO {
  /** 编号 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否仅限管理员 */
  isAdmin?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 名称 */
  name?: string | null;
  /**
   * 父级
   * @format int64
   */
  parentId?: number | null;
  /** 备注 */
  remark?: string | null;
  resourceRoutes?: ResourceRoute[] | null;
  /** 路由名称列表 */
  routeNames?: string[] | null;
  /** 类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface RoleAssignResourcesQO {
  resourceIds: number[];
  /** @format int64 */
  roleId: number;
}

export interface RoleFO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

/** 用户分页查询参数类 */
export interface RolePQO {
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
}

export interface RoleQO {
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
}

export interface RoleVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListAlarmRecordVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: AlarmRecordVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListAmJobVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: AmJobVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListAmPostVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: AmPostVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListDataDictionaryVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: DataDictionaryVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEquipmentParamDdVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EquipmentParamDdVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEquipmentParamHdVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EquipmentParamHdVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEquipmentParamMdVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EquipmentParamMdVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEquipmentParamVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EquipmentParamVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEquipmentVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EquipmentVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsAlarmRecordVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsAlarmRecordVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsFleetVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsFleetVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsGarbageCategoryVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsGarbageCategoryVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsGarbageTypeVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsGarbageTypeVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsGpsAlarmRecordFileVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsGpsAlarmRecordFileVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsGpsAlarmRecordVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsGpsAlarmRecordVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsSanitationFacilityTypeVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsSanitationFacilityTypeVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsSanitationFacilityVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsSanitationFacilityVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsShipRealtimeVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsShipRealtimeVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsShipVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsShipVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsVehicleDpRecordVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsVehicleDpRecordVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsVehicleLcRecordVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsVehicleLcRecordVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsVehicleRealtimeVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsVehicleRealtimeVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsVehicleVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsVehicleVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsWeightRecordVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsWeightRecordVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsWorkPlanPwVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsWorkPlanPwVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsWorkPlanSwVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsWorkPlanSwVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsWorkPlanVwVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsWorkPlanVwVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsWorkRoutePointVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsWorkRoutePointVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsWorkRouteVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsWorkRouteVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsWorkRuleVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsWorkRuleVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsWorkShiftPwVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsWorkShiftPwVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsWorkShiftSwVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsWorkShiftSwVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsWorkShiftVwVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsWorkShiftVwVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsWorkWatercoursePointVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsWorkWatercoursePointVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsWorkWatercourseVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsWorkWatercourseVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsWtGeneralVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsWtGeneralVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsWtShiftVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsWtShiftVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListEsWtSpecificVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EsWtSpecificVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListLogaccessVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: LogaccessVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListLogerrorVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: LogerrorVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListLogoperationVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: LogoperationVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListMessageVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: MessageVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListMmInventoryVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: MmInventoryVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListMmMaterialCategoryVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: MmMaterialCategoryVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListMmMaterialVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: MmMaterialVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListMmRequisitionVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: MmRequisitionVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListMmStockInOutVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: MmStockInOutVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListOrganizationVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: OrganizationVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListResourceVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: ResourceVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListRoleVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: RoleVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListSysNoticeVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: SysNoticeVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListTechnicsVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: TechnicsVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListUserMessageVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: UserMessageVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListUserVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: UserVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListUserWpVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: UserWpVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListUsergroupVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: UsergroupVO[] | null;
  /**
   * 页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页容量
   * @format int32
   */
  pageSize?: number;
  /**
   * 总条数
   * @format int32
   */
  total?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
}

export interface StwpQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /** 是否执行 */
  isExe?: boolean | null;
  /** 作业方式编码 */
  wtGeneralCode?: string | null;
  /** 作业类型编码 */
  wtSpecificCode?: string | null;
}

/** 公共通知 */
export interface SysNoticeFO {
  /** 附件 */
  attachments?: RecordFile[] | null;
  /**
   * 内容
   * @minLength 1
   */
  content: string;
  /** @format int64 */
  id?: number | null;
  /**
   * 标题
   * @minLength 1
   */
  title: string;
}

export interface SysNoticePQO {
  /** 内容 */
  content?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 标题 */
  title?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface SysNoticeQO {
  /** 内容 */
  content?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 标题 */
  title?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface SysNoticeVO {
  /** 内容 */
  content?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 标题 */
  title?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface TechnicsFO {
  /** 地址 */
  address?: string | null;
  /** 编号 */
  code?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否报警 */
  isAlarm?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /** 监测状态 */
  monitorState?: string | null;
  /** 名称 */
  name?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 类型 */
  typeCode?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface TechnicsPQO {
  /** 地址 */
  address?: string | null;
  /** 编号 */
  code?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否报警 */
  isAlarm?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /** 监测状态 */
  monitorState?: string | null;
  /** 名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 备注 */
  remark?: string | null;
  /** 类型 */
  typeCode?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface TechnicsQO {
  /** 地址 */
  address?: string | null;
  /** 编号 */
  code?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否报警 */
  isAlarm?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /** 监测状态 */
  monitorState?: string | null;
  /** 名称 */
  name?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 类型 */
  typeCode?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface TechnicsVO {
  /** 地址 */
  address?: string | null;
  /** 编号 */
  code?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /** 坝型 */
  damType?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否报警 */
  isAlarm?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /** 监测状态 */
  monitorState?: string | null;
  /** 名称 */
  name?: string | null;
  /** 工程规模 */
  projectScale?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 总库容  (万m3)
   * @format double
   */
  totalCapacity?: number | null;
  /** 类型 */
  typeCode?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
  /** 乡镇 */
  village?: string | null;
}

export interface TrackQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime: string;
  /**
   * 车牌号
   * @minLength 1
   */
  licence: string;
}

export interface TreeNode {
  children?: TreeNode[] | null;
  /** @format int64 */
  id?: number;
  name?: string | null;
}

export interface TreeNodeKfSk {
  children?: TreeNodeKfSk[] | null;
  code?: string | null;
  name?: string | null;
  type?: string | null;
}

export interface UserAssignRolesQO {
  roleIds: number[];
  /** @format int64 */
  userId: number;
}

export interface UserAssignUsergroupsQO {
  /** @format int64 */
  userId: number;
  usergroupIds: number[];
}

export interface UserCountVO {
  /**
   * 用户数量
   * @format int32
   */
  userCount?: number | null;
}

export interface UserForm {
  /** 地址 */
  address?: string | null;
  /**
   * 出生日期
   * @format date-time
   */
  birthday?: string | null;
  /** 是否可以登录 */
  canLogin?: boolean | null;
  /**
   * 编号
   * @minLength 0
   * @maxLength 50
   */
  code: string;
  /** 邮箱 */
  email?: string | null;
  /**
   * Id
   * @format int64
   */
  id?: number;
  /** 身份证号码 */
  idcode?: string | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 手机号 */
  mobile?: string | null;
  /**
   * 姓名
   * @minLength 0
   * @maxLength 50
   */
  name: string;
  /** 民族 */
  nation?: string | null;
  /**
   * 组织机构
   * @format int64
   */
  organizationId?: number | null;
  /** 岗位列表 */
  postList?: number[] | null;
  /** 备注 */
  remark?: string | null;
  /** 性别 */
  sex?: string | null;
  typeCode?: string | null;
  /** 微信openid */
  wxopenid?: string | null;
  /** 微信unionid */
  wxunionid?: string | null;
}

export interface UserFormAdd {
  /** 地址 */
  address?: string | null;
  /**
   * 出生日期
   * @format date-time
   */
  birthday?: string | null;
  /** 是否可以登录 */
  canLogin?: boolean | null;
  /**
   * 编号
   * @minLength 0
   * @maxLength 50
   */
  code: string;
  /** 邮箱 */
  email?: string | null;
  /**
   * Id
   * @format int64
   */
  id?: number;
  /** 身份证号码 */
  idcode?: string | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /**
   * 登录名
   * @minLength 0
   * @maxLength 50
   */
  loginname: string;
  /** 手机号 */
  mobile?: string | null;
  /**
   * 姓名
   * @minLength 0
   * @maxLength 50
   */
  name: string;
  /** 民族 */
  nation?: string | null;
  /**
   * 组织机构
   * @format int64
   */
  organizationId?: number | null;
  /**
   * 密码
   * @minLength 1
   */
  password: string;
  /** 岗位列表 */
  postList?: number[] | null;
  /** 备注 */
  remark?: string | null;
  /** 性别 */
  sex?: string | null;
  typeCode?: string | null;
  /** 微信openid */
  wxopenid?: string | null;
  /** 微信unionid */
  wxunionid?: string | null;
}

export interface UserMessagePQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 删除时间
   * @format date-time
   */
  deleteTime?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否已删除 */
  isDelete?: boolean | null;
  /** 是否已读 */
  isRead?: boolean | null;
  /** @format int64 */
  messageId?: number;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /**
   * 读取时间
   * @format date-time
   */
  readTime?: string | null;
  /** 标题 */
  title?: string | null;
  /** 类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** @format int64 */
  userId?: number;
}

export interface UserMessageQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 删除时间
   * @format date-time
   */
  deleteTime?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否已删除 */
  isDelete?: boolean | null;
  /** 是否已读 */
  isRead?: boolean | null;
  /** @format int64 */
  messageId?: number;
  /**
   * 读取时间
   * @format date-time
   */
  readTime?: string | null;
  /** 标题 */
  title?: string | null;
  /** 类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** @format int64 */
  userId?: number;
}

export interface UserMessageVO {
  /** 内容 */
  content?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 删除时间
   * @format date-time
   */
  deleteTime?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否已删除 */
  isDelete?: boolean | null;
  /** 是否已读 */
  isRead?: boolean | null;
  /** @format int64 */
  messageId?: number;
  /**
   * 读取时间
   * @format date-time
   */
  readTime?: string | null;
  /**
   * 实体id
   * @format int64
   */
  recordId?: number | null;
  /** 标题 */
  title?: string | null;
  /** 类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** @format int64 */
  userId?: number;
}

export interface UserNameQO {
  /** 用户名 */
  userName?: string | null;
}

/** 用户分页查询参数类 */
export interface UserPQO {
  /** 地址 */
  address?: string | null;
  /**
   * 出生日期
   * @format date-time
   */
  birthday?: string | null;
  /** 是否可以登录 */
  canLogin?: boolean | null;
  /** 编号 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 邮箱 */
  email?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 身份证号码 */
  idcode?: string | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /**
   * 上次登录时间
   * @format date-time
   */
  lastLoginTime?: string | null;
  /** 登录名 */
  loginname?: string | null;
  /** @format int32 */
  maxNos?: number | null;
  /** 手机号 */
  mobile?: string | null;
  /** 姓名 */
  name?: string | null;
  /** 民族 */
  nation?: string | null;
  /** 排序方向 */
  order?: string | null;
  /** @format int64 */
  organizationId?: number | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 密码 */
  password?: string | null;
  remark?: string | null;
  /** 性别 */
  sex?: string | null;
  /**
   * ssoid
   * @format int64
   */
  ssoId?: number | null;
  typeCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 微信openid */
  wxopenid?: string | null;
  /** 微信unionid */
  wxunionid?: string | null;
}

export interface UserPostDto {
  /** 编码 */
  code?: string | null;
  /**
   * 岗位id
   * @format int64
   */
  id?: number;
  /** 名称 */
  name?: string | null;
  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface UserQO {
  /** 地址 */
  address?: string | null;
  /**
   * 出生日期
   * @format date-time
   */
  birthday?: string | null;
  /** 是否可以登录 */
  canLogin?: boolean | null;
  /** 编号 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 邮箱 */
  email?: string | null;
  /** @format int64 */
  id?: number;
  /** 身份证号码 */
  idcode?: string | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /**
   * 上次登录时间
   * @format date-time
   */
  lastLoginTime?: string | null;
  /** 登录名 */
  loginname?: string | null;
  /** @format int32 */
  maxNos?: number | null;
  /** 手机号 */
  mobile?: string | null;
  /** 姓名 */
  name?: string | null;
  /** 民族 */
  nation?: string | null;
  /** @format int64 */
  organizationId?: number | null;
  /** 密码 */
  password?: string | null;
  remark?: string | null;
  /** 性别 */
  sex?: string | null;
  /**
   * ssoid
   * @format int64
   */
  ssoId?: number | null;
  typeCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 微信openid */
  wxopenid?: string | null;
  /** 微信unionid */
  wxunionid?: string | null;
}

export interface UserResetPwdQO {
  /**
   * 新密码
   * @minLength 1
   */
  newPassword: string;
  /**
   * 旧密码
   * @minLength 1
   */
  oldPassword: string;
}

export interface UserSelfForm {
  /** 地址 */
  address?: string | null;
  /**
   * 出生日期
   * @format date-time
   */
  birthday?: string | null;
  /** 邮箱 */
  email?: string | null;
  /** 身份证号码 */
  idcode?: string | null;
  /** 手机号 */
  mobile?: string | null;
  /**
   * 姓名
   * @minLength 0
   * @maxLength 50
   */
  name: string;
  /** 民族 */
  nation?: string | null;
  /** 性别 */
  sex?: string | null;
}

export interface UserVO {
  /** 地址 */
  address?: string | null;
  /**
   * 出生日期
   * @format date-time
   */
  birthday?: string | null;
  /** 是否可以登录 */
  canLogin?: boolean | null;
  /** 编号 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 邮箱 */
  email?: string | null;
  /** @format int64 */
  id?: number;
  /** 身份证号码 */
  idcode?: string | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /**
   * 上次登录时间
   * @format date-time
   */
  lastLoginTime?: string | null;
  /** 登录名 */
  loginname?: string | null;
  /** @format int32 */
  maxNos?: number | null;
  /** 手机号 */
  mobile?: string | null;
  /** 姓名 */
  name?: string | null;
  /** 民族 */
  nation?: string | null;
  /** @format int64 */
  organizationId?: number | null;
  /** 组织机构名称 */
  organizationName?: string | null;
  /** 密码 */
  password?: string | null;
  remark?: string | null;
  /** 性别 */
  sex?: string | null;
  /**
   * ssoid
   * @format int64
   */
  ssoId?: number | null;
  typeCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 微信openid */
  wxopenid?: string | null;
  /** 微信unionid */
  wxunionid?: string | null;
}

export interface UserWpVO {
  /** 地址 */
  address?: string | null;
  /**
   * 出生日期
   * @format date-time
   */
  birthday?: string | null;
  /** 是否可以登录 */
  canLogin?: boolean | null;
  /** 编号 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 邮箱 */
  email?: string | null;
  /** @format int64 */
  id?: number;
  /** 身份证号码 */
  idcode?: string | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /**
   * 上次登录时间
   * @format date-time
   */
  lastLoginTime?: string | null;
  /** 登录名 */
  loginname?: string | null;
  /** @format int32 */
  maxNos?: number | null;
  /** 手机号 */
  mobile?: string | null;
  /** 姓名 */
  name?: string | null;
  /** 民族 */
  nation?: string | null;
  /** @format int64 */
  organizationId?: number | null;
  /** 组织机构名称 */
  organizationName?: string | null;
  /** 密码 */
  password?: string | null;
  /** 岗位id列表 */
  postList?: number[] | null;
  /** 岗位列表 */
  postObjList?: UserPostDto[] | null;
  remark?: string | null;
  /** 性别 */
  sex?: string | null;
  /**
   * ssoid
   * @format int64
   */
  ssoId?: number | null;
  typeCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 微信openid */
  wxopenid?: string | null;
  /** 微信unionid */
  wxunionid?: string | null;
}

export interface UsergroupAssignRolesQO {
  roleIds: number[];
  /** @format int64 */
  usergroupId: number;
}

export interface UsergroupFO {
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * Id
   * @format int64
   */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface UsergroupPQO {
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * Id
   * @format int64
   */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100
   */
  pageSize?: number;
  /** 备注 */
  remark?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface UsergroupQO {
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * Id
   * @format int64
   */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface UsergroupVO {
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * Id
   * @format int64
   */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface WpPwSaveFO {
  /**
   * 结束日期
   * @format date-time
   */
  endDate: string;
  /** 数据列表 */
  foList?: EsWorkPlanPwFO[] | null;
  /**
   * 开始日期
   * @format date-time
   */
  startDate: string;
}

export interface WpSwSaveFO {
  /**
   * 结束日期
   * @format date-time
   */
  endDate: string;
  /** 数据列表 */
  foList?: EsWorkPlanSwFO[] | null;
  /**
   * 开始日期
   * @format date-time
   */
  startDate: string;
}

export interface WpVwSaveFO {
  /**
   * 结束日期
   * @format date-time
   */
  endDate: string;
  /** 数据列表 */
  foList?: EsWorkPlanVwFO[] | null;
  /**
   * 开始日期
   * @format date-time
   */
  startDate: string;
}

export interface WrMainStQO {
  /**
   * 称重时间(结束)
   * @format date-time
   */
  dataTimeEt?: string | null;
  /**
   * 称重时间(开始)
   * @format date-time
   */
  dataTimeSt?: string | null;
  /** 设备编号 */
  equipmentCode?: string | null;
  /** 车牌号 */
  licence?: string | null;
  /** 收货单位 */
  receiver?: string | null;
  /** 发货单位 */
  sender?: string | null;
  /** 垃圾来源 */
  trashSource?: string | null;
  /** 垃圾类型 */
  trashType?: string | null;
}

export interface WrMainStVO {
  /**
   * 收集量(吨)
   * @format double
   */
  collectAmount?: number;
  /**
   * 收集车次
   * @format int64
   */
  collectCount?: number;
  /**
   * 转运箱数
   * @format int64
   */
  transAmount?: number;
  /**
   * 转运车次
   * @format int64
   */
  transCount?: number;
}
