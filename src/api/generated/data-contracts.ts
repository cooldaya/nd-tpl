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

export type ApiAppVersionLastVersionPostData = FurionResultAppVersionVO;

export type ApiAppVersionListPostData = FurionResultListAppVersionVO;

export type ApiAppVersionPagedListPostData =
  FurionResultSqlSugarPagedListAppVersionVO;

export type ApiAppVersionShowPostData = FurionResultAppVersionVO;

export type ApiAppVersionUploadApkPostData = FurionResultAppVersionVO;

export interface ApiAppVersionUploadApkPostPayload {
  /**
   * 文件
   * @format binary
   */
  File: File;
  /** 版本号 */
  Version: string;
}

export type ApiAuthCheckloginPostData = FurionResultLoginResultUserAO;

export type ApiAuthLoginPostData = FurionResultLoginResultVO;

export type ApiAuthLoginSsoGetData = FurionResultIActionResult;

export interface ApiAuthLoginSsoGetParams {
  token?: string;
}

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

export type ApiCommonUploadImgsPostData = FurionResultListRecordFile;

export interface ApiCommonUploadImgsPostPayload {
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

export type ApiDsmSpgPztbAddPostData = FurionResultDsmSpgPztbVO;

export type ApiDsmSpgPztbEditPostData = FurionResultDsmSpgPztbVO;

export type ApiDsmSpgPztbListPostData = FurionResultListDsmSpgPztbVO;

export type ApiDsmSpgPztbPagedListPostData =
  FurionResultSqlSugarPagedListDsmSpgPztbVO;

export type ApiDsmSpgPztbRemoveMulPostData = FurionResultListInt64;

export type ApiDsmSpgPztbRemovePostData = FurionResultInt64;

export type ApiDsmSpgPztbShowPostData = FurionResultDsmSpgPztbVO;

export type ApiEmergencyPlanAddPostData = FurionResultEmergencyPlanVO;

export interface ApiEmergencyPlanAddPostPayload {
  /** 审批部门 */
  ApprovalDepartment?: string;
  /** 审批文号 */
  ApprovalNumber?: string;
  /** 应急联系电话 */
  ContactPhone: string;
  /**
   * 文件
   * @format binary
   */
  File?: File;
  /** @format int64 */
  Id?: number;
  /** 是否静态 */
  IsStatic?: boolean;
  /** 模块 */
  ModelName?: string;
  /** 名称 */
  Name: string;
  /** 编制单位 */
  PrepareOrg?: string;
  /**
   * 发布时间
   * @format date-time
   */
  PublishTime?: string;
  /**
   * 业务对象id
   * @format int64
   */
  RecordId?: number;
  /**
   * 水库id
   * @format int64
   */
  TechnicsId: number;
}

export type ApiEmergencyPlanEditPostData = FurionResultEmergencyPlanVO;

export interface ApiEmergencyPlanEditPostPayload {
  /** 审批部门 */
  ApprovalDepartment?: string;
  /** 审批文号 */
  ApprovalNumber?: string;
  /** 应急联系电话 */
  ContactPhone: string;
  /**
   * 文件
   * @format binary
   */
  File?: File;
  /** @format int64 */
  Id?: number;
  /** 是否静态 */
  IsStatic?: boolean;
  /** 模块 */
  ModelName?: string;
  /** 名称 */
  Name: string;
  /** 编制单位 */
  PrepareOrg?: string;
  /**
   * 发布时间
   * @format date-time
   */
  PublishTime?: string;
  /**
   * 业务对象id
   * @format int64
   */
  RecordId?: number;
  /**
   * 水库id
   * @format int64
   */
  TechnicsId: number;
}

export type ApiEmergencyPlanListPostData = FurionResultListEmergencyPlanVO;

export type ApiEmergencyPlanPagedListPostData =
  FurionResultSqlSugarPagedListEmergencyPlanVO;

export type ApiEmergencyPlanRemovePostData = FurionResultInt64;

export type ApiEmergencyPlanShowPostData = FurionResultEmergencyPlanVO;

export type ApiEmergencyPlanWhitePagedListPostData =
  FurionResultSqlSugarPagedListEmergencyPlanVO;

export type ApiEmergencyPlanWhitelistPostData = FurionResultListEmergencyPlanVO;

export type ApiEquipmentAddPostData = FurionResultEquipmentVO;

export type ApiEquipmentEditPostData = FurionResultEquipmentVO;

export type ApiEquipmentListPostData = FurionResultListEquipmentVO;

export type ApiEquipmentOnlineInfoPostData = FurionResultOnlineInfoVO;

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

export type ApiEquipmentParamEquipmentParamRainConditionPostData =
  FurionResultSqlSugarPagedListEquipmentParamRainConditionVO;

export type ApiEquipmentParamEquipmentYqDicPostData =
  FurionResultDictionaryInt64NullableDecimal;

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

export type ApiEquipmentParamMdDataTransferRateByTechnicesPostData =
  FurionResultSqlSugarPagedListDataTransferRateByTechnicesVO;

export type ApiEquipmentParamMdDataTransferRatePostData =
  FurionResultDataTransferRateVO;

export type ApiEquipmentParamMdDataTransferRateReportPostData =
  FurionResultListDataTransferRateVO;

export type ApiEquipmentParamMdEditPostData = FurionResultEquipmentParamMdVO;

export type ApiEquipmentParamMdListPostData =
  FurionResultListEquipmentParamMdVO;

export type ApiEquipmentParamMdPagedListPostData =
  FurionResultSqlSugarPagedListEquipmentParamMdVO;

export type ApiEquipmentParamMdQueryByGnssOffsetReportPostData =
  FurionResultSqlSugarPagedListGNSSOffsetReport;

export type ApiEquipmentParamMdQueryByRainfallInformationPostData =
  FurionResultSqlSugarPagedListWaterRainfallInformation;

export type ApiEquipmentParamMdQueryBySeepagePressureReportPostData =
  FurionResultSqlSugarPagedListSeepagePressureReport;

export type ApiEquipmentParamMdQueryBySeepageVolumeReportPostData =
  FurionResultSqlSugarPagedListSeepageVolumeReport;

export type ApiEquipmentParamMdQueryBySpillwayDischargeRealReportPostData =
  FurionResultSqlSugarPagedListSpillwayDischargeReport;

export type ApiEquipmentParamMdQueryBySpillwayDischargeReportPostData =
  FurionResultSqlSugarPagedListSpillwayDischargeReport;

export type ApiEquipmentParamMdQueryByWaterRainfallEigenvaluePostData =
  FurionResultListWaterRainfallEigenvalue;

export type ApiEquipmentParamMdQueryByWaterRainfallInformationPostData =
  FurionResultSqlSugarPagedListWaterRainfallInformation;

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

export type ApiExportExportReservoirCapacityTemplateGetData = any;

export type ApiExportExportReservoirFlowTemplateGetData = any;

export type ApiHikHikControllingPostData = FurionResultString;

export type ApiHikNmsCameraOnlinePostData = FurionResultNmsCameraOnlineResData;

export type ApiHikPlaybackHlsUrlPostData = FurionResultString;

export type ApiHikPlaybackUrlPostData = FurionResultString;

export type ApiHikPreviewUrlPostData = FurionResultString;

export type ApiImvdExistImcdWrbPostData = FurionResultListTreeNodeImvd;

export type ApiImvdImvdDmpPostData =
  FurionResultSqlSugarPagedListDsmImvdImvdmpVO;

export type ApiInspectionItemAddPostData = FurionResultInspectionItemVO;

export type ApiInspectionItemEditPostData = FurionResultInspectionItemVO;

export type ApiInspectionItemLevelAddPostData =
  FurionResultInspectionItemLevelVO;

export type ApiInspectionItemLevelEditPostData =
  FurionResultInspectionItemLevelVO;

export type ApiInspectionItemLevelListPostData =
  FurionResultListInspectionItemLevelVO;

export type ApiInspectionItemLevelPagedListPostData =
  FurionResultSqlSugarPagedListInspectionItemLevelVO;

export type ApiInspectionItemLevelRemoveMulPostData = FurionResultListInt64;

export type ApiInspectionItemLevelRemovePostData = FurionResultInt64;

export type ApiInspectionItemLevelShowPostData =
  FurionResultInspectionItemLevelVO;

export type ApiInspectionItemListPostData = FurionResultListInspectionItemVO;

export type ApiInspectionItemPagedListPostData =
  FurionResultSqlSugarPagedListInspectionItemVO;

export type ApiInspectionItemRemoveMulPostData = FurionResultListInt64;

export type ApiInspectionItemRemovePostData = FurionResultInt64;

export type ApiInspectionRecordAddPostData = FurionResultInspectionRecordVO;

export type ApiInspectionRecordEditPostData = FurionResultInspectionRecordVO;

export type ApiInspectionRecordGetInspectionRecordMonthReportPostData =
  FurionResultSqlSugarPagedListInspectionRecordMonthReportVO;

export type ApiInspectionRecordListPostData =
  FurionResultListInspectionRecordVO;

export type ApiInspectionRecordLocAddPostData =
  FurionResultInspectionRecordLocVO;

export type ApiInspectionRecordLocListPostData =
  FurionResultListInspectionRecordLocVO;

export type ApiInspectionRecordLocPagedListPostData =
  FurionResultSqlSugarPagedListInspectionRecordLocVO;

export type ApiInspectionRecordLocShowPostData =
  FurionResultInspectionRecordLocVO;

export type ApiInspectionRecordPagedListPostData =
  FurionResultSqlSugarPagedListInspectionRecordVO;

export type ApiInspectionRecordRemovePostData = FurionResultInt64;

export type ApiInspectionRecordShowPostData = FurionResultInspectionRecordVO;

export type ApiKnowledgeFileAddPostData = FurionResultKnowledgeFileVO;

export type ApiKnowledgeFileEditPostData = FurionResultKnowledgeFileVO;

export type ApiKnowledgeFileListPostData = FurionResultListKnowledgeFileVO;

export type ApiKnowledgeFilePagedListPostData =
  FurionResultSqlSugarPagedListKnowledgeFileVO;

export type ApiKnowledgeFileRemovePostData = FurionResultListInt64;

export type ApiKnowledgeFileShowPostData = FurionResultKnowledgeFileVO;

export type ApiKnowledgeFileTreedataPostData = FurionResultListTreeNodeKf;

export type ApiKnowledgeFileUploadPostData = FurionResultKnowledgeFile;

export interface ApiKnowledgeFileUploadPostPayload {
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
   * ParentId
   * @format int64
   */
  ParentId?: number;
  /**
   * 业务对象id
   * @format int64
   */
  RecordId: number;
}

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

export type ApiOrganizationAddPostData = FurionResultOrganizationVO;

export type ApiOrganizationEditPostData = FurionResultOrganizationVO;

export type ApiOrganizationListPostData = FurionResultListOrganizationVO;

export type ApiOrganizationPagedListPostData =
  FurionResultSqlSugarPagedListOrganizationVO;

export type ApiOrganizationRemovePostData = FurionResultListInt64;

export type ApiOrganizationShowPostData = FurionResultOrganizationVO;

export type ApiOrganizationTreedataPostData = FurionResultListTreeNode;

export type ApiPrealarmRecordAddPostData = FurionResultPrealarmRecordVO;

export type ApiPrealarmRecordEditPostData = FurionResultPrealarmRecordVO;

export type ApiPrealarmRecordHandleActAddPostData =
  FurionResultPrealarmRecordHandleActVO;

export type ApiPrealarmRecordHandleActEditPostData =
  FurionResultPrealarmRecordHandleActVO;

export type ApiPrealarmRecordHandleActListPostData =
  FurionResultListPrealarmRecordHandleActVO;

export type ApiPrealarmRecordHandleActPagedListPostData =
  FurionResultSqlSugarPagedListPrealarmRecordHandleActVO;

export type ApiPrealarmRecordHandleActQueryByWiidPostData =
  FurionResultPrealarmRecordHandleActVO;

export type ApiPrealarmRecordHandleActRemoveMulPostData = FurionResultListInt64;

export type ApiPrealarmRecordHandleActRemovePostData = FurionResultInt64;

export type ApiPrealarmRecordHandleActShowPostData =
  FurionResultPrealarmRecordHandleActVO;

export type ApiPrealarmRecordListPostData = FurionResultListPrealarmRecordVO;

export type ApiPrealarmRecordPagedListPostData =
  FurionResultSqlSugarPagedListPrealarmRecordVO;

export type ApiPrealarmRecordPrealarmCountPostData = FurionResultPrealarmCount;

export type ApiPrealarmRecordPrealarmDataPostData = FurionResultPrealarmDataVO;

export type ApiPrealarmRecordRemoveMulPostData = FurionResultListInt64;

export type ApiPrealarmRecordRemovePostData = FurionResultInt64;

export type ApiPrealarmRecordShowOnePostData = FurionResultPrealarmRecordVO;

export type ApiPrealarmRecordShowPostData = FurionResultPrealarmRecordVO;

export type ApiPrealarmRecordVerifyPrealarmDataPostData = FurionResultString;

export type ApiPrealarmRecordWhitePagedListPostData =
  FurionResultSqlSugarPagedListPrealarmRecordVO;

export type ApiPrealarmRecordWhitelistPostData =
  FurionResultListPrealarmRecordVO;

export type ApiPrealarmRuleAddPostData = FurionResultPrealarmRuleVO;

export type ApiPrealarmRuleEditPostData = FurionResultPrealarmRuleVO;

export type ApiPrealarmRuleGetRpsPostData = FurionResultListInt64;

export type ApiPrealarmRuleListPostData = FurionResultListPrealarmRuleVO;

export type ApiPrealarmRulePagedListPostData =
  FurionResultSqlSugarPagedListPrealarmRuleVO;

export type ApiPrealarmRuleRemoveMulPostData = FurionResultListInt64;

export type ApiPrealarmRuleRemovePostData = FurionResultInt64;

export type ApiPrealarmRuleShowPostData = FurionResultPrealarmRuleVO;

export type ApiPrealarmRuleUpdateRpsPostData = FurionResultBoolean;

export type ApiProjectDocAddPostData = FurionResultProjectDocVO;

export interface ApiProjectDocAddPostPayload {
  /**
   * 文件
   * @format binary
   */
  File?: File;
  /** @format int64 */
  Id?: number;
  /** 是否静态 */
  IsStatic?: boolean;
  /** 模块 */
  ModelName?: string;
  /** 名称 */
  Name: string;
  /**
   * 业务对象id
   * @format int64
   */
  RecordId?: number;
  /**
   * 水库id
   * @format int64
   */
  TechnicsId: number;
}

export type ApiProjectDocEditPostData = FurionResultProjectDocVO;

export interface ApiProjectDocEditPostPayload {
  /**
   * 文件
   * @format binary
   */
  File?: File;
  /** @format int64 */
  Id?: number;
  /** 是否静态 */
  IsStatic?: boolean;
  /** 模块 */
  ModelName?: string;
  /** 名称 */
  Name: string;
  /**
   * 业务对象id
   * @format int64
   */
  RecordId?: number;
  /**
   * 水库id
   * @format int64
   */
  TechnicsId: number;
}

export type ApiProjectDocListPostData = FurionResultListProjectDocVO;

export type ApiProjectDocPagedListPostData =
  FurionResultSqlSugarPagedListProjectDocVO;

export type ApiProjectDocRemovePostData = FurionResultInt64;

export type ApiProjectDocShowPostData = FurionResultProjectDocVO;

export type ApiProjectDocWhitePagedListPostData =
  FurionResultSqlSugarPagedListProjectDocVO;

export type ApiProjectDocWhitelistPostData = FurionResultListProjectDocVO;

export type ApiProjectDrawingAddPostData = FurionResultProjectDrawingVO;

export interface ApiProjectDrawingAddPostPayload {
  /**
   * 文件
   * @format binary
   */
  File?: File;
  /** @format int64 */
  Id?: number;
  /** 是否静态 */
  IsStatic?: boolean;
  /** 模块 */
  ModelName?: string;
  /** 名称 */
  Name: string;
  /**
   * 业务对象id
   * @format int64
   */
  RecordId?: number;
  /**
   * 水库id
   * @format int64
   */
  TechnicsId: number;
}

export type ApiProjectDrawingEditPostData = FurionResultProjectDrawingVO;

export interface ApiProjectDrawingEditPostPayload {
  /**
   * 文件
   * @format binary
   */
  File?: File;
  /** @format int64 */
  Id?: number;
  /** 是否静态 */
  IsStatic?: boolean;
  /** 模块 */
  ModelName?: string;
  /** 名称 */
  Name: string;
  /**
   * 业务对象id
   * @format int64
   */
  RecordId?: number;
  /**
   * 水库id
   * @format int64
   */
  TechnicsId: number;
}

export type ApiProjectDrawingListPostData = FurionResultListProjectDrawingVO;

export type ApiProjectDrawingPagedListPostData =
  FurionResultSqlSugarPagedListProjectDrawingVO;

export type ApiProjectDrawingRemovePostData = FurionResultInt64;

export type ApiProjectDrawingShowPostData = FurionResultProjectDrawingVO;

export type ApiProjectDrawingWhitePagedListPostData =
  FurionResultSqlSugarPagedListProjectDrawingVO;

export type ApiProjectDrawingWhitelistPostData =
  FurionResultListProjectDrawingVO;

export type ApiReservoirCapacityAddBatchPostData = FurionResultIActionResult;

export type ApiReservoirCapacityAddBatchPostPayload = ReservoirCapacity[];

export type ApiReservoirCapacityAddPostData = FurionResultReservoirCapacityVO;

export type ApiReservoirCapacityDelBatchPostData = FurionResultIActionResult;

export type ApiReservoirCapacityEditBatchPostData = FurionResultIActionResult;

export type ApiReservoirCapacityEditBatchPostPayload = ReservoirCapacityQO[];

export type ApiReservoirCapacityEditPostData = FurionResultReservoirCapacityVO;

export type ApiReservoirCapacityImportExcelPostData = FurionResultString;

export interface ApiReservoirCapacityImportExcelPostPayload {
  /**
   * 文件
   * @format binary
   */
  File?: File;
}

export type ApiReservoirCapacityListPostData =
  FurionResultListReservoirCapacityVO;

export type ApiReservoirCapacityPagedListPostData =
  FurionResultSqlSugarPagedListReservoirCapacityVO;

export type ApiReservoirCapacityRemoveMulPostData = FurionResultListInt64;

export type ApiReservoirCapacityRemovePostData = FurionResultInt64;

export type ApiReservoirCapacityShowPostData = FurionResultReservoirCapacityVO;

export type ApiReservoirFlowAddBatchPostData = FurionResultIActionResult;

export type ApiReservoirFlowAddBatchPostPayload = ReservoirFlow[];

export type ApiReservoirFlowAddPostData = FurionResultReservoirFlowVO;

export type ApiReservoirFlowDelBatchPostData = FurionResultIActionResult;

export type ApiReservoirFlowEditBatchPostData = FurionResultIActionResult;

export type ApiReservoirFlowEditBatchPostPayload = ReservoirFlowQO[];

export type ApiReservoirFlowEditPostData = FurionResultReservoirFlowVO;

export type ApiReservoirFlowImportExcelPostData = FurionResultString;

export interface ApiReservoirFlowImportExcelPostPayload {
  /**
   * 文件
   * @format binary
   */
  File?: File;
}

export type ApiReservoirFlowListPostData = FurionResultListReservoirFlowVO;

export type ApiReservoirFlowPagedListPostData =
  FurionResultSqlSugarPagedListReservoirFlowVO;

export type ApiReservoirFlowRemoveMulPostData = FurionResultListInt64;

export type ApiReservoirFlowRemovePostData = FurionResultInt64;

export type ApiReservoirFlowShowPostData = FurionResultReservoirFlowVO;

export type ApiReservoirProjectAddPostData = FurionResultReservoirProjectVO;

export type ApiReservoirProjectEditPostData = FurionResultReservoirProject;

export type ApiReservoirProjectGetProjectTsFilePostData =
  FurionResultProjectTsFileVO;

export type ApiReservoirProjectGetPtfPagedListPostData =
  FurionResultSqlSugarPagedListProjectTsFileVO;

export type ApiReservoirProjectListPostData =
  FurionResultListReservoirProjectVO;

export type ApiReservoirProjectPagedListPostData =
  FurionResultSqlSugarPagedListReservoirProjectVO;

export type ApiReservoirProjectRemoveMulPostData = FurionResultListInt64;

export type ApiReservoirProjectRemovePostData = FurionResultInt64;

export type ApiReservoirProjectSaveProjectTsFilePostData =
  FurionResultProjectTsFileSaveFO;

export type ApiReservoirProjectShowPostData = FurionResultReservoirProjectVO;

export type ApiReservoirRpAddPostData = FurionResultReservoirRpVO;

export type ApiReservoirRpEditPostData = FurionResultReservoirRpVO;

export type ApiReservoirRpGetAllByTypePageListPostData =
  FurionResultReservoirRpPageByTypeVO;

export type ApiReservoirRpGetAllByTypePostData =
  FurionResultListReservoirRpByTypeVO;

export type ApiReservoirRpListPostData = FurionResultListReservoirRpVO;

export type ApiReservoirRpPagedListPostData =
  FurionResultSqlSugarPagedListReservoirRpVO;

export type ApiReservoirRpRemoveMulPostData = FurionResultListInt64;

export type ApiReservoirRpRemovePostData = FurionResultInt64;

export type ApiReservoirRpShowPostData = FurionResultReservoirRpVO;

export type ApiReservoirSwDataAddPostData = FurionResultReservoirSwDataVO;

export type ApiReservoirSwDataEditPostData = FurionResultReservoirSwDataVO;

export type ApiReservoirSwDataListPostData = FurionResultListReservoirSwDataVO;

export type ApiReservoirSwDataPagedListPostData =
  FurionResultSqlSugarPagedListReservoirSwDataVO;

export type ApiReservoirSwDataRemoveMulPostData = FurionResultListInt64;

export type ApiReservoirSwDataRemovePostData = FurionResultInt64;

export type ApiReservoirSwDataShowPostData = FurionResultReservoirSwDataVO;

export type ApiReservoirVrAddPostData = FurionResultReservoirVrVO;

export interface ApiReservoirVrAddPostPayload {
  /** 编码 */
  Code: string;
  /** @format date-time */
  CreatedAt?: string;
  CreatedPerson?: string;
  /**
   * 文件
   * @format binary
   */
  File?: File;
  /** @format int64 */
  Id?: number;
  /** 初始位置pitch */
  InitPitch?: string;
  /** 初始位置yaw */
  InitYaw?: string;
  /** 是否静态 */
  IsStatic?: boolean;
  /** 模块 */
  ModelName?: string;
  /**
   * 业务对象id
   * @format int64
   */
  RecordId: number;
  /**
   * 水库id
   * @format int64
   */
  TechnicsId: number;
  /** @format date-time */
  UpdatedAt?: string;
  UpdatedPerson?: string;
}

export type ApiReservoirVrEditPostData = FurionResultReservoirVrVO;

export interface ApiReservoirVrEditPostPayload {
  /** 编码 */
  Code: string;
  /** @format date-time */
  CreatedAt?: string;
  CreatedPerson?: string;
  /**
   * 文件
   * @format binary
   */
  File?: File;
  /** @format int64 */
  Id?: number;
  /** 初始位置pitch */
  InitPitch?: string;
  /** 初始位置yaw */
  InitYaw?: string;
  /** 是否静态 */
  IsStatic?: boolean;
  /** 模块 */
  ModelName?: string;
  /**
   * 业务对象id
   * @format int64
   */
  RecordId: number;
  /**
   * 水库id
   * @format int64
   */
  TechnicsId: number;
  /** @format date-time */
  UpdatedAt?: string;
  UpdatedPerson?: string;
}

export type ApiReservoirVrListPostData = FurionResultListReservoirVrVO;

export type ApiReservoirVrPagedListPostData =
  FurionResultSqlSugarPagedListReservoirVrVO;

export type ApiReservoirVrRemoveMulPostData = FurionResultListInt64;

export type ApiReservoirVrRemovePostData = FurionResultInt64;

export type ApiReservoirVrShowPostData = FurionResultReservoirVrVO;

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

export type ApiTechnicsAddPostData = FurionResultTechnicsVO;

export type ApiTechnicsEditPostData = FurionResultTechnicsVO;

export type ApiTechnicsGetCoverNumByVillagePostData =
  FurionResultListGetCoverNum;

export type ApiTechnicsGetCoverNumPostData = FurionResultGetCoverNum;

export type ApiTechnicsGetImplementationKeyLinksPostData =
  FurionResultImplementationKeyLinksVO;

export type ApiTechnicsGetImplementationReservoirSafetyAppraisalPostData =
  FurionResultImplementationReservoirSafetyAppraisalVO;

export type ApiTechnicsGetTechnicsCapacityPostData =
  FurionResultTechnicsCapacityVO;

export type ApiTechnicsGetTechnicsCountByVillagePostData =
  FurionResultListGetTechnicsCountByVillageVO;

export type ApiTechnicsListPostData = FurionResultListTechnicsVO;

export type ApiTechnicsPagedListPostData =
  FurionResultSqlSugarPagedListTechnicsVO;

export type ApiTechnicsQueryByConventionalWaterLevelReportPostData =
  FurionResultSqlSugarPagedListConventionalWaterLevelReport;

export type ApiTechnicsQueryByDailyWaterLevelReportPostData =
  FurionResultSqlSugarPagedListDailyWaterLevelReport;

export type ApiTechnicsQueryByReservoirRpPostData = FurionResultReservoirRPNum;

export type ApiTechnicsQueryByReservoirStatePostData =
  FurionResultSqlSugarPagedListReservoirState;

export type ApiTechnicsQueryByReservoirStatusPostData =
  FurionResultReservoirStatus;

export type ApiTechnicsRemoveMulPostData = FurionResultListInt64;

export type ApiTechnicsRemovePostData = FurionResultInt64;

export type ApiTechnicsShowPostData = FurionResultTechnicsVO;

export type ApiTechnicsTechnicsInvalidWaterLevelListPostData =
  FurionResultTechnicsInvalidWaterLevelVO;

export type ApiTechnicsTechnicsListWithepPostData =
  FurionResultListTechnicsWithEquipment;

export type ApiTechnicsTechnicsOverflowByNormalWaterListPostData =
  FurionResultTechnicsOverflowByNormalWaterVO;

export type ApiTechnicsTechnicsOverflowListPostData =
  FurionResultTechnicsOverflowVO;

export type ApiTechnicsWhitePagedListPostData =
  FurionResultSqlSugarPagedListTechnicsVO;

export type ApiTechnicsWhitelistPostData = FurionResultListTechnicsVO;

export type ApiUserAddPostData = FurionResultUserVO;

export type ApiUserAssignRolesPostData = any;

export type ApiUserAssignTechnicsesPostData = any;

export type ApiUserAssignUsergroupsPostData = any;

export type ApiUserEditPostData = FurionResultUserVO;

export type ApiUserEditPwdPostData = any;

export type ApiUserEditSelfPostData = FurionResultUserVO;

export type ApiUserGetRolesPostData = FurionResultListRoleVO;

export type ApiUserGetTechnicsesPostData = FurionResultListTechnicsVO;

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

export type ApiWorkNoticeAddPostData = FurionResultWorkNoticeVO;

export type ApiWorkNoticeApproveActAddPostData =
  FurionResultWorkNoticeApproveActVO;

export type ApiWorkNoticeApproveActEditPostData =
  FurionResultWorkNoticeApproveActVO;

export type ApiWorkNoticeApproveActListPostData =
  FurionResultListWorkNoticeApproveActVO;

export type ApiWorkNoticeApproveActPagedListPostData =
  FurionResultSqlSugarPagedListWorkNoticeApproveActVO;

export type ApiWorkNoticeApproveActRemoveMulPostData = FurionResultListInt64;

export type ApiWorkNoticeApproveActRemovePostData = FurionResultInt64;

export type ApiWorkNoticeApproveActShowPostData =
  FurionResultWorkNoticeApproveActVO;

export type ApiWorkNoticeEditPostData = FurionResultWorkNoticeVO;

export type ApiWorkNoticeHandleActAddPostData =
  FurionResultWorkNoticeHandleActVO;

export type ApiWorkNoticeHandleActEditPostData =
  FurionResultWorkNoticeHandleActVO;

export type ApiWorkNoticeHandleActListPostData =
  FurionResultListWorkNoticeHandleActVO;

export type ApiWorkNoticeHandleActPagedListPostData =
  FurionResultSqlSugarPagedListWorkNoticeHandleActVO;

export type ApiWorkNoticeHandleActRemoveMulPostData = FurionResultListInt64;

export type ApiWorkNoticeHandleActRemovePostData = FurionResultInt64;

export type ApiWorkNoticeHandleActShowPostData =
  FurionResultWorkNoticeHandleActVO;

export type ApiWorkNoticeListPostData = FurionResultListWorkNoticeVO;

export type ApiWorkNoticePagedListPostData =
  FurionResultSqlSugarPagedListWorkNoticeVO;

export type ApiWorkNoticeQueryByWiidPostData =
  FurionResultWorkNoticeDataByWiidVO;

export type ApiWorkNoticeRemoveMulPostData = FurionResultListInt64;

export type ApiWorkNoticeRemovePostData = FurionResultInt64;

export type ApiWorkNoticeShowPostData = FurionResultWorkNoticeVO;

export interface AppVersionPQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  filePath?: string | null;
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
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  version?: string | null;
}

