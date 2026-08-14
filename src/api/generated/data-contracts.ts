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

export interface AlarmPushQO {
  /** 上报地址 */
  address?: string | null;
  /**
   * 报警等级
   * @format int32
   */
  alarmLevel?: number | null;
  /** 联系人 */
  contact?: string | null;
  /** 描述 */
  description?: string | null;
  /** 上报纬度 */
  lat?: string | null;
  /** 上报经度 */
  lng?: string | null;
  /** 联系电话 */
  phone?: string | null;
  /** 设施权属方唯一编号 */
  stationCode?: string | null;
  /** 任务名称 */
  stationDesc?: string | null;
  /** 监测点类型编码 */
  stationTypeCode?: string | null;
  /** 监测点类型名称 */
  stationTypeDesc?: string | null;
}

export type ApiAlarmDetailJoinAlarmPostData =
  FurionResultProcessInspectionCaseAlarmVO;

export type ApiAlarmDetailPostData = FurionResultProcessInspectionCaseVO;

export type ApiAlarmEventPagePostData =
  FurionResultOpenApiPageResultProcessInspectionCaseVO;

export type ApiAlarmEventStatisticsPostData = FurionResultString;

export type ApiAlarmPushAlarmPostData = FurionResultString;

export type ApiAlarmRepairDetailPostData = FurionResultRepairDetailVO;

export type ApiAlarmStatusMapPostData = FurionResultString;

export type ApiAlarmStatusMapPostPayload = string[];

export type ApiAlarmTaskDetailPostData = FurionResultTaskDetailVO;

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

export type ApiAuthMapTokenPostData = FurionResultString;

export type ApiAuthPkinfoPostData = FurionResultString;

export type ApiAuthWvpLoginPostData = FurionResultJObject;

export type ApiBsAlarmPipeLineAddPostData = FurionResultBsAlarmPipeLineVO;

export type ApiBsAlarmPipeLineEditPostData = FurionResultBsAlarmPipeLineVO;

export type ApiBsAlarmPipeLineListPostData = FurionResultListBsAlarmPipeLineVO;

export type ApiBsAlarmPipeLinePagedListPostData =
  FurionResultSqlSugarPagedListBsAlarmPipeLineVO;

export type ApiBsAlarmPipeLineRemoveMulPostData = FurionResultListInt64;

export type ApiBsAlarmPipeLineRemovePostData = FurionResultInt64;

export type ApiBsAlarmPipeLineShowPostData = FurionResultBsAlarmPipeLineVO;

export type ApiBsCommunityAddPostData = FurionResultBsCommunityVO;

export type ApiBsCommunityEditPostData = FurionResultBsCommunityVO;

export type ApiBsCommunityListPostData = FurionResultListBsCommunityVO;

export type ApiBsCommunityPagedListPostData =
  FurionResultSqlSugarPagedListBsCommunityVO;

export type ApiBsCommunityRemoveMulPostData = FurionResultListInt64;

export type ApiBsCommunityRemovePostData = FurionResultInt64;

export type ApiBsCommunityShowPostData = FurionResultBsCommunityVO;

export type ApiBsCompanyAddPostData = FurionResultBsCompanyVO;

export type ApiBsCompanyEditPostData = FurionResultBsCompanyVO;

export type ApiBsCompanyListPostData = FurionResultListBsCompanyVO;

export type ApiBsCompanyPagedListPostData =
  FurionResultSqlSugarPagedListBsCompanyVO;

export type ApiBsCompanyRemoveMulPostData = FurionResultListInt64;

export type ApiBsCompanyRemovePostData = FurionResultInt64;

export type ApiBsCompanyShowPostData = FurionResultBsCompanyVO;

export type ApiBsOutletAddPostData = FurionResultBsOutletVO;

export type ApiBsOutletEditPostData = FurionResultBsOutletVO;

export type ApiBsOutletListPostData = FurionResultListBsOutletVO;

export type ApiBsOutletPagedListPostData =
  FurionResultSqlSugarPagedListBsOutletVO;

export type ApiBsOutletRemovePostData = FurionResultInt64;

export type ApiBsOutletShowPostData = FurionResultBsOutletVO;

export type ApiBsPipeLineAddPostData = FurionResultBsPipeLineVO;

export type ApiBsPipeLineEditPostData = FurionResultBsPipeLineVO;

export type ApiBsPipeLineGetCommunityInfoByPrealarmPostData =
  FurionResultListPrealarmCommunityInfoVO;

export type ApiBsPipeLineGetLineByStartAndEndPostData =
  FurionResultListBsPipeLine;

export type ApiBsPipeLineGetLineByStartPostData = FurionResultListBsPipeLine;

export type ApiBsPipeLineImportDataPostData = FurionResultString;

export type ApiBsPipeLineLightQueryPostData = FurionResultListLightPipeLine;

export type ApiBsPipeLineLinesByEndPointPostData = FurionResultListBsPipeLineVO;

export type ApiBsPipeLineListPostData = FurionResultListBsPipeLineVO;

export type ApiBsPipeLinePagedListPostData =
  FurionResultSqlSugarPagedListBsPipeLineVO;

export type ApiBsPipeLineRemoveMulPostData = FurionResultListInt64;

export type ApiBsPipeLineRemovePostData = FurionResultInt64;

export type ApiBsPipeLineShowPostData = FurionResultBsPipeLineVO;

export type ApiBsPipePointAddPostData = FurionResultBsPipePointVO;

export type ApiBsPipePointAlarmParameterAddPostData =
  FurionResultBsPipePointAlarmParameterVO;

export type ApiBsPipePointAlarmParameterEditPostData =
  FurionResultBsPipePointAlarmParameterVO;

export type ApiBsPipePointAlarmParameterListPostData =
  FurionResultListBsPipePointAlarmParameterVO;

export type ApiBsPipePointAlarmParameterPagedListPostData =
  FurionResultSqlSugarPagedListBsPipePointAlarmParameterVO;

export type ApiBsPipePointAlarmParameterRemoveMulPostData =
  FurionResultListInt64;

export type ApiBsPipePointAlarmParameterRemovePostData = FurionResultInt64;

export type ApiBsPipePointAlarmParameterShowPostData =
  FurionResultBsPipePointAlarmParameterVO;

export type ApiBsPipePointAlarmRecordAddPostData =
  FurionResultBsPipePointAlarmRecordVO;

export type ApiBsPipePointAlarmRecordEditPostData =
  FurionResultBsPipePointAlarmRecordVO;

export type ApiBsPipePointAlarmRecordListPostData =
  FurionResultListBsPipePointAlarmRecordVO;

export type ApiBsPipePointAlarmRecordPagedListPostData =
  FurionResultSqlSugarPagedListBsPipePointAlarmRecordVO;

export type ApiBsPipePointAlarmRecordRemoveMulPostData = FurionResultListInt64;

export type ApiBsPipePointAlarmRecordRemovePostData = FurionResultInt64;

export type ApiBsPipePointAlarmRecordShowPostData =
  FurionResultBsPipePointAlarmRecordVO;

export type ApiBsPipePointConvertCoordinatesToLaluPostData = FurionResultString;

export type ApiBsPipePointCountGroupByAppendagePostData =
  FurionResultListNameCount;

export type ApiBsPipePointEditPostData = FurionResultBsPipePointVO;

export type ApiBsPipePointImportDataPostData = FurionResultString;

export type ApiBsPipePointListPostData = FurionResultListBsPipePointVO;

export type ApiBsPipePointPagedListPostData =
  FurionResultSqlSugarPagedListBsPipePointVO;

export type ApiBsPipePointRemoveMulPostData = FurionResultListInt64;

export type ApiBsPipePointRemovePostData = FurionResultInt64;

export type ApiBsPipePointShowPostData = FurionResultBsPipePointVO;

export type ApiBsPmcAddPostData = FurionResultBsPmcVO;

export type ApiBsPmcEditPostData = FurionResultBsPmcVO;

export type ApiBsPmcListPostData = FurionResultListBsPmcVO;

export type ApiBsPmcPagedListPostData = FurionResultSqlSugarPagedListBsPmcVO;

export type ApiBsPmcRemoveMulPostData = FurionResultListInt64;

export type ApiBsPmcRemovePostData = FurionResultInt64;

export type ApiBsPmcShowPostData = FurionResultBsPmcVO;

export type ApiBsPollutionPermitInfoAddPostData =
  FurionResultBsPollutionPermitInfoVO;

export type ApiBsPollutionPermitInfoEditPostData =
  FurionResultBsPollutionPermitInfoVO;

export type ApiBsPollutionPermitInfoListPostData =
  FurionResultListBsPollutionPermitInfoVO;

export type ApiBsPollutionPermitInfoPagedListPostData =
  FurionResultSqlSugarPagedListBsPollutionPermitInfoVO;

export type ApiBsPollutionPermitInfoRemovePostData = FurionResultInt64;

export type ApiBsPollutionPermitInfoShowPostData =
  FurionResultBsPollutionPermitInfoVO;

export type ApiBsZoneAddPostData = FurionResultBsZoneVO;

export type ApiBsZoneEditPostData = FurionResultBsZoneVO;

export type ApiBsZoneListPostData = FurionResultListBsZoneVO;

export type ApiBsZonePagedListPostData = FurionResultSqlSugarPagedListBsZoneVO;

export type ApiBsZoneRemovePostData = FurionResultListInt64;

export type ApiBsZoneShowPostData = FurionResultBsZoneVO;

export type ApiBsZoneTreedataPostData = FurionResultListTreeNode;

export type ApiBsZoneTypedataPostData = FurionResultListTreeNode;

export type ApiBumenJscDetailJoinAlarmPostData =
  FurionResultProcessInspectionCaseAlarmVO;

export type ApiBumenJscDetailPostData = FurionResultProcessInspectionCaseVO;

export type ApiBumenJscEquipmentListPostData = FurionResultListEquipmentVO;

export type ApiBumenJscEventPagePostData =
  FurionResultOpenApiPageResultProcessInspectionCaseVO;

export type ApiBumenJscEventStatisticsPostData = FurionResultString;

export type ApiBumenJscPrealarmRecordListPostData =
  FurionResultListPrealarmRecordVO;

export type ApiBumenJscRepairDetailPostData = FurionResultRepairDetailVO;

export type ApiBumenJscStatusMapPostData = FurionResultString;

export type ApiBumenJscStatusMapPostPayload = string[];

export type ApiBumenJscTaskDetailPostData = FurionResultTaskDetailVO;

export type ApiBumenJscTechnicsListPostData = FurionResultListTechnicsVO;

export type ApiBumenJscTsLastPrealarmRecordListPostData =
  FurionResultListPrealarmRecordVO;

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

export type ApiDeviceInfoDeviceListByPositionGetData =
  FurionResultListDevicePositionInfo;

export type ApiDeviceInfoDeviceListByPositionScopeGetData =
  FurionResultListDevicePositionScopeInfo;

export type ApiDeviceInfoMonitorByOrganizationPostData =
  FurionResultMonitorByOrganizationResult;

export type ApiDeviceInfoMonitorListByDeviceIdPostData =
  FurionResultListMonitorDetailInfo;

export type ApiDeviceInfoOrganizationListPostData =
  FurionResultOrganizationListResult;

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

export type ApiEquipmentParamEquipmentParamRainConditionPostData =
  FurionResultSqlSugarPagedListEquipmentParamRainConditionVO;

export type ApiEquipmentParamGetEquipmentParamByIdPostData =
  FurionResultListEquipmentParamVO;

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

export type ApiEquipmentParamMdGetEquipmentParamMdListByIdPostData =
  FurionResultListEquipmentParamMd;

export type ApiEquipmentParamMdListPostData =
  FurionResultListEquipmentParamMdVO;

export type ApiEquipmentParamMdPagedListPostData =
  FurionResultSqlSugarPagedListEquipmentParamMdVO;

export type ApiEquipmentParamMdQueryByWaterRainfallEigenvaluePostData =
  FurionResultListWaterRainfallEigenvalue;

export type ApiEquipmentParamMdQueryByWaterRainfallInformationPostData =
  FurionResultSqlSugarPagedListWaterRainfallInformation;

export type ApiEquipmentParamMdRemoveMulPostData = FurionResultListInt64;

export type ApiEquipmentParamMdRemovePostData = FurionResultInt64;

export type ApiEquipmentParamMdShowPostData = FurionResultEquipmentParamMdVO;

export type ApiEquipmentParamPagedListPostData =
  FurionResultSqlSugarPagedListEquipmentParamVO;

export type ApiEquipmentParamRealTimeReportPostData =
  FurionResultListRealTimeReportVO;

export type ApiEquipmentParamRemoveMulPostData = FurionResultListInt64;

export type ApiEquipmentParamRemovePostData = FurionResultInt64;

export type ApiEquipmentParamShowPostData = FurionResultEquipmentParamVO;

export type ApiEquipmentRemoveMulPostData = FurionResultListInt64;

export type ApiEquipmentRemovePostData = FurionResultInt64;

export type ApiEquipmentShowPostData = FurionResultEquipmentVO;

export type ApiHikNmsCameraOnlinePostData = FurionResultNmsCameraOnlineResData;

export type ApiHikPlaybackHlsUrlPostData = FurionResultString;

export type ApiHikPlaybackUrlPostData = FurionResultString;

export type ApiHikPreviewUrlPostData = FurionResultString;

export type ApiInspectionIssueEditPostData = FurionResultInspectionIssueVO;

export type ApiInspectionIssueHandlePostData = any;

export type ApiInspectionIssueListPostData = FurionResultListInspectionIssueVO;

export type ApiInspectionIssuePagedListPostData =
  FurionResultSqlSugarPagedListInspectionIssueVO;

export type ApiInspectionIssueRemovePostData = FurionResultInt64;

export type ApiInspectionIssueReportPostData = FurionResultInspectionIssueVO;

export type ApiInspectionIssueSeverityAddPostData =
  FurionResultInspectionIssueSeverityVO;

export type ApiInspectionIssueSeverityEditPostData =
  FurionResultInspectionIssueSeverityVO;

export type ApiInspectionIssueSeverityListPostData =
  FurionResultListInspectionIssueSeverityVO;

export type ApiInspectionIssueSeverityPagedListPostData =
  FurionResultSqlSugarPagedListInspectionIssueSeverityVO;

export type ApiInspectionIssueSeverityRemovePostData = FurionResultInt64;

export type ApiInspectionIssueSeverityShowPostData =
  FurionResultInspectionIssueSeverityVO;

