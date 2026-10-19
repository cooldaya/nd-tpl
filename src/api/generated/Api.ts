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

import {
  AdminResetPwdQO,
  ApiAppVersionLastVersionPostData,
  ApiAppVersionListPostData,
  ApiAppVersionPagedListPostData,
  ApiAppVersionShowPostData,
  ApiAppVersionUploadApkPostData,
  ApiAppVersionUploadApkPostPayload,
  ApiAuthCheckloginPostData,
  ApiAuthLoginPostData,
  ApiAuthLoginSsoGetData,
  ApiAuthLoginSsoGetParams,
  ApiAuthLogoutPostData,
  ApiAuthPkinfoPostData,
  ApiBsCompanyAddPostData,
  ApiBsCompanyEditPostData,
  ApiBsCompanyListPostData,
  ApiBsCompanyPagedListPostData,
  ApiBsCompanyRemoveMulPostData,
  ApiBsCompanyRemovePostData,
  ApiBsCompanyShowPostData,
  ApiBsEventLevelAddPostData,
  ApiBsEventLevelEditPostData,
  ApiBsEventLevelListPostData,
  ApiBsEventLevelPagedListPostData,
  ApiBsEventLevelRemoveMulPostData,
  ApiBsEventLevelRemovePostData,
  ApiBsEventLevelShowPostData,
  ApiBsEventTypeAddPostData,
  ApiBsEventTypeEditPostData,
  ApiBsEventTypeListPostData,
  ApiBsEventTypePagedListPostData,
  ApiBsEventTypeRemoveMulPostData,
  ApiBsEventTypeRemovePostData,
  ApiBsEventTypeShowPostData,
  ApiBsInformationAddPostData,
  ApiBsInformationEditPostData,
  ApiBsInformationListPostData,
  ApiBsInformationPagedListPostData,
  ApiBsInformationRemoveMulPostData,
  ApiBsInformationRemovePostData,
  ApiBsInformationShowPostData,
  ApiBsNewsAddPostData,
  ApiBsNewsEditPostData,
  ApiBsNewsListPostData,
  ApiBsNewsPagedListPostData,
  ApiBsNewsRemoveMulPostData,
  ApiBsNewsRemovePostData,
  ApiBsNewsShowPostData,
  ApiBsOutletCategoryAddPostData,
  ApiBsOutletCategoryEditPostData,
  ApiBsOutletCategoryListPostData,
  ApiBsOutletCategoryPagedListPostData,
  ApiBsOutletCategoryRemoveMulPostData,
  ApiBsOutletCategoryRemovePostData,
  ApiBsOutletCategoryShowPostData,
  ApiBsOutletTypeAddPostData,
  ApiBsOutletTypeEditPostData,
  ApiBsOutletTypeListPostData,
  ApiBsOutletTypePagedListPostData,
  ApiBsOutletTypeRemoveMulPostData,
  ApiBsOutletTypeRemovePostData,
  ApiBsOutletTypeShowPostData,
  ApiBsPollutionPermitInfoAddPostData,
  ApiBsPollutionPermitInfoEditPostData,
  ApiBsPollutionPermitInfoListPostData,
  ApiBsPollutionPermitInfoPagedListPostData,
  ApiBsPollutionPermitInfoRemovePostData,
  ApiBsPollutionPermitInfoShowPostData,
  ApiBsRiverAddPostData,
  ApiBsRiverEditPostData,
  ApiBsRiverListPostData,
  ApiBsRiverPagedListPostData,
  ApiBsRiverRemoveMulPostData,
  ApiBsRiverRemovePostData,
  ApiBsRiverShowPostData,
  ApiBsVillageAddPostData,
  ApiBsVillageEditPostData,
  ApiBsVillageListPostData,
  ApiBsVillagePagedListPostData,
  ApiBsVillageRemoveMulPostData,
  ApiBsVillageRemovePostData,
  ApiBsVillageShowPostData,
  ApiCommonFileDownloadGetData,
  ApiCommonFileDownloadGetParams,
  ApiCommonGenIdPostData,
  ApiCommonGenIdsPostData,
  ApiCommonGetEnumsPostData,
  ApiCommonGetFilesPostData,
  ApiCommonRemoveFilePostData,
  ApiCommonUploadFilePostData,
  ApiCommonUploadFilePostPayload,
  ApiCommonUploadFilesPostData,
  ApiCommonUploadFilesPostPayload,
  ApiCommonUploadImgsPostData,
  ApiCommonUploadImgsPostPayload,
  ApiDataDictionaryAddPostData,
  ApiDataDictionaryEditPostData,
  ApiDataDictionaryListPostData,
  ApiDataDictionaryPagedListPostData,
  ApiDataDictionaryRemovePostData,
  ApiDataDictionaryShowPostData,
  ApiDataDictionaryTreedataPostData,
  ApiDataDictionaryTypedataPostData,
  ApiEquipmentAddPostData,
  ApiEquipmentEditPostData,
  ApiEquipmentListPostData,
  ApiEquipmentOnlineInfoPostData,
  ApiEquipmentPagedListPostData,
  ApiEquipmentParamAddPostData,
  ApiEquipmentParamDailyRateListPostData,
  ApiEquipmentParamDailyRatePagedListPostData,
  ApiEquipmentParamDailyRateRecalcPostData,
  ApiEquipmentParamDailyRateShowPostData,
  ApiEquipmentParamDailyRateStByParamPostData,
  ApiEquipmentParamDailyRateStByTechnicsPostData,
  ApiEquipmentParamDdAddPostData,
  ApiEquipmentParamDdBatchExportExcelPostData,
  ApiEquipmentParamDdEditFlagPostData,
  ApiEquipmentParamDdExportExcelPostData,
  ApiEquipmentParamDdFixDataPostData,
  ApiEquipmentParamDdGroupByDayAndFactorPostData,
  ApiEquipmentParamDdGroupByMonthAndFactorPostData,
  ApiEquipmentParamDdGroupByYearAndFactorPostData,
  ApiEquipmentParamDdListPostData,
  ApiEquipmentParamDdPagedListPostData,
  ApiEquipmentParamDdShowPostData,
  ApiEquipmentParamEditPostData,
  ApiEquipmentParamEpnListPostData,
  ApiEquipmentParamHdAddPostData,
  ApiEquipmentParamHdBatchExportExcelPostData,
  ApiEquipmentParamHdEditFlagPostData,
  ApiEquipmentParamHdExportExcelPostData,
  ApiEquipmentParamHdFixDataPostData,
  ApiEquipmentParamHdGroupByHourAndFactorPostData,
  ApiEquipmentParamHdListPostData,
  ApiEquipmentParamHdPagedListPostData,
  ApiEquipmentParamHdShowPostData,
  ApiEquipmentParamInfoAddPostData,
  ApiEquipmentParamInfoEditPostData,
  ApiEquipmentParamInfoListPostData,
  ApiEquipmentParamInfoPagedListPostData,
  ApiEquipmentParamInfoRemoveMulPostData,
  ApiEquipmentParamInfoRemovePostData,
  ApiEquipmentParamInfoShowPostData,
  ApiEquipmentParamListPostData,
  ApiEquipmentParamMdAddPostData,
  ApiEquipmentParamMdEditFlagPostData,
  ApiEquipmentParamMdFixDataPostData,
  ApiEquipmentParamMdListPostData,
  ApiEquipmentParamMdPagedListPostData,
  ApiEquipmentParamMdShowPostData,
  ApiEquipmentParamPagedListPostData,
  ApiEquipmentParamRdAddPostData,
  ApiEquipmentParamRdEditFlagPostData,
  ApiEquipmentParamRdFixDataPostData,
  ApiEquipmentParamRdListPostData,
  ApiEquipmentParamRdPagedListPostData,
  ApiEquipmentParamRdShowPostData,
  ApiEquipmentParamRealTimeReportPostData,
  ApiEquipmentParamRemovePostData,
  ApiEquipmentParamShowPostData,
  ApiEquipmentParamStopPeriodAddPostData,
  ApiEquipmentParamStopPeriodEditPostData,
  ApiEquipmentParamStopPeriodListPostData,
  ApiEquipmentParamStopPeriodPagedListPostData,
  ApiEquipmentParamStopPeriodRemoveMulPostData,
  ApiEquipmentParamStopPeriodRemovePostData,
  ApiEquipmentParamStopPeriodShowPostData,
  ApiEquipmentRemovePostData,
  ApiEquipmentShowPostData,
  ApiEquipmentStateStPostData,
  ApiHikHikControllingPostData,
  ApiHikNmsCameraOnlinePostData,
  ApiHikPlaybackHlsUrlPostData,
  ApiHikPlaybackUrlPostData,
  ApiHikPreviewUrlPostData,
  ApiHjCommandRecordCp3012PostData,
  ApiHjCommandRecordListPostData,
  ApiHjCommandRecordPagedListPostData,
  ApiHjCommandRecordRemovePostData,
  ApiHjCommandRecordShowPostData,
  ApiHjCommandRecordUnlockPostData,
  ApiHjmessageLogListPostData,
  ApiHjmessageLogPagedListPostData,
  ApiHjmessageLogShowPostData,
  ApiLogaccessAddPostData,
  ApiLogaccessEditPostData,
  ApiLogaccessListPostData,
  ApiLogaccessPagedListPostData,
  ApiLogaccessRemoveMulPostData,
  ApiLogaccessRemovePostData,
  ApiLogaccessShowPostData,
  ApiLogerrorAddPostData,
  ApiLogerrorEditPostData,
  ApiLogerrorListPostData,
  ApiLogerrorPagedListPostData,
  ApiLogerrorRemoveMulPostData,
  ApiLogerrorRemovePostData,
  ApiLogerrorShowPostData,
  ApiLogoperationAddPostData,
  ApiLogoperationEditPostData,
  ApiLogoperationListPostData,
  ApiLogoperationPagedListPostData,
  ApiLogoperationRemoveMulPostData,
  ApiLogoperationRemovePostData,
  ApiLogoperationShowPostData,
  ApiMessageListPostData,
  ApiMessagePagedListPostData,
  ApiMessageShowPostData,
  ApiMsgnoticeAddPostData,
  ApiMsgnoticeEditPostData,
  ApiMsgnoticeListPostData,
  ApiMsgnoticePagedListPostData,
  ApiMsgnoticeRemoveMulPostData,
  ApiMsgnoticeRemovePostData,
  ApiMsgnoticeShowPostData,
  ApiMtDataFixLogAddPostData,
  ApiMtDataFixLogEditPostData,
  ApiMtDataFixLogListPostData,
  ApiMtDataFixLogPagedListPostData,
  ApiMtDataFixLogRemoveMulPostData,
  ApiMtDataFixLogRemovePostData,
  ApiMtDataFixLogShowPostData,
  ApiMtEditFlagLogAddPostData,
  ApiMtEditFlagLogEditPostData,
  ApiMtEditFlagLogListPostData,
  ApiMtEditFlagLogPagedListPostData,
  ApiMtEditFlagLogRemoveMulPostData,
  ApiMtEditFlagLogRemovePostData,
  ApiMtEditFlagLogShowPostData,
  ApiOrganizationAddPostData,
  ApiOrganizationEditPostData,
  ApiOrganizationListPostData,
  ApiOrganizationPagedListPostData,
  ApiOrganizationRemovePostData,
  ApiOrganizationShowPostData,
  ApiOrganizationTreedataPostData,
  ApiOutfallEventHandleGetByEventPostData,
  ApiOutfallEventHandleListPostData,
  ApiOutfallEventHandlePagedListPostData,
  ApiOutfallEventHandleRemovePostData,
  ApiOutfallEventHandleShowPostData,
  ApiOutfallEventInfoAddPostData,
  ApiOutfallEventInfoAuditHandlePostData,
  ApiOutfallEventInfoAuditPostData,
  ApiOutfallEventInfoCountPostData,
  ApiOutfallEventInfoDetailPostData,
  ApiOutfallEventInfoDispatchPostData,
  ApiOutfallEventInfoFromPrealarmPostData,
  ApiOutfallEventInfoHandlePostData,
  ApiOutfallEventInfoListPostData,
  ApiOutfallEventInfoPagedListPostData,
  ApiOutfallEventInfoRemovePostData,
  ApiOutfallEventInfoShowPostData,
  ApiOutfallEventInfoStByOutfallPostData,
  ApiOutfallEventInfoStByStatusPostData,
  ApiOutfallEventInfoStByTypePostData,
  ApiOutfallInspectionPlanAddPostData,
  ApiOutfallInspectionPlanChangeStatusPostData,
  ApiOutfallInspectionPlanEditPostData,
  ApiOutfallInspectionPlanGenerateTaskPostData,
  ApiOutfallInspectionPlanListPostData,
  ApiOutfallInspectionPlanPagedListPostData,
  ApiOutfallInspectionPlanRemovePostData,
  ApiOutfallInspectionPlanShowPostData,
  ApiOutfallInspectionPlanStByStatusPostData,
  ApiOutfallInspectionRecordAddPostData,
  ApiOutfallInspectionRecordCheckOutPostData,
  ApiOutfallInspectionRecordDetailPostData,
  ApiOutfallInspectionRecordListPostData,
  ApiOutfallInspectionRecordPagedListPostData,
  ApiOutfallInspectionRecordRemovePostData,
  ApiOutfallInspectionRecordShowPostData,
  ApiOutfallInspectionRecordStByAbnormalPostData,
  ApiOutfallInspectionRecordStByPersonPostData,
  ApiOutfallInspectionTaskAddPostData,
  ApiOutfallInspectionTaskCancelPostData,
  ApiOutfallInspectionTaskEditPostData,
  ApiOutfallInspectionTaskFinishPostData,
  ApiOutfallInspectionTaskGenerateTaskPostData,
  ApiOutfallInspectionTaskListPostData,
  ApiOutfallInspectionTaskPagedListPostData,
  ApiOutfallInspectionTaskRemovePostData,
  ApiOutfallInspectionTaskShowPostData,
  ApiOutfallInspectionTaskStByOutfallPostData,
  ApiOutfallInspectionTaskStByStatusPostData,
  ApiOutfallInspectionTaskStartPostData,
  ApiOutfallInspectionTrackAddPostData,
  ApiOutfallInspectionTrackGetByRecordPostData,
  ApiOutfallInspectionTrackListPostData,
  ApiOutfallInspectionTrackPagedListPostData,
  ApiOutfallInspectionTrackRemovePostData,
  ApiOutfallInspectionTrackShowPostData,
  ApiOutfallInspectionTrackUploadTracksPostData,
  ApiPrealarmRecordAddPostData,
  ApiPrealarmRecordAppPushPostData,
  ApiPrealarmRecordEditPostData,
  ApiPrealarmRecordGroupByDayPostData,
  ApiPrealarmRecordGroupByMonthPostData,
  ApiPrealarmRecordGroupByOutfallPostData,
  ApiPrealarmRecordGroupByYearPostData,
  ApiPrealarmRecordPagedListPostData,
  ApiPrealarmRecordRemoveMulPostData,
  ApiPrealarmRecordRemovePostData,
  ApiPrealarmRecordShowOnePostData,
  ApiPrealarmRecordWhitePagedListPostData,
  ApiPrealarmRecordWhitelistPostData,
  ApiPrealarmRuleEditMulByEpnPostData,
  ApiPrealarmRuleEditMulPostData,
  ApiPrealarmRuleGetByTechnicsPostData,
  ApiRecordFileListPostData,
  ApiRecordFilePagedListPostData,
  ApiRecordFileRemoveMulPostData,
  ApiRecordFileRemovePostData,
  ApiRecordFileShowPostData,
  ApiReservoirRpAddPostData,
  ApiReservoirRpEditPostData,
  ApiReservoirRpListPostData,
  ApiReservoirRpPagedListPostData,
  ApiReservoirRpRemoveMulPostData,
  ApiReservoirRpRemovePostData,
  ApiReservoirRpShowPostData,
  ApiResourceAddPostData,
  ApiResourceEditPostData,
  ApiResourceGetResourcesPostData,
  ApiResourceListPostData,
  ApiResourcePagedListPostData,
  ApiResourceRemovePostData,
  ApiResourceRoutePathsPostData,
  ApiResourceShowPostData,
  ApiResourceTreedataPostData,
  ApiRiverSewageOutfallAddPostData,
  ApiRiverSewageOutfallDptopstPostData,
  ApiRiverSewageOutfallEditPostData,
  ApiRiverSewageOutfallListPostData,
  ApiRiverSewageOutfallMapListPostData,
  ApiRiverSewageOutfallMpstPostData,
  ApiRiverSewageOutfallPagedListPostData,
  ApiRiverSewageOutfallRemovePostData,
  ApiRiverSewageOutfallShowPostData,
  ApiRiverSewageOutfallStbyCategoryPostData,
  ApiRiverSewageOutfallStbyRiverPostData,
  ApiRoleAddPostData,
  ApiRoleAssignResourcePostData,
  ApiRoleEditPostData,
  ApiRoleListPostData,
  ApiRolePagedListPostData,
  ApiRoleRemoveMulPostData,
  ApiRoleRemovePostData,
  ApiRoleShowPostData,
  ApiSsoDoLoginByTicketPostData,
  ApiSsoDoLoginByTicketPostParams,
  ApiSsoGetSsoAuthUrlPostData,
  ApiSsoGetSsoAuthUrlPostParams,
  ApiSysCacheDeleteKeyPostData,
  ApiSysCacheDeleteKeyPostParams,
  ApiSysCacheDeletebyprekeyPrefixkeyPostData,
  ApiSysCacheDeletebyprekeyPrefixkeyPostParams,
  ApiSysCacheKeyListGetData,
  ApiSysCacheKeysByPrefixKeyPrefixkeyGetData,
  ApiSysCacheKeysByPrefixKeyPrefixkeyGetParams,
  ApiSysCacheValueKeyGetData,
  ApiSysCacheValueKeyGetParams,
  ApiTechnicsAddPostData,
  ApiTechnicsEditPostData,
  ApiTechnicsGetRecordFilesPostData,
  ApiTechnicsListPostData,
  ApiTechnicsPagedListPostData,
  ApiTechnicsRemovePostData,
  ApiTechnicsShowPostData,
  ApiUserAddPostData,
  ApiUserAssignOutfallPostData,
  ApiUserAssignRolesPostData,
  ApiUserAssignUsergroupsPostData,
  ApiUserEditPostData,
  ApiUserEditPwdPostData,
  ApiUserEditSelfPostData,
  ApiUserGetOutfallPostData,
  ApiUserGetRolesPostData,
  ApiUserGetUsergroupsPostData,
  ApiUserListPostData,
  ApiUserMessageAmountstPostData,
  ApiUserMessageDeleteMessagePostData,
  ApiUserMessageListPostData,
  ApiUserMessagePagedListPostData,
  ApiUserMessageReadAllMessagePostData,
  ApiUserMessageReadMessagePostData,
  ApiUserMessageShowPostData,
  ApiUserPagedListPostData,
  ApiUserRemoveMulPostData,
  ApiUserRemovePostData,
  ApiUserResetPwdPostData,
  ApiUserShowPostData,
  ApiUserShowSelfPostData,
  ApiUsergroupAddPostData,
  ApiUsergroupAssignRolesPostData,
  ApiUsergroupEditPostData,
  ApiUsergroupGetRolesPostData,
  ApiUsergroupListPostData,
  ApiUsergroupPagedListPostData,
  ApiUsergroupRemoveMulPostData,
  ApiUsergroupRemovePostData,
  ApiUsergroupShowPostData,
  ApiWeatherWeatherTokenPostData,
  AppVersionPQO,
  AppVersionQO,
  BsCompanyFO,
  BsCompanyPQO,
  BsCompanyQO,
  BsEventLevelFO,
  BsEventLevelPQO,
  BsEventLevelQO,
  BsEventTypeFO,
  BsEventTypePQO,
  BsEventTypeQO,
  BsInformationFO,
  BsInformationPQO,
  BsInformationQO,
  BsNewsFO,
  BsNewsPQO,
  BsNewsQO,
  BsOutletCategoryFO,
  BsOutletCategoryPQO,
  BsOutletCategoryQO,
  BsOutletTypeFO,
  BsOutletTypePQO,
  BsOutletTypeQO,
  BsPollutionPermitInfoFO,
  BsPollutionPermitInfoPQO,
  BsPollutionPermitInfoQO,
  BsRiverFO,
  BsRiverPQO,
  BsRiverQO,
  BsVillageFO,
  BsVillagePQO,
  BsVillageQO,
  Cp3012FO,
  CpUnlockFO,
  DataDictionaryFO,
  DataDictionaryPQO,
  DataDictionaryQO,
  DataTransferRateQO,
  DdTypedataQO,
  EditFlagFO,
  EpdStQO,
  EquipmentFO,
  EquipmentPQO,
  EquipmentParamDailyRatePQO,
  EquipmentParamDailyRateQO,
  EquipmentParamDdFO,
  EquipmentParamDdFixFO,
  EquipmentParamDdPQO,
  EquipmentParamDdQO,
  EquipmentParamFO,
  EquipmentParamHdFO,
  EquipmentParamHdFixFO,
  EquipmentParamHdPQO,
  EquipmentParamHdQO,
  EquipmentParamInfoFO,
  EquipmentParamInfoPQO,
  EquipmentParamInfoQO,
  EquipmentParamMdFO,
  EquipmentParamMdFixFO,
  EquipmentParamMdPQO,
  EquipmentParamMdQO,
  EquipmentParamPQO,
  EquipmentParamQO,
  EquipmentParamRdFO,
  EquipmentParamRdFixFO,
  EquipmentParamRdPQO,
  EquipmentParamRdQO,
  EquipmentParamStopPeriodFO,
  EquipmentParamStopPeriodPQO,
  EquipmentParamStopPeriodQO,
  EquipmentQO,
  EventAuditFO,
  EventDispatchFO,
  EventHandleActFO,
  EventHandleAuditFO,
  ExportEquimpentDataQO,
  HIkControllingQO,
  HjCommandRecordPQO,
  HjCommandRecordQO,
  HjmessageLogPQO,
  HjmessageLogQO,
  InspectionCheckInFO,
  InspectionCheckOutFO,
  InspectionTaskGenerateFO,
  InspectionTrackUploadFO,
  LogaccessFO,
  LogaccessPQO,
  LogaccessQO,
  LogerrorFO,
  LogerrorPQO,
  LogerrorQO,
  LoginQO,
  LogoperationFO,
  LogoperationPQO,
  LogoperationQO,
  MessagePQO,
  MessageQO,
  MsgnoticeFO,
  MsgnoticePQO,
  MsgnoticeQO,
  MtDataFixLogFO,
  MtDataFixLogPQO,
  MtDataFixLogQO,
  MtEditFlagLogFO,
  MtEditFlagLogPQO,
  MtEditFlagLogQO,
  NmsCameraOnlineQO,
  OnlyIdAndTImePageQO,
  OnlyIdQO,
  OnlyMsgIdList,
  OnlyTechnicsIdQO,
  OrganizationForm,
  OrganizationPQO,
  OrganizationQO,
  OutfallEventHandlePQO,
  OutfallEventHandleQO,
  OutfallEventInfoFO,
  OutfallEventInfoPQO,
  OutfallEventInfoQO,
  OutfallInspectionPlanFO,
  OutfallInspectionPlanPQO,
  OutfallInspectionPlanQO,
  OutfallInspectionRecordFO,
  OutfallInspectionRecordPQO,
  OutfallInspectionRecordQO,
  OutfallInspectionTaskFO,
  OutfallInspectionTaskPQO,
  OutfallInspectionTaskQO,
  OutfallInspectionTrackFO,
  OutfallInspectionTrackPQO,
  OutfallInspectionTrackQO,
  PlaybackHlsUrlQO,
  PlaybackUrlQO,
  PrEditMulByEpnFO,
  PrEditMulFO,
  PrealarmRecordFO,
  PrealarmRecordPQO,
  PrealarmRecordQO,
  PrealarmStQO,
  PreviewUrlQO,
  RealTimeReportQO,
  RecalcRateFO,
  RecordFilePQO,
  RecordFileQO,
  RemoveMulQO,
  ReportPrealarmQO,
  ReqIdsQO,
  ReservoirRpFO,
  ReservoirRpPQO,
  ReservoirRpQO,
  ResourceForm,
  ResourcePQO,
  ResourceQO,
  RiverSewageOutfallFO,
  RiverSewageOutfallPQO,
  RiverSewageOutfallQO,
  RoleAssignResourcesQO,
  RoleFO,
  RolePQO,
  RoleQO,
  TechnicsFO,
  TechnicsPQO,
  TechnicsQO,
  UserAssignOutfallQO,
  UserAssignRolesQO,
  UserAssignUsergroupsQO,
  UserForm,
  UserFormAdd,
  UserMessagePQO,
  UserMessageQO,
  UserPQO,
  UserQO,
  UserResetPwdQO,
  UserSelfForm,
  UsergroupAssignRolesQO,
  UsergroupFO,
  UsergroupPQO,
  UsergroupQO,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags app-version
   * @name ApiAppVersionLastVersionPost
   * @summary 查询最新版本
   * @request POST:/api/app-version/last-version
   * @secure
   */
  apiAppVersionLastVersionPost = (params: RequestParams = {}) =>
    this.http.request<ApiAppVersionLastVersionPostData, any>({
      path: `/api/app-version/last-version`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags app-version
   * @name ApiAppVersionListPost
   * @summary 查询全部对象
   * @request POST:/api/app-version/list
   * @secure
   */
  apiAppVersionListPost = (data: AppVersionQO, params: RequestParams = {}) =>
    this.http.request<ApiAppVersionListPostData, any>({
      path: `/api/app-version/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags app-version
   * @name ApiAppVersionPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/app-version/paged-list
   * @secure
   */
  apiAppVersionPagedListPost = (
    data: AppVersionPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiAppVersionPagedListPostData, any>({
      path: `/api/app-version/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags app-version
   * @name ApiAppVersionShowPost
   * @summary 查询1个对象
   * @request POST:/api/app-version/show
   * @secure
   */
  apiAppVersionShowPost = (data: AppVersionQO, params: RequestParams = {}) =>
    this.http.request<ApiAppVersionShowPostData, any>({
      path: `/api/app-version/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags app-version
   * @name ApiAppVersionUploadApkPost
   * @summary 上传apk
   * @request POST:/api/app-version/upload-apk
   * @secure
   */
  apiAppVersionUploadApkPost = (
    data: ApiAppVersionUploadApkPostPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiAppVersionUploadApkPostData, any>({
      path: `/api/app-version/upload-apk`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags auth
   * @name ApiAuthCheckloginPost
   * @summary 检查是否登录
   * @request POST:/api/auth/checklogin
   * @secure
   */
  apiAuthCheckloginPost = (params: RequestParams = {}) =>
    this.http.request<ApiAuthCheckloginPostData, any>({
      path: `/api/auth/checklogin`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags auth
   * @name ApiAuthLoginPost
   * @summary 登录
   * @request POST:/api/auth/login
   * @secure
   */
  apiAuthLoginPost = (data: LoginQO, params: RequestParams = {}) =>
    this.http.request<ApiAuthLoginPostData, any>({
      path: `/api/auth/login`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags auth
   * @name ApiAuthLoginSsoGet
   * @summary 单点登录
   * @request GET:/api/auth/login-sso
   * @secure
   */
  apiAuthLoginSsoGet = (
    query: ApiAuthLoginSsoGetParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiAuthLoginSsoGetData, any>({
      path: `/api/auth/login-sso`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags auth
   * @name ApiAuthLogoutPost
   * @summary 退出登录
   * @request POST:/api/auth/logout
   * @secure
   */
  apiAuthLogoutPost = (params: RequestParams = {}) =>
    this.http.request<ApiAuthLogoutPostData, any>({
      path: `/api/auth/logout`,
      method: "POST",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags auth
   * @name ApiAuthPkinfoPost
   * @summary 获取加密公钥
   * @request POST:/api/auth/pkinfo
   * @secure
   */
  apiAuthPkinfoPost = (params: RequestParams = {}) =>
    this.http.request<ApiAuthPkinfoPostData, any>({
      path: `/api/auth/pkinfo`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-company
   * @name ApiBsCompanyAddPost
   * @summary 新增数据
   * @request POST:/api/bs-company/add
   * @secure
   */
  apiBsCompanyAddPost = (data: BsCompanyFO, params: RequestParams = {}) =>
    this.http.request<ApiBsCompanyAddPostData, any>({
      path: `/api/bs-company/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-company
   * @name ApiBsCompanyEditPost
   * @summary 编辑数据
   * @request POST:/api/bs-company/edit
   * @secure
   */
  apiBsCompanyEditPost = (data: BsCompanyFO, params: RequestParams = {}) =>
    this.http.request<ApiBsCompanyEditPostData, any>({
      path: `/api/bs-company/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-company
   * @name ApiBsCompanyListPost
   * @summary 查询全部对象
   * @request POST:/api/bs-company/list
   * @secure
   */
  apiBsCompanyListPost = (data: BsCompanyQO, params: RequestParams = {}) =>
    this.http.request<ApiBsCompanyListPostData, any>({
      path: `/api/bs-company/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-company
   * @name ApiBsCompanyPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/bs-company/paged-list
   * @secure
   */
  apiBsCompanyPagedListPost = (
    data: BsCompanyPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsCompanyPagedListPostData, any>({
      path: `/api/bs-company/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-company
   * @name ApiBsCompanyRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/bs-company/remove-mul
   * @secure
   */
  apiBsCompanyRemoveMulPost = (data: RemoveMulQO, params: RequestParams = {}) =>
    this.http.request<ApiBsCompanyRemoveMulPostData, any>({
      path: `/api/bs-company/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-company
   * @name ApiBsCompanyRemovePost
   * @summary 删除1条数据
   * @request POST:/api/bs-company/remove
   * @secure
   */
  apiBsCompanyRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiBsCompanyRemovePostData, any>({
      path: `/api/bs-company/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-company
   * @name ApiBsCompanyShowPost
   * @summary 查询1个对象
   * @request POST:/api/bs-company/show
   * @secure
   */
  apiBsCompanyShowPost = (data: BsCompanyQO, params: RequestParams = {}) =>
    this.http.request<ApiBsCompanyShowPostData, any>({
      path: `/api/bs-company/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-event-level
   * @name ApiBsEventLevelAddPost
   * @summary 新增数据
   * @request POST:/api/bs-event-level/add
   * @secure
   */
  apiBsEventLevelAddPost = (data: BsEventLevelFO, params: RequestParams = {}) =>
    this.http.request<ApiBsEventLevelAddPostData, any>({
      path: `/api/bs-event-level/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-event-level
   * @name ApiBsEventLevelEditPost
   * @summary 编辑数据
   * @request POST:/api/bs-event-level/edit
   * @secure
   */
  apiBsEventLevelEditPost = (
    data: BsEventLevelFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsEventLevelEditPostData, any>({
      path: `/api/bs-event-level/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-event-level
   * @name ApiBsEventLevelListPost
   * @summary 查询全部对象
   * @request POST:/api/bs-event-level/list
   * @secure
   */
  apiBsEventLevelListPost = (
    data: BsEventLevelQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsEventLevelListPostData, any>({
      path: `/api/bs-event-level/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-event-level
   * @name ApiBsEventLevelPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/bs-event-level/paged-list
   * @secure
   */
  apiBsEventLevelPagedListPost = (
    data: BsEventLevelPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsEventLevelPagedListPostData, any>({
      path: `/api/bs-event-level/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-event-level
   * @name ApiBsEventLevelRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/bs-event-level/remove-mul
   * @secure
   */
  apiBsEventLevelRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsEventLevelRemoveMulPostData, any>({
      path: `/api/bs-event-level/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-event-level
   * @name ApiBsEventLevelRemovePost
   * @summary 删除1条数据
   * @request POST:/api/bs-event-level/remove
   * @secure
   */
  apiBsEventLevelRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiBsEventLevelRemovePostData, any>({
      path: `/api/bs-event-level/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-event-level
   * @name ApiBsEventLevelShowPost
   * @summary 查询1个对象
   * @request POST:/api/bs-event-level/show
   * @secure
   */
  apiBsEventLevelShowPost = (
    data: BsEventLevelQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsEventLevelShowPostData, any>({
      path: `/api/bs-event-level/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-event-type
   * @name ApiBsEventTypeAddPost
   * @summary 新增数据
   * @request POST:/api/bs-event-type/add
   * @secure
   */
  apiBsEventTypeAddPost = (data: BsEventTypeFO, params: RequestParams = {}) =>
    this.http.request<ApiBsEventTypeAddPostData, any>({
      path: `/api/bs-event-type/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-event-type
   * @name ApiBsEventTypeEditPost
   * @summary 编辑数据
   * @request POST:/api/bs-event-type/edit
   * @secure
   */
  apiBsEventTypeEditPost = (data: BsEventTypeFO, params: RequestParams = {}) =>
    this.http.request<ApiBsEventTypeEditPostData, any>({
      path: `/api/bs-event-type/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-event-type
   * @name ApiBsEventTypeListPost
   * @summary 查询全部对象
   * @request POST:/api/bs-event-type/list
   * @secure
   */
  apiBsEventTypeListPost = (data: BsEventTypeQO, params: RequestParams = {}) =>
    this.http.request<ApiBsEventTypeListPostData, any>({
      path: `/api/bs-event-type/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-event-type
   * @name ApiBsEventTypePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/bs-event-type/paged-list
   * @secure
   */
  apiBsEventTypePagedListPost = (
    data: BsEventTypePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsEventTypePagedListPostData, any>({
      path: `/api/bs-event-type/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-event-type
   * @name ApiBsEventTypeRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/bs-event-type/remove-mul
   * @secure
   */
  apiBsEventTypeRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsEventTypeRemoveMulPostData, any>({
      path: `/api/bs-event-type/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-event-type
   * @name ApiBsEventTypeRemovePost
   * @summary 删除1条数据
   * @request POST:/api/bs-event-type/remove
   * @secure
   */
  apiBsEventTypeRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiBsEventTypeRemovePostData, any>({
      path: `/api/bs-event-type/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-event-type
   * @name ApiBsEventTypeShowPost
   * @summary 查询1个对象
   * @request POST:/api/bs-event-type/show
   * @secure
   */
  apiBsEventTypeShowPost = (data: BsEventTypeQO, params: RequestParams = {}) =>
    this.http.request<ApiBsEventTypeShowPostData, any>({
      path: `/api/bs-event-type/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-information
   * @name ApiBsInformationAddPost
   * @summary 新增数据
   * @request POST:/api/bs-information/add
   * @secure
   */
  apiBsInformationAddPost = (
    data: BsInformationFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsInformationAddPostData, any>({
      path: `/api/bs-information/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-information
   * @name ApiBsInformationEditPost
   * @summary 编辑数据
   * @request POST:/api/bs-information/edit
   * @secure
   */
  apiBsInformationEditPost = (
    data: BsInformationFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsInformationEditPostData, any>({
      path: `/api/bs-information/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-information
   * @name ApiBsInformationListPost
   * @summary 查询全部对象
   * @request POST:/api/bs-information/list
   * @secure
   */
  apiBsInformationListPost = (
    data: BsInformationQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsInformationListPostData, any>({
      path: `/api/bs-information/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-information
   * @name ApiBsInformationPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/bs-information/paged-list
   * @secure
   */
  apiBsInformationPagedListPost = (
    data: BsInformationPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsInformationPagedListPostData, any>({
      path: `/api/bs-information/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-information
   * @name ApiBsInformationRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/bs-information/remove-mul
   * @secure
   */
  apiBsInformationRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsInformationRemoveMulPostData, any>({
      path: `/api/bs-information/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-information
   * @name ApiBsInformationRemovePost
   * @summary 删除1条数据
   * @request POST:/api/bs-information/remove
   * @secure
   */
  apiBsInformationRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiBsInformationRemovePostData, any>({
      path: `/api/bs-information/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-information
   * @name ApiBsInformationShowPost
   * @summary 查询1个对象
   * @request POST:/api/bs-information/show
   * @secure
   */
  apiBsInformationShowPost = (
    data: BsInformationQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsInformationShowPostData, any>({
      path: `/api/bs-information/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-news
   * @name ApiBsNewsAddPost
   * @summary 新增数据
   * @request POST:/api/bs-news/add
   * @secure
   */
  apiBsNewsAddPost = (data: BsNewsFO, params: RequestParams = {}) =>
    this.http.request<ApiBsNewsAddPostData, any>({
      path: `/api/bs-news/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-news
   * @name ApiBsNewsEditPost
   * @summary 编辑数据
   * @request POST:/api/bs-news/edit
   * @secure
   */
  apiBsNewsEditPost = (data: BsNewsFO, params: RequestParams = {}) =>
    this.http.request<ApiBsNewsEditPostData, any>({
      path: `/api/bs-news/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-news
   * @name ApiBsNewsListPost
   * @summary 查询全部对象
   * @request POST:/api/bs-news/list
   * @secure
   */
  apiBsNewsListPost = (data: BsNewsQO, params: RequestParams = {}) =>
    this.http.request<ApiBsNewsListPostData, any>({
      path: `/api/bs-news/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-news
   * @name ApiBsNewsPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/bs-news/paged-list
   * @secure
   */
  apiBsNewsPagedListPost = (data: BsNewsPQO, params: RequestParams = {}) =>
    this.http.request<ApiBsNewsPagedListPostData, any>({
      path: `/api/bs-news/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-news
   * @name ApiBsNewsRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/bs-news/remove-mul
   * @secure
   */
  apiBsNewsRemoveMulPost = (data: RemoveMulQO, params: RequestParams = {}) =>
    this.http.request<ApiBsNewsRemoveMulPostData, any>({
      path: `/api/bs-news/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-news
   * @name ApiBsNewsRemovePost
   * @summary 删除1条数据
   * @request POST:/api/bs-news/remove
   * @secure
   */
  apiBsNewsRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiBsNewsRemovePostData, any>({
      path: `/api/bs-news/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-news
   * @name ApiBsNewsShowPost
   * @summary 查询1个对象
   * @request POST:/api/bs-news/show
   * @secure
   */
  apiBsNewsShowPost = (data: BsNewsQO, params: RequestParams = {}) =>
    this.http.request<ApiBsNewsShowPostData, any>({
      path: `/api/bs-news/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-outlet-category
   * @name ApiBsOutletCategoryAddPost
   * @summary 新增数据
   * @request POST:/api/bs-outlet-category/add
   * @secure
   */
  apiBsOutletCategoryAddPost = (
    data: BsOutletCategoryFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsOutletCategoryAddPostData, any>({
      path: `/api/bs-outlet-category/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-outlet-category
   * @name ApiBsOutletCategoryEditPost
   * @summary 编辑数据
   * @request POST:/api/bs-outlet-category/edit
   * @secure
   */
  apiBsOutletCategoryEditPost = (
    data: BsOutletCategoryFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsOutletCategoryEditPostData, any>({
      path: `/api/bs-outlet-category/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-outlet-category
   * @name ApiBsOutletCategoryListPost
   * @summary 查询全部对象
   * @request POST:/api/bs-outlet-category/list
   * @secure
   */
  apiBsOutletCategoryListPost = (
    data: BsOutletCategoryQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsOutletCategoryListPostData, any>({
      path: `/api/bs-outlet-category/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-outlet-category
   * @name ApiBsOutletCategoryPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/bs-outlet-category/paged-list
   * @secure
   */
  apiBsOutletCategoryPagedListPost = (
    data: BsOutletCategoryPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsOutletCategoryPagedListPostData, any>({
      path: `/api/bs-outlet-category/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-outlet-category
   * @name ApiBsOutletCategoryRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/bs-outlet-category/remove-mul
   * @secure
   */
  apiBsOutletCategoryRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsOutletCategoryRemoveMulPostData, any>({
      path: `/api/bs-outlet-category/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-outlet-category
   * @name ApiBsOutletCategoryRemovePost
   * @summary 删除1条数据
   * @request POST:/api/bs-outlet-category/remove
   * @secure
   */
  apiBsOutletCategoryRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsOutletCategoryRemovePostData, any>({
      path: `/api/bs-outlet-category/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-outlet-category
   * @name ApiBsOutletCategoryShowPost
   * @summary 查询1个对象
   * @request POST:/api/bs-outlet-category/show
   * @secure
   */
  apiBsOutletCategoryShowPost = (
    data: BsOutletCategoryQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsOutletCategoryShowPostData, any>({
      path: `/api/bs-outlet-category/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-outlet-type
   * @name ApiBsOutletTypeAddPost
   * @summary 新增数据
   * @request POST:/api/bs-outlet-type/add
   * @secure
   */
  apiBsOutletTypeAddPost = (data: BsOutletTypeFO, params: RequestParams = {}) =>
    this.http.request<ApiBsOutletTypeAddPostData, any>({
      path: `/api/bs-outlet-type/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-outlet-type
   * @name ApiBsOutletTypeEditPost
   * @summary 编辑数据
   * @request POST:/api/bs-outlet-type/edit
   * @secure
   */
  apiBsOutletTypeEditPost = (
    data: BsOutletTypeFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsOutletTypeEditPostData, any>({
      path: `/api/bs-outlet-type/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-outlet-type
   * @name ApiBsOutletTypeListPost
   * @summary 查询全部对象
   * @request POST:/api/bs-outlet-type/list
   * @secure
   */
  apiBsOutletTypeListPost = (
    data: BsOutletTypeQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsOutletTypeListPostData, any>({
      path: `/api/bs-outlet-type/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-outlet-type
   * @name ApiBsOutletTypePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/bs-outlet-type/paged-list
   * @secure
   */
  apiBsOutletTypePagedListPost = (
    data: BsOutletTypePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsOutletTypePagedListPostData, any>({
      path: `/api/bs-outlet-type/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-outlet-type
   * @name ApiBsOutletTypeRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/bs-outlet-type/remove-mul
   * @secure
   */
  apiBsOutletTypeRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsOutletTypeRemoveMulPostData, any>({
      path: `/api/bs-outlet-type/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-outlet-type
   * @name ApiBsOutletTypeRemovePost
   * @summary 删除1条数据
   * @request POST:/api/bs-outlet-type/remove
   * @secure
   */
  apiBsOutletTypeRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiBsOutletTypeRemovePostData, any>({
      path: `/api/bs-outlet-type/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-outlet-type
   * @name ApiBsOutletTypeShowPost
   * @summary 查询1个对象
   * @request POST:/api/bs-outlet-type/show
   * @secure
   */
  apiBsOutletTypeShowPost = (
    data: BsOutletTypeQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsOutletTypeShowPostData, any>({
      path: `/api/bs-outlet-type/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pollution-permit-info
   * @name ApiBsPollutionPermitInfoAddPost
   * @summary 新增数据
   * @request POST:/api/bs-pollution-permit-info/add
   * @secure
   */
  apiBsPollutionPermitInfoAddPost = (
    data: BsPollutionPermitInfoFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPollutionPermitInfoAddPostData, any>({
      path: `/api/bs-pollution-permit-info/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pollution-permit-info
   * @name ApiBsPollutionPermitInfoEditPost
   * @summary 编辑数据
   * @request POST:/api/bs-pollution-permit-info/edit
   * @secure
   */
  apiBsPollutionPermitInfoEditPost = (
    data: BsPollutionPermitInfoFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPollutionPermitInfoEditPostData, any>({
      path: `/api/bs-pollution-permit-info/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pollution-permit-info
   * @name ApiBsPollutionPermitInfoListPost
   * @summary 查询全部对象
   * @request POST:/api/bs-pollution-permit-info/list
   * @secure
   */
  apiBsPollutionPermitInfoListPost = (
    data: BsPollutionPermitInfoQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPollutionPermitInfoListPostData, any>({
      path: `/api/bs-pollution-permit-info/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pollution-permit-info
   * @name ApiBsPollutionPermitInfoPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/bs-pollution-permit-info/paged-list
   * @secure
   */
  apiBsPollutionPermitInfoPagedListPost = (
    data: BsPollutionPermitInfoPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPollutionPermitInfoPagedListPostData, any>({
      path: `/api/bs-pollution-permit-info/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pollution-permit-info
   * @name ApiBsPollutionPermitInfoRemovePost
   * @summary 删除数据
   * @request POST:/api/bs-pollution-permit-info/remove
   * @secure
   */
  apiBsPollutionPermitInfoRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPollutionPermitInfoRemovePostData, any>({
      path: `/api/bs-pollution-permit-info/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pollution-permit-info
   * @name ApiBsPollutionPermitInfoShowPost
   * @summary 查询1个对象
   * @request POST:/api/bs-pollution-permit-info/show
   * @secure
   */
  apiBsPollutionPermitInfoShowPost = (
    data: BsPollutionPermitInfoQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPollutionPermitInfoShowPostData, any>({
      path: `/api/bs-pollution-permit-info/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-river
   * @name ApiBsRiverAddPost
   * @summary 新增数据
   * @request POST:/api/bs-river/add
   * @secure
   */
  apiBsRiverAddPost = (data: BsRiverFO, params: RequestParams = {}) =>
    this.http.request<ApiBsRiverAddPostData, any>({
      path: `/api/bs-river/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-river
   * @name ApiBsRiverEditPost
   * @summary 编辑数据
   * @request POST:/api/bs-river/edit
   * @secure
   */
  apiBsRiverEditPost = (data: BsRiverFO, params: RequestParams = {}) =>
    this.http.request<ApiBsRiverEditPostData, any>({
      path: `/api/bs-river/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-river
   * @name ApiBsRiverListPost
   * @summary 查询全部对象
   * @request POST:/api/bs-river/list
   * @secure
   */
  apiBsRiverListPost = (data: BsRiverQO, params: RequestParams = {}) =>
    this.http.request<ApiBsRiverListPostData, any>({
      path: `/api/bs-river/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-river
   * @name ApiBsRiverPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/bs-river/paged-list
   * @secure
   */
  apiBsRiverPagedListPost = (data: BsRiverPQO, params: RequestParams = {}) =>
    this.http.request<ApiBsRiverPagedListPostData, any>({
      path: `/api/bs-river/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-river
   * @name ApiBsRiverRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/bs-river/remove-mul
   * @secure
   */
  apiBsRiverRemoveMulPost = (data: RemoveMulQO, params: RequestParams = {}) =>
    this.http.request<ApiBsRiverRemoveMulPostData, any>({
      path: `/api/bs-river/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-river
   * @name ApiBsRiverRemovePost
   * @summary 删除1条数据
   * @request POST:/api/bs-river/remove
   * @secure
   */
  apiBsRiverRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiBsRiverRemovePostData, any>({
      path: `/api/bs-river/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-river
   * @name ApiBsRiverShowPost
   * @summary 查询1个对象
   * @request POST:/api/bs-river/show
   * @secure
   */
  apiBsRiverShowPost = (data: BsRiverQO, params: RequestParams = {}) =>
    this.http.request<ApiBsRiverShowPostData, any>({
      path: `/api/bs-river/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-village
   * @name ApiBsVillageAddPost
   * @summary 新增数据
   * @request POST:/api/bs-village/add
   * @secure
   */
  apiBsVillageAddPost = (data: BsVillageFO, params: RequestParams = {}) =>
    this.http.request<ApiBsVillageAddPostData, any>({
      path: `/api/bs-village/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-village
   * @name ApiBsVillageEditPost
   * @summary 编辑数据
   * @request POST:/api/bs-village/edit
   * @secure
   */
  apiBsVillageEditPost = (data: BsVillageFO, params: RequestParams = {}) =>
    this.http.request<ApiBsVillageEditPostData, any>({
      path: `/api/bs-village/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-village
   * @name ApiBsVillageListPost
   * @summary 查询全部对象
   * @request POST:/api/bs-village/list
   * @secure
   */
  apiBsVillageListPost = (data: BsVillageQO, params: RequestParams = {}) =>
    this.http.request<ApiBsVillageListPostData, any>({
      path: `/api/bs-village/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-village
   * @name ApiBsVillagePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/bs-village/paged-list
   * @secure
   */
  apiBsVillagePagedListPost = (
    data: BsVillagePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsVillagePagedListPostData, any>({
      path: `/api/bs-village/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-village
   * @name ApiBsVillageRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/bs-village/remove-mul
   * @secure
   */
  apiBsVillageRemoveMulPost = (data: RemoveMulQO, params: RequestParams = {}) =>
    this.http.request<ApiBsVillageRemoveMulPostData, any>({
      path: `/api/bs-village/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-village
   * @name ApiBsVillageRemovePost
   * @summary 删除1条数据
   * @request POST:/api/bs-village/remove
   * @secure
   */
  apiBsVillageRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiBsVillageRemovePostData, any>({
      path: `/api/bs-village/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-village
   * @name ApiBsVillageShowPost
   * @summary 查询1个对象
   * @request POST:/api/bs-village/show
   * @secure
   */
  apiBsVillageShowPost = (data: BsVillageQO, params: RequestParams = {}) =>
    this.http.request<ApiBsVillageShowPostData, any>({
      path: `/api/bs-village/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags common
   * @name ApiCommonFileDownloadGet
   * @request GET:/api/common/file-download
   * @secure
   */
  apiCommonFileDownloadGet = (
    query: ApiCommonFileDownloadGetParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiCommonFileDownloadGetData, any>({
      path: `/api/common/file-download`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags common
   * @name ApiCommonGenIdPost
   * @summary 获取1个id
   * @request POST:/api/common/gen-id
   * @secure
   */
  apiCommonGenIdPost = (params: RequestParams = {}) =>
    this.http.request<ApiCommonGenIdPostData, any>({
      path: `/api/common/gen-id`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags common
   * @name ApiCommonGenIdsPost
   * @summary 获取多个id
   * @request POST:/api/common/gen-ids
   * @secure
   */
  apiCommonGenIdsPost = (data: ReqIdsQO, params: RequestParams = {}) =>
    this.http.request<ApiCommonGenIdsPostData, any>({
      path: `/api/common/gen-ids`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags common
   * @name ApiCommonGetEnumsPost
   * @summary 获取系统枚举
   * @request POST:/api/common/get-enums
   * @secure
   */
  apiCommonGetEnumsPost = (params: RequestParams = {}) =>
    this.http.request<ApiCommonGetEnumsPostData, any>({
      path: `/api/common/get-enums`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags common
   * @name ApiCommonGetFilesPost
   * @summary 获取文件列表
   * @request POST:/api/common/get-files
   * @secure
   */
  apiCommonGetFilesPost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiCommonGetFilesPostData, any>({
      path: `/api/common/get-files`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags common
   * @name ApiCommonRemoveFilePost
   * @summary 删除文件
   * @request POST:/api/common/remove-file
   * @secure
   */
  apiCommonRemoveFilePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiCommonRemoveFilePostData, any>({
      path: `/api/common/remove-file`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags common
   * @name ApiCommonUploadFilePost
   * @summary 上传单个文件
   * @request POST:/api/common/upload-file
   * @secure
   */
  apiCommonUploadFilePost = (
    data: ApiCommonUploadFilePostPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiCommonUploadFilePostData, any>({
      path: `/api/common/upload-file`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags common
   * @name ApiCommonUploadFilesPost
   * @summary 上传多个文件
   * @request POST:/api/common/upload-files
   * @secure
   */
  apiCommonUploadFilesPost = (
    data: ApiCommonUploadFilesPostPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiCommonUploadFilesPostData, any>({
      path: `/api/common/upload-files`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags common
   * @name ApiCommonUploadImgsPost
   * @summary 上传多个图片
   * @request POST:/api/common/upload-imgs
   * @secure
   */
  apiCommonUploadImgsPost = (
    data: ApiCommonUploadImgsPostPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiCommonUploadImgsPostData, any>({
      path: `/api/common/upload-imgs`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags data-dictionary
   * @name ApiDataDictionaryAddPost
   * @summary 新增数据
   * @request POST:/api/data-dictionary/add
   * @secure
   */
  apiDataDictionaryAddPost = (
    data: DataDictionaryFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiDataDictionaryAddPostData, any>({
      path: `/api/data-dictionary/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags data-dictionary
   * @name ApiDataDictionaryEditPost
   * @summary 编辑数据
   * @request POST:/api/data-dictionary/edit
   * @secure
   */
  apiDataDictionaryEditPost = (
    data: DataDictionaryFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiDataDictionaryEditPostData, any>({
      path: `/api/data-dictionary/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags data-dictionary
   * @name ApiDataDictionaryListPost
   * @summary 查询全部对象
   * @request POST:/api/data-dictionary/list
   * @secure
   */
  apiDataDictionaryListPost = (
    data: DataDictionaryQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiDataDictionaryListPostData, any>({
      path: `/api/data-dictionary/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags data-dictionary
   * @name ApiDataDictionaryPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/data-dictionary/paged-list
   * @secure
   */
  apiDataDictionaryPagedListPost = (
    data: DataDictionaryPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiDataDictionaryPagedListPostData, any>({
      path: `/api/data-dictionary/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags data-dictionary
   * @name ApiDataDictionaryRemovePost
   * @summary 删除数据
   * @request POST:/api/data-dictionary/remove
   * @secure
   */
  apiDataDictionaryRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiDataDictionaryRemovePostData, any>({
      path: `/api/data-dictionary/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags data-dictionary
   * @name ApiDataDictionaryShowPost
   * @summary 查询1个对象
   * @request POST:/api/data-dictionary/show
   * @secure
   */
  apiDataDictionaryShowPost = (
    data: DataDictionaryQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiDataDictionaryShowPostData, any>({
      path: `/api/data-dictionary/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags data-dictionary
   * @name ApiDataDictionaryTreedataPost
   * @summary 获取树形结构数据
   * @request POST:/api/data-dictionary/treedata
   * @secure
   */
  apiDataDictionaryTreedataPost = (
    data: DataDictionaryQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiDataDictionaryTreedataPostData, any>({
      path: `/api/data-dictionary/treedata`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags data-dictionary
   * @name ApiDataDictionaryTypedataPost
   * @summary 按父级编码获取数据
   * @request POST:/api/data-dictionary/typedata
   * @secure
   */
  apiDataDictionaryTypedataPost = (
    data: DdTypedataQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiDataDictionaryTypedataPostData, any>({
      path: `/api/data-dictionary/typedata`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment
   * @name ApiEquipmentAddPost
   * @summary 新增数据
   * @request POST:/api/equipment/add
   * @secure
   */
  apiEquipmentAddPost = (data: EquipmentFO, params: RequestParams = {}) =>
    this.http.request<ApiEquipmentAddPostData, any>({
      path: `/api/equipment/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment
   * @name ApiEquipmentEditPost
   * @summary 编辑数据
   * @request POST:/api/equipment/edit
   * @secure
   */
  apiEquipmentEditPost = (data: EquipmentFO, params: RequestParams = {}) =>
    this.http.request<ApiEquipmentEditPostData, any>({
      path: `/api/equipment/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment
   * @name ApiEquipmentListPost
   * @summary 查询全部对象
   * @request POST:/api/equipment/list
   * @secure
   */
  apiEquipmentListPost = (data: EquipmentQO, params: RequestParams = {}) =>
    this.http.request<ApiEquipmentListPostData, any>({
      path: `/api/equipment/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment
   * @name ApiEquipmentOnlineInfoPost
   * @summary 查询设备在线率
   * @request POST:/api/equipment/online-info
   * @secure
   */
  apiEquipmentOnlineInfoPost = (
    data: EquipmentQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentOnlineInfoPostData, any>({
      path: `/api/equipment/online-info`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment
   * @name ApiEquipmentPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/equipment/paged-list
   * @secure
   */
  apiEquipmentPagedListPost = (
    data: EquipmentPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentPagedListPostData, any>({
      path: `/api/equipment/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param
   * @name ApiEquipmentParamAddPost
   * @summary 新增数据
   * @request POST:/api/equipment-param/add
   * @secure
   */
  apiEquipmentParamAddPost = (
    data: EquipmentParamFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamAddPostData, any>({
      path: `/api/equipment-param/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-daily-rate
   * @name ApiEquipmentParamDailyRateListPost
   * @summary 查询全部对象
   * @request POST:/api/equipment-param-daily-rate/list
   * @secure
   */
  apiEquipmentParamDailyRateListPost = (
    data: EquipmentParamDailyRateQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamDailyRateListPostData, any>({
      path: `/api/equipment-param-daily-rate/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-daily-rate
   * @name ApiEquipmentParamDailyRatePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/equipment-param-daily-rate/paged-list
   * @secure
   */
  apiEquipmentParamDailyRatePagedListPost = (
    data: EquipmentParamDailyRatePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamDailyRatePagedListPostData, any>({
      path: `/api/equipment-param-daily-rate/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-daily-rate
   * @name ApiEquipmentParamDailyRateRecalcPost
   * @summary 设备补传/手动重算(采集程序调用)
   * @request POST:/api/equipment-param-daily-rate/recalc
   * @secure
   */
  apiEquipmentParamDailyRateRecalcPost = (
    data: RecalcRateFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamDailyRateRecalcPostData, any>({
      path: `/api/equipment-param-daily-rate/recalc`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-daily-rate
   * @name ApiEquipmentParamDailyRateShowPost
   * @summary 查询1个对象
   * @request POST:/api/equipment-param-daily-rate/show
   * @secure
   */
  apiEquipmentParamDailyRateShowPost = (
    data: EquipmentParamDailyRateQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamDailyRateShowPostData, any>({
      path: `/api/equipment-param-daily-rate/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-daily-rate
   * @name ApiEquipmentParamDailyRateStByParamPost
   * @summary 按监测因子统计
   * @request POST:/api/equipment-param-daily-rate/st-by-param
   * @secure
   */
  apiEquipmentParamDailyRateStByParamPost = (
    data: DataTransferRateQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamDailyRateStByParamPostData, any>({
      path: `/api/equipment-param-daily-rate/st-by-param`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-daily-rate
   * @name ApiEquipmentParamDailyRateStByTechnicsPost
   * @summary 按监测点统计
   * @request POST:/api/equipment-param-daily-rate/st-by-technics
   * @secure
   */
  apiEquipmentParamDailyRateStByTechnicsPost = (
    data: DataTransferRateQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamDailyRateStByTechnicsPostData, any>({
      path: `/api/equipment-param-daily-rate/st-by-technics`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-dd
   * @name ApiEquipmentParamDdAddPost
   * @summary 新增数据
   * @request POST:/api/equipment-param-dd/add
   * @secure
   */
  apiEquipmentParamDdAddPost = (
    data: EquipmentParamDdFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamDdAddPostData, any>({
      path: `/api/equipment-param-dd/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-dd
   * @name ApiEquipmentParamDdBatchExportExcelPost
   * @summary 批量导出
   * @request POST:/api/equipment-param-dd/batch-export-excel
   * @secure
   */
  apiEquipmentParamDdBatchExportExcelPost = (
    data: ExportEquimpentDataQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamDdBatchExportExcelPostData, any>({
      path: `/api/equipment-param-dd/batch-export-excel`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-dd
   * @name ApiEquipmentParamDdEditFlagPost
   * @summary 有效性标记
   * @request POST:/api/equipment-param-dd/edit-flag
   * @secure
   */
  apiEquipmentParamDdEditFlagPost = (
    data: EditFlagFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamDdEditFlagPostData, any>({
      path: `/api/equipment-param-dd/edit-flag`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-dd
   * @name ApiEquipmentParamDdExportExcelPost
   * @summary 导出
   * @request POST:/api/equipment-param-dd/export-excel
   * @secure
   */
  apiEquipmentParamDdExportExcelPost = (
    data: EquipmentParamDdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamDdExportExcelPostData, any>({
      path: `/api/equipment-param-dd/export-excel`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-dd
   * @name ApiEquipmentParamDdFixDataPost
   * @summary 数据修正
   * @request POST:/api/equipment-param-dd/fix-data
   * @secure
   */
  apiEquipmentParamDdFixDataPost = (
    data: EquipmentParamDdFixFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamDdFixDataPostData, any>({
      path: `/api/equipment-param-dd/fix-data`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-dd
   * @name ApiEquipmentParamDdGroupByDayAndFactorPost
   * @summary 按日和因子名称分组统计
   * @request POST:/api/equipment-param-dd/group-by-day-and-factor
   * @secure
   */
  apiEquipmentParamDdGroupByDayAndFactorPost = (
    data: EpdStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamDdGroupByDayAndFactorPostData, any>({
      path: `/api/equipment-param-dd/group-by-day-and-factor`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-dd
   * @name ApiEquipmentParamDdGroupByMonthAndFactorPost
   * @summary 按月和因子名称分组统计
   * @request POST:/api/equipment-param-dd/group-by-month-and-factor
   * @secure
   */
  apiEquipmentParamDdGroupByMonthAndFactorPost = (
    data: EpdStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamDdGroupByMonthAndFactorPostData, any>({
      path: `/api/equipment-param-dd/group-by-month-and-factor`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-dd
   * @name ApiEquipmentParamDdGroupByYearAndFactorPost
   * @summary 按年和因子名称分组统计
   * @request POST:/api/equipment-param-dd/group-by-year-and-factor
   * @secure
   */
  apiEquipmentParamDdGroupByYearAndFactorPost = (
    data: EpdStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamDdGroupByYearAndFactorPostData, any>({
      path: `/api/equipment-param-dd/group-by-year-and-factor`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-dd
   * @name ApiEquipmentParamDdListPost
   * @summary 查询全部对象
   * @request POST:/api/equipment-param-dd/list
   * @secure
   */
  apiEquipmentParamDdListPost = (
    data: EquipmentParamDdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamDdListPostData, any>({
      path: `/api/equipment-param-dd/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-dd
   * @name ApiEquipmentParamDdPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/equipment-param-dd/paged-list
   * @secure
   */
  apiEquipmentParamDdPagedListPost = (
    data: EquipmentParamDdPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamDdPagedListPostData, any>({
      path: `/api/equipment-param-dd/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-dd
   * @name ApiEquipmentParamDdShowPost
   * @summary 查询1个对象
   * @request POST:/api/equipment-param-dd/show
   * @secure
   */
  apiEquipmentParamDdShowPost = (
    data: EquipmentParamDdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamDdShowPostData, any>({
      path: `/api/equipment-param-dd/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param
   * @name ApiEquipmentParamEditPost
   * @summary 编辑数据
   * @request POST:/api/equipment-param/edit
   * @secure
   */
  apiEquipmentParamEditPost = (
    data: EquipmentParamFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamEditPostData, any>({
      path: `/api/equipment-param/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param
   * @name ApiEquipmentParamEpnListPost
   * @summary 查询所有监测因子名称
   * @request POST:/api/equipment-param/epn-list
   * @secure
   */
  apiEquipmentParamEpnListPost = (
    data: OnlyTechnicsIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamEpnListPostData, any>({
      path: `/api/equipment-param/epn-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-hd
   * @name ApiEquipmentParamHdAddPost
   * @summary 新增数据
   * @request POST:/api/equipment-param-hd/add
   * @secure
   */
  apiEquipmentParamHdAddPost = (
    data: EquipmentParamHdFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamHdAddPostData, any>({
      path: `/api/equipment-param-hd/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-hd
   * @name ApiEquipmentParamHdBatchExportExcelPost
   * @summary 批量导出
   * @request POST:/api/equipment-param-hd/batch-export-excel
   * @secure
   */
  apiEquipmentParamHdBatchExportExcelPost = (
    data: ExportEquimpentDataQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamHdBatchExportExcelPostData, any>({
      path: `/api/equipment-param-hd/batch-export-excel`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-hd
   * @name ApiEquipmentParamHdEditFlagPost
   * @summary 有效性标记
   * @request POST:/api/equipment-param-hd/edit-flag
   * @secure
   */
  apiEquipmentParamHdEditFlagPost = (
    data: EditFlagFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamHdEditFlagPostData, any>({
      path: `/api/equipment-param-hd/edit-flag`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-hd
   * @name ApiEquipmentParamHdExportExcelPost
   * @summary 导出
   * @request POST:/api/equipment-param-hd/export-excel
   * @secure
   */
  apiEquipmentParamHdExportExcelPost = (
    data: EquipmentParamHdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamHdExportExcelPostData, any>({
      path: `/api/equipment-param-hd/export-excel`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-hd
   * @name ApiEquipmentParamHdFixDataPost
   * @summary 数据修正
   * @request POST:/api/equipment-param-hd/fix-data
   * @secure
   */
  apiEquipmentParamHdFixDataPost = (
    data: EquipmentParamHdFixFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamHdFixDataPostData, any>({
      path: `/api/equipment-param-hd/fix-data`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-hd
   * @name ApiEquipmentParamHdGroupByHourAndFactorPost
   * @summary 按小时和因子名称分组统计
   * @request POST:/api/equipment-param-hd/group-by-hour-and-factor
   * @secure
   */
  apiEquipmentParamHdGroupByHourAndFactorPost = (
    data: EpdStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamHdGroupByHourAndFactorPostData, any>({
      path: `/api/equipment-param-hd/group-by-hour-and-factor`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-hd
   * @name ApiEquipmentParamHdListPost
   * @summary 查询全部对象
   * @request POST:/api/equipment-param-hd/list
   * @secure
   */
  apiEquipmentParamHdListPost = (
    data: EquipmentParamHdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamHdListPostData, any>({
      path: `/api/equipment-param-hd/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-hd
   * @name ApiEquipmentParamHdPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/equipment-param-hd/paged-list
   * @secure
   */
  apiEquipmentParamHdPagedListPost = (
    data: EquipmentParamHdPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamHdPagedListPostData, any>({
      path: `/api/equipment-param-hd/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-hd
   * @name ApiEquipmentParamHdShowPost
   * @summary 查询1个对象
   * @request POST:/api/equipment-param-hd/show
   * @secure
   */
  apiEquipmentParamHdShowPost = (
    data: EquipmentParamHdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamHdShowPostData, any>({
      path: `/api/equipment-param-hd/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-info
   * @name ApiEquipmentParamInfoAddPost
   * @summary 新增数据
   * @request POST:/api/equipment-param-info/add
   * @secure
   */
  apiEquipmentParamInfoAddPost = (
    data: EquipmentParamInfoFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamInfoAddPostData, any>({
      path: `/api/equipment-param-info/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-info
   * @name ApiEquipmentParamInfoEditPost
   * @summary 编辑数据
   * @request POST:/api/equipment-param-info/edit
   * @secure
   */
  apiEquipmentParamInfoEditPost = (
    data: EquipmentParamInfoFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamInfoEditPostData, any>({
      path: `/api/equipment-param-info/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-info
   * @name ApiEquipmentParamInfoListPost
   * @summary 查询全部对象
   * @request POST:/api/equipment-param-info/list
   * @secure
   */
  apiEquipmentParamInfoListPost = (
    data: EquipmentParamInfoQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamInfoListPostData, any>({
      path: `/api/equipment-param-info/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-info
   * @name ApiEquipmentParamInfoPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/equipment-param-info/paged-list
   * @secure
   */
  apiEquipmentParamInfoPagedListPost = (
    data: EquipmentParamInfoPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamInfoPagedListPostData, any>({
      path: `/api/equipment-param-info/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-info
   * @name ApiEquipmentParamInfoRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/equipment-param-info/remove-mul
   * @secure
   */
  apiEquipmentParamInfoRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamInfoRemoveMulPostData, any>({
      path: `/api/equipment-param-info/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-info
   * @name ApiEquipmentParamInfoRemovePost
   * @summary 删除1条数据
   * @request POST:/api/equipment-param-info/remove
   * @secure
   */
  apiEquipmentParamInfoRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamInfoRemovePostData, any>({
      path: `/api/equipment-param-info/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-info
   * @name ApiEquipmentParamInfoShowPost
   * @summary 查询1个对象
   * @request POST:/api/equipment-param-info/show
   * @secure
   */
  apiEquipmentParamInfoShowPost = (
    data: EquipmentParamInfoQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamInfoShowPostData, any>({
      path: `/api/equipment-param-info/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param
   * @name ApiEquipmentParamListPost
   * @summary 查询全部对象
   * @request POST:/api/equipment-param/list
   * @secure
   */
  apiEquipmentParamListPost = (
    data: EquipmentParamQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamListPostData, any>({
      path: `/api/equipment-param/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-md
   * @name ApiEquipmentParamMdAddPost
   * @summary 新增数据
   * @request POST:/api/equipment-param-md/add
   * @secure
   */
  apiEquipmentParamMdAddPost = (
    data: EquipmentParamMdFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamMdAddPostData, any>({
      path: `/api/equipment-param-md/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-md
   * @name ApiEquipmentParamMdEditFlagPost
   * @summary 有效性标记
   * @request POST:/api/equipment-param-md/edit-flag
   * @secure
   */
  apiEquipmentParamMdEditFlagPost = (
    data: EditFlagFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamMdEditFlagPostData, any>({
      path: `/api/equipment-param-md/edit-flag`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-md
   * @name ApiEquipmentParamMdFixDataPost
   * @summary 数据修正
   * @request POST:/api/equipment-param-md/fix-data
   * @secure
   */
  apiEquipmentParamMdFixDataPost = (
    data: EquipmentParamMdFixFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamMdFixDataPostData, any>({
      path: `/api/equipment-param-md/fix-data`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-md
   * @name ApiEquipmentParamMdListPost
   * @summary 查询全部对象
   * @request POST:/api/equipment-param-md/list
   * @secure
   */
  apiEquipmentParamMdListPost = (
    data: EquipmentParamMdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamMdListPostData, any>({
      path: `/api/equipment-param-md/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-md
   * @name ApiEquipmentParamMdPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/equipment-param-md/paged-list
   * @secure
   */
  apiEquipmentParamMdPagedListPost = (
    data: EquipmentParamMdPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamMdPagedListPostData, any>({
      path: `/api/equipment-param-md/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-md
   * @name ApiEquipmentParamMdShowPost
   * @summary 查询1个对象
   * @request POST:/api/equipment-param-md/show
   * @secure
   */
  apiEquipmentParamMdShowPost = (
    data: EquipmentParamMdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamMdShowPostData, any>({
      path: `/api/equipment-param-md/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param
   * @name ApiEquipmentParamPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/equipment-param/paged-list
   * @secure
   */
  apiEquipmentParamPagedListPost = (
    data: EquipmentParamPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamPagedListPostData, any>({
      path: `/api/equipment-param/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-rd
   * @name ApiEquipmentParamRdAddPost
   * @summary 新增数据
   * @request POST:/api/equipment-param-rd/add
   * @secure
   */
  apiEquipmentParamRdAddPost = (
    data: EquipmentParamRdFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamRdAddPostData, any>({
      path: `/api/equipment-param-rd/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-rd
   * @name ApiEquipmentParamRdEditFlagPost
   * @summary 有效性标记
   * @request POST:/api/equipment-param-rd/edit-flag
   * @secure
   */
  apiEquipmentParamRdEditFlagPost = (
    data: EditFlagFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamRdEditFlagPostData, any>({
      path: `/api/equipment-param-rd/edit-flag`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-rd
   * @name ApiEquipmentParamRdFixDataPost
   * @summary 数据修正
   * @request POST:/api/equipment-param-rd/fix-data
   * @secure
   */
  apiEquipmentParamRdFixDataPost = (
    data: EquipmentParamRdFixFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamRdFixDataPostData, any>({
      path: `/api/equipment-param-rd/fix-data`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-rd
   * @name ApiEquipmentParamRdListPost
   * @summary 查询全部对象
   * @request POST:/api/equipment-param-rd/list
   * @secure
   */
  apiEquipmentParamRdListPost = (
    data: EquipmentParamRdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamRdListPostData, any>({
      path: `/api/equipment-param-rd/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-rd
   * @name ApiEquipmentParamRdPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/equipment-param-rd/paged-list
   * @secure
   */
  apiEquipmentParamRdPagedListPost = (
    data: EquipmentParamRdPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamRdPagedListPostData, any>({
      path: `/api/equipment-param-rd/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-rd
   * @name ApiEquipmentParamRdShowPost
   * @summary 查询1个对象
   * @request POST:/api/equipment-param-rd/show
   * @secure
   */
  apiEquipmentParamRdShowPost = (
    data: EquipmentParamRdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamRdShowPostData, any>({
      path: `/api/equipment-param-rd/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param
   * @name ApiEquipmentParamRealTimeReportPost
   * @summary 实时数据列表
   * @request POST:/api/equipment-param/real-time-report
   * @secure
   */
  apiEquipmentParamRealTimeReportPost = (
    data: RealTimeReportQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamRealTimeReportPostData, any>({
      path: `/api/equipment-param/real-time-report`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param
   * @name ApiEquipmentParamRemovePost
   * @summary 删除数据
   * @request POST:/api/equipment-param/remove
   * @secure
   */
  apiEquipmentParamRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiEquipmentParamRemovePostData, any>({
      path: `/api/equipment-param/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param
   * @name ApiEquipmentParamShowPost
   * @summary 查询1个对象
   * @request POST:/api/equipment-param/show
   * @secure
   */
  apiEquipmentParamShowPost = (
    data: EquipmentParamQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamShowPostData, any>({
      path: `/api/equipment-param/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-stop-period
   * @name ApiEquipmentParamStopPeriodAddPost
   * @summary 新增停机时段
   * @request POST:/api/equipment-param-stop-period/add
   * @secure
   */
  apiEquipmentParamStopPeriodAddPost = (
    data: EquipmentParamStopPeriodFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamStopPeriodAddPostData, any>({
      path: `/api/equipment-param-stop-period/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-stop-period
   * @name ApiEquipmentParamStopPeriodEditPost
   * @summary 编辑停机时段
   * @request POST:/api/equipment-param-stop-period/edit
   * @secure
   */
  apiEquipmentParamStopPeriodEditPost = (
    data: EquipmentParamStopPeriodFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamStopPeriodEditPostData, any>({
      path: `/api/equipment-param-stop-period/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-stop-period
   * @name ApiEquipmentParamStopPeriodListPost
   * @summary 查询全部对象
   * @request POST:/api/equipment-param-stop-period/list
   * @secure
   */
  apiEquipmentParamStopPeriodListPost = (
    data: EquipmentParamStopPeriodQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamStopPeriodListPostData, any>({
      path: `/api/equipment-param-stop-period/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-stop-period
   * @name ApiEquipmentParamStopPeriodPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/equipment-param-stop-period/paged-list
   * @secure
   */
  apiEquipmentParamStopPeriodPagedListPost = (
    data: EquipmentParamStopPeriodPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamStopPeriodPagedListPostData, any>({
      path: `/api/equipment-param-stop-period/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-stop-period
   * @name ApiEquipmentParamStopPeriodRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/equipment-param-stop-period/remove-mul
   * @secure
   */
  apiEquipmentParamStopPeriodRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamStopPeriodRemoveMulPostData, any>({
      path: `/api/equipment-param-stop-period/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-stop-period
   * @name ApiEquipmentParamStopPeriodRemovePost
   * @summary 删除停机时段
   * @request POST:/api/equipment-param-stop-period/remove
   * @secure
   */
  apiEquipmentParamStopPeriodRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamStopPeriodRemovePostData, any>({
      path: `/api/equipment-param-stop-period/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment-param-stop-period
   * @name ApiEquipmentParamStopPeriodShowPost
   * @summary 查询1个对象
   * @request POST:/api/equipment-param-stop-period/show
   * @secure
   */
  apiEquipmentParamStopPeriodShowPost = (
    data: EquipmentParamStopPeriodQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamStopPeriodShowPostData, any>({
      path: `/api/equipment-param-stop-period/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment
   * @name ApiEquipmentRemovePost
   * @summary 删除数据
   * @request POST:/api/equipment/remove
   * @secure
   */
  apiEquipmentRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiEquipmentRemovePostData, any>({
      path: `/api/equipment/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment
   * @name ApiEquipmentShowPost
   * @summary 查询1个对象
   * @request POST:/api/equipment/show
   * @secure
   */
  apiEquipmentShowPost = (data: EquipmentQO, params: RequestParams = {}) =>
    this.http.request<ApiEquipmentShowPostData, any>({
      path: `/api/equipment/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags equipment
   * @name ApiEquipmentStateStPost
   * @summary 设备状态统计
   * @request POST:/api/equipment/state-st
   * @secure
   */
  apiEquipmentStateStPost = (data: EquipmentQO, params: RequestParams = {}) =>
    this.http.request<ApiEquipmentStateStPostData, any>({
      path: `/api/equipment/state-st`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags hik
   * @name ApiHikHikControllingPost
   * @summary 云台控制
   * @request POST:/api/hik/hik-controlling
   * @secure
   */
  apiHikHikControllingPost = (
    data: HIkControllingQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiHikHikControllingPostData, any>({
      path: `/api/hik/hik-controlling`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags hik
   * @name ApiHikNmsCameraOnlinePost
   * @summary 获取设备在线情况
   * @request POST:/api/hik/nms-camera-online
   * @secure
   */
  apiHikNmsCameraOnlinePost = (
    data: NmsCameraOnlineQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiHikNmsCameraOnlinePostData, any>({
      path: `/api/hik/nms-camera-online`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags hik
   * @name ApiHikPlaybackHlsUrlPost
   * @summary 获取hls回放URL
   * @request POST:/api/hik/playback-hls-url
   * @secure
   */
  apiHikPlaybackHlsUrlPost = (
    data: PlaybackHlsUrlQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiHikPlaybackHlsUrlPostData, any>({
      path: `/api/hik/playback-hls-url`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags hik
   * @name ApiHikPlaybackUrlPost
   * @summary 获取回放URL
   * @request POST:/api/hik/playback-url
   * @secure
   */
  apiHikPlaybackUrlPost = (data: PlaybackUrlQO, params: RequestParams = {}) =>
    this.http.request<ApiHikPlaybackUrlPostData, any>({
      path: `/api/hik/playback-url`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags hik
   * @name ApiHikPreviewUrlPost
   * @summary 获取hls预览URL
   * @request POST:/api/hik/preview-url
   * @secure
   */
  apiHikPreviewUrlPost = (data: PreviewUrlQO, params: RequestParams = {}) =>
    this.http.request<ApiHikPreviewUrlPostData, any>({
      path: `/api/hik/preview-url`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags hj-command-record
   * @name ApiHjCommandRecordCp3012Post
   * @summary 即时采样控制
   * @request POST:/api/hj-command-record/cp3012
   * @secure
   */
  apiHjCommandRecordCp3012Post = (data: Cp3012FO, params: RequestParams = {}) =>
    this.http.request<ApiHjCommandRecordCp3012PostData, any>({
      path: `/api/hj-command-record/cp3012`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags hj-command-record
   * @name ApiHjCommandRecordListPost
   * @summary 查询全部对象
   * @request POST:/api/hj-command-record/list
   * @secure
   */
  apiHjCommandRecordListPost = (
    data: HjCommandRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiHjCommandRecordListPostData, any>({
      path: `/api/hj-command-record/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags hj-command-record
   * @name ApiHjCommandRecordPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/hj-command-record/paged-list
   * @secure
   */
  apiHjCommandRecordPagedListPost = (
    data: HjCommandRecordPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiHjCommandRecordPagedListPostData, any>({
      path: `/api/hj-command-record/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags hj-command-record
   * @name ApiHjCommandRecordRemovePost
   * @summary 删除数据
   * @request POST:/api/hj-command-record/remove
   * @secure
   */
  apiHjCommandRecordRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiHjCommandRecordRemovePostData, any>({
      path: `/api/hj-command-record/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags hj-command-record
   * @name ApiHjCommandRecordShowPost
   * @summary 查询1个对象
   * @request POST:/api/hj-command-record/show
   * @secure
   */
  apiHjCommandRecordShowPost = (
    data: HjCommandRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiHjCommandRecordShowPostData, any>({
      path: `/api/hj-command-record/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags hj-command-record
   * @name ApiHjCommandRecordUnlockPost
   * @summary cn=3025,hydrophore=13：开锁
   * @request POST:/api/hj-command-record/unlock
   * @secure
   */
  apiHjCommandRecordUnlockPost = (
    data: CpUnlockFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiHjCommandRecordUnlockPostData, any>({
      path: `/api/hj-command-record/unlock`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags hjmessage-log
   * @name ApiHjmessageLogListPost
   * @summary 查询全部对象
   * @request POST:/api/hjmessage-log/list
   * @secure
   */
  apiHjmessageLogListPost = (
    data: HjmessageLogQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiHjmessageLogListPostData, any>({
      path: `/api/hjmessage-log/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags hjmessage-log
   * @name ApiHjmessageLogPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/hjmessage-log/paged-list
   * @secure
   */
  apiHjmessageLogPagedListPost = (
    data: HjmessageLogPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiHjmessageLogPagedListPostData, any>({
      path: `/api/hjmessage-log/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags hjmessage-log
   * @name ApiHjmessageLogShowPost
   * @summary 查询1个对象
   * @request POST:/api/hjmessage-log/show
   * @secure
   */
  apiHjmessageLogShowPost = (
    data: HjmessageLogQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiHjmessageLogShowPostData, any>({
      path: `/api/hjmessage-log/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags logaccess
   * @name ApiLogaccessAddPost
   * @summary 新增数据
   * @request POST:/api/logaccess/add
   * @secure
   */
  apiLogaccessAddPost = (data: LogaccessFO, params: RequestParams = {}) =>
    this.http.request<ApiLogaccessAddPostData, any>({
      path: `/api/logaccess/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags logaccess
   * @name ApiLogaccessEditPost
   * @summary 编辑数据
   * @request POST:/api/logaccess/edit
   * @secure
   */
  apiLogaccessEditPost = (data: LogaccessFO, params: RequestParams = {}) =>
    this.http.request<ApiLogaccessEditPostData, any>({
      path: `/api/logaccess/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags logaccess
   * @name ApiLogaccessListPost
   * @summary 查询全部对象
   * @request POST:/api/logaccess/list
   * @secure
   */
  apiLogaccessListPost = (data: LogaccessQO, params: RequestParams = {}) =>
    this.http.request<ApiLogaccessListPostData, any>({
      path: `/api/logaccess/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags logaccess
   * @name ApiLogaccessPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/logaccess/paged-list
   * @secure
   */
  apiLogaccessPagedListPost = (
    data: LogaccessPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiLogaccessPagedListPostData, any>({
      path: `/api/logaccess/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags logaccess
   * @name ApiLogaccessRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/logaccess/remove-mul
   * @secure
   */
  apiLogaccessRemoveMulPost = (data: RemoveMulQO, params: RequestParams = {}) =>
    this.http.request<ApiLogaccessRemoveMulPostData, any>({
      path: `/api/logaccess/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags logaccess
   * @name ApiLogaccessRemovePost
   * @summary 删除1条数据
   * @request POST:/api/logaccess/remove
   * @secure
   */
  apiLogaccessRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiLogaccessRemovePostData, any>({
      path: `/api/logaccess/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags logaccess
   * @name ApiLogaccessShowPost
   * @summary 查询1个对象
   * @request POST:/api/logaccess/show
   * @secure
   */
  apiLogaccessShowPost = (data: LogaccessQO, params: RequestParams = {}) =>
    this.http.request<ApiLogaccessShowPostData, any>({
      path: `/api/logaccess/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags logerror
   * @name ApiLogerrorAddPost
   * @summary 新增数据
   * @request POST:/api/logerror/add
   * @secure
   */
  apiLogerrorAddPost = (data: LogerrorFO, params: RequestParams = {}) =>
    this.http.request<ApiLogerrorAddPostData, any>({
      path: `/api/logerror/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags logerror
   * @name ApiLogerrorEditPost
   * @summary 编辑数据
   * @request POST:/api/logerror/edit
   * @secure
   */
  apiLogerrorEditPost = (data: LogerrorFO, params: RequestParams = {}) =>
    this.http.request<ApiLogerrorEditPostData, any>({
      path: `/api/logerror/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags logerror
   * @name ApiLogerrorListPost
   * @summary 查询全部对象
   * @request POST:/api/logerror/list
   * @secure
   */
  apiLogerrorListPost = (data: LogerrorQO, params: RequestParams = {}) =>
    this.http.request<ApiLogerrorListPostData, any>({
      path: `/api/logerror/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags logerror
   * @name ApiLogerrorPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/logerror/paged-list
   * @secure
   */
  apiLogerrorPagedListPost = (data: LogerrorPQO, params: RequestParams = {}) =>
    this.http.request<ApiLogerrorPagedListPostData, any>({
      path: `/api/logerror/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags logerror
   * @name ApiLogerrorRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/logerror/remove-mul
   * @secure
   */
  apiLogerrorRemoveMulPost = (data: RemoveMulQO, params: RequestParams = {}) =>
    this.http.request<ApiLogerrorRemoveMulPostData, any>({
      path: `/api/logerror/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags logerror
   * @name ApiLogerrorRemovePost
   * @summary 删除1条数据
   * @request POST:/api/logerror/remove
   * @secure
   */
  apiLogerrorRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiLogerrorRemovePostData, any>({
      path: `/api/logerror/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags logerror
   * @name ApiLogerrorShowPost
   * @summary 查询1个对象
   * @request POST:/api/logerror/show
   * @secure
   */
  apiLogerrorShowPost = (data: LogerrorQO, params: RequestParams = {}) =>
    this.http.request<ApiLogerrorShowPostData, any>({
      path: `/api/logerror/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags logoperation
   * @name ApiLogoperationAddPost
   * @summary 新增数据
   * @request POST:/api/logoperation/add
   * @secure
   */
  apiLogoperationAddPost = (data: LogoperationFO, params: RequestParams = {}) =>
    this.http.request<ApiLogoperationAddPostData, any>({
      path: `/api/logoperation/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags logoperation
   * @name ApiLogoperationEditPost
   * @summary 编辑数据
   * @request POST:/api/logoperation/edit
   * @secure
   */
  apiLogoperationEditPost = (
    data: LogoperationFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiLogoperationEditPostData, any>({
      path: `/api/logoperation/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags logoperation
   * @name ApiLogoperationListPost
   * @summary 查询全部对象
   * @request POST:/api/logoperation/list
   * @secure
   */
  apiLogoperationListPost = (
    data: LogoperationQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiLogoperationListPostData, any>({
      path: `/api/logoperation/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags logoperation
   * @name ApiLogoperationPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/logoperation/paged-list
   * @secure
   */
  apiLogoperationPagedListPost = (
    data: LogoperationPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiLogoperationPagedListPostData, any>({
      path: `/api/logoperation/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags logoperation
   * @name ApiLogoperationRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/logoperation/remove-mul
   * @secure
   */
  apiLogoperationRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiLogoperationRemoveMulPostData, any>({
      path: `/api/logoperation/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags logoperation
   * @name ApiLogoperationRemovePost
   * @summary 删除1条数据
   * @request POST:/api/logoperation/remove
   * @secure
   */
  apiLogoperationRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiLogoperationRemovePostData, any>({
      path: `/api/logoperation/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags logoperation
   * @name ApiLogoperationShowPost
   * @summary 查询1个对象
   * @request POST:/api/logoperation/show
   * @secure
   */
  apiLogoperationShowPost = (
    data: LogoperationQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiLogoperationShowPostData, any>({
      path: `/api/logoperation/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags message
   * @name ApiMessageListPost
   * @summary 查询全部对象
   * @request POST:/api/message/list
   * @secure
   */
  apiMessageListPost = (data: MessageQO, params: RequestParams = {}) =>
    this.http.request<ApiMessageListPostData, any>({
      path: `/api/message/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags message
   * @name ApiMessagePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/message/paged-list
   * @secure
   */
  apiMessagePagedListPost = (data: MessagePQO, params: RequestParams = {}) =>
    this.http.request<ApiMessagePagedListPostData, any>({
      path: `/api/message/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags message
   * @name ApiMessageShowPost
   * @summary 查询1个对象
   * @request POST:/api/message/show
   * @secure
   */
  apiMessageShowPost = (data: MessageQO, params: RequestParams = {}) =>
    this.http.request<ApiMessageShowPostData, any>({
      path: `/api/message/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags msgnotice
   * @name ApiMsgnoticeAddPost
   * @summary 新增数据
   * @request POST:/api/msgnotice/add
   * @secure
   */
  apiMsgnoticeAddPost = (data: MsgnoticeFO, params: RequestParams = {}) =>
    this.http.request<ApiMsgnoticeAddPostData, any>({
      path: `/api/msgnotice/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags msgnotice
   * @name ApiMsgnoticeEditPost
   * @summary 编辑数据
   * @request POST:/api/msgnotice/edit
   * @secure
   */
  apiMsgnoticeEditPost = (data: MsgnoticeFO, params: RequestParams = {}) =>
    this.http.request<ApiMsgnoticeEditPostData, any>({
      path: `/api/msgnotice/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags msgnotice
   * @name ApiMsgnoticeListPost
   * @summary 查询全部对象
   * @request POST:/api/msgnotice/list
   * @secure
   */
  apiMsgnoticeListPost = (data: MsgnoticeQO, params: RequestParams = {}) =>
    this.http.request<ApiMsgnoticeListPostData, any>({
      path: `/api/msgnotice/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags msgnotice
   * @name ApiMsgnoticePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/msgnotice/paged-list
   * @secure
   */
  apiMsgnoticePagedListPost = (
    data: MsgnoticePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMsgnoticePagedListPostData, any>({
      path: `/api/msgnotice/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags msgnotice
   * @name ApiMsgnoticeRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/msgnotice/remove-mul
   * @secure
   */
  apiMsgnoticeRemoveMulPost = (data: RemoveMulQO, params: RequestParams = {}) =>
    this.http.request<ApiMsgnoticeRemoveMulPostData, any>({
      path: `/api/msgnotice/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags msgnotice
   * @name ApiMsgnoticeRemovePost
   * @summary 删除1条数据
   * @request POST:/api/msgnotice/remove
   * @secure
   */
  apiMsgnoticeRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiMsgnoticeRemovePostData, any>({
      path: `/api/msgnotice/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags msgnotice
   * @name ApiMsgnoticeShowPost
   * @summary 查询1个对象
   * @request POST:/api/msgnotice/show
   * @secure
   */
  apiMsgnoticeShowPost = (data: MsgnoticeQO, params: RequestParams = {}) =>
    this.http.request<ApiMsgnoticeShowPostData, any>({
      path: `/api/msgnotice/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mt-data-fix-log
   * @name ApiMtDataFixLogAddPost
   * @summary 新增数据
   * @request POST:/api/mt-data-fix-log/add
   * @secure
   */
  apiMtDataFixLogAddPost = (data: MtDataFixLogFO, params: RequestParams = {}) =>
    this.http.request<ApiMtDataFixLogAddPostData, any>({
      path: `/api/mt-data-fix-log/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mt-data-fix-log
   * @name ApiMtDataFixLogEditPost
   * @summary 编辑数据
   * @request POST:/api/mt-data-fix-log/edit
   * @secure
   */
  apiMtDataFixLogEditPost = (
    data: MtDataFixLogFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMtDataFixLogEditPostData, any>({
      path: `/api/mt-data-fix-log/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mt-data-fix-log
   * @name ApiMtDataFixLogListPost
   * @summary 查询全部对象
   * @request POST:/api/mt-data-fix-log/list
   * @secure
   */
  apiMtDataFixLogListPost = (
    data: MtDataFixLogQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMtDataFixLogListPostData, any>({
      path: `/api/mt-data-fix-log/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mt-data-fix-log
   * @name ApiMtDataFixLogPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/mt-data-fix-log/paged-list
   * @secure
   */
  apiMtDataFixLogPagedListPost = (
    data: MtDataFixLogPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMtDataFixLogPagedListPostData, any>({
      path: `/api/mt-data-fix-log/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mt-data-fix-log
   * @name ApiMtDataFixLogRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/mt-data-fix-log/remove-mul
   * @secure
   */
  apiMtDataFixLogRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMtDataFixLogRemoveMulPostData, any>({
      path: `/api/mt-data-fix-log/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mt-data-fix-log
   * @name ApiMtDataFixLogRemovePost
   * @summary 删除1条数据
   * @request POST:/api/mt-data-fix-log/remove
   * @secure
   */
  apiMtDataFixLogRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiMtDataFixLogRemovePostData, any>({
      path: `/api/mt-data-fix-log/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mt-data-fix-log
   * @name ApiMtDataFixLogShowPost
   * @summary 查询1个对象
   * @request POST:/api/mt-data-fix-log/show
   * @secure
   */
  apiMtDataFixLogShowPost = (
    data: MtDataFixLogQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMtDataFixLogShowPostData, any>({
      path: `/api/mt-data-fix-log/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mt-edit-flag-log
   * @name ApiMtEditFlagLogAddPost
   * @summary 新增数据
   * @request POST:/api/mt-edit-flag-log/add
   * @secure
   */
  apiMtEditFlagLogAddPost = (
    data: MtEditFlagLogFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMtEditFlagLogAddPostData, any>({
      path: `/api/mt-edit-flag-log/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mt-edit-flag-log
   * @name ApiMtEditFlagLogEditPost
   * @summary 编辑数据
   * @request POST:/api/mt-edit-flag-log/edit
   * @secure
   */
  apiMtEditFlagLogEditPost = (
    data: MtEditFlagLogFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMtEditFlagLogEditPostData, any>({
      path: `/api/mt-edit-flag-log/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mt-edit-flag-log
   * @name ApiMtEditFlagLogListPost
   * @summary 查询全部对象
   * @request POST:/api/mt-edit-flag-log/list
   * @secure
   */
  apiMtEditFlagLogListPost = (
    data: MtEditFlagLogQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMtEditFlagLogListPostData, any>({
      path: `/api/mt-edit-flag-log/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mt-edit-flag-log
   * @name ApiMtEditFlagLogPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/mt-edit-flag-log/paged-list
   * @secure
   */
  apiMtEditFlagLogPagedListPost = (
    data: MtEditFlagLogPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMtEditFlagLogPagedListPostData, any>({
      path: `/api/mt-edit-flag-log/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mt-edit-flag-log
   * @name ApiMtEditFlagLogRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/mt-edit-flag-log/remove-mul
   * @secure
   */
  apiMtEditFlagLogRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMtEditFlagLogRemoveMulPostData, any>({
      path: `/api/mt-edit-flag-log/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mt-edit-flag-log
   * @name ApiMtEditFlagLogRemovePost
   * @summary 删除1条数据
   * @request POST:/api/mt-edit-flag-log/remove
   * @secure
   */
  apiMtEditFlagLogRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiMtEditFlagLogRemovePostData, any>({
      path: `/api/mt-edit-flag-log/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mt-edit-flag-log
   * @name ApiMtEditFlagLogShowPost
   * @summary 查询1个对象
   * @request POST:/api/mt-edit-flag-log/show
   * @secure
   */
  apiMtEditFlagLogShowPost = (
    data: MtEditFlagLogQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMtEditFlagLogShowPostData, any>({
      path: `/api/mt-edit-flag-log/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags organization
   * @name ApiOrganizationAddPost
   * @summary 新增数据
   * @request POST:/api/organization/add
   * @secure
   */
  apiOrganizationAddPost = (
    data: OrganizationForm,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOrganizationAddPostData, any>({
      path: `/api/organization/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags organization
   * @name ApiOrganizationEditPost
   * @summary 编辑数据
   * @request POST:/api/organization/edit
   * @secure
   */
  apiOrganizationEditPost = (
    data: OrganizationForm,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOrganizationEditPostData, any>({
      path: `/api/organization/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags organization
   * @name ApiOrganizationListPost
   * @summary 查询全部对象
   * @request POST:/api/organization/list
   * @secure
   */
  apiOrganizationListPost = (
    data: OrganizationQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOrganizationListPostData, any>({
      path: `/api/organization/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags organization
   * @name ApiOrganizationPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/organization/paged-list
   * @secure
   */
  apiOrganizationPagedListPost = (
    data: OrganizationPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOrganizationPagedListPostData, any>({
      path: `/api/organization/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags organization
   * @name ApiOrganizationRemovePost
   * @summary 删除数据
   * @request POST:/api/organization/remove
   * @secure
   */
  apiOrganizationRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiOrganizationRemovePostData, any>({
      path: `/api/organization/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags organization
   * @name ApiOrganizationShowPost
   * @summary 查询1个对象
   * @request POST:/api/organization/show
   * @secure
   */
  apiOrganizationShowPost = (
    data: OrganizationQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOrganizationShowPostData, any>({
      path: `/api/organization/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags organization
   * @name ApiOrganizationTreedataPost
   * @summary 获取树形结构数据
   * @request POST:/api/organization/treedata
   * @secure
   */
  apiOrganizationTreedataPost = (
    data: OrganizationQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOrganizationTreedataPostData, any>({
      path: `/api/organization/treedata`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-event-handle
   * @name ApiOutfallEventHandleGetByEventPost
   * @summary 查询事件的处理记录(含附件)
   * @request POST:/api/outfall-event-handle/get-by-event
   * @secure
   */
  apiOutfallEventHandleGetByEventPost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallEventHandleGetByEventPostData, any>({
      path: `/api/outfall-event-handle/get-by-event`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-event-handle
   * @name ApiOutfallEventHandleListPost
   * @summary 查询全部数据
   * @request POST:/api/outfall-event-handle/list
   * @secure
   */
  apiOutfallEventHandleListPost = (
    data: OutfallEventHandleQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallEventHandleListPostData, any>({
      path: `/api/outfall-event-handle/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-event-handle
   * @name ApiOutfallEventHandlePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/outfall-event-handle/paged-list
   * @secure
   */
  apiOutfallEventHandlePagedListPost = (
    data: OutfallEventHandlePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallEventHandlePagedListPostData, any>({
      path: `/api/outfall-event-handle/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-event-handle
   * @name ApiOutfallEventHandleRemovePost
   * @summary 删除事件处理记录
   * @request POST:/api/outfall-event-handle/remove
   * @secure
   */
  apiOutfallEventHandleRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallEventHandleRemovePostData, any>({
      path: `/api/outfall-event-handle/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-event-handle
   * @name ApiOutfallEventHandleShowPost
   * @summary 查询1个对象
   * @request POST:/api/outfall-event-handle/show
   * @secure
   */
  apiOutfallEventHandleShowPost = (
    data: OutfallEventHandleQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallEventHandleShowPostData, any>({
      path: `/api/outfall-event-handle/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-event-info
   * @name ApiOutfallEventInfoAddPost
   * @summary 事件上报/人工发起
   * @request POST:/api/outfall-event-info/add
   * @secure
   */
  apiOutfallEventInfoAddPost = (
    data: OutfallEventInfoFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallEventInfoAddPostData, any>({
      path: `/api/outfall-event-info/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-event-info
   * @name ApiOutfallEventInfoAuditHandlePost
   * @summary 事件处理结果审核
   * @request POST:/api/outfall-event-info/audit-handle
   * @secure
   */
  apiOutfallEventInfoAuditHandlePost = (
    data: EventHandleAuditFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallEventInfoAuditHandlePostData, any>({
      path: `/api/outfall-event-info/audit-handle`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-event-info
   * @name ApiOutfallEventInfoAuditPost
   * @summary 事件审核
   * @request POST:/api/outfall-event-info/audit
   * @secure
   */
  apiOutfallEventInfoAuditPost = (
    data: EventAuditFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallEventInfoAuditPostData, any>({
      path: `/api/outfall-event-info/audit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-event-info
   * @name ApiOutfallEventInfoCountPost
   * @summary 查询事件数量
   * @request POST:/api/outfall-event-info/count
   * @secure
   */
  apiOutfallEventInfoCountPost = (
    data: OutfallEventInfoQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallEventInfoCountPostData, any>({
      path: `/api/outfall-event-info/count`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-event-info
   * @name ApiOutfallEventInfoDetailPost
   * @summary 事件详情(含处理记录、附件)
   * @request POST:/api/outfall-event-info/detail
   * @secure
   */
  apiOutfallEventInfoDetailPost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallEventInfoDetailPostData, any>({
      path: `/api/outfall-event-info/detail`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-event-info
   * @name ApiOutfallEventInfoDispatchPost
   * @summary 事件派遣
   * @request POST:/api/outfall-event-info/dispatch
   * @secure
   */
  apiOutfallEventInfoDispatchPost = (
    data: EventDispatchFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallEventInfoDispatchPostData, any>({
      path: `/api/outfall-event-info/dispatch`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-event-info
   * @name ApiOutfallEventInfoFromPrealarmPost
   * @summary 预警记录转事件
   * @request POST:/api/outfall-event-info/from-prealarm
   * @secure
   */
  apiOutfallEventInfoFromPrealarmPost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallEventInfoFromPrealarmPostData, any>({
      path: `/api/outfall-event-info/from-prealarm`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-event-info
   * @name ApiOutfallEventInfoHandlePost
   * @summary 事件处理
   * @request POST:/api/outfall-event-info/handle
   * @secure
   */
  apiOutfallEventInfoHandlePost = (
    data: EventHandleActFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallEventInfoHandlePostData, any>({
      path: `/api/outfall-event-info/handle`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-event-info
   * @name ApiOutfallEventInfoListPost
   * @summary 查询全部数据
   * @request POST:/api/outfall-event-info/list
   * @secure
   */
  apiOutfallEventInfoListPost = (
    data: OutfallEventInfoQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallEventInfoListPostData, any>({
      path: `/api/outfall-event-info/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-event-info
   * @name ApiOutfallEventInfoPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/outfall-event-info/paged-list
   * @secure
   */
  apiOutfallEventInfoPagedListPost = (
    data: OutfallEventInfoPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallEventInfoPagedListPostData, any>({
      path: `/api/outfall-event-info/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-event-info
   * @name ApiOutfallEventInfoRemovePost
   * @summary 删除事件
   * @request POST:/api/outfall-event-info/remove
   * @secure
   */
  apiOutfallEventInfoRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallEventInfoRemovePostData, any>({
      path: `/api/outfall-event-info/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-event-info
   * @name ApiOutfallEventInfoShowPost
   * @summary 查询1个对象
   * @request POST:/api/outfall-event-info/show
   * @secure
   */
  apiOutfallEventInfoShowPost = (
    data: OutfallEventInfoQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallEventInfoShowPostData, any>({
      path: `/api/outfall-event-info/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-event-info
   * @name ApiOutfallEventInfoStByOutfallPost
   * @summary 事件按入河排污口统计
   * @request POST:/api/outfall-event-info/st-by-outfall
   * @secure
   */
  apiOutfallEventInfoStByOutfallPost = (
    data: OutfallEventInfoQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallEventInfoStByOutfallPostData, any>({
      path: `/api/outfall-event-info/st-by-outfall`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-event-info
   * @name ApiOutfallEventInfoStByStatusPost
   * @summary 事件状态统计
   * @request POST:/api/outfall-event-info/st-by-status
   * @secure
   */
  apiOutfallEventInfoStByStatusPost = (
    data: OutfallEventInfoQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallEventInfoStByStatusPostData, any>({
      path: `/api/outfall-event-info/st-by-status`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-event-info
   * @name ApiOutfallEventInfoStByTypePost
   * @summary 事件按类型统计
   * @request POST:/api/outfall-event-info/st-by-type
   * @secure
   */
  apiOutfallEventInfoStByTypePost = (
    data: OutfallEventInfoQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallEventInfoStByTypePostData, any>({
      path: `/api/outfall-event-info/st-by-type`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-plan
   * @name ApiOutfallInspectionPlanAddPost
   * @summary 新增巡检计划
   * @request POST:/api/outfall-inspection-plan/add
   * @secure
   */
  apiOutfallInspectionPlanAddPost = (
    data: OutfallInspectionPlanFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionPlanAddPostData, any>({
      path: `/api/outfall-inspection-plan/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-plan
   * @name ApiOutfallInspectionPlanChangeStatusPost
   * @summary 启用/停用巡检计划
   * @request POST:/api/outfall-inspection-plan/change-status
   * @secure
   */
  apiOutfallInspectionPlanChangeStatusPost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionPlanChangeStatusPostData, any>({
      path: `/api/outfall-inspection-plan/change-status`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-plan
   * @name ApiOutfallInspectionPlanEditPost
   * @summary 编辑巡检计划
   * @request POST:/api/outfall-inspection-plan/edit
   * @secure
   */
  apiOutfallInspectionPlanEditPost = (
    data: OutfallInspectionPlanFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionPlanEditPostData, any>({
      path: `/api/outfall-inspection-plan/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-plan
   * @name ApiOutfallInspectionPlanGenerateTaskPost
   * @summary 按巡检计划生成巡检任务
   * @request POST:/api/outfall-inspection-plan/generate-task
   * @secure
   */
  apiOutfallInspectionPlanGenerateTaskPost = (
    data: InspectionTaskGenerateFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionPlanGenerateTaskPostData, any>({
      path: `/api/outfall-inspection-plan/generate-task`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-plan
   * @name ApiOutfallInspectionPlanListPost
   * @summary 查询全部数据
   * @request POST:/api/outfall-inspection-plan/list
   * @secure
   */
  apiOutfallInspectionPlanListPost = (
    data: OutfallInspectionPlanQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionPlanListPostData, any>({
      path: `/api/outfall-inspection-plan/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-plan
   * @name ApiOutfallInspectionPlanPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/outfall-inspection-plan/paged-list
   * @secure
   */
  apiOutfallInspectionPlanPagedListPost = (
    data: OutfallInspectionPlanPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionPlanPagedListPostData, any>({
      path: `/api/outfall-inspection-plan/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-plan
   * @name ApiOutfallInspectionPlanRemovePost
   * @summary 删除巡检计划
   * @request POST:/api/outfall-inspection-plan/remove
   * @secure
   */
  apiOutfallInspectionPlanRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionPlanRemovePostData, any>({
      path: `/api/outfall-inspection-plan/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-plan
   * @name ApiOutfallInspectionPlanShowPost
   * @summary 查询1个对象
   * @request POST:/api/outfall-inspection-plan/show
   * @secure
   */
  apiOutfallInspectionPlanShowPost = (
    data: OutfallInspectionPlanQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionPlanShowPostData, any>({
      path: `/api/outfall-inspection-plan/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-plan
   * @name ApiOutfallInspectionPlanStByStatusPost
   * @summary 巡检计划状态统计
   * @request POST:/api/outfall-inspection-plan/st-by-status
   * @secure
   */
  apiOutfallInspectionPlanStByStatusPost = (
    data: OutfallInspectionPlanQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionPlanStByStatusPostData, any>({
      path: `/api/outfall-inspection-plan/st-by-status`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-record
   * @name ApiOutfallInspectionRecordAddPost
   * @summary 新增巡检记录(开始巡检、签到)
   * @request POST:/api/outfall-inspection-record/add
   * @secure
   */
  apiOutfallInspectionRecordAddPost = (
    data: OutfallInspectionRecordFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionRecordAddPostData, any>({
      path: `/api/outfall-inspection-record/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-record
   * @name ApiOutfallInspectionRecordCheckOutPost
   * @summary 结束巡检(签退)
   * @request POST:/api/outfall-inspection-record/check-out
   * @secure
   */
  apiOutfallInspectionRecordCheckOutPost = (
    data: InspectionCheckOutFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionRecordCheckOutPostData, any>({
      path: `/api/outfall-inspection-record/check-out`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-record
   * @name ApiOutfallInspectionRecordDetailPost
   * @summary 巡检记录详情(含轨迹、附件)
   * @request POST:/api/outfall-inspection-record/detail
   * @secure
   */
  apiOutfallInspectionRecordDetailPost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionRecordDetailPostData, any>({
      path: `/api/outfall-inspection-record/detail`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-record
   * @name ApiOutfallInspectionRecordListPost
   * @summary 查询全部数据
   * @request POST:/api/outfall-inspection-record/list
   * @secure
   */
  apiOutfallInspectionRecordListPost = (
    data: OutfallInspectionRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionRecordListPostData, any>({
      path: `/api/outfall-inspection-record/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-record
   * @name ApiOutfallInspectionRecordPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/outfall-inspection-record/paged-list
   * @secure
   */
  apiOutfallInspectionRecordPagedListPost = (
    data: OutfallInspectionRecordPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionRecordPagedListPostData, any>({
      path: `/api/outfall-inspection-record/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-record
   * @name ApiOutfallInspectionRecordRemovePost
   * @summary 删除巡检记录
   * @request POST:/api/outfall-inspection-record/remove
   * @secure
   */
  apiOutfallInspectionRecordRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionRecordRemovePostData, any>({
      path: `/api/outfall-inspection-record/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-record
   * @name ApiOutfallInspectionRecordShowPost
   * @summary 查询1个对象
   * @request POST:/api/outfall-inspection-record/show
   * @secure
   */
  apiOutfallInspectionRecordShowPost = (
    data: OutfallInspectionRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionRecordShowPostData, any>({
      path: `/api/outfall-inspection-record/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-record
   * @name ApiOutfallInspectionRecordStByAbnormalPost
   * @summary 巡检记录是否发现异常统计
   * @request POST:/api/outfall-inspection-record/st-by-abnormal
   * @secure
   */
  apiOutfallInspectionRecordStByAbnormalPost = (
    data: OutfallInspectionRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionRecordStByAbnormalPostData, any>({
      path: `/api/outfall-inspection-record/st-by-abnormal`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-record
   * @name ApiOutfallInspectionRecordStByPersonPost
   * @summary 巡检记录按巡检人统计
   * @request POST:/api/outfall-inspection-record/st-by-person
   * @secure
   */
  apiOutfallInspectionRecordStByPersonPost = (
    data: OutfallInspectionRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionRecordStByPersonPostData, any>({
      path: `/api/outfall-inspection-record/st-by-person`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-task
   * @name ApiOutfallInspectionTaskAddPost
   * @summary 新增巡检任务(临时任务)
   * @request POST:/api/outfall-inspection-task/add
   * @secure
   */
  apiOutfallInspectionTaskAddPost = (
    data: OutfallInspectionTaskFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionTaskAddPostData, any>({
      path: `/api/outfall-inspection-task/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-task
   * @name ApiOutfallInspectionTaskCancelPost
   * @summary 取消巡检任务
   * @request POST:/api/outfall-inspection-task/cancel
   * @secure
   */
  apiOutfallInspectionTaskCancelPost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionTaskCancelPostData, any>({
      path: `/api/outfall-inspection-task/cancel`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-task
   * @name ApiOutfallInspectionTaskEditPost
   * @summary 编辑巡检任务
   * @request POST:/api/outfall-inspection-task/edit
   * @secure
   */
  apiOutfallInspectionTaskEditPost = (
    data: OutfallInspectionTaskFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionTaskEditPostData, any>({
      path: `/api/outfall-inspection-task/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-task
   * @name ApiOutfallInspectionTaskFinishPost
   * @summary 结束巡检(签退)
   * @request POST:/api/outfall-inspection-task/finish
   * @secure
   */
  apiOutfallInspectionTaskFinishPost = (
    data: InspectionCheckOutFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionTaskFinishPostData, any>({
      path: `/api/outfall-inspection-task/finish`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-task
   * @name ApiOutfallInspectionTaskGenerateTaskPost
   * @summary 按巡检计划生成巡检任务
   * @request POST:/api/outfall-inspection-task/generate-task
   * @secure
   */
  apiOutfallInspectionTaskGenerateTaskPost = (
    data: InspectionTaskGenerateFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionTaskGenerateTaskPostData, any>({
      path: `/api/outfall-inspection-task/generate-task`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-task
   * @name ApiOutfallInspectionTaskListPost
   * @summary 查询全部数据
   * @request POST:/api/outfall-inspection-task/list
   * @secure
   */
  apiOutfallInspectionTaskListPost = (
    data: OutfallInspectionTaskQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionTaskListPostData, any>({
      path: `/api/outfall-inspection-task/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-task
   * @name ApiOutfallInspectionTaskPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/outfall-inspection-task/paged-list
   * @secure
   */
  apiOutfallInspectionTaskPagedListPost = (
    data: OutfallInspectionTaskPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionTaskPagedListPostData, any>({
      path: `/api/outfall-inspection-task/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-task
   * @name ApiOutfallInspectionTaskRemovePost
   * @summary 删除巡检任务
   * @request POST:/api/outfall-inspection-task/remove
   * @secure
   */
  apiOutfallInspectionTaskRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionTaskRemovePostData, any>({
      path: `/api/outfall-inspection-task/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-task
   * @name ApiOutfallInspectionTaskShowPost
   * @summary 查询1个对象
   * @request POST:/api/outfall-inspection-task/show
   * @secure
   */
  apiOutfallInspectionTaskShowPost = (
    data: OutfallInspectionTaskQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionTaskShowPostData, any>({
      path: `/api/outfall-inspection-task/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-task
   * @name ApiOutfallInspectionTaskStartPost
   * @summary 开始巡检(签到)
   * @request POST:/api/outfall-inspection-task/start
   * @secure
   */
  apiOutfallInspectionTaskStartPost = (
    data: InspectionCheckInFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionTaskStartPostData, any>({
      path: `/api/outfall-inspection-task/start`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-task
   * @name ApiOutfallInspectionTaskStByOutfallPost
   * @summary 巡检任务按入河排污口统计
   * @request POST:/api/outfall-inspection-task/st-by-outfall
   * @secure
   */
  apiOutfallInspectionTaskStByOutfallPost = (
    data: OutfallInspectionTaskQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionTaskStByOutfallPostData, any>({
      path: `/api/outfall-inspection-task/st-by-outfall`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-task
   * @name ApiOutfallInspectionTaskStByStatusPost
   * @summary 巡检任务状态统计
   * @request POST:/api/outfall-inspection-task/st-by-status
   * @secure
   */
  apiOutfallInspectionTaskStByStatusPost = (
    data: OutfallInspectionTaskQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionTaskStByStatusPostData, any>({
      path: `/api/outfall-inspection-task/st-by-status`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-track
   * @name ApiOutfallInspectionTrackAddPost
   * @summary 新增巡检轨迹
   * @request POST:/api/outfall-inspection-track/add
   * @secure
   */
  apiOutfallInspectionTrackAddPost = (
    data: OutfallInspectionTrackFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionTrackAddPostData, any>({
      path: `/api/outfall-inspection-track/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-track
   * @name ApiOutfallInspectionTrackGetByRecordPost
   * @summary 查询巡检记录的轨迹
   * @request POST:/api/outfall-inspection-track/get-by-record
   * @secure
   */
  apiOutfallInspectionTrackGetByRecordPost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionTrackGetByRecordPostData, any>({
      path: `/api/outfall-inspection-track/get-by-record`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-track
   * @name ApiOutfallInspectionTrackListPost
   * @summary 查询全部数据
   * @request POST:/api/outfall-inspection-track/list
   * @secure
   */
  apiOutfallInspectionTrackListPost = (
    data: OutfallInspectionTrackQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionTrackListPostData, any>({
      path: `/api/outfall-inspection-track/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-track
   * @name ApiOutfallInspectionTrackPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/outfall-inspection-track/paged-list
   * @secure
   */
  apiOutfallInspectionTrackPagedListPost = (
    data: OutfallInspectionTrackPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionTrackPagedListPostData, any>({
      path: `/api/outfall-inspection-track/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-track
   * @name ApiOutfallInspectionTrackRemovePost
   * @summary 删除巡检轨迹
   * @request POST:/api/outfall-inspection-track/remove
   * @secure
   */
  apiOutfallInspectionTrackRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionTrackRemovePostData, any>({
      path: `/api/outfall-inspection-track/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-track
   * @name ApiOutfallInspectionTrackShowPost
   * @summary 查询1个对象
   * @request POST:/api/outfall-inspection-track/show
   * @secure
   */
  apiOutfallInspectionTrackShowPost = (
    data: OutfallInspectionTrackQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionTrackShowPostData, any>({
      path: `/api/outfall-inspection-track/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags outfall-inspection-track
   * @name ApiOutfallInspectionTrackUploadTracksPost
   * @summary 批量上传巡检轨迹
   * @request POST:/api/outfall-inspection-track/upload-tracks
   * @secure
   */
  apiOutfallInspectionTrackUploadTracksPost = (
    data: InspectionTrackUploadFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiOutfallInspectionTrackUploadTracksPostData, any>({
      path: `/api/outfall-inspection-track/upload-tracks`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags prealarm-record
   * @name ApiPrealarmRecordAddPost
   * @summary 新增数据
   * @request POST:/api/prealarm-record/add
   * @secure
   */
  apiPrealarmRecordAddPost = (
    data: PrealarmRecordFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiPrealarmRecordAddPostData, any>({
      path: `/api/prealarm-record/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags prealarm-record
   * @name ApiPrealarmRecordAppPushPost
   * @summary 应用内推送预警记录
   * @request POST:/api/prealarm-record/app-push
   * @secure
   */
  apiPrealarmRecordAppPushPost = (
    data: ReportPrealarmQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiPrealarmRecordAppPushPostData, any>({
      path: `/api/prealarm-record/app-push`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags prealarm-record
   * @name ApiPrealarmRecordEditPost
   * @summary 编辑数据
   * @request POST:/api/prealarm-record/edit
   * @secure
   */
  apiPrealarmRecordEditPost = (
    data: PrealarmRecordFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiPrealarmRecordEditPostData, any>({
      path: `/api/prealarm-record/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags prealarm-record
   * @name ApiPrealarmRecordGroupByDayPost
   * @summary 按日统计
   * @request POST:/api/prealarm-record/group-by-day
   * @secure
   */
  apiPrealarmRecordGroupByDayPost = (
    data: PrealarmStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiPrealarmRecordGroupByDayPostData, any>({
      path: `/api/prealarm-record/group-by-day`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags prealarm-record
   * @name ApiPrealarmRecordGroupByMonthPost
   * @summary 按月统计
   * @request POST:/api/prealarm-record/group-by-month
   * @secure
   */
  apiPrealarmRecordGroupByMonthPost = (
    data: PrealarmStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiPrealarmRecordGroupByMonthPostData, any>({
      path: `/api/prealarm-record/group-by-month`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags prealarm-record
   * @name ApiPrealarmRecordGroupByOutfallPost
   * @summary 按入河排污口统计
   * @request POST:/api/prealarm-record/group-by-outfall
   * @secure
   */
  apiPrealarmRecordGroupByOutfallPost = (
    data: PrealarmStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiPrealarmRecordGroupByOutfallPostData, any>({
      path: `/api/prealarm-record/group-by-outfall`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags prealarm-record
   * @name ApiPrealarmRecordGroupByYearPost
   * @summary 按年统计
   * @request POST:/api/prealarm-record/group-by-year
   * @secure
   */
  apiPrealarmRecordGroupByYearPost = (
    data: PrealarmStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiPrealarmRecordGroupByYearPostData, any>({
      path: `/api/prealarm-record/group-by-year`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags prealarm-record
   * @name ApiPrealarmRecordPagedListPost
   * @summary 分页预警记录
   * @request POST:/api/prealarm-record/paged-list
   * @secure
   */
  apiPrealarmRecordPagedListPost = (
    data: PrealarmRecordPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiPrealarmRecordPagedListPostData, any>({
      path: `/api/prealarm-record/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags prealarm-record
   * @name ApiPrealarmRecordRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/prealarm-record/remove-mul
   * @secure
   */
  apiPrealarmRecordRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiPrealarmRecordRemoveMulPostData, any>({
      path: `/api/prealarm-record/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags prealarm-record
   * @name ApiPrealarmRecordRemovePost
   * @summary 删除1条数据
   * @request POST:/api/prealarm-record/remove
   * @secure
   */
  apiPrealarmRecordRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiPrealarmRecordRemovePostData, any>({
      path: `/api/prealarm-record/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags prealarm-record
   * @name ApiPrealarmRecordShowOnePost
   * @summary 查询一条预警记录
   * @request POST:/api/prealarm-record/show-one
   * @secure
   */
  apiPrealarmRecordShowOnePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiPrealarmRecordShowOnePostData, any>({
      path: `/api/prealarm-record/show-one`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags prealarm-record
   * @name ApiPrealarmRecordWhitelistPost
   * @summary 不设权限查询所有预警记录
   * @request POST:/api/prealarm-record/whitelist
   * @secure
   */
  apiPrealarmRecordWhitelistPost = (
    data: PrealarmRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiPrealarmRecordWhitelistPostData, any>({
      path: `/api/prealarm-record/whitelist`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags prealarm-record
   * @name ApiPrealarmRecordWhitePagedListPost
   * @summary 不设权限分页查询预警记录
   * @request POST:/api/prealarm-record/white-paged-list
   * @secure
   */
  apiPrealarmRecordWhitePagedListPost = (
    data: PrealarmRecordPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiPrealarmRecordWhitePagedListPostData, any>({
      path: `/api/prealarm-record/white-paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags prealarm-rule
   * @name ApiPrealarmRuleEditMulByEpnPost
   * @summary 根据监测因子名称批量编辑
   * @request POST:/api/prealarm-rule/edit-mul-by-epn
   * @secure
   */
  apiPrealarmRuleEditMulByEpnPost = (
    data: PrEditMulByEpnFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiPrealarmRuleEditMulByEpnPostData, any>({
      path: `/api/prealarm-rule/edit-mul-by-epn`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags prealarm-rule
   * @name ApiPrealarmRuleEditMulPost
   * @summary 批量编辑
   * @request POST:/api/prealarm-rule/edit-mul
   * @secure
   */
  apiPrealarmRuleEditMulPost = (
    data: PrEditMulFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiPrealarmRuleEditMulPostData, any>({
      path: `/api/prealarm-rule/edit-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags prealarm-rule
   * @name ApiPrealarmRuleGetByTechnicsPost
   * @summary 根据监测点查询配置
   * @request POST:/api/prealarm-rule/get-by-technics
   * @secure
   */
  apiPrealarmRuleGetByTechnicsPost = (
    data: OnlyTechnicsIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiPrealarmRuleGetByTechnicsPostData, any>({
      path: `/api/prealarm-rule/get-by-technics`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags record-file
   * @name ApiRecordFileListPost
   * @summary 查询全部对象
   * @request POST:/api/record-file/list
   * @secure
   */
  apiRecordFileListPost = (data: RecordFileQO, params: RequestParams = {}) =>
    this.http.request<ApiRecordFileListPostData, any>({
      path: `/api/record-file/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags record-file
   * @name ApiRecordFilePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/record-file/paged-list
   * @secure
   */
  apiRecordFilePagedListPost = (
    data: RecordFilePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiRecordFilePagedListPostData, any>({
      path: `/api/record-file/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags record-file
   * @name ApiRecordFileRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/record-file/remove-mul
   * @secure
   */
  apiRecordFileRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiRecordFileRemoveMulPostData, any>({
      path: `/api/record-file/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags record-file
   * @name ApiRecordFileRemovePost
   * @summary 删除1条数据
   * @request POST:/api/record-file/remove
   * @secure
   */
  apiRecordFileRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiRecordFileRemovePostData, any>({
      path: `/api/record-file/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags record-file
   * @name ApiRecordFileShowPost
   * @summary 查询1个对象
   * @request POST:/api/record-file/show
   * @secure
   */
  apiRecordFileShowPost = (data: RecordFileQO, params: RequestParams = {}) =>
    this.http.request<ApiRecordFileShowPostData, any>({
      path: `/api/record-file/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-rp
   * @name ApiReservoirRpAddPost
   * @summary 新增数据
   * @request POST:/api/reservoir-rp/add
   * @secure
   */
  apiReservoirRpAddPost = (data: ReservoirRpFO, params: RequestParams = {}) =>
    this.http.request<ApiReservoirRpAddPostData, any>({
      path: `/api/reservoir-rp/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-rp
   * @name ApiReservoirRpEditPost
   * @summary 编辑数据
   * @request POST:/api/reservoir-rp/edit
   * @secure
   */
  apiReservoirRpEditPost = (data: ReservoirRpFO, params: RequestParams = {}) =>
    this.http.request<ApiReservoirRpEditPostData, any>({
      path: `/api/reservoir-rp/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-rp
   * @name ApiReservoirRpListPost
   * @summary 查询全部对象
   * @request POST:/api/reservoir-rp/list
   * @secure
   */
  apiReservoirRpListPost = (data: ReservoirRpQO, params: RequestParams = {}) =>
    this.http.request<ApiReservoirRpListPostData, any>({
      path: `/api/reservoir-rp/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-rp
   * @name ApiReservoirRpPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/reservoir-rp/paged-list
   * @secure
   */
  apiReservoirRpPagedListPost = (
    data: ReservoirRpPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirRpPagedListPostData, any>({
      path: `/api/reservoir-rp/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-rp
   * @name ApiReservoirRpRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/reservoir-rp/remove-mul
   * @secure
   */
  apiReservoirRpRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirRpRemoveMulPostData, any>({
      path: `/api/reservoir-rp/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-rp
   * @name ApiReservoirRpRemovePost
   * @summary 删除1条数据
   * @request POST:/api/reservoir-rp/remove
   * @secure
   */
  apiReservoirRpRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiReservoirRpRemovePostData, any>({
      path: `/api/reservoir-rp/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-rp
   * @name ApiReservoirRpShowPost
   * @summary 查询1个对象
   * @request POST:/api/reservoir-rp/show
   * @secure
   */
  apiReservoirRpShowPost = (data: ReservoirRpQO, params: RequestParams = {}) =>
    this.http.request<ApiReservoirRpShowPostData, any>({
      path: `/api/reservoir-rp/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags resource
   * @name ApiResourceAddPost
   * @summary 新增数据
   * @request POST:/api/resource/add
   * @secure
   */
  apiResourceAddPost = (data: ResourceForm, params: RequestParams = {}) =>
    this.http.request<ApiResourceAddPostData, any>({
      path: `/api/resource/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags resource
   * @name ApiResourceEditPost
   * @summary 编辑数据
   * @request POST:/api/resource/edit
   * @secure
   */
  apiResourceEditPost = (data: ResourceForm, params: RequestParams = {}) =>
    this.http.request<ApiResourceEditPostData, any>({
      path: `/api/resource/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags resource
   * @name ApiResourceGetResourcesPost
   * @summary 根据角色查询资源列表
   * @request POST:/api/resource/get-resources
   * @secure
   */
  apiResourceGetResourcesPost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiResourceGetResourcesPostData, any>({
      path: `/api/resource/get-resources`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags resource
   * @name ApiResourceListPost
   * @summary 查询全部对象
   * @request POST:/api/resource/list
   * @secure
   */
  apiResourceListPost = (data: ResourceQO, params: RequestParams = {}) =>
    this.http.request<ApiResourceListPostData, any>({
      path: `/api/resource/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags resource
   * @name ApiResourcePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/resource/paged-list
   * @secure
   */
  apiResourcePagedListPost = (data: ResourcePQO, params: RequestParams = {}) =>
    this.http.request<ApiResourcePagedListPostData, any>({
      path: `/api/resource/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags resource
   * @name ApiResourceRemovePost
   * @summary 删除数据
   * @request POST:/api/resource/remove
   * @secure
   */
  apiResourceRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiResourceRemovePostData, any>({
      path: `/api/resource/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags resource
   * @name ApiResourceRoutePathsPost
   * @summary 获取所有接口路径
   * @request POST:/api/resource/route-paths
   * @secure
   */
  apiResourceRoutePathsPost = (params: RequestParams = {}) =>
    this.http.request<ApiResourceRoutePathsPostData, any>({
      path: `/api/resource/route-paths`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags resource
   * @name ApiResourceShowPost
   * @summary 查询1个对象
   * @request POST:/api/resource/show
   * @secure
   */
  apiResourceShowPost = (data: ResourceQO, params: RequestParams = {}) =>
    this.http.request<ApiResourceShowPostData, any>({
      path: `/api/resource/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags resource
   * @name ApiResourceTreedataPost
   * @summary 获取树形结构数据
   * @request POST:/api/resource/treedata
   * @secure
   */
  apiResourceTreedataPost = (data: ResourceQO, params: RequestParams = {}) =>
    this.http.request<ApiResourceTreedataPostData, any>({
      path: `/api/resource/treedata`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags river-sewage-outfall
   * @name ApiRiverSewageOutfallAddPost
   * @summary 新增数据
   * @request POST:/api/river-sewage-outfall/add
   * @secure
   */
  apiRiverSewageOutfallAddPost = (
    data: RiverSewageOutfallFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiRiverSewageOutfallAddPostData, any>({
      path: `/api/river-sewage-outfall/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags river-sewage-outfall
   * @name ApiRiverSewageOutfallDptopstPost
   * @summary 数据看板顶部统计
   * @request POST:/api/river-sewage-outfall/dptopst
   * @secure
   */
  apiRiverSewageOutfallDptopstPost = (params: RequestParams = {}) =>
    this.http.request<ApiRiverSewageOutfallDptopstPostData, any>({
      path: `/api/river-sewage-outfall/dptopst`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags river-sewage-outfall
   * @name ApiRiverSewageOutfallEditPost
   * @summary 编辑数据
   * @request POST:/api/river-sewage-outfall/edit
   * @secure
   */
  apiRiverSewageOutfallEditPost = (
    data: RiverSewageOutfallFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiRiverSewageOutfallEditPostData, any>({
      path: `/api/river-sewage-outfall/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags river-sewage-outfall
   * @name ApiRiverSewageOutfallListPost
   * @summary 查询全部对象
   * @request POST:/api/river-sewage-outfall/list
   * @secure
   */
  apiRiverSewageOutfallListPost = (
    data: RiverSewageOutfallQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiRiverSewageOutfallListPostData, any>({
      path: `/api/river-sewage-outfall/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags river-sewage-outfall
   * @name ApiRiverSewageOutfallMapListPost
   * @summary 地图点位数据
   * @request POST:/api/river-sewage-outfall/map-list
   * @secure
   */
  apiRiverSewageOutfallMapListPost = (
    data: RiverSewageOutfallQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiRiverSewageOutfallMapListPostData, any>({
      path: `/api/river-sewage-outfall/map-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags river-sewage-outfall
   * @name ApiRiverSewageOutfallMpstPost
   * @summary 排污口总览
   * @request POST:/api/river-sewage-outfall/mpst
   * @secure
   */
  apiRiverSewageOutfallMpstPost = (params: RequestParams = {}) =>
    this.http.request<ApiRiverSewageOutfallMpstPostData, any>({
      path: `/api/river-sewage-outfall/mpst`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags river-sewage-outfall
   * @name ApiRiverSewageOutfallPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/river-sewage-outfall/paged-list
   * @secure
   */
  apiRiverSewageOutfallPagedListPost = (
    data: RiverSewageOutfallPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiRiverSewageOutfallPagedListPostData, any>({
      path: `/api/river-sewage-outfall/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags river-sewage-outfall
   * @name ApiRiverSewageOutfallRemovePost
   * @summary 删除数据
   * @request POST:/api/river-sewage-outfall/remove
   * @secure
   */
  apiRiverSewageOutfallRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiRiverSewageOutfallRemovePostData, any>({
      path: `/api/river-sewage-outfall/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags river-sewage-outfall
   * @name ApiRiverSewageOutfallShowPost
   * @summary 查询1个对象
   * @request POST:/api/river-sewage-outfall/show
   * @secure
   */
  apiRiverSewageOutfallShowPost = (
    data: RiverSewageOutfallQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiRiverSewageOutfallShowPostData, any>({
      path: `/api/river-sewage-outfall/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags river-sewage-outfall
   * @name ApiRiverSewageOutfallStbyCategoryPost
   * @summary 排污口按类别统计
   * @request POST:/api/river-sewage-outfall/stby-category
   * @secure
   */
  apiRiverSewageOutfallStbyCategoryPost = (
    data: RiverSewageOutfallQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiRiverSewageOutfallStbyCategoryPostData, any>({
      path: `/api/river-sewage-outfall/stby-category`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags river-sewage-outfall
   * @name ApiRiverSewageOutfallStbyRiverPost
   * @summary 排污口按河流统计
   * @request POST:/api/river-sewage-outfall/stby-river
   * @secure
   */
  apiRiverSewageOutfallStbyRiverPost = (
    data: RiverSewageOutfallQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiRiverSewageOutfallStbyRiverPostData, any>({
      path: `/api/river-sewage-outfall/stby-river`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags role
   * @name ApiRoleAddPost
   * @summary 新增数据
   * @request POST:/api/role/add
   * @secure
   */
  apiRoleAddPost = (data: RoleFO, params: RequestParams = {}) =>
    this.http.request<ApiRoleAddPostData, any>({
      path: `/api/role/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags role
   * @name ApiRoleAssignResourcePost
   * @summary 角色分配资源
   * @request POST:/api/role/assign-resource
   * @secure
   */
  apiRoleAssignResourcePost = (
    data: RoleAssignResourcesQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiRoleAssignResourcePostData, any>({
      path: `/api/role/assign-resource`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags role
   * @name ApiRoleEditPost
   * @summary 编辑数据
   * @request POST:/api/role/edit
   * @secure
   */
  apiRoleEditPost = (data: RoleFO, params: RequestParams = {}) =>
    this.http.request<ApiRoleEditPostData, any>({
      path: `/api/role/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags role
   * @name ApiRoleListPost
   * @summary 查询全部对象
   * @request POST:/api/role/list
   * @secure
   */
  apiRoleListPost = (data: RoleQO, params: RequestParams = {}) =>
    this.http.request<ApiRoleListPostData, any>({
      path: `/api/role/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags role
   * @name ApiRolePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/role/paged-list
   * @secure
   */
  apiRolePagedListPost = (data: RolePQO, params: RequestParams = {}) =>
    this.http.request<ApiRolePagedListPostData, any>({
      path: `/api/role/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags role
   * @name ApiRoleRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/role/remove-mul
   * @secure
   */
  apiRoleRemoveMulPost = (data: RemoveMulQO, params: RequestParams = {}) =>
    this.http.request<ApiRoleRemoveMulPostData, any>({
      path: `/api/role/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags role
   * @name ApiRoleRemovePost
   * @summary 删除1条数据
   * @request POST:/api/role/remove
   * @secure
   */
  apiRoleRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiRoleRemovePostData, any>({
      path: `/api/role/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags role
   * @name ApiRoleShowPost
   * @summary 查询1个对象
   * @request POST:/api/role/show
   * @secure
   */
  apiRoleShowPost = (data: RoleQO, params: RequestParams = {}) =>
    this.http.request<ApiRoleShowPostData, any>({
      path: `/api/role/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags sso
   * @name ApiSsoDoLoginByTicketPost
   * @summary 根据Ticket登录
   * @request POST:/api/sso/do-login-by-ticket
   * @secure
   */
  apiSsoDoLoginByTicketPost = (
    query: ApiSsoDoLoginByTicketPostParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiSsoDoLoginByTicketPostData, any>({
      path: `/api/sso/do-login-by-ticket`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags sso
   * @name ApiSsoGetSsoAuthUrlPost
   * @summary 获取单点登录授权地址
   * @request POST:/api/sso/get-sso-auth-url
   * @secure
   */
  apiSsoGetSsoAuthUrlPost = (
    query: ApiSsoGetSsoAuthUrlPostParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiSsoGetSsoAuthUrlPostData, any>({
      path: `/api/sso/get-sso-auth-url`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags sys-cache
   * @name ApiSysCacheDeletebyprekeyPrefixkeyPost
   * @summary 根据键名前缀删除缓存 🔖
   * @request POST:/api/sys-cache/deletebyprekey/{prefixkey}
   * @secure
   */
  apiSysCacheDeletebyprekeyPrefixkeyPost = (
    { prefixkey }: ApiSysCacheDeletebyprekeyPrefixkeyPostParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiSysCacheDeletebyprekeyPrefixkeyPostData, any>({
      path: `/api/sys-cache/deletebyprekey/${prefixkey}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags sys-cache
   * @name ApiSysCacheDeleteKeyPost
   * @summary 删除缓存 🔖
   * @request POST:/api/sys-cache/delete/{key}
   * @secure
   */
  apiSysCacheDeleteKeyPost = (
    { key }: ApiSysCacheDeleteKeyPostParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiSysCacheDeleteKeyPostData, any>({
      path: `/api/sys-cache/delete/${key}`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags sys-cache
   * @name ApiSysCacheKeyListGet
   * @summary 获取缓存键名集合 🔖
   * @request GET:/api/sys-cache/key-list
   * @secure
   */
  apiSysCacheKeyListGet = (params: RequestParams = {}) =>
    this.http.request<ApiSysCacheKeyListGetData, any>({
      path: `/api/sys-cache/key-list`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags sys-cache
   * @name ApiSysCacheKeysByPrefixKeyPrefixkeyGet
   * @summary 根据键名前缀获取键名集合 🔖
   * @request GET:/api/sys-cache/keys-by-prefix-key/{prefixkey}
   * @secure
   */
  apiSysCacheKeysByPrefixKeyPrefixkeyGet = (
    { prefixkey }: ApiSysCacheKeysByPrefixKeyPrefixkeyGetParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiSysCacheKeysByPrefixKeyPrefixkeyGetData, any>({
      path: `/api/sys-cache/keys-by-prefix-key/${prefixkey}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags sys-cache
   * @name ApiSysCacheValueKeyGet
   * @summary 获取缓存值 🔖
   * @request GET:/api/sys-cache/value/{key}
   * @secure
   */
  apiSysCacheValueKeyGet = (
    { key }: ApiSysCacheValueKeyGetParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiSysCacheValueKeyGetData, any>({
      path: `/api/sys-cache/value/${key}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags technics
   * @name ApiTechnicsAddPost
   * @summary 新增数据
   * @request POST:/api/technics/add
   * @secure
   */
  apiTechnicsAddPost = (data: TechnicsFO, params: RequestParams = {}) =>
    this.http.request<ApiTechnicsAddPostData, any>({
      path: `/api/technics/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags technics
   * @name ApiTechnicsEditPost
   * @summary 编辑数据
   * @request POST:/api/technics/edit
   * @secure
   */
  apiTechnicsEditPost = (data: TechnicsFO, params: RequestParams = {}) =>
    this.http.request<ApiTechnicsEditPostData, any>({
      path: `/api/technics/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags technics
   * @name ApiTechnicsGetRecordFilesPost
   * @summary 获取测站图片
   * @request POST:/api/technics/get-record-files
   * @secure
   */
  apiTechnicsGetRecordFilesPost = (
    data: OnlyIdAndTImePageQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiTechnicsGetRecordFilesPostData, any>({
      path: `/api/technics/get-record-files`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags technics
   * @name ApiTechnicsListPost
   * @summary 查询全部对象
   * @request POST:/api/technics/list
   * @secure
   */
  apiTechnicsListPost = (data: TechnicsQO, params: RequestParams = {}) =>
    this.http.request<ApiTechnicsListPostData, any>({
      path: `/api/technics/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags technics
   * @name ApiTechnicsPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/technics/paged-list
   * @secure
   */
  apiTechnicsPagedListPost = (data: TechnicsPQO, params: RequestParams = {}) =>
    this.http.request<ApiTechnicsPagedListPostData, any>({
      path: `/api/technics/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags technics
   * @name ApiTechnicsRemovePost
   * @summary 删除数据
   * @request POST:/api/technics/remove
   * @secure
   */
  apiTechnicsRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiTechnicsRemovePostData, any>({
      path: `/api/technics/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags technics
   * @name ApiTechnicsShowPost
   * @summary 查询1个对象
   * @request POST:/api/technics/show
   * @secure
   */
  apiTechnicsShowPost = (data: TechnicsQO, params: RequestParams = {}) =>
    this.http.request<ApiTechnicsShowPostData, any>({
      path: `/api/technics/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiUserAddPost
   * @summary 新增数据
   * @request POST:/api/user/add
   * @secure
   */
  apiUserAddPost = (data: UserFormAdd, params: RequestParams = {}) =>
    this.http.request<ApiUserAddPostData, any>({
      path: `/api/user/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiUserAssignOutfallPost
   * @summary 分配排口数据权限
   * @request POST:/api/user/assign-outfall
   * @secure
   */
  apiUserAssignOutfallPost = (
    data: UserAssignOutfallQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiUserAssignOutfallPostData, any>({
      path: `/api/user/assign-outfall`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiUserAssignRolesPost
   * @summary 分配角色
   * @request POST:/api/user/assign-roles
   * @secure
   */
  apiUserAssignRolesPost = (
    data: UserAssignRolesQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiUserAssignRolesPostData, any>({
      path: `/api/user/assign-roles`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiUserAssignUsergroupsPost
   * @summary 分配用户组
   * @request POST:/api/user/assign-usergroups
   * @secure
   */
  apiUserAssignUsergroupsPost = (
    data: UserAssignUsergroupsQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiUserAssignUsergroupsPostData, any>({
      path: `/api/user/assign-usergroups`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiUserEditPost
   * @summary 编辑数据
   * @request POST:/api/user/edit
   * @secure
   */
  apiUserEditPost = (data: UserForm, params: RequestParams = {}) =>
    this.http.request<ApiUserEditPostData, any>({
      path: `/api/user/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiUserEditPwdPost
   * @summary 管理员重置密码
   * @request POST:/api/user/edit-pwd
   * @secure
   */
  apiUserEditPwdPost = (data: AdminResetPwdQO, params: RequestParams = {}) =>
    this.http.request<ApiUserEditPwdPostData, any>({
      path: `/api/user/edit-pwd`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiUserEditSelfPost
   * @summary 登录用户更新信息
   * @request POST:/api/user/edit-self
   * @secure
   */
  apiUserEditSelfPost = (data: UserSelfForm, params: RequestParams = {}) =>
    this.http.request<ApiUserEditSelfPostData, any>({
      path: `/api/user/edit-self`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiUserGetOutfallPost
   * @summary 根据用户id查询排口列表
   * @request POST:/api/user/get-outfall
   * @secure
   */
  apiUserGetOutfallPost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiUserGetOutfallPostData, any>({
      path: `/api/user/get-outfall`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiUserGetRolesPost
   * @summary 根据用户id查询角色列表
   * @request POST:/api/user/get-roles
   * @secure
   */
  apiUserGetRolesPost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiUserGetRolesPostData, any>({
      path: `/api/user/get-roles`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiUserGetUsergroupsPost
   * @summary 根据用户id查询用户组列表
   * @request POST:/api/user/get-usergroups
   * @secure
   */
  apiUserGetUsergroupsPost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiUserGetUsergroupsPostData, any>({
      path: `/api/user/get-usergroups`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags usergroup
   * @name ApiUsergroupAddPost
   * @summary 新增数据
   * @request POST:/api/usergroup/add
   * @secure
   */
  apiUsergroupAddPost = (data: UsergroupFO, params: RequestParams = {}) =>
    this.http.request<ApiUsergroupAddPostData, any>({
      path: `/api/usergroup/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags usergroup
   * @name ApiUsergroupAssignRolesPost
   * @summary 分配角色
   * @request POST:/api/usergroup/assign-roles
   * @secure
   */
  apiUsergroupAssignRolesPost = (
    data: UsergroupAssignRolesQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiUsergroupAssignRolesPostData, any>({
      path: `/api/usergroup/assign-roles`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags usergroup
   * @name ApiUsergroupEditPost
   * @summary 编辑数据
   * @request POST:/api/usergroup/edit
   * @secure
   */
  apiUsergroupEditPost = (data: UsergroupFO, params: RequestParams = {}) =>
    this.http.request<ApiUsergroupEditPostData, any>({
      path: `/api/usergroup/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags usergroup
   * @name ApiUsergroupGetRolesPost
   * @summary 根据用户组id查询角色列表
   * @request POST:/api/usergroup/get-roles
   * @secure
   */
  apiUsergroupGetRolesPost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiUsergroupGetRolesPostData, any>({
      path: `/api/usergroup/get-roles`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags usergroup
   * @name ApiUsergroupListPost
   * @summary 查询全部对象
   * @request POST:/api/usergroup/list
   * @secure
   */
  apiUsergroupListPost = (data: UsergroupQO, params: RequestParams = {}) =>
    this.http.request<ApiUsergroupListPostData, any>({
      path: `/api/usergroup/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags usergroup
   * @name ApiUsergroupPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/usergroup/paged-list
   * @secure
   */
  apiUsergroupPagedListPost = (
    data: UsergroupPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiUsergroupPagedListPostData, any>({
      path: `/api/usergroup/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags usergroup
   * @name ApiUsergroupRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/usergroup/remove-mul
   * @secure
   */
  apiUsergroupRemoveMulPost = (data: RemoveMulQO, params: RequestParams = {}) =>
    this.http.request<ApiUsergroupRemoveMulPostData, any>({
      path: `/api/usergroup/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags usergroup
   * @name ApiUsergroupRemovePost
   * @summary 删除1条数据
   * @request POST:/api/usergroup/remove
   * @secure
   */
  apiUsergroupRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiUsergroupRemovePostData, any>({
      path: `/api/usergroup/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags usergroup
   * @name ApiUsergroupShowPost
   * @summary 查询1个对象
   * @request POST:/api/usergroup/show
   * @secure
   */
  apiUsergroupShowPost = (data: UsergroupQO, params: RequestParams = {}) =>
    this.http.request<ApiUsergroupShowPostData, any>({
      path: `/api/usergroup/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiUserListPost
   * @summary 查询全部对象
   * @request POST:/api/user/list
   * @secure
   */
  apiUserListPost = (data: UserQO, params: RequestParams = {}) =>
    this.http.request<ApiUserListPostData, any>({
      path: `/api/user/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user-message
   * @name ApiUserMessageAmountstPost
   * @summary 消息数量统计
   * @request POST:/api/user-message/amountst
   * @secure
   */
  apiUserMessageAmountstPost = (params: RequestParams = {}) =>
    this.http.request<ApiUserMessageAmountstPostData, any>({
      path: `/api/user-message/amountst`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user-message
   * @name ApiUserMessageDeleteMessagePost
   * @summary 标记消息已删除
   * @request POST:/api/user-message/delete-message
   * @secure
   */
  apiUserMessageDeleteMessagePost = (
    data: OnlyMsgIdList,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiUserMessageDeleteMessagePostData, any>({
      path: `/api/user-message/delete-message`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user-message
   * @name ApiUserMessageListPost
   * @summary 查询全部对象
   * @request POST:/api/user-message/list
   * @secure
   */
  apiUserMessageListPost = (data: UserMessageQO, params: RequestParams = {}) =>
    this.http.request<ApiUserMessageListPostData, any>({
      path: `/api/user-message/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user-message
   * @name ApiUserMessagePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/user-message/paged-list
   * @secure
   */
  apiUserMessagePagedListPost = (
    data: UserMessagePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiUserMessagePagedListPostData, any>({
      path: `/api/user-message/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user-message
   * @name ApiUserMessageReadAllMessagePost
   * @summary 标记全部消息已读
   * @request POST:/api/user-message/read-all-message
   * @secure
   */
  apiUserMessageReadAllMessagePost = (params: RequestParams = {}) =>
    this.http.request<ApiUserMessageReadAllMessagePostData, any>({
      path: `/api/user-message/read-all-message`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user-message
   * @name ApiUserMessageReadMessagePost
   * @summary 设置消息已读
   * @request POST:/api/user-message/read-message
   * @secure
   */
  apiUserMessageReadMessagePost = (
    data: OnlyMsgIdList,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiUserMessageReadMessagePostData, any>({
      path: `/api/user-message/read-message`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user-message
   * @name ApiUserMessageShowPost
   * @summary 查询1个对象
   * @request POST:/api/user-message/show
   * @secure
   */
  apiUserMessageShowPost = (data: UserMessageQO, params: RequestParams = {}) =>
    this.http.request<ApiUserMessageShowPostData, any>({
      path: `/api/user-message/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiUserPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/user/paged-list
   * @secure
   */
  apiUserPagedListPost = (data: UserPQO, params: RequestParams = {}) =>
    this.http.request<ApiUserPagedListPostData, any>({
      path: `/api/user/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiUserRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/user/remove-mul
   * @secure
   */
  apiUserRemoveMulPost = (data: RemoveMulQO, params: RequestParams = {}) =>
    this.http.request<ApiUserRemoveMulPostData, any>({
      path: `/api/user/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiUserRemovePost
   * @summary 删除1条数据
   * @request POST:/api/user/remove
   * @secure
   */
  apiUserRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiUserRemovePostData, any>({
      path: `/api/user/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiUserResetPwdPost
   * @summary 用户重置密码
   * @request POST:/api/user/reset-pwd
   * @secure
   */
  apiUserResetPwdPost = (data: UserResetPwdQO, params: RequestParams = {}) =>
    this.http.request<ApiUserResetPwdPostData, any>({
      path: `/api/user/reset-pwd`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiUserShowPost
   * @summary 查询1个对象
   * @request POST:/api/user/show
   * @secure
   */
  apiUserShowPost = (data: UserQO, params: RequestParams = {}) =>
    this.http.request<ApiUserShowPostData, any>({
      path: `/api/user/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiUserShowSelfPost
   * @summary 登录用户获取信息
   * @request POST:/api/user/show-self
   * @secure
   */
  apiUserShowSelfPost = (params: RequestParams = {}) =>
    this.http.request<ApiUserShowSelfPostData, any>({
      path: `/api/user/show-self`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags weather
   * @name ApiWeatherWeatherTokenPost
   * @summary 获取天气api token
   * @request POST:/api/weather/weather-token
   * @secure
   */
  apiWeatherWeatherTokenPost = (params: RequestParams = {}) =>
    this.http.request<ApiWeatherWeatherTokenPostData, any>({
      path: `/api/weather/weather-token`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
}