export interface AppVersionQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  filePath?: string | null;
  /** @format int64 */
  id?: number;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  version?: string | null;
}

export interface AppVersionVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  filePath?: string | null;
  /** @format int64 */
  id?: number;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  version?: string | null;
}

/** 全局分页查询输入参数 */
export interface BasePageQuery {
  /** 排序字段 */
  field?: string | null;
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
   */
  pageSize?: number;
}

export interface ConventionalWaterLevelReport {
  /**
   * 死水位（m）
   * @format double
   */
  invalidWaterLevel?: number | null;
  /** 是否饮用水源 */
  isDrinkingWater?: boolean | null;
  /**
   * 正常库容（万m3)
   * @format double
   */
  normalCapacity?: number | null;
  /**
   * 正常蓄水位（m）
   * @format double
   */
  normalWaterLevel?: number | null;
  /** 工程规模 */
  projectScale?: string | null;
  /**
   * 水库ID
   * @format int64
   */
  technicsId?: number | null;
  /** 水库名称 */
  technicsName?: string | null;
  /**
   * 总库容  (万m3)
   * @format double
   */
  totalCapacity?: number | null;
  /** 乡镇 */
  village?: string | null;
  /**
   * 水位（m）
   * @format double
   */
  waterAvgLevel?: number | null;
  /**
   * 当前库容（万m³）
   * @format double
   */
  waterCapacity?: number | null;
  /** 工作站名称 */
  workStationName?: string | null;
}

export interface DailyWaterLevelReport {
  /** 水坝报警内容 */
  alarmInfo?: string | null;
  /**
   * 预警水位（m）
   * @format double
   */
  alarmWaterLevel?: number | null;
  /**
   * 校核洪水位（m）
   * @format double
   */
  floodWaterLevel?: number | null;
  /**
   * 死水位（m）
   * @format double
   */
  invalidWaterLevel?: number | null;
  /**
   * 最大库容（m³）
   * @format double
   */
  maxCapacity?: number | null;
  /**
   * 溢流水深（m）
   * @format double
   */
  maxDepth?: number | null;
  /**
   * 正常库容（万m³）
   * @format double
   */
  normalWaterCapacity?: number | null;
  /** 工程规模 */
  projectScale?: string | null;
  /**
   * 溢洪道堰顶高程（m）
   * @format double
   */
  spillwayTopAltitude?: number | null;
  /**
   * 水库ID
   * @format int64
   */
  technicsId?: number;
  /** 水库名称 */
  technicsName?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /**
   * 平均泄流量（m3/s）
   * @format double
   */
  waterAvgDischarges?: number | null;
  /**
   * 水位（m）
   * @format double
   */
  waterAvgLevel?: number | null;
  /**
   * 当前库容（万m³）
   * @format double
   */
  waterCapacity?: number | null;
  /**
   * 最大泄流量（m³/s）
   * @format double
   */
  waterCouDischarges?: number | null;
  /**
   * 最高水位（m）
   * @format double
   */
  waterMaxLevel?: number | null;
  /**
   * 最高水位时间
   * @format date-time
   */
  waterMaxTime?: string | null;
  /**
   * 最低水位（m）
   * @format double
   */
  waterMinLevel?: number | null;
  /**
   * 最低水位时间
   * @format date-time
   */
  waterMinTime?: string | null;
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
  /**
   * created_at
   * @format date-time
   */
  createdAt?: string | null;
  /** created_person */
  createdPerson?: string | null;
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
  /**
   * updated_at
   * @format date-time
   */
  updatedAt?: string | null;
  /** updated_person */
  updatedPerson?: string | null;
}

export interface DataTransferRateByTechnicesQO {
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
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
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number;
}

export interface DataTransferRateByTechnicesVO {
  /**
   * 数据捕获率
   * @format double
   */
  dataCaptureRate?: number;
  /**
   * 数据有效率
   * @format double
   */
  dataEfficient?: number;
  /**
   * 有效数
   * @format int32
   */
  effectiveCount?: number | null;
  /**
   * 数据传输有效率
   * @format double
   */
  efficientDataTransfer?: number;
  /**
   * 水库id
   * @format int64
   */
  id?: number;
  /**
   * 无效数
   * @format int32
   */
  invalidCount?: number | null;
  /**
   * 缺失数
   * @format int32
   */
  missingCount?: number | null;
  /** 水库名称 */
  name?: string | null;
  /**
   * 接受数
   * @format int32
   */
  receiveCount?: number | null;
  /**
   * 应该接收数
   * @format int32
   */
  sReceiveCount?: number;
}

export interface DataTransferRateQO {
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number;
}

export interface DataTransferRateVO {
  /** 设备编号 */
  code?: string | null;
  /**
   * 数据捕获率
   * @format double
   */
  dataCaptureRate?: number;
  /**
   * 数据有效率
   * @format double
   */
  dataEfficient?: number;
  /**
   * 有效数
   * @format int32
   */
  effectiveCount?: number | null;
  /**
   * 数据传输有效率
   * @format double
   */
  efficientDataTransfer?: number;
  /**
   * 无效数
   * @format int32
   */
  invalidCount?: number | null;
  /**
   * 缺失数
   * @format int32
   */
  missingCount?: number | null;
  /** 节点名称 */
  name?: string | null;
  /**
   * 接受数
   * @format int32
   */
  receiveCount?: number | null;
  /**
   * 应该接收数
   * @format int32
   */
  sReceiveCount?: number;
}

export interface DdTypedataQO {
  /**
   * Nestedcode
   * @minLength 1
   */
  nestedcode: string;
}

export interface DsmImvdImvdmpPQO {
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
  /** 排序字段 */
  field?: string | null;
  /** 缩略文件路径 */
  filesimurl?: string | null;
  /** 文件路径 */
  fileurl?: string | null;
  /** @format int64 */
  id?: number;
  /** 视频图像监控点编号 */
  imvdmpcd?: string | null;
  /**
   * 监控时间
   * @format date-time
   */
  mstm?: string | null;
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
  /** 水库代码 */
  rscd?: string | null;
}

export interface DsmImvdImvdmpVO {
  /** 缩略文件路径 */
  filesimurl?: string | null;
  /** 文件路径 */
  fileurl?: string | null;
  /** @format int64 */
  id?: number;
  /** 视频图像监控点编号 */
  imvdmpcd?: string | null;
  /**
   * 监控时间
   * @format date-time
   */
  mstm?: string | null;
  /** 水库代码 */
  rscd?: string | null;
  /** 水库名称 */
  rsnm?: string | null;
}

export interface DsmSpgPztbFO {
  /** 桩号 */
  ch?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 仪表出厂编号 */
  dvfccd?: string | null;
  /**
   * 关联的设备
   * @format int64
   */
  equipmentId?: number | null;
  /** 水工建筑物编号1：大坝；2：溢洪道；3：非常溢洪道；4：泄洪洞；5：输水洞；6：引水洞；9：其他 */
  hycncd?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 安装日期
   * @format date-time
   */
  indt?: string | null;
  /**
   * 进水段底高程
   * @format double
   */
  ipbtel?: number | null;
  /**
   * 进水段顶高程
   * @format int32
   */
  iptpel?: number | null;
  /** 基点编号 */
  mpcd?: string | null;
  /** 监测类型1：坝体渗流压力；2：坝基渗流压力；3：绕坝渗流压力；4：扬压力 */
  mstp?: string | null;
  /**
   * 轴距(m)
   * @format double
   */
  ofax?: number | null;
  /** 备注 */
  rm?: string | null;
  /** 水库代码 */
  rscd?: string | null;
  /**
   * 管底高程
   * @format double
   */
  tbbtel?: number | null;
  /**
   * 管口高程
   * @format double
   */
  tbtpel?: number | null;
  /**
   * 考证信息日期
   * @format date-time
   */
  txindt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 工作状态 */
  wkcn?: string | null;
}

export interface DsmSpgPztbPQO {
  /** 桩号 */
  ch?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 仪表出厂编号 */
  dvfccd?: string | null;
  /**
   * 关联的设备
   * @format int64
   */
  equipmentId?: number | null;
  /** 排序字段 */
  field?: string | null;
  /** 水工建筑物编号1：大坝；2：溢洪道；3：非常溢洪道；4：泄洪洞；5：输水洞；6：引水洞；9：其他 */
  hycncd?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 安装日期
   * @format date-time
   */
  indt?: string | null;
  /**
   * 进水段底高程
   * @format double
   */
  ipbtel?: number | null;
  /**
   * 进水段顶高程
   * @format int32
   */
  iptpel?: number | null;
  /** 基点编号 */
  mpcd?: string | null;
  /** 监测类型1：坝体渗流压力；2：坝基渗流压力；3：绕坝渗流压力；4：扬压力 */
  mstp?: string | null;
  /**
   * 轴距(m)
   * @format double
   */
  ofax?: number | null;
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
  rm?: string | null;
  /** 水库代码 */
  rscd?: string | null;
  /**
   * 管底高程
   * @format double
   */
  tbbtel?: number | null;
  /**
   * 管口高程
   * @format double
   */
  tbtpel?: number | null;
  /**
   * 考证信息日期
   * @format date-time
   */
  txindt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 工作状态 */
  wkcn?: string | null;
}

export interface DsmSpgPztbQO {
  /** 桩号 */
  ch?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 仪表出厂编号 */
  dvfccd?: string | null;
  /**
   * 关联的设备
   * @format int64
   */
  equipmentId?: number | null;
  /** 水工建筑物编号1：大坝；2：溢洪道；3：非常溢洪道；4：泄洪洞；5：输水洞；6：引水洞；9：其他 */
  hycncd?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 安装日期
   * @format date-time
   */
  indt?: string | null;
  /**
   * 进水段底高程
   * @format double
   */
  ipbtel?: number | null;
  /**
   * 进水段顶高程
   * @format int32
   */
  iptpel?: number | null;
  /** 基点编号 */
  mpcd?: string | null;
  /** 监测类型1：坝体渗流压力；2：坝基渗流压力；3：绕坝渗流压力；4：扬压力 */
  mstp?: string | null;
  /**
   * 轴距(m)
   * @format double
   */
  ofax?: number | null;
  /** 备注 */
  rm?: string | null;
  /** 水库代码 */
  rscd?: string | null;
  /**
   * 管底高程
   * @format double
   */
  tbbtel?: number | null;
  /**
   * 管口高程
   * @format double
   */
  tbtpel?: number | null;
  /**
   * 考证信息日期
   * @format date-time
   */
  txindt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 工作状态 */
  wkcn?: string | null;
}

export interface DsmSpgPztbVO {
  /** 桩号 */
  ch?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 仪表出厂编号 */
  dvfccd?: string | null;
  /**
   * 关联的设备
   * @format int64
   */
  equipmentId?: number | null;
  /** 水工建筑物编号1：大坝；2：溢洪道；3：非常溢洪道；4：泄洪洞；5：输水洞；6：引水洞；9：其他 */
  hycncd?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 安装日期
   * @format date-time
   */
  indt?: string | null;
  /**
   * 进水段底高程
   * @format double
   */
  ipbtel?: number | null;
  /**
   * 进水段顶高程
   * @format int32
   */
  iptpel?: number | null;
  /** 基点编号 */
  mpcd?: string | null;
  /** 监测类型1：坝体渗流压力；2：坝基渗流压力；3：绕坝渗流压力；4：扬压力 */
  mstp?: string | null;
  /**
   * 轴距(m)
   * @format double
   */
  ofax?: number | null;
  /** 备注 */
  rm?: string | null;
  /** 水库代码 */
  rscd?: string | null;
  /**
   * 管底高程
   * @format double
   */
  tbbtel?: number | null;
  /**
   * 管口高程
   * @format double
   */
  tbtpel?: number | null;
  /**
   * 考证信息日期
   * @format date-time
   */
  txindt?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 工作状态 */
  wkcn?: string | null;
}