export type ApiInspectionIssueShowPostData = FurionResultInspectionIssueVO;

export type ApiInspectionIssueTypeAddPostData =
  FurionResultInspectionIssueTypeVO;

export type ApiInspectionIssueTypeEditPostData =
  FurionResultInspectionIssueTypeVO;

export type ApiInspectionIssueTypeListPostData =
  FurionResultListInspectionIssueTypeVO;

export type ApiInspectionIssueTypePagedListPostData =
  FurionResultSqlSugarPagedListInspectionIssueTypeVO;

export type ApiInspectionIssueTypeRemovePostData = FurionResultInt64;

export type ApiInspectionIssueTypeShowPostData =
  FurionResultInspectionIssueTypeVO;

export type ApiInspectionRecordAppendTrackPostData = any;

export type ApiInspectionRecordListPostData =
  FurionResultListInspectionRecordVO;

export type ApiInspectionRecordPagedListPostData =
  FurionResultSqlSugarPagedListInspectionRecordVO;

export type ApiInspectionRecordShowPostData = FurionResultInspectionRecordVO;

export type ApiInspectionTaskDispatchPostData = FurionResultInspectionTaskVO;

export type ApiInspectionTaskEditPostData = FurionResultInspectionTaskVO;

export type ApiInspectionTaskEndPostData = any;

export type ApiInspectionTaskListPostData = FurionResultListInspectionTaskVO;

export type ApiInspectionTaskPagedListPostData =
  FurionResultSqlSugarPagedListInspectionTaskVO;

export type ApiInspectionTaskRemovePostData = FurionResultInt64;

export type ApiInspectionTaskShowPostData = FurionResultInspectionTaskVO;

export type ApiInspectionTaskStartPostData = any;

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

export type ApiPrealarmRecordListPostData = FurionResultListPrealarmRecordVO;

export type ApiPrealarmRecordPagedListPostData =
  FurionResultSqlSugarPagedListPrealarmRecordVO;

export type ApiPrealarmRecordRemoveMulPostData = FurionResultListInt64;

export type ApiPrealarmRecordRemovePostData = FurionResultInt64;

export type ApiPrealarmRecordRtPrealarmRecordPostData =
  FurionResultPrealarmRecordVO;

export type ApiPrealarmRecordShowPostData = FurionResultPrealarmRecordVO;

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

export type ApiRecordFileListPostData = FurionResultListRecordFileVO;

export type ApiRecordFilePagedListPostData =
  FurionResultSqlSugarPagedListRecordFileVO;

export type ApiRecordFileRemoveMulPostData = FurionResultListInt64;

export type ApiRecordFileRemovePostData = FurionResultInt64;

export type ApiRecordFileShowPostData = FurionResultRecordFileVO;

export type ApiReservoirCapacityAddBatchPostData = FurionResultIActionResult;

export type ApiReservoirCapacityAddBatchPostPayload = ReservoirCapacity[];

export type ApiReservoirCapacityAddPostData = FurionResultReservoirCapacityVO;

export type ApiReservoirCapacityDelBatchPostData = FurionResultIActionResult;

export type ApiReservoirCapacityEditBatchPostData = FurionResultIActionResult;

export type ApiReservoirCapacityEditBatchPostPayload = ReservoirCapacityQO[];

export type ApiReservoirCapacityEditPostData = FurionResultReservoirCapacityVO;

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

export type ApiReservoirFlowListPostData = FurionResultListReservoirFlowVO;

export type ApiReservoirFlowPagedListPostData =
  FurionResultSqlSugarPagedListReservoirFlowVO;

export type ApiReservoirFlowRemoveMulPostData = FurionResultListInt64;

export type ApiReservoirFlowRemovePostData = FurionResultInt64;

export type ApiReservoirFlowShowPostData = FurionResultReservoirFlowVO;

export type ApiReservoirProjectAddPostData = FurionResultReservoirProjectVO;

export type ApiReservoirProjectEditPostData = FurionResultReservoirProjectVO;

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

export type ApiReservoirRpListPostData = FurionResultListReservoirRpVO;

export type ApiReservoirRpPagedListPostData =
  FurionResultSqlSugarPagedListReservoirRpVO;

export type ApiReservoirRpRemoveMulPostData = FurionResultListInt64;

export type ApiReservoirRpRemovePostData = FurionResultInt64;

export type ApiReservoirRpShowPostData = FurionResultReservoirRpVO;

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

export type ApiTaskSourceAddPostData = FurionResultTaskSourceVO;

export type ApiTaskSourceEditPostData = FurionResultTaskSourceVO;

export type ApiTaskSourceListPostData = FurionResultListTaskSourceVO;

export type ApiTaskSourcePagedListPostData =
  FurionResultSqlSugarPagedListTaskSourceVO;

export type ApiTaskSourceRemovePostData = FurionResultInt64;

export type ApiTaskSourceShowPostData = FurionResultTaskSourceVO;

export type ApiTechnicsAddPostData = FurionResultTechnicsVO;

export type ApiTechnicsEditPostData = FurionResultTechnicsVO;

export type ApiTechnicsGetCoverNumByVillagePostData =
  FurionResultListGetCoverNum;

export type ApiTechnicsGetCoverNumPostData = FurionResultGetCoverNum;

export type ApiTechnicsListPostData = FurionResultListTechnicsVO;

export type ApiTechnicsPagedListPostData =
  FurionResultSqlSugarPagedListTechnicsVO;

export type ApiTechnicsQueryByConventionalWaterLevelReportPostData =
  FurionResultListConventionalWaterLevelReport;

export type ApiTechnicsQueryByDailyWaterLevelReportPostData =
  FurionResultListDailyWaterLevelReport;

export type ApiTechnicsQueryByReservoirInfoPostData =
  FurionResultListReservoirInfo;

export type ApiTechnicsQueryByReservoirRpPostData = FurionResultReservoirRPNum;

export type ApiTechnicsQueryByReservoirStatusPostData =
  FurionResultReservoirStatus;

export type ApiTechnicsRemoveMulPostData = FurionResultListInt64;

export type ApiTechnicsRemovePostData = FurionResultInt64;

export type ApiTechnicsShowPostData = FurionResultTechnicsVO;

export type ApiUserAddPostData = FurionResultUserVO;

export type ApiUserAssignRolesPostData = any;

export type ApiUserAssignUsergroupsPostData = any;

export type ApiUserEditPostData = FurionResultUserVO;

export type ApiUserEditPwdPostData = any;

export type ApiUserEditSelfPostData = FurionResultUserVO;

export type ApiUserGetRolesPostData = FurionResultListRoleVO;

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

export interface BsAlarmPipeLineFO {
  /**
   * 建成日期
   * @format date-time
   */
  buildTime?: string | null;
  /**
   * 管线终点埋深
   * @format double
   */
  buriedDepthE?: number | null;
  /**
   * 管线起点埋深
   * @format double
   */
  buriedDepthS?: number | null;
  /** 载体 */
  carrier?: string | null;
  /** 管线类别 */
  category?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 管线终点高程
   * @format double
   */
  elevationE?: number | null;
  /**
   * 管线起点高程
   * @format double
   */
  elevationS?: number | null;
  /**
   * 管线等级
   * @format int32
   */
  grade?: number | null;
  /** @format int64 */
  id?: number;
  /** 敷设方式 */
  layingMethod?: string | null;
  /**
   * 管线长度
   * @format double
   */
  length?: number | null;
  /** 管材 */
  material?: string | null;
  /** 权属管理单位 */
  ownershipUnit?: string | null;
  remark?: string | null;
  /** 断面尺寸 */
  sectionSize?: string | null;
  /** 管线终点编号 */
  serialNumberE?: string | null;
  /** 管线起点编号 */
  serialNumberS?: string | null;
  /** 管线类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 投用日期
   * @format date-time
   */
  useTime?: string | null;
}

export interface BsAlarmPipeLinePQO {
  /**
   * 建成日期
   * @format date-time
   */
  buildTime?: string | null;
  /**
   * 管线终点埋深
   * @format double
   */
  buriedDepthE?: number | null;
  /**
   * 管线起点埋深
   * @format double
   */
  buriedDepthS?: number | null;
  /** 载体 */
  carrier?: string | null;
  /** 管线类别 */
  category?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 管线终点高程
   * @format double
   */
  elevationE?: number | null;
  /**
   * 管线起点高程
   * @format double
   */
  elevationS?: number | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * 管线等级
   * @format int32
   */
  grade?: number | null;
  /** @format int64 */
  id?: number;
  /** 敷设方式 */
  layingMethod?: string | null;
  /**
   * 管线长度
   * @format double
   */
  length?: number | null;
  /** 管材 */
  material?: string | null;
  /** 排序方向 */
  order?: string | null;
  /** 权属管理单位 */
  ownershipUnit?: string | null;
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
  /** 断面尺寸 */
  sectionSize?: string | null;
  /** 管线终点编号 */
  serialNumberE?: string | null;
  /** 管线起点编号 */
  serialNumberS?: string | null;
  /** 管线类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 投用日期
   * @format date-time
   */
  useTime?: string | null;
}

export interface BsAlarmPipeLineQO {
  /**
   * 建成日期
   * @format date-time
   */
  buildTime?: string | null;
  /**
   * 管线终点埋深
   * @format double
   */
  buriedDepthE?: number | null;
  /**
   * 管线起点埋深
   * @format double
   */
  buriedDepthS?: number | null;
  /** 载体 */
  carrier?: string | null;
  /** 管线类别 */
  category?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 管线终点高程
   * @format double
   */
  elevationE?: number | null;
  /**
   * 管线起点高程
   * @format double
   */
  elevationS?: number | null;
  /**
   * 管线等级
   * @format int32
   */
  grade?: number | null;
  /** @format int64 */
  id?: number;
  /** 敷设方式 */
  layingMethod?: string | null;
  /**
   * 管线长度
   * @format double
   */
  length?: number | null;
  /** 管材 */
  material?: string | null;
  /** 权属管理单位 */
  ownershipUnit?: string | null;
  remark?: string | null;
  /** 断面尺寸 */
  sectionSize?: string | null;
  /** 管线终点编号 */
  serialNumberE?: string | null;
  /** 管线起点编号 */
  serialNumberS?: string | null;
  /** 管线类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 投用日期
   * @format date-time
   */
  useTime?: string | null;
}

export interface BsAlarmPipeLineVO {
  /**
   * 建成日期
   * @format date-time
   */
  buildTime?: string | null;
  /**
   * 管线终点埋深
   * @format double
   */
  buriedDepthE?: number | null;
  /**
   * 管线起点埋深
   * @format double
   */
  buriedDepthS?: number | null;
  /** 载体 */
  carrier?: string | null;
  /** 管线类别 */
  category?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 管线终点高程
   * @format double
   */
  elevationE?: number | null;
  /**
   * 管线起点高程
   * @format double
   */
  elevationS?: number | null;
  /**
   * 管线等级
   * @format int32
   */
  grade?: number | null;
  /** @format int64 */
  id?: number;
  /** 敷设方式 */
  layingMethod?: string | null;
  /**
   * 管线长度
   * @format double
   */
  length?: number | null;
  /** 管材 */
  material?: string | null;
  /** 权属管理单位 */
  ownershipUnit?: string | null;
  remark?: string | null;
  /** 断面尺寸 */
  sectionSize?: string | null;
  /** 管线终点编号 */
  serialNumberE?: string | null;
  /** 管线起点编号 */
  serialNumberS?: string | null;
  /** 管线类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 投用日期
   * @format date-time
   */
  useTime?: string | null;
}

export interface BsCommunityFO {
  /** 项目经理 */
  contactPerson?: string | null;
  /** 联系电话 */
  contactPhone?: string | null;
  /**
   * 小区户数
   * @format int32
   */
  householdsNumber?: number | null;
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
   * 管理面积(㎡)
   * @format double
   */
  managementArea?: number | null;
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
   * 管理企业(物业)
   * @format int64
   */
  pmcId?: number | null;
  /** 备注 */
  remark?: string | null;
  /** 是否在地图显示 */
  showInMap?: boolean;
}

