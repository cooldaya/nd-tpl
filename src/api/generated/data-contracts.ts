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

export type ApiBsCompanyAddPostData = FurionResultBsCompanyVO;

export type ApiBsCompanyEditPostData = FurionResultBsCompanyVO;

export type ApiBsCompanyListPostData = FurionResultListBsCompanyVO;

export type ApiBsCompanyPagedListPostData =
  FurionResultSqlSugarPagedListBsCompanyVO;

export type ApiBsCompanyRemoveMulPostData = FurionResultListInt64;

export type ApiBsCompanyRemovePostData = FurionResultInt64;

export type ApiBsCompanyShowPostData = FurionResultBsCompanyVO;

export type ApiBsEventLevelAddPostData = FurionResultBsEventLevelVO;

export type ApiBsEventLevelEditPostData = FurionResultBsEventLevelVO;

export type ApiBsEventLevelListPostData = FurionResultListBsEventLevelVO;

export type ApiBsEventLevelPagedListPostData =
  FurionResultSqlSugarPagedListBsEventLevelVO;

export type ApiBsEventLevelRemoveMulPostData = FurionResultListInt64;

export type ApiBsEventLevelRemovePostData = FurionResultInt64;

export type ApiBsEventLevelShowPostData = FurionResultBsEventLevelVO;

export type ApiBsEventTypeAddPostData = FurionResultBsEventTypeVO;

export type ApiBsEventTypeEditPostData = FurionResultBsEventTypeVO;

export type ApiBsEventTypeListPostData = FurionResultListBsEventTypeVO;

export type ApiBsEventTypePagedListPostData =
  FurionResultSqlSugarPagedListBsEventTypeVO;

export type ApiBsEventTypeRemoveMulPostData = FurionResultListInt64;

export type ApiBsEventTypeRemovePostData = FurionResultInt64;

export type ApiBsEventTypeShowPostData = FurionResultBsEventTypeVO;

export type ApiBsInformationAddPostData = FurionResultBsInformationVO;

export type ApiBsInformationEditPostData = FurionResultBsInformationVO;

export type ApiBsInformationListPostData = FurionResultListBsInformationVO;

export type ApiBsInformationPagedListPostData =
  FurionResultSqlSugarPagedListBsInformationVO;

export type ApiBsInformationRemoveMulPostData = FurionResultListInt64;

export type ApiBsInformationRemovePostData = FurionResultInt64;

export type ApiBsInformationShowPostData = FurionResultBsInformationVO;

export type ApiBsNewsAddPostData = FurionResultBsNewsVO;

export type ApiBsNewsEditPostData = FurionResultBsNewsVO;

export type ApiBsNewsListPostData = FurionResultListBsNewsVO;

export type ApiBsNewsPagedListPostData = FurionResultSqlSugarPagedListBsNewsVO;

export type ApiBsNewsRemoveMulPostData = FurionResultListInt64;

export type ApiBsNewsRemovePostData = FurionResultInt64;

export type ApiBsNewsShowPostData = FurionResultBsNewsVO;

export type ApiBsOutletCategoryAddPostData = FurionResultBsOutletCategoryVO;

export type ApiBsOutletCategoryEditPostData = FurionResultBsOutletCategoryVO;

export type ApiBsOutletCategoryListPostData =
  FurionResultListBsOutletCategoryVO;

export type ApiBsOutletCategoryPagedListPostData =
  FurionResultSqlSugarPagedListBsOutletCategoryVO;

export type ApiBsOutletCategoryRemoveMulPostData = FurionResultListInt64;

export type ApiBsOutletCategoryRemovePostData = FurionResultInt64;

export type ApiBsOutletCategoryShowPostData = FurionResultBsOutletCategoryVO;

export type ApiBsOutletTypeAddPostData = FurionResultBsOutletTypeVO;

export type ApiBsOutletTypeEditPostData = FurionResultBsOutletTypeVO;

export type ApiBsOutletTypeListPostData = FurionResultListBsOutletTypeVO;

export type ApiBsOutletTypePagedListPostData =
  FurionResultSqlSugarPagedListBsOutletTypeVO;

export type ApiBsOutletTypeRemoveMulPostData = FurionResultListInt64;

export type ApiBsOutletTypeRemovePostData = FurionResultInt64;

export type ApiBsOutletTypeShowPostData = FurionResultBsOutletTypeVO;

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

export type ApiBsRiverAddPostData = FurionResultBsRiverVO;

export type ApiBsRiverEditPostData = FurionResultBsRiverVO;

export type ApiBsRiverListPostData = FurionResultListBsRiverVO;

export type ApiBsRiverPagedListPostData =
  FurionResultSqlSugarPagedListBsRiverVO;

export type ApiBsRiverRemoveMulPostData = FurionResultListInt64;

export type ApiBsRiverRemovePostData = FurionResultInt64;

export type ApiBsRiverShowPostData = FurionResultBsRiverVO;

export type ApiBsVillageAddPostData = FurionResultBsVillageVO;

export type ApiBsVillageEditPostData = FurionResultBsVillageVO;

export type ApiBsVillageListPostData = FurionResultListBsVillageVO;

export type ApiBsVillagePagedListPostData =
  FurionResultSqlSugarPagedListBsVillageVO;

export type ApiBsVillageRemoveMulPostData = FurionResultListInt64;

export type ApiBsVillageRemovePostData = FurionResultInt64;

export type ApiBsVillageShowPostData = FurionResultBsVillageVO;

export type ApiCommonFileDownloadGetData = any;

export interface ApiCommonFileDownloadGetParams {
  filename?: string;
  filepath?: string;
}

export type ApiCommonGenIdPostData = FurionResultInt64;

export type ApiCommonGenIdsPostData = FurionResultListInt64;

export type ApiCommonGetEnumsPostData = FurionResultListEnumGroupDto;

export type ApiCommonGetFilesPostData = FurionResultListRecordFile;

export type ApiCommonRemoveFilePostData = FurionResultString;

export type ApiCommonUploadFilePostData = FurionResultRecordFile;