export interface EmergencyPlanPQO {
  /** 审批部门 */
  approvalDepartment?: string | null;
  /** 审批文号 */
  approvalNumber?: string | null;
  contactPhone?: string | null;
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
  /** 编制单位 */
  prepareOrg?: string | null;
  /**
   * 发布时间
   * @format date-time
   */
  publishTime?: string;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EmergencyPlanQO {
  /** 审批部门 */
  approvalDepartment?: string | null;
  /** 审批文号 */
  approvalNumber?: string | null;
  contactPhone?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 编制单位 */
  prepareOrg?: string | null;
  /**
   * 发布时间
   * @format date-time
   */
  publishTime?: string;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EmergencyPlanVO {
  /** 审批部门 */
  approvalDepartment?: string | null;
  /** 审批文号 */
  approvalNumber?: string | null;
  contactPhone?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 文件名 */
  fileName?: string | null;
  /** 原始文件名 */
  fileNameOrigin?: string | null;
  /** 文件路径 */
  filePath?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 编制单位 */
  prepareOrg?: string | null;
  /**
   * 发布时间
   * @format date-time
   */
  publishTime?: string;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number;
  /** 水库名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
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
  /** 俯视图vr位置pitch */
  fvrPitch?: string | null;
  /** 俯视图vr位置yaw */
  fvrYaw?: string | null;
  /** 后视图vr位置pitch */
  hvrPitch?: string | null;
  /** 后视图vr位置yaw */
  hvrYaw?: string | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** imei */
  imei?: string | null;
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
  orderNumber?: number | null;
  /** 图片路径 */
  picUrl?: string | null;
  /** 前景图vr位置pitch */
  qvrPitch?: string | null;
  /** 前景图vr位置yaw */
  qvrYaw?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 是否在vr显示 */
  showInVr?: boolean | null;
  /** 测站编码 */
  stcode?: string | null;
  /**
   * 所属水库
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
  /** 俯视图vr位置pitch */
  fvrPitch?: string | null;
  /** 俯视图vr位置yaw */
  fvrYaw?: string | null;
  /** 后视图vr位置pitch */
  hvrPitch?: string | null;
  /** 后视图vr位置yaw */
  hvrYaw?: string | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** imei */
  imei?: string | null;
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
  /** 图片路径 */
  picUrl?: string | null;
  /** 前景图vr位置pitch */
  qvrPitch?: string | null;
  /** 前景图vr位置yaw */
  qvrYaw?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 是否在vr显示 */
  showInVr?: boolean | null;
  /** 测站编码 */
  stcode?: string | null;
  /**
   * 所属水库
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
  /** 分组 */
  groupCode?: string | null;
  /** 渗压所在因子组的位置 */
  groupPos?: string | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 是否显示 */
  isDisplay?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /** 单位 */
  measureUnit?: string | null;
  /** 名称 */
  name?: string | null;
  /** 关状态颜色 */
  offColor?: string | null;
  /** 关状态标签 */
  offLabel?: string | null;
  /**
   * 离线判断时长，距离当前时间多久算离线(秒)
   * @format int32
   */
  offlineTimespan?: number;
  /** 开状态颜色 */
  onColor?: string | null;
  /** 开状态标签 */
  onLabel?: string | null;
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
   * 传输间隔
   * @format int32
   */
  transInterval?: number | null;
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

/** 监测因子 */
export interface EquipmentParamInEq {
  /** 编码 */
  code?: string | null;
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
   * 数据值
   * @format double
   */
  dataValue?: number | null;
  /** 展示名称 */
  displayName?: string | null;
  /**
   * 所属设备
   * @format int64
   */
  equipmentId?: number | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 是否显示 */
  isDisplay?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /** 单位 */
  measureUnit?: string | null;
  /** 名称 */
  name?: string | null;
  /** 关状态颜色 */
  offColor?: string | null;
  /** 关状态标签 */
  offLabel?: string | null;
  /** 开状态颜色 */
  onColor?: string | null;
  /** 开状态标签 */
  onLabel?: string | null;
  /**
   * 排序序号
   * @format int32
   */
  orderNumber?: number | null;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number | null;
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
  /** 分组 */
  groupCode?: string | null;
  /** 渗压所在因子组的位置 */
  groupPos?: string | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 是否显示 */
  isDisplay?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /** 单位 */
  measureUnit?: string | null;
  /** 名称 */
  name?: string | null;
  /** 关状态颜色 */
  offColor?: string | null;
  /** 关状态标签 */
  offLabel?: string | null;
  /**
   * 离线判断时长，距离当前时间多久算离线(秒)
   * @format int32
   */
  offlineTimespan?: number;
  /** 开状态颜色 */
  onColor?: string | null;
  /** 开状态标签 */
  onLabel?: string | null;
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
   * 传输间隔
   * @format int32
   */
  transInterval?: number | null;
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
  /** 分组 */
  groupCode?: string | null;
  /** 渗压所在因子组的位置 */
  groupPos?: string | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 是否显示 */
  isDisplay?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /** 单位 */
  measureUnit?: string | null;
  /** 名称 */
  name?: string | null;
  /** 关状态颜色 */
  offColor?: string | null;
  /** 关状态标签 */
  offLabel?: string | null;
  /**
   * 离线判断时长，距离当前时间多久算离线(秒)
   * @format int32
   */
  offlineTimespan?: number;
  /** 开状态颜色 */
  onColor?: string | null;
  /** 开状态标签 */
  onLabel?: string | null;
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
   * 传输间隔
   * @format int32
   */
  transInterval?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 实时雨水情参数接收 */
export interface EquipmentParamRainConditionQO {
  /** 排序字段 */
  field?: string | null;
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
   */
  pageSize?: number;
  /** 水库规模 */
  projectScale?: string | null;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number | null;
  /** 乡镇 */
  village?: string | null;
}

/** 实时雨水情返回值 */
export interface EquipmentParamRainConditionVO {
  osmoticWaterLevel1?: OnlineAndValueNullableDouble;
  osmoticWaterLevel2?: OnlineAndValueNullableDouble;
  osmoticWaterLevel3?: OnlineAndValueNullableDouble;
  xOffset1?: OnlineAndValueNullableDouble;
  xOffset2?: OnlineAndValueNullableDouble;
  xOffset3?: OnlineAndValueNullableDouble;
  yOffset1?: OnlineAndValueNullableDouble;
  yOffset2?: OnlineAndValueNullableDouble;
  yOffset3?: OnlineAndValueNullableDouble;
  zOffset1?: OnlineAndValueNullableDouble;
  zOffset2?: OnlineAndValueNullableDouble;
  zOffset3?: OnlineAndValueNullableDouble;
  capacity?: OnlineAndValueNullableDouble;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
  /**
   * 昨日八时水位
   * @format double
   */
  eightWaterLevel?: number | null;
  /** 排序字段 */
  field?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 工情预警级别
   * @format int32
   */
  osmoticPreAlarmLevel?: number | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   */
  pageSize?: number;
  /** 水库规模 */
  projectScale?: string | null;
  rainfall?: OnlineAndValueNullableDouble;
  /**
   * 降水量预警级别
   * @format int32
   */
  rainfallPreAlarmLevel?: number | null;
  /** 水库名称 */
  technicsName?: string | null;
  /** 乡镇 */
  village?: string | null;
  waterLevel?: OnlineAndValueNullableDouble;
  /**
   * 水位预警级别
   * @format int32
   */
  waterLevelPreAlarmLevel?: number | null;
  /** 水势 */
  waterPotential?: string | null;
  /**
   * 昨日平均水位
   * @format double
   */
  yesterdayAverageWaterLevel?: number | null;
  /**
   * 蚁情
   * @format double
   */
  yiQing?: number | null;
  /** 蚁情 */
  yiQingState?: string | null;
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
  /** 分组 */
  groupCode?: string | null;
  /** 渗压所在因子组的位置 */
  groupPos?: string | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 是否显示 */
  isDisplay?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /** 单位 */
  measureUnit?: string | null;
  /** 名称 */
  name?: string | null;
  /** 关状态颜色 */
  offColor?: string | null;
  /** 关状态标签 */
  offLabel?: string | null;
  /**
   * 离线判断时长，距离当前时间多久算离线(秒)
   * @format int32
   */
  offlineTimespan?: number;
  /** 开状态颜色 */
  onColor?: string | null;
  /** 开状态标签 */
  onLabel?: string | null;
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
   * 传输间隔
   * @format int32
   */
  transInterval?: number | null;
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
  /** 俯视图vr位置pitch */
  fvrPitch?: string | null;
  /** 俯视图vr位置yaw */
  fvrYaw?: string | null;
  /** 后视图vr位置pitch */
  hvrPitch?: string | null;
  /** 后视图vr位置yaw */
  hvrYaw?: string | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** imei */
  imei?: string | null;
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
  orderNumber?: number | null;
  /** 图片路径 */
  picUrl?: string | null;
  /** 前景图vr位置pitch */
  qvrPitch?: string | null;
  /** 前景图vr位置yaw */
  qvrYaw?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 是否在vr显示 */
  showInVr?: boolean | null;
  /** 测站编码 */
  stcode?: string | null;
  /**
   * 所属水库
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
  /** 俯视图vr位置pitch */
  fvrPitch?: string | null;
  /** 俯视图vr位置yaw */
  fvrYaw?: string | null;
  /** 后视图vr位置pitch */
  hvrPitch?: string | null;
  /** 后视图vr位置yaw */
  hvrYaw?: string | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** imei */
  imei?: string | null;
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
  orderNumber?: number | null;
  /** 图片路径 */
  picUrl?: string | null;
  /** 前景图vr位置pitch */
  qvrPitch?: string | null;
  /** 前景图vr位置yaw */
  qvrYaw?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 是否在vr显示 */
  showInVr?: boolean | null;
  /** 测站编码 */
  stcode?: string | null;
  /**
   * 所属水库
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

/** 全局返回结果 */
export interface FurionResultAppVersionVO {
  data?: AppVersionVO;
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
export interface FurionResultDataTransferRateVO {
  data?: DataTransferRateVO;
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
export interface FurionResultDictionaryInt64NullableDecimal {
  /** 数据 */
  data?: Record<string, number | null>;
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
export interface FurionResultDsmSpgPztbVO {
  data?: DsmSpgPztbVO;
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
export interface FurionResultEmergencyPlanVO {
  data?: EmergencyPlanVO;
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
export interface FurionResultGetCoverNum {
  data?: GetCoverNum;
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
export interface FurionResultIActionResult {
  data?: IActionResult;
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
export interface FurionResultImplementationKeyLinksVO {
  data?: ImplementationKeyLinksVO;
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
export interface FurionResultImplementationReservoirSafetyAppraisalVO {
  data?: ImplementationReservoirSafetyAppraisalVO;
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
export interface FurionResultInspectionItemLevelVO {
  data?: InspectionItemLevelVO;
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
export interface FurionResultInspectionItemVO {
  data?: InspectionItemVO;
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
export interface FurionResultInspectionRecordLocVO {
  data?: InspectionRecordLocVO;
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
export interface FurionResultInspectionRecordVO {
  data?: InspectionRecordVO;
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
export interface FurionResultKnowledgeFile {
  /** 知识库文件 */
  data?: KnowledgeFile;
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
export interface FurionResultKnowledgeFileVO {
  data?: KnowledgeFileVO;
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
export interface FurionResultListAppVersionVO {
  /** 数据 */
  data?: AppVersionVO[] | null;
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
export interface FurionResultListDataTransferRateVO {
  /** 数据 */
  data?: DataTransferRateVO[] | null;
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
export interface FurionResultListDsmSpgPztbVO {
  /** 数据 */
  data?: DsmSpgPztbVO[] | null;
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
export interface FurionResultListEmergencyPlanVO {
  /** 数据 */
  data?: EmergencyPlanVO[] | null;
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
export interface FurionResultListGetCoverNum {
  /** 数据 */
  data?: GetCoverNum[] | null;
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
export interface FurionResultListGetTechnicsCountByVillageVO {
  /** 数据 */
  data?: GetTechnicsCountByVillageVO[] | null;
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
export interface FurionResultListInspectionItemLevelVO {
  /** 数据 */
  data?: InspectionItemLevelVO[] | null;
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
export interface FurionResultListInspectionItemVO {
  /** 数据 */
  data?: InspectionItemVO[] | null;
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
export interface FurionResultListInspectionRecordLocVO {
  /** 数据 */
  data?: InspectionRecordLocVO[] | null;
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
export interface FurionResultListInspectionRecordVO {
  /** 数据 */
  data?: InspectionRecordVO[] | null;
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
export interface FurionResultListKnowledgeFileVO {
  /** 数据 */
  data?: KnowledgeFileVO[] | null;
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
export interface FurionResultListPrealarmRecordHandleActVO {
  /** 数据 */
  data?: PrealarmRecordHandleActVO[] | null;
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
export interface FurionResultListPrealarmRecordVO {
  /** 数据 */
  data?: PrealarmRecordVO[] | null;
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
export interface FurionResultListPrealarmRuleVO {
  /** 数据 */
  data?: PrealarmRuleVO[] | null;
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
export interface FurionResultListProjectDocVO {
  /** 数据 */
  data?: ProjectDocVO[] | null;
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
export interface FurionResultListProjectDrawingVO {
  /** 数据 */
  data?: ProjectDrawingVO[] | null;
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
export interface FurionResultListReservoirCapacityVO {
  /** 数据 */
  data?: ReservoirCapacityVO[] | null;
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
export interface FurionResultListReservoirFlowVO {
  /** 数据 */
  data?: ReservoirFlowVO[] | null;
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
export interface FurionResultListReservoirProjectVO {
  /** 数据 */
  data?: ReservoirProjectVO[] | null;
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
export interface FurionResultListReservoirRpByTypeVO {
  /** 数据 */
  data?: ReservoirRpByTypeVO[] | null;
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
export interface FurionResultListReservoirRpVO {
  /** 数据 */
  data?: ReservoirRpVO[] | null;
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
export interface FurionResultListReservoirSwDataVO {
  /** 数据 */
  data?: ReservoirSwDataVO[] | null;
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
export interface FurionResultListReservoirVrVO {
  /** 数据 */
  data?: ReservoirVrVO[] | null;
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
export interface FurionResultListTechnicsWithEquipment {
  /** 数据 */
  data?: TechnicsWithEquipment[] | null;
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
export interface FurionResultListTreeNodeImvd {
  /** 数据 */
  data?: TreeNodeImvd[] | null;
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
export interface FurionResultListTreeNodeKf {
  /** 数据 */
  data?: TreeNodeKf[] | null;
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
export interface FurionResultListWaterRainfallEigenvalue {
  /** 数据 */
  data?: WaterRainfallEigenvalue[] | null;
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
export interface FurionResultListWorkNoticeApproveActVO {
  /** 数据 */
  data?: WorkNoticeApproveActVO[] | null;
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
export interface FurionResultListWorkNoticeHandleActVO {
  /** 数据 */
  data?: WorkNoticeHandleActVO[] | null;
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
export interface FurionResultListWorkNoticeVO {
  /** 数据 */
  data?: WorkNoticeVO[] | null;
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
export interface FurionResultNmsCameraOnlineResData {
  data?: NmsCameraOnlineResData;
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
export interface FurionResultOnlineInfoVO {
  data?: OnlineInfoVO;
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
export interface FurionResultPrealarmCount {
  data?: PrealarmCount;
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
export interface FurionResultPrealarmDataVO {
  data?: PrealarmDataVO;
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
export interface FurionResultPrealarmRecordHandleActVO {
  data?: PrealarmRecordHandleActVO;
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
export interface FurionResultPrealarmRecordVO {
  data?: PrealarmRecordVO;
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
export interface FurionResultPrealarmRuleVO {
  data?: PrealarmRuleVO;
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
export interface FurionResultProjectDocVO {
  data?: ProjectDocVO;
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
export interface FurionResultProjectDrawingVO {
  data?: ProjectDrawingVO;
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
export interface FurionResultProjectTsFileSaveFO {
  data?: ProjectTsFileSaveFO;
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
export interface FurionResultProjectTsFileVO {
  data?: ProjectTsFileVO;
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
export interface FurionResultReservoirCapacityVO {
  data?: ReservoirCapacityVO;
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
export interface FurionResultReservoirFlowVO {
  data?: ReservoirFlowVO;
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
export interface FurionResultReservoirProject {
  /** 水库工程信息 */
  data?: ReservoirProject;
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
export interface FurionResultReservoirProjectVO {
  data?: ReservoirProjectVO;
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
export interface FurionResultReservoirRPNum {
  data?: ReservoirRPNum;
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
export interface FurionResultReservoirRpPageByTypeVO {
  data?: ReservoirRpPageByTypeVO;
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
export interface FurionResultReservoirRpVO {
  data?: ReservoirRpVO;
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
export interface FurionResultReservoirStatus {
  data?: ReservoirStatus;
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
export interface FurionResultReservoirSwDataVO {
  data?: ReservoirSwDataVO;
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
export interface FurionResultReservoirVrVO {
  data?: ReservoirVrVO;
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
export interface FurionResultSqlSugarPagedListAppVersionVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListAppVersionVO;
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
export interface FurionResultSqlSugarPagedListConventionalWaterLevelReport {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListConventionalWaterLevelReport;
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
export interface FurionResultSqlSugarPagedListDailyWaterLevelReport {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListDailyWaterLevelReport;
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
export interface FurionResultSqlSugarPagedListDataTransferRateByTechnicesVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListDataTransferRateByTechnicesVO;
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
export interface FurionResultSqlSugarPagedListDsmImvdImvdmpVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListDsmImvdImvdmpVO;
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
export interface FurionResultSqlSugarPagedListDsmSpgPztbVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListDsmSpgPztbVO;
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
export interface FurionResultSqlSugarPagedListEmergencyPlanVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEmergencyPlanVO;
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
export interface FurionResultSqlSugarPagedListEquipmentParamRainConditionVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEquipmentParamRainConditionVO;
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
export interface FurionResultSqlSugarPagedListGNSSOffsetReport {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListGNSSOffsetReport;
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
export interface FurionResultSqlSugarPagedListInspectionItemLevelVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListInspectionItemLevelVO;
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
export interface FurionResultSqlSugarPagedListInspectionItemVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListInspectionItemVO;
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
export interface FurionResultSqlSugarPagedListInspectionRecordLocVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListInspectionRecordLocVO;
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
export interface FurionResultSqlSugarPagedListInspectionRecordMonthReportVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListInspectionRecordMonthReportVO;
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
export interface FurionResultSqlSugarPagedListInspectionRecordVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListInspectionRecordVO;
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
export interface FurionResultSqlSugarPagedListKnowledgeFileVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListKnowledgeFileVO;
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
export interface FurionResultSqlSugarPagedListPrealarmRecordHandleActVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListPrealarmRecordHandleActVO;
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
export interface FurionResultSqlSugarPagedListPrealarmRecordVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListPrealarmRecordVO;
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
export interface FurionResultSqlSugarPagedListPrealarmRuleVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListPrealarmRuleVO;
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
export interface FurionResultSqlSugarPagedListProjectDocVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListProjectDocVO;
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
export interface FurionResultSqlSugarPagedListProjectDrawingVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListProjectDrawingVO;
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
export interface FurionResultSqlSugarPagedListProjectTsFileVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListProjectTsFileVO;
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
export interface FurionResultSqlSugarPagedListReservoirCapacityVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListReservoirCapacityVO;
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
export interface FurionResultSqlSugarPagedListReservoirFlowVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListReservoirFlowVO;
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
export interface FurionResultSqlSugarPagedListReservoirProjectVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListReservoirProjectVO;
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
export interface FurionResultSqlSugarPagedListReservoirRpVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListReservoirRpVO;
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
export interface FurionResultSqlSugarPagedListReservoirState {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListReservoirState;
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
export interface FurionResultSqlSugarPagedListReservoirSwDataVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListReservoirSwDataVO;
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
export interface FurionResultSqlSugarPagedListReservoirVrVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListReservoirVrVO;
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
export interface FurionResultSqlSugarPagedListSeepagePressureReport {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListSeepagePressureReport;
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
export interface FurionResultSqlSugarPagedListSeepageVolumeReport {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListSeepageVolumeReport;
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
export interface FurionResultSqlSugarPagedListSpillwayDischargeReport {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListSpillwayDischargeReport;
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
export interface FurionResultSqlSugarPagedListWaterRainfallInformation {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListWaterRainfallInformation;
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
export interface FurionResultSqlSugarPagedListWorkNoticeApproveActVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListWorkNoticeApproveActVO;
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
export interface FurionResultSqlSugarPagedListWorkNoticeHandleActVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListWorkNoticeHandleActVO;
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
export interface FurionResultSqlSugarPagedListWorkNoticeVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListWorkNoticeVO;
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
export interface FurionResultTechnicsCapacityVO {
  data?: TechnicsCapacityVO;
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
export interface FurionResultTechnicsInvalidWaterLevelVO {
  data?: TechnicsInvalidWaterLevelVO;
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
export interface FurionResultTechnicsOverflowByNormalWaterVO {
  data?: TechnicsOverflowByNormalWaterVO;
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
export interface FurionResultTechnicsOverflowVO {
  data?: TechnicsOverflowVO;
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
export interface FurionResultWorkNoticeApproveActVO {
  data?: WorkNoticeApproveActVO;
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
export interface FurionResultWorkNoticeDataByWiidVO {
  data?: WorkNoticeDataByWiidVO;
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
export interface FurionResultWorkNoticeHandleActVO {
  data?: WorkNoticeHandleActVO;
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
export interface FurionResultWorkNoticeVO {
  data?: WorkNoticeVO;
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

export interface GNSSOffsetReport {
  /**
   * 平行值（mm）
   * @format double
   */
  cumDx?: number | null;
  /**
   * 垂直值（mm）
   * @format double
   */
  cumDy?: number | null;
  /**
   * Z偏移（mm）
   * @format double
   */
  cumDz?: number | null;
  /** 点号 */
  equipmentName?: string | null;
  /** 工程规模 */
  projectScale?: string | null;
  /** 水库名称 */
  technicsName?: string | null;
  /** 乡镇 */
  village?: string | null;
}

export interface GetCoverNum {
  /**
   * 有设备数
   * @format int32
   */
  coverNum?: number;
  /**
   * 总水库数
   * @format int32
   */
  totalNum?: number;
  /** 乡镇 */
  village?: string | null;
}

export interface GetTechnicsCountByVillageVO {
  /**
   * 数量
   * @format int32
   */
  count?: number;
  /** 水库列表 */
  items?: TechnicsVO[] | null;
  /**
   * 监测数量
   * @format int32
   */
  monitorCount?: number;
  /**
   * 在线数量
   * @format int32
   */
  onlineCount?: number;
  /** 乡镇名称 */
  village?: string | null;
}

export interface HIkControllingQO {
  /**
   * 0-开始 ，1-停止 注：GOTO_PRESET命令下填任意值均可转到预置点,建议填0即可
   * @format int32
   */
  action: number;
  /**
   * 监控点编号
   * @minLength 1
   */
  cameraIndexCode: string;
  /**
   * 不区分大小写 说明：LEFT 左转，RIGHT右转，UP 上转，DOWN 下转，ZOOM_IN 焦距变大，ZOOM_OUT 焦距变小，LEFT_UP 左上，LEFT_DOWN 左下，RIGHT_UP 右上，RIGHT_DOWN 右下
   * FOCUS_NEAR 焦点前移，FOCUS_FAR 焦点后移，IRIS_ENLARGE 光圈扩大，IRIS_REDUCE 光圈缩小，WIPER_SWITCH 接通雨刷开关，START_RECORD_TRACK 开始记录运行轨迹
   * STOP_RECORD_TRACK 停止记录运行轨迹，START_TRACK 开始运行轨迹，STOP_TRACK 停止运行轨迹；以下命令presetIndex不可为空：GOTO_PRESET到预置点
   * @minLength 1
   */
  command: string;
  /**
   * 预置点编号
   * @format int32
   */
  presetIndex?: number;
  /**
   * 云台速度，取值范围为1-100，默认50
   * @format int32
   * @min 1
   * @max 100
   */
  speed: number;
}

export type IActionResult = object;

export interface IdName {
  /**
   * Id
   * @format int64
   */
  id?: number;
  /** Name */
  name?: string | null;
}

export interface ImplementationKeyLinksVO {
  /**
   * 有应急预案水库数量
   * @format int32
   */
  emergencyPlanCount?: number;
  /**
   * 有监测设施建设水库数量
   * @format int32
   */
  equipmentCount?: number;
  /**
   * 已落实
   * @format int32
   */
  implementedCount?: number;
  /**
   * 未落实
   * @format int32
   */
  notImplementedCount?: number;
  /**
   * 部分落实
   * @format int32
   */
  partiallyImplementedCount?: number;
  /**
   * 有调度方案水库数量
   * @format int32
   */
  schedulingSchemesCount?: number;
  /**
   * 水库数量
   * @format int32
   */
  technicesCount?: number;
}

export interface ImplementationReservoirSafetyAppraisalVO {
  /**
   * 已落实
   * @format int32
   */
  implementedCount?: number;
  /**
   * 未落实
   * @format int32
   */
  notImplementedCount?: number;
  /**
   * 部分落实
   * @format int32
   */
  partiallyImplementedCount?: number;
}

/** 巡检指标 */
export interface InspectionItem {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 损坏或异常情况 */
  ex?: boolean | null;
  files?: RecordFile[] | null;
  /** 汇报情况及处理意见 */
  handlingSuggestion?: string | null;
  /** @format int64 */
  id?: number;
  /** 落实情况 */
  implementationStatus?: string | null;
  /**
   * 巡检记录id
   * @format int64
   */
  inspectionRecordId?: number;
  /** 1级指标 */
  la?: string | null;
  /** 2级指标 */
  lb?: string | null;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface InspectionItemFO {
  /** 损坏或异常情况 */
  ex: boolean;
  /** 汇报情况及处理意见 */
  handlingSuggestion?: string | null;
  /** @format int64 */
  id?: number | null;
  /** 落实情况 */
  implementationStatus?: string | null;
  /**
   * 巡检记录id
   * @format int64
   */
  inspectionRecordId?: number | null;
  /**
   * 1级指标
   * @minLength 1
   */
  la: string;
  /**
   * 2级指标
   * @minLength 1
   */
  lb: string;
  recordFiles?: RecordFile[] | null;
  /** 备注 */
  remark?: string | null;
}

export interface InspectionItemLevelFO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 1级指标 */
  la?: string | null;
  /** 2级指标 */
  lb?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface InspectionItemLevelPQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 1级指标 */
  la?: string | null;
  /** 2级指标 */
  lb?: string | null;
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
}

export interface InspectionItemLevelQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 1级指标 */
  la?: string | null;
  /** 2级指标 */
  lb?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface InspectionItemLevelVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 1级指标 */
  la?: string | null;
  /** 2级指标 */
  lb?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface InspectionItemPQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 损坏或异常情况 */
  ex?: boolean | null;
  /** 排序字段 */
  field?: string | null;
  files?: RecordFile[] | null;
  /** 汇报情况及处理意见 */
  handlingSuggestion?: string | null;
  /** @format int64 */
  id?: number;
  /** 落实情况 */
  implementationStatus?: string | null;
  /**
   * 巡检记录id
   * @format int64
   */
  inspectionRecordId?: number;
  /** 1级指标 */
  la?: string | null;
  /** 2级指标 */
  lb?: string | null;
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
}

export interface InspectionItemQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 损坏或异常情况 */
  ex?: boolean | null;
  files?: RecordFile[] | null;
  /** 汇报情况及处理意见 */
  handlingSuggestion?: string | null;
  /** @format int64 */
  id?: number;
  /** 落实情况 */
  implementationStatus?: string | null;
  /**
   * 巡检记录id
   * @format int64
   */
  inspectionRecordId?: number;
  /** 1级指标 */
  la?: string | null;
  /** 2级指标 */
  lb?: string | null;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface InspectionItemVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 损坏或异常情况 */
  ex?: boolean | null;
  files?: RecordFile[] | null;
  /** 汇报情况及处理意见 */
  handlingSuggestion?: string | null;
  /** @format int64 */
  id?: number;
  /** 落实情况 */
  implementationStatus?: string | null;
  /**
   * 巡检记录id
   * @format int64
   */
  inspectionRecordId?: number;
  /** 1级指标 */
  la?: string | null;
  /** 2级指标 */
  lb?: string | null;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface InspectionRecordFO {
  /**
   * id
   * @format int64
   */
  id?: number | null;
  /** 巡检人 */
  inspectionPerson?: string | null;
  /**
   * 巡检时间
   * @format date-time
   */
  inspectionTime: string;
  /**
   * 巡检类型(日常检查，年度检查，特别检查)
   * @minLength 1
   */
  inspectionType: string;
  /** 巡检指标 */
  operations?: InspectionItemFO[] | null;
  /**
   * 进度(1:巡检中,2:已完成)
   * @format int32
   */
  process: number;
  /** 备注 */
  remark?: string | null;
  /** 责任人 */
  responsiblePerson?: string | null;
  /**
   * 所属水库
   * @format int64
   */
  technicsId: number;
}

export interface InspectionRecordLocFO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 巡查记录id
   * @format int64
   */
  inspectionRecordId?: number;
  /**
   * 纬度
   * @format double
   */
  latitude?: number;
  /**
   * 经度
   * @format double
   */
  longitude?: number;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface InspectionRecordLocPQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 巡查记录id
   * @format int64
   */
  inspectionRecordId?: number;
  /**
   * 纬度
   * @format double
   */
  latitude?: number;
  /**
   * 经度
   * @format double
   */
  longitude?: number;
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
}

export interface InspectionRecordLocQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 巡查记录id
   * @format int64
   */
  inspectionRecordId?: number;
  /**
   * 纬度
   * @format double
   */
  latitude?: number;
  /**
   * 经度
   * @format double
   */
  longitude?: number;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface InspectionRecordLocVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 巡查记录id
   * @format int64
   */
  inspectionRecordId?: number;
  /**
   * 纬度
   * @format double
   */
  latitude?: number;
  /**
   * 经度
   * @format double
   */
  longitude?: number;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface InspectionRecordMonthReportQO {
  /** 地址 */
  address?: string | null;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /** @format int32 */
  pageIndex?: number;
  /**
   * 页码容量
   * @format int32
   * @min 0
   * @max 100000000
   */
  pageSize?: number;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string | null;
  /**
   * 水库id
   * @format int64
   */
  technicesId?: number | null;
  /** 乡镇 */
  village?: string | null;
}

export interface InspectionRecordMonthReportVO {
  /**
   * 实际完成数
   * @format int32
   */
  actualTaskCount?: number;
  /** 水库地址 */
  address?: string | null;
  /**
   * 完成率
   * @format double
   */
  completionRate?: number;
  /**
   * 巡查时间
   * @format date-time
   */
  inspectionTime?: string | null;
  /** 巡查责任人 */
  presonName?: string | null;
  /** 水库类型 */
  projectScale?: string | null;
  /**
   * 巡查任务数
   * @format int32
   */
  taskCount?: number;
  /**
   * 水库id
   * @format int64
   */
  technicesId?: number;
  /** 水库名称 */
  technicesName?: string | null;
  /**
   * 工单数
   * @format int32
   */
  ticketCount?: number;
  /** 乡镇 */
  village?: string | null;
}

export interface InspectionRecordPQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 巡检人 */
  inspectionPerson?: string | null;
  /**
   * 巡检时间
   * @format date-time
   */
  inspectionTime?: string | null;
  /** 巡检类型(日常检查，年度检查，特别检查) */
  inspectionType?: string | null;
  items?: InspectionItem[] | null;
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
   * 进度(1:巡检中,2:已完成)
   * @format int32
   */
  process?: number;
  /** 备注 */
  remark?: string | null;
  /** 责任人 */
  responsiblePerson?: string | null;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number;
  /** 水库名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface InspectionRecordQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 巡检人 */
  inspectionPerson?: string | null;
  /**
   * 巡检时间
   * @format date-time
   */
  inspectionTime?: string | null;
  /** 巡检类型(日常检查，年度检查，特别检查) */
  inspectionType?: string | null;
  items?: InspectionItem[] | null;
  /**
   * 进度(1:巡检中,2:已完成)
   * @format int32
   */
  process?: number;
  /** 备注 */
  remark?: string | null;
  /** 责任人 */
  responsiblePerson?: string | null;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number;
  /** 水库名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface InspectionRecordVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * Desc:异常项
   * Default:
   * Nullable:True
   * @format int32
   */
  exNum?: number | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 巡检人 */
  inspectionPerson?: string | null;
  /**
   * 巡检时间
   * @format date-time
   */
  inspectionTime?: string | null;
  /** 巡检类型(日常检查，年度检查，特别检查) */
  inspectionType?: string | null;
  items?: InspectionItem[] | null;
  /**
   * Desc:巡检指标
   * Default:
   * Nullable:True
   */
  operations?: InspectionItem[] | null;
  /**
   * 进度(1:巡检中,2:已完成)
   * @format int32
   */
  process?: number;
  /** 备注 */
  remark?: string | null;
  /** 责任人 */
  responsiblePerson?: string | null;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number;
  /**
   * Desc:水库名称
   * Default:
   * Nullable:True
   */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

/** 知识库文件 */
export interface KnowledgeFile {
  /**
   * Desc:是否可以删除
   * Default:1
   * Nullable:True
   */
  canDelete?: boolean | null;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  createdAt?: string | null;
  /**
   * Desc:
   * Default:
   * Nullable:True
   */
  createdPerson?: string | null;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  deleteAt?: string | null;
  /**
   * Desc:
   * Default:
   * Nullable:False
   * @format int64
   */
  id?: number;
  /**
   * Desc:是否删除
   * Default:0
   * Nullable:True
   */
  isDelete?: boolean | null;
  /**
   * Desc:级别
   * Default:
   * Nullable:True
   * @format int32
   */
  level?: number | null;
  /**
   * Desc:名称
   * Default:
   * Nullable:False
   */
  name?: string | null;
  /**
   * Desc:路径
   * Default:
   * Nullable:True
   */
  nestedpath?: string | null;
  /**
   * Desc:父级id
   * Default:
   * Nullable:True
   * @format int64
   */
  parentId?: number | null;
  /**
   * Desc:路径key
   * Default:
   * Nullable:False
   * @format int32
   */
  pathkey?: number;
  /**
   * Desc:关联文件id
   * Default:
   * Nullable:False
   * @format int64
   */
  recordFileId?: number;
  /**
   * Desc:备注
   * Default:
   * Nullable:True
   */
  remark?: string | null;
  /**
   * Desc:类型(文件、文件夹)
   * Default:
   * Nullable:False
   */
  type?: string | null;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  updatedAt?: string | null;
  /**
   * Desc:
   * Default:
   * Nullable:True
   */
  updatedPerson?: string | null;
}

export interface KnowledgeFilePQO {
  /**
   * Desc:是否可以删除
   * Default:1
   * Nullable:True
   */
  canDelete?: boolean | null;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  createdAt?: string | null;
  /**
   * Desc:
   * Default:
   * Nullable:True
   */
  createdPerson?: string | null;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  deleteAt?: string | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * Desc:
   * Default:
   * Nullable:False
   * @format int64
   */
  id?: number;
  /**
   * Desc:是否删除
   * Default:0
   * Nullable:True
   */
  isDelete?: boolean | null;
  /**
   * Desc:级别
   * Default:
   * Nullable:True
   * @format int32
   */
  level?: number | null;
  /**
   * Desc:名称
   * Default:
   * Nullable:False
   */
  name?: string | null;
  /**
   * Desc:路径
   * Default:
   * Nullable:True
   */
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
   * Desc:父级id
   * Default:
   * Nullable:True
   * @format int64
   */
  parentId?: number | null;
  /**
   * Desc:路径key
   * Default:
   * Nullable:False
   * @format int32
   */
  pathkey?: number;
  /**
   * Desc:关联文件id
   * Default:
   * Nullable:False
   * @format int64
   */
  recordFileId?: number;
  /**
   * Desc:备注
   * Default:
   * Nullable:True
   */
  remark?: string | null;
  /**
   * Desc:类型(文件、文件夹)
   * Default:
   * Nullable:False
   */
  type?: string | null;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  updatedAt?: string | null;
  /**
   * Desc:
   * Default:
   * Nullable:True
   */
  updatedPerson?: string | null;
}

export interface KnowledgeFileQO {
  /**
   * Desc:是否可以删除
   * Default:1
   * Nullable:True
   */
  canDelete?: boolean | null;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  createdAt?: string | null;
  /**
   * Desc:
   * Default:
   * Nullable:True
   */
  createdPerson?: string | null;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  deleteAt?: string | null;
  /**
   * Desc:
   * Default:
   * Nullable:False
   * @format int64
   */
  id?: number;
  /**
   * Desc:是否删除
   * Default:0
   * Nullable:True
   */
  isDelete?: boolean | null;
  /**
   * Desc:级别
   * Default:
   * Nullable:True
   * @format int32
   */
  level?: number | null;
  /**
   * Desc:名称
   * Default:
   * Nullable:False
   */
  name?: string | null;
  /**
   * Desc:路径
   * Default:
   * Nullable:True
   */
  nestedpath?: string | null;
  /**
   * Desc:父级id
   * Default:
   * Nullable:True
   * @format int64
   */
  parentId?: number | null;
  /**
   * Desc:路径key
   * Default:
   * Nullable:False
   * @format int32
   */
  pathkey?: number;
  /**
   * Desc:关联文件id
   * Default:
   * Nullable:False
   * @format int64
   */
  recordFileId?: number;
  /**
   * Desc:备注
   * Default:
   * Nullable:True
   */
  remark?: string | null;
  /**
   * Desc:类型(文件、文件夹)
   * Default:
   * Nullable:False
   */
  type?: string | null;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  updatedAt?: string | null;
  /**
   * Desc:
   * Default:
   * Nullable:True
   */
  updatedPerson?: string | null;
}

export interface KnowledgeFileVO {
  /**
   * Desc:是否可以删除
   * Default:1
   * Nullable:True
   */
  canDelete?: boolean | null;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  createdAt?: string | null;
  /**
   * Desc:
   * Default:
   * Nullable:True
   */
  createdPerson?: string | null;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  deleteAt?: string | null;
  /** 后缀名 */
  extname?: string | null;
  /** 文件标识 */
  fileId?: string | null;
  /** 文件名 */
  fileName?: string | null;
  /** 文件路径 */
  filePath?: string | null;
  /**
   * 文件大小(Byte)
   * @format int64
   */
  fileSize?: number;
  /**
   * Desc:
   * Default:
   * Nullable:False
   * @format int64
   */
  id?: number;
  /**
   * Desc:是否删除
   * Default:0
   * Nullable:True
   */
  isDelete?: boolean | null;
  /**
   * Desc:级别
   * Default:
   * Nullable:True
   * @format int32
   */
  level?: number | null;
  /**
   * Desc:名称
   * Default:
   * Nullable:False
   */
  name?: string | null;
  /**
   * Desc:路径
   * Default:
   * Nullable:True
   */
  nestedpath?: string | null;
  /**
   * Desc:父级id
   * Default:
   * Nullable:True
   * @format int64
   */
  parentId?: number | null;
  /**
   * Desc:路径key
   * Default:
   * Nullable:False
   * @format int32
   */
  pathkey?: number;
  /**
   * Desc:关联文件id
   * Default:
   * Nullable:False
   * @format int64
   */
  recordFileId?: number;
  /**
   * Desc:备注
   * Default:
   * Nullable:True
   */
  remark?: string | null;
  /**
   * Desc:类型(文件、文件夹)
   * Default:
   * Nullable:False
   */
  type?: string | null;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  updatedAt?: string | null;
  /**
   * Desc:
   * Default:
   * Nullable:True
   */
  updatedPerson?: string | null;
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
  /**
   * 开始时间(访问时间)
   * @format date-time
   */
  beginTime?: string | null;
  /**
   * 结束时间(访问时间)
   * @format date-time
   */
  endTime?: string | null;
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
}

export interface LogaccessQO {
  /** 登录名 */
  authkey?: string | null;
  /**
   * 开始时间(访问时间)
   * @format date-time
   */
  beginTime?: string | null;
  /**
   * 结束时间(访问时间)
   * @format date-time
   */
  endTime?: string | null;
  /** @format int64 */
  id?: number;
  /** ip地址 */
  ip?: string | null;
  /** 是否异常 */
  isException?: boolean | null;
  /** 访问结果 */
  result?: string | null;
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
  /**
   * 开始时间(异常时间)
   * @format date-time
   */
  beginTime?: string | null;
  /** controller */
  controller?: string | null;
  createdPerson?: string | null;
  /**
   * 结束时间(异常时间)
   * @format date-time
   */
  endTime?: string | null;
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
}

export interface LogerrorQO {
  /** action */
  action?: string | null;
  /**
   * 开始时间(异常时间)
   * @format date-time
   */
  beginTime?: string | null;
  /** controller */
  controller?: string | null;
  createdPerson?: string | null;
  /**
   * 结束时间(异常时间)
   * @format date-time
   */
  endTime?: string | null;
  /** @format int64 */
  id?: number;
  /** ip */
  ip?: string | null;
  /** 异常信息 */
  message?: string | null;
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
  /**
   * 开始时间(异常时间)
   * @format date-time
   */
  beginTime?: string | null;
  /** controller */
  controller?: string | null;
  createdPerson?: string | null;
  /**
   * 结束时间(异常时间)
   * @format date-time
   */
  endTime?: string | null;
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
  /** 远程地址 */
  refererUrl?: string | null;
  /** 请求地址 */
  requestUrl?: string | null;
}

export interface LogoperationQO {
  /** action */
  action?: string | null;
  /**
   * 开始时间(异常时间)
   * @format date-time
   */
  beginTime?: string | null;
  /** controller */
  controller?: string | null;
  createdPerson?: string | null;
  /**
   * 结束时间(异常时间)
   * @format date-time
   */
  endTime?: string | null;
  /** 环境 */
  environment?: string | null;
  /** @format int64 */
  id?: number;
  /** ip */
  ip?: string | null;
  /** 是否异常 */
  isException?: boolean | null;
  /** 远程地址 */
  refererUrl?: string | null;
  /** 请求地址 */
  requestUrl?: string | null;
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
  /** 流程引擎里的id */
  ftwobpmId?: string | null;
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
  /** 流程引擎里的id */
  ftwobpmId?: string | null;
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
  /** 流程引擎里的id */
  ftwobpmId?: string | null;
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

export interface NmsCameraOnlineQO {
  /** 摄像头编码 */
  indexCodes?: string[] | null;
  /**
   * 页码
   * @format int32
   */
  pageNo: number;
  /**
   * 每页数量
   * @format int32
   */
  pageSize: number;
}

export interface NmsCameraOnlineResData {
  list?: NmsCameraOnlineResDataItem[] | null;
  /** @format int32 */
  pageNo?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  /** @format int32 */
  total?: number | null;
  /** @format int32 */
  totalPage?: number | null;
}

export interface NmsCameraOnlineResDataItem {
  cn?: string | null;
  collectTime?: string | null;
  deviceIndexCode?: string | null;
  deviceType?: string | null;
  indexCode?: string | null;
  ip?: string | null;
  manufacturer?: string | null;
  /** @format int32 */
  online?: number | null;
  /** @format int32 */
  port?: number | null;
  regionIndexCode?: string | null;
  regionName?: string | null;
  treatyType?: string | null;
}

export interface OnlineAndValueNullableDouble {
  isOnline?: boolean;
  /** @format double */
  value?: number | null;
}

export type OnlineInfoVO = object;

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

export interface OnlyVillageQO {
  /** 乡镇名称 */
  village?: string | null;
}

export interface OnlyWiIdQO {
  /**
   * 流程实例ID
   * @minLength 1
   */
  wiId: string;
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

export interface PrealarmCount {
  /** @format int32 */
  complete?: number;
  /** @format int32 */
  sls?: number;
  /** @format int32 */
  total?: number;
}

export interface PrealarmDataVO {
  /** 预警记录 */
  prealarmRecord?: PrealarmRecord;
  /** 预警处理数据 */
  prealarmRecordHandleActs?: PrealarmRecordHandleAct[] | null;
}

/** 预警记录 */
export interface PrealarmRecord {
  /** 预警条件 */
  bpmStatus?: string | null;
  /**
   * 水情预警上限还是下限(0上限1下限)
   * @format int32
   */
  compareType?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据值
   * @format double
   */
  dataValue?: number | null;
  /**
   * 预警时长
   * @format int64
   */
  duration?: number | null;
  /**
   * 预警结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 监测指标id
   * @format int64
   */
  equipmentParamId?: number | null;
  /** 监测指标名称 */
  equipmentParamName?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否核实 */
  isConfirm?: boolean | null;
  /** 监测指标名称 */
  isGenBpm?: boolean | null;
  /** 是否推送短信 */
  isPush?: boolean | null;
  /** 预警级别 */
  level?: string | null;
  /**
   * 报警级别_index，0未报警，1蓝色预警、2黄色预警、3橙色预警、4红色预警
   * @format int32
   */
  levelIdx?: number | null;
  /**
   * 限值(gnss偏移预警用)
   * @format double
   */
  limitValue?: number | null;
  /** 单位 */
  measureUnit?: string | null;
  /** 预警信息 */
  prealarmInfo?: string | null;
  /**
   * 关联预警规则
   * @format int64
   */
  prealarmRuleId?: number;
  /** 规则名称 */
  prealarmRuleName?: string | null;
  /**
   * 开始时间-日
   * @format int32
   */
  sday?: number;
  /** 是否发送短信 */
  sendPhoneMsg?: boolean | null;
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
   * 预警开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 开始时间-年
   * @format int32
   */
  syear?: number;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number;
  /** 水库名称 */
  technicsName?: string | null;
  /** 预警条件 */
  triggerCondition?: string | null;
  /** 预警类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 流程实例id */
  wiid?: string | null;
}

export interface PrealarmRecordFO {
  /** 预警条件 */
  bpmStatus?: string | null;
  /**
   * 水情预警上限还是下限(0上限1下限)
   * @format int32
   */
  compareType?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据值
   * @format double
   */
  dataValue?: number | null;
  /**
   * 预警时长
   * @format int64
   */
  duration?: number | null;
  /**
   * 预警结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 监测指标id
   * @format int64
   */
  equipmentParamId?: number | null;
  /** 监测指标名称 */
  equipmentParamName?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否核实 */
  isConfirm?: boolean | null;
  /** 监测指标名称 */
  isGenBpm?: boolean | null;
  /** 是否推送短信 */
  isPush?: boolean | null;
  /** 预警级别 */
  level?: string | null;
  /**
   * 报警级别_index，0未报警，1蓝色预警、2黄色预警、3橙色预警、4红色预警
   * @format int32
   */
  levelIdx?: number | null;
  /**
   * 限值(gnss偏移预警用)
   * @format double
   */
  limitValue?: number | null;
  /** 单位 */
  measureUnit?: string | null;
  /** 预警信息 */
  prealarmInfo?: string | null;
  /**
   * 关联预警规则
   * @format int64
   */
  prealarmRuleId?: number;
  /** 规则名称 */
  prealarmRuleName?: string | null;
  /**
   * 开始时间-日
   * @format int32
   */
  sday?: number;
  /** 是否发送短信 */
  sendPhoneMsg?: boolean | null;
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
   * 预警开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 开始时间-年
   * @format int32
   */
  syear?: number;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number;
  /** 水库名称 */
  technicsName?: string | null;
  /** 预警条件 */
  triggerCondition?: string | null;
  /** 预警类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 流程实例id */
  wiid?: string | null;
}

/** 预警处理表单 */
export interface PrealarmRecordHandleAct {
  /** 节点实例ID */
  actInsId?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 处理说明 */
  handleDesc?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 关联预警记录ID
   * @format int64
   */
  prealarmRecordId?: number;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 流程实例ID */
  wiId?: string | null;
}

export interface PrealarmRecordHandleActFO {
  /** 节点实例ID */
  actInsId?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 处理说明 */
  handleDesc?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 关联预警记录ID
   * @format int64
   */
  prealarmRecordId?: number;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 流程实例ID */
  wiId?: string | null;
}

export interface PrealarmRecordHandleActPQO {
  /** 节点实例ID */
  actInsId?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 处理说明 */
  handleDesc?: string | null;
  /** @format int64 */
  id?: number;
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
   * 关联预警记录ID
   * @format int64
   */
  prealarmRecordId?: number;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 流程实例ID */
  wiId?: string | null;
}

export interface PrealarmRecordHandleActQO {
  /** 节点实例ID */
  actInsId?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 处理说明 */
  handleDesc?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 关联预警记录ID
   * @format int64
   */
  prealarmRecordId?: number;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 流程实例ID */
  wiId?: string | null;
}

export interface PrealarmRecordHandleActVO {
  /** 节点实例ID */
  actInsId?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 处理说明 */
  handleDesc?: string | null;
  /** @format int64 */
  id?: number;
  /** 图片列表 */
  images?: RecordFile[] | null;
  /**
   * 关联预警记录ID
   * @format int64
   */
  prealarmRecordId?: number;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 流程实例ID */
  wiId?: string | null;
}

export interface PrealarmRecordPQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /** 预警条件 */
  bpmStatus?: string | null;
  /**
   * 水情预警上限还是下限(0上限1下限)
   * @format int32
   */
  compareType?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据值
   * @format double
   */
  dataValue?: number | null;
  /**
   * 预警时长
   * @format int64
   */
  duration?: number | null;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 监测指标id
   * @format int64
   */
  equipmentParamId?: number | null;
  /** 监测指标名称 */
  equipmentParamName?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否核实 */
  isConfirm?: boolean | null;
  /** 监测指标名称 */
  isGenBpm?: boolean | null;
  /** 是否推送短信 */
  isPush?: boolean | null;
  /** 预警级别 */
  level?: string | null;
  /**
   * 报警级别_index，0未报警，1蓝色预警、2黄色预警、3橙色预警、4红色预警
   * @format int32
   */
  levelIdx?: number | null;
  /**
   * 限值(gnss偏移预警用)
   * @format double
   */
  limitValue?: number | null;
  /** 单位 */
  measureUnit?: string | null;
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
  /** 预警信息 */
  prealarmInfo?: string | null;
  /**
   * 关联预警规则
   * @format int64
   */
  prealarmRuleId?: number;
  /** 规则名称 */
  prealarmRuleName?: string | null;
  /**
   * 开始时间-日
   * @format int32
   */
  sday?: number;
  /** 是否发送短信 */
  sendPhoneMsg?: boolean | null;
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
   * 预警开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 开始时间-年
   * @format int32
   */
  syear?: number;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number;
  /** 水库名称 */
  technicsName?: string | null;
  /** 预警条件 */
  triggerCondition?: string | null;
  /** 预警类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 流程实例id */
  wiid?: string | null;
}

export interface PrealarmRecordQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /** 预警条件 */
  bpmStatus?: string | null;
  /**
   * 水情预警上限还是下限(0上限1下限)
   * @format int32
   */
  compareType?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据值
   * @format double
   */
  dataValue?: number | null;
  /**
   * 预警时长
   * @format int64
   */
  duration?: number | null;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 监测指标id
   * @format int64
   */
  equipmentParamId?: number | null;
  /** 监测指标名称 */
  equipmentParamName?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否核实 */
  isConfirm?: boolean | null;
  /** 监测指标名称 */
  isGenBpm?: boolean | null;
  /** 是否推送短信 */
  isPush?: boolean | null;
  /** 预警级别 */
  level?: string | null;
  /**
   * 报警级别_index，0未报警，1蓝色预警、2黄色预警、3橙色预警、4红色预警
   * @format int32
   */
  levelIdx?: number | null;
  /**
   * 限值(gnss偏移预警用)
   * @format double
   */
  limitValue?: number | null;
  /** 单位 */
  measureUnit?: string | null;
  /** 预警信息 */
  prealarmInfo?: string | null;
  /**
   * 关联预警规则
   * @format int64
   */
  prealarmRuleId?: number;
  /** 规则名称 */
  prealarmRuleName?: string | null;
  /**
   * 开始时间-日
   * @format int32
   */
  sday?: number;
  /** 是否发送短信 */
  sendPhoneMsg?: boolean | null;
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
   * 预警开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 开始时间-年
   * @format int32
   */
  syear?: number;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number;
  /** 水库名称 */
  technicsName?: string | null;
  /** 预警条件 */
  triggerCondition?: string | null;
  /** 预警类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 流程实例id */
  wiid?: string | null;
}

export interface PrealarmRecordVO {
  /** 预警条件 */
  bpmStatus?: string | null;
  /**
   * 水情预警上限还是下限(0上限1下限)
   * @format int32
   */
  compareType?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据值
   * @format double
   */
  dataValue?: number | null;
  /**
   * 预警时长
   * @format int64
   */
  duration?: number | null;
  /**
   * 预警结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 监测指标id
   * @format int64
   */
  equipmentParamId?: number | null;
  /** 监测指标名称 */
  equipmentParamName?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否核实 */
  isConfirm?: boolean | null;
  /** 监测指标名称 */
  isGenBpm?: boolean | null;
  /** 是否推送短信 */
  isPush?: boolean | null;
  /** 预警级别 */
  level?: string | null;
  /**
   * 报警级别_index，0未报警，1蓝色预警、2黄色预警、3橙色预警、4红色预警
   * @format int32
   */
  levelIdx?: number | null;
  /**
   * 限值(gnss偏移预警用)
   * @format double
   */
  limitValue?: number | null;
  /** 单位 */
  measureUnit?: string | null;
  /** 预警信息 */
  prealarmInfo?: string | null;
  /**
   * 关联预警规则
   * @format int64
   */
  prealarmRuleId?: number;
  /** 规则名称 */
  prealarmRuleName?: string | null;
  /**
   * 开始时间-日
   * @format int32
   */
  sday?: number;
  /** 是否发送短信 */
  sendPhoneMsg?: boolean | null;
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
   * 预警开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 开始时间-年
   * @format int32
   */
  syear?: number;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number;
  /** 水库名称 */
  technicsName?: string | null;
  /** 预警条件 */
  triggerCondition?: string | null;
  /** 预警类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 流程实例id */
  wiid?: string | null;
}

export interface PrealarmRuleFO {
  /**
   * 水情预警上限还是下限(0上限1下限)
   * @format int32
   */
  compareType?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 监测指标id
   * @format int64
   */
  equipmentParamId?: number | null;
  /** @format int64 */
  id?: number;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否预警 */
  isPrealarm?: boolean | null;
  /** 预警级别 */
  level?: string | null;
  /**
   * 报警级别_index，0未报警，1蓝色预警、2黄色预警、3橙色预警、4红色预警
   * @format int32
   */
  levelIdx?: number | null;
  /**
   * 限值(gnss偏移预警用)
   * @format double
   */
  limitValue?: number | null;
  /** 规则名称 */
  name?: string | null;
  /** 是否发送短信 */
  sendPhoneMsg?: boolean | null;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number;
  /** 预警条件 */
  triggerCondition?: string | null;
  /** 预警类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface PrealarmRulePQO {
  /**
   * 水情预警上限还是下限(0上限1下限)
   * @format int32
   */
  compareType?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 监测指标id
   * @format int64
   */
  equipmentParamId?: number | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否预警 */
  isPrealarm?: boolean | null;
  /** 预警级别 */
  level?: string | null;
  /**
   * 报警级别_index，0未报警，1蓝色预警、2黄色预警、3橙色预警、4红色预警
   * @format int32
   */
  levelIdx?: number | null;
  /**
   * 限值(gnss偏移预警用)
   * @format double
   */
  limitValue?: number | null;
  /** 规则名称 */
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
  /** 是否发送短信 */
  sendPhoneMsg?: boolean | null;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number;
  /** 预警条件 */
  triggerCondition?: string | null;
  /** 预警类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface PrealarmRuleQO {
  /**
   * 水情预警上限还是下限(0上限1下限)
   * @format int32
   */
  compareType?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 监测指标id
   * @format int64
   */
  equipmentParamId?: number | null;
  /** @format int64 */
  id?: number;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否预警 */
  isPrealarm?: boolean | null;
  /** 预警级别 */
  level?: string | null;
  /**
   * 报警级别_index，0未报警，1蓝色预警、2黄色预警、3橙色预警、4红色预警
   * @format int32
   */
  levelIdx?: number | null;
  /**
   * 限值(gnss偏移预警用)
   * @format double
   */
  limitValue?: number | null;
  /** 规则名称 */
  name?: string | null;
  /** 是否发送短信 */
  sendPhoneMsg?: boolean | null;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number;
  /** 预警条件 */
  triggerCondition?: string | null;
  /** 预警类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface PrealarmRuleVO {
  /**
   * 水情预警上限还是下限(0上限1下限)
   * @format int32
   */
  compareType?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 监测指标id
   * @format int64
   */
  equipmentParamId?: number | null;
  /**
   * Desc:监测指标名称
   * Default:
   * Nullable:True
   */
  equipmentParamName?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否预警 */
  isPrealarm?: boolean | null;
  /** 预警级别 */
  level?: string | null;
  /**
   * 报警级别_index，0未报警，1蓝色预警、2黄色预警、3橙色预警、4红色预警
   * @format int32
   */
  levelIdx?: number | null;
  /**
   * 限值(gnss偏移预警用)
   * @format double
   */
  limitValue?: number | null;
  /** 规则名称 */
  name?: string | null;
  /** 是否发送短信 */
  sendPhoneMsg?: boolean | null;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number;
  /**
   * Desc:水库名称
   * Default:
   * Nullable:True
   */
  technicsName?: string | null;
  /** 预警条件 */
  triggerCondition?: string | null;
  /** 预警类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface PreviewUrlQO {
  /**
   * 摄像头标识
   * @minLength 1
   */
  cameraIndexCode: string;
  /** 网络1：内网，2：外网 */
  inout?: string | null;
}

export interface ProjectDocPQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 文件名 */
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
  /** @format int64 */
  technicsId?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface ProjectDocQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 文件名 */
  name?: string | null;
  /** @format int64 */
  technicsId?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface ProjectDocVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 文件名 */
  fileName?: string | null;
  /** 原始文件名 */
  fileNameOrigin?: string | null;
  /** 文件路径 */
  filePath?: string | null;
  /** @format int64 */
  id?: number;
  /** 文件名 */
  name?: string | null;
  /** @format int64 */
  technicsId?: number | null;
  /** 水库名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface ProjectDrawingPQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 文件名 */
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
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface ProjectDrawingQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 文件名 */
  name?: string | null;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface ProjectDrawingVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 文件名 */
  fileName?: string | null;
  /** 原始文件名 */
  fileNameOrigin?: string | null;
  /** 文件路径 */
  filePath?: string | null;
  /** @format int64 */
  id?: number;
  /** 文件名 */
  name?: string | null;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number | null;
  /** 水库名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface ProjectTsFileSaveFO {
  jjclfa?: RecordFile;
  /**
   * TechnicsId
   * @format int64
   */
  technicsId: number;
  tslx?: RecordFile;
}

export interface ProjectTsFileVO {
  jjclfa?: RecordFile;
  /**
   * 水库工程信息id
   * @format int64
   */
  technicsId?: number | null;
  /** 水库工程信息id */
  technicsName?: string | null;
  tslx?: RecordFile;
}

export interface PtfPQO {
  /** 排序字段 */
  field?: string | null;
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
   * TechnicsId
   * @format int64
   */
  technicsId?: number | null;
}

export interface PtfQO {
  /**
   * TechnicsId
   * @format int64
   */
  technicsId: number;
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

/** 库容曲线表 */
export interface ReservoirCapacity {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** @format double */
  waterArea?: number | null;
  /**
   * 库容
   * @format double
   */
  waterCapacity?: number | null;
  /**
   * 水位
   * @format double
   */
  waterLevel?: number | null;
}

export interface ReservoirCapacityFO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** @format double */
  waterArea?: number | null;
  /**
   * 库容
   * @format double
   */
  waterCapacity?: number | null;
  /**
   * 水位
   * @format double
   */
  waterLevel?: number | null;
}

export interface ReservoirCapacityPQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否删除 */
  isDelete?: boolean | null;
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
   * 所属水库
   * @format int64
   */
  technicsId?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** @format double */
  waterArea?: number | null;
  /**
   * 库容
   * @format double
   */
  waterCapacity?: number | null;
  /**
   * 水位
   * @format double
   */
  waterLevel?: number | null;
}

export interface ReservoirCapacityQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否删除 */
  isDelete?: boolean | null;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** @format double */
  waterArea?: number | null;
  /**
   * 库容
   * @format double
   */
  waterCapacity?: number | null;
  /**
   * 水位
   * @format double
   */
  waterLevel?: number | null;
}

export interface ReservoirCapacityVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number | null;
  /**
   * Desc:水库名称
   * Default:
   * Nullable:True
   */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** @format double */
  waterArea?: number | null;
  /**
   * 库容
   * @format double
   */
  waterCapacity?: number | null;
  /**
   * 水位
   * @format double
   */
  waterLevel?: number | null;
}

/** 泄流曲线表 */
export interface ReservoirFlow {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 泄流量
   * @format double
   */
  waterFlow?: number | null;
  /**
   * 水位
   * @format double
   */
  waterLevel?: number | null;
}

export interface ReservoirFlowFO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 泄流量
   * @format double
   */
  waterFlow?: number | null;
  /**
   * 水位
   * @format double
   */
  waterLevel?: number | null;
}

export interface ReservoirFlowPQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否删除 */
  isDelete?: boolean | null;
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
   * 所属水库
   * @format int64
   */
  technicsId?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 泄流量
   * @format double
   */
  waterFlow?: number | null;
  /**
   * 水位
   * @format double
   */
  waterLevel?: number | null;
}

export interface ReservoirFlowQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否删除 */
  isDelete?: boolean | null;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 泄流量
   * @format double
   */
  waterFlow?: number | null;
  /**
   * 水位
   * @format double
   */
  waterLevel?: number | null;
}

export interface ReservoirFlowVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number | null;
  /**
   * Desc:水库名称
   * Default:
   * Nullable:True
   */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 泄流量
   * @format double
   */
  waterFlow?: number | null;
  /**
   * 水位
   * @format double
   */
  waterLevel?: number | null;
}

/** 水库工程信息 */
export interface ReservoirProject {
  /**
   * 实际正常蓄水位（m）
   * @format double
   */
  normalWaterLevel1?: number | null;
  /** 自动观测设施 */
  autoObserveDevice?: string | null;
  /**
   * 副坝座数
   * @format int32
   */
  auxiliaryDamNum?: number | null;
  /**
   * 回水末端坐标X
   * @format double
   */
  backwaterCoordinateX?: number | null;
  /**
   * 回水末端坐标Y
   * @format double
   */
  backwaterCoordinateY?: number | null;
  /**
   * 完工年限
   * @format double
   */
  completionYearLimit?: number | null;
  /**
   * 建成时间
   * @format date-time
   */
  constructionTime?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 大坝坐标X
   * @format double
   */
  damCoordinateX?: number | null;
  /**
   * 大坝坐标Y
   * @format double
   */
  damCoordinateY?: number | null;
  /** 功能 */
  damFunction?: string | null;
  /** 坝型 */
  damType?: string | null;
  /**
   * 设计洪水位
   * @format double
   */
  designWaterLevel?: number | null;
  /** 区县 */
  division?: string | null;
  /**
   * 放水设施放水孔孔径（m）
   * @format double
   */
  drainageFacilityBoreDiameter?: number | null;
  /**
   * 放水设施进口底高程（m）
   * @format double
   */
  drainageFacilityBottomAltitude?: number | null;
  /**
   * 放水设施断面尺寸（m）
   * @format double
   */
  drainageFacilityCrosssection?: number | null;
  /** 放水设施位置 */
  drainageFacilityLocation?: string | null;
  /**
   * 放水设施最大放水流量（m³/s）
   * @format double
   */
  drainageFacilityMaximumLetdownFlow?: number | null;
  /** 放水设施结构型式 */
  drainageFacilityStructure?: string | null;
  /**
   * 首次竣工验收时间
   * @format date-time
   */
  firstCompletionTime?: string | null;
  /**
   * 首次投入使用时间
   * @format date-time
   */
  firstOperationalTime?: string | null;
  /**
   * 首次开工时间
   * @format date-time
   */
  firstStartTime?: string | null;
  /**
   * 校核洪水流量
   * @format double
   */
  floodWaterFlow?: number | null;
  /**
   * 校核洪水位（m）
   * @format double
   */
  floodWaterLevel?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * 死库容（万m3）
   * @format double
   */
  invalidCapacity?: number | null;
  /**
   * 死水位（m）
   * @format double
   */
  invalidWaterLevel?: number | null;
  /** 是否竣工验收 */
  isCompletionAcceptance?: boolean | null;
  /** 是否饮用水源 */
  isDrinkingWater?: boolean | null;
  /** 是否水利系统 */
  isHydraulic?: boolean | null;
  /** 注册登记证书是否领取 */
  isReceiveCertificate?: boolean | null;
  jjclfaRecordFile?: RecordFile;
  /**
   * 紧急处理方案id
   * @format int64
   */
  jjclfaRecordFileId?: number | null;
  /**
   * 最近一次除险加固完成时间（年）
   * @format date-time
   */
  latestReinforcementTime?: string | null;
  /**
   * 最近一次安全鉴定时间（年）
   * @format int32
   */
  latestSafetyAuthTime?: number | null;
  /** 所在流域 */
  localBasin?: string | null;
  /** 管理单位 */
  manageOrg?: string | null;
  /**
   * 最大坝高（m)
   * @format double
   */
  maxHeight?: number | null;
  /**
   * 多年平均径流量
   * @format double
   */
  meanAnnualRunoff?: number | null;
  /**
   * 新增和改善灌溉面积（万亩）
   * @format double
   */
  newlrrigationArea?: number | null;
  /**
   * 正常库容（万m3)
   * @format double
   */
  normalCapacity?: number | null;
  /**
   * 正常蓄水位（m）
   * @format double
   */
  normalWaterLevel?: number | null;
  /**
   * 棱体高程
   * @format double
   */
  prismElevation?: number | null;
  /** 工程规模 */
  projectScale?: string | null;
  /**
   * 保护下游人口（万人）
   * @format double
   */
  protectedPopulation?: number | null;
  /**
   * 集雨面积 （km2）
   * @format double
   */
  rainArea?: number | null;
  /** 注册登记号码 */
  registrationNumber?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 水库类别 */
  reservoirClass?: string | null;
  /** 工程概况 */
  reservoirInfo?: string | null;
  /** 水库类型 */
  reservoirType?: string | null;
  /** 所在河流（湖泊）名称 */
  river?: string | null;
  /**
   * 设计洪水流量
   * @format double
   */
  seasonWaterFlow?: number | null;
  /**
   * 汛限水位（m）
   * @format double
   */
  seasonWaterLevel?: number | null;
  /** 溢洪道消能形式 */
  spillwayEnergyDissipater?: string | null;
  /** 溢洪道位置 */
  spillwayLocation?: string | null;
  /**
   * 溢洪道最大下泄流量（m³/s）
   * @format double
   */
  spillwayMaximumLetdownFlow?: number | null;
  /**
   * 正常溢洪道数量
   * @format int32
   */
  spillwayNum?: number | null;
  /**
   * 溢洪道堰顶高程（m）
   * @format double
   */
  spillwayTopAltitude?: number | null;
  /**
   * 溢洪道堰顶宽（m）
   * @format double
   */
  spillwayTopWeight?: number | null;
  /** 溢洪道型式 */
  spillwayType?: string | null;
  /** 测站编码 */
  stCode?: string | null;
  /**
   * 正常水位淹没面积（亩）
   * @format double
   */
  submergedArea?: number | null;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number | null;
  /**
   * 坝顶高程（m)
   * @format double
   */
  topAltitude?: number | null;
  /**
   * 坝顶长度（m）
   * @format double
   */
  topLength?: number | null;
  /**
   * 坝顶宽度（m）
   * @format double
   */
  topWeight?: number | null;
  /**
   * 总库容  (万m3)
   * @format double
   */
  totalCapacity?: number | null;
  tslxRecordFile?: RecordFile;
  /**
   * 逃生路线图片id
   * @format int64
   */
  tslxRecordFileId?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 有效库容（万m3）
   * @format double
   */
  validCapacity?: number | null;
  /** 乡镇 */
  village?: string | null;
  /**
   * 坝址以上控制流域面积(㎡)
   * @format double
   */
  waterArea?: number | null;
  /** 工作站名称 */
  workStationName?: string | null;
  /**
   * 年防洪效益
   * @format double
   */
  yearFloodPreventBenefit?: number | null;
  /**
   * 年供水效益
   * @format double
   */
  yearWaterSupplyBenefit?: number | null;
  /**
   * 年灌溉效益
   * @format double
   */
  yearirrigationBenefit?: number | null;
}

export interface ReservoirProjectFO {
  /**
   * 实际正常蓄水位（m）
   * @format double
   */
  normalWaterLevel1?: number | null;
  /** 自动观测设施 */
  autoObserveDevice?: string | null;
  /**
   * 副坝座数
   * @format int32
   */
  auxiliaryDamNum?: number | null;
  /**
   * 回水末端坐标X
   * @format double
   */
  backwaterCoordinateX?: number | null;
  /**
   * 回水末端坐标Y
   * @format double
   */
  backwaterCoordinateY?: number | null;
  /**
   * 完工年限
   * @format double
   */
  completionYearLimit?: number | null;
  /**
   * 建成时间
   * @format date-time
   */
  constructionTime?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 大坝坐标X
   * @format double
   */
  damCoordinateX?: number | null;
  /**
   * 大坝坐标Y
   * @format double
   */
  damCoordinateY?: number | null;
  /** 功能 */
  damFunction?: string | null;
  /** 坝型 */
  damType?: string | null;
  /**
   * 设计洪水位
   * @format double
   */
  designWaterLevel?: number | null;
  /** 区县 */
  division?: string | null;
  /**
   * 放水设施放水孔孔径（m）
   * @format double
   */
  drainageFacilityBoreDiameter?: number | null;
  /**
   * 放水设施进口底高程（m）
   * @format double
   */
  drainageFacilityBottomAltitude?: number | null;
  /**
   * 放水设施断面尺寸（m）
   * @format double
   */
  drainageFacilityCrosssection?: number | null;
  /** 放水设施位置 */
  drainageFacilityLocation?: string | null;
  /**
   * 放水设施最大放水流量（m³/s）
   * @format double
   */
  drainageFacilityMaximumLetdownFlow?: number | null;
  /** 放水设施结构型式 */
  drainageFacilityStructure?: string | null;
  /**
   * 首次竣工验收时间
   * @format date-time
   */
  firstCompletionTime?: string | null;
  /**
   * 首次投入使用时间
   * @format date-time
   */
  firstOperationalTime?: string | null;
  /**
   * 首次开工时间
   * @format date-time
   */
  firstStartTime?: string | null;
  /**
   * 校核洪水流量
   * @format double
   */
  floodWaterFlow?: number | null;
  /**
   * 校核洪水位（m）
   * @format double
   */
  floodWaterLevel?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * 死库容（万m3）
   * @format double
   */
  invalidCapacity?: number | null;
  /**
   * 死水位（m）
   * @format double
   */
  invalidWaterLevel?: number | null;
  /** 是否竣工验收 */
  isCompletionAcceptance?: boolean | null;
  /** 是否饮用水源 */
  isDrinkingWater?: boolean | null;
  /** 是否水利系统 */
  isHydraulic?: boolean | null;
  /** 注册登记证书是否领取 */
  isReceiveCertificate?: boolean | null;
  jjclfaRecordFile?: RecordFile;
  /**
   * 紧急处理方案id
   * @format int64
   */
  jjclfaRecordFileId?: number | null;
  /**
   * 最近一次除险加固完成时间（年）
   * @format date-time
   */
  latestReinforcementTime?: string | null;
  /**
   * 最近一次安全鉴定时间（年）
   * @format int32
   */
  latestSafetyAuthTime?: number | null;
  /** 所在流域 */
  localBasin?: string | null;
  /** 管理单位 */
  manageOrg?: string | null;
  /**
   * 最大坝高（m)
   * @format double
   */
  maxHeight?: number | null;
  /**
   * 多年平均径流量
   * @format double
   */
  meanAnnualRunoff?: number | null;
  /**
   * 新增和改善灌溉面积（万亩）
   * @format double
   */
  newlrrigationArea?: number | null;
  /**
   * 正常库容（万m3)
   * @format double
   */
  normalCapacity?: number | null;
  /**
   * 正常蓄水位（m）
   * @format double
   */
  normalWaterLevel?: number | null;
  /**
   * 棱体高程
   * @format double
   */
  prismElevation?: number | null;
  /** 工程规模 */
  projectScale?: string | null;
  /**
   * 保护下游人口（万人）
   * @format double
   */
  protectedPopulation?: number | null;
  /**
   * 集雨面积 （km2）
   * @format double
   */
  rainArea?: number | null;
  /** 注册登记号码 */
  registrationNumber?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 水库类别 */
  reservoirClass?: string | null;
  /** 工程概况 */
  reservoirInfo?: string | null;
  /** 水库类型 */
  reservoirType?: string | null;
  /** 所在河流（湖泊）名称 */
  river?: string | null;
  /**
   * 设计洪水流量
   * @format double
   */
  seasonWaterFlow?: number | null;
  /**
   * 汛限水位（m）
   * @format double
   */
  seasonWaterLevel?: number | null;
  /** 溢洪道消能形式 */
  spillwayEnergyDissipater?: string | null;
  /** 溢洪道位置 */
  spillwayLocation?: string | null;
  /**
   * 溢洪道最大下泄流量（m³/s）
   * @format double
   */
  spillwayMaximumLetdownFlow?: number | null;
  /**
   * 正常溢洪道数量
   * @format int32
   */
  spillwayNum?: number | null;
  /**
   * 溢洪道堰顶高程（m）
   * @format double
   */
  spillwayTopAltitude?: number | null;
  /**
   * 溢洪道堰顶宽（m）
   * @format double
   */
  spillwayTopWeight?: number | null;
  /** 溢洪道型式 */
  spillwayType?: string | null;
  /** 测站编码 */
  stCode?: string | null;
  /**
   * 正常水位淹没面积（亩）
   * @format double
   */
  submergedArea?: number | null;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number | null;
  /**
   * 坝顶高程（m)
   * @format double
   */
  topAltitude?: number | null;
  /**
   * 坝顶长度（m）
   * @format double
   */
  topLength?: number | null;
  /**
   * 坝顶宽度（m）
   * @format double
   */
  topWeight?: number | null;
  /**
   * 总库容  (万m3)
   * @format double
   */
  totalCapacity?: number | null;
  tslxRecordFile?: RecordFile;
  /**
   * 逃生路线图片id
   * @format int64
   */
  tslxRecordFileId?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 有效库容（万m3）
   * @format double
   */
  validCapacity?: number | null;
  /** 乡镇 */
  village?: string | null;
  /**
   * 坝址以上控制流域面积(㎡)
   * @format double
   */
  waterArea?: number | null;
  /** 工作站名称 */
  workStationName?: string | null;
  /**
   * 年防洪效益
   * @format double
   */
  yearFloodPreventBenefit?: number | null;
  /**
   * 年供水效益
   * @format double
   */
  yearWaterSupplyBenefit?: number | null;
  /**
   * 年灌溉效益
   * @format double
   */
  yearirrigationBenefit?: number | null;
}

export interface ReservoirProjectPQO {
  /**
   * 实际正常蓄水位（m）
   * @format double
   */
  normalWaterLevel1?: number | null;
  /** 自动观测设施 */
  autoObserveDevice?: string | null;
  /**
   * 副坝座数
   * @format int32
   */
  auxiliaryDamNum?: number | null;
  /**
   * 回水末端坐标X
   * @format double
   */
  backwaterCoordinateX?: number | null;
  /**
   * 回水末端坐标Y
   * @format double
   */
  backwaterCoordinateY?: number | null;
  /**
   * 完工年限
   * @format double
   */
  completionYearLimit?: number | null;
  /**
   * 建成时间
   * @format date-time
   */
  constructionTime?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 大坝坐标X
   * @format double
   */
  damCoordinateX?: number | null;
  /**
   * 大坝坐标Y
   * @format double
   */
  damCoordinateY?: number | null;
  /** 功能 */
  damFunction?: string | null;
  /** 坝型 */
  damType?: string | null;
  /**
   * 设计洪水位
   * @format double
   */
  designWaterLevel?: number | null;
  /** 区县 */
  division?: string | null;
  /**
   * 放水设施放水孔孔径（m）
   * @format double
   */
  drainageFacilityBoreDiameter?: number | null;
  /**
   * 放水设施进口底高程（m）
   * @format double
   */
  drainageFacilityBottomAltitude?: number | null;
  /**
   * 放水设施断面尺寸（m）
   * @format double
   */
  drainageFacilityCrosssection?: number | null;
  /** 放水设施位置 */
  drainageFacilityLocation?: string | null;
  /**
   * 放水设施最大放水流量（m³/s）
   * @format double
   */
  drainageFacilityMaximumLetdownFlow?: number | null;
  /** 放水设施结构型式 */
  drainageFacilityStructure?: string | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * 首次竣工验收时间
   * @format date-time
   */
  firstCompletionTime?: string | null;
  /**
   * 首次投入使用时间
   * @format date-time
   */
  firstOperationalTime?: string | null;
  /**
   * 首次开工时间
   * @format date-time
   */
  firstStartTime?: string | null;
  /**
   * 校核洪水流量
   * @format double
   */
  floodWaterFlow?: number | null;
  /**
   * 校核洪水位（m）
   * @format double
   */
  floodWaterLevel?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * 死库容（万m3）
   * @format double
   */
  invalidCapacity?: number | null;
  /**
   * 死水位（m）
   * @format double
   */
  invalidWaterLevel?: number | null;
  /** 是否竣工验收 */
  isCompletionAcceptance?: boolean | null;
  /** 是否饮用水源 */
  isDrinkingWater?: boolean | null;
  /** 是否水利系统 */
  isHydraulic?: boolean | null;
  /** 注册登记证书是否领取 */
  isReceiveCertificate?: boolean | null;
  jjclfaRecordFile?: RecordFile;
  /**
   * 紧急处理方案id
   * @format int64
   */
  jjclfaRecordFileId?: number | null;
  /**
   * 最近一次除险加固完成时间（年）
   * @format date-time
   */
  latestReinforcementTime?: string | null;
  /**
   * 最近一次安全鉴定时间（年）
   * @format int32
   */
  latestSafetyAuthTime?: number | null;
  /** 所在流域 */
  localBasin?: string | null;
  /** 管理单位 */
  manageOrg?: string | null;
  /**
   * 最大坝高（m)
   * @format double
   */
  maxHeight?: number | null;
  /**
   * 多年平均径流量
   * @format double
   */
  meanAnnualRunoff?: number | null;
  /**
   * 新增和改善灌溉面积（万亩）
   * @format double
   */
  newlrrigationArea?: number | null;
  /**
   * 正常库容（万m3)
   * @format double
   */
  normalCapacity?: number | null;
  /**
   * 正常蓄水位（m）
   * @format double
   */
  normalWaterLevel?: number | null;
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
   * 棱体高程
   * @format double
   */
  prismElevation?: number | null;
  /** 工程规模 */
  projectScale?: string | null;
  /**
   * 保护下游人口（万人）
   * @format double
   */
  protectedPopulation?: number | null;
  /**
   * 集雨面积 （km2）
   * @format double
   */
  rainArea?: number | null;
  /** 注册登记号码 */
  registrationNumber?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 水库类别 */
  reservoirClass?: string | null;
  /** 工程概况 */
  reservoirInfo?: string | null;
  /** 水库类型 */
  reservoirType?: string | null;
  /** 所在河流（湖泊）名称 */
  river?: string | null;
  /**
   * 设计洪水流量
   * @format double
   */
  seasonWaterFlow?: number | null;
  /**
   * 汛限水位（m）
   * @format double
   */
  seasonWaterLevel?: number | null;
  /** 溢洪道消能形式 */
  spillwayEnergyDissipater?: string | null;
  /** 溢洪道位置 */
  spillwayLocation?: string | null;
  /**
   * 溢洪道最大下泄流量（m³/s）
   * @format double
   */
  spillwayMaximumLetdownFlow?: number | null;
  /**
   * 正常溢洪道数量
   * @format int32
   */
  spillwayNum?: number | null;
  /**
   * 溢洪道堰顶高程（m）
   * @format double
   */
  spillwayTopAltitude?: number | null;
  /**
   * 溢洪道堰顶宽（m）
   * @format double
   */
  spillwayTopWeight?: number | null;
  /** 溢洪道型式 */
  spillwayType?: string | null;
  /** 测站编码 */
  stCode?: string | null;
  /**
   * 正常水位淹没面积（亩）
   * @format double
   */
  submergedArea?: number | null;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number | null;
  /**
   * 坝顶高程（m)
   * @format double
   */
  topAltitude?: number | null;
  /**
   * 坝顶长度（m）
   * @format double
   */
  topLength?: number | null;
  /**
   * 坝顶宽度（m）
   * @format double
   */
  topWeight?: number | null;
  /**
   * 总库容  (万m3)
   * @format double
   */
  totalCapacity?: number | null;
  tslxRecordFile?: RecordFile;
  /**
   * 逃生路线图片id
   * @format int64
   */
  tslxRecordFileId?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 有效库容（万m3）
   * @format double
   */
  validCapacity?: number | null;
  /** 乡镇 */
  village?: string | null;
  /**
   * 坝址以上控制流域面积(㎡)
   * @format double
   */
  waterArea?: number | null;
  /** 工作站名称 */
  workStationName?: string | null;
  /**
   * 年防洪效益
   * @format double
   */
  yearFloodPreventBenefit?: number | null;
  /**
   * 年供水效益
   * @format double
   */
  yearWaterSupplyBenefit?: number | null;
  /**
   * 年灌溉效益
   * @format double
   */
  yearirrigationBenefit?: number | null;
}

export interface ReservoirProjectQO {
  /**
   * 实际正常蓄水位（m）
   * @format double
   */
  normalWaterLevel1?: number | null;
  /** 自动观测设施 */
  autoObserveDevice?: string | null;
  /**
   * 副坝座数
   * @format int32
   */
  auxiliaryDamNum?: number | null;
  /**
   * 回水末端坐标X
   * @format double
   */
  backwaterCoordinateX?: number | null;
  /**
   * 回水末端坐标Y
   * @format double
   */
  backwaterCoordinateY?: number | null;
  /**
   * 完工年限
   * @format double
   */
  completionYearLimit?: number | null;
  /**
   * 建成时间
   * @format date-time
   */
  constructionTime?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 大坝坐标X
   * @format double
   */
  damCoordinateX?: number | null;
  /**
   * 大坝坐标Y
   * @format double
   */
  damCoordinateY?: number | null;
  /** 功能 */
  damFunction?: string | null;
  /** 坝型 */
  damType?: string | null;
  /**
   * 设计洪水位
   * @format double
   */
  designWaterLevel?: number | null;
  /** 区县 */
  division?: string | null;
  /**
   * 放水设施放水孔孔径（m）
   * @format double
   */
  drainageFacilityBoreDiameter?: number | null;
  /**
   * 放水设施进口底高程（m）
   * @format double
   */
  drainageFacilityBottomAltitude?: number | null;
  /**
   * 放水设施断面尺寸（m）
   * @format double
   */
  drainageFacilityCrosssection?: number | null;
  /** 放水设施位置 */
  drainageFacilityLocation?: string | null;
  /**
   * 放水设施最大放水流量（m³/s）
   * @format double
   */
  drainageFacilityMaximumLetdownFlow?: number | null;
  /** 放水设施结构型式 */
  drainageFacilityStructure?: string | null;
  /**
   * 首次竣工验收时间
   * @format date-time
   */
  firstCompletionTime?: string | null;
  /**
   * 首次投入使用时间
   * @format date-time
   */
  firstOperationalTime?: string | null;
  /**
   * 首次开工时间
   * @format date-time
   */
  firstStartTime?: string | null;
  /**
   * 校核洪水流量
   * @format double
   */
  floodWaterFlow?: number | null;
  /**
   * 校核洪水位（m）
   * @format double
   */
  floodWaterLevel?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * 死库容（万m3）
   * @format double
   */
  invalidCapacity?: number | null;
  /**
   * 死水位（m）
   * @format double
   */
  invalidWaterLevel?: number | null;
  /** 是否竣工验收 */
  isCompletionAcceptance?: boolean | null;
  /** 是否饮用水源 */
  isDrinkingWater?: boolean | null;
  /** 是否水利系统 */
  isHydraulic?: boolean | null;
  /** 注册登记证书是否领取 */
  isReceiveCertificate?: boolean | null;
  jjclfaRecordFile?: RecordFile;
  /**
   * 紧急处理方案id
   * @format int64
   */
  jjclfaRecordFileId?: number | null;
  /**
   * 最近一次除险加固完成时间（年）
   * @format date-time
   */
  latestReinforcementTime?: string | null;
  /**
   * 最近一次安全鉴定时间（年）
   * @format int32
   */
  latestSafetyAuthTime?: number | null;
  /** 所在流域 */
  localBasin?: string | null;
  /** 管理单位 */
  manageOrg?: string | null;
  /**
   * 最大坝高（m)
   * @format double
   */
  maxHeight?: number | null;
  /**
   * 多年平均径流量
   * @format double
   */
  meanAnnualRunoff?: number | null;
  /**
   * 新增和改善灌溉面积（万亩）
   * @format double
   */
  newlrrigationArea?: number | null;
  /**
   * 正常库容（万m3)
   * @format double
   */
  normalCapacity?: number | null;
  /**
   * 正常蓄水位（m）
   * @format double
   */
  normalWaterLevel?: number | null;
  /**
   * 棱体高程
   * @format double
   */
  prismElevation?: number | null;
  /** 工程规模 */
  projectScale?: string | null;
  /**
   * 保护下游人口（万人）
   * @format double
   */
  protectedPopulation?: number | null;
  /**
   * 集雨面积 （km2）
   * @format double
   */
  rainArea?: number | null;
  /** 注册登记号码 */
  registrationNumber?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 水库类别 */
  reservoirClass?: string | null;
  /** 工程概况 */
  reservoirInfo?: string | null;
  /** 水库类型 */
  reservoirType?: string | null;
  /** 所在河流（湖泊）名称 */
  river?: string | null;
  /**
   * 设计洪水流量
   * @format double
   */
  seasonWaterFlow?: number | null;
  /**
   * 汛限水位（m）
   * @format double
   */
  seasonWaterLevel?: number | null;
  /** 溢洪道消能形式 */
  spillwayEnergyDissipater?: string | null;
  /** 溢洪道位置 */
  spillwayLocation?: string | null;
  /**
   * 溢洪道最大下泄流量（m³/s）
   * @format double
   */
  spillwayMaximumLetdownFlow?: number | null;
  /**
   * 正常溢洪道数量
   * @format int32
   */
  spillwayNum?: number | null;
  /**
   * 溢洪道堰顶高程（m）
   * @format double
   */
  spillwayTopAltitude?: number | null;
  /**
   * 溢洪道堰顶宽（m）
   * @format double
   */
  spillwayTopWeight?: number | null;
  /** 溢洪道型式 */
  spillwayType?: string | null;
  /** 测站编码 */
  stCode?: string | null;
  /**
   * 正常水位淹没面积（亩）
   * @format double
   */
  submergedArea?: number | null;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number | null;
  /**
   * 坝顶高程（m)
   * @format double
   */
  topAltitude?: number | null;
  /**
   * 坝顶长度（m）
   * @format double
   */
  topLength?: number | null;
  /**
   * 坝顶宽度（m）
   * @format double
   */
  topWeight?: number | null;
  /**
   * 总库容  (万m3)
   * @format double
   */
  totalCapacity?: number | null;
  tslxRecordFile?: RecordFile;
  /**
   * 逃生路线图片id
   * @format int64
   */
  tslxRecordFileId?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 有效库容（万m3）
   * @format double
   */
  validCapacity?: number | null;
  /** 乡镇 */
  village?: string | null;
  /**
   * 坝址以上控制流域面积(㎡)
   * @format double
   */
  waterArea?: number | null;
  /** 工作站名称 */
  workStationName?: string | null;
  /**
   * 年防洪效益
   * @format double
   */
  yearFloodPreventBenefit?: number | null;
  /**
   * 年供水效益
   * @format double
   */
  yearWaterSupplyBenefit?: number | null;
  /**
   * 年灌溉效益
   * @format double
   */
  yearirrigationBenefit?: number | null;
}

export interface ReservoirProjectVO {
  /**
   * 实际正常蓄水位（m）
   * @format double
   */
  normalWaterLevel1?: number | null;
  /** 自动观测设施 */
  autoObserveDevice?: string | null;
  /**
   * 副坝座数
   * @format int32
   */
  auxiliaryDamNum?: number | null;
  /**
   * 回水末端坐标X
   * @format double
   */
  backwaterCoordinateX?: number | null;
  /**
   * 回水末端坐标Y
   * @format double
   */
  backwaterCoordinateY?: number | null;
  /**
   * 完工年限
   * @format double
   */
  completionYearLimit?: number | null;
  /**
   * 建成时间
   * @format date-time
   */
  constructionTime?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 大坝坐标X
   * @format double
   */
  damCoordinateX?: number | null;
  /**
   * 大坝坐标Y
   * @format double
   */
  damCoordinateY?: number | null;
  /** 功能 */
  damFunction?: string | null;
  /** 坝型 */
  damType?: string | null;
  /**
   * 设计洪水位
   * @format double
   */
  designWaterLevel?: number | null;
  /** 区县 */
  division?: string | null;
  /**
   * 放水设施放水孔孔径（m）
   * @format double
   */
  drainageFacilityBoreDiameter?: number | null;
  /**
   * 放水设施进口底高程（m）
   * @format double
   */
  drainageFacilityBottomAltitude?: number | null;
  /**
   * 放水设施断面尺寸（m）
   * @format double
   */
  drainageFacilityCrosssection?: number | null;
  /** 放水设施位置 */
  drainageFacilityLocation?: string | null;
  /**
   * 放水设施最大放水流量（m³/s）
   * @format double
   */
  drainageFacilityMaximumLetdownFlow?: number | null;
  /** 放水设施结构型式 */
  drainageFacilityStructure?: string | null;
  /**
   * 首次竣工验收时间
   * @format date-time
   */
  firstCompletionTime?: string | null;
  /**
   * 首次投入使用时间
   * @format date-time
   */
  firstOperationalTime?: string | null;
  /**
   * 首次开工时间
   * @format date-time
   */
  firstStartTime?: string | null;
  /**
   * 校核洪水流量
   * @format double
   */
  floodWaterFlow?: number | null;
  /**
   * 校核洪水位（m）
   * @format double
   */
  floodWaterLevel?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * 死库容（万m3）
   * @format double
   */
  invalidCapacity?: number | null;
  /**
   * 死水位（m）
   * @format double
   */
  invalidWaterLevel?: number | null;
  /** 是否竣工验收 */
  isCompletionAcceptance?: boolean | null;
  /** 是否饮用水源 */
  isDrinkingWater?: boolean | null;
  /** 是否水利系统 */
  isHydraulic?: boolean | null;
  /** 注册登记证书是否领取 */
  isReceiveCertificate?: boolean | null;
  jjclfaRecordFile?: RecordFile;
  /**
   * 紧急处理方案id
   * @format int64
   */
  jjclfaRecordFileId?: number | null;
  /**
   * 最近一次除险加固完成时间（年）
   * @format date-time
   */
  latestReinforcementTime?: string | null;
  /**
   * 最近一次安全鉴定时间（年）
   * @format int32
   */
  latestSafetyAuthTime?: number | null;
  /** 所在流域 */
  localBasin?: string | null;
  /** 管理单位 */
  manageOrg?: string | null;
  /**
   * 最大坝高（m)
   * @format double
   */
  maxHeight?: number | null;
  /**
   * 多年平均径流量
   * @format double
   */
  meanAnnualRunoff?: number | null;
  /**
   * 新增和改善灌溉面积（万亩）
   * @format double
   */
  newlrrigationArea?: number | null;
  /**
   * 正常库容（万m3)
   * @format double
   */
  normalCapacity?: number | null;
  /**
   * 正常蓄水位（m）
   * @format double
   */
  normalWaterLevel?: number | null;
  /**
   * 棱体高程
   * @format double
   */
  prismElevation?: number | null;
  /** 工程规模 */
  projectScale?: string | null;
  /**
   * 保护下游人口（万人）
   * @format double
   */
  protectedPopulation?: number | null;
  /**
   * 集雨面积 （km2）
   * @format double
   */
  rainArea?: number | null;
  /** 注册登记号码 */
  registrationNumber?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 水库类别 */
  reservoirClass?: string | null;
  /** 工程概况 */
  reservoirInfo?: string | null;
  /** 水库类型 */
  reservoirType?: string | null;
  /** 所在河流（湖泊）名称 */
  river?: string | null;
  /**
   * 设计洪水流量
   * @format double
   */
  seasonWaterFlow?: number | null;
  /**
   * 汛限水位（m）
   * @format double
   */
  seasonWaterLevel?: number | null;
  /** 溢洪道消能形式 */
  spillwayEnergyDissipater?: string | null;
  /** 溢洪道位置 */
  spillwayLocation?: string | null;
  /**
   * 溢洪道最大下泄流量（m³/s）
   * @format double
   */
  spillwayMaximumLetdownFlow?: number | null;
  /**
   * 正常溢洪道数量
   * @format int32
   */
  spillwayNum?: number | null;
  /**
   * 溢洪道堰顶高程（m）
   * @format double
   */
  spillwayTopAltitude?: number | null;
  /**
   * 溢洪道堰顶宽（m）
   * @format double
   */
  spillwayTopWeight?: number | null;
  /** 溢洪道型式 */
  spillwayType?: string | null;
  /** 测站编码 */
  stCode?: string | null;
  /**
   * 正常水位淹没面积（亩）
   * @format double
   */
  submergedArea?: number | null;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number | null;
  /**
   * Desc:水库名称
   * Default:
   * Nullable:True
   */
  technicsName?: string | null;
  /**
   * 坝顶高程（m)
   * @format double
   */
  topAltitude?: number | null;
  /**
   * 坝顶长度（m）
   * @format double
   */
  topLength?: number | null;
  /**
   * 坝顶宽度（m）
   * @format double
   */
  topWeight?: number | null;
  /**
   * 总库容  (万m3)
   * @format double
   */
  totalCapacity?: number | null;
  tslxRecordFile?: RecordFile;
  /**
   * 逃生路线图片id
   * @format int64
   */
  tslxRecordFileId?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 有效库容（万m3）
   * @format double
   */
  validCapacity?: number | null;
  /** 乡镇 */
  village?: string | null;
  /**
   * 坝址以上控制流域面积(㎡)
   * @format double
   */
  waterArea?: number | null;
  /** 工作站名称 */
  workStationName?: string | null;
  /**
   * 年防洪效益
   * @format double
   */
  yearFloodPreventBenefit?: number | null;
  /**
   * 年供水效益
   * @format double
   */
  yearWaterSupplyBenefit?: number | null;
  /**
   * 年灌溉效益
   * @format double
   */
  yearirrigationBenefit?: number | null;
}

export interface ReservoirRPNum {
  /**
   * 全部落实数量
   * @format int32
   */
  implemented?: number | null;
  list?: ReservoirRPType[] | null;
  /** @format int32 */
  partialImplemented?: number | null;
  /** @format int32 */
  unImplemented?: number | null;
}

export interface ReservoirRPType {
  /**
   * 现有责任人
   * @format int32
   */
  num?: number | null;
  /**
   * 比率
   * @format int32
   */
  rate?: number | null;
  /**
   * 应有责任人
   * @format int32
   */
  total?: number | null;
  /** 责任人类型 */
  type?: string | null;
}

export interface ReservoirRpByTypeQO {
  /**
   * 查询类型(0-未落实，1-部分落实，2-全部落实)
   * @format int32
   */
  type: number;
}

export interface ReservoirRpByTypeVO {
  /** 主管部门责任人 */
  administrationResponsiblePerson?: string | null;
  /** 行政责任人 */
  administrativeResponsiblePerson?: string | null;
  /** 政府责任人 */
  governmentResponsiblePerson?: string | null;
  /** 巡查责任人 */
  inspectionResponsiblePerson?: string | null;
  /** 管理单位责任人 */
  managementUnitResponsiblePerson?: string | null;
  /** 水库名称 */
  name?: string | null;
  /** 技术责任人 */
  technologyResponsiblePerson?: string | null;
}

export interface ReservoirRpFO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 序号
   * @format int32
   */
  idx?: number;
  /** 职位 */
  job?: string | null;
  /** 名称 */
  name?: string | null;
  /** 负责人单位 */
  org?: string | null;
  /** 电话 */
  phone?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 关联水库
   * @format int64
   */
  technicsId?: number;
  /** 类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 关联的用户
   * @format int64
   */
  userId?: number;
}

export interface ReservoirRpPQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 序号
   * @format int32
   */
  idx?: number;
  /** 职位 */
  job?: string | null;
  /** 名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /** 负责人单位 */
  org?: string | null;
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
  /** 电话 */
  phone?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 关联水库
   * @format int64
   */
  technicsId?: number;
  /** 类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 关联的用户
   * @format int64
   */
  userId?: number;
}

export interface ReservoirRpPageByTypeQO {
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
   * 查询类型(0-未落实，1-部分落实，2-全部落实)
   * @format int32
   */
  type: number;
}

export interface ReservoirRpPageByTypeVO {
  /** 数据列表 */
  items?: ReservoirRpByTypeVO[] | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 每页记录数
   * @format int32
   */
  pageSize?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
  /**
   * 总记录数
   * @format int32
   */
  totalRecords?: number;
}

export interface ReservoirRpQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 序号
   * @format int32
   */
  idx?: number;
  /** 职位 */
  job?: string | null;
  /** 名称 */
  name?: string | null;
  /** 负责人单位 */
  org?: string | null;
  /** 电话 */
  phone?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 关联水库
   * @format int64
   */
  technicsId?: number;
  /** 类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 关联的用户
   * @format int64
   */
  userId?: number;
}

export interface ReservoirRpVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 序号
   * @format int32
   */
  idx?: number;
  /** 职位 */
  job?: string | null;
  /** 名称 */
  name?: string | null;
  /** 负责人单位 */
  org?: string | null;
  /** 电话 */
  phone?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 关联水库
   * @format int64
   */
  technicsId?: number;
  /** 所属水库 */
  technicsName?: string | null;
  /** 类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 关联的用户
   * @format int64
   */
  userId?: number;
}

export interface ReservoirState {
  /**
   * 溢流水深（米）
   * @format double
   */
  depth?: number | null;
  /**
   * 校核洪水位（米）
   * @format double
   */
  floodWaterLevel?: number | null;
  /**
   * 占比（%）
   * @format double
   */
  percent?: number | null;
  /**
   * 溢洪道顶高程（米）
   * @format double
   */
  spillwayTopAltitude?: number | null;
  /**
   * 水库ID
   * @format int64
   */
  technicsId?: number | null;
  /** 水库名称 */
  technicsName?: string | null;
  /**
   * 总库容（万m³）
   * @format double
   */
  totalCapacity?: number | null;
  /**
   * 泄流量（m³/s）
   * @format double
   */
  waterAvgDischarges?: number | null;
  /**
   * 实时水位（米）
   * @format double
   */
  waterAvgLevel?: number | null;
  /**
   * 库容（万m³）
   * @format double
   */
  waterCapacity?: number | null;
}

export interface ReservoirStatus {
  /**
   * 死水位水库数
   * @format int32
   */
  invalidReservoir?: number | null;
  /**
   * 溢洪水库数
   * @format int32
   */
  overflowReservoir?: number | null;
}

export interface ReservoirSwDataFO {
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
  dataValue?: number;
  /** @format int64 */
  id?: number;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface ReservoirSwDataPQO {
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
  dataValue?: number;
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
   * 水库id
   * @format int64
   */
  technicsId?: number;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface ReservoirSwDataQO {
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
  dataValue?: number;
  /** @format int64 */
  id?: number;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface ReservoirSwDataVO {
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
  dataValue?: number;
  /** @format int64 */
  id?: number;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number;
  /** 水库名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface ReservoirVrPQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 初始位置pitch */
  initPitch?: string | null;
  /** 初始位置yaw */
  initYaw?: string | null;
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
   * 水库id
   * @format int64
   */
  technicsId?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface ReservoirVrQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 初始位置pitch */
  initPitch?: string | null;
  /** 初始位置yaw */
  initYaw?: string | null;
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface ReservoirVrRemoveMulQO {
  ids: number[];
}

export interface ReservoirVrVO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 文件名 */
  fileName?: string | null;
  /** 原始文件名 */
  fileNameOrigin?: string | null;
  /** 文件路径 */
  filePath?: string | null;
  /** @format int64 */
  id?: number;
  /** 初始位置pitch */
  initPitch?: string | null;
  /** 初始位置yaw */
  initYaw?: string | null;
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
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
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

export interface SeepagePressureReport {
  /** 数据时间（格式根据查询模式动态变化） */
  dataTime?: string | null;
  /** 设备名称（渗压计名称） */
  equipmentName?: string | null;
  /**
   * 孔底高程（米）
   * @format double
   */
  holeBottomElevation?: number | null;
  /** @format int32 */
  index?: number | null;
  /**
   * 渗压水位（米）最终值 = 水位读数 + 孔底高程
   * @format double
   */
  osmoticWaterLevel?: number | null;
  /** 工程规模 */
  projectScale?: string | null;
  /** 技术方案/水库名称 */
  technicsName?: string | null;
  /** 乡镇 */
  village?: string | null;
}

export interface SeepageVolumeReport {
  /** 统计时间（根据模式动态格式） */
  dataTime?: string | null;
  /**
   * 渗流量（m³/d）
   * @format double
   */
  osmoticFlow?: number | null;
  /** 工程规模 */
  projectScale?: string | null;
  /** 技术方案名称 */
  technicsName?: string | null;
  /** 乡镇 */
  village?: string | null;
}

export interface SpillwayDischargeReport {
  /**
   * 校核洪水位（米）
   * @format double
   */
  floodWaterLevel?: number | null;
  /**
   * 最高滞洪库容（万m³）
   * @format double
   */
  maxCapacity?: number | null;
  /**
   * 堰顶高程（米）
   * @format double
   */
  maxDepth?: number | null;
  /**
   * 溢洪道顶高程（米）
   * @format double
   */
  spillwayTopAltitude?: number | null;
  /**
   * 水库ID
   * @format int64
   */
  technicsId?: number | null;
  /** 水库名称 */
  technicsName?: string | null;
  /** 乡镇 */
  village?: string | null;
  /**
   * 平均泄流量（m³/s）
   * @format double
   */
  waterAvgDischarges?: number | null;
  /**
   * 实时水位（米）
   * @format double
   */
  waterAvgLevel?: number | null;
  /**
   * 总泄流量（m³/s）
   * @format double
   */
  waterCouDischarges?: number | null;
  /**
   * 最高水位（米）
   * @format double
   */
  waterMaxLevel?: number | null;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListAppVersionVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: AppVersionVO[] | null;
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
export interface SqlSugarPagedListConventionalWaterLevelReport {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: ConventionalWaterLevelReport[] | null;
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
export interface SqlSugarPagedListDailyWaterLevelReport {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: DailyWaterLevelReport[] | null;
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
export interface SqlSugarPagedListDataTransferRateByTechnicesVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: DataTransferRateByTechnicesVO[] | null;
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
export interface SqlSugarPagedListDsmImvdImvdmpVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: DsmImvdImvdmpVO[] | null;
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
export interface SqlSugarPagedListDsmSpgPztbVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: DsmSpgPztbVO[] | null;
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
export interface SqlSugarPagedListEmergencyPlanVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EmergencyPlanVO[] | null;
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
export interface SqlSugarPagedListEquipmentParamRainConditionVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EquipmentParamRainConditionVO[] | null;
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
export interface SqlSugarPagedListGNSSOffsetReport {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: GNSSOffsetReport[] | null;
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
export interface SqlSugarPagedListInspectionItemLevelVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: InspectionItemLevelVO[] | null;
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
export interface SqlSugarPagedListInspectionItemVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: InspectionItemVO[] | null;
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
export interface SqlSugarPagedListInspectionRecordLocVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: InspectionRecordLocVO[] | null;
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
export interface SqlSugarPagedListInspectionRecordMonthReportVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: InspectionRecordMonthReportVO[] | null;
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
export interface SqlSugarPagedListInspectionRecordVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: InspectionRecordVO[] | null;
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
export interface SqlSugarPagedListKnowledgeFileVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: KnowledgeFileVO[] | null;
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
export interface SqlSugarPagedListPrealarmRecordHandleActVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: PrealarmRecordHandleActVO[] | null;
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
export interface SqlSugarPagedListPrealarmRecordVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: PrealarmRecordVO[] | null;
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
export interface SqlSugarPagedListPrealarmRuleVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: PrealarmRuleVO[] | null;
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
export interface SqlSugarPagedListProjectDocVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: ProjectDocVO[] | null;
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
export interface SqlSugarPagedListProjectDrawingVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: ProjectDrawingVO[] | null;
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
export interface SqlSugarPagedListProjectTsFileVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: ProjectTsFileVO[] | null;
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
export interface SqlSugarPagedListReservoirCapacityVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: ReservoirCapacityVO[] | null;
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
export interface SqlSugarPagedListReservoirFlowVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: ReservoirFlowVO[] | null;
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
export interface SqlSugarPagedListReservoirProjectVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: ReservoirProjectVO[] | null;
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
export interface SqlSugarPagedListReservoirRpVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: ReservoirRpVO[] | null;
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
export interface SqlSugarPagedListReservoirState {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: ReservoirState[] | null;
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
export interface SqlSugarPagedListReservoirSwDataVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: ReservoirSwDataVO[] | null;
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
export interface SqlSugarPagedListReservoirVrVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: ReservoirVrVO[] | null;
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
export interface SqlSugarPagedListSeepagePressureReport {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: SeepagePressureReport[] | null;
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
export interface SqlSugarPagedListSeepageVolumeReport {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: SeepageVolumeReport[] | null;
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
export interface SqlSugarPagedListSpillwayDischargeReport {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: SpillwayDischargeReport[] | null;
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

/** 分页泛型集合 */
export interface SqlSugarPagedListWaterRainfallInformation {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: WaterRainfallInformation[] | null;
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
export interface SqlSugarPagedListWorkNoticeApproveActVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: WorkNoticeApproveActVO[] | null;
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
export interface SqlSugarPagedListWorkNoticeHandleActVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: WorkNoticeHandleActVO[] | null;
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
export interface SqlSugarPagedListWorkNoticeVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: WorkNoticeVO[] | null;
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

export interface TechnicsCapacityVO {
  /**
   * 库容占比
   * @format double
   */
  capacityProportion?: number | null;
  /**
   * 库容总和
   * @format double
   */
  capacitySum?: number | null;
  /**
   * 当前库容总和
   * @format double
   */
  currentCapacitySum?: number | null;
  /**
   * 正常库容
   * @format double
   */
  normalCapacity?: number | null;
}

export interface TechnicsFO {
  /** 地址 */
  address?: string | null;
  /**
   * 建设期
   * @format int32
   */
  buildCycle?: number | null;
  /** 编号 */
  code?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
  /** 是否有vr */
  hasVr?: boolean | null;
  /** @format int64 */
  id?: number;
  /** 是否启用监测 */
  isMonitor?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /** 渗压是否异常 */
  isOsmoticPressureEx?: boolean | null;
  /** 是否预警 */
  isPrealarm?: boolean | null;
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
  /** 水库代码 */
  stationCode?: string | null;
  /**
   * 水情,1:死水位以下;2:防洪限制水位以下;3:正常蓄水位以下;4:校核洪水位以下;5:校核洪水位以上
   * @format int32
   */
  waterLevel?: number | null;
  /** 蚁情平台标识 */
  yiqingObjId?: string | null;
}

export interface TechnicsInvalidWaterLevel {
  /**
   * 当前水位
   * @format double
   */
  currentWaterLevel?: number | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
  /**
   * 水库ID
   * @format int64
   */
  id?: number;
  /**
   * 死水位
   * @format double
   */
  invalidWaterLevel?: number | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /** 水库名称 */
  name?: string | null;
}

export interface TechnicsInvalidWaterLevelVO {
  /** 列表数据 */
  items?: TechnicsInvalidWaterLevel[] | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 每页记录数
   * @format int32
   */
  pageSize?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
  /**
   * 总记录数
   * @format int32
   */
  totalRecords?: number;
}

export interface TechnicsOverflow {
  /**
   * 当前水位
   * @format double
   */
  currentWaterLevel?: number | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
  /**
   * 水库ID
   * @format int64
   */
  id?: number;
  /** 是否在线 */
  isOnline?: boolean | null;
  /** 水库名称 */
  name?: string | null;
  /**
   * 正常蓄水位
   * @format double
   */
  normalWaterLevel?: number | null;
}

export interface TechnicsOverflowByNormalWaterVO {
  /** 数据列表 */
  items?: TechnicsOverflow[] | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 每页记录数
   * @format int32
   */
  pageSize?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
  /**
   * 总记录数
   * @format int32
   */
  totalRecords?: number;
}

export interface TechnicsOverflowVO {
  /** 数据列表 */
  items?: TechnicsOverflow[] | null;
  /**
   * 当前页码
   * @format int32
   */
  pageIndex?: number;
  /**
   * 每页记录数
   * @format int32
   */
  pageSize?: number;
  /**
   * 总页数
   * @format int32
   */
  totalPages?: number;
  /**
   * 总记录数
   * @format int32
   */
  totalRecords?: number;
}

export interface TechnicsPQO {
  /** 地址 */
  address?: string | null;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /**
   * 建设期
   * @format int32
   */
  buildCycle?: number | null;
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
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** 是否有vr */
  hasVr?: boolean | null;
  /** @format int64 */
  id?: number;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否启用监测 */
  isMonitor?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /** 渗压是否异常 */
  isOsmoticPressureEx?: boolean | null;
  /** 是否预警 */
  isPrealarm?: boolean | null;
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
   * @max 1000
   */
  pageSize?: number;
  /** 备注 */
  remark?: string | null;
  /** 水库代码 */
  stationCode?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
  /** 乡镇 */
  village?: string | null;
  /**
   * 水情,1:死水位以下;2:防洪限制水位以下;3:正常蓄水位以下;4:校核洪水位以下;5:校核洪水位以上
   * @format int32
   */
  waterLevel?: number | null;
  /** 蚁情平台标识 */
  yiqingObjId?: string | null;
}

export interface TechnicsQO {
  /** 地址 */
  address?: string | null;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /**
   * 建设期
   * @format int32
   */
  buildCycle?: number | null;
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
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /** 是否有vr */
  hasVr?: boolean | null;
  /** @format int64 */
  id?: number;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否启用监测 */
  isMonitor?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /** 渗压是否异常 */
  isOsmoticPressureEx?: boolean | null;
  /** 是否预警 */
  isPrealarm?: boolean | null;
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
  /** 水库代码 */
  stationCode?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
  /**
   * 水情,1:死水位以下;2:防洪限制水位以下;3:正常蓄水位以下;4:校核洪水位以下;5:校核洪水位以上
   * @format int32
   */
  waterLevel?: number | null;
  /** 蚁情平台标识 */
  yiqingObjId?: string | null;
}

export interface TechnicsVO {
  /** 地址 */
  address?: string | null;
  /**
   * 建设期
   * @format int32
   */
  buildCycle?: number | null;
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
  /** 是否有vr */
  hasVr?: boolean | null;
  /** @format int64 */
  id?: number;
  /** 是否饮用水源 */
  isDrinkingWater?: boolean | null;
  /** 是否启用监测 */
  isMonitor?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /** 渗压是否异常 */
  isOsmoticPressureEx?: boolean | null;
  /** 是否预警 */
  isPrealarm?: boolean | null;
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
  /** 水库代码 */
  stationCode?: string | null;
  /**
   * 总库容  (万m3)
   * @format double
   */
  totalCapacity?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
  /** 乡镇 */
  village?: string | null;
  /**
   * 水情,1:死水位以下;2:防洪限制水位以下;3:正常蓄水位以下;4:校核洪水位以下;5:校核洪水位以上
   * @format int32
   */
  waterLevel?: number | null;
  /** 蚁情平台标识 */
  yiqingObjId?: string | null;
}

export interface TechnicsWithEquipment {
  /** 编号 */
  code?: string | null;
  /** 设备列表 */
  equipmentParamList?: EquipmentParamInEq[] | null;
  /** @format int64 */
  id?: number;
  /** 是否启用监测 */
  isMonitor?: boolean | null;
  /** 名称 */
  name?: string | null;
}

export interface TreeNode {
  children?: TreeNode[] | null;
  /** @format int64 */
  id?: number;
  name?: string | null;
}

export interface TreeNodeImvd {
  children?: TreeNodeImvd[] | null;
  label?: string | null;
  value?: string | null;
}

export interface TreeNodeKf {
  children?: TreeNodeKf[] | null;
  /** @format int64 */
  id?: number;
  name?: string | null;
  type?: string | null;
}

export interface UpdateRpsQO {
  /** @format int64 */
  prealarmRuleId: number;
  rps?: number[] | null;
}

export interface UserAssignRolesQO {
  roleIds: number[];
  /** @format int64 */
  userId: number;
}

export interface UserAssignTechnicsesQO {
  technicsIds: number[];
  /** @format int64 */
  userId: number;
}

export interface UserAssignUsergroupsQO {
  /** @format int64 */
  userId: number;
  usergroupIds: number[];
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
  organizationId: number;
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
  organizationId: number;
  /**
   * 密码
   * @minLength 1
   */
  password: string;
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

export interface WaterRainfallEigenvalue {
  /** 数据时间。 */
  dataTime?: string | null;
  /**
   * 最新降水量。
   * @format double
   */
  latestRainLevel?: number | null;
  /**
   * 最新库容。
   * @format double
   */
  latestWaterCapacity?: number | null;
  /**
   * 最新水位。
   * @format double
   */
  latestWaterLevel?: number | null;
  /**
   * 降水量范围。
   * @format double
   */
  rainLevelRange?: number | null;
  /**
   * 最高降水量。
   * @format double
   */
  rainMaxLevel?: number | null;
  /**
   * 最低降水量。
   * @format double
   */
  rainMinLevel?: number | null;
  /** @format int64 */
  technicsId?: number;
  /** 水库名称。 */
  technicsName?: string | null;
  /** 乡镇 */
  village?: string | null;
  /**
   * 库容范围。
   * @format double
   */
  waterCapacityRange?: number | null;
  /**
   * 水位范围。
   * @format double
   */
  waterLevelRange?: number | null;
  /**
   * 最高库容。
   * @format double
   */
  waterMaxCapacity?: number | null;
  /**
   * 最高水位。
   * @format double
   */
  waterMaxLevel?: number | null;
  /**
   * 最低库容。
   * @format double
   */
  waterMinCapacity?: number | null;
  /**
   * 最低水位。
   * @format double
   */
  waterMinLevel?: number | null;
}

export interface WaterRainfallInformation {
  /** 数据时间 */
  dataTime?: string | null;
  /**
   * 降水量（mm）
   * @format double
   */
  rainLevel?: number | null;
  /** 水库名称 */
  technicsName?: string | null;
  /** 乡镇 */
  village?: string | null;
  /**
   * 水位（m）
   * @format double
   */
  waterAvgLevel?: number | null;
  /**
   * 库容（万m³）
   * @format double
   */
  waterCapacity?: number | null;
}

/** 工作通知 */
export interface WorkNotice {
  /** 附件信息 */
  attachment?: RecordFile[] | null;
  /**
   * 附件key
   * @format int64
   */
  attachmentKey?: number;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 当前节点名称 */
  currentState?: string | null;
  /**
   * 要求完成时间
   * @format date-time
   */
  deadline?: string;
  /**
   * 处理人
   * @format int64
   */
  handlePersonId?: number;
  /** 处理人 */
  handlePersonName?: string | null;
  /** @format int64 */
  id?: number | null;
  /** 图片信息 */
  images?: RecordFile[] | null;
  /**
   * 水库
   * @format int64
   */
  technicsId?: number;
  /** 水库名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 流程实例id */
  wiid?: string | null;
  /** 任务说明 */
  workDesc?: string | null;
  /** 任务类型 */
  workType?: string | null;
}

/** 工作通知审核表单 */
export interface WorkNoticeApproveAct {
  actInsId?: string | null;
  /** 审核意见 */
  approveDesc?: string | null;
  /**
   * 是否通过（0-未通过，1-通过）
   * @format int32
   */
  approveResult?: number;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  wiid?: string | null;
  /** @format int64 */
  workNoticeId?: number;
}

export interface WorkNoticeApproveActFO {
  actInsId?: string | null;
  /** 审核意见 */
  approveDesc?: string | null;
  /**
   * 是否通过（0-未通过，1-通过）
   * @format int32
   */
  approveResult?: number;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 待办任务ID
   * @minLength 1
   */
  taskId: string;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  wiid?: string | null;
  /** @format int64 */
  workNoticeId?: number;
}

export interface WorkNoticeApproveActPQO {
  actInsId?: string | null;
  /** 审核意见 */
  approveDesc?: string | null;
  /**
   * 是否通过（0-未通过，1-通过）
   * @format int32
   */
  approveResult?: number;
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
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  wiid?: string | null;
  /** @format int64 */
  workNoticeId?: number;
}

export interface WorkNoticeApproveActQO {
  actInsId?: string | null;
  /** 审核意见 */
  approveDesc?: string | null;
  /**
   * 是否通过（0-未通过，1-通过）
   * @format int32
   */
  approveResult?: number;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  wiid?: string | null;
  /** @format int64 */
  workNoticeId?: number;
}

export interface WorkNoticeApproveActVO {
  actInsId?: string | null;
  /** 审核意见 */
  approveDesc?: string | null;
  /**
   * 是否通过（0-未通过，1-通过）
   * @format int32
   */
  approveResult?: number;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  wiid?: string | null;
  /** @format int64 */
  workNoticeId?: number;
}

export interface WorkNoticeDataByWiidVO {
  /** 工作通知审核流程数据 */
  workNoticeApproveActData?: WorkNoticeApproveAct[] | null;
  /** 工作通知 */
  workNoticeData?: WorkNotice;
  /** 工作通知处理流程数据 */
  workNoticeHandleActData?: WorkNoticeHandleAct[] | null;
}

export interface WorkNoticeFO {
  /** 附件 */
  attachment?: RecordFile[] | null;
  /**
   * 附件key
   * @format int64
   */
  attachmentKey?: number;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 当前节点名称 */
  currentState?: string | null;
  /**
   * 要求完成时间
   * @format date-time
   */
  deadline?: string;
  /**
   * 处理人
   * @format int64
   */
  handlePersonId?: number;
  /** 处理人 */
  handlePersonName?: string | null;
  /** @format int64 */
  id?: number | null;
  /** 图片信息 */
  images?: RecordFile[] | null;
  /** 图片 */
  imgList?: RecordFile[] | null;
  /**
   * 水库
   * @format int64
   */
  technicsId?: number;
  /** 水库名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 流程实例id */
  wiid?: string | null;
  /** 任务说明 */
  workDesc?: string | null;
  /** 任务类型 */
  workType?: string | null;
}

/** 工作通知处理表单 */
export interface WorkNoticeHandleAct {
  /** 节点实例ID */
  actInsId?: string | null;
  /** 附件信息 */
  attachment?: RecordFile[] | null;
  /** @format int64 */
  attachmentKey?: number;
  /** @format date-time */
  completeTime?: string;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  handleDesc?: string | null;
  /** @format int64 */
  id?: number | null;
  /** 图片信息 */
  images?: RecordFile[] | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 流程实例id */
  wiid?: string | null;
  /**
   * 工作通知id
   * @format int64
   */
  workNoticeId?: number;
}

export interface WorkNoticeHandleActFO {
  /** 节点实例ID */
  actInsId?: string | null;
  /** 附件信息 */
  attachment?: RecordFile[] | null;
  /** @format int64 */
  attachmentKey?: number;
  /** @format date-time */
  completeTime?: string;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  handleDesc?: string | null;
  /** @format int64 */
  id?: number | null;
  /** 图片信息 */
  images?: RecordFile[] | null;
  /**
   * 待办任务ID
   * @minLength 1
   */
  taskId: string;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 流程实例id */
  wiid?: string | null;
  /**
   * 工作通知id
   * @format int64
   */
  workNoticeId?: number;
}

export interface WorkNoticeHandleActPQO {
  /** 节点实例ID */
  actInsId?: string | null;
  /** 附件信息 */
  attachment?: RecordFile[] | null;
  /** @format int64 */
  attachmentKey?: number;
  /** @format date-time */
  completeTime?: string;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  handleDesc?: string | null;
  /** @format int64 */
  id?: number | null;
  /** 图片信息 */
  images?: RecordFile[] | null;
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
  /** 流程实例id */
  wiid?: string | null;
  /**
   * 工作通知id
   * @format int64
   */
  workNoticeId?: number;
}

export interface WorkNoticeHandleActQO {
  /** 节点实例ID */
  actInsId?: string | null;
  /** 附件信息 */
  attachment?: RecordFile[] | null;
  /** @format int64 */
  attachmentKey?: number;
  /** @format date-time */
  completeTime?: string;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  handleDesc?: string | null;
  /** @format int64 */
  id?: number | null;
  /** 图片信息 */
  images?: RecordFile[] | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 流程实例id */
  wiid?: string | null;
  /**
   * 工作通知id
   * @format int64
   */
  workNoticeId?: number;
}

export interface WorkNoticeHandleActVO {
  /** 节点实例ID */
  actInsId?: string | null;
  /** 附件信息 */
  attachment?: RecordFile[] | null;
  /** @format int64 */
  attachmentKey?: number;
  /** @format date-time */
  completeTime?: string;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  handleDesc?: string | null;
  /** @format int64 */
  id?: number | null;
  /** 图片信息 */
  images?: RecordFile[] | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 流程实例id */
  wiid?: string | null;
  /**
   * 工作通知id
   * @format int64
   */
  workNoticeId?: number;
}

export interface WorkNoticePQO {
  /** 附件信息 */
  attachment?: RecordFile[] | null;
  /**
   * 附件key
   * @format int64
   */
  attachmentKey?: number;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 当前节点名称 */
  currentState?: string | null;
  /**
   * 要求完成时间
   * @format date-time
   */
  deadline?: string;
  /** 排序字段 */
  field?: string | null;
  /**
   * 处理人
   * @format int64
   */
  handlePersonId?: number;
  /** 处理人 */
  handlePersonName?: string | null;
  /** @format int64 */
  id?: number | null;
  /** 图片信息 */
  images?: RecordFile[] | null;
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
   * 水库
   * @format int64
   */
  technicsId?: number;
  /** 水库名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 流程实例id */
  wiid?: string | null;
  /** 任务说明 */
  workDesc?: string | null;
  /** 任务类型 */
  workType?: string | null;
}

export interface WorkNoticeQO {
  /** 附件信息 */
  attachment?: RecordFile[] | null;
  /**
   * 附件key
   * @format int64
   */
  attachmentKey?: number;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 当前节点名称 */
  currentState?: string | null;
  /**
   * 要求完成时间
   * @format date-time
   */
  deadline?: string;
  /**
   * 处理人
   * @format int64
   */
  handlePersonId?: number;
  /** 处理人 */
  handlePersonName?: string | null;
  /** @format int64 */
  id?: number | null;
  /** 图片信息 */
  images?: RecordFile[] | null;
  /**
   * 水库
   * @format int64
   */
  technicsId?: number;
  /** 水库名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 流程实例id */
  wiid?: string | null;
  /** 任务说明 */
  workDesc?: string | null;
  /** 任务类型 */
  workType?: string | null;
}

export interface WorkNoticeVO {
  /** 附件信息 */
  attachment?: RecordFile[] | null;
  /**
   * 附件key
   * @format int64
   */
  attachmentKey?: number;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 当前节点名称 */
  currentState?: string | null;
  /**
   * 要求完成时间
   * @format date-time
   */
  deadline?: string;
  /**
   * 处理人
   * @format int64
   */
  handlePersonId?: number;
  /** 处理人 */
  handlePersonName?: string | null;
  /** @format int64 */
  id?: number | null;
  /** 图片信息 */
  images?: RecordFile[] | null;
  /**
   * 水库
   * @format int64
   */
  technicsId?: number;
  /** 水库名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 流程实例id */
  wiid?: string | null;
  /** 任务说明 */
  workDesc?: string | null;
  /** 任务类型 */
  workType?: string | null;
}