export interface BsCommunityPQO {
  /** 项目经理 */
  contactPerson?: string | null;
  /** 联系电话 */
  contactPhone?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * 小区户数
   * @format int32
   */
  householdsNumber?: number | null;
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
   * 管理面积(㎡)
   * @format double
   */
  managementArea?: number | null;
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
  /**
   * 管理企业(物业)
   * @format int64
   */
  pmcId?: number | null;
  /** 备注 */
  remark?: string | null;
  /** 是否在地图显示 */
  showInMap?: boolean;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsCommunityQO {
  /** 项目经理 */
  contactPerson?: string | null;
  /** 联系电话 */
  contactPhone?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 小区户数
   * @format int32
   */
  householdsNumber?: number | null;
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
   * 管理面积(㎡)
   * @format double
   */
  managementArea?: number | null;
  /** 名称 */
  name?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /**
   * 管理企业(物业)
   * @format int64
   */
  pmcId?: number | null;
  /** 备注 */
  remark?: string | null;
  /** 是否在地图显示 */
  showInMap?: boolean;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsCommunityVO {
  /** 项目经理 */
  contactPerson?: string | null;
  /** 联系电话 */
  contactPhone?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 小区户数
   * @format int32
   */
  householdsNumber?: number | null;
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
   * 管理面积(㎡)
   * @format double
   */
  managementArea?: number | null;
  /** 名称 */
  name?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /**
   * 管理企业(物业)
   * @format int64
   */
  pmcId?: number | null;
  /** 管理企业(物业) */
  pmcName?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 是否在地图显示 */
  showInMap?: boolean;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsCompanyFO {
  /** 编码(统一社会信用代码) */
  code?: string | null;
  /** 生产状态（生产，限产，停产） */
  companyStateCode?: string | null;
  contactPerson?: string | null;
  contactPhone?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 到期时间
   * @format date-time
   */
  expireTime?: string | null;
  /** @format int64 */
  id?: number;
  /** @format double */
  latitude?: number | null;
  /** 法定代表人 */
  legalRepresentative?: string | null;
  /** @format double */
  longitude?: number | null;
  /** 名称 */
  name?: string | null;
  /**
   * 投产时间
   * @format date-time
   */
  operateTime?: string | null;
  /** 生产经营地址 */
  operatorAddress?: string | null;
  /** @format int32 */
  orderNumber?: number;
  /** 注册地址 */
  registerAddress?: string | null;
  /**
   * 注册时间
   * @format date-time
   */
  registerTime?: string | null;
  remark?: string | null;
  showInMap?: boolean;
  /** 企业类型（营业执照） */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsCompanyPQO {
  /** 编码(统一社会信用代码) */
  code?: string | null;
  /** 生产状态（生产，限产，停产） */
  companyStateCode?: string | null;
  contactPerson?: string | null;
  contactPhone?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 到期时间
   * @format date-time
   */
  expireTime?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** @format double */
  latitude?: number | null;
  /** 法定代表人 */
  legalRepresentative?: string | null;
  /** @format double */
  longitude?: number | null;
  /** 名称 */
  name?: string | null;
  /**
   * 投产时间
   * @format date-time
   */
  operateTime?: string | null;
  /** 生产经营地址 */
  operatorAddress?: string | null;
  /** 排序方向 */
  order?: string | null;
  /** @format int32 */
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
  /** 注册地址 */
  registerAddress?: string | null;
  /**
   * 注册时间
   * @format date-time
   */
  registerTime?: string | null;
  remark?: string | null;
  showInMap?: boolean;
  /** 企业类型（营业执照） */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsCompanyQO {
  /** 编码(统一社会信用代码) */
  code?: string | null;
  /** 生产状态（生产，限产，停产） */
  companyStateCode?: string | null;
  contactPerson?: string | null;
  contactPhone?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 到期时间
   * @format date-time
   */
  expireTime?: string | null;
  /** @format int64 */
  id?: number;
  /** @format double */
  latitude?: number | null;
  /** 法定代表人 */
  legalRepresentative?: string | null;
  /** @format double */
  longitude?: number | null;
  /** 名称 */
  name?: string | null;
  /**
   * 投产时间
   * @format date-time
   */
  operateTime?: string | null;
  /** 生产经营地址 */
  operatorAddress?: string | null;
  /** @format int32 */
  orderNumber?: number;
  /** 注册地址 */
  registerAddress?: string | null;
  /**
   * 注册时间
   * @format date-time
   */
  registerTime?: string | null;
  remark?: string | null;
  showInMap?: boolean;
  /** 企业类型（营业执照） */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsCompanyVO {
  /** 编码(统一社会信用代码) */
  code?: string | null;
  /** 生产状态（生产，限产，停产） */
  companyStateCode?: string | null;
  /** 生产状态名称 */
  companyStateName?: string | null;
  contactPerson?: string | null;
  contactPhone?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 到期时间
   * @format date-time
   */
  expireTime?: string | null;
  /** @format int64 */
  id?: number;
  /** @format double */
  latitude?: number | null;
  /** 法定代表人 */
  legalRepresentative?: string | null;
  /** @format double */
  longitude?: number | null;
  /** 名称 */
  name?: string | null;
  /**
   * 投产时间
   * @format date-time
   */
  operateTime?: string | null;
  /** 生产经营地址 */
  operatorAddress?: string | null;
  /** @format int32 */
  orderNumber?: number;
  /** 注册地址 */
  registerAddress?: string | null;
  /**
   * 注册时间
   * @format date-time
   */
  registerTime?: string | null;
  remark?: string | null;
  showInMap?: boolean;
  /** 企业类型（营业执照） */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsOutletFO {
  /**
   * 编号
   * @minLength 1
   */
  code: string;
  /**
   * 所属企业
   * @format int64
   */
  companyId: number;
  /** @format int64 */
  id?: number | null;
  /** 图片 */
  imgs?: RecordFile[] | null;
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
  remark?: string | null;
  showInMap?: boolean;
}

export interface BsOutletPQO {
  /** 编号 */
  code?: string | null;
  /**
   * 所属企业
   * @format int64
   */
  companyId?: number;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** @format double */
  latitude?: number | null;
  /** @format double */
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
  remark?: string | null;
  showInMap?: boolean;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsOutletQO {
  /** 编号 */
  code?: string | null;
  /**
   * 所属企业
   * @format int64
   */
  companyId?: number;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** @format double */
  latitude?: number | null;
  /** @format double */
  longitude?: number | null;
  remark?: string | null;
  showInMap?: boolean;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsOutletVO {
  /** 编号 */
  code?: string | null;
  /**
   * 所属企业
   * @format int64
   */
  companyId?: number;
  /** 企业名称 */
  companyName?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** @format double */
  latitude?: number | null;
  /** @format double */
  longitude?: number | null;
  remark?: string | null;
  showInMap?: boolean;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

/** 管线 */
export interface BsPipeLine {
  /**
   * 建成日期
   * @format date-time
   */
  buildTime?: string | null;
  /**
   * 管线终点埋深
   * @format double
   */
  buriedDepthE?: number;
  /**
   * 管线起点埋深
   * @format double
   */
  buriedDepthS?: number;
  /** 载体 */
  carrier?: string | null;
  /** 管线类别 */
  category?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 管线终点高程
   * @format double
   */
  elevationE?: number;
  /**
   * 管线起点高程
   * @format double
   */
  elevationS?: number;
  /**
   * 流向
   * @format int32
   */
  flowDirection?: number | null;
  /**
   * 管线等级
   * @format int32
   */
  grade?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * 终点纬度
   * @format double
   */
  latitudeE?: number | null;
  /**
   * 起点纬度
   * @format double
   */
  latitudeS?: number | null;
  /** 敷设方式 */
  layingMethod?: string | null;
  /**
   * 管线长度
   * @format double
   */
  length?: number | null;
  /**
   * 终点经度
   * @format double
   */
  longitudeE?: number | null;
  /**
   * 起点经度
   * @format double
   */
  longitudeS?: number | null;
  /** 管材 */
  material?: string | null;
  /** @format int64 */
  objId?: number;
  /** 权属管理单位 */
  ownershipUnit?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 断面尺寸 */
  sectionSize?: string | null;
  /** 管线终点编号 */
  serialNumberE?: string | null;
  serialNumberELogic?: string | null;
  /** 管线起点编号 */
  serialNumberS?: string | null;
  serialNumberSLogic?: string | null;
  /** @format double */
  shapeLength?: number | null;
  /** 管线类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 投用日期
   * @format date-time
   */
  useTime?: string | null;
}

export interface BsPipeLineFO {
  /**
   * 建成日期
   * @format date-time
   */
  buildTime?: string | null;
  /**
   * 管线终点埋深
   * @format double
   */
  buriedDepthE?: number;
  /**
   * 管线起点埋深
   * @format double
   */
  buriedDepthS?: number;
  /** 载体 */
  carrier?: string | null;
  /** 管线类别 */
  category?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 管线终点高程
   * @format double
   */
  elevationE?: number;
  /**
   * 管线起点高程
   * @format double
   */
  elevationS?: number;
  /**
   * 流向
   * @format int32
   */
  flowDirection?: number | null;
  /**
   * 管线等级
   * @format int32
   */
  grade?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * 终点纬度
   * @format double
   */
  latitudeE?: number | null;
  /**
   * 起点纬度
   * @format double
   */
  latitudeS?: number | null;
  /** 敷设方式 */
  layingMethod?: string | null;
  /**
   * 管线长度
   * @format double
   */
  length?: number | null;
  /**
   * 终点经度
   * @format double
   */
  longitudeE?: number | null;
  /**
   * 起点经度
   * @format double
   */
  longitudeS?: number | null;
  /** 管材 */
  material?: string | null;
  /** @format int64 */
  objId?: number;
  /** 权属管理单位 */
  ownershipUnit?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 断面尺寸 */
  sectionSize?: string | null;
  /** 管线终点编号 */
  serialNumberE?: string | null;
  serialNumberELogic?: string | null;
  /** 管线起点编号 */
  serialNumberS?: string | null;
  serialNumberSLogic?: string | null;
  /** @format double */
  shapeLength?: number | null;
  /** 管线类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 投用日期
   * @format date-time
   */
  useTime?: string | null;
}

export interface BsPipeLinePQO {
  /**
   * 建成日期
   * @format date-time
   */
  buildTime?: string | null;
  /**
   * 管线终点埋深
   * @format double
   */
  buriedDepthE?: number;
  /**
   * 管线起点埋深
   * @format double
   */
  buriedDepthS?: number;
  /** 载体 */
  carrier?: string | null;
  /** 管线类别 */
  category?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 管线终点高程
   * @format double
   */
  elevationE?: number;
  /**
   * 管线起点高程
   * @format double
   */
  elevationS?: number;
  /** 排序字段 */
  field?: string | null;
  /**
   * 流向
   * @format int32
   */
  flowDirection?: number | null;
  /**
   * 管线等级
   * @format int32
   */
  grade?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * 终点纬度
   * @format double
   */
  latitudeE?: number | null;
  /**
   * 起点纬度
   * @format double
   */
  latitudeS?: number | null;
  /** 敷设方式 */
  layingMethod?: string | null;
  /**
   * 管线长度
   * @format double
   */
  length?: number | null;
  /**
   * 终点经度
   * @format double
   */
  longitudeE?: number | null;
  /**
   * 起点经度
   * @format double
   */
  longitudeS?: number | null;
  /** 管材 */
  material?: string | null;
  /** @format int64 */
  objId?: number;
  /** 排序方向 */
  order?: string | null;
  /** 权属管理单位 */
  ownershipUnit?: string | null;
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
  /** 断面尺寸 */
  sectionSize?: string | null;
  /** 管线终点编号 */
  serialNumberE?: string | null;
  serialNumberELogic?: string | null;
  /** 管线起点编号 */
  serialNumberS?: string | null;
  serialNumberSLogic?: string | null;
  /** @format double */
  shapeLength?: number | null;
  /** 管线类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 投用日期
   * @format date-time
   */
  useTime?: string | null;
}

export interface BsPipeLineQO {
  /**
   * 建成日期
   * @format date-time
   */
  buildTime?: string | null;
  /**
   * 管线终点埋深
   * @format double
   */
  buriedDepthE?: number;
  /**
   * 管线起点埋深
   * @format double
   */
  buriedDepthS?: number;
  /** 载体 */
  carrier?: string | null;
  /** 管线类别 */
  category?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 管线终点高程
   * @format double
   */
  elevationE?: number;
  /**
   * 管线起点高程
   * @format double
   */
  elevationS?: number;
  /**
   * 流向
   * @format int32
   */
  flowDirection?: number | null;
  /**
   * 管线等级
   * @format int32
   */
  grade?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * 终点纬度
   * @format double
   */
  latitudeE?: number | null;
  /**
   * 起点纬度
   * @format double
   */
  latitudeS?: number | null;
  /** 敷设方式 */
  layingMethod?: string | null;
  /**
   * 管线长度
   * @format double
   */
  length?: number | null;
  /**
   * 终点经度
   * @format double
   */
  longitudeE?: number | null;
  /**
   * 起点经度
   * @format double
   */
  longitudeS?: number | null;
  /** 管材 */
  material?: string | null;
  /** @format int64 */
  objId?: number;
  /** 权属管理单位 */
  ownershipUnit?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 断面尺寸 */
  sectionSize?: string | null;
  /** 管线终点编号 */
  serialNumberE?: string | null;
  serialNumberELogic?: string | null;
  /** 管线起点编号 */
  serialNumberS?: string | null;
  serialNumberSLogic?: string | null;
  /** @format double */
  shapeLength?: number | null;
  /** 管线类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 投用日期
   * @format date-time
   */
  useTime?: string | null;
}

export interface BsPipeLineVO {
  /**
   * 建成日期
   * @format date-time
   */
  buildTime?: string | null;
  /**
   * 管线终点埋深
   * @format double
   */
  buriedDepthE?: number;
  /**
   * 管线起点埋深
   * @format double
   */
  buriedDepthS?: number;
  /** 载体 */
  carrier?: string | null;
  /** 管线类别 */
  category?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 管线终点高程
   * @format double
   */
  elevationE?: number;
  /**
   * 管线起点高程
   * @format double
   */
  elevationS?: number;
  /**
   * 流向
   * @format int32
   */
  flowDirection?: number | null;
  /**
   * 管线等级
   * @format int32
   */
  grade?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * 终点纬度
   * @format double
   */
  latitudeE?: number | null;
  /**
   * 起点纬度
   * @format double
   */
  latitudeS?: number | null;
  /** 敷设方式 */
  layingMethod?: string | null;
  /**
   * 管线长度
   * @format double
   */
  length?: number | null;
  /**
   * 终点经度
   * @format double
   */
  longitudeE?: number | null;
  /**
   * 起点经度
   * @format double
   */
  longitudeS?: number | null;
  /** 管材 */
  material?: string | null;
  /** @format int64 */
  objId?: number;
  /** 权属管理单位 */
  ownershipUnit?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 断面尺寸 */
  sectionSize?: string | null;
  /** 管线终点编号 */
  serialNumberE?: string | null;
  serialNumberELogic?: string | null;
  /** 管线起点编号 */
  serialNumberS?: string | null;
  serialNumberSLogic?: string | null;
  /** @format double */
  shapeLength?: number | null;
  /** 管线类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 投用日期
   * @format date-time
   */
  useTime?: string | null;
}

export interface BsPipePointAlarmParameterFO {
  /**
   * 堵塞天水位
   * @format double
   */
  blockageDayWaterLevel?: number | null;
  /**
   * 堵塞流量
   * @format double
   */
  blockageFlowRate?: number | null;
  /**
   * 堵塞流速
   * @format double
   */
  blockageFlowVelocity?: number | null;
  /**
   * 堵塞小时水位
   * @format double
   */
  blockageWaterLevel?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 外水入侵天水位
   * @format double
   */
  externalWaterDayWaterLevel?: number | null;
  /**
   * 外水入侵流量
   * @format double
   */
  externalWaterFlowRate?: number | null;
  /**
   * 外水入侵流速
   * @format double
   */
  externalWaterFlowVelocity?: number | null;
  /**
   * 外水入侵小时水位
   * @format double
   */
  externalWaterWaterLevel?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * 漏损天水位
   * @format double
   */
  leakageDayWaterLevel?: number | null;
  /**
   * 漏损流量
   * @format double
   */
  leakageFlowRate?: number | null;
  /**
   * 漏损流速
   * @format double
   */
  leakageFlowVelocity?: number | null;
  /**
   * 漏损小时水位
   * @format double
   */
  leakageWaterLevel?: number | null;
  /** 备注 */
  remark?: string | null;
  /** 管店编号 */
  serialNumber?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsPipePointAlarmParameterPQO {
  /**
   * 堵塞天水位
   * @format double
   */
  blockageDayWaterLevel?: number | null;
  /**
   * 堵塞流量
   * @format double
   */
  blockageFlowRate?: number | null;
  /**
   * 堵塞流速
   * @format double
   */
  blockageFlowVelocity?: number | null;
  /**
   * 堵塞小时水位
   * @format double
   */
  blockageWaterLevel?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 外水入侵天水位
   * @format double
   */
  externalWaterDayWaterLevel?: number | null;
  /**
   * 外水入侵流量
   * @format double
   */
  externalWaterFlowRate?: number | null;
  /**
   * 外水入侵流速
   * @format double
   */
  externalWaterFlowVelocity?: number | null;
  /**
   * 外水入侵小时水位
   * @format double
   */
  externalWaterWaterLevel?: number | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 漏损天水位
   * @format double
   */
  leakageDayWaterLevel?: number | null;
  /**
   * 漏损流量
   * @format double
   */
  leakageFlowRate?: number | null;
  /**
   * 漏损流速
   * @format double
   */
  leakageFlowVelocity?: number | null;
  /**
   * 漏损小时水位
   * @format double
   */
  leakageWaterLevel?: number | null;
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
  /** 管店编号 */
  serialNumber?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsPipePointAlarmParameterQO {
  /**
   * 堵塞天水位
   * @format double
   */
  blockageDayWaterLevel?: number | null;
  /**
   * 堵塞流量
   * @format double
   */
  blockageFlowRate?: number | null;
  /**
   * 堵塞流速
   * @format double
   */
  blockageFlowVelocity?: number | null;
  /**
   * 堵塞小时水位
   * @format double
   */
  blockageWaterLevel?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 外水入侵天水位
   * @format double
   */
  externalWaterDayWaterLevel?: number | null;
  /**
   * 外水入侵流量
   * @format double
   */
  externalWaterFlowRate?: number | null;
  /**
   * 外水入侵流速
   * @format double
   */
  externalWaterFlowVelocity?: number | null;
  /**
   * 外水入侵小时水位
   * @format double
   */
  externalWaterWaterLevel?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * 漏损天水位
   * @format double
   */
  leakageDayWaterLevel?: number | null;
  /**
   * 漏损流量
   * @format double
   */
  leakageFlowRate?: number | null;
  /**
   * 漏损流速
   * @format double
   */
  leakageFlowVelocity?: number | null;
  /**
   * 漏损小时水位
   * @format double
   */
  leakageWaterLevel?: number | null;
  /** 备注 */
  remark?: string | null;
  /** 管店编号 */
  serialNumber?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsPipePointAlarmParameterVO {
  /**
   * 堵塞天水位
   * @format double
   */
  blockageDayWaterLevel?: number | null;
  /**
   * 堵塞流量
   * @format double
   */
  blockageFlowRate?: number | null;
  /**
   * 堵塞流速
   * @format double
   */
  blockageFlowVelocity?: number | null;
  /**
   * 堵塞小时水位
   * @format double
   */
  blockageWaterLevel?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 外水入侵天水位
   * @format double
   */
  externalWaterDayWaterLevel?: number | null;
  /**
   * 外水入侵流量
   * @format double
   */
  externalWaterFlowRate?: number | null;
  /**
   * 外水入侵流速
   * @format double
   */
  externalWaterFlowVelocity?: number | null;
  /**
   * 外水入侵小时水位
   * @format double
   */
  externalWaterWaterLevel?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * 漏损天水位
   * @format double
   */
  leakageDayWaterLevel?: number | null;
  /**
   * 漏损流量
   * @format double
   */
  leakageFlowRate?: number | null;
  /**
   * 漏损流速
   * @format double
   */
  leakageFlowVelocity?: number | null;
  /**
   * 漏损小时水位
   * @format double
   */
  leakageWaterLevel?: number | null;
  /** 备注 */
  remark?: string | null;
  /** 管店编号 */
  serialNumber?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsPipePointAlarmRecordFO {
  alarmInfo?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format date-time */
  dataTime?: string;
  /** @format int64 */
  id?: number;
  /** 是否正确 */
  isCorrect?: boolean | null;
  /** 是否已解决 */
  isResolve?: boolean;
  /** @format int32 */
  level?: number;
  /**
   * 概率
   * @format double
   */
  probability?: number;
  serialNumberE?: string | null;
  serialNumberS?: string | null;
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsPipePointAlarmRecordPQO {
  alarmInfo?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format date-time */
  dataTime?: string;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否正确 */
  isCorrect?: boolean | null;
  /** 是否已解决 */
  isResolve?: boolean;
  /** @format int32 */
  level?: number;
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
   * 概率
   * @format double
   */
  probability?: number;
  serialNumberE?: string | null;
  serialNumberS?: string | null;
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsPipePointAlarmRecordQO {
  alarmInfo?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format date-time */
  dataTime?: string;
  /** @format int64 */
  id?: number;
  /** 是否正确 */
  isCorrect?: boolean | null;
  /** 是否已解决 */
  isResolve?: boolean;
  /** @format int32 */
  level?: number;
  /**
   * 概率
   * @format double
   */
  probability?: number;
  serialNumberE?: string | null;
  serialNumberS?: string | null;
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsPipePointAlarmRecordVO {
  alarmInfo?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format date-time */
  dataTime?: string;
  /** @format int64 */
  id?: number;
  /** 是否正确 */
  isCorrect?: boolean | null;
  /** 是否已解决 */
  isResolve?: boolean;
  /** @format int32 */
  level?: number;
  /**
   * 概率
   * @format double
   */
  probability?: number;
  serialNumberE?: string | null;
  serialNumberS?: string | null;
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsPipePointFO {
  /** 附属物 */
  appendage?: string | null;
  /**
   * 建成日期
   * @format date-time
   */
  buildTime?: string | null;
  /** 载体 */
  carrier?: string | null;
  /** 管线类别 */
  category?: string | null;
  /** 编码 */
  code?: string | null;
  /**
   * 小区id
   * @format int64
   */
  communityId?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 地面高程
   * @format double
   */
  elevation?: number;
  /** 特征 */
  feature?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否有设备 */
  isDevice?: boolean | null;
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
  /** 井盖规格 */
  mcSpecification?: string | null;
  /** @format int64 */
  objId?: number;
  /** 权属管理单位 */
  ownershipUnit?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 编号 */
  serialNumber?: string | null;
  /** 管线类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 投用日期
   * @format date-time
   */
  useTime?: string | null;
  /**
   * 井深
   * @format double
   */
  wellDepth?: number;
}

export interface BsPipePointPQO {
  /** 附属物 */
  appendage?: string | null;
  /**
   * 建成日期
   * @format date-time
   */
  buildTime?: string | null;
  /** 载体 */
  carrier?: string | null;
  /** 管线类别 */
  category?: string | null;
  /** 编码 */
  code?: string | null;
  /**
   * 小区id
   * @format int64
   */
  communityId?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 地面高程
   * @format double
   */
  elevation?: number;
  /** 特征 */
  feature?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否有设备 */
  isDevice?: boolean | null;
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
  /** 井盖规格 */
  mcSpecification?: string | null;
  /** @format int64 */
  objId?: number;
  /** 排序方向 */
  order?: string | null;
  /** 权属管理单位 */
  ownershipUnit?: string | null;
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
  /** 编号 */
  serialNumber?: string | null;
  /** 管线类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 投用日期
   * @format date-time
   */
  useTime?: string | null;
  /**
   * 井深
   * @format double
   */
  wellDepth?: number;
}

export interface BsPipePointQO {
  /** 附属物 */
  appendage?: string | null;
  /**
   * 建成日期
   * @format date-time
   */
  buildTime?: string | null;
  /** 载体 */
  carrier?: string | null;
  /** 管线类别 */
  category?: string | null;
  /** 编码 */
  code?: string | null;
  /**
   * 小区id
   * @format int64
   */
  communityId?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 地面高程
   * @format double
   */
  elevation?: number;
  /** 特征 */
  feature?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否有设备 */
  isDevice?: boolean | null;
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
  /** 井盖规格 */
  mcSpecification?: string | null;
  /** @format int64 */
  objId?: number;
  /** 权属管理单位 */
  ownershipUnit?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 编号 */
  serialNumber?: string | null;
  /** 管线类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 投用日期
   * @format date-time
   */
  useTime?: string | null;
  /**
   * 井深
   * @format double
   */
  wellDepth?: number;
}

export interface BsPipePointStQO {
  /** 附属物 */
  appendage?: string | null;
  /**
   * 建成日期结束时间
   * @format date-time
   */
  buildTimeEt?: string | null;
  /**
   * 建成日期开始时间
   * @format date-time
   */
  buildTimeSt?: string | null;
  /** 载体 */
  carrier?: string | null;
  /** 管线类别 */
  category?: string | null;
  /**
   * 地面高程结束高度
   * @format double
   */
  elevationEt?: number | null;
  /**
   * 地面高程开始高度
   * @format double
   */
  elevationSt?: number | null;
  /** 特征 */
  feature?: string | null;
  /** 井盖规格 */
  mcSpecification?: string | null;
  /** 权属管理单位 */
  ownershipUnit?: string | null;
  /** 编号(模糊匹配) */
  serialNumber?: string | null;
  /** 管线类型 */
  type?: string | null;
  /**
   * 投用日期结束时间
   * @format date-time
   */
  useTimeEt?: string | null;
  /**
   * 投用日期开始时间
   * @format date-time
   */
  useTimeSt?: string | null;
  /**
   * 井深结束高度
   * @format double
   */
  wellDepthEt?: number | null;
  /**
   * 井深开始高度
   * @format double
   */
  wellDepthSt?: number | null;
}

export interface BsPipePointVO {
  /** 附属物 */
  appendage?: string | null;
  /**
   * 建成日期
   * @format date-time
   */
  buildTime?: string | null;
  /** 载体 */
  carrier?: string | null;
  /** 管线类别 */
  category?: string | null;
  /** 编码 */
  code?: string | null;
  /**
   * 小区id
   * @format int64
   */
  communityId?: number | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 地面高程
   * @format double
   */
  elevation?: number;
  /** 特征 */
  feature?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否有设备 */
  isDevice?: boolean | null;
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
  /** 井盖规格 */
  mcSpecification?: string | null;
  /** @format int64 */
  objId?: number;
  /** 权属管理单位 */
  ownershipUnit?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 编号 */
  serialNumber?: string | null;
  /** 管线类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 投用日期
   * @format date-time
   */
  useTime?: string | null;
  /**
   * 井深
   * @format double
   */
  wellDepth?: number;
}

export interface BsPmcFO {
  /** 联系人 */
  contactPerson?: string | null;
  /** 联系电话 */
  contactPhone?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /** 备注 */
  remark?: string | null;
}

export interface BsPmcPQO {
  contactPerson?: string | null;
  contactPhone?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
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

export interface BsPmcQO {
  contactPerson?: string | null;
  contactPhone?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  name?: string | null;
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsPmcVO {
  contactPerson?: string | null;
  contactPhone?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  name?: string | null;
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsPollutionPermitInfoFO {
  /**
   * 排污许可证编号
   * @minLength 1
   */
  code: string;
  /**
   * 企业名称
   * @minLength 1
   */
  companyName: string;
  /** 副本图片 */
  duplicatePicList?: RecordFile[] | null;
  /**
   * 副本图片recordId
   * @format int64
   */
  duplicatePicRid?: number | null;
  /**
   * id
   * @format int64
   */
  id?: number | null;
  /**
   * 行业类别
   * @minLength 1
   */
  industryCategory: string;
  /**
   * 发证机关
   * @minLength 1
   */
  issueAuthority: string;
  /**
   * 发证日期
   * @format date-time
   */
  issueDate: string;
  /**
   * 管理类别(重点管理、简化管理)
   * @minLength 1
   */
  managementCategory: string;
  /**
   * 生产经营地址
   * @minLength 1
   */
  operatorAddress: string;
  /** 正本图片 */
  originalPicList?: RecordFile[] | null;
  /**
   * 正本图片recordId
   * @format int64
   */
  originalPicRid?: number | null;
  remark?: string | null;
  /**
   * 统一社会信用代码
   * @minLength 1
   */
  unifiedSocialCreditCode: string;
  /**
   * 有效起始日期
   * @format date-time
   */
  validFrom: string;
  /**
   * 有效截止日期
   * @format date-time
   */
  validTo: string;
}

export interface BsPollutionPermitInfoPQO {
  /** 排污许可证编号 */
  code?: string | null;
  /** 企业名称 */
  companyName?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 副本图片地址
   * @format int64
   */
  duplicatePicRid?: number | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 行业类别 */
  industryCategory?: string | null;
  /** 发证机关 */
  issueAuthority?: string | null;
  /**
   * 发证日期
   * @format date-time
   */
  issueDate?: string | null;
  /** 管理类别(重点管理、简化管理) */
  managementCategory?: string | null;
  /** 生产经营地址 */
  operatorAddress?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 正本图片地址
   * @format int64
   */
  originalPicRid?: number | null;
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
  /** 统一社会信用代码 */
  unifiedSocialCreditCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 有效起始日期
   * @format date-time
   */
  validFrom?: string | null;
  /**
   * 有效截止日期
   * @format date-time
   */
  validTo?: string | null;
}

export interface BsPollutionPermitInfoQO {
  /** 排污许可证编号 */
  code?: string | null;
  /** 企业名称 */
  companyName?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 副本图片地址
   * @format int64
   */
  duplicatePicRid?: number | null;
  /** @format int64 */
  id?: number;
  /** 行业类别 */
  industryCategory?: string | null;
  /** 发证机关 */
  issueAuthority?: string | null;
  /**
   * 发证日期
   * @format date-time
   */
  issueDate?: string | null;
  /** 管理类别(重点管理、简化管理) */
  managementCategory?: string | null;
  /** 生产经营地址 */
  operatorAddress?: string | null;
  /**
   * 正本图片地址
   * @format int64
   */
  originalPicRid?: number | null;
  remark?: string | null;
  /** 统一社会信用代码 */
  unifiedSocialCreditCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 有效起始日期
   * @format date-time
   */
  validFrom?: string | null;
  /**
   * 有效截止日期
   * @format date-time
   */
  validTo?: string | null;
}

export interface BsPollutionPermitInfoVO {
  /** 排污许可证编号 */
  code?: string | null;
  /** 企业名称 */
  companyName?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 副本图片地址
   * @format int64
   */
  duplicatePicRid?: number | null;
  /** @format int64 */
  id?: number;
  /** 行业类别 */
  industryCategory?: string | null;
  /** 发证机关 */
  issueAuthority?: string | null;
  /**
   * 发证日期
   * @format date-time
   */
  issueDate?: string | null;
  /** 管理类别(重点管理、简化管理) */
  managementCategory?: string | null;
  /** 生产经营地址 */
  operatorAddress?: string | null;
  /**
   * 正本图片地址
   * @format int64
   */
  originalPicRid?: number | null;
  remark?: string | null;
  /** 统一社会信用代码 */
  unifiedSocialCreditCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /**
   * 有效起始日期
   * @format date-time
   */
  validFrom?: string | null;
  /**
   * 有效截止日期
   * @format date-time
   */
  validTo?: string | null;
}

export interface BsZoneFO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 地图fill颜色 */
  fillColor?: string | null;
  /** 边界 */
  geojson?: string | null;
  /** @format int64 */
  id?: number;
  isEnable?: boolean | null;
  /** @format int32 */
  level?: number | null;
  /** 名称 */
  name?: string | null;
  nestedcode?: string | null;
  nestedpath?: string | null;
  parentCode?: string | null;
  /** @format int64 */
  parentId?: number | null;
  parentName?: string | null;
  /**
   * 级别
   * @format int32
   */
  pathkey?: number;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsZonePQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** 地图fill颜色 */
  fillColor?: string | null;
  /** 边界 */
  geojson?: string | null;
  /** @format int64 */
  id?: number;
  isEnable?: boolean | null;
  /** @format int32 */
  level?: number | null;
  /** 名称 */
  name?: string | null;
  nestedcode?: string | null;
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
  /** @format int64 */
  parentId?: number | null;
  parentName?: string | null;
  /**
   * 级别
   * @format int32
   */
  pathkey?: number;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsZoneQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 地图fill颜色 */
  fillColor?: string | null;
  /** 边界 */
  geojson?: string | null;
  /** @format int64 */
  id?: number;
  isEnable?: boolean | null;
  /** @format int32 */
  level?: number | null;
  /** 名称 */
  name?: string | null;
  nestedcode?: string | null;
  nestedpath?: string | null;
  parentCode?: string | null;
  /** @format int64 */
  parentId?: number | null;
  parentName?: string | null;
  /**
   * 级别
   * @format int32
   */
  pathkey?: number;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsZoneVO {
  /** 编号 */
  code?: string | null;
  /** 地图fill颜色 */
  fillColor?: string | null;
  /** 边界 */
  geojson?: string | null;
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
  /** 备注 */
  remark?: string | null;
}

export interface CaseQO {
  caseCode?: string | null;
  repairTaskCode?: string | null;
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
   * 正常库容（万m³）
   * @format double
   */
  normalWaterCapacity?: number | null;
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

export interface DevicePositionInfo {
  /** 设备编码 */
  deviceID?: string | null;
  /**
   * 是否故障0无故障(有流)，1有故障(无流)
   * @format int32
   */
  faultedFlag?: number;
  /** 监控接入服务器主消息号(调流时使用) */
  groupId?: string | null;
  /**
   * 最近一次巡检时间
   * @format date-time
   */
  inspectionTime?: string;
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
  /**
   * 监控编码格式 0.未知 1.H264 2.H265 3.SVAC
   * @format int32
   */
  mediaCode?: number;
  /**
   * 监控分辨率 0.未知 1.720 2.1080 3.2k 4.4k
   * @format int32
   */
  mediaDPI?: number;
  /**
   * 监控通道号(调流时使用)
   * @format int32
   */
  monitorId?: number;
  /** 监控名称 */
  monitorName?: string | null;
  /**
   * 监控在线状态 0离线 1在线
   * @format int32
   */
  online?: number;
  /** 监控唯一标识 */
  pn?: string | null;
  /**
   * 标识摄像机类型：1-球机；2-半球；3-固定枪机；4-遥控枪机(1、4类型支持云台控制)
   * @format int32
   */
  ptzType?: number;
  /**
   * 是否有录像0无录像1有录像
   * @format int32
   */
  saveStatus?: number;
  /** 监控可用状态 ON可用 OFF不可用 */
  status?: string | null;
}

export interface DevicePositionScopeInfo {
  /** 设备编码 */
  deviceID?: string | null;
  /**
   * 是否故障0无故障(有流)，1有故障(无流)
   * @format int32
   */
  faultedFlag?: number;
  /** 监控接入服务器主消息号(调流时使用) */
  groupId?: string | null;
  /**
   * 最近一次巡检时间
   * @format date-time
   */
  inspectionTime?: string;
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
  /**
   * 监控编码格式 0.未知 1.H264 2.H265 3.SVAC
   * @format int32
   */
  mediaCode?: number;
  /**
   * 监控分辨率 0.未知 1.720 2.1080 3.2k 4.4k
   * @format int32
   */
  mediaDPI?: number;
  /**
   * 监控通道号(调流时使用)
   * @format int32
   */
  monitorId?: number;
  /** 监控名称 */
  monitorName?: string | null;
  /**
   * 监控在线状态 0离线 1在线
   * @format int32
   */
  online?: number;
  /** 监控唯一标识 */
  pn?: string | null;
  /**
   * 标识摄像机类型：1-球机；2-半球；3-固定枪机；4-遥控枪机(1、4类型支持云台控制)
   * @format int32
   */
  ptzType?: number;
  /**
   * 是否有录像0无录像1有录像
   * @format int32
   */
  saveStatus?: number;
  /** 监控可用状态 ON可用 OFF不可用 */
  status?: string | null;
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
  /**
   * id
   * @format int64
   */
  id?: number;
  /** imei */
  imei?: string | null;
  /**
   * 安装高度
   * @format double
   */
  installationHeight?: number | null;
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
  /** 备注 */
  remark?: string | null;
  /** 测站编码 */
  stcode?: string | null;
  /**
   * 所属点位
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
  /**
   * 安装高度
   * @format double
   */
  installationHeight?: number | null;
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
  /** 备注 */
  remark?: string | null;
  /** 测站编码 */
  stcode?: string | null;
  /**
   * 所属点位
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
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 无效原因 */
  invalidReason?: string | null;
  /** 是否显示 */
  isDisplay?: boolean | null;
  /** 值是否有效 */
  isEffective?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /** 是否预警 */
  isPrealarm?: boolean | null;
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

/** 分钟数据表 */
export interface EquipmentParamMd {
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
  /** 无效原因 */
  invalidReason?: string | null;
  /** 是否有效 */
  isEffective?: boolean | null;
  /** 是否预警 */
  isPrealarm?: boolean | null;
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
  /** 无效原因 */
  invalidReason?: string | null;
  /** 是否有效 */
  isEffective?: boolean | null;
  /** 是否预警 */
  isPrealarm?: boolean | null;
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
  /** 无效原因 */
  invalidReason?: string | null;
  /** 是否有效 */
  isEffective?: boolean | null;
  /** 是否预警 */
  isPrealarm?: boolean | null;
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
  /** 无效原因 */
  invalidReason?: string | null;
  /** 是否有效 */
  isEffective?: boolean | null;
  /** 是否预警 */
  isPrealarm?: boolean | null;
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
  /** 无效原因 */
  invalidReason?: string | null;
  /** 是否有效 */
  isEffective?: boolean | null;
  /** 是否预警 */
  isPrealarm?: boolean | null;
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
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 无效原因 */
  invalidReason?: string | null;
  /** 是否显示 */
  isDisplay?: boolean | null;
  /** 值是否有效 */
  isEffective?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /** 是否预警 */
  isPrealarm?: boolean | null;
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
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 无效原因 */
  invalidReason?: string | null;
  /** 是否显示 */
  isDisplay?: boolean | null;
  /** 值是否有效 */
  isEffective?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /** 是否预警 */
  isPrealarm?: boolean | null;
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
  /**
   * 水库id
   * @format int64
   */
  technicsId?: number | null;
}

/** 实时雨水情返回值 */
export interface EquipmentParamRainConditionVO {
  /**
   * 渗压水位1
   * @format double
   */
  osmoticWaterLevel1?: number | null;
  /**
   * 渗压水位2
   * @format double
   */
  osmoticWaterLevel2?: number | null;
  /**
   * 渗压水位3
   * @format double
   */
  osmoticWaterLevel3?: number | null;
  /**
   * X偏移1
   * @format double
   */
  xOffset1?: number | null;
  /**
   * X偏移2
   * @format double
   */
  xOffset2?: number | null;
  /**
   * X偏移3
   * @format double
   */
  xOffset3?: number | null;
  /**
   * Y偏移1
   * @format double
   */
  yOffset1?: number | null;
  /**
   * Y偏移2
   * @format double
   */
  yOffset2?: number | null;
  /**
   * Y偏移3
   * @format double
   */
  yOffset3?: number | null;
  /**
   * Z偏移1
   * @format double
   */
  zOffset1?: number | null;
  /**
   * Z偏移2
   * @format double
   */
  zOffset2?: number | null;
  /**
   * Z偏移3
   * @format double
   */
  zOffset3?: number | null;
  /**
   * 当前库容
   * @format double
   */
  capacity?: number | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
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
  /**
   * 当前降雨量
   * @format double
   */
  rainfall?: number | null;
  /**
   * 降雨量预警级别
   * @format int32
   */
  rainfallPreAlarmLevel?: number | null;
  /** 水库名称 */
  technicsName?: string | null;
  /**
   * 当前水位
   * @format double
   */
  waterLevel?: number | null;
  /**
   * 水位预警级别
   * @format int32
   */
  waterLevelPreAlarmLevel?: number | null;
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
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 无效原因 */
  invalidReason?: string | null;
  /** 是否显示 */
  isDisplay?: boolean | null;
  /** 值是否有效 */
  isEffective?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /** 是否预警 */
  isPrealarm?: boolean | null;
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
  /**
   * 安装高度
   * @format double
   */
  installationHeight?: number | null;
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
  /** 备注 */
  remark?: string | null;
  /** 测站编码 */
  stcode?: string | null;
  /**
   * 所属点位
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
  /**
   * 安装高度
   * @format double
   */
  installationHeight?: number | null;
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
  /** 备注 */
  remark?: string | null;
  /** 测站编码 */
  stcode?: string | null;
  /**
   * 所属点位
   * @format int64
   */
  technicsId?: number | null;
  /** 所属点位 */
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

export interface EventStatisticsQO {
  /** @format int32 */
  bizLine?: number | null;
  endDate?: string | null;
  startDate?: string | null;
}

/** 文件信息实体 */
export interface FileInfoVO {
  /**
   * 文件ID（对应JSON字段：id）
   * @format int32
   */
  id?: number;
  /** 缩略图路径（对应JSON字段：thumbnailUri） */
  thumbnailUri?: string | null;
  /** 文件存储路径（对应JSON字段：uri） */
  uri?: string | null;
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
export interface FurionResultBsAlarmPipeLineVO {
  data?: BsAlarmPipeLineVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultBsCommunityVO {
  data?: BsCommunityVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultBsCompanyVO {
  data?: BsCompanyVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultBsOutletVO {
  data?: BsOutletVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultBsPipeLineVO {
  data?: BsPipeLineVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultBsPipePointAlarmParameterVO {
  data?: BsPipePointAlarmParameterVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultBsPipePointAlarmRecordVO {
  data?: BsPipePointAlarmRecordVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultBsPipePointVO {
  data?: BsPipePointVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultBsPmcVO {
  data?: BsPmcVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultBsPollutionPermitInfoVO {
  data?: BsPollutionPermitInfoVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultBsZoneVO {
  data?: BsZoneVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultInspectionIssueSeverityVO {
  data?: InspectionIssueSeverityVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultInspectionIssueTypeVO {
  data?: InspectionIssueTypeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultInspectionIssueVO {
  data?: InspectionIssueVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultInspectionTaskVO {
  data?: InspectionTaskVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultJObject {
  /** 数据 */
  data?: Record<string, JToken>;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListBsAlarmPipeLineVO {
  /** 数据 */
  data?: BsAlarmPipeLineVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListBsCommunityVO {
  /** 数据 */
  data?: BsCommunityVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListBsCompanyVO {
  /** 数据 */
  data?: BsCompanyVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListBsOutletVO {
  /** 数据 */
  data?: BsOutletVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListBsPipeLine {
  /** 数据 */
  data?: BsPipeLine[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListBsPipeLineVO {
  /** 数据 */
  data?: BsPipeLineVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListBsPipePointAlarmParameterVO {
  /** 数据 */
  data?: BsPipePointAlarmParameterVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListBsPipePointAlarmRecordVO {
  /** 数据 */
  data?: BsPipePointAlarmRecordVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListBsPipePointVO {
  /** 数据 */
  data?: BsPipePointVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListBsPmcVO {
  /** 数据 */
  data?: BsPmcVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListBsPollutionPermitInfoVO {
  /** 数据 */
  data?: BsPollutionPermitInfoVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListBsZoneVO {
  /** 数据 */
  data?: BsZoneVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListConventionalWaterLevelReport {
  /** 数据 */
  data?: ConventionalWaterLevelReport[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListDailyWaterLevelReport {
  /** 数据 */
  data?: DailyWaterLevelReport[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListDevicePositionInfo {
  /** 数据 */
  data?: DevicePositionInfo[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListDevicePositionScopeInfo {
  /** 数据 */
  data?: DevicePositionScopeInfo[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListEquipmentParamMd {
  /** 数据 */
  data?: EquipmentParamMd[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListInspectionIssueSeverityVO {
  /** 数据 */
  data?: InspectionIssueSeverityVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListInspectionIssueTypeVO {
  /** 数据 */
  data?: InspectionIssueTypeVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListInspectionIssueVO {
  /** 数据 */
  data?: InspectionIssueVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListInspectionTaskVO {
  /** 数据 */
  data?: InspectionTaskVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListLightPipeLine {
  /** 数据 */
  data?: LightPipeLine[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListMonitorDetailInfo {
  /** 数据 */
  data?: MonitorDetailInfo[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListPrealarmCommunityInfoVO {
  /** 数据 */
  data?: PrealarmCommunityInfoVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListRealTimeReportVO {
  /** 数据 */
  data?: RealTimeReportVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListRecordFileVO {
  /** 数据 */
  data?: RecordFileVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListReservoirInfo {
  /** 数据 */
  data?: ReservoirInfo[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListTaskSourceVO {
  /** 数据 */
  data?: TaskSourceVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultMonitorByOrganizationResult {
  data?: MonitorByOrganizationResult;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultOpenApiPageResultProcessInspectionCaseVO {
  data?: OpenApiPageResultProcessInspectionCaseVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultOrganizationListResult {
  data?: OrganizationListResult;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultProcessInspectionCaseAlarmVO {
  data?: ProcessInspectionCaseAlarmVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultProcessInspectionCaseVO {
  data?: ProcessInspectionCaseVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultRecordFileVO {
  data?: RecordFileVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultRepairDetailVO {
  data?: RepairDetailVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultSqlSugarPagedListBsAlarmPipeLineVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListBsAlarmPipeLineVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListBsCommunityVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListBsCommunityVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListBsCompanyVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListBsCompanyVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListBsOutletVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListBsOutletVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListBsPipeLineVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListBsPipeLineVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListBsPipePointAlarmParameterVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListBsPipePointAlarmParameterVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListBsPipePointAlarmRecordVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListBsPipePointAlarmRecordVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListBsPipePointVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListBsPipePointVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListBsPmcVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListBsPmcVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListBsPollutionPermitInfoVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListBsPollutionPermitInfoVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListBsZoneVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListBsZoneVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultSqlSugarPagedListInspectionIssueSeverityVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListInspectionIssueSeverityVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListInspectionIssueTypeVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListInspectionIssueTypeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListInspectionIssueVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListInspectionIssueVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultSqlSugarPagedListInspectionTaskVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListInspectionTaskVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultSqlSugarPagedListRecordFileVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListRecordFileVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultSqlSugarPagedListTaskSourceVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListTaskSourceVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultTaskDetailVO {
  data?: TaskDetailVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultTaskSourceVO {
  data?: TaskSourceVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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

export interface GetDeviceListByPositionQO {
  elatitude?: string | null;
  elongitude?: string | null;
  slatitude?: string | null;
  slongitude?: string | null;
}

export interface GetDeviceListByPositionScopeQO {
  latitude?: string | null;
  longitude?: string | null;
  scope?: string | null;
}

export interface GetMonitorByOrganizationQO {
  organizationcode?: string | null;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  platformid?: number;
  /** @format int32 */
  streamType?: number | null;
}

export interface GetMonitorListByDeviceIdQO {
  deviceids?: string | null;
  /** @format int32 */
  streamType?: number | null;
}

export interface GetOrganizationListQO {
  parentCode?: string | null;
  /** @format int32 */
  platformid?: number;
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

/** 问题上报表单 */
export interface InspectionIssueFO {
  /** 地址 */
  address?: string | null;
  /** 问题描述 */
  description?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 问题类型
   * @minLength 1
   */
  issueType: string;
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
  /** 照片(JSON数组) */
  photos?: string | null;
  /**
   * 巡查记录编号
   * @minLength 1
   */
  recordNo: string;
  /**
   * 问题严重情况
   * @minLength 1
   */
  severity: string;
  /**
   * 问题严重打分
   * @format int32
   */
  severityScore: number;
}

export interface InspectionIssuePQO {
  /** 地址 */
  address?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /** 问题描述 */
  description?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** 处理备注 */
  handleNote?: string | null;
  /**
   * 处理状态(0:待处理,1:处理中,2:已处理,3:已关闭)
   * @format int32
   */
  handleStatus?: number | null;
  /**
   * 处理时间
   * @format date-time
   */
  handleTime?: string | null;
  /**
   * 处理人ID
   * @format int64
   */
  handlerId?: number | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 是否删除 */
  isDeleted?: boolean | null;
  /** 问题编号 */
  issueNo?: string | null;
  /** 问题类型编码(逻辑外键) */
  issueType?: string | null;
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
  /** 照片(JSON数组) */
  photos?: string | null;
  /** 巡查记录编号(逻辑外键) */
  recordNo?: string | null;
  /**
   * 上报时间
   * @format date-time
   */
  reportTime?: string | null;
  /**
   * 上报时间-起
   * @format date-time
   */
  reportTimeBegin?: string | null;
  /**
   * 上报时间-止
   * @format date-time
   */
  reportTimeEnd?: string | null;
  /**
   * 上报人ID
   * @format int64
   */
  reporterId?: number | null;
  /** 问题严重情况编码(逻辑外键) */
  severity?: string | null;
  /**
   * 问题严重打分(0-60)
   * @format int32
   */
  severityScore?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface InspectionIssueQO {
  /** 地址 */
  address?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /** 问题描述 */
  description?: string | null;
  /** 处理备注 */
  handleNote?: string | null;
  /**
   * 处理状态(0:待处理,1:处理中,2:已处理,3:已关闭)
   * @format int32
   */
  handleStatus?: number | null;
  /**
   * 处理时间
   * @format date-time
   */
  handleTime?: string | null;
  /**
   * 处理人ID
   * @format int64
   */
  handlerId?: number | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 是否删除 */
  isDeleted?: boolean | null;
  /** 问题编号 */
  issueNo?: string | null;
  /** 问题类型编码(逻辑外键) */
  issueType?: string | null;
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
  /** 照片(JSON数组) */
  photos?: string | null;
  /** 巡查记录编号(逻辑外键) */
  recordNo?: string | null;
  /**
   * 上报时间
   * @format date-time
   */
  reportTime?: string | null;
  /**
   * 上报时间-起
   * @format date-time
   */
  reportTimeBegin?: string | null;
  /**
   * 上报时间-止
   * @format date-time
   */
  reportTimeEnd?: string | null;
  /**
   * 上报人ID
   * @format int64
   */
  reporterId?: number | null;
  /** 问题严重情况编码(逻辑外键) */
  severity?: string | null;
  /**
   * 问题严重打分(0-60)
   * @format int32
   */
  severityScore?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface InspectionIssueSeverityFO {
  /**
   * 编码
   * @minLength 1
   */
  code: string;
  /** @format int64 */
  id?: number;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /**
   * 序号
   * @format int32
   */
  orderNumber: number;
  /**
   * 分值下限
   * @format int32
   */
  scoreLower: number;
  /**
   * 分值上限
   * @format int32
   */
  scoreUpper: number;
}

export interface InspectionIssueSeverityPQO {
  /** 编码 */
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
  /**
   * 分值下限
   * @format int32
   */
  scoreLower?: number | null;
  /**
   * 分值上限
   * @format int32
   */
  scoreUpper?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface InspectionIssueSeverityQO {
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
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 名称 */
  name?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /**
   * 分值下限
   * @format int32
   */
  scoreLower?: number | null;
  /**
   * 分值上限
   * @format int32
   */
  scoreUpper?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface InspectionIssueSeverityVO {
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
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 名称 */
  name?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /**
   * 分值下限
   * @format int32
   */
  scoreLower?: number | null;
  /**
   * 分值上限
   * @format int32
   */
  scoreUpper?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface InspectionIssueTypeFO {
  /**
   * 编码
   * @minLength 1
   */
  code: string;
  /** @format int64 */
  id?: number;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /**
   * 序号
   * @format int32
   */
  orderNumber: number;
}

export interface InspectionIssueTypePQO {
  /** 编码 */
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
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface InspectionIssueTypeQO {
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
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 名称 */
  name?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface InspectionIssueTypeVO {
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
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 名称 */
  name?: string | null;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface InspectionIssueVO {
  /** 地址 */
  address?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /** 问题描述 */
  description?: string | null;
  /** 处理备注 */
  handleNote?: string | null;
  /**
   * 处理状态(0:待处理,1:处理中,2:已处理,3:已关闭)
   * @format int32
   */
  handleStatus?: number | null;
  /**
   * 处理时间
   * @format date-time
   */
  handleTime?: string | null;
  /**
   * 处理人ID
   * @format int64
   */
  handlerId?: number | null;
  /** 处理人 */
  handlerName?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 是否删除 */
  isDeleted?: boolean | null;
  /** 问题编号 */
  issueNo?: string | null;
  /** 问题类型编码(逻辑外键) */
  issueType?: string | null;
  /** 问题类型名称 */
  issueTypeName?: string | null;
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
  /** 照片(JSON数组) */
  photos?: string | null;
  /** 巡查记录编号(逻辑外键) */
  recordNo?: string | null;
  /**
   * 上报时间
   * @format date-time
   */
  reportTime?: string | null;
  /**
   * 上报人ID
   * @format int64
   */
  reporterId?: number | null;
  /** 上报人 */
  reporterName?: string | null;
  /** 问题严重情况编码(逻辑外键) */
  severity?: string | null;
  /** 问题严重情况名称 */
  severityName?: string | null;
  /**
   * 问题严重打分(0-60)
   * @format int32
   */
  severityScore?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface InspectionRecordPQO {
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 巡查对象(冗余) */
  objectCode?: string | null;
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
   * 巡查人员ID
   * @format int64
   */
  personId?: number | null;
  /** 记录编号 */
  recordNo?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 巡查结果(1:正常,2:发现问题)
   * @format int32
   */
  result?: number | null;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string | null;
  /**
   * 开始时间-起
   * @format date-time
   */
  startTimeBegin?: string | null;
  /**
   * 开始时间-止
   * @format date-time
   */
  startTimeEnd?: string | null;
  /**
   * 状态(1:进行中,2:已完成)
   * @format int32
   */
  status?: number | null;
  /** 任务编号(逻辑外键) */
  taskNo?: string | null;
  /**
   * 总里程(米)
   * @format double
   */
  totalMileage?: number | null;
  /** 轨迹(坐标点JSON数组) */
  track?: string | null;
  /** 巡查类型(冗余) */
  typeCode?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface InspectionRecordQO {
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 巡查对象(冗余) */
  objectCode?: string | null;
  /**
   * 巡查人员ID
   * @format int64
   */
  personId?: number | null;
  /** 记录编号 */
  recordNo?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 巡查结果(1:正常,2:发现问题)
   * @format int32
   */
  result?: number | null;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string | null;
  /**
   * 开始时间-起
   * @format date-time
   */
  startTimeBegin?: string | null;
  /**
   * 开始时间-止
   * @format date-time
   */
  startTimeEnd?: string | null;
  /**
   * 状态(1:进行中,2:已完成)
   * @format int32
   */
  status?: number | null;
  /** 任务编号(逻辑外键) */
  taskNo?: string | null;
  /**
   * 总里程(米)
   * @format double
   */
  totalMileage?: number | null;
  /** 轨迹(坐标点JSON数组) */
  track?: string | null;
  /** 巡查类型(冗余) */
  typeCode?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface InspectionRecordVO {
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 巡查对象(冗余) */
  objectCode?: string | null;
  /** 巡查对象 */
  readonly objectName?: string | null;
  /**
   * 巡查人员ID
   * @format int64
   */
  personId?: number | null;
  /** 巡查人员 */
  readonly personName?: string | null;
  /** 记录编号 */
  recordNo?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 巡查结果(1:正常,2:发现问题)
   * @format int32
   */
  result?: number | null;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string | null;
  /**
   * 状态(1:进行中,2:已完成)
   * @format int32
   */
  status?: number | null;
  /** 任务编号(逻辑外键) */
  taskNo?: string | null;
  /**
   * 总里程(米)
   * @format double
   */
  totalMileage?: number | null;
  /** 轨迹(坐标点JSON数组) */
  track?: string | null;
  /** 巡查类型(冗余) */
  typeCode?: string | null;
  /** 巡查类型 */
  readonly typeName?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface InspectionTaskFO {
  /** @format int64 */
  id?: number;
  /**
   * 任务名称
   * @minLength 1
   */
  name: string;
  /**
   * 巡查对象
   * @minLength 1
   */
  objectCode: string;
  /**
   * 巡查人员ID
   * @format int64
   */
  personId: number;
  /**
   * 任务来源编码
   * @minLength 1
   */
  sourceCode: string;
  /**
   * 任务日期
   * @format date-time
   */
  taskDate: string;
  /**
   * 巡查类型
   * @minLength 1
   */
  typeCode: string;
}

export interface InspectionTaskPQO {
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
  /** 任务名称 */
  name?: string | null;
  /** 巡查对象(inspo_psgw:管网,inspo_wsc:污水厂) */
  objectCode?: string | null;
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
   * 巡查人员ID
   * @format int64
   */
  personId?: number | null;
  /** 任务来源编码(逻辑外键) */
  sourceCode?: string | null;
  /**
   * 状态(0:待执行,1:执行中,2:已完成,3:已取消)
   * @format int32
   */
  status?: number | null;
  /**
   * 任务日期
   * @format date-time
   */
  taskDate?: string | null;
  /**
   * 任务日期-结束
   * @format date-time
   */
  taskDateEnd?: string | null;
  /**
   * 任务日期-开始
   * @format date-time
   */
  taskDateStart?: string | null;
  /** 任务编号 */
  taskNo?: string | null;
  /** 巡查类型(inspt_rc:日常,inspt_ls:临时) */
  typeCode?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface InspectionTaskQO {
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
  /** 任务名称 */
  name?: string | null;
  /** 巡查对象(inspo_psgw:管网,inspo_wsc:污水厂) */
  objectCode?: string | null;
  /**
   * 巡查人员ID
   * @format int64
   */
  personId?: number | null;
  /** 任务来源编码(逻辑外键) */
  sourceCode?: string | null;
  /**
   * 状态(0:待执行,1:执行中,2:已完成,3:已取消)
   * @format int32
   */
  status?: number | null;
  /**
   * 任务日期
   * @format date-time
   */
  taskDate?: string | null;
  /**
   * 任务日期-结束
   * @format date-time
   */
  taskDateEnd?: string | null;
  /**
   * 任务日期-开始
   * @format date-time
   */
  taskDateStart?: string | null;
  /** 任务编号 */
  taskNo?: string | null;
  /** 巡查类型(inspt_rc:日常,inspt_ls:临时) */
  typeCode?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface InspectionTaskVO {
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
  /** 任务名称 */
  name?: string | null;
  /** 巡查对象(inspo_psgw:管网,inspo_wsc:污水厂) */
  objectCode?: string | null;
  /** 巡查对象 */
  readonly objectName?: string | null;
  /**
   * 巡查人员ID
   * @format int64
   */
  personId?: number | null;
  /** 巡查人员 */
  readonly personName?: string | null;
  /** 任务来源编码(逻辑外键) */
  sourceCode?: string | null;
  /** 任务来源名称 */
  sourceName?: string | null;
  /**
   * 状态(0:待执行,1:执行中,2:已完成,3:已取消)
   * @format int32
   */
  status?: number | null;
  /**
   * 任务日期
   * @format date-time
   */
  taskDate?: string | null;
  /** 任务编号 */
  taskNo?: string | null;
  /** 巡查类型(inspt_rc:日常,inspt_ls:临时) */
  typeCode?: string | null;
  /** 巡查类型 */
  readonly typeName?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 问题处理表单 */
export interface IssueHandleFO {
  /**
   * 处理备注
   * @minLength 1
   */
  handleNote: string;
  /**
   * 处理时间
   * @format date-time
   */
  handleTime?: string | null;
  /**
   * 问题ID
   * @format int64
   */
  id: number;
  /**
   * 目标处理状态(2:已处理,3:已关闭)
   * @format int32
   */
  targetStatus: number;
}

export type JToken = JToken[];

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

/** 管线 */
export interface LightPipeLine {
  /** 载体 */
  carrier?: string | null;
  /**
   * 流向
   * @format int32
   */
  flowDirection?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * 终点纬度
   * @format double
   */
  latitudeE?: number;
  /**
   * 起点纬度
   * @format double
   */
  latitudeS?: number;
  /**
   * 管线长度
   * @format double
   */
  length?: number | null;
  /**
   * 终点经度
   * @format double
   */
  longitudeE?: number;
  /**
   * 起点经度
   * @format double
   */
  longitudeS?: number;
  /** 管线类型 */
  type?: string | null;
}

export interface LineByStartAndEndQO {
  /** 终点位号 */
  serialNumberE?: string | null;
  /** 起始点位 */
  serialNumberS?: string | null;
}

export interface LinesByEndPointQO {
  /** @minLength 1 */
  endPointSn: string;
}

export interface LogEntryVO {
  /** 日志时间 */
  createTime?: string | null;
  /** 部门名称 */
  department?: string | null;
  /** 操作描述 */
  description?: string | null;
  /**
   * 操作阶段代码
   * @format int32
   */
  phase?: number;
  /** 阶段描述 */
  phaseDesc?: string | null;
  /** 操作人 */
  updatedBy?: string | null;
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
  mapToken?: string | null;
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
  mapToken?: string | null;
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

export interface MonitorByOrganizationResult {
  /**
   * 监控可用数
   * @format int32
   */
  count?: number;
  /** 监控列表集合 */
  list?: MonitorInfo[] | null;
}

export interface MonitorDetailInfo {
  /**
   * 权限过期时间
   * @format date-time
   */
  authExpirationTime?: string;
  /** 设备编码 */
  deviceID?: string | null;
  /**
   * 是否故障0无故障（有流），1有故障（无流）
   * @format int32
   */
  faultedFlag?: number;
  /** 监控接入服务器主消息号(调流时使用) */
  groupId?: string | null;
  /** 视频监控HLS实时播放链接 */
  hlsUrl?: string | null;
  /**
   * 巡检次数
   * @format int32
   */
  inspectionCount?: number;
  /**
   * 巡检有视频流的次数
   * @format int32
   */
  inspectionSuccessCount?: number;
  /**
   * 最近一次巡检时间
   * @format date-time
   */
  inspectionTime?: string;
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
  /**
   * 监控编码格式 0.未知 1.H264 2.H265 3.SVAC
   * @format int32
   */
  mediaCode?: number;
  /**
   * 监控分辨率 0.未知 1.720 2.1080 3.2k 4.4k
   * @format int32
   */
  mediaDPI?: number;
  /**
   * 监控通道号(调流时使用)
   * @format int32
   */
  monitorId?: number;
  /** 监控名称 */
  monitorName?: string | null;
  /**
   * 监控状态0离线1在线
   * @format int32
   */
  monitorStatus?: number;
  /** 监控唯一标识 */
  pn?: string | null;
  /**
   * 是否支持云台0不支持1支持
   * @format int32
   */
  ptZ_Available?: number;
  /**
   * 0-未知；1-球机；2-半球；3-固定枪机；4-遥控枪机(1、4类型支持云台控制)
   * @format int32
   */
  ptzType?: number;
  /** 视频监控RTMP实时播放链接 */
  rtmpUrl?: string | null;
  /** 视频监控RTSP实时播放链接 */
  rtspUrl?: string | null;
  /**
   * 是否有录像0无录像1有录像
   * @format int32
   */
  saveStatus?: number;
  /** 缩略图Base64字符串，图片格式为jpg */
  thumbnail?: string | null;
}

export interface MonitorInfo {
  /** 区域编码 */
  areaCode?: string | null;
  /** 区域名称 */
  areaName?: string | null;
  /**
   * 权限过期时间
   * @format date-time
   */
  authExpirationTime?: string;
  /** 监控国标编码 */
  deviceId?: string | null;
  /**
   * 是否有故障，0无故障（有流） 1有故障(无流)
   * @format int32
   */
  faultedFlag?: number;
  /** 监控接入服务器主消息号(调流时使用) */
  groupId?: string | null;
  /** 视频监控HLS实时播放链接 */
  hlsUrl?: string | null;
  /**
   * 巡检次数
   * @format int32
   */
  inspectionCount?: number;
  /**
   * 巡检有视频流的次数
   * @format int32
   */
  inspectionSuccessCount?: number;
  /**
   * 最近一次巡检时间
   * @format date-time
   */
  inspectionTime?: string;
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
  /**
   * 监控编码格式 0.未知 1.H264 2.H265 3.SVAC
   * @format int32
   */
  mediaCode?: number;
  /**
   * 监控分辨率 0.未知 1.720 2.1080 3.2k 4.4k
   * @format int32
   */
  mediaDPI?: number;
  /** 监控描述 */
  monitorDigest?: string | null;
  /**
   * 监控通道号(调流时使用)
   * @format int32
   */
  monitorId?: number;
  /** 监控名称 */
  monitorName?: string | null;
  /**
   * 监控在线状态0离线 1在线
   * @format int32
   */
  monitorStauts?: number;
  /** MSE调流demo的服务器地址 */
  mseUrl?: string | null;
  /**
   * 平台ID
   * @format int32
   */
  platformId?: number;
  /**
   * 是否支持云台控制0不支持1支持
   * @format int32
   */
  ptZ_Available?: number;
  /**
   * 0-未知；1-球机；2-半球；3-固定枪机；4-遥控枪机(1、4类型支持云台控制)
   * @format int32
   */
  ptzType?: number;
  /** 视频监控RTMP实时播放链接 */
  rtmpUrl?: string | null;
  /** 视频监控RTSP实时播放链接 */
  rtspUrl?: string | null;
  /**
   * 是否支持录像0没有1有
   * @format int32
   */
  saveStatus?: number;
}

export interface NameCount {
  /**
   * 数量
   * @format int64
   */
  count?: number | null;
  /** 名称 */
  name?: string | null;
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

export interface OpenApiPageResultProcessInspectionCaseVO {
  /** @format int64 */
  current?: number;
  /** @format int64 */
  pages?: number;
  /** 响应数据 */
  records?: ProcessInspectionCaseVO[] | null;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  total?: number;
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

export interface OrganizationInfo {
  /** 行政区划编码，请求下级目录时作为parentCode参数 */
  area_code?: string | null;
  /**
   * 监控总数
   * @format int32
   */
  count?: number;
  /**
   * 监控故障数
   * @format int32
   */
  faultCount?: number;
  /**
   * 监控可用数(在线无故障)
   * @format int32
   */
  healthCount?: number;
  /** 行政区划名称 */
  name?: string | null;
  /**
   * 监控在线数
   * @format int32
   */
  onlineCount?: number;
  /** 父目录区域编码 */
  parent_code?: string | null;
  /**
   * 平台ID,请求下级目录时作为参数platformid，顶级传0
   * @format int32
   */
  platformID?: number;
}

export interface OrganizationListResult {
  /** 目录集合 */
  list?: OrganizationInfo[] | null;
  /**
   * 目录数量
   * @format int32
   */
  organizationCount?: number;
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

export interface PointStatisticVO {
  /** 统计项名称 */
  name?: string | null;
  /** 统计值 */
  value?: string | null;
}

export interface PrealarmCommunityInfoQO {
  /**
   * 管点编号
   * @minLength 1
   */
  code: string;
  /**
   * 开始时间
   * @format date-time
   */
  startTime: string;
}

export interface PrealarmCommunityInfoVO {
  /**
   * 小区面积
   * @format double
   */
  communityArea?: number | null;
  /**
   * 小区纬度
   * @format double
   */
  communityLatitude?: number | null;
  /**
   * 小区经度
   * @format double
   */
  communityLongitude?: number | null;
  /** 名字 */
  communityName?: string | null;
  /**
   * 距离
   * @format double
   */
  distance?: number;
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
  /** 管点编号 */
  serialNumber?: string | null;
  /**
   * 权重
   * @format double
   */
  weights?: number;
}

export interface PrealarmRecordFO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 报警值
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
   * 设备id
   * @format int64
   */
  equipmentId?: number | null;
  /** 设备名称 */
  equipmentName?: string | null;
  /**
   * 监测指标id
   * @format int64
   */
  equipmentParamId?: number | null;
  /** 监测指标名称 */
  equipmentParamName?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /** 预警级别 */
  level?: string | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /** 单位 */
  measureUnit?: string | null;
  /** 预警信息 */
  prealarmInfo?: string | null;
  /**
   * 关联预警规则
   * @format int64
   */
  prealarmRuleId?: number;
  prealarmRuleLevel?: string | null;
  /** @format int32 */
  prealarmRuleLevelIdx?: number | null;
  prealarmRuleName?: string | null;
  prealarmRuleType?: string | null;
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
  /** 点位名称 */
  technicsName?: string | null;
  /** 预警条件 */
  triggerCondition?: string | null;
  /** 预警类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 工单号 */
  workOrderNumber?: string | null;
}

export interface PrealarmRecordPQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 报警值
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
   * 设备id
   * @format int64
   */
  equipmentId?: number | null;
  /** 设备名称 */
  equipmentName?: string | null;
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
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /** 预警级别 */
  level?: string | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
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
  prealarmRuleLevel?: string | null;
  /** @format int32 */
  prealarmRuleLevelIdx?: number | null;
  prealarmRuleName?: string | null;
  prealarmRuleType?: string | null;
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
  /** 点位名称 */
  technicsName?: string | null;
  /** 预警条件 */
  triggerCondition?: string | null;
  /** 预警类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 工单号 */
  workOrderNumber?: string | null;
}

export interface PrealarmRecordQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 报警值
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
   * 设备id
   * @format int64
   */
  equipmentId?: number | null;
  /** 设备名称 */
  equipmentName?: string | null;
  /**
   * 监测指标id
   * @format int64
   */
  equipmentParamId?: number | null;
  /** 监测指标名称 */
  equipmentParamName?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /** 预警级别 */
  level?: string | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /** 单位 */
  measureUnit?: string | null;
  /** 预警信息 */
  prealarmInfo?: string | null;
  /**
   * 关联预警规则
   * @format int64
   */
  prealarmRuleId?: number;
  prealarmRuleLevel?: string | null;
  /** @format int32 */
  prealarmRuleLevelIdx?: number | null;
  prealarmRuleName?: string | null;
  prealarmRuleType?: string | null;
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
  /** 点位名称 */
  technicsName?: string | null;
  /** 预警条件 */
  triggerCondition?: string | null;
  /** 预警类型 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 工单号 */
  workOrderNumber?: string | null;
}

export interface PrealarmRecordVO {
  /** 管网类型 */
  carrier?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 报警值
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
   * 设备id
   * @format int64
   */
  equipmentId?: number | null;
  /** 设备名称 */
  equipmentName?: string | null;
  /**
   * 监测指标id
   * @format int64
   */
  equipmentParamId?: number | null;
  /** 监测指标名称 */
  equipmentParamName?: string | null;
  /** @format int64 */
  id?: number;
  /**
   * 纬度
   * @format double
   */
  latitude?: number | null;
  /** 预警级别 */
  level?: string | null;
  /**
   * 经度
   * @format double
   */
  longitude?: number | null;
  /** 单位 */
  measureUnit?: string | null;
  /** 监测类型 */
  monitorTypeName?: string | null;
  /** 预警信息 */
  prealarmInfo?: string | null;
  /**
   * 关联预警规则
   * @format int64
   */
  prealarmRuleId?: number;
  prealarmRuleLevel?: string | null;
  /** @format int32 */
  prealarmRuleLevelIdx?: number | null;
  prealarmRuleName?: string | null;
  prealarmRuleType?: string | null;
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
   * Desc:点位编号
   * Default:
   * Nullable:True
   */
  technicsCode?: string | null;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: number;
  /**
   * Desc:点位名称
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
  /** 井号 */
  wellCode?: string | null;
  /** 工单号 */
  workOrderNumber?: string | null;
}

export interface PrealarmRuleFO {
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
}

export interface ProcessEventPageQO {
  code?: string | null;
  createTimeQueryGe?: string | null;
  createTimeQueryLe?: string | null;
  /** @format int32 */
  page?: number | null;
  /** @format int32 */
  size?: number | null;
  status?: number[] | null;
}

export interface ProcessInspectionCaseAlarmVO {
  dangerLevel1?: string | null;
  dangerLevel1Name?: string | null;
  dangerLevel2?: string | null;
  dangerLevel2Name?: string | null;
  address?: string | null;
  /** @format date-time */
  alarmEndTime?: string | null;
  /** @format date-time */
  alarmStartTime?: string;
  alarmType?: string | null;
  billing?: string | null;
  /** @format int32 */
  bizline?: number | null;
  bizlineDesc?: string | null;
  carrier?: string | null;
  code?: string | null;
  comment?: string | null;
  createTime?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format double */
  dataValue?: number | null;
  description?: string | null;
  /** @format int64 */
  duration?: number | null;
  endTime?: string | null;
  /** @format int64 */
  equipmentId?: number | null;
  equipmentName?: string | null;
  /** @format int64 */
  equipmentParamId?: number | null;
  equipmentParamName?: string | null;
  files?: SystemFileVO[] | null;
  /** @format int32 */
  id?: number | null;
  lat?: string | null;
  /** @format double */
  latitude?: number | null;
  level?: string | null;
  lng?: string | null;
  /** @format double */
  longitude?: number | null;
  measureUnit?: string | null;
  name?: string | null;
  prealarmInfo?: string | null;
  /** @format int64 */
  prealarmRuleId?: number;
  prealarmRuleLevel?: string | null;
  /** @format int32 */
  prealarmRuleLevelIdx?: number | null;
  prealarmRuleName?: string | null;
  prealarmRuleType?: string | null;
  principal?: string | null;
  principalName?: string | null;
  /** @format double */
  radius?: number | null;
  /** @format int64 */
  recordId?: number;
  recordTechnicsName?: string | null;
  repairTaskCode?: string | null;
  reportLat?: string | null;
  reporter?: string | null;
  reporterName?: string | null;
  reporting?: string | null;
  /** @format int32 */
  sday?: number;
  /** @format int32 */
  shour?: number;
  simple?: boolean | null;
  /** @format int32 */
  smonth?: number;
  startTime?: string | null;
  /** @format int32 */
  status?: number | null;
  statusDesc?: string | null;
  /** @format int32 */
  syear?: number;
  taskCode?: string | null;
  taskStatusDesc?: string | null;
  technicsCode?: string | null;
  /** @format int64 */
  technicsId?: number;
  technicsName?: string | null;
  triggerCondition?: string | null;
  /** @format int32 */
  type?: number | null;
  typeDesc?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  workOrderNumber?: string | null;
  /** @format int32 */
  workStatus?: number | null;
  workStatusDesc?: string | null;
}

export interface ProcessInspectionCaseVO {
  /** 隐患大类 */
  dangerLevel1?: string | null;
  /** 隐患大类名称 */
  dangerLevel1Name?: string | null;
  /** 隐患小类 */
  dangerLevel2?: string | null;
  /** 隐患小类名称 */
  dangerLevel2Name?: string | null;
  /** 案件位置 */
  address?: string | null;
  /** 工单编号 */
  billing?: string | null;
  /**
   * 行业标识（BizLine枚举）
   * @format int32
   */
  bizline?: number | null;
  /** 行业标识描述 */
  bizlineDesc?: string | null;
  /** 管网类型 */
  carrier?: string | null;
  /** 案件编号 */
  code?: string | null;
  /** 处置建议 */
  comment?: string | null;
  /** 上报时间 */
  createTime?: string | null;
  /** 案件描述 */
  description?: string | null;
  /** 处置结束时间 */
  endTime?: string | null;
  /** 图片信息列表 */
  files?: SystemFileVO[] | null;
  /**
   * 主键
   * @format int32
   */
  id?: number | null;
  /** 点位纬度 */
  lat?: string | null;
  /** 点位经度 */
  lng?: string | null;
  /** 案件名称 */
  name?: string | null;
  /** 处置人 */
  principal?: string | null;
  /** 处置人姓名 */
  principalName?: string | null;
  /**
   * 上报区域半径，单位m
   * @format double
   */
  radius?: number | null;
  /** 维修工单编号 */
  repairTaskCode?: string | null;
  /** 上报纬度 */
  reportLat?: string | null;
  /** 上报人 */
  reporter?: string | null;
  /** 上报人姓名 */
  reporterName?: string | null;
  /** 上报经度 */
  reporting?: string | null;
  /** 是否简易处置（简易处置不生成工单） */
  simple?: boolean | null;
  /** 处置开始时间 */
  startTime?: string | null;
  /**
   * 案件状态（1待处置 2处置中 3已结案）
   * @format int32
   */
  status?: number | null;
  /** 案件状态描述 */
  statusDesc?: string | null;
  /** 所属任务编号 */
  taskCode?: string | null;
  /** 任务状态描述 */
  taskStatusDesc?: string | null;
  /** 设备编号 */
  technicsCode?: string | null;
  /** 设备名称 */
  technicsName?: string | null;
  /**
   * 案件类别（1一般 2紧急）
   * @format int32
   */
  type?: number | null;
  /** 案件类别描述 */
  typeDesc?: string | null;
  /**
   * 工单状态（1待执行 2执行中 3待审核 4已结束）
   * @format int32
   */
  workStatus?: number | null;
  /** 工单状态描述 */
  workStatusDesc?: string | null;
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

export interface RealTimeReportQO {
  /**
   * 监测点id
   * @format int64
   */
  technicsId?: number | null;
}

export interface RealTimeReportVO {
  /**
   * 氨氮
   * @format double
   */
  nh3n?: number | null;
  nh3nParam?: EquipmentParamVO;
  /**
   * Cod
   * @format double
   */
  cod?: number | null;
  codParam?: EquipmentParamVO;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
  /**
   * 瞬时流量
   * @format double
   */
  flowRate?: number | null;
  flowRateParam?: EquipmentParamVO;
  /**
   * 瞬时流速
   * @format double
   */
  instantaneousVelocity?: number | null;
  instantaneousVelocityParam?: EquipmentParamVO;
  /**
   * SS
   * @format double
   */
  ss?: number | null;
  ssParam?: EquipmentParamVO;
  /**
   * 监测点id
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称 */
  technicsName?: string | null;
  /**
   * 累计流量
   * @format double
   */
  totalFlow?: number | null;
  totalFlowParam?: EquipmentParamVO;
  /**
   * 液位
   * @format double
   */
  waterLevel?: number | null;
  waterLevelParam?: EquipmentParamVO;
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

/** 用户分页查询参数类 */
export interface RecordFilePQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 后缀名 */
  extname?: string | null;
  /** 排序字段 */
  field?: string | null;
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
   * 实体标识
   * @format int64
   */
  recordId?: number;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface RecordFileQO {
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

export interface RecordFileVO {
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

export interface RepairDetailVO {
  /** 创建时间（对应JSON字段：createTime） */
  createTime?: string | null;
  /** 处置描述（对应JSON字段：description） */
  description?: string | null;
  /** 设备名称（对应JSON字段：deviceName） */
  deviceName?: string | null;
  /** 附件文件列表（对应JSON字段：files） */
  files?: FileInfoVO[] | null;
  /**
   * 记录ID（对应JSON字段：id）
   * @format int32
   */
  id?: number;
  /**
   * 有效半径（单位：米，对应JSON字段：radius）
   * @format double
   */
  radius?: number;
  /** 上报纬度（对应JSON字段：reportLat） */
  reportLat?: string | null;
  /** 上报经度（对应JSON字段：reportLng） */
  reportLng?: string | null;
  /** 上报人账号（对应JSON字段：reporter） */
  reporter?: string | null;
  /** 上报人姓名（对应JSON字段：reporterName） */
  reporterName?: string | null;
  /** 关联任务编号（对应JSON字段：taskCode） */
  taskCode?: string | null;
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

export interface ReservoirInfo {
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
   * 平均泄流量（m³/s）
   * @format double
   */
  waterAvgDischarges?: number | null;
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
  /**
   * 最大泄流量（m³/s）
   * @format double
   */
  waterCouDischarges?: number | null;
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

export interface RtPrealarmRecordQO {
  /**
   * TechnicsId
   * @format int64
   */
  technicsId: number;
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
export interface SqlSugarPagedListBsAlarmPipeLineVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: BsAlarmPipeLineVO[] | null;
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
export interface SqlSugarPagedListBsCommunityVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: BsCommunityVO[] | null;
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
export interface SqlSugarPagedListBsCompanyVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: BsCompanyVO[] | null;
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
export interface SqlSugarPagedListBsOutletVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: BsOutletVO[] | null;
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
export interface SqlSugarPagedListBsPipeLineVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: BsPipeLineVO[] | null;
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
export interface SqlSugarPagedListBsPipePointAlarmParameterVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: BsPipePointAlarmParameterVO[] | null;
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
export interface SqlSugarPagedListBsPipePointAlarmRecordVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: BsPipePointAlarmRecordVO[] | null;
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
export interface SqlSugarPagedListBsPipePointVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: BsPipePointVO[] | null;
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
export interface SqlSugarPagedListBsPmcVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: BsPmcVO[] | null;
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
export interface SqlSugarPagedListBsPollutionPermitInfoVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: BsPollutionPermitInfoVO[] | null;
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
export interface SqlSugarPagedListBsZoneVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: BsZoneVO[] | null;
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
export interface SqlSugarPagedListInspectionIssueSeverityVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: InspectionIssueSeverityVO[] | null;
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
export interface SqlSugarPagedListInspectionIssueTypeVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: InspectionIssueTypeVO[] | null;
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
export interface SqlSugarPagedListInspectionIssueVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: InspectionIssueVO[] | null;
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
export interface SqlSugarPagedListInspectionTaskVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: InspectionTaskVO[] | null;
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
export interface SqlSugarPagedListRecordFileVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: RecordFileVO[] | null;
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
export interface SqlSugarPagedListTaskSourceVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: TaskSourceVO[] | null;
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

export type SystemFileVO = object;

export interface TaskDetailVO {
  /** 任务编号 */
  code?: string | null;
  /** 创建时间 */
  createTime?: string | null;
  /** 截止时间 */
  deadline?: string | null;
  /** 任务描述 */
  description?: string | null;
  /** 关联设备列表 */
  devices?: any[] | null;
  /**
   * 领域标识
   * @format int32
   */
  domain?: number;
  /** 结束时间 */
  endTime?: string | null;
  /**
   * 任务 ID
   * @format int32
   */
  id?: number;
  /** 操作日志记录 */
  logs?: LogEntryVO[] | null;
  /** 任务名称 */
  name?: string | null;
  /** 完成百分比 */
  percent?: string | null;
  /** 点位统计信息 */
  pointStatistics?: PointStatisticVO[] | null;
  /** 相关点位列表 */
  points?: any[] | null;
  /** 负责人账号 */
  principal?: string | null;
  /** 负责人姓名 */
  principalName?: string | null;
  /** 负责人电话 */
  principalPhone?: string | null;
  /**
   * 任务评分
   * @format double
   */
  score?: number;
  /** 开始时间 */
  startTime?: string | null;
  /**
   * 任务状态
   * @format int32
   */
  status?: number;
  /** 状态描述 */
  statusDesc?: string | null;
  /** 标签列表 */
  tags?: string[] | null;
  /**
   * 任务类型
   * @format int32
   */
  type?: number;
  /** 任务类型描述 */
  typeDesc?: string | null;
  /** 关联单位列表 */
  units?: any[] | null;
}

export interface TaskSourceFO {
  /**
   * 编码
   * @minLength 1
   */
  code: string;
  /** @format int64 */
  id?: number;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
}

export interface TaskSourcePQO {
  /** 编码 */
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
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface TaskSourceQO {
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
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 名称 */
  name?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface TaskSourceVO {
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
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 名称 */
  name?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface TechnicsFO {
  /** 地址 */
  address?: string | null;
  /** 载体 */
  carrier?: string | null;
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
  /** 监测方法 */
  monitorMethodCode?: string | null;
  /** 监测状态 */
  monitorState?: string | null;
  /** 监测类型编码 */
  monitorTypeCode?: string | null;
  /** 监测类型名称 */
  monitorTypeName?: string | null;
  /** 名称 */
  name?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 风险等级 */
  riskLevel?: string | null;
  /** 选择原因 */
  selectReason?: string | null;
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
  /** 地井编号 */
  wellCode?: string | null;
  /** 蚁情平台标识 */
  yiqingObjId?: string | null;
}

export interface TechnicsPQO {
  /** 地址 */
  address?: string | null;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /** 载体 */
  carrier?: string | null;
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
  /** 监测方法 */
  monitorMethodCode?: string | null;
  /** 监测状态 */
  monitorState?: string | null;
  /** 监测类型编码 */
  monitorTypeCode?: string | null;
  /** 监测类型名称 */
  monitorTypeName?: string | null;
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
  /** 风险等级 */
  riskLevel?: string | null;
  /** 选择原因 */
  selectReason?: string | null;
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
  /** 地井编号 */
  wellCode?: string | null;
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
  /** 载体 */
  carrier?: string | null;
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
  /** 监测方法 */
  monitorMethodCode?: string | null;
  /** 监测状态 */
  monitorState?: string | null;
  /** 监测类型编码 */
  monitorTypeCode?: string | null;
  /** 监测类型名称 */
  monitorTypeName?: string | null;
  /** 名称 */
  name?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 风险等级 */
  riskLevel?: string | null;
  /** 选择原因 */
  selectReason?: string | null;
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
  /** 地井编号 */
  wellCode?: string | null;
  /** 蚁情平台标识 */
  yiqingObjId?: string | null;
}

export interface TechnicsVO {
  /** 地址 */
  address?: string | null;
  /** 载体 */
  carrier?: string | null;
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
  /** 监测方法 */
  monitorMethodCode?: string | null;
  /** 监测状态 */
  monitorState?: string | null;
  /** 监测类型编码 */
  monitorTypeCode?: string | null;
  /** 监测类型名称 */
  monitorTypeName?: string | null;
  /** 名称 */
  name?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 风险等级 */
  riskLevel?: string | null;
  /** 选择原因 */
  selectReason?: string | null;
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
  /** 地井编号 */
  wellCode?: string | null;
  /** 蚁情平台标识 */
  yiqingObjId?: string | null;
}

export interface TimeAndIdQO {
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /** @format int64 */
  id?: number | null;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string | null;
}

/** 轨迹上报表单 */
export interface TrackReportFO {
  /**
   * 新增的坐标点数组JSON
   * @minLength 1
   */
  newPoints: string;
  /**
   * 巡查记录ID
   * @format int64
   */
  recordId: number;
}

export interface TreeNode {
  children?: TreeNode[] | null;
  /** @format int64 */
  id?: number;
  name?: string | null;
}

export interface TreeNodeKf {
  children?: TreeNodeKf[] | null;
  /** @format int64 */
  id?: number;
  name?: string | null;
  type?: string | null;
}

export interface TsLastPrealarmRecordQO {
  /** TechnicsIdList */
  technicsIdList?: number[] | null;
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
   * 最新降雨量。
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
   * 降雨量范围。
   * @format double
   */
  rainLevelRange?: number | null;
  /**
   * 最高降雨量。
   * @format double
   */
  rainMaxLevel?: number | null;
  /**
   * 最低降雨量。
   * @format double
   */
  rainMinLevel?: number | null;
  /** @format int64 */
  technicsId?: number;
  /** 水库名称。 */
  technicsName?: string | null;
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
   * 降雨量（mm）
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