export interface ApiCommonUploadFilePostPayload {
  /**
   * 文件
   * @format binary
   */
  File?: File;
  /**
   * 文件id
   * @format int64
   */
  Id?: number;
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

export type ApiEquipmentAddPostData = FurionResultEquipmentVO;

export type ApiEquipmentEditPostData = FurionResultEquipmentVO;

export type ApiEquipmentListPostData = FurionResultListEquipmentVO;

export type ApiEquipmentOnlineInfoPostData = FurionResultOnlineInfoVO;

export type ApiEquipmentPagedListPostData =
  FurionResultSqlSugarPagedListEquipmentVO;

export type ApiEquipmentParamAddPostData = FurionResultEquipmentParamVO;

export type ApiEquipmentParamDailyRateListPostData =
  FurionResultListEquipmentParamDailyRateVO;

export type ApiEquipmentParamDailyRatePagedListPostData =
  FurionResultSqlSugarPagedListEquipmentParamDailyRateVO;

export type ApiEquipmentParamDailyRateRecalcPostData = FurionResultInt32;

export type ApiEquipmentParamDailyRateShowPostData =
  FurionResultEquipmentParamDailyRateVO;

export type ApiEquipmentParamDailyRateStByParamPostData =
  FurionResultListDataTransferRateVO;

export type ApiEquipmentParamDailyRateStByTechnicsPostData =
  FurionResultListDataTransferRateByTechnicesVO;

export type ApiEquipmentParamDdAddPostData = FurionResultEquipmentParamDd;

export type ApiEquipmentParamDdBatchExportExcelPostData =
  FurionResultIActionResult;

export type ApiEquipmentParamDdEditFlagPostData = FurionResultBoolean;

export type ApiEquipmentParamDdExportExcelPostData = FurionResultIActionResult;

export type ApiEquipmentParamDdFixDataPostData = FurionResultMtDataFixLog;

export type ApiEquipmentParamDdGroupByDayAndFactorPostData =
  FurionResultListEpStDataStVO;

export type ApiEquipmentParamDdGroupByMonthAndFactorPostData =
  FurionResultListEpStDataStVO;

export type ApiEquipmentParamDdGroupByYearAndFactorPostData =
  FurionResultListEpStDataStVO;

export type ApiEquipmentParamDdListPostData =
  FurionResultListEquipmentParamDdVO;

export type ApiEquipmentParamDdPagedListPostData =
  FurionResultSqlSugarPagedListEquipmentParamDdVO;

export type ApiEquipmentParamDdShowPostData = FurionResultEquipmentParamDdVO;

export type ApiEquipmentParamEditPostData = FurionResultEquipmentParamVO;

export type ApiEquipmentParamEpnListPostData = FurionResultListString;

export type ApiEquipmentParamHdAddPostData = FurionResultEquipmentParamHd;

export type ApiEquipmentParamHdBatchExportExcelPostData =
  FurionResultIActionResult;

export type ApiEquipmentParamHdEditFlagPostData = FurionResultBoolean;

export type ApiEquipmentParamHdExportExcelPostData = FurionResultIActionResult;

export type ApiEquipmentParamHdFixDataPostData = FurionResultMtDataFixLog;

export type ApiEquipmentParamHdGroupByHourAndFactorPostData =
  FurionResultListEpStDataStVO;

export type ApiEquipmentParamHdListPostData =
  FurionResultListEquipmentParamHdVO;

export type ApiEquipmentParamHdPagedListPostData =
  FurionResultSqlSugarPagedListEquipmentParamHdVO;

export type ApiEquipmentParamHdShowPostData = FurionResultEquipmentParamHdVO;

export type ApiEquipmentParamInfoAddPostData = FurionResultEquipmentParamInfoVO;

export type ApiEquipmentParamInfoEditPostData =
  FurionResultEquipmentParamInfoVO;

export type ApiEquipmentParamInfoListPostData =
  FurionResultListEquipmentParamInfoVO;

export type ApiEquipmentParamInfoPagedListPostData =
  FurionResultSqlSugarPagedListEquipmentParamInfoVO;

export type ApiEquipmentParamInfoRemoveMulPostData = FurionResultListInt64;

export type ApiEquipmentParamInfoRemovePostData = FurionResultInt64;

export type ApiEquipmentParamInfoShowPostData =
  FurionResultEquipmentParamInfoVO;

export type ApiEquipmentParamListPostData = FurionResultListEquipmentParamVO;

export type ApiEquipmentParamMdAddPostData = FurionResultEquipmentParamMd;

export type ApiEquipmentParamMdEditFlagPostData = FurionResultBoolean;

export type ApiEquipmentParamMdFixDataPostData = FurionResultMtDataFixLog;

export type ApiEquipmentParamMdListPostData =
  FurionResultListEquipmentParamMdVO;

export type ApiEquipmentParamMdPagedListPostData =
  FurionResultSqlSugarPagedListEquipmentParamMdVO;

export type ApiEquipmentParamMdShowPostData = FurionResultEquipmentParamMdVO;

export type ApiEquipmentParamPagedListPostData =
  FurionResultSqlSugarPagedListEquipmentParamVO;

export type ApiEquipmentParamRdAddPostData = FurionResultEquipmentParamRd;

export type ApiEquipmentParamRdEditFlagPostData = FurionResultBoolean;

export type ApiEquipmentParamRdFixDataPostData = FurionResultMtDataFixLog;

export type ApiEquipmentParamRdListPostData =
  FurionResultListEquipmentParamRdVO;

export type ApiEquipmentParamRdPagedListPostData =
  FurionResultSqlSugarPagedListEquipmentParamRdVO;

export type ApiEquipmentParamRdShowPostData = FurionResultEquipmentParamRdVO;

export type ApiEquipmentParamRealTimeReportPostData =
  FurionResultListRealTimeReportVO;

export type ApiEquipmentParamRemovePostData = FurionResultInt64;

export type ApiEquipmentParamShowPostData = FurionResultEquipmentParamVO;

export type ApiEquipmentParamStopPeriodAddPostData =
  FurionResultEquipmentParamStopPeriodVO;

export type ApiEquipmentParamStopPeriodEditPostData =
  FurionResultEquipmentParamStopPeriodVO;

export type ApiEquipmentParamStopPeriodListPostData =
  FurionResultListEquipmentParamStopPeriodVO;

export type ApiEquipmentParamStopPeriodPagedListPostData =
  FurionResultSqlSugarPagedListEquipmentParamStopPeriodVO;

export type ApiEquipmentParamStopPeriodRemoveMulPostData =
  FurionResultListInt64;

export type ApiEquipmentParamStopPeriodRemovePostData = FurionResultInt64;

export type ApiEquipmentParamStopPeriodShowPostData =
  FurionResultEquipmentParamStopPeriodVO;

export type ApiEquipmentRemovePostData = FurionResultInt64;

export type ApiEquipmentShowPostData = FurionResultEquipmentVO;

export type ApiEquipmentStateStPostData = FurionResultStateStVO;

export type ApiHikHikControllingPostData = FurionResultString;

export type ApiHikNmsCameraOnlinePostData = FurionResultNmsCameraOnlineResData;

export type ApiHikPlaybackHlsUrlPostData = FurionResultString;

export type ApiHikPlaybackUrlPostData = FurionResultString;

export type ApiHikPreviewUrlPostData = FurionResultString;

export type ApiHjCommandRecordCp3012PostData = FurionResultHjCommandRecordVO;

export type ApiHjCommandRecordListPostData = FurionResultListHjCommandRecordVO;

export type ApiHjCommandRecordPagedListPostData =
  FurionResultSqlSugarPagedListHjCommandRecordVO;

export type ApiHjCommandRecordRemovePostData = FurionResultInt64;

export type ApiHjCommandRecordShowPostData = FurionResultHjCommandRecordVO;

export type ApiHjCommandRecordUnlockPostData = FurionResultHjCommandRecordVO;

export type ApiHjmessageLogListPostData = FurionResultListHjmessageLogVO;

export type ApiHjmessageLogPagedListPostData =
  FurionResultSqlSugarPagedListHjmessageLogVO;

export type ApiHjmessageLogShowPostData = FurionResultHjmessageLogVO;

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

export type ApiMsgnoticeAddPostData = FurionResultMsgnoticeVO;

export type ApiMsgnoticeEditPostData = FurionResultMsgnoticeVO;

export type ApiMsgnoticeListPostData = FurionResultListMsgnoticeVO;

export type ApiMsgnoticePagedListPostData =
  FurionResultSqlSugarPagedListMsgnoticeVO;

export type ApiMsgnoticeRemoveMulPostData = FurionResultListInt64;

export type ApiMsgnoticeRemovePostData = FurionResultInt64;

export type ApiMsgnoticeShowPostData = FurionResultMsgnoticeVO;

export type ApiMtDataFixLogAddPostData = FurionResultMtDataFixLogVO;

export type ApiMtDataFixLogEditPostData = FurionResultMtDataFixLogVO;

export type ApiMtDataFixLogListPostData = FurionResultListMtDataFixLogVO;

export type ApiMtDataFixLogPagedListPostData =
  FurionResultSqlSugarPagedListMtDataFixLogVO;

export type ApiMtDataFixLogRemoveMulPostData = FurionResultListInt64;

export type ApiMtDataFixLogRemovePostData = FurionResultInt64;

export type ApiMtDataFixLogShowPostData = FurionResultMtDataFixLogVO;

export type ApiMtEditFlagLogAddPostData = FurionResultMtEditFlagLogVO;

export type ApiMtEditFlagLogEditPostData = FurionResultMtEditFlagLogVO;

export type ApiMtEditFlagLogListPostData = FurionResultListMtEditFlagLogVO;

export type ApiMtEditFlagLogPagedListPostData =
  FurionResultSqlSugarPagedListMtEditFlagLogVO;

export type ApiMtEditFlagLogRemoveMulPostData = FurionResultListInt64;

export type ApiMtEditFlagLogRemovePostData = FurionResultInt64;

export type ApiMtEditFlagLogShowPostData = FurionResultMtEditFlagLogVO;

export type ApiOrganizationAddPostData = FurionResultOrganizationVO;

export type ApiOrganizationEditPostData = FurionResultOrganizationVO;

export type ApiOrganizationListPostData = FurionResultListOrganizationVO;

export type ApiOrganizationPagedListPostData =
  FurionResultSqlSugarPagedListOrganizationVO;

export type ApiOrganizationRemovePostData = FurionResultListInt64;

export type ApiOrganizationShowPostData = FurionResultOrganizationVO;

export type ApiOrganizationTreedataPostData = FurionResultListTreeNode;

export type ApiOutfallEventHandleGetByEventPostData =
  FurionResultListOutfallEventHandleVO;

export type ApiOutfallEventHandleListPostData =
  FurionResultListOutfallEventHandleVO;

export type ApiOutfallEventHandlePagedListPostData =
  FurionResultSqlSugarPagedListOutfallEventHandleVO;

export type ApiOutfallEventHandleRemovePostData = FurionResultInt64;

export type ApiOutfallEventHandleShowPostData =
  FurionResultOutfallEventHandleVO;

export type ApiOutfallEventInfoAddPostData = FurionResultOutfallEventInfoVO;

export type ApiOutfallEventInfoAuditHandlePostData =
  FurionResultOutfallEventInfoVO;

export type ApiOutfallEventInfoAuditPostData = FurionResultOutfallEventInfoVO;

export type ApiOutfallEventInfoCountPostData = FurionResultInt64;

export type ApiOutfallEventInfoDetailPostData = FurionResultOutfallEventInfoVO;

export type ApiOutfallEventInfoDispatchPostData =
  FurionResultOutfallEventInfoVO;

export type ApiOutfallEventInfoFromPrealarmPostData =
  FurionResultOutfallEventInfoVO;

export type ApiOutfallEventInfoHandlePostData = FurionResultOutfallEventInfoVO;

export type ApiOutfallEventInfoListPostData =
  FurionResultListOutfallEventInfoVO;

export type ApiOutfallEventInfoPagedListPostData =
  FurionResultSqlSugarPagedListOutfallEventInfoVO;

export type ApiOutfallEventInfoRemovePostData = FurionResultInt64;

export type ApiOutfallEventInfoShowPostData = FurionResultOutfallEventInfoVO;

export type ApiOutfallEventInfoStByOutfallPostData = FurionResultListCommonStVO;

export type ApiOutfallEventInfoStByStatusPostData = FurionResultListCommonStVO;

export type ApiOutfallEventInfoStByTypePostData = FurionResultListCommonStVO;

export type ApiOutfallInspectionPlanAddPostData =
  FurionResultOutfallInspectionPlanVO;

export type ApiOutfallInspectionPlanChangeStatusPostData =
  FurionResultOutfallInspectionPlanVO;

export type ApiOutfallInspectionPlanEditPostData =
  FurionResultOutfallInspectionPlanVO;

export type ApiOutfallInspectionPlanGenerateTaskPostData = FurionResultInt32;

export type ApiOutfallInspectionPlanListPostData =
  FurionResultListOutfallInspectionPlanVO;

export type ApiOutfallInspectionPlanPagedListPostData =
  FurionResultSqlSugarPagedListOutfallInspectionPlanVO;

export type ApiOutfallInspectionPlanRemovePostData = FurionResultInt64;

export type ApiOutfallInspectionPlanShowPostData =
  FurionResultOutfallInspectionPlanVO;

export type ApiOutfallInspectionPlanStByStatusPostData =
  FurionResultListCommonStVO;

export type ApiOutfallInspectionRecordAddPostData =
  FurionResultOutfallInspectionRecordVO;

export type ApiOutfallInspectionRecordCheckOutPostData =
  FurionResultOutfallInspectionRecordVO;

export type ApiOutfallInspectionRecordDetailPostData =
  FurionResultOutfallInspectionRecordVO;

export type ApiOutfallInspectionRecordListPostData =
  FurionResultListOutfallInspectionRecordVO;

export type ApiOutfallInspectionRecordPagedListPostData =
  FurionResultSqlSugarPagedListOutfallInspectionRecordVO;

export type ApiOutfallInspectionRecordRemovePostData = FurionResultInt64;

export type ApiOutfallInspectionRecordShowPostData =
  FurionResultOutfallInspectionRecordVO;

export type ApiOutfallInspectionRecordStByAbnormalPostData =
  FurionResultListCommonStVO;

export type ApiOutfallInspectionRecordStByPersonPostData =
  FurionResultListCommonStVO;

export type ApiOutfallInspectionTaskAddPostData =
  FurionResultOutfallInspectionTaskVO;

export type ApiOutfallInspectionTaskCancelPostData =
  FurionResultOutfallInspectionTaskVO;

export type ApiOutfallInspectionTaskEditPostData =
  FurionResultOutfallInspectionTaskVO;

export type ApiOutfallInspectionTaskFinishPostData =
  FurionResultOutfallInspectionTaskVO;

export type ApiOutfallInspectionTaskGenerateTaskPostData = FurionResultInt32;

export type ApiOutfallInspectionTaskListPostData =
  FurionResultListOutfallInspectionTaskVO;

export type ApiOutfallInspectionTaskPagedListPostData =
  FurionResultSqlSugarPagedListOutfallInspectionTaskVO;

export type ApiOutfallInspectionTaskRemovePostData = FurionResultInt64;

export type ApiOutfallInspectionTaskShowPostData =
  FurionResultOutfallInspectionTaskVO;

export type ApiOutfallInspectionTaskStByOutfallPostData =
  FurionResultListCommonStVO;

export type ApiOutfallInspectionTaskStByStatusPostData =
  FurionResultListCommonStVO;

export type ApiOutfallInspectionTaskStartPostData =
  FurionResultOutfallInspectionTaskVO;

export type ApiOutfallInspectionTrackAddPostData =
  FurionResultOutfallInspectionTrackVO;

export type ApiOutfallInspectionTrackGetByRecordPostData =
  FurionResultListOutfallInspectionTrackVO;

export type ApiOutfallInspectionTrackListPostData =
  FurionResultListOutfallInspectionTrackVO;

export type ApiOutfallInspectionTrackPagedListPostData =
  FurionResultSqlSugarPagedListOutfallInspectionTrackVO;

export type ApiOutfallInspectionTrackRemovePostData = FurionResultInt64;

export type ApiOutfallInspectionTrackShowPostData =
  FurionResultOutfallInspectionTrackVO;

export type ApiOutfallInspectionTrackUploadTracksPostData =
  FurionResultListInt64;

export type ApiPrealarmRecordAddPostData = FurionResultPrealarmRecordVO;

export type ApiPrealarmRecordAppPushPostData = FurionResultString;

export type ApiPrealarmRecordEditPostData = FurionResultPrealarmRecordVO;

export type ApiPrealarmRecordGroupByDayPostData = FurionResultListPrealarmStVO;

export type ApiPrealarmRecordGroupByMonthPostData =
  FurionResultListPrealarmStVO;

export type ApiPrealarmRecordGroupByOutfallPostData =
  FurionResultListPrealarmStVO;

export type ApiPrealarmRecordGroupByYearPostData = FurionResultListPrealarmStVO;

export type ApiPrealarmRecordPagedListPostData =
  FurionResultSqlSugarPagedListPrealarmRecordVO;

export type ApiPrealarmRecordRemoveMulPostData = FurionResultListInt64;

export type ApiPrealarmRecordRemovePostData = FurionResultInt64;

export type ApiPrealarmRecordShowOnePostData = FurionResultPrealarmRecordVO;

export type ApiPrealarmRecordWhitePagedListPostData =
  FurionResultSqlSugarPagedListPrealarmRecordVO;

export type ApiPrealarmRecordWhitelistPostData =
  FurionResultListPrealarmRecordVO;

export type ApiPrealarmRuleEditMulByEpnPostData = FurionResultInt32;

export type ApiPrealarmRuleEditMulPostData = any;

export type ApiPrealarmRuleGetByTechnicsPostData =
  FurionResultListPrealarmRuleVO;

export type ApiRecordFileListPostData = FurionResultListRecordFileVO;

export type ApiRecordFilePagedListPostData =
  FurionResultSqlSugarPagedListRecordFileVO;

export type ApiRecordFileRemoveMulPostData = FurionResultListInt64;

export type ApiRecordFileRemovePostData = FurionResultInt64;

export type ApiRecordFileShowPostData = FurionResultRecordFileVO;

export type ApiReservoirRpAddPostData = FurionResultReservoirRpVO;

export type ApiReservoirRpEditPostData = FurionResultReservoirRpVO;

export type ApiReservoirRpListPostData = FurionResultListReservoirRpVO;

export type ApiReservoirRpPagedListPostData =
  FurionResultSqlSugarPagedListReservoirRpVO;

export type ApiReservoirRpRemoveMulPostData = FurionResultListInt64;

export type ApiReservoirRpRemovePostData = FurionResultInt64;

export type ApiReservoirRpShowPostData = FurionResultReservoirRpVO;

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

export type ApiRiverSewageOutfallAddPostData = FurionResultRiverSewageOutfallVO;

export type ApiRiverSewageOutfallDptopstPostData = FurionResultListLabelValue;

export type ApiRiverSewageOutfallEditPostData =
  FurionResultRiverSewageOutfallVO;

export type ApiRiverSewageOutfallListPostData =
  FurionResultListRiverSewageOutfallVO;

export type ApiRiverSewageOutfallMapListPostData = FurionResultListOutfallMapVO;

export type ApiRiverSewageOutfallMpstPostData = FurionResultMpstVO;

export type ApiRiverSewageOutfallPagedListPostData =
  FurionResultSqlSugarPagedListRiverSewageOutfallVO;

export type ApiRiverSewageOutfallRemovePostData = FurionResultInt64;

export type ApiRiverSewageOutfallShowPostData =
  FurionResultRiverSewageOutfallVO;

export type ApiRiverSewageOutfallStbyCategoryPostData =
  FurionResultListCommonStVO;

export type ApiRiverSewageOutfallStbyRiverPostData = FurionResultListCommonStVO;

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

export type ApiTechnicsGetRecordFilesPostData = FurionResultListRecordFileVO;

export type ApiTechnicsListPostData = FurionResultListTechnicsVO;

export type ApiTechnicsPagedListPostData =
  FurionResultSqlSugarPagedListTechnicsVO;

export type ApiTechnicsRemovePostData = FurionResultInt64;

export type ApiTechnicsShowPostData = FurionResultTechnicsVO;

export type ApiUserAddPostData = FurionResultUserVO;

export type ApiUserAssignOutfallPostData = any;

export type ApiUserAssignRolesPostData = any;

export type ApiUserAssignUsergroupsPostData = any;

export type ApiUserEditPostData = FurionResultUserVO;

export type ApiUserEditPwdPostData = any;

export type ApiUserEditSelfPostData = FurionResultUserVO;

export type ApiUserGetOutfallPostData = FurionResultListRiverSewageOutfallVO;

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

export interface BsCompanyFO {
  /**
   * 编码(统一社会信用代码)
   * @minLength 1
   */
  code: string;
  /** 生产状态（生产，限产，停产） */
  companyStateCode?: string | null;
  contactPerson?: string | null;
  contactPhone?: string | null;
  /**
   * 到期时间
   * @format date-time
   */
  expireTime?: string | null;
  /** @format int64 */
  id?: number | null;
  /** 是否为污水处理厂 */
  isWsclc?: boolean | null;
  /** @format double */
  latitude?: number | null;
  /** 法定代表人 */
  legalRepresentative?: string | null;
  /** @format double */
  longitude?: number | null;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /**
   * 投产时间
   * @format date-time
   */
  operateTime?: string | null;
  /** 生产经营地址 */
  operatorAddress?: string | null;
  /** @format int32 */
  orderNumber?: number | null;
  /** 注册地址 */
  registerAddress?: string | null;
  /**
   * 注册时间
   * @format date-time
   */
  registerTime?: string | null;
  remark?: string | null;
  showInMap?: boolean | null;
  /** 企业类型（营业执照） */
  type?: string | null;
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
  /** 是否为污水处理厂 */
  isWsclc?: boolean | null;
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
  /** 注册地址 */
  registerAddress?: string | null;
  /**
   * 注册时间
   * @format date-time
   */
  registerTime?: string | null;
  remark?: string | null;
  showInMap?: boolean | null;
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
  /** 是否为污水处理厂 */
  isWsclc?: boolean | null;
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
  orderNumber?: number | null;
  /** 注册地址 */
  registerAddress?: string | null;
  /**
   * 注册时间
   * @format date-time
   */
  registerTime?: string | null;
  remark?: string | null;
  showInMap?: boolean | null;
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
  /** 是否为污水处理厂 */
  isWsclc?: boolean | null;
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
  orderNumber?: number | null;
  /** 注册地址 */
  registerAddress?: string | null;
  /**
   * 注册时间
   * @format date-time
   */
  registerTime?: string | null;
  remark?: string | null;
  showInMap?: boolean | null;
  /** 企业类型（营业执照） */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

/** 事件级别新增/编辑传入参数 */
export interface BsEventLevelFO {
  /**
   * 编码
   * @minLength 1
   */
  code: string;
  /** 标识颜色 */
  color?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /**
   * 处理时限(小时)
   * @format int32
   */
  limitHour?: number | null;
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

export interface BsEventLevelPQO {
  /** 编码 */
  code?: string | null;
  /** 标识颜色 */
  color?: string | null;
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
  /**
   * 处理时限(小时)
   * @format int32
   */
  limitHour?: number | null;
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
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 事件级别查询对象 */
export interface BsEventLevelQO {
  /** 编码 */
  code?: string | null;
  /** 标识颜色 */
  color?: string | null;
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
  /**
   * 处理时限(小时)
   * @format int32
   */
  limitHour?: number | null;
  /** 名称 */
  name?: string | null;
  /**
   * 序号
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

/** 事件级别输出对象 */
export interface BsEventLevelVO {
  /** 编码 */
  code?: string | null;
  /** 标识颜色 */
  color?: string | null;
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
  /**
   * 处理时限(小时)
   * @format int32
   */
  limitHour?: number | null;
  /** 名称 */
  name?: string | null;
  /**
   * 序号
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

/** 事件类型新增/编辑传入参数 */
export interface BsEventTypeFO {
  /**
   * 编码
   * @minLength 1
   */
  code: string;
  /** 标识颜色 */
  color?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number | null;
  /** 是否启用 */
  isEnable?: boolean | null;
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

export interface BsEventTypePQO {
  /** 编码 */
  code?: string | null;
  /** 标识颜色 */
  color?: string | null;
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
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 事件类型查询对象 */
export interface BsEventTypeQO {
  /** 编码 */
  code?: string | null;
  /** 标识颜色 */
  color?: string | null;
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
  /** 名称 */
  name?: string | null;
  /**
   * 序号
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

/** 事件类型输出对象 */
export interface BsEventTypeVO {
  /** 编码 */
  code?: string | null;
  /** 标识颜色 */
  color?: string | null;
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
  /** 名称 */
  name?: string | null;
  /**
   * 序号
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

export interface BsInformationFO {
  /** 内容 */
  content?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 是否有附件 */
  haveAttachment?: boolean;
  /** @format int64 */
  id?: number;
  /** 标题 */
  title?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsInformationPQO {
  /** 内容 */
  content?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** 是否有附件 */
  haveAttachment?: boolean;
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

export interface BsInformationQO {
  /** 内容 */
  content?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 是否有附件 */
  haveAttachment?: boolean;
  /** @format int64 */
  id?: number;
  /** 标题 */
  title?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsInformationVO {
  /** 内容 */
  content?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 是否有附件 */
  haveAttachment?: boolean;
  /** @format int64 */
  id?: number;
  /** 标题 */
  title?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsNewsFO {
  /** 内容 */
  content?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 是否有附件 */
  haveAttachment?: boolean;
  /** @format int64 */
  id?: number;
  /** 标题 */
  title?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsNewsPQO {
  /** 内容 */
  content?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** 是否有附件 */
  haveAttachment?: boolean;
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

export interface BsNewsQO {
  /** 内容 */
  content?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 是否有附件 */
  haveAttachment?: boolean;
  /** @format int64 */
  id?: number;
  /** 标题 */
  title?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsNewsVO {
  /** 内容 */
  content?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 是否有附件 */
  haveAttachment?: boolean;
  /** @format int64 */
  id?: number;
  /** 标题 */
  title?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsOutletCategoryFO {
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

export interface BsOutletCategoryPQO {
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

export interface BsOutletCategoryQO {
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

export interface BsOutletCategoryVO {
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

export interface BsOutletTypeFO {
  /**
   * 排口类别
   * @minLength 1
   */
  categoryCode: string;
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

export interface BsOutletTypePQO {
  /** 排口类别 */
  categoryCode?: string | null;
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

export interface BsOutletTypeQO {
  /** 排口类别 */
  categoryCode?: string | null;
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

export interface BsOutletTypeVO {
  /** 排口类别 */
  categoryCode?: string | null;
  /** 所属类别名称 */
  categoryName?: string | null;
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

export interface BsRiverFO {
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
  /** 所属流域 */
  watershed?: string | null;
}

export interface BsRiverPQO {
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
  /** 所属流域 */
  watershed?: string | null;
}

export interface BsRiverQO {
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
  /** 所属流域 */
  watershed?: string | null;
}

export interface BsRiverVO {
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
  /** 所属流域 */
  watershed?: string | null;
}

export interface BsVillageFO {
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
  /** 备注 */
  remark?: string | null;
}

export interface BsVillagePQO {
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
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsVillageQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface BsVillageVO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: string | null;
  /** 备注 */
  remark?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface CommonStVO {
  code?: string | null;
  /** @format int64 */
  count?: number;
  /** @format int64 */
  id?: number | null;
  name?: string | null;
}

export interface Cp3012FO {
  /**
   * 监测因子ID，一次请求针对一个因子
   * @format int64
   */
  equipmentParamId: number;
}

export interface CpUnlockFO {
  /**
   * 设备MN
   * @minLength 1
   */
  mn: string;
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

export interface DataTransferRateByTechnicesVO {
  /**
   * 数据有效率
   * @format double
   */
  dataEfficient?: number;
  /**
   * 数据传输率
   * @format double
   */
  dataTransferRate?: number;
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
   * 点位id
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
  /** 点位名称 */
  name?: string | null;
  /**
   * 实收数
   * @format int32
   */
  receiveCount?: number | null;
  /**
   * 应收数
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
  /** 因子id */
  code?: string | null;
  /**
   * 数据有效率
   * @format double
   */
  dataEfficient?: number;
  /**
   * 数据传输率
   * @format double
   */
  dataTransferRate?: number;
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
  /** 因子名称 */
  name?: string | null;
  /**
   * 实收数
   * @format int32
   */
  receiveCount?: number | null;
  /**
   * 应收数
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

export interface EditFlagFO {
  /**
   * 数据时间
   * @format date-time
   */
  dataTime: string;
  /**
   * Id
   * @format int64
   */
  id: number;
  /** 是否有效 */
  isEffective: boolean;
}

export interface EnumGroupDto {
  enumName?: string | null;
  items?: EnumItemDto[] | null;
}

export interface EnumItemDto {
  description?: string | null;
  name?: string | null;
  value?: any;
}

/** 历史数据统计表 */
export interface EpStDataStVO {
  /**
   * 总量
   * @format int32
   */
  count?: number;
  /** 数据时间 */
  dataTime?: string | null;
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
  equipmentParamId?: number | null;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /**
   * Iqi水质等级
   * @format int32
   */
  iqi?: number | null;
  /**
   * 排口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 排口名称 */
  riverSewageOutfallName?: string | null;
  /**
   * 监测点id
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称 */
  technicsName?: string | null;
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

export interface EpdStQO {
  /**
   * 结束时间
   * @format date-time
   */
  dataTimeEt: string;
  /**
   * 开始时间
   * @format date-time
   */
  dataTimeSt: string;
  /**
   * 设备id
   * @format int64
   */
  equipmentId?: number | null;
  /**
   * 监测因子id
   * @format int64
   */
  equipmentParamId?: number | null;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /**
   * 入河排污口id
   * @format int64
   */
  riveRiverSewageOutfallId?: number | null;
  /**
   * 监测点id
   * @format int64
   */
  technicsId?: number | null;
}

export interface EquipmentFO {
  /** 地址 */
  address?: string | null;
  /** 品牌 */
  brand?: string | null;
  /**
   * 编码
   * @minLength 1
   */
  code: string;
  /** 设备功率 */
  equipmentPower?: string | null;
  /**
   * id
   * @format int64
   */
  id?: number | null;
  /** imei */
  imei?: string | null;
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
  /** mn号 */
  mn?: string | null;
  /** 规格型号 */
  modelSpec?: string | null;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /**
   * 排序序号
   * @format int32
   */
  orderNumber?: number | null;
  /** 图片路径 */
  picUrl?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 所属测站
   * @format int64
   */
  technicsId: number;
  /** 设备类型编码 */
  typeCode?: string | null;
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
  /** 是否通讯 */
  isConn?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
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
  /** mn号 */
  mn?: string | null;
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
  /**
   * 所属入河排污口
   * @format int64
   */
  riverSewageOutfallId?: number | null;
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

/** 监测因子日粒度传输率分页查询对象 */
export interface EquipmentParamDailyRatePQO {
  /**
   * 统计开始日期
   * @format date-time
   */
  beginDate?: string | null;
  /**
   * 计算来源(1-定时任务,2-设备补传重算,3-停机变更重算,4-手动重算)
   * @format int32
   */
  calcSource?: number | null;
  /**
   * 最近一次计算时间
   * @format date-time
   */
  calcTime?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 有效数(is_effective = 1)
   * @format int32
   */
  effectiveCount?: number | null;
  /**
   * 有效率 = 有效数 / 应传数
   * @format double
   */
  effectiveRate?: number | null;
  /**
   * 统计结束日期
   * @format date-time
   */
  endDate?: string | null;
  /**
   * 设备ID
   * @format int64
   */
  equipmentId?: number | null;
  /** 设备名称(冗余) */
  equipmentName?: string | null;
  /**
   * 监测因子ID
   * @format int64
   */
  equipmentParamId?: number | null;
  /** 监测因子名称(冗余) */
  equipmentParamName?: string | null;
  /**
   * 应传数(24 − 停机扣减小时数)
   * @format int32
   */
  expectCount?: number | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /**
   * 无效数(实传数 − 有效数)
   * @format int32
   */
  invalidCount?: number | null;
  /**
   * 缺失数(应传数 − 实传数)
   * @format int32
   */
  missingCount?: number | null;
  /** 是否只查询有数据或有应传任务的日子(过滤应传数=0且实传数=0的记录) */
  onlyHasData?: boolean | null;
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
   * 实传数(含手动补录、设备补传)
   * @format int32
   */
  receiveCount?: number | null;
  /**
   * 实传有效率 = 有效数 / 实传数(辅助参考)
   * @format double
   */
  receiveEffectiveRate?: number | null;
  /**
   * 入河排污口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 入河排污口名称(冗余) */
  riverSewageOutfallName?: string | null;
  /**
   * 统计日期(固定为当日00:00:00)
   * @format date-time
   */
  statDate?: string | null;
  /**
   * 当天停机扣减小时数
   * @format int32
   */
  stopHours?: number | null;
  /**
   * 监测点ID
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称(冗余) */
  technicsName?: string | null;
  /**
   * 传输率 = 实传数 / 应传数
   * @format double
   */
  transferRate?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 监测因子日粒度传输率查询对象 */
export interface EquipmentParamDailyRateQO {
  /**
   * 统计开始日期
   * @format date-time
   */
  beginDate?: string | null;
  /**
   * 计算来源(1-定时任务,2-设备补传重算,3-停机变更重算,4-手动重算)
   * @format int32
   */
  calcSource?: number | null;
  /**
   * 最近一次计算时间
   * @format date-time
   */
  calcTime?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 有效数(is_effective = 1)
   * @format int32
   */
  effectiveCount?: number | null;
  /**
   * 有效率 = 有效数 / 应传数
   * @format double
   */
  effectiveRate?: number | null;
  /**
   * 统计结束日期
   * @format date-time
   */
  endDate?: string | null;
  /**
   * 设备ID
   * @format int64
   */
  equipmentId?: number | null;
  /** 设备名称(冗余) */
  equipmentName?: string | null;
  /**
   * 监测因子ID
   * @format int64
   */
  equipmentParamId?: number | null;
  /** 监测因子名称(冗余) */
  equipmentParamName?: string | null;
  /**
   * 应传数(24 − 停机扣减小时数)
   * @format int32
   */
  expectCount?: number | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /**
   * 无效数(实传数 − 有效数)
   * @format int32
   */
  invalidCount?: number | null;
  /**
   * 缺失数(应传数 − 实传数)
   * @format int32
   */
  missingCount?: number | null;
  /** 是否只查询有数据或有应传任务的日子(过滤应传数=0且实传数=0的记录) */
  onlyHasData?: boolean | null;
  /**
   * 实传数(含手动补录、设备补传)
   * @format int32
   */
  receiveCount?: number | null;
  /**
   * 实传有效率 = 有效数 / 实传数(辅助参考)
   * @format double
   */
  receiveEffectiveRate?: number | null;
  /**
   * 入河排污口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 入河排污口名称(冗余) */
  riverSewageOutfallName?: string | null;
  /**
   * 统计日期(固定为当日00:00:00)
   * @format date-time
   */
  statDate?: string | null;
  /**
   * 当天停机扣减小时数
   * @format int32
   */
  stopHours?: number | null;
  /**
   * 监测点ID
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称(冗余) */
  technicsName?: string | null;
  /**
   * 传输率 = 实传数 / 应传数
   * @format double
   */
  transferRate?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 监测因子日粒度传输率视图对象 */
export interface EquipmentParamDailyRateVO {
  /**
   * 计算来源(1-定时任务,2-设备补传重算,3-停机变更重算,4-手动重算)
   * @format int32
   */
  calcSource?: number | null;
  /** 计算来源名称 */
  calcSourceName?: string | null;
  /**
   * 最近一次计算时间
   * @format date-time
   */
  calcTime?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 有效数(is_effective = 1)
   * @format int32
   */
  effectiveCount?: number | null;
  /**
   * 有效率 = 有效数 / 应传数
   * @format double
   */
  effectiveRate?: number | null;
  /**
   * 设备ID
   * @format int64
   */
  equipmentId?: number | null;
  /** 设备名称(冗余) */
  equipmentName?: string | null;
  /**
   * 监测因子ID
   * @format int64
   */
  equipmentParamId?: number | null;
  /** 监测因子名称(冗余) */
  equipmentParamName?: string | null;
  /**
   * 应传数(24 − 停机扣减小时数)
   * @format int32
   */
  expectCount?: number | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /**
   * 无效数(实传数 − 有效数)
   * @format int32
   */
  invalidCount?: number | null;
  /**
   * 缺失数(应传数 − 实传数)
   * @format int32
   */
  missingCount?: number | null;
  /**
   * 实传数(含手动补录、设备补传)
   * @format int32
   */
  receiveCount?: number | null;
  /**
   * 实传有效率 = 有效数 / 实传数(辅助参考)
   * @format double
   */
  receiveEffectiveRate?: number | null;
  /**
   * 入河排污口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 入河排污口名称(冗余) */
  riverSewageOutfallName?: string | null;
  /**
   * 统计日期(固定为当日00:00:00)
   * @format date-time
   */
  statDate?: string | null;
  /**
   * 当天停机扣减小时数
   * @format int32
   */
  stopHours?: number | null;
  /**
   * 监测点ID
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称(冗余) */
  technicsName?: string | null;
  /**
   * 传输率 = 实传数 / 应传数
   * @format double
   */
  transferRate?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 天数据表 */
export interface EquipmentParamDd {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
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
  equipmentParamId?: number | null;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /**
   * flag
   * @format int32
   */
  flag?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * Iqi水质等级
   * @format int32
   */
  iqi?: number | null;
  /** 是否有效 */
  isEffective?: boolean | null;
  /** 是否已修正 */
  isFixed?: boolean | null;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: number | null;
  /**
   * 排口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 排口名称 */
  riverSewageOutfallName?: string | null;
  /**
   * 监测点id
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称 */
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

export interface EquipmentParamDdFO {
  /**
   * 数据时间
   * @format date-time
   */
  dataTime: string;
  /**
   * 监测因子id
   * @format int64
   */
  equipmentParamId: number;
  /**
   * data-flag
   * @format int32
   */
  flag: number;
  /** 是否有效 */
  isEffective: boolean;
  /**
   * 平均值
   * @format double
   */
  valueAvg: number;
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

export interface EquipmentParamDdFixFO {
  /**
   * 数据时间(只用作定位表)
   * @format date-time
   */
  dataTime: string;
  /** @format int64 */
  id: number;
  /**
   * 平均值
   * @format double
   */
  valueAvg: number;
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
  dataTime?: string | null;
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
  equipmentParamId?: number | null;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * flag
   * @format int32
   */
  flag?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * Iqi水质等级
   * @format int32
   */
  iqi?: number | null;
  /** 是否有效 */
  isEffective?: boolean | null;
  /** 是否已修正 */
  isFixed?: boolean | null;
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
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: number | null;
  /**
   * 排口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 排口名称 */
  riverSewageOutfallName?: string | null;
  /**
   * 监测点id
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称 */
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
  dataTime?: string | null;
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
  equipmentParamId?: number | null;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /**
   * flag
   * @format int32
   */
  flag?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * Iqi水质等级
   * @format int32
   */
  iqi?: number | null;
  /** 是否有效 */
  isEffective?: boolean | null;
  /** 是否已修正 */
  isFixed?: boolean | null;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: number | null;
  /**
   * 排口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 排口名称 */
  riverSewageOutfallName?: string | null;
  /**
   * 监测点id
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称 */
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
  dataTime?: string | null;
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
  equipmentParamId?: number | null;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /**
   * flag
   * @format int32
   */
  flag?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * Iqi水质等级
   * @format int32
   */
  iqi?: number | null;
  /** 是否有效 */
  isEffective?: boolean | null;
  /** 是否已修正 */
  isFixed?: boolean | null;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: number | null;
  /**
   * 排口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 排口名称 */
  riverSewageOutfallName?: string | null;
  /**
   * 监测点id
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称 */
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
  /**
   * 编码
   * @minLength 1
   */
  code: string;
  /** 数据代码 */
  dataCode?: string | null;
  /**
   * 数据信号（0-模拟量，1-开关量，2-文本型）
   * @format int32
   */
  dataSignal?: number | null;
  /**
   * 数据类型（0-实时，1-统计）
   * @format int32
   */
  dataType?: number | null;
  /**
   * 小数位数
   * @format int32
   */
  decimalPlaces?: number | null;
  /** 展示名称 */
  displayName?: string | null;
  /**
   * 所属设备
   * @format int64
   */
  equipmentId: number;
  /**
   * id
   * @format int64
   */
  id?: number | null;
  /** 是否显示 */
  isDisplay?: boolean | null;
  /** 单位 */
  measureUnit?: string | null;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /** 关状态颜色 */
  offColor?: string | null;
  /** 关状态标签 */
  offLabel?: string | null;
  /**
   * 离线判断时长，距离当前时间多久算离线(秒)
   * @format int32
   */
  offlineTimespan?: number | null;
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
}

/** 小时数据表 */
export interface EquipmentParamHd {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
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
  equipmentParamId?: number | null;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /**
   * flag
   * @format int32
   */
  flag?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * Iqi水质等级
   * @format int32
   */
  iqi?: number | null;
  /** 是否有效 */
  isEffective?: boolean | null;
  /** 是否已修正 */
  isFixed?: boolean | null;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: number | null;
  /**
   * 排口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 排口名称 */
  riverSewageOutfallName?: string | null;
  /**
   * 监测点id
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称 */
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

export interface EquipmentParamHdFO {
  /**
   * 数据时间
   * @format date-time
   */
  dataTime: string;
  /**
   * 监测因子id
   * @format int64
   */
  equipmentParamId: number;
  /**
   * data-flag
   * @format int32
   */
  flag: number;
  /** 是否有效 */
  isEffective: boolean;
  /**
   * 平均值
   * @format double
   */
  valueAvg: number;
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

export interface EquipmentParamHdFixFO {
  /**
   * 数据时间(只用作定位表)
   * @format date-time
   */
  dataTime: string;
  /** @format int64 */
  id: number;
  /**
   * 平均值
   * @format double
   */
  valueAvg: number;
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
  dataTime?: string | null;
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
  equipmentParamId?: number | null;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * flag
   * @format int32
   */
  flag?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * Iqi水质等级
   * @format int32
   */
  iqi?: number | null;
  /** 是否有效 */
  isEffective?: boolean | null;
  /** 是否已修正 */
  isFixed?: boolean | null;
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
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: number | null;
  /**
   * 排口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 排口名称 */
  riverSewageOutfallName?: string | null;
  /**
   * 监测点id
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称 */
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
  dataTime?: string | null;
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
  equipmentParamId?: number | null;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /**
   * flag
   * @format int32
   */
  flag?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * Iqi水质等级
   * @format int32
   */
  iqi?: number | null;
  /** 是否有效 */
  isEffective?: boolean | null;
  /** 是否已修正 */
  isFixed?: boolean | null;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: number | null;
  /**
   * 排口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 排口名称 */
  riverSewageOutfallName?: string | null;
  /**
   * 监测点id
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称 */
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
  dataTime?: string | null;
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
  equipmentParamId?: number | null;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /**
   * flag
   * @format int32
   */
  flag?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * Iqi水质等级
   * @format int32
   */
  iqi?: number | null;
  /** 是否有效 */
  isEffective?: boolean | null;
  /** 是否已修正 */
  isFixed?: boolean | null;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: number | null;
  /**
   * 排口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 排口名称 */
  riverSewageOutfallName?: string | null;
  /**
   * 监测点id
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称 */
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

export interface EquipmentParamInfoFO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 数据代码 */
  dataCode?: string | null;
  /**
   * 小数位数
   * @format int32
   */
  decimalPlaces?: number | null;
  /** 显示名称 */
  displayName?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否启用 */
  isEnable?: boolean | null;
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

export interface EquipmentParamInfoPQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 数据代码 */
  dataCode?: string | null;
  /**
   * 小数位数
   * @format int32
   */
  decimalPlaces?: number | null;
  /** 显示名称 */
  displayName?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否启用 */
  isEnable?: boolean | null;
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

export interface EquipmentParamInfoQO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 数据代码 */
  dataCode?: string | null;
  /**
   * 小数位数
   * @format int32
   */
  decimalPlaces?: number | null;
  /** 显示名称 */
  displayName?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否启用 */
  isEnable?: boolean | null;
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

export interface EquipmentParamInfoVO {
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 数据代码 */
  dataCode?: string | null;
  /**
   * 小数位数
   * @format int32
   */
  decimalPlaces?: number | null;
  /** 显示名称 */
  displayName?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否启用 */
  isEnable?: boolean | null;
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

/** 分钟数据表 */
export interface EquipmentParamMd {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
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
  equipmentParamId?: number | null;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /**
   * flag
   * @format int32
   */
  flag?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * Iqi水质等级
   * @format int32
   */
  iqi?: number | null;
  /** 是否有效 */
  isEffective?: boolean | null;
  /** 是否已修正 */
  isFixed?: boolean | null;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: number | null;
  /**
   * 排口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 排口名称 */
  riverSewageOutfallName?: string | null;
  /**
   * 监测点id
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称 */
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
  /**
   * 数据时间
   * @format date-time
   */
  dataTime: string;
  /**
   * 监测因子id
   * @format int64
   */
  equipmentParamId: number;
  /**
   * data-flag
   * @format int32
   */
  flag: number;
  /** 是否有效 */
  isEffective: boolean;
  /**
   * 平均值
   * @format double
   */
  valueAvg: number;
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

export interface EquipmentParamMdFixFO {
  /**
   * 数据时间(只用作定位表)
   * @format date-time
   */
  dataTime: string;
  /** @format int64 */
  id: number;
  /**
   * 平均值
   * @format double
   */
  valueAvg: number;
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

export interface EquipmentParamMdPQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /** @format date-time */
  createdAt?: string | null;
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
  endTime?: string;
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
  equipmentParamId?: number | null;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * flag
   * @format int32
   */
  flag?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * Iqi水质等级
   * @format int32
   */
  iqi?: number | null;
  /** 是否有效 */
  isEffective?: boolean | null;
  /** 是否已修正 */
  isFixed?: boolean | null;
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
  receiveFlag?: number | null;
  /**
   * 排口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 排口名称 */
  riverSewageOutfallName?: string | null;
  /**
   * 日期（1:小时， 2：日，3：周， 4：旬，5：月，6：季， 7：年）
   * @format int32
   */
  searchMode?: number | null;
  /**
   * 监测点id
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称 */
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
  /** 乡镇 */
  village?: string | null;
}

export interface EquipmentParamMdQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /** @format date-time */
  createdAt?: string | null;
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
  endTime?: string;
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
  equipmentParamId?: number | null;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /**
   * flag
   * @format int32
   */
  flag?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * Iqi水质等级
   * @format int32
   */
  iqi?: number | null;
  /** 是否有效 */
  isEffective?: boolean | null;
  /** 是否已修正 */
  isFixed?: boolean | null;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: number | null;
  /**
   * 排口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 排口名称 */
  riverSewageOutfallName?: string | null;
  /**
   * 日期（1:小时， 2：日，3：周， 4：旬，5：月，6：季， 7：年）
   * @format int32
   */
  searchMode?: number | null;
  /**
   * 监测点id
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称 */
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
  dataTime?: string | null;
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
  equipmentParamId?: number | null;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /**
   * flag
   * @format int32
   */
  flag?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * Iqi水质等级
   * @format int32
   */
  iqi?: number | null;
  /** 是否有效 */
  isEffective?: boolean | null;
  /** 是否已修正 */
  isFixed?: boolean | null;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: number | null;
  /**
   * 排口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 排口名称 */
  riverSewageOutfallName?: string | null;
  /**
   * 监测点id
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称 */
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
   * flag
   * @format int32
   */
  flag?: number | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * Iqi水质等级
   * @format int32
   */
  iqi?: number | null;
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
   * 预警级别,0不预警,1预警,2报警
   * @format int32
   */
  prealarmLevel?: number | null;
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
   * flag
   * @format int32
   */
  flag?: number | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * Iqi水质等级
   * @format int32
   */
  iqi?: number | null;
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
   * 预警级别,0不预警,1预警,2报警
   * @format int32
   */
  prealarmLevel?: number | null;
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

/** 历史数据表 */
export interface EquipmentParamRd {
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
  equipmentParamId?: number | null;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /**
   * flag
   * @format int32
   */
  flag?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * Iqi水质等级
   * @format int32
   */
  iqi?: number | null;
  /** 是否有效 */
  isEffective?: boolean | null;
  /** 是否已修正 */
  isFixed?: boolean | null;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: number | null;
  /**
   * 排口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 排口名称 */
  riverSewageOutfallName?: string | null;
  /**
   * 监测点id
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EquipmentParamRdFO {
  /**
   * 数据时间
   * @format date-time
   */
  dataTime: string;
  /**
   * 数据值
   * @format double
   */
  dataValue: number;
  /**
   * 监测因子id
   * @format int64
   */
  equipmentParamId: number;
  /**
   * data-flag
   * @format int32
   */
  flag: number;
  /** 是否有效 */
  isEffective: boolean;
}

export interface EquipmentParamRdFixFO {
  /**
   * 数据时间(只用作定位表)
   * @format date-time
   */
  dataTime: string;
  /**
   * 数据值
   * @format double
   */
  dataValue: number;
  /** @format int64 */
  id: number;
}

export interface EquipmentParamRdPQO {
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
  equipmentParamId?: number | null;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * flag
   * @format int32
   */
  flag?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * Iqi水质等级
   * @format int32
   */
  iqi?: number | null;
  /** 是否有效 */
  isEffective?: boolean | null;
  /** 是否已修正 */
  isFixed?: boolean | null;
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
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: number | null;
  /**
   * 排口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 排口名称 */
  riverSewageOutfallName?: string | null;
  /**
   * 监测点id
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EquipmentParamRdQO {
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
  equipmentParamId?: number | null;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /**
   * flag
   * @format int32
   */
  flag?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * Iqi水质等级
   * @format int32
   */
  iqi?: number | null;
  /** 是否有效 */
  isEffective?: boolean | null;
  /** 是否已修正 */
  isFixed?: boolean | null;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: number | null;
  /**
   * 排口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 排口名称 */
  riverSewageOutfallName?: string | null;
  /**
   * 监测点id
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface EquipmentParamRdVO {
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
  equipmentParamId?: number | null;
  /** 监测因子名称 */
  equipmentParamName?: string | null;
  /**
   * flag
   * @format int32
   */
  flag?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * Iqi水质等级
   * @format int32
   */
  iqi?: number | null;
  /** 是否有效 */
  isEffective?: boolean | null;
  /** 是否已修正 */
  isFixed?: boolean | null;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: number | null;
  /**
   * 排口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 排口名称 */
  riverSewageOutfallName?: string | null;
  /**
   * 监测点id
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称 */
  technicsName?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

/** 监测因子停机时段新增/编辑对象 */
export interface EquipmentParamStopPeriodFO {
  /**
   * 停机开始时间(半开区间左端,包含该时刻)
   * @format date-time
   */
  beginTime: string;
  /**
   * 停机结束时间(半开区间右端,不含该时刻);NULL表示至今未恢复
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 监测因子ID
   * @format int64
   */
  equipmentParamId: number;
  /**
   * 主键ID(编辑时必填)
   * @format int64
   */
  id?: number | null;
  /** 停机说明 */
  remark?: string | null;
  /**
   * 停机类型(1-更换设备,2-设备检修,3-设备报废,4-监测因子停用,5-更换前未投运,9-其他)
   * @format int32
   */
  stopType: number;
}

/** 监测因子停机时段分页查询对象 */
export interface EquipmentParamStopPeriodPQO {
  /**
   * 停机开始时间(半开区间左端,包含该时刻)
   * @format date-time
   */
  beginTime?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 停机结束时间(半开区间右端,不含该时刻);NULL表示至今未恢复
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 设备ID
   * @format int64
   */
  equipmentId?: number | null;
  /** 设备名称(冗余) */
  equipmentName?: string | null;
  /**
   * 监测因子ID
   * @format int64
   */
  equipmentParamId?: number | null;
  /** 监测因子名称(冗余) */
  equipmentParamName?: string | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * 主键ID
   * @format int64
   */
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
  /** 停机说明 */
  remark?: string | null;
  /**
   * 入河排污口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 入河排污口名称(冗余) */
  riverSewageOutfallName?: string | null;
  /**
   * 停机类型(1-更换设备,2-设备检修,3-设备报废,4-监测因子停用,5-更换前未投运,9-其他)
   * @format int32
   */
  stopType?: number | null;
  /**
   * 监测点ID
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称(冗余) */
  technicsName?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 监测因子停机时段查询对象 */
export interface EquipmentParamStopPeriodQO {
  /**
   * 停机开始时间(半开区间左端,包含该时刻)
   * @format date-time
   */
  beginTime?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 停机结束时间(半开区间右端,不含该时刻);NULL表示至今未恢复
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 设备ID
   * @format int64
   */
  equipmentId?: number | null;
  /** 设备名称(冗余) */
  equipmentName?: string | null;
  /**
   * 监测因子ID
   * @format int64
   */
  equipmentParamId?: number | null;
  /** 监测因子名称(冗余) */
  equipmentParamName?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 停机说明 */
  remark?: string | null;
  /**
   * 入河排污口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 入河排污口名称(冗余) */
  riverSewageOutfallName?: string | null;
  /**
   * 停机类型(1-更换设备,2-设备检修,3-设备报废,4-监测因子停用,5-更换前未投运,9-其他)
   * @format int32
   */
  stopType?: number | null;
  /**
   * 监测点ID
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称(冗余) */
  technicsName?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 监测因子停机时段视图对象 */
export interface EquipmentParamStopPeriodVO {
  /**
   * 停机开始时间(半开区间左端,包含该时刻)
   * @format date-time
   */
  beginTime?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 停机结束时间(半开区间右端,不含该时刻);NULL表示至今未恢复
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 设备ID
   * @format int64
   */
  equipmentId?: number | null;
  /** 设备名称(冗余) */
  equipmentName?: string | null;
  /**
   * 监测因子ID
   * @format int64
   */
  equipmentParamId?: number | null;
  /** 监测因子名称(冗余) */
  equipmentParamName?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 停机说明 */
  remark?: string | null;
  /**
   * 入河排污口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 入河排污口名称(冗余) */
  riverSewageOutfallName?: string | null;
  /**
   * 停机类型(1-更换设备,2-设备检修,3-设备报废,4-监测因子停用,5-更换前未投运,9-其他)
   * @format int32
   */
  stopType?: number | null;
  /** 停机类型名称 */
  stopTypeName?: string | null;
  /**
   * 监测点ID
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称(冗余) */
  technicsName?: string | null;
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
   * flag
   * @format int32
   */
  flag?: number | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * Iqi水质等级
   * @format int32
   */
  iqi?: number | null;
  /** 是否显示 */
  isDisplay?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
  /** 是否在线 */
  isOnline?: boolean | null;
  /** 单位 */
  measureUnit?: string | null;
  /** 对应设备mn号 */
  readonly mn?: string | null;
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
   * 预警级别,0不预警,1预警,2报警
   * @format int32
   */
  prealarmLevel?: number | null;
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
   * 所属入河排污口
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 所属入河排污口 */
  riverSewageOutfallName?: string | null;
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
  /** 设备功率 */
  equipmentPower?: string | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** imei */
  imei?: string | null;
  /** 是否通讯 */
  isConn?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
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
  /** mn号 */
  mn?: string | null;
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
  /**
   * 所属入河排污口
   * @format int64
   */
  riverSewageOutfallId?: number | null;
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
  /** 设备功率 */
  equipmentPower?: string | null;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** imei */
  imei?: string | null;
  /** 是否通讯 */
  isConn?: boolean | null;
  /** 是否启用 */
  isEnable?: boolean | null;
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
  /** mn号 */
  mn?: string | null;
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
  /** 监管级别 */
  regulatoryLevel?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 所属河流 */
  river?: string | null;
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
  /**
   * 视频排序序号
   * @format int32
   */
  videoSn?: number | null;
}

/** 事件审核传入参数 */
export interface EventAuditFO {
  /**
   * 事件ID
   * @format int64
   */
  id: number;
  /** 是否需要处理(true-需要处理,false-不需要处理,流程结束) */
  isNeedHandle: boolean;
  /** 审核意见(不需要处理时必填,作为不需处理的原因) */
  opinion?: string | null;
}

/** 事件派遣传入参数 */
export interface EventDispatchFO {
  /** 处理人姓名 */
  handler?: string | null;
  /**
   * 处理人用户ID
   * @format int64
   */
  handlerId: number;
  /**
   * 事件ID
   * @format int64
   */
  id: number;
  /** 派遣说明 */
  opinion?: string | null;
}

/** 事件处理(填写处理结果)传入参数 */
export interface EventHandleActFO {
  /**
   * 操作记录id
   * @format int64
   */
  eventHandleId: number;
  /** 处理现场照片等附件 */
  files?: RecordFile[] | null;
  /**
   * 处理结果描述
   * @minLength 1
   */
  handleDesc: string;
  /**
   * 处理时间(不传时取当前时间)
   * @format date-time
   */
  handleTime?: string | null;
  /** 处理人姓名 */
  handler?: string | null;
  /**
   * 处理人用户ID(不传时取当前登录人)
   * @format int64
   */
  handlerId?: number | null;
  /**
   * 事件ID
   * @format int64
   */
  id: number;
  /** 备注 */
  remark?: string | null;
}

/** 事件处理结果审核传入参数 */
export interface EventHandleAuditFO {
  /**
   * 事件ID
   * @format int64
   */
  id: number;
  /** 处理结果是否通过(true-通过,流程结束;false-驳回,重新处理) */
  isPass: boolean;
  /** 审核意见 */
  opinion?: string | null;
}

export interface ExportEquimpentDataQO {
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /** 监测因子名称 */
  equipmentParamName?: string[] | null;
  /**
   * 开始时间
   * @format date-time
   */
  startTime?: string | null;
  /** 电站id列表 */
  technicsIds?: number[] | null;
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
export interface FurionResultBsEventLevelVO {
  /** 事件级别输出对象 */
  data?: BsEventLevelVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultBsEventTypeVO {
  /** 事件类型输出对象 */
  data?: BsEventTypeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultBsInformationVO {
  data?: BsInformationVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultBsNewsVO {
  data?: BsNewsVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultBsOutletCategoryVO {
  data?: BsOutletCategoryVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultBsOutletTypeVO {
  data?: BsOutletTypeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultBsRiverVO {
  data?: BsRiverVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultBsVillageVO {
  data?: BsVillageVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultEquipmentParamDailyRateVO {
  /** 监测因子日粒度传输率视图对象 */
  data?: EquipmentParamDailyRateVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEquipmentParamDd {
  /** 天数据表 */
  data?: EquipmentParamDd;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultEquipmentParamHd {
  /** 小时数据表 */
  data?: EquipmentParamHd;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultEquipmentParamInfoVO {
  data?: EquipmentParamInfoVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEquipmentParamMd {
  /** 分钟数据表 */
  data?: EquipmentParamMd;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultEquipmentParamRd {
  /** 历史数据表 */
  data?: EquipmentParamRd;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEquipmentParamRdVO {
  data?: EquipmentParamRdVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEquipmentParamStopPeriodVO {
  /** 监测因子停机时段视图对象 */
  data?: EquipmentParamStopPeriodVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultHjCommandRecordVO {
  data?: HjCommandRecordVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultHjmessageLogVO {
  data?: HjmessageLogVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListBsEventLevelVO {
  /** 数据 */
  data?: BsEventLevelVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListBsEventTypeVO {
  /** 数据 */
  data?: BsEventTypeVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListBsInformationVO {
  /** 数据 */
  data?: BsInformationVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListBsNewsVO {
  /** 数据 */
  data?: BsNewsVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListBsOutletCategoryVO {
  /** 数据 */
  data?: BsOutletCategoryVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListBsOutletTypeVO {
  /** 数据 */
  data?: BsOutletTypeVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListBsRiverVO {
  /** 数据 */
  data?: BsRiverVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListBsVillageVO {
  /** 数据 */
  data?: BsVillageVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListDataTransferRateByTechnicesVO {
  /** 数据 */
  data?: DataTransferRateByTechnicesVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListEnumGroupDto {
  /** 数据 */
  data?: EnumGroupDto[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEpStDataStVO {
  /** 数据 */
  data?: EpStDataStVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEquipmentParamDailyRateVO {
  /** 数据 */
  data?: EquipmentParamDailyRateVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListEquipmentParamInfoVO {
  /** 数据 */
  data?: EquipmentParamInfoVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListEquipmentParamRdVO {
  /** 数据 */
  data?: EquipmentParamRdVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEquipmentParamStopPeriodVO {
  /** 数据 */
  data?: EquipmentParamStopPeriodVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListHjCommandRecordVO {
  /** 数据 */
  data?: HjCommandRecordVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListHjmessageLogVO {
  /** 数据 */
  data?: HjmessageLogVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListLabelValue {
  /** 数据 */
  data?: LabelValue[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListMsgnoticeVO {
  /** 数据 */
  data?: MsgnoticeVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListMtDataFixLogVO {
  /** 数据 */
  data?: MtDataFixLogVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListMtEditFlagLogVO {
  /** 数据 */
  data?: MtEditFlagLogVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListOutfallEventHandleVO {
  /** 数据 */
  data?: OutfallEventHandleVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListOutfallEventInfoVO {
  /** 数据 */
  data?: OutfallEventInfoVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListOutfallInspectionPlanVO {
  /** 数据 */
  data?: OutfallInspectionPlanVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListOutfallInspectionRecordVO {
  /** 数据 */
  data?: OutfallInspectionRecordVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListOutfallInspectionTaskVO {
  /** 数据 */
  data?: OutfallInspectionTaskVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListOutfallInspectionTrackVO {
  /** 数据 */
  data?: OutfallInspectionTrackVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListOutfallMapVO {
  /** 数据 */
  data?: OutfallMapVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListPrealarmStVO {
  /** 数据 */
  data?: PrealarmStVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultListRiverSewageOutfallVO {
  /** 数据 */
  data?: RiverSewageOutfallVO[] | null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultMpstVO {
  data?: MpstVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultMsgnoticeVO {
  data?: MsgnoticeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultMtDataFixLog {
  /** 数据修正操作日志 */
  data?: MtDataFixLog;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultMtDataFixLogVO {
  data?: MtDataFixLogVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultMtEditFlagLogVO {
  data?: MtEditFlagLogVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultOutfallEventHandleVO {
  /** 事件处理记录输出对象 */
  data?: OutfallEventHandleVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultOutfallEventInfoVO {
  /** 事件信息输出对象 */
  data?: OutfallEventInfoVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultOutfallInspectionPlanVO {
  /** 巡检计划输出对象 */
  data?: OutfallInspectionPlanVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultOutfallInspectionRecordVO {
  /** 巡检记录输出对象 */
  data?: OutfallInspectionRecordVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultOutfallInspectionTaskVO {
  /** 巡检任务输出对象 */
  data?: OutfallInspectionTaskVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultOutfallInspectionTrackVO {
  /** 巡检轨迹输出对象 */
  data?: OutfallInspectionTrackVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultRiverSewageOutfallVO {
  data?: RiverSewageOutfallVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultSqlSugarPagedListBsEventLevelVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListBsEventLevelVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListBsEventTypeVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListBsEventTypeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListBsInformationVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListBsInformationVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListBsNewsVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListBsNewsVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListBsOutletCategoryVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListBsOutletCategoryVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListBsOutletTypeVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListBsOutletTypeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultSqlSugarPagedListBsRiverVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListBsRiverVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListBsVillageVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListBsVillageVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultSqlSugarPagedListEquipmentParamDailyRateVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEquipmentParamDailyRateVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultSqlSugarPagedListEquipmentParamInfoVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEquipmentParamInfoVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultSqlSugarPagedListEquipmentParamRdVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEquipmentParamRdVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEquipmentParamStopPeriodVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListEquipmentParamStopPeriodVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultSqlSugarPagedListHjCommandRecordVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListHjCommandRecordVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListHjmessageLogVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListHjmessageLogVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultSqlSugarPagedListMsgnoticeVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListMsgnoticeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListMtDataFixLogVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListMtDataFixLogVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListMtEditFlagLogVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListMtEditFlagLogVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultSqlSugarPagedListOutfallEventHandleVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListOutfallEventHandleVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListOutfallEventInfoVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListOutfallEventInfoVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListOutfallInspectionPlanVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListOutfallInspectionPlanVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListOutfallInspectionRecordVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListOutfallInspectionRecordVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListOutfallInspectionTaskVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListOutfallInspectionTaskVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: string | null;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListOutfallInspectionTrackVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListOutfallInspectionTrackVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultSqlSugarPagedListRiverSewageOutfallVO {
  /** 分页泛型集合 */
  data?: SqlSugarPagedListRiverSewageOutfallVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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
export interface FurionResultStateStVO {
  data?: StateStVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: number | null;
  /** 附加数据 */
  extras?: any;
  /** 错误信息 */
  message?: string | null;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
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

export interface HjCommandRecordPQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /**
   * 命令编码 3012-即时采样 1002-设置数采仪MN编码
   * @format int32
   */
  cn?: number | null;
  cpContent?: string | null;
  /** @format date-time */
  createdAt?: string;
  /** 操作人 */
  createdPerson?: string | null;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /** @format int64 */
  equipmentId?: number | null;
  equipmentName?: string | null;
  /**
   * 监测因子ID，一次请求针对一个因子
   * @format int64
   */
  equipmentParamId?: number | null;
  errMsg?: string | null;
  /**
   * 9012执行结果 ExeRtn
   * @format int32
   */
  exeRtn?: number | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * 到达终态的时间
   * @format date-time
   */
  finishedAt?: string | null;
  /** @format int64 */
  id?: number;
  isDelete?: boolean | null;
  /**
   * 最大下发次数，实际使用时填1
   * @format int32
   */
  maxTry?: number | null;
  /** 设备MN */
  mn?: string | null;
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
  /** 污染物编码，取 equipment_param.data_code */
  polId?: string | null;
  polName?: string | null;
  /** 请求编码QN */
  qn?: string | null;
  /**
   * 9011请求应答 QnRtn
   * @format int32
   */
  qnRtn?: number | null;
  /** 下发的原始报文 */
  requestPayload?: string | null;
  /** 收到的应答原始报文(多段换行分隔) */
  responsePayload?: string | null;
  st?: string | null;
  /**
   * 0-待下发 1-已下发(等待应答) 2-已收到请求应答 3-执行成功 4-执行失败 5-无应答超时 6-设备离线 7-参数无效 8-下发异常
   * @format int32
   */
  status?: number | null;
  /**
   * 单阶段等待应答超时(毫秒)
   * @format int32
   */
  timeoutMs?: number | null;
  /** @format int32 */
  tryCount?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface HjCommandRecordQO {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /**
   * 命令编码 3012-即时采样 1002-设置数采仪MN编码
   * @format int32
   */
  cn?: number | null;
  cpContent?: string | null;
  /** @format date-time */
  createdAt?: string;
  /** 操作人 */
  createdPerson?: string | null;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string | null;
  /** @format int64 */
  equipmentId?: number | null;
  equipmentName?: string | null;
  /**
   * 监测因子ID，一次请求针对一个因子
   * @format int64
   */
  equipmentParamId?: number | null;
  errMsg?: string | null;
  /**
   * 9012执行结果 ExeRtn
   * @format int32
   */
  exeRtn?: number | null;
  /**
   * 到达终态的时间
   * @format date-time
   */
  finishedAt?: string | null;
  /** @format int64 */
  id?: number;
  isDelete?: boolean | null;
  /**
   * 最大下发次数，实际使用时填1
   * @format int32
   */
  maxTry?: number | null;
  /** 设备MN */
  mn?: string | null;
  /** 污染物编码，取 equipment_param.data_code */
  polId?: string | null;
  polName?: string | null;
  /** 请求编码QN */
  qn?: string | null;
  /**
   * 9011请求应答 QnRtn
   * @format int32
   */
  qnRtn?: number | null;
  /** 下发的原始报文 */
  requestPayload?: string | null;
  /** 收到的应答原始报文(多段换行分隔) */
  responsePayload?: string | null;
  st?: string | null;
  /**
   * 0-待下发 1-已下发(等待应答) 2-已收到请求应答 3-执行成功 4-执行失败 5-无应答超时 6-设备离线 7-参数无效 8-下发异常
   * @format int32
   */
  status?: number | null;
  /**
   * 单阶段等待应答超时(毫秒)
   * @format int32
   */
  timeoutMs?: number | null;
  /** @format int32 */
  tryCount?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface HjCommandRecordVO {
  /**
   * 命令编码 3012-即时采样 1002-设置数采仪MN编码
   * @format int32
   */
  cn?: number | null;
  cpContent?: string | null;
  /** @format date-time */
  createdAt?: string;
  /** 操作人 */
  createdPerson?: string | null;
  /** @format int64 */
  equipmentId?: number | null;
  equipmentName?: string | null;
  /**
   * 监测因子ID，一次请求针对一个因子
   * @format int64
   */
  equipmentParamId?: number | null;
  errMsg?: string | null;
  /**
   * 9012执行结果 ExeRtn
   * @format int32
   */
  exeRtn?: number | null;
  /**
   * 到达终态的时间
   * @format date-time
   */
  finishedAt?: string | null;
  /** @format int64 */
  id?: number;
  isDelete?: boolean | null;
  /**
   * 最大下发次数，实际使用时填1
   * @format int32
   */
  maxTry?: number | null;
  /** 设备MN */
  mn?: string | null;
  /** 污染物编码，取 equipment_param.data_code */
  polId?: string | null;
  polName?: string | null;
  /** 请求编码QN */
  qn?: string | null;
  /**
   * 9011请求应答 QnRtn
   * @format int32
   */
  qnRtn?: number | null;
  /** 下发的原始报文 */
  requestPayload?: string | null;
  /** 收到的应答原始报文(多段换行分隔) */
  responsePayload?: string | null;
  st?: string | null;
  /**
   * 0-待下发 1-已下发(等待应答) 2-已收到请求应答 3-执行成功 4-执行失败 5-无应答超时 6-设备离线 7-参数无效 8-下发异常
   * @format int32
   */
  status?: number | null;
  /**
   * 单阶段等待应答超时(毫秒)
   * @format int32
   */
  timeoutMs?: number | null;
  /** @format int32 */
  tryCount?: number | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface HjmessageLogPQO {
  /** ascii字符串 */
  asciiStr?: string | null;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /**
   * 命令编码CN
   * @format int32
   */
  cn?: number | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  createdPerson?: string | null;
  /** hex字符串 */
  dataHex?: string | null;
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
  /**
   * Flag
   * @format int32
   */
  flag?: number | null;
  /** 命令是否需要应答 */
  flagA?: boolean | null;
  /** 命令是否分了包 */
  flagD?: boolean | null;
  /**
   * 版本号,0--HJ/T212-2005 1--HJ212-2017
   * @format int32
   */
  flagV?: number | null;
  /** @format int64 */
  id?: number;
  /** 是否是有效包 */
  isValid?: boolean | null;
  /** 报文中的mn号 */
  mn?: string | null;
  /** tcpclient连接的mn号 */
  mnConn?: string | null;
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
   * 包号
   * @format int32
   */
  pno?: number | null;
  /**
   * 总包数
   * @format int32
   */
  pnum?: number | null;
  /** 访问密码 */
  pw?: string | null;
  /** 请求编码QN */
  qn?: string | null;
  /** ip */
  remoteIp?: string | null;
  /**
   * port
   * @format int32
   */
  remotePort?: number | null;
  /** 系统编码ST */
  st?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface HjmessageLogQO {
  /** ascii字符串 */
  asciiStr?: string | null;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /**
   * 命令编码CN
   * @format int32
   */
  cn?: number | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  createdPerson?: string | null;
  /** hex字符串 */
  dataHex?: string | null;
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
  /**
   * Flag
   * @format int32
   */
  flag?: number | null;
  /** 命令是否需要应答 */
  flagA?: boolean | null;
  /** 命令是否分了包 */
  flagD?: boolean | null;
  /**
   * 版本号,0--HJ/T212-2005 1--HJ212-2017
   * @format int32
   */
  flagV?: number | null;
  /** @format int64 */
  id?: number;
  /** 是否是有效包 */
  isValid?: boolean | null;
  /** 报文中的mn号 */
  mn?: string | null;
  /** tcpclient连接的mn号 */
  mnConn?: string | null;
  /**
   * 包号
   * @format int32
   */
  pno?: number | null;
  /**
   * 总包数
   * @format int32
   */
  pnum?: number | null;
  /** 访问密码 */
  pw?: string | null;
  /** 请求编码QN */
  qn?: string | null;
  /** ip */
  remoteIp?: string | null;
  /**
   * port
   * @format int32
   */
  remotePort?: number | null;
  /** 系统编码ST */
  st?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface HjmessageLogVO {
  /** ascii字符串 */
  asciiStr?: string | null;
  /**
   * 命令编码CN
   * @format int32
   */
  cn?: number | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string;
  createdPerson?: string | null;
  /** hex字符串 */
  dataHex?: string | null;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: string | null;
  /**
   * Flag
   * @format int32
   */
  flag?: number | null;
  /** 命令是否需要应答 */
  flagA?: boolean | null;
  /** 命令是否分了包 */
  flagD?: boolean | null;
  /**
   * 版本号,0--HJ/T212-2005 1--HJ212-2017
   * @format int32
   */
  flagV?: number | null;
  /** @format int64 */
  id?: number;
  /** 是否是有效包 */
  isValid?: boolean | null;
  /** 报文中的mn号 */
  mn?: string | null;
  /** tcpclient连接的mn号 */
  mnConn?: string | null;
  /**
   * 包号
   * @format int32
   */
  pno?: number | null;
  /**
   * 总包数
   * @format int32
   */
  pnum?: number | null;
  /** 访问密码 */
  pw?: string | null;
  /** 请求编码QN */
  qn?: string | null;
  /** ip */
  remoteIp?: string | null;
  /**
   * port
   * @format int32
   */
  remotePort?: number | null;
  /** 系统编码ST */
  st?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
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

/** 巡检签到(开始巡检)传入参数 */
export interface InspectionCheckInFO {
  /** 签到地址 */
  address?: string | null;
  /**
   * 签到时间(不传时取当前时间)
   * @format date-time
   */
  checkInTime?: string | null;
  /** 巡检人姓名 */
  inspectionPerson?: string | null;
  /**
   * 巡检人用户ID(不传时取当前登录人)
   * @format int64
   */
  inspectionPersonId?: number | null;
  /**
   * 签到纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 签到经度
   * @format double
   */
  longitude?: number | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 巡检任务ID
   * @format int64
   */
  taskId: number;
}

/** 巡检签退(结束巡检)传入参数 */
export interface InspectionCheckOutFO {
  /** 异常情况描述 */
  abnormalDesc?: string | null;
  /** 签退地址 */
  address?: string | null;
  /**
   * 签退时间(不传时取当前时间)
   * @format date-time
   */
  checkOutTime?: string | null;
  /** 现场照片等附件 */
  files?: RecordFile[] | null;
  /** 是否发现异常 */
  isAbnormal?: boolean | null;
  /**
   * 签退纬度
   * @format double
   */
  latitude?: number | null;
  /**
   * 签退经度
   * @format double
   */
  longitude?: number | null;
  /** 备注 */
  remark?: string | null;
  /** 巡检结论 */
  result?: string | null;
  /**
   * 巡检任务ID
   * @format int64
   */
  taskId: number;
}

/** 按巡检计划生成任务传入参数 */
export interface InspectionTaskGenerateFO {
  /** 指定巡检负责人姓名 */
  chargePerson?: string | null;
  /**
   * 指定巡检负责人用户ID(不传时取巡检计划负责人)
   * @format int64
   */
  chargePersonId?: number | null;
  /**
   * 生成数量(默认1条)
   * @format int32
   */
  count?: number | null;
  /**
   * 巡检计划ID(必填)
   * @format int64
   */
  planId: number;
  /**
   * 计划巡检时间(不传时取计划的下次生成任务时间)
   * @format date-time
   */
  planTime?: string | null;
}

/** 巡检轨迹点传入参数 */
export interface InspectionTrackItemFO {
  /** 定位地址 */
  address?: string | null;
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
  /** 备注 */
  remark?: string | null;
  /**
   * 速度(米/秒)
   * @format double
   */
  speed?: number | null;
  /**
   * 定位时间(不传时取当前时间)
   * @format date-time
   */
  trackTime?: string | null;
}

/** 巡检轨迹批量上传传入参数 */
export interface InspectionTrackUploadFO {
  /**
   * 巡检记录ID
   * @format int64
   */
  recordId: number;
  /**
   * 巡检任务ID
   * @format int64
   */
  taskId?: number | null;
  /** 轨迹点集合 */
  tracks: InspectionTrackItemFO[];
}

export interface LabelValue {
  label?: string | null;
  /** @format double */
  value?: number | null;
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

export interface MpstVO {
  /**
   * 排污企业数量
   * @format int32
   */
  companyCount?: number;
  /**
   * 排污口数量
   * @format int32
   */
  outfallCount?: number;
  /**
   * 视频监测设备数量
   * @format int32
   */
  videoEquipmentCount?: number;
  /**
   * 水质监测设备数量
   * @format int32
   */
  wqEquipmentCount?: number;
  /**
   * 污水厂数量
   * @format int32
   */
  wsclcCount?: number;
}

export interface MsgnoticeFO {
  /** 内容 */
  content?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 是否有附件 */
  haveAttachment?: boolean;
  /** @format int64 */
  id?: number;
  /** 标题 */
  title?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface MsgnoticePQO {
  /** 内容 */
  content?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** 是否有附件 */
  haveAttachment?: boolean;
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

export interface MsgnoticeQO {
  /** 内容 */
  content?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 是否有附件 */
  haveAttachment?: boolean;
  /** @format int64 */
  id?: number;
  /** 标题 */
  title?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface MsgnoticeVO {
  /** 内容 */
  content?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 是否有附件 */
  haveAttachment?: boolean;
  /** @format int64 */
  id?: number;
  /** 标题 */
  title?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

/** 数据修正操作日志 */
export interface MtDataFixLog {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 新值 */
  newJson?: string | null;
  /** 旧值 */
  oldJson?: string | null;
  /**
   * 记录id
   * @format int64
   */
  recordId?: number;
  /** 类型(rd,md,hd,dd)历史,分钟,小时,天 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface MtDataFixLogFO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 新值 */
  newJson?: string | null;
  /** 旧值 */
  oldJson?: string | null;
  /**
   * 记录id
   * @format int64
   */
  recordId?: number;
  /** 类型(rd,md,hd,dd)历史,分钟,小时,天 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface MtDataFixLogPQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 新值 */
  newJson?: string | null;
  /** 旧值 */
  oldJson?: string | null;
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
   * 记录id
   * @format int64
   */
  recordId?: number;
  /** 类型(rd,md,hd,dd)历史,分钟,小时,天 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface MtDataFixLogQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 新值 */
  newJson?: string | null;
  /** 旧值 */
  oldJson?: string | null;
  /**
   * 记录id
   * @format int64
   */
  recordId?: number;
  /** 类型(rd,md,hd,dd)历史,分钟,小时,天 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface MtDataFixLogVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 新值 */
  newJson?: string | null;
  /** 旧值 */
  oldJson?: string | null;
  /**
   * 记录id
   * @format int64
   */
  recordId?: number;
  /** 类型(rd,md,hd,dd)历史,分钟,小时,天 */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface MtEditFlagLogFO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 新值 */
  newValue?: boolean | null;
  /** 旧值 */
  oldValue?: boolean | null;
  /**
   * 记录id
   * @format int64
   */
  recordId?: number | null;
  /** 类型(rd,md,hd,dd;历史,分钟,小时,天) */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface MtEditFlagLogPQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 新值 */
  newValue?: boolean | null;
  /** 旧值 */
  oldValue?: boolean | null;
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
   * 记录id
   * @format int64
   */
  recordId?: number | null;
  /** 类型(rd,md,hd,dd;历史,分钟,小时,天) */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface MtEditFlagLogQO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 新值 */
  newValue?: boolean | null;
  /** 旧值 */
  oldValue?: boolean | null;
  /**
   * 记录id
   * @format int64
   */
  recordId?: number | null;
  /** 类型(rd,md,hd,dd;历史,分钟,小时,天) */
  type?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface MtEditFlagLogVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** @format int64 */
  id?: number;
  /** 新值 */
  newValue?: boolean | null;
  /** 旧值 */
  oldValue?: boolean | null;
  /**
   * 记录id
   * @format int64
   */
  recordId?: number | null;
  /** 类型(rd,md,hd,dd;历史,分钟,小时,天) */
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

export type OnlineInfoVO = object;

export interface OnlyIdAndTImePageQO {
  /** @format date-time */
  endTime?: string;
  /** @format int64 */
  id?: number | null;
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
  /** @format date-time */
  startTime?: string;
}

export interface OnlyIdQO {
  /**
   * Id
   * @format int64
   */
  id?: number | null;
}

export interface OnlyMsgIdList {
  /** MessageIds */
  ids: number[];
}

export interface OnlyTechnicsIdQO {
  /**
   * TechnicsId
   * @format int64
   */
  technicsId?: number | null;
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

/** 事件处理记录分页查询对象 */
export interface OutfallEventHandlePQO {
  /** 操作说明 */
  actDesc?: string | null;
  /** 操作人姓名 */
  actPerson?: string | null;
  /**
   * 操作人用户ID
   * @format int64
   */
  actPersonId?: number | null;
  /**
   * 操作时间
   * @format date-time
   */
  actTime?: string | null;
  /**
   * 操作类型(1-上报,2-审核,3-派遣,4-处理,5-审核处理结果,6-驳回重新处理)
   * @format int32
   */
  actType?: number | null;
  /**
   * 操作开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 操作结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 事件ID
   * @format int64
   */
  eventId?: number | null;
  /** 事件编号 */
  eventNo?: string | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * 变更前状态
   * @format int32
   */
  fromStatus?: number | null;
  /**
   * 主键ID
   * @format int64
   */
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
  /** 备注 */
  remark?: string | null;
  /**
   * 变更后状态
   * @format int32
   */
  toStatus?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 事件处理记录查询对象 */
export interface OutfallEventHandleQO {
  /** 操作说明 */
  actDesc?: string | null;
  /** 操作人姓名 */
  actPerson?: string | null;
  /**
   * 操作人用户ID
   * @format int64
   */
  actPersonId?: number | null;
  /**
   * 操作时间
   * @format date-time
   */
  actTime?: string | null;
  /**
   * 操作类型(1-上报,2-审核,3-派遣,4-处理,5-审核处理结果,6-驳回重新处理)
   * @format int32
   */
  actType?: number | null;
  /**
   * 操作开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 操作结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 事件ID
   * @format int64
   */
  eventId?: number | null;
  /** 事件编号 */
  eventNo?: string | null;
  /**
   * 变更前状态
   * @format int32
   */
  fromStatus?: number | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 备注 */
  remark?: string | null;
  /**
   * 变更后状态
   * @format int32
   */
  toStatus?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 事件处理记录输出对象 */
export interface OutfallEventHandleVO {
  /** 操作说明 */
  actDesc?: string | null;
  /** 操作人姓名 */
  actPerson?: string | null;
  /**
   * 操作人用户ID
   * @format int64
   */
  actPersonId?: number | null;
  /**
   * 操作时间
   * @format date-time
   */
  actTime?: string | null;
  /**
   * 操作类型(1-上报,2-审核,3-派遣,4-处理,5-审核处理结果,6-驳回重新处理)
   * @format int32
   */
  actType?: number | null;
  /** 操作类型名称 */
  actTypeName?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 事件ID
   * @format int64
   */
  eventId?: number | null;
  /** 事件编号 */
  eventNo?: string | null;
  /** 附件 */
  files?: RecordFile[] | null;
  /**
   * 变更前状态
   * @format int32
   */
  fromStatus?: number | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 备注 */
  remark?: string | null;
  /**
   * 变更后状态
   * @format int32
   */
  toStatus?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 事件信息新增/编辑传入参数 */
export interface OutfallEventInfoFO {
  /** 事件位置 */
  address?: string | null;
  /** 事件描述 */
  eventDesc?: string | null;
  /** 事件级别 */
  eventLevelCode?: string | null;
  /** 事件编号(为空时后端自动生成) */
  eventNo?: string | null;
  /**
   * 事件标题
   * @minLength 1
   */
  eventTitle: string;
  /**
   * 事件类型
   * @minLength 1
   */
  eventTypeCode: string;
  /** 现场照片等附件 */
  files?: RecordFile[] | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number | null;
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
  /** 入河排污口编码 */
  outfallCode?: string | null;
  /**
   * 入河排污口ID
   * @format int64
   */
  outfallId: number;
  /** 入河排污口名称 */
  outfallName?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 上报人姓名 */
  reportPerson?: string | null;
  /**
   * 上报人用户ID
   * @format int64
   */
  reportPersonId?: number | null;
  /**
   * 上报时间
   * @format date-time
   */
  reportTime?: string | null;
  /**
   * 来源ID(巡检记录ID或预警记录ID)
   * @format int64
   */
  sourceId?: number | null;
  /** 来源编号 */
  sourceNo?: string | null;
  /**
   * 事件来源(1-巡检上报,2-预警转事件,3-人工发起)
   * @format int32
   */
  sourceType?: number | null;
}

/** 事件信息分页查询对象 */
export interface OutfallEventInfoPQO {
  /** 事件位置 */
  address?: string | null;
  /** 审核意见 */
  auditOpinion?: string | null;
  /** 审核人姓名 */
  auditPerson?: string | null;
  /**
   * 审核人用户ID
   * @format int64
   */
  auditPersonId?: number | null;
  /**
   * 审核时间
   * @format date-time
   */
  auditTime?: string | null;
  /**
   * 上报开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /** 派遣说明 */
  dispatchOpinion?: string | null;
  /** 派遣人姓名 */
  dispatchPerson?: string | null;
  /**
   * 派遣人用户ID
   * @format int64
   */
  dispatchPersonId?: number | null;
  /**
   * 派遣时间
   * @format date-time
   */
  dispatchTime?: string | null;
  /**
   * 上报结束时间
   * @format date-time
   */
  endTime?: string | null;
  /** 事件描述 */
  eventDesc?: string | null;
  /** 事件级别(关联bs_event_level.code) */
  eventLevelCode?: string | null;
  /** 事件编号 */
  eventNo?: string | null;
  /** 事件标题 */
  eventTitle?: string | null;
  /** 事件标题(模糊查询) */
  eventTitleKeyword?: string | null;
  /** 事件类型(关联bs_event_type.code) */
  eventTypeCode?: string | null;
  /** 排序字段 */
  field?: string | null;
  /**
   * 流程完成时间
   * @format date-time
   */
  finishTime?: string | null;
  /**
   * 处理次数
   * @format int32
   */
  handleCount?: number | null;
  /** 处理结果描述 */
  handleDesc?: string | null;
  /** 处理结果审核意见 */
  handleResultOpinion?: string | null;
  /** 处理结果审核人姓名 */
  handleResultPerson?: string | null;
  /**
   * 处理结果审核人用户ID
   * @format int64
   */
  handleResultPersonId?: number | null;
  /**
   * 处理结果审核时间
   * @format date-time
   */
  handleResultTime?: string | null;
  /**
   * 处理时间
   * @format date-time
   */
  handleTime?: string | null;
  /** 处理人姓名 */
  handler?: string | null;
  /**
   * 处理人用户ID
   * @format int64
   */
  handlerId?: number | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 是否需要处理 */
  isNeedHandle?: boolean | null;
  /** 处理结果是否通过 */
  isPass?: boolean | null;
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
  /** 是否只查询当前登录人处理的事件 */
  onlyMyHandle?: boolean | null;
  /** 是否只查询当前登录人上报的事件 */
  onlyMyReport?: boolean | null;
  /** 是否只查询当前登录人的待办(待审核 / 待派遣 / 派遣给我的待处理 / 待审核处理结果) */
  onlyMyTodo?: boolean | null;
  /** 排序方向 */
  order?: string | null;
  /** 入河排污口编码 */
  outfallCode?: string | null;
  /**
   * 入河排污口ID
   * @format int64
   */
  outfallId?: number | null;
  /** 入河排污口名称 */
  outfallName?: string | null;
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
  /** 是否只查询与当前登录人相关的事件(我上报 / 我审核 / 我派遣 / 我处理 / 我审核处理结果) */
  relatedToMe?: boolean | null;
  /** 备注 */
  remark?: string | null;
  /** 上报人姓名 */
  reportPerson?: string | null;
  /**
   * 上报人用户ID
   * @format int64
   */
  reportPersonId?: number | null;
  /**
   * 上报时间
   * @format date-time
   */
  reportTime?: string | null;
  /**
   * 来源ID(巡检记录ID或预警记录ID)
   * @format int64
   */
  sourceId?: number | null;
  /** 来源编号 */
  sourceNo?: string | null;
  /**
   * 事件来源(1-巡检上报,2-预警转事件,3-人工发起)
   * @format int32
   */
  sourceType?: number | null;
  /**
   * 事件状态(1-待审核,2-待派遣,3-待处理,4-待审核处理结果,5-已完成,9-不需处理)
   * @format int32
   */
  status?: number | null;
  /** 事件状态集合(多状态 OR 查询;与 Status 互斥,同时传入时以 StatusList 为准) */
  statusList?: number[] | null;
  /** 是否只查询未结束的事件 */
  unFinish?: boolean | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 事件信息查询对象 */
export interface OutfallEventInfoQO {
  /** 事件位置 */
  address?: string | null;
  /** 审核意见 */
  auditOpinion?: string | null;
  /** 审核人姓名 */
  auditPerson?: string | null;
  /**
   * 审核人用户ID
   * @format int64
   */
  auditPersonId?: number | null;
  /**
   * 审核时间
   * @format date-time
   */
  auditTime?: string | null;
  /**
   * 上报开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /** 派遣说明 */
  dispatchOpinion?: string | null;
  /** 派遣人姓名 */
  dispatchPerson?: string | null;
  /**
   * 派遣人用户ID
   * @format int64
   */
  dispatchPersonId?: number | null;
  /**
   * 派遣时间
   * @format date-time
   */
  dispatchTime?: string | null;
  /**
   * 上报结束时间
   * @format date-time
   */
  endTime?: string | null;
  /** 事件描述 */
  eventDesc?: string | null;
  /** 事件级别(关联bs_event_level.code) */
  eventLevelCode?: string | null;
  /** 事件编号 */
  eventNo?: string | null;
  /** 事件标题 */
  eventTitle?: string | null;
  /** 事件标题(模糊查询) */
  eventTitleKeyword?: string | null;
  /** 事件类型(关联bs_event_type.code) */
  eventTypeCode?: string | null;
  /**
   * 流程完成时间
   * @format date-time
   */
  finishTime?: string | null;
  /**
   * 处理次数
   * @format int32
   */
  handleCount?: number | null;
  /** 处理结果描述 */
  handleDesc?: string | null;
  /** 处理结果审核意见 */
  handleResultOpinion?: string | null;
  /** 处理结果审核人姓名 */
  handleResultPerson?: string | null;
  /**
   * 处理结果审核人用户ID
   * @format int64
   */
  handleResultPersonId?: number | null;
  /**
   * 处理结果审核时间
   * @format date-time
   */
  handleResultTime?: string | null;
  /**
   * 处理时间
   * @format date-time
   */
  handleTime?: string | null;
  /** 处理人姓名 */
  handler?: string | null;
  /**
   * 处理人用户ID
   * @format int64
   */
  handlerId?: number | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 是否需要处理 */
  isNeedHandle?: boolean | null;
  /** 处理结果是否通过 */
  isPass?: boolean | null;
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
  /** 是否只查询当前登录人处理的事件 */
  onlyMyHandle?: boolean | null;
  /** 是否只查询当前登录人上报的事件 */
  onlyMyReport?: boolean | null;
  /** 是否只查询当前登录人的待办(待审核 / 待派遣 / 派遣给我的待处理 / 待审核处理结果) */
  onlyMyTodo?: boolean | null;
  /** 入河排污口编码 */
  outfallCode?: string | null;
  /**
   * 入河排污口ID
   * @format int64
   */
  outfallId?: number | null;
  /** 入河排污口名称 */
  outfallName?: string | null;
  /** 是否只查询与当前登录人相关的事件(我上报 / 我审核 / 我派遣 / 我处理 / 我审核处理结果) */
  relatedToMe?: boolean | null;
  /** 备注 */
  remark?: string | null;
  /** 上报人姓名 */
  reportPerson?: string | null;
  /**
   * 上报人用户ID
   * @format int64
   */
  reportPersonId?: number | null;
  /**
   * 上报时间
   * @format date-time
   */
  reportTime?: string | null;
  /**
   * 来源ID(巡检记录ID或预警记录ID)
   * @format int64
   */
  sourceId?: number | null;
  /** 来源编号 */
  sourceNo?: string | null;
  /**
   * 事件来源(1-巡检上报,2-预警转事件,3-人工发起)
   * @format int32
   */
  sourceType?: number | null;
  /**
   * 事件状态(1-待审核,2-待派遣,3-待处理,4-待审核处理结果,5-已完成,9-不需处理)
   * @format int32
   */
  status?: number | null;
  /** 事件状态集合(多状态 OR 查询;与 Status 互斥,同时传入时以 StatusList 为准) */
  statusList?: number[] | null;
  /** 是否只查询未结束的事件 */
  unFinish?: boolean | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 事件信息输出对象 */
export interface OutfallEventInfoVO {
  /** 事件位置 */
  address?: string | null;
  /** 审核意见 */
  auditOpinion?: string | null;
  /** 审核人姓名 */
  auditPerson?: string | null;
  /**
   * 审核人用户ID
   * @format int64
   */
  auditPersonId?: number | null;
  /**
   * 审核时间
   * @format date-time
   */
  auditTime?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /** 派遣说明 */
  dispatchOpinion?: string | null;
  /** 派遣人姓名 */
  dispatchPerson?: string | null;
  /**
   * 派遣人用户ID
   * @format int64
   */
  dispatchPersonId?: number | null;
  /**
   * 派遣时间
   * @format date-time
   */
  dispatchTime?: string | null;
  /** 事件描述 */
  eventDesc?: string | null;
  /** 事件级别(关联bs_event_level.code) */
  eventLevelCode?: string | null;
  /** 事件级别名称 */
  eventLevelName?: string | null;
  /** 事件编号 */
  eventNo?: string | null;
  /** 事件标题 */
  eventTitle?: string | null;
  /** 事件类型(关联bs_event_type.code) */
  eventTypeCode?: string | null;
  /** 事件类型名称 */
  eventTypeName?: string | null;
  /** 现场照片等附件 */
  files?: RecordFile[] | null;
  /**
   * 流程完成时间
   * @format date-time
   */
  finishTime?: string | null;
  /**
   * 处理次数
   * @format int32
   */
  handleCount?: number | null;
  /** 处理结果描述 */
  handleDesc?: string | null;
  /** 处理结果审核意见 */
  handleResultOpinion?: string | null;
  /** 处理结果审核人姓名 */
  handleResultPerson?: string | null;
  /**
   * 处理结果审核人用户ID
   * @format int64
   */
  handleResultPersonId?: number | null;
  /**
   * 处理结果审核时间
   * @format date-time
   */
  handleResultTime?: string | null;
  /**
   * 处理时间
   * @format date-time
   */
  handleTime?: string | null;
  /** 处理人姓名 */
  handler?: string | null;
  /**
   * 处理人用户ID
   * @format int64
   */
  handlerId?: number | null;
  /** 处理记录 */
  handles?: OutfallEventHandleVO[] | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 是否需要处理 */
  isNeedHandle?: boolean | null;
  /** 处理结果是否通过 */
  isPass?: boolean | null;
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
  /** 入河排污口编码 */
  outfallCode?: string | null;
  /**
   * 入河排污口ID
   * @format int64
   */
  outfallId?: number | null;
  /** 入河排污口名称 */
  outfallName?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 上报人姓名 */
  reportPerson?: string | null;
  /**
   * 上报人用户ID
   * @format int64
   */
  reportPersonId?: number | null;
  /**
   * 上报时间
   * @format date-time
   */
  reportTime?: string | null;
  /**
   * 来源ID(巡检记录ID或预警记录ID)
   * @format int64
   */
  sourceId?: number | null;
  /** 来源编号 */
  sourceNo?: string | null;
  /**
   * 事件来源(1-巡检上报,2-预警转事件,3-人工发起)
   * @format int32
   */
  sourceType?: number | null;
  /** 事件来源名称 */
  sourceTypeName?: string | null;
  /**
   * 事件状态(1-待审核,2-待派遣,3-待处理,4-待审核处理结果,5-已完成,9-不需处理)
   * @format int32
   */
  status?: number | null;
  /** 事件状态名称 */
  statusName?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 巡检计划新增/编辑传入参数 */
export interface OutfallInspectionPlanFO {
  /** 负责人姓名 */
  chargePerson?: string | null;
  /**
   * 负责人用户ID
   * @format int64
   */
  chargePersonId?: number | null;
  /**
   * 计划结束日期
   * @format date-time
   */
  endDate?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number | null;
  /**
   * 巡检类型
   * @minLength 1
   */
  inspectionTypeCode: string;
  /**
   * 排序号
   * @format int32
   */
  orderNumber?: number | null;
  /** 入河排污口编码 */
  outfallCode?: string | null;
  /**
   * 入河排污口ID
   * @format int64
   */
  outfallId: number;
  /** 入河排污口名称 */
  outfallName?: string | null;
  /**
   * 巡检周期类型(day-每天,week-每周,month-每月)
   * @minLength 1
   */
  periodType: string;
  /**
   * 巡检周期间隔
   * @format int32
   */
  periodValue?: number | null;
  /**
   * 计划名称
   * @minLength 1
   */
  planName: string;
  /** 计划编号(为空时后端自动生成) */
  planNo?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 计划开始日期
   * @format date-time
   */
  startDate: string;
  /**
   * 计划状态(1-启用,2-停用,不传时新增默认启用、编辑保持原状态)
   * @format int32
   */
  status?: number | null;
}

/** 巡检计划分页查询对象 */
export interface OutfallInspectionPlanPQO {
  /**
   * 查询开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /** 负责人姓名 */
  chargePerson?: string | null;
  /**
   * 负责人用户ID
   * @format int64
   */
  chargePersonId?: number | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 计划结束日期
   * @format date-time
   */
  endDate?: string | null;
  /**
   * 查询结束时间
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
  /** 巡检类型(关联data_dictionary.code) */
  inspectionTypeCode?: string | null;
  /**
   * 下次生成任务时间
   * @format date-time
   */
  nextTime?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 排序号
   * @format int32
   */
  orderNumber?: number | null;
  /** 入河排污口编码 */
  outfallCode?: string | null;
  /**
   * 入河排污口ID
   * @format int64
   */
  outfallId?: number | null;
  /** 入河排污口名称 */
  outfallName?: string | null;
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
  /** 巡检周期类型(day-每天,week-每周,month-每月) */
  periodType?: string | null;
  /**
   * 巡检周期间隔
   * @format int32
   */
  periodValue?: number | null;
  /** 计划名称 */
  planName?: string | null;
  /** 计划名称(模糊查询) */
  planNameKeyword?: string | null;
  /** 计划编号 */
  planNo?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 计划开始日期
   * @format date-time
   */
  startDate?: string | null;
  /**
   * 计划状态(1-启用,2-停用)
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

/** 巡检计划查询对象 */
export interface OutfallInspectionPlanQO {
  /**
   * 查询开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /** 负责人姓名 */
  chargePerson?: string | null;
  /**
   * 负责人用户ID
   * @format int64
   */
  chargePersonId?: number | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 计划结束日期
   * @format date-time
   */
  endDate?: string | null;
  /**
   * 查询结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 巡检类型(关联data_dictionary.code) */
  inspectionTypeCode?: string | null;
  /**
   * 下次生成任务时间
   * @format date-time
   */
  nextTime?: string | null;
  /**
   * 排序号
   * @format int32
   */
  orderNumber?: number | null;
  /** 入河排污口编码 */
  outfallCode?: string | null;
  /**
   * 入河排污口ID
   * @format int64
   */
  outfallId?: number | null;
  /** 入河排污口名称 */
  outfallName?: string | null;
  /** 巡检周期类型(day-每天,week-每周,month-每月) */
  periodType?: string | null;
  /**
   * 巡检周期间隔
   * @format int32
   */
  periodValue?: number | null;
  /** 计划名称 */
  planName?: string | null;
  /** 计划名称(模糊查询) */
  planNameKeyword?: string | null;
  /** 计划编号 */
  planNo?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 计划开始日期
   * @format date-time
   */
  startDate?: string | null;
  /**
   * 计划状态(1-启用,2-停用)
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

/** 巡检计划输出对象 */
export interface OutfallInspectionPlanVO {
  /** 负责人姓名 */
  chargePerson?: string | null;
  /**
   * 负责人用户ID
   * @format int64
   */
  chargePersonId?: number | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 计划结束日期
   * @format date-time
   */
  endDate?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 巡检类型(关联data_dictionary.code) */
  inspectionTypeCode?: string | null;
  /** 巡检类型名称 */
  inspectionTypeName?: string | null;
  /**
   * 下次生成任务时间
   * @format date-time
   */
  nextTime?: string | null;
  /**
   * 排序号
   * @format int32
   */
  orderNumber?: number | null;
  /** 入河排污口编码 */
  outfallCode?: string | null;
  /**
   * 入河排污口ID
   * @format int64
   */
  outfallId?: number | null;
  /** 入河排污口名称 */
  outfallName?: string | null;
  /** 巡检周期类型(day-每天,week-每周,month-每月) */
  periodType?: string | null;
  /**
   * 巡检周期间隔
   * @format int32
   */
  periodValue?: number | null;
  /** 计划名称 */
  planName?: string | null;
  /** 计划编号 */
  planNo?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 计划开始日期
   * @format date-time
   */
  startDate?: string | null;
  /**
   * 计划状态(1-启用,2-停用)
   * @format int32
   */
  status?: number | null;
  /** 计划状态名称 */
  statusName?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 巡检记录新增/编辑传入参数 */
export interface OutfallInspectionRecordFO {
  /** 异常情况描述 */
  abnormalDesc?: string | null;
  /** 签到地址 */
  checkInAddress?: string | null;
  /**
   * 签到纬度
   * @format double
   */
  checkInLatitude?: number | null;
  /**
   * 签到经度
   * @format double
   */
  checkInLongitude?: number | null;
  /**
   * 签到时间
   * @format date-time
   */
  checkInTime?: string | null;
  /** 签退地址 */
  checkOutAddress?: string | null;
  /**
   * 签退纬度
   * @format double
   */
  checkOutLatitude?: number | null;
  /**
   * 签退经度
   * @format double
   */
  checkOutLongitude?: number | null;
  /**
   * 签退时间
   * @format date-time
   */
  checkOutTime?: string | null;
  /**
   * 巡检时长(秒)
   * @format int64
   */
  duration?: number | null;
  /** 现场照片等附件 */
  files?: RecordFile[] | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number | null;
  /** 巡检人姓名 */
  inspectionPerson?: string | null;
  /**
   * 巡检人用户ID
   * @format int64
   */
  inspectionPersonId?: number | null;
  /**
   * 巡检时间
   * @format date-time
   */
  inspectionTime?: string | null;
  /** 巡检类型 */
  inspectionTypeCode?: string | null;
  /** 是否发现异常 */
  isAbnormal?: boolean | null;
  /** 入河排污口编码 */
  outfallCode?: string | null;
  /**
   * 入河排污口ID
   * @format int64
   */
  outfallId?: number | null;
  /** 入河排污口名称 */
  outfallName?: string | null;
  /**
   * 进度(1-巡检中,2-已完成)
   * @format int32
   */
  process?: number | null;
  /** 记录编号(为空时后端自动生成) */
  recordNo?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 巡检结论 */
  result?: string | null;
  /**
   * 巡检任务ID
   * @format int64
   */
  taskId: number;
  /** 巡检任务编号 */
  taskNo?: string | null;
}

/** 巡检记录分页查询对象 */
export interface OutfallInspectionRecordPQO {
  /** 异常情况描述 */
  abnormalDesc?: string | null;
  /**
   * 巡检开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /** 签到地址 */
  checkInAddress?: string | null;
  /**
   * 签到纬度
   * @format double
   */
  checkInLatitude?: number | null;
  /**
   * 签到经度
   * @format double
   */
  checkInLongitude?: number | null;
  /**
   * 签到时间
   * @format date-time
   */
  checkInTime?: string | null;
  /** 签退地址 */
  checkOutAddress?: string | null;
  /**
   * 签退纬度
   * @format double
   */
  checkOutLatitude?: number | null;
  /**
   * 签退经度
   * @format double
   */
  checkOutLongitude?: number | null;
  /**
   * 签退时间
   * @format date-time
   */
  checkOutTime?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 巡检时长(秒)
   * @format int64
   */
  duration?: number | null;
  /**
   * 巡检结束时间
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
  /** 巡检人姓名 */
  inspectionPerson?: string | null;
  /**
   * 巡检人用户ID
   * @format int64
   */
  inspectionPersonId?: number | null;
  /**
   * 巡检时间
   * @format date-time
   */
  inspectionTime?: string | null;
  /** 巡检类型(关联data_dictionary.code) */
  inspectionTypeCode?: string | null;
  /** 是否发现异常 */
  isAbnormal?: boolean | null;
  /** 是否已上报事件 */
  isUploadEvent?: boolean | null;
  /** 是否只查询当前登录人的记录 */
  onlyMyRecord?: boolean | null;
  /** 排序方向 */
  order?: string | null;
  /** 入河排污口编码 */
  outfallCode?: string | null;
  /**
   * 入河排污口ID
   * @format int64
   */
  outfallId?: number | null;
  /** 入河排污口名称 */
  outfallName?: string | null;
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
   * 进度(1-巡检中,2-已完成)
   * @format int32
   */
  process?: number | null;
  /** 记录编号 */
  recordNo?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 巡检结论 */
  result?: string | null;
  /**
   * 巡检任务ID
   * @format int64
   */
  taskId?: number | null;
  /** 巡检任务编号 */
  taskNo?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 巡检记录查询对象 */
export interface OutfallInspectionRecordQO {
  /** 异常情况描述 */
  abnormalDesc?: string | null;
  /**
   * 巡检开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /** 签到地址 */
  checkInAddress?: string | null;
  /**
   * 签到纬度
   * @format double
   */
  checkInLatitude?: number | null;
  /**
   * 签到经度
   * @format double
   */
  checkInLongitude?: number | null;
  /**
   * 签到时间
   * @format date-time
   */
  checkInTime?: string | null;
  /** 签退地址 */
  checkOutAddress?: string | null;
  /**
   * 签退纬度
   * @format double
   */
  checkOutLatitude?: number | null;
  /**
   * 签退经度
   * @format double
   */
  checkOutLongitude?: number | null;
  /**
   * 签退时间
   * @format date-time
   */
  checkOutTime?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 巡检时长(秒)
   * @format int64
   */
  duration?: number | null;
  /**
   * 巡检结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 巡检人姓名 */
  inspectionPerson?: string | null;
  /**
   * 巡检人用户ID
   * @format int64
   */
  inspectionPersonId?: number | null;
  /**
   * 巡检时间
   * @format date-time
   */
  inspectionTime?: string | null;
  /** 巡检类型(关联data_dictionary.code) */
  inspectionTypeCode?: string | null;
  /** 是否发现异常 */
  isAbnormal?: boolean | null;
  /** 是否已上报事件 */
  isUploadEvent?: boolean | null;
  /** 是否只查询当前登录人的记录 */
  onlyMyRecord?: boolean | null;
  /** 入河排污口编码 */
  outfallCode?: string | null;
  /**
   * 入河排污口ID
   * @format int64
   */
  outfallId?: number | null;
  /** 入河排污口名称 */
  outfallName?: string | null;
  /**
   * 进度(1-巡检中,2-已完成)
   * @format int32
   */
  process?: number | null;
  /** 记录编号 */
  recordNo?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 巡检结论 */
  result?: string | null;
  /**
   * 巡检任务ID
   * @format int64
   */
  taskId?: number | null;
  /** 巡检任务编号 */
  taskNo?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 巡检记录输出对象 */
export interface OutfallInspectionRecordVO {
  /** 异常情况描述 */
  abnormalDesc?: string | null;
  /** 签到地址 */
  checkInAddress?: string | null;
  /**
   * 签到纬度
   * @format double
   */
  checkInLatitude?: number | null;
  /**
   * 签到经度
   * @format double
   */
  checkInLongitude?: number | null;
  /**
   * 签到时间
   * @format date-time
   */
  checkInTime?: string | null;
  /** 签退地址 */
  checkOutAddress?: string | null;
  /**
   * 签退纬度
   * @format double
   */
  checkOutLatitude?: number | null;
  /**
   * 签退经度
   * @format double
   */
  checkOutLongitude?: number | null;
  /**
   * 签退时间
   * @format date-time
   */
  checkOutTime?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 巡检时长(秒)
   * @format int64
   */
  duration?: number | null;
  /** 现场照片等附件 */
  files?: RecordFile[] | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 巡检人姓名 */
  inspectionPerson?: string | null;
  /**
   * 巡检人用户ID
   * @format int64
   */
  inspectionPersonId?: number | null;
  /**
   * 巡检时间
   * @format date-time
   */
  inspectionTime?: string | null;
  /** 巡检类型(关联data_dictionary.code) */
  inspectionTypeCode?: string | null;
  /** 巡检类型名称 */
  inspectionTypeName?: string | null;
  /** 是否发现异常 */
  isAbnormal?: boolean | null;
  /** 是否已上报事件 */
  isUploadEvent?: boolean | null;
  /** 入河排污口编码 */
  outfallCode?: string | null;
  /**
   * 入河排污口ID
   * @format int64
   */
  outfallId?: number | null;
  /** 入河排污口名称 */
  outfallName?: string | null;
  /**
   * 进度(1-巡检中,2-已完成)
   * @format int32
   */
  process?: number | null;
  /** 进度名称 */
  processName?: string | null;
  /** 记录编号 */
  recordNo?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 巡检结论 */
  result?: string | null;
  /**
   * 巡检任务ID
   * @format int64
   */
  taskId?: number | null;
  /** 巡检任务编号 */
  taskNo?: string | null;
  /** 巡检轨迹 */
  tracks?: OutfallInspectionTrack[] | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 巡检任务新增/编辑传入参数 */
export interface OutfallInspectionTaskFO {
  /** 巡检负责人姓名 */
  chargePerson?: string | null;
  /**
   * 巡检负责人用户ID
   * @format int64
   */
  chargePersonId?: number | null;
  /**
   * 计划结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number | null;
  /**
   * 巡检类型
   * @minLength 1
   */
  inspectionTypeCode: string;
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
  /** 入河排污口地址 */
  outfallAddress?: string | null;
  /** 入河排污口编码 */
  outfallCode?: string | null;
  /**
   * 入河排污口ID
   * @format int64
   */
  outfallId: number;
  /** 入河排污口名称 */
  outfallName?: string | null;
  /**
   * 巡检计划ID,手动新增时不传
   * @format int64
   */
  planId?: number | null;
  /** 巡检计划编号 */
  planNo?: string | null;
  /**
   * 计划巡检时间
   * @format date-time
   */
  planTime?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 计划开始时间
   * @format date-time
   */
  startTime?: string | null;
  /**
   * 任务名称
   * @minLength 1
   */
  taskName: string;
  /** 任务编号(为空时后端自动生成) */
  taskNo?: string | null;
  /**
   * 任务来源(1-计划生成,2-手动创建)
   * @format int32
   */
  taskSource?: number | null;
}

/** 巡检任务分页查询对象 */
export interface OutfallInspectionTaskPQO {
  /**
   * 实际结束时间
   * @format date-time
   */
  actualEndTime?: string | null;
  /**
   * 实际开始时间
   * @format date-time
   */
  actualStartTime?: string | null;
  /**
   * 计划巡检开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /** 巡检负责人姓名 */
  chargePerson?: string | null;
  /**
   * 巡检负责人用户ID
   * @format int64
   */
  chargePersonId?: number | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 计划巡检结束时间
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
  /** 巡检类型(关联data_dictionary.code) */
  inspectionTypeCode?: string | null;
  /** 是否已上报事件 */
  isUploadEvent?: boolean | null;
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
  /** 是否只查询当前登录人的任务 */
  onlyMyTask?: boolean | null;
  /** 排序方向 */
  order?: string | null;
  /** 入河排污口地址 */
  outfallAddress?: string | null;
  /** 入河排污口编码 */
  outfallCode?: string | null;
  /**
   * 入河排污口ID
   * @format int64
   */
  outfallId?: number | null;
  /** 入河排污口名称 */
  outfallName?: string | null;
  /** 是否查询逾期任务(计划结束时间已过且未完成) */
  overdue?: boolean | null;
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
   * 巡检计划ID(临时任务为空)
   * @format int64
   */
  planId?: number | null;
  /** 巡检计划编号 */
  planNo?: string | null;
  /**
   * 计划巡检时间
   * @format date-time
   */
  planTime?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 计划开始时间
   * @format date-time
   */
  startTime?: string | null;
  /**
   * 任务状态(1-待巡检,2-巡检中,3-已完成,4-已逾期,5-已取消)
   * @format int32
   */
  status?: number | null;
  /** 任务名称 */
  taskName?: string | null;
  /** 任务名称(模糊查询) */
  taskNameKeyword?: string | null;
  /** 任务编号 */
  taskNo?: string | null;
  /**
   * 任务来源(1-计划生成,2-手动创建)
   * @format int32
   */
  taskSource?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 巡检任务查询对象 */
export interface OutfallInspectionTaskQO {
  /**
   * 实际结束时间
   * @format date-time
   */
  actualEndTime?: string | null;
  /**
   * 实际开始时间
   * @format date-time
   */
  actualStartTime?: string | null;
  /**
   * 计划巡检开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /** 巡检负责人姓名 */
  chargePerson?: string | null;
  /**
   * 巡检负责人用户ID
   * @format int64
   */
  chargePersonId?: number | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 计划巡检结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 巡检类型(关联data_dictionary.code) */
  inspectionTypeCode?: string | null;
  /** 是否已上报事件 */
  isUploadEvent?: boolean | null;
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
  /** 是否只查询当前登录人的任务 */
  onlyMyTask?: boolean | null;
  /** 入河排污口地址 */
  outfallAddress?: string | null;
  /** 入河排污口编码 */
  outfallCode?: string | null;
  /**
   * 入河排污口ID
   * @format int64
   */
  outfallId?: number | null;
  /** 入河排污口名称 */
  outfallName?: string | null;
  /** 是否查询逾期任务(计划结束时间已过且未完成) */
  overdue?: boolean | null;
  /**
   * 巡检计划ID(临时任务为空)
   * @format int64
   */
  planId?: number | null;
  /** 巡检计划编号 */
  planNo?: string | null;
  /**
   * 计划巡检时间
   * @format date-time
   */
  planTime?: string | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 计划开始时间
   * @format date-time
   */
  startTime?: string | null;
  /**
   * 任务状态(1-待巡检,2-巡检中,3-已完成,4-已逾期,5-已取消)
   * @format int32
   */
  status?: number | null;
  /** 任务名称 */
  taskName?: string | null;
  /** 任务名称(模糊查询) */
  taskNameKeyword?: string | null;
  /** 任务编号 */
  taskNo?: string | null;
  /**
   * 任务来源(1-计划生成,2-手动创建)
   * @format int32
   */
  taskSource?: number | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 巡检任务输出对象 */
export interface OutfallInspectionTaskVO {
  /**
   * 实际结束时间
   * @format date-time
   */
  actualEndTime?: string | null;
  /**
   * 实际开始时间
   * @format date-time
   */
  actualStartTime?: string | null;
  /** 巡检负责人姓名 */
  chargePerson?: string | null;
  /**
   * 巡检负责人用户ID
   * @format int64
   */
  chargePersonId?: number | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 计划结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number;
  /** 巡检类型(关联data_dictionary.code) */
  inspectionTypeCode?: string | null;
  /** 巡检类型名称 */
  inspectionTypeName?: string | null;
  /** 是否已上报事件 */
  isUploadEvent?: boolean | null;
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
  /** 入河排污口地址 */
  outfallAddress?: string | null;
  /** 入河排污口编码 */
  outfallCode?: string | null;
  /**
   * 入河排污口ID
   * @format int64
   */
  outfallId?: number | null;
  /** 入河排污口名称 */
  outfallName?: string | null;
  /**
   * 巡检计划ID(临时任务为空)
   * @format int64
   */
  planId?: number | null;
  /** 巡检计划编号 */
  planNo?: string | null;
  /**
   * 计划巡检时间
   * @format date-time
   */
  planTime?: string | null;
  /**
   * 巡检记录ID
   * @format int64
   */
  recordId?: number | null;
  /** 巡检记录编号 */
  recordNo?: string | null;
  /**
   * 巡检记录进度(1-巡检中,2-已完成)
   * @format int32
   */
  recordProcess?: number | null;
  /** 备注 */
  remark?: string | null;
  /** 任务状态名称 */
  resultStatusName?: string | null;
  /**
   * 计划开始时间
   * @format date-time
   */
  startTime?: string | null;
  /**
   * 任务状态(1-待巡检,2-巡检中,3-已完成,4-已逾期,5-已取消)
   * @format int32
   */
  status?: number | null;
  /** 任务名称 */
  taskName?: string | null;
  /** 任务编号 */
  taskNo?: string | null;
  /**
   * 任务来源(1-计划生成,2-手动创建)
   * @format int32
   */
  taskSource?: number | null;
  /** 任务来源名称 */
  taskSourceName?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 入河排污口巡检轨迹 */
export interface OutfallInspectionTrack {
  /** 定位地址 */
  address?: string | null;
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
   * 巡检记录ID
   * @format int64
   */
  recordId?: number | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 速度(米/秒)
   * @format double
   */
  speed?: number | null;
  /**
   * 巡检任务ID
   * @format int64
   */
  taskId?: number | null;
  /**
   * 定位时间
   * @format date-time
   */
  trackTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 巡检轨迹新增传入参数 */
export interface OutfallInspectionTrackFO {
  /** 定位地址 */
  address?: string | null;
  /**
   * 主键ID
   * @format int64
   */
  id?: number | null;
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
   * 巡检记录ID
   * @format int64
   */
  recordId: number;
  /** 备注 */
  remark?: string | null;
  /**
   * 速度(米/秒)
   * @format double
   */
  speed?: number | null;
  /**
   * 巡检任务ID
   * @format int64
   */
  taskId?: number | null;
  /**
   * 定位时间
   * @format date-time
   */
  trackTime?: string | null;
}

/** 巡检轨迹分页查询对象 */
export interface OutfallInspectionTrackPQO {
  /** 定位地址 */
  address?: string | null;
  /**
   * 定位开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 定位结束时间
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
   * 巡检记录ID
   * @format int64
   */
  recordId?: number | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 速度(米/秒)
   * @format double
   */
  speed?: number | null;
  /**
   * 巡检任务ID
   * @format int64
   */
  taskId?: number | null;
  /**
   * 定位时间
   * @format date-time
   */
  trackTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 巡检轨迹查询对象 */
export interface OutfallInspectionTrackQO {
  /** 定位地址 */
  address?: string | null;
  /**
   * 定位开始时间
   * @format date-time
   */
  beginTime?: string | null;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: string | null;
  /** 创建人 */
  createdPerson?: string | null;
  /**
   * 定位结束时间
   * @format date-time
   */
  endTime?: string | null;
  /**
   * 主键ID
   * @format int64
   */
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
   * 巡检记录ID
   * @format int64
   */
  recordId?: number | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 速度(米/秒)
   * @format double
   */
  speed?: number | null;
  /**
   * 巡检任务ID
   * @format int64
   */
  taskId?: number | null;
  /**
   * 定位时间
   * @format date-time
   */
  trackTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

/** 巡检轨迹输出对象 */
export interface OutfallInspectionTrackVO {
  /** 定位地址 */
  address?: string | null;
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
   * 巡检记录ID
   * @format int64
   */
  recordId?: number | null;
  /** 备注 */
  remark?: string | null;
  /**
   * 速度(米/秒)
   * @format double
   */
  speed?: number | null;
  /**
   * 巡检任务ID
   * @format int64
   */
  taskId?: number | null;
  /**
   * 定位时间
   * @format date-time
   */
  trackTime?: string | null;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: string | null;
  /** 更新人 */
  updatedPerson?: string | null;
}

export interface OutfallMapVO {
  /** 地址 */
  address?: string | null;
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 入河方式 */
  dischargeMethodCode?: string | null;
  /** 入河方式 */
  dischargeMethodName?: string | null;
  /** 排放方式 */
  emissionMethodCode?: string | null;
  /** 排放方式 */
  emissionMethodName?: string | null;
  /**
   * 设备参数总数
   * @format int32
   */
  equipmentParamCount?: number;
  /**
   * 在线设备参数数量
   * @format int32
   */
  equipmentParamOnlineCount?: number;
  /** @format int64 */
  id?: number;
  /** 是否删除 */
  isDelete?: boolean | null;
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
  /** 主管部门 */
  manageOrg?: string | null;
  /** 联系方式 */
  manageOrgLxfs?: string | null;
  /** 名称 */
  name?: string | null;
  /**
   * 排序号
   * @format int32
   */
  orderNumber?: number;
  /** 排口类别 */
  outletCategoryName?: string | null;
  /** 排口类型 */
  outletTypeName?: string | null;
  /**
   * 预警级别
   * @format int32
   */
  prealarmLevel?: number;
  /** 备注 */
  remark?: string | null;
  /** 所在河流 */
  riverCode?: string | null;
  /** 所属河流 */
  riverName?: string | null;
  /** 测站编码 */
  technicsCode?: string | null;
  /**
   * 测站id
   * @format int64
   */
  technicsId?: number | null;
  /** 测站名称 */
  technicsName?: string | null;
  /** 排口类型 */
  typeCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 乡镇 */
  villageCode?: string | null;
  /** 所属街镇 */
  villageName?: string | null;
  /** 整治情况 */
  zzqk?: string | null;
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

export interface PrEditMulByEpnFO {
  /**
   * 预警上限
   * @format double
   */
  highValue1?: number | null;
  /**
   * 报警上限
   * @format double
   */
  highValue2?: number | null;
  /** 预警是否启用 */
  isEnable1?: boolean | null;
  /** 报警是否启用 */
  isEnable2?: boolean | null;
  /**
   * 预警下限
   * @format double
   */
  lowerValue1?: number | null;
  /**
   * 报警下限
   * @format double
   */
  lowerValue2?: number | null;
  /** 预警是否发送短信 */
  sendPhoneMsg1?: boolean | null;
  /** 报警是否发送短信 */
  sendPhoneMsg2?: boolean | null;
  /**
   * 监测因子名称
   * @minLength 1
   */
  equipmentParamName: string;
}

export interface PrEditMulFO {
  list?: PrealarmRuleFO[] | null;
}

export interface PrealarmRecordFO {
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
  /** 结束原因 */
  endReason?: string | null;
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
  /**
   * 上限
   * @format double
   */
  highValue?: number | null;
  /** @format int64 */
  id?: number;
  /** 是否推送短信 */
  isPush?: boolean | null;
  /** 是否应用内推送 */
  isPushApp?: boolean | null;
  /**
   * 预警1,报警2
   * @format int32
   */
  level?: number | null;
  /**
   * 下限
   * @format double
   */
  lowerValue?: number | null;
  /** 单位 */
  measureUnit?: string | null;
  /** 预警信息 */
  readonly prealarmInfo?: string | null;
  /**
   * 关联预警规则
   * @format int64
   */
  prealarmRuleId?: number;
  /** 预警信息 */
  readonly prealarmTitle?: string | null;
  /**
   * 排口id
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 排口名称 */
  riverSewageOutfallName?: string | null;
  /** 是否发送短信 */
  sendPhoneMsg?: boolean | null;
  /**
   * 预警开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 测站id
   * @format int64
   */
  technicsId?: number | null;
  /** 测站名称 */
  technicsName?: string | null;
  /**
   * 预警次数
   * @format int32
   */
  times?: number | null;
  /**
   * 预警刷新时间
   * @format date-time
   */
  updateTime?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface PrealarmRecordPQO {
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
  /** 结束原因 */
  endReason?: string | null;
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
  /** 排序字段 */
  field?: string | null;
  /**
   * 上限
   * @format double
   */
  highValue?: number | null;
  /** @format int64 */
  id?: number;
  /** 是否推送短信 */
  isPush?: boolean | null;
  /** 是否应用内推送 */
  isPushApp?: boolean | null;
  /**
   * 预警1,报警2
   * @format int32
   */
  level?: number | null;
  /**
   * 下限
   * @format double
   */
  lowerValue?: number | null;
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
  readonly prealarmInfo?: string | null;
  /**
   * 关联预警规则
   * @format int64
   */
  prealarmRuleId?: number;
  /** 预警信息 */
  readonly prealarmTitle?: string | null;
  /**
   * 排口id
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 排口名称 */
  riverSewageOutfallName?: string | null;
  /** 是否发送短信 */
  sendPhoneMsg?: boolean | null;
  /**
   * 预警开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  startTimeEt?: string | null;
  /**
   * 开始时间
   * @format date-time
   */
  startTimeSt?: string | null;
  /**
   * 测站id
   * @format int64
   */
  technicsId?: number | null;
  /** 测站名称 */
  technicsName?: string | null;
  /**
   * 预警次数
   * @format int32
   */
  times?: number | null;
  /**
   * 预警刷新时间
   * @format date-time
   */
  updateTime?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface PrealarmRecordQO {
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
  /** 结束原因 */
  endReason?: string | null;
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
  /**
   * 上限
   * @format double
   */
  highValue?: number | null;
  /** @format int64 */
  id?: number;
  /** 是否推送短信 */
  isPush?: boolean | null;
  /** 是否应用内推送 */
  isPushApp?: boolean | null;
  /**
   * 预警1,报警2
   * @format int32
   */
  level?: number | null;
  /**
   * 下限
   * @format double
   */
  lowerValue?: number | null;
  /** 单位 */
  measureUnit?: string | null;
  /** 预警信息 */
  readonly prealarmInfo?: string | null;
  /**
   * 关联预警规则
   * @format int64
   */
  prealarmRuleId?: number;
  /** 预警信息 */
  readonly prealarmTitle?: string | null;
  /**
   * 排口id
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 排口名称 */
  riverSewageOutfallName?: string | null;
  /** 是否发送短信 */
  sendPhoneMsg?: boolean | null;
  /**
   * 预警开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  startTimeEt?: string | null;
  /**
   * 开始时间
   * @format date-time
   */
  startTimeSt?: string | null;
  /**
   * 测站id
   * @format int64
   */
  technicsId?: number | null;
  /** 测站名称 */
  technicsName?: string | null;
  /**
   * 预警次数
   * @format int32
   */
  times?: number | null;
  /**
   * 预警刷新时间
   * @format date-time
   */
  updateTime?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface PrealarmRecordVO {
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
  /** 结束原因 */
  endReason?: string | null;
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
  /**
   * 上限
   * @format double
   */
  highValue?: number | null;
  /** @format int64 */
  id?: number;
  /** 是否推送短信 */
  isPush?: boolean | null;
  /** 是否应用内推送 */
  isPushApp?: boolean | null;
  /**
   * 预警1,报警2
   * @format int32
   */
  level?: number | null;
  /**
   * 下限
   * @format double
   */
  lowerValue?: number | null;
  /** 单位 */
  measureUnit?: string | null;
  /** 预警信息 */
  readonly prealarmInfo?: string | null;
  /**
   * 关联预警规则
   * @format int64
   */
  prealarmRuleId?: number;
  /** 预警信息 */
  readonly prealarmTitle?: string | null;
  /**
   * 排口id
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 排口名称 */
  riverSewageOutfallName?: string | null;
  /** 是否发送短信 */
  sendPhoneMsg?: boolean | null;
  /**
   * 预警开始时间
   * @format date-time
   */
  startTime?: string;
  /**
   * 测站id
   * @format int64
   */
  technicsId?: number | null;
  /** 测站名称 */
  technicsName?: string | null;
  /**
   * 预警次数
   * @format int32
   */
  times?: number | null;
  /**
   * 预警刷新时间
   * @format date-time
   */
  updateTime?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface PrealarmRuleFO {
  /**
   * 监测指标id
   * @format int64
   */
  equipmentParamId: number;
  /**
   * 上限
   * @format double
   */
  highValue?: number | null;
  /** @format int64 */
  id?: number | null;
  /**
   * Desc:是否启用
   * Default:1
   * Nullable:True
   */
  isEnable?: boolean | null;
  /**
   * 级别
   * @format int32
   */
  level: number;
  /**
   * 下限
   * @format double
   */
  lowerValue?: number | null;
  /**
   * Desc:是否发送短信
   * Default:1
   * Nullable:True
   */
  sendPhoneMsg?: boolean | null;
}

export interface PrealarmRuleVO {
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 设备名称 */
  equipmentName?: string | null;
  /**
   * 监测指标id
   * @format int64
   */
  equipmentParamId?: number | null;
  /** 监测指标名称 */
  equipmentParamName?: string | null;
  /**
   * 上限
   * @format double
   */
  highValue?: number | null;
  /** @format int64 */
  id?: number;
  /**
   * Desc:是否启用
   * Default:1
   * Nullable:True
   */
  isEnable?: boolean | null;
  /**
   * 级别
   * @format int32
   */
  level?: number | null;
  /**
   * 下限
   * @format double
   */
  lowerValue?: number | null;
  /**
   * Desc:是否发送短信
   * Default:1
   * Nullable:True
   */
  sendPhoneMsg?: boolean | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
}

export interface PrealarmStQO {
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
   * 等级
   * @format int32
   */
  level?: number | null;
  /**
   * 河道排污口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
}

export interface PrealarmStVO {
  /**
   * 数量
   * @format double
   */
  count?: number | null;
  /**
   * 持续时间(秒)
   * @format double
   */
  duration?: number | null;
  /** 时间 */
  label?: string | null;
}

export interface PreviewUrlQO {
  /**
   * 摄像头标识
   * @minLength 1
   */
  cameraIndexCode: string;
  /** 网络1：内网，2：外网 */
  inout?: string | null;
  /**
   * 码流类型（0:主码流，1:子码流，2:第三码流，参数不填，默认为主码流）
   * @format int32
   */
  streamType?: number | null;
}

export interface RealTimeReportQO {
  /**
   * 排口id
   * @format int64
   */
  outfallId?: number | null;
  /** 所在河流 */
  riverCode?: string | null;
  /**
   * 监测点id
   * @format int64
   */
  technicsId?: number | null;
  /** 乡镇 */
  villageCode?: string | null;
}

export interface RealTimeReportVO {
  /**
   * 氨氮
   * @format double
   */
  nh3n?: number | null;
  nh3nParam?: EquipmentParamVO;
  /**
   * cod
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
   * PH
   * @format double
   */
  ph?: number | null;
  phParam?: EquipmentParamVO;
  /**
   * 入河排污口ID
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 入河排污口名称 */
  riverSewageOutfallName?: string | null;
  /**
   * 监测点id
   * @format int64
   */
  technicsId?: number | null;
  /** 监测点名称 */
  technicsName?: string | null;
  /**
   * 总氮
   * @format double
   */
  tn?: number | null;
  tnParam?: EquipmentParamVO;
  /**
   * 总磷
   * @format double
   */
  tp?: number | null;
  tpParam?: EquipmentParamVO;
}

/** 重算传输率请求对象 */
export interface RecalcRateFO {
  /**
   * 开始日期(含)
   * @format date-time
   */
  beginDate: string;
  /**
   * 计算来源(1-定时任务,2-设备补传重算,3-停机变更重算,4-手动重算)
   * @format int32
   */
  calcSource?: number | null;
  /**
   * 结束日期(含)
   * @format date-time
   */
  endDate: string;
  /**
   * 监测因子ID
   * @format int64
   */
  equipmentParamId: number;
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

export interface ReportPrealarmQO {
  /**
   * Id
   * @format int64
   */
  id?: number | null;
  /** 用户id */
  userIds?: number[] | null;
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

export interface RiverSewageOutfallFO {
  /** 地址 */
  address?: string | null;
  /**
   * 编码
   * @minLength 1
   */
  code: string;
  /** 入河方式 */
  dischargeMethodCode?: string | null;
  /** 排放方式 */
  emissionMethodCode?: string | null;
  /** @format int64 */
  id?: number | null;
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
  /** 主管部门 */
  manageOrg?: string | null;
  /** 联系方式 */
  manageOrgLxfs?: string | null;
  /**
   * 名称
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
  /** 所在河流 */
  riverCode?: string | null;
  /** 排口类型 */
  typeCode?: string | null;
  /** 乡镇 */
  villageCode?: string | null;
  /** 整治情况 */
  zzqk?: string | null;
}

export interface RiverSewageOutfallPQO {
  /** 地址 */
  address?: string | null;
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 入河方式 */
  dischargeMethodCode?: string | null;
  /** 排放方式 */
  emissionMethodCode?: string | null;
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否删除 */
  isDelete?: boolean | null;
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
  /** 主管部门 */
  manageOrg?: string | null;
  /** 联系方式 */
  manageOrgLxfs?: string | null;
  /** 名称 */
  name?: string | null;
  /** 排序方向 */
  order?: string | null;
  /**
   * 排序号
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
  /** 备注 */
  remark?: string | null;
  /** 所在河流 */
  riverCode?: string | null;
  /** 排口类型 */
  typeCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 乡镇 */
  villageCode?: string | null;
  /** 整治情况 */
  zzqk?: string | null;
}

export interface RiverSewageOutfallQO {
  /** 地址 */
  address?: string | null;
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 入河方式 */
  dischargeMethodCode?: string | null;
  /** 排放方式 */
  emissionMethodCode?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否删除 */
  isDelete?: boolean | null;
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
  /** 主管部门 */
  manageOrg?: string | null;
  /** 联系方式 */
  manageOrgLxfs?: string | null;
  /** 名称 */
  name?: string | null;
  /**
   * 排序号
   * @format int32
   */
  orderNumber?: number;
  /** 备注 */
  remark?: string | null;
  /** 所在河流 */
  riverCode?: string | null;
  /** 排口类型 */
  typeCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 乡镇 */
  villageCode?: string | null;
  /** 整治情况 */
  zzqk?: string | null;
}

export interface RiverSewageOutfallVO {
  /** 地址 */
  address?: string | null;
  /** 编码 */
  code?: string | null;
  /** @format date-time */
  createdAt?: string | null;
  createdPerson?: string | null;
  /** 入河方式 */
  dischargeMethodCode?: string | null;
  /** 入河方式 */
  dischargeMethodName?: string | null;
  /** 排放方式 */
  emissionMethodCode?: string | null;
  /** 排放方式 */
  emissionMethodName?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否删除 */
  isDelete?: boolean | null;
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
  /** 主管部门 */
  manageOrg?: string | null;
  /** 联系方式 */
  manageOrgLxfs?: string | null;
  /** 名称 */
  name?: string | null;
  /**
   * 排序号
   * @format int32
   */
  orderNumber?: number;
  /** 排口类别 */
  outletCategoryName?: string | null;
  /** 排口类型 */
  outletTypeName?: string | null;
  /** 备注 */
  remark?: string | null;
  /** 所在河流 */
  riverCode?: string | null;
  /** 所属河流 */
  riverName?: string | null;
  /** 排口类型 */
  typeCode?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedPerson?: string | null;
  /** 乡镇 */
  villageCode?: string | null;
  /** 所属街镇 */
  villageName?: string | null;
  /** 整治情况 */
  zzqk?: string | null;
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
export interface SqlSugarPagedListBsEventLevelVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: BsEventLevelVO[] | null;
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
export interface SqlSugarPagedListBsEventTypeVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: BsEventTypeVO[] | null;
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
export interface SqlSugarPagedListBsInformationVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: BsInformationVO[] | null;
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
export interface SqlSugarPagedListBsNewsVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: BsNewsVO[] | null;
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
export interface SqlSugarPagedListBsOutletCategoryVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: BsOutletCategoryVO[] | null;
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
export interface SqlSugarPagedListBsOutletTypeVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: BsOutletTypeVO[] | null;
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
export interface SqlSugarPagedListBsRiverVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: BsRiverVO[] | null;
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
export interface SqlSugarPagedListBsVillageVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: BsVillageVO[] | null;
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
export interface SqlSugarPagedListEquipmentParamDailyRateVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EquipmentParamDailyRateVO[] | null;
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
export interface SqlSugarPagedListEquipmentParamInfoVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EquipmentParamInfoVO[] | null;
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
export interface SqlSugarPagedListEquipmentParamRdVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EquipmentParamRdVO[] | null;
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
export interface SqlSugarPagedListEquipmentParamStopPeriodVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: EquipmentParamStopPeriodVO[] | null;
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
export interface SqlSugarPagedListHjCommandRecordVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: HjCommandRecordVO[] | null;
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
export interface SqlSugarPagedListHjmessageLogVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: HjmessageLogVO[] | null;
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
export interface SqlSugarPagedListMsgnoticeVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: MsgnoticeVO[] | null;
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
export interface SqlSugarPagedListMtDataFixLogVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: MtDataFixLogVO[] | null;
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
export interface SqlSugarPagedListMtEditFlagLogVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: MtEditFlagLogVO[] | null;
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
export interface SqlSugarPagedListOutfallEventHandleVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: OutfallEventHandleVO[] | null;
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
export interface SqlSugarPagedListOutfallEventInfoVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: OutfallEventInfoVO[] | null;
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
export interface SqlSugarPagedListOutfallInspectionPlanVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: OutfallInspectionPlanVO[] | null;
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
export interface SqlSugarPagedListOutfallInspectionRecordVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: OutfallInspectionRecordVO[] | null;
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
export interface SqlSugarPagedListOutfallInspectionTaskVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: OutfallInspectionTaskVO[] | null;
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
export interface SqlSugarPagedListOutfallInspectionTrackVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: OutfallInspectionTrackVO[] | null;
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
export interface SqlSugarPagedListRiverSewageOutfallVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: RiverSewageOutfallVO[] | null;
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

export interface StateStVO {
  /**
   * 报警数量
   * @format int32
   */
  alarm?: number;
  /**
   * 离线数量
   * @format int32
   */
  offline?: number;
  /**
   * 在线数量
   * @format int32
   */
  online?: number;
  /**
   * 预警数量
   * @format int32
   */
  prealarm?: number;
}

export interface TechnicsFO {
  /** 地址 */
  address?: string | null;
  /**
   * 编码
   * @minLength 1
   */
  code: string;
  /** @format int64 */
  id?: number | null;
  /** 是否启用监测 */
  isMonitor?: boolean | null;
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
  /** 备注 */
  remark?: string | null;
  /**
   * 所属入河排污口
   * @format int64
   */
  riverSewageOutfallId: number;
  /** 水站类型 */
  stationTypeCode?: string | null;
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
  /** 排序字段 */
  field?: string | null;
  /** @format int64 */
  id?: number;
  /** 是否删除 */
  isDelete?: boolean | null;
  /** 是否启用监测 */
  isMonitor?: boolean | null;
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
   * 所属入河排污口
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 水站类型 */
  stationTypeCode?: string | null;
  /**
   * 电站id
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
  /**
   * 水质等级
   * @format int32
   */
  waterLevelValue?: number | null;
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
  /** @format int64 */
  id?: number;
  /** 是否删除 */
  isDelete?: boolean | null;
  /** 是否启用监测 */
  isMonitor?: boolean | null;
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
  /** 备注 */
  remark?: string | null;
  /**
   * 所属入河排污口
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 水站类型 */
  stationTypeCode?: string | null;
  /**
   * 电站id
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
  /**
   * 水质等级
   * @format int32
   */
  waterLevelValue?: number | null;
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
  /** @format int64 */
  id?: number;
  /** 是否删除 */
  isDelete?: boolean | null;
  /** 是否启用监测 */
  isMonitor?: boolean | null;
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
  /** 备注 */
  remark?: string | null;
  /**
   * 所属入河排污口
   * @format int64
   */
  riverSewageOutfallId?: number | null;
  /** 水站类型 */
  stationTypeCode?: string | null;
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
   * 水质等级
   * @format int32
   */
  waterLevelValue?: number | null;
}

export interface TreeNode {
  children?: TreeNode[] | null;
  /** @format int64 */
  id?: number;
  name?: string | null;
}

export interface UserAssignOutfallQO {
  outfallIds: number[];
  /** @format int64 */
  userId: number;
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
