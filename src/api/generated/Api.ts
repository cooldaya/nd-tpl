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
  AlarmPushQO,
  ApiAlarmDetailJoinAlarmPostData,
  ApiAlarmDetailPostData,
  ApiAlarmEventPagePostData,
  ApiAlarmEventStatisticsPostData,
  ApiAlarmPushAlarmPostData,
  ApiAlarmRepairDetailPostData,
  ApiAlarmStatusMapPostData,
  ApiAlarmStatusMapPostPayload,
  ApiAlarmTaskDetailPostData,
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
  ApiAuthMapTokenPostData,
  ApiAuthPkinfoPostData,
  ApiAuthWvpLoginPostData,
  ApiBsAlarmPipeLineAddPostData,
  ApiBsAlarmPipeLineEditPostData,
  ApiBsAlarmPipeLineListPostData,
  ApiBsAlarmPipeLinePagedListPostData,
  ApiBsAlarmPipeLineRemoveMulPostData,
  ApiBsAlarmPipeLineRemovePostData,
  ApiBsAlarmPipeLineShowPostData,
  ApiBsCommunityAddPostData,
  ApiBsCommunityEditPostData,
  ApiBsCommunityListPostData,
  ApiBsCommunityPagedListPostData,
  ApiBsCommunityRemoveMulPostData,
  ApiBsCommunityRemovePostData,
  ApiBsCommunityShowPostData,
  ApiBsCompanyAddPostData,
  ApiBsCompanyEditPostData,
  ApiBsCompanyListPostData,
  ApiBsCompanyPagedListPostData,
  ApiBsCompanyRemoveMulPostData,
  ApiBsCompanyRemovePostData,
  ApiBsCompanyShowPostData,
  ApiBsOutletAddPostData,
  ApiBsOutletEditPostData,
  ApiBsOutletListPostData,
  ApiBsOutletPagedListPostData,
  ApiBsOutletRemovePostData,
  ApiBsOutletShowPostData,
  ApiBsPipeLineAddPostData,
  ApiBsPipeLineEditPostData,
  ApiBsPipeLineGetCommunityInfoByPrealarmPostData,
  ApiBsPipeLineGetLineByStartAndEndPostData,
  ApiBsPipeLineGetLineByStartPostData,
  ApiBsPipeLineImportDataPostData,
  ApiBsPipeLineLightQueryPostData,
  ApiBsPipeLineLinesByEndPointPostData,
  ApiBsPipeLineListPostData,
  ApiBsPipeLinePagedListPostData,
  ApiBsPipeLineRemoveMulPostData,
  ApiBsPipeLineRemovePostData,
  ApiBsPipeLineShowPostData,
  ApiBsPipePointAddPostData,
  ApiBsPipePointAlarmParameterAddPostData,
  ApiBsPipePointAlarmParameterEditPostData,
  ApiBsPipePointAlarmParameterListPostData,
  ApiBsPipePointAlarmParameterPagedListPostData,
  ApiBsPipePointAlarmParameterRemoveMulPostData,
  ApiBsPipePointAlarmParameterRemovePostData,
  ApiBsPipePointAlarmParameterShowPostData,
  ApiBsPipePointAlarmRecordAddPostData,
  ApiBsPipePointAlarmRecordEditPostData,
  ApiBsPipePointAlarmRecordListPostData,
  ApiBsPipePointAlarmRecordPagedListPostData,
  ApiBsPipePointAlarmRecordRemoveMulPostData,
  ApiBsPipePointAlarmRecordRemovePostData,
  ApiBsPipePointAlarmRecordShowPostData,
  ApiBsPipePointConvertCoordinatesToLaluPostData,
  ApiBsPipePointCountGroupByAppendagePostData,
  ApiBsPipePointEditPostData,
  ApiBsPipePointImportDataPostData,
  ApiBsPipePointListPostData,
  ApiBsPipePointPagedListPostData,
  ApiBsPipePointRemoveMulPostData,
  ApiBsPipePointRemovePostData,
  ApiBsPipePointShowPostData,
  ApiBsPmcAddPostData,
  ApiBsPmcEditPostData,
  ApiBsPmcListPostData,
  ApiBsPmcPagedListPostData,
  ApiBsPmcRemoveMulPostData,
  ApiBsPmcRemovePostData,
  ApiBsPmcShowPostData,
  ApiBsPollutionPermitInfoAddPostData,
  ApiBsPollutionPermitInfoEditPostData,
  ApiBsPollutionPermitInfoListPostData,
  ApiBsPollutionPermitInfoPagedListPostData,
  ApiBsPollutionPermitInfoRemovePostData,
  ApiBsPollutionPermitInfoShowPostData,
  ApiBsZoneAddPostData,
  ApiBsZoneEditPostData,
  ApiBsZoneListPostData,
  ApiBsZonePagedListPostData,
  ApiBsZoneRemovePostData,
  ApiBsZoneShowPostData,
  ApiBsZoneTreedataPostData,
  ApiBsZoneTypedataPostData,
  ApiBumenJscDetailJoinAlarmPostData,
  ApiBumenJscDetailPostData,
  ApiBumenJscEquipmentListPostData,
  ApiBumenJscEventPagePostData,
  ApiBumenJscEventStatisticsPostData,
  ApiBumenJscPrealarmRecordListPostData,
  ApiBumenJscRepairDetailPostData,
  ApiBumenJscStatusMapPostData,
  ApiBumenJscStatusMapPostPayload,
  ApiBumenJscTaskDetailPostData,
  ApiBumenJscTechnicsListPostData,
  ApiBumenJscTsLastPrealarmRecordListPostData,
  ApiCommonFileDownloadGetData,
  ApiCommonFileDownloadGetParams,
  ApiCommonGenIdPostData,
  ApiCommonGenIdsPostData,
  ApiCommonUploadFilePostData,
  ApiCommonUploadFilePostPayload,
  ApiCommonUploadFilesPostData,
  ApiCommonUploadFilesPostPayload,
  ApiDataDictionaryAddPostData,
  ApiDataDictionaryEditPostData,
  ApiDataDictionaryListPostData,
  ApiDataDictionaryPagedListPostData,
  ApiDataDictionaryRemovePostData,
  ApiDataDictionaryShowPostData,
  ApiDataDictionaryTreedataPostData,
  ApiDataDictionaryTypedataPostData,
  ApiDeviceInfoDeviceListByPositionGetData,
  ApiDeviceInfoDeviceListByPositionScopeGetData,
  ApiDeviceInfoMonitorByOrganizationPostData,
  ApiDeviceInfoMonitorListByDeviceIdPostData,
  ApiDeviceInfoOrganizationListPostData,
  ApiEmergencyPlanAddPostData,
  ApiEmergencyPlanAddPostPayload,
  ApiEmergencyPlanEditPostData,
  ApiEmergencyPlanEditPostPayload,
  ApiEmergencyPlanListPostData,
  ApiEmergencyPlanPagedListPostData,
  ApiEmergencyPlanRemovePostData,
  ApiEmergencyPlanShowPostData,
  ApiEquipmentAddPostData,
  ApiEquipmentEditPostData,
  ApiEquipmentListPostData,
  ApiEquipmentPagedListPostData,
  ApiEquipmentParamAddPostData,
  ApiEquipmentParamDdAddPostData,
  ApiEquipmentParamDdEditPostData,
  ApiEquipmentParamDdListPostData,
  ApiEquipmentParamDdPagedListPostData,
  ApiEquipmentParamDdRemoveMulPostData,
  ApiEquipmentParamDdRemovePostData,
  ApiEquipmentParamDdShowPostData,
  ApiEquipmentParamEditPostData,
  ApiEquipmentParamEquipmentParamRainConditionPostData,
  ApiEquipmentParamGetEquipmentParamByIdPostData,
  ApiEquipmentParamHdAddPostData,
  ApiEquipmentParamHdEditPostData,
  ApiEquipmentParamHdListPostData,
  ApiEquipmentParamHdPagedListPostData,
  ApiEquipmentParamHdRemoveMulPostData,
  ApiEquipmentParamHdRemovePostData,
  ApiEquipmentParamHdShowPostData,
  ApiEquipmentParamListPostData,
  ApiEquipmentParamMdAddPostData,
  ApiEquipmentParamMdEditPostData,
  ApiEquipmentParamMdGetEquipmentParamMdListByIdPostData,
  ApiEquipmentParamMdListPostData,
  ApiEquipmentParamMdPagedListPostData,
  ApiEquipmentParamMdQueryByWaterRainfallEigenvaluePostData,
  ApiEquipmentParamMdQueryByWaterRainfallInformationPostData,
  ApiEquipmentParamMdRemoveMulPostData,
  ApiEquipmentParamMdRemovePostData,
  ApiEquipmentParamMdShowPostData,
  ApiEquipmentParamPagedListPostData,
  ApiEquipmentParamRealTimeReportPostData,
  ApiEquipmentParamRemoveMulPostData,
  ApiEquipmentParamRemovePostData,
  ApiEquipmentParamShowPostData,
  ApiEquipmentRemoveMulPostData,
  ApiEquipmentRemovePostData,
  ApiEquipmentShowPostData,
  ApiHikNmsCameraOnlinePostData,
  ApiHikPlaybackHlsUrlPostData,
  ApiHikPlaybackUrlPostData,
  ApiHikPreviewUrlPostData,
  ApiInspectionIssueEditPostData,
  ApiInspectionIssueHandlePostData,
  ApiInspectionIssueListPostData,
  ApiInspectionIssuePagedListPostData,
  ApiInspectionIssueRemovePostData,
  ApiInspectionIssueReportPostData,
  ApiInspectionIssueSeverityAddPostData,
  ApiInspectionIssueSeverityEditPostData,
  ApiInspectionIssueSeverityListPostData,
  ApiInspectionIssueSeverityPagedListPostData,
  ApiInspectionIssueSeverityRemovePostData,
  ApiInspectionIssueSeverityShowPostData,
  ApiInspectionIssueShowPostData,
  ApiInspectionIssueTypeAddPostData,
  ApiInspectionIssueTypeEditPostData,
  ApiInspectionIssueTypeListPostData,
  ApiInspectionIssueTypePagedListPostData,
  ApiInspectionIssueTypeRemovePostData,
  ApiInspectionIssueTypeShowPostData,
  ApiInspectionRecordAppendTrackPostData,
  ApiInspectionRecordListPostData,
  ApiInspectionRecordPagedListPostData,
  ApiInspectionRecordShowPostData,
  ApiInspectionTaskDispatchPostData,
  ApiInspectionTaskEditPostData,
  ApiInspectionTaskEndPostData,
  ApiInspectionTaskListPostData,
  ApiInspectionTaskPagedListPostData,
  ApiInspectionTaskRemovePostData,
  ApiInspectionTaskShowPostData,
  ApiInspectionTaskStartPostData,
  ApiKnowledgeFileAddPostData,
  ApiKnowledgeFileEditPostData,
  ApiKnowledgeFileListPostData,
  ApiKnowledgeFilePagedListPostData,
  ApiKnowledgeFileRemovePostData,
  ApiKnowledgeFileShowPostData,
  ApiKnowledgeFileTreedataPostData,
  ApiKnowledgeFileUploadPostData,
  ApiKnowledgeFileUploadPostPayload,
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
  ApiOrganizationAddPostData,
  ApiOrganizationEditPostData,
  ApiOrganizationListPostData,
  ApiOrganizationPagedListPostData,
  ApiOrganizationRemovePostData,
  ApiOrganizationShowPostData,
  ApiOrganizationTreedataPostData,
  ApiPrealarmRecordAddPostData,
  ApiPrealarmRecordEditPostData,
  ApiPrealarmRecordListPostData,
  ApiPrealarmRecordPagedListPostData,
  ApiPrealarmRecordRemoveMulPostData,
  ApiPrealarmRecordRemovePostData,
  ApiPrealarmRecordRtPrealarmRecordPostData,
  ApiPrealarmRecordShowPostData,
  ApiPrealarmRuleAddPostData,
  ApiPrealarmRuleEditPostData,
  ApiPrealarmRuleGetRpsPostData,
  ApiPrealarmRuleListPostData,
  ApiPrealarmRulePagedListPostData,
  ApiPrealarmRuleRemoveMulPostData,
  ApiPrealarmRuleRemovePostData,
  ApiPrealarmRuleShowPostData,
  ApiPrealarmRuleUpdateRpsPostData,
  ApiRecordFileListPostData,
  ApiRecordFilePagedListPostData,
  ApiRecordFileRemoveMulPostData,
  ApiRecordFileRemovePostData,
  ApiRecordFileShowPostData,
  ApiReservoirCapacityAddBatchPostData,
  ApiReservoirCapacityAddBatchPostPayload,
  ApiReservoirCapacityAddPostData,
  ApiReservoirCapacityDelBatchPostData,
  ApiReservoirCapacityEditBatchPostData,
  ApiReservoirCapacityEditBatchPostPayload,
  ApiReservoirCapacityEditPostData,
  ApiReservoirCapacityListPostData,
  ApiReservoirCapacityPagedListPostData,
  ApiReservoirCapacityRemoveMulPostData,
  ApiReservoirCapacityRemovePostData,
  ApiReservoirCapacityShowPostData,
  ApiReservoirFlowAddBatchPostData,
  ApiReservoirFlowAddBatchPostPayload,
  ApiReservoirFlowAddPostData,
  ApiReservoirFlowDelBatchPostData,
  ApiReservoirFlowEditBatchPostData,
  ApiReservoirFlowEditBatchPostPayload,
  ApiReservoirFlowEditPostData,
  ApiReservoirFlowListPostData,
  ApiReservoirFlowPagedListPostData,
  ApiReservoirFlowRemoveMulPostData,
  ApiReservoirFlowRemovePostData,
  ApiReservoirFlowShowPostData,
  ApiReservoirProjectAddPostData,
  ApiReservoirProjectEditPostData,
  ApiReservoirProjectGetProjectTsFilePostData,
  ApiReservoirProjectGetPtfPagedListPostData,
  ApiReservoirProjectListPostData,
  ApiReservoirProjectPagedListPostData,
  ApiReservoirProjectRemoveMulPostData,
  ApiReservoirProjectRemovePostData,
  ApiReservoirProjectSaveProjectTsFilePostData,
  ApiReservoirProjectShowPostData,
  ApiReservoirRpAddPostData,
  ApiReservoirRpEditPostData,
  ApiReservoirRpListPostData,
  ApiReservoirRpPagedListPostData,
  ApiReservoirRpRemoveMulPostData,
  ApiReservoirRpRemovePostData,
  ApiReservoirRpShowPostData,
  ApiReservoirVrAddPostData,
  ApiReservoirVrAddPostPayload,
  ApiReservoirVrEditPostData,
  ApiReservoirVrEditPostPayload,
  ApiReservoirVrListPostData,
  ApiReservoirVrPagedListPostData,
  ApiReservoirVrRemoveMulPostData,
  ApiReservoirVrRemovePostData,
  ApiReservoirVrShowPostData,
  ApiResourceAddPostData,
  ApiResourceEditPostData,
  ApiResourceGetResourcesPostData,
  ApiResourceListPostData,
  ApiResourcePagedListPostData,
  ApiResourceRemovePostData,
  ApiResourceRoutePathsPostData,
  ApiResourceShowPostData,
  ApiResourceTreedataPostData,
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
  ApiTaskSourceAddPostData,
  ApiTaskSourceEditPostData,
  ApiTaskSourceListPostData,
  ApiTaskSourcePagedListPostData,
  ApiTaskSourceRemovePostData,
  ApiTaskSourceShowPostData,
  ApiTechnicsAddPostData,
  ApiTechnicsEditPostData,
  ApiTechnicsGetCoverNumByVillagePostData,
  ApiTechnicsGetCoverNumPostData,
  ApiTechnicsListPostData,
  ApiTechnicsPagedListPostData,
  ApiTechnicsQueryByConventionalWaterLevelReportPostData,
  ApiTechnicsQueryByDailyWaterLevelReportPostData,
  ApiTechnicsQueryByReservoirInfoPostData,
  ApiTechnicsQueryByReservoirRpPostData,
  ApiTechnicsQueryByReservoirStatusPostData,
  ApiTechnicsRemoveMulPostData,
  ApiTechnicsRemovePostData,
  ApiTechnicsShowPostData,
  ApiUserAddPostData,
  ApiUserAssignRolesPostData,
  ApiUserAssignUsergroupsPostData,
  ApiUserEditPostData,
  ApiUserEditPwdPostData,
  ApiUserEditSelfPostData,
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
  BsAlarmPipeLineFO,
  BsAlarmPipeLinePQO,
  BsAlarmPipeLineQO,
  BsCommunityFO,
  BsCommunityPQO,
  BsCommunityQO,
  BsCompanyFO,
  BsCompanyPQO,
  BsCompanyQO,
  BsOutletFO,
  BsOutletPQO,
  BsOutletQO,
  BsPipeLineFO,
  BsPipeLinePQO,
  BsPipeLineQO,
  BsPipePointAlarmParameterFO,
  BsPipePointAlarmParameterPQO,
  BsPipePointAlarmParameterQO,
  BsPipePointAlarmRecordFO,
  BsPipePointAlarmRecordPQO,
  BsPipePointAlarmRecordQO,
  BsPipePointFO,
  BsPipePointPQO,
  BsPipePointQO,
  BsPipePointStQO,
  BsPmcFO,
  BsPmcPQO,
  BsPmcQO,
  BsPollutionPermitInfoFO,
  BsPollutionPermitInfoPQO,
  BsPollutionPermitInfoQO,
  BsZoneFO,
  BsZonePQO,
  BsZoneQO,
  CaseQO,
  DataDictionaryFO,
  DataDictionaryPQO,
  DataDictionaryQO,
  DdTypedataQO,
  EmergencyPlanPQO,
  EmergencyPlanQO,
  EquipmentFO,
  EquipmentPQO,
  EquipmentParamDdFO,
  EquipmentParamDdPQO,
  EquipmentParamDdQO,
  EquipmentParamFO,
  EquipmentParamHdFO,
  EquipmentParamHdPQO,
  EquipmentParamHdQO,
  EquipmentParamMdFO,
  EquipmentParamMdPQO,
  EquipmentParamMdQO,
  EquipmentParamPQO,
  EquipmentParamQO,
  EquipmentParamRainConditionQO,
  EquipmentQO,
  EventStatisticsQO,
  GetDeviceListByPositionQO,
  GetDeviceListByPositionScopeQO,
  GetMonitorByOrganizationQO,
  GetMonitorListByDeviceIdQO,
  GetOrganizationListQO,
  InspectionIssueFO,
  InspectionIssuePQO,
  InspectionIssueQO,
  InspectionIssueSeverityFO,
  InspectionIssueSeverityPQO,
  InspectionIssueSeverityQO,
  InspectionIssueTypeFO,
  InspectionIssueTypePQO,
  InspectionIssueTypeQO,
  InspectionRecordPQO,
  InspectionRecordQO,
  InspectionTaskFO,
  InspectionTaskPQO,
  InspectionTaskQO,
  IssueHandleFO,
  KnowledgeFilePQO,
  KnowledgeFileQO,
  LineByStartAndEndQO,
  LinesByEndPointQO,
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
  NmsCameraOnlineQO,
  OnlyIdQO,
  OnlyMsgIdList,
  OrganizationForm,
  OrganizationPQO,
  OrganizationQO,
  PlaybackHlsUrlQO,
  PlaybackUrlQO,
  PrealarmCommunityInfoQO,
  PrealarmRecordFO,
  PrealarmRecordPQO,
  PrealarmRecordQO,
  PrealarmRuleFO,
  PrealarmRulePQO,
  PrealarmRuleQO,
  PreviewUrlQO,
  ProcessEventPageQO,
  ProjectTsFileSaveFO,
  PtfPQO,
  PtfQO,
  RealTimeReportQO,
  RecordFilePQO,
  RecordFileQO,
  RemoveMulQO,
  ReqIdsQO,
  ReservoirCapacityFO,
  ReservoirCapacityPQO,
  ReservoirCapacityQO,
  ReservoirFlowFO,
  ReservoirFlowPQO,
  ReservoirFlowQO,
  ReservoirProjectFO,
  ReservoirProjectPQO,
  ReservoirProjectQO,
  ReservoirRpFO,
  ReservoirRpPQO,
  ReservoirRpQO,
  ReservoirVrPQO,
  ReservoirVrQO,
  ReservoirVrRemoveMulQO,
  ResourceForm,
  ResourcePQO,
  ResourceQO,
  RoleAssignResourcesQO,
  RoleFO,
  RolePQO,
  RoleQO,
  RtPrealarmRecordQO,
  TaskSourceFO,
  TaskSourcePQO,
  TaskSourceQO,
  TechnicsFO,
  TechnicsPQO,
  TechnicsQO,
  TimeAndIdQO,
  TrackReportFO,
  TsLastPrealarmRecordQO,
  UpdateRpsQO,
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
   * @tags alarm
   * @name ApiAlarmDetailJoinAlarmPost
   * @summary 查询详情(关联报警信息)
   * @request POST:/api/alarm/detail-join-alarm
   * @secure
   */
  apiAlarmDetailJoinAlarmPost = (data: CaseQO, params: RequestParams = {}) =>
    this.http.request<ApiAlarmDetailJoinAlarmPostData, any>({
      path: `/api/alarm/detail-join-alarm`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags alarm
   * @name ApiAlarmDetailPost
   * @summary 查询详情
   * @request POST:/api/alarm/detail
   * @secure
   */
  apiAlarmDetailPost = (data: CaseQO, params: RequestParams = {}) =>
    this.http.request<ApiAlarmDetailPostData, any>({
      path: `/api/alarm/detail`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags alarm
   * @name ApiAlarmEventPagePost
   * @summary 分页查询
   * @request POST:/api/alarm/event-page
   * @secure
   */
  apiAlarmEventPagePost = (
    data: ProcessEventPageQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiAlarmEventPagePostData, any>({
      path: `/api/alarm/event-page`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags alarm
   * @name ApiAlarmEventStatisticsPost
   * @summary 统计查询
   * @request POST:/api/alarm/event-statistics
   * @secure
   */
  apiAlarmEventStatisticsPost = (
    data: EventStatisticsQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiAlarmEventStatisticsPostData, any>({
      path: `/api/alarm/event-statistics`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags alarm
   * @name ApiAlarmPushAlarmPost
   * @summary 推送报警信息
   * @request POST:/api/alarm/push-alarm
   * @secure
   */
  apiAlarmPushAlarmPost = (data: AlarmPushQO, params: RequestParams = {}) =>
    this.http.request<ApiAlarmPushAlarmPostData, any>({
      path: `/api/alarm/push-alarm`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags alarm
   * @name ApiAlarmRepairDetailPost
   * @summary 查询流程图片路径
   * @request POST:/api/alarm/repair-detail
   * @secure
   */
  apiAlarmRepairDetailPost = (data: CaseQO, params: RequestParams = {}) =>
    this.http.request<ApiAlarmRepairDetailPostData, any>({
      path: `/api/alarm/repair-detail`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags alarm
   * @name ApiAlarmStatusMapPost
   * @summary 批量查询状态
   * @request POST:/api/alarm/status-map
   * @secure
   */
  apiAlarmStatusMapPost = (
    data: ApiAlarmStatusMapPostPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiAlarmStatusMapPostData, any>({
      path: `/api/alarm/status-map`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags alarm
   * @name ApiAlarmTaskDetailPost
   * @summary 查询流程信息
   * @request POST:/api/alarm/task-detail
   * @secure
   */
  apiAlarmTaskDetailPost = (data: CaseQO, params: RequestParams = {}) =>
    this.http.request<ApiAlarmTaskDetailPostData, any>({
      path: `/api/alarm/task-detail`,
      method: "POST",
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
   * @name ApiAuthMapTokenPost
   * @summary 获取地图Token
   * @request POST:/api/auth/map-token
   * @secure
   */
  apiAuthMapTokenPost = (params: RequestParams = {}) =>
    this.http.request<ApiAuthMapTokenPostData, any>({
      path: `/api/auth/map-token`,
      method: "POST",
      secure: true,
      format: "json",
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
   * @tags auth
   * @name ApiAuthWvpLoginPost
   * @summary wvp平台登录
   * @request POST:/api/auth/wvp-login
   * @secure
   */
  apiAuthWvpLoginPost = (params: RequestParams = {}) =>
    this.http.request<ApiAuthWvpLoginPostData, any>({
      path: `/api/auth/wvp-login`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-alarm-pipe-line
   * @name ApiBsAlarmPipeLineAddPost
   * @summary 新增数据
   * @request POST:/api/bs-alarm-pipe-line/add
   * @secure
   */
  apiBsAlarmPipeLineAddPost = (
    data: BsAlarmPipeLineFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsAlarmPipeLineAddPostData, any>({
      path: `/api/bs-alarm-pipe-line/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-alarm-pipe-line
   * @name ApiBsAlarmPipeLineEditPost
   * @summary 编辑数据
   * @request POST:/api/bs-alarm-pipe-line/edit
   * @secure
   */
  apiBsAlarmPipeLineEditPost = (
    data: BsAlarmPipeLineFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsAlarmPipeLineEditPostData, any>({
      path: `/api/bs-alarm-pipe-line/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-alarm-pipe-line
   * @name ApiBsAlarmPipeLineListPost
   * @summary 查询全部对象
   * @request POST:/api/bs-alarm-pipe-line/list
   * @secure
   */
  apiBsAlarmPipeLineListPost = (
    data: BsAlarmPipeLineQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsAlarmPipeLineListPostData, any>({
      path: `/api/bs-alarm-pipe-line/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-alarm-pipe-line
   * @name ApiBsAlarmPipeLinePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/bs-alarm-pipe-line/paged-list
   * @secure
   */
  apiBsAlarmPipeLinePagedListPost = (
    data: BsAlarmPipeLinePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsAlarmPipeLinePagedListPostData, any>({
      path: `/api/bs-alarm-pipe-line/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-alarm-pipe-line
   * @name ApiBsAlarmPipeLineRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/bs-alarm-pipe-line/remove-mul
   * @secure
   */
  apiBsAlarmPipeLineRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsAlarmPipeLineRemoveMulPostData, any>({
      path: `/api/bs-alarm-pipe-line/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-alarm-pipe-line
   * @name ApiBsAlarmPipeLineRemovePost
   * @summary 删除1条数据
   * @request POST:/api/bs-alarm-pipe-line/remove
   * @secure
   */
  apiBsAlarmPipeLineRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiBsAlarmPipeLineRemovePostData, any>({
      path: `/api/bs-alarm-pipe-line/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-alarm-pipe-line
   * @name ApiBsAlarmPipeLineShowPost
   * @summary 查询1个对象
   * @request POST:/api/bs-alarm-pipe-line/show
   * @secure
   */
  apiBsAlarmPipeLineShowPost = (
    data: BsAlarmPipeLineQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsAlarmPipeLineShowPostData, any>({
      path: `/api/bs-alarm-pipe-line/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-community
   * @name ApiBsCommunityAddPost
   * @summary 新增数据
   * @request POST:/api/bs-community/add
   * @secure
   */
  apiBsCommunityAddPost = (data: BsCommunityFO, params: RequestParams = {}) =>
    this.http.request<ApiBsCommunityAddPostData, any>({
      path: `/api/bs-community/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-community
   * @name ApiBsCommunityEditPost
   * @summary 编辑数据
   * @request POST:/api/bs-community/edit
   * @secure
   */
  apiBsCommunityEditPost = (data: BsCommunityFO, params: RequestParams = {}) =>
    this.http.request<ApiBsCommunityEditPostData, any>({
      path: `/api/bs-community/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-community
   * @name ApiBsCommunityListPost
   * @summary 查询全部对象
   * @request POST:/api/bs-community/list
   * @secure
   */
  apiBsCommunityListPost = (data: BsCommunityQO, params: RequestParams = {}) =>
    this.http.request<ApiBsCommunityListPostData, any>({
      path: `/api/bs-community/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-community
   * @name ApiBsCommunityPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/bs-community/paged-list
   * @secure
   */
  apiBsCommunityPagedListPost = (
    data: BsCommunityPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsCommunityPagedListPostData, any>({
      path: `/api/bs-community/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-community
   * @name ApiBsCommunityRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/bs-community/remove-mul
   * @secure
   */
  apiBsCommunityRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsCommunityRemoveMulPostData, any>({
      path: `/api/bs-community/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-community
   * @name ApiBsCommunityRemovePost
   * @summary 删除1条数据
   * @request POST:/api/bs-community/remove
   * @secure
   */
  apiBsCommunityRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiBsCommunityRemovePostData, any>({
      path: `/api/bs-community/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-community
   * @name ApiBsCommunityShowPost
   * @summary 查询1个对象
   * @request POST:/api/bs-community/show
   * @secure
   */
  apiBsCommunityShowPost = (data: BsCommunityQO, params: RequestParams = {}) =>
    this.http.request<ApiBsCommunityShowPostData, any>({
      path: `/api/bs-community/show`,
      method: "POST",
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
   * @tags bs-outlet
   * @name ApiBsOutletAddPost
   * @summary 新增数据
   * @request POST:/api/bs-outlet/add
   * @secure
   */
  apiBsOutletAddPost = (data: BsOutletFO, params: RequestParams = {}) =>
    this.http.request<ApiBsOutletAddPostData, any>({
      path: `/api/bs-outlet/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-outlet
   * @name ApiBsOutletEditPost
   * @summary 编辑数据
   * @request POST:/api/bs-outlet/edit
   * @secure
   */
  apiBsOutletEditPost = (data: BsOutletFO, params: RequestParams = {}) =>
    this.http.request<ApiBsOutletEditPostData, any>({
      path: `/api/bs-outlet/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-outlet
   * @name ApiBsOutletListPost
   * @summary 查询全部对象
   * @request POST:/api/bs-outlet/list
   * @secure
   */
  apiBsOutletListPost = (data: BsOutletQO, params: RequestParams = {}) =>
    this.http.request<ApiBsOutletListPostData, any>({
      path: `/api/bs-outlet/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-outlet
   * @name ApiBsOutletPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/bs-outlet/paged-list
   * @secure
   */
  apiBsOutletPagedListPost = (data: BsOutletPQO, params: RequestParams = {}) =>
    this.http.request<ApiBsOutletPagedListPostData, any>({
      path: `/api/bs-outlet/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-outlet
   * @name ApiBsOutletRemovePost
   * @summary 删除数据
   * @request POST:/api/bs-outlet/remove
   * @secure
   */
  apiBsOutletRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiBsOutletRemovePostData, any>({
      path: `/api/bs-outlet/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-outlet
   * @name ApiBsOutletShowPost
   * @summary 查询1个对象
   * @request POST:/api/bs-outlet/show
   * @secure
   */
  apiBsOutletShowPost = (data: BsOutletQO, params: RequestParams = {}) =>
    this.http.request<ApiBsOutletShowPostData, any>({
      path: `/api/bs-outlet/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-line
   * @name ApiBsPipeLineAddPost
   * @summary 新增数据
   * @request POST:/api/bs-pipe-line/add
   * @secure
   */
  apiBsPipeLineAddPost = (data: BsPipeLineFO, params: RequestParams = {}) =>
    this.http.request<ApiBsPipeLineAddPostData, any>({
      path: `/api/bs-pipe-line/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-line
   * @name ApiBsPipeLineEditPost
   * @summary 编辑数据
   * @request POST:/api/bs-pipe-line/edit
   * @secure
   */
  apiBsPipeLineEditPost = (data: BsPipeLineFO, params: RequestParams = {}) =>
    this.http.request<ApiBsPipeLineEditPostData, any>({
      path: `/api/bs-pipe-line/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-line
   * @name ApiBsPipeLineGetCommunityInfoByPrealarmPost
   * @summary 根据报警信息获取小区的权重
   * @request POST:/api/bs-pipe-line/get-community-info-by-prealarm
   * @secure
   */
  apiBsPipeLineGetCommunityInfoByPrealarmPost = (
    data: PrealarmCommunityInfoQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipeLineGetCommunityInfoByPrealarmPostData, any>({
      path: `/api/bs-pipe-line/get-community-info-by-prealarm`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-line
   * @name ApiBsPipeLineGetLineByStartAndEndPost
   * @summary 根据起点和终点获取管线
   * @request POST:/api/bs-pipe-line/get-line-by-start-and-end
   * @secure
   */
  apiBsPipeLineGetLineByStartAndEndPost = (
    data: LineByStartAndEndQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipeLineGetLineByStartAndEndPostData, any>({
      path: `/api/bs-pipe-line/get-line-by-start-and-end`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-line
   * @name ApiBsPipeLineGetLineByStartPost
   * @summary 根据起点获取管线
   * @request POST:/api/bs-pipe-line/get-line-by-start
   * @secure
   */
  apiBsPipeLineGetLineByStartPost = (
    data: LineByStartAndEndQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipeLineGetLineByStartPostData, any>({
      path: `/api/bs-pipe-line/get-line-by-start`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-line
   * @name ApiBsPipeLineImportDataPost
   * @summary 导入管线数据
   * @request POST:/api/bs-pipe-line/import-data
   * @secure
   */
  apiBsPipeLineImportDataPost = (params: RequestParams = {}) =>
    this.http.request<ApiBsPipeLineImportDataPostData, any>({
      path: `/api/bs-pipe-line/import-data`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-line
   * @name ApiBsPipeLineLightQueryPost
   * @summary 精简查询所有管线
   * @request POST:/api/bs-pipe-line/light-query
   * @secure
   */
  apiBsPipeLineLightQueryPost = (
    data: BsPipeLineQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipeLineLightQueryPostData, any>({
      path: `/api/bs-pipe-line/light-query`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-line
   * @name ApiBsPipeLineLinesByEndPointPost
   * @summary 根据终点编号查询所有路线的管线
   * @request POST:/api/bs-pipe-line/lines-by-end-point
   * @secure
   */
  apiBsPipeLineLinesByEndPointPost = (
    data: LinesByEndPointQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipeLineLinesByEndPointPostData, any>({
      path: `/api/bs-pipe-line/lines-by-end-point`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-line
   * @name ApiBsPipeLineListPost
   * @summary 查询全部对象
   * @request POST:/api/bs-pipe-line/list
   * @secure
   */
  apiBsPipeLineListPost = (data: BsPipeLineQO, params: RequestParams = {}) =>
    this.http.request<ApiBsPipeLineListPostData, any>({
      path: `/api/bs-pipe-line/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-line
   * @name ApiBsPipeLinePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/bs-pipe-line/paged-list
   * @secure
   */
  apiBsPipeLinePagedListPost = (
    data: BsPipeLinePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipeLinePagedListPostData, any>({
      path: `/api/bs-pipe-line/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-line
   * @name ApiBsPipeLineRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/bs-pipe-line/remove-mul
   * @secure
   */
  apiBsPipeLineRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipeLineRemoveMulPostData, any>({
      path: `/api/bs-pipe-line/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-line
   * @name ApiBsPipeLineRemovePost
   * @summary 删除1条数据
   * @request POST:/api/bs-pipe-line/remove
   * @secure
   */
  apiBsPipeLineRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiBsPipeLineRemovePostData, any>({
      path: `/api/bs-pipe-line/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-line
   * @name ApiBsPipeLineShowPost
   * @summary 查询1个对象
   * @request POST:/api/bs-pipe-line/show
   * @secure
   */
  apiBsPipeLineShowPost = (data: BsPipeLineQO, params: RequestParams = {}) =>
    this.http.request<ApiBsPipeLineShowPostData, any>({
      path: `/api/bs-pipe-line/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point
   * @name ApiBsPipePointAddPost
   * @summary 新增数据
   * @request POST:/api/bs-pipe-point/add
   * @secure
   */
  apiBsPipePointAddPost = (data: BsPipePointFO, params: RequestParams = {}) =>
    this.http.request<ApiBsPipePointAddPostData, any>({
      path: `/api/bs-pipe-point/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point-alarm-parameter
   * @name ApiBsPipePointAlarmParameterAddPost
   * @summary 新增数据
   * @request POST:/api/bs-pipe-point-alarm-parameter/add
   * @secure
   */
  apiBsPipePointAlarmParameterAddPost = (
    data: BsPipePointAlarmParameterFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipePointAlarmParameterAddPostData, any>({
      path: `/api/bs-pipe-point-alarm-parameter/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point-alarm-parameter
   * @name ApiBsPipePointAlarmParameterEditPost
   * @summary 编辑数据
   * @request POST:/api/bs-pipe-point-alarm-parameter/edit
   * @secure
   */
  apiBsPipePointAlarmParameterEditPost = (
    data: BsPipePointAlarmParameterFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipePointAlarmParameterEditPostData, any>({
      path: `/api/bs-pipe-point-alarm-parameter/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point-alarm-parameter
   * @name ApiBsPipePointAlarmParameterListPost
   * @summary 查询全部对象
   * @request POST:/api/bs-pipe-point-alarm-parameter/list
   * @secure
   */
  apiBsPipePointAlarmParameterListPost = (
    data: BsPipePointAlarmParameterQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipePointAlarmParameterListPostData, any>({
      path: `/api/bs-pipe-point-alarm-parameter/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point-alarm-parameter
   * @name ApiBsPipePointAlarmParameterPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/bs-pipe-point-alarm-parameter/paged-list
   * @secure
   */
  apiBsPipePointAlarmParameterPagedListPost = (
    data: BsPipePointAlarmParameterPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipePointAlarmParameterPagedListPostData, any>({
      path: `/api/bs-pipe-point-alarm-parameter/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point-alarm-parameter
   * @name ApiBsPipePointAlarmParameterRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/bs-pipe-point-alarm-parameter/remove-mul
   * @secure
   */
  apiBsPipePointAlarmParameterRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipePointAlarmParameterRemoveMulPostData, any>({
      path: `/api/bs-pipe-point-alarm-parameter/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point-alarm-parameter
   * @name ApiBsPipePointAlarmParameterRemovePost
   * @summary 删除1条数据
   * @request POST:/api/bs-pipe-point-alarm-parameter/remove
   * @secure
   */
  apiBsPipePointAlarmParameterRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipePointAlarmParameterRemovePostData, any>({
      path: `/api/bs-pipe-point-alarm-parameter/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point-alarm-parameter
   * @name ApiBsPipePointAlarmParameterShowPost
   * @summary 查询1个对象
   * @request POST:/api/bs-pipe-point-alarm-parameter/show
   * @secure
   */
  apiBsPipePointAlarmParameterShowPost = (
    data: BsPipePointAlarmParameterQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipePointAlarmParameterShowPostData, any>({
      path: `/api/bs-pipe-point-alarm-parameter/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point-alarm-record
   * @name ApiBsPipePointAlarmRecordAddPost
   * @summary 新增数据
   * @request POST:/api/bs-pipe-point-alarm-record/add
   * @secure
   */
  apiBsPipePointAlarmRecordAddPost = (
    data: BsPipePointAlarmRecordFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipePointAlarmRecordAddPostData, any>({
      path: `/api/bs-pipe-point-alarm-record/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point-alarm-record
   * @name ApiBsPipePointAlarmRecordEditPost
   * @summary 编辑数据
   * @request POST:/api/bs-pipe-point-alarm-record/edit
   * @secure
   */
  apiBsPipePointAlarmRecordEditPost = (
    data: BsPipePointAlarmRecordFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipePointAlarmRecordEditPostData, any>({
      path: `/api/bs-pipe-point-alarm-record/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point-alarm-record
   * @name ApiBsPipePointAlarmRecordListPost
   * @summary 查询全部对象
   * @request POST:/api/bs-pipe-point-alarm-record/list
   * @secure
   */
  apiBsPipePointAlarmRecordListPost = (
    data: BsPipePointAlarmRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipePointAlarmRecordListPostData, any>({
      path: `/api/bs-pipe-point-alarm-record/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point-alarm-record
   * @name ApiBsPipePointAlarmRecordPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/bs-pipe-point-alarm-record/paged-list
   * @secure
   */
  apiBsPipePointAlarmRecordPagedListPost = (
    data: BsPipePointAlarmRecordPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipePointAlarmRecordPagedListPostData, any>({
      path: `/api/bs-pipe-point-alarm-record/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point-alarm-record
   * @name ApiBsPipePointAlarmRecordRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/bs-pipe-point-alarm-record/remove-mul
   * @secure
   */
  apiBsPipePointAlarmRecordRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipePointAlarmRecordRemoveMulPostData, any>({
      path: `/api/bs-pipe-point-alarm-record/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point-alarm-record
   * @name ApiBsPipePointAlarmRecordRemovePost
   * @summary 删除1条数据
   * @request POST:/api/bs-pipe-point-alarm-record/remove
   * @secure
   */
  apiBsPipePointAlarmRecordRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipePointAlarmRecordRemovePostData, any>({
      path: `/api/bs-pipe-point-alarm-record/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point-alarm-record
   * @name ApiBsPipePointAlarmRecordShowPost
   * @summary 查询1个对象
   * @request POST:/api/bs-pipe-point-alarm-record/show
   * @secure
   */
  apiBsPipePointAlarmRecordShowPost = (
    data: BsPipePointAlarmRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipePointAlarmRecordShowPostData, any>({
      path: `/api/bs-pipe-point-alarm-record/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point
   * @name ApiBsPipePointConvertCoordinatesToLaluPost
   * @summary 坐标转换为经纬度
   * @request POST:/api/bs-pipe-point/convert-coordinates-to-lalu
   * @secure
   */
  apiBsPipePointConvertCoordinatesToLaluPost = (params: RequestParams = {}) =>
    this.http.request<ApiBsPipePointConvertCoordinatesToLaluPostData, any>({
      path: `/api/bs-pipe-point/convert-coordinates-to-lalu`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point
   * @name ApiBsPipePointCountGroupByAppendagePost
   * @summary 附属物分类统计
   * @request POST:/api/bs-pipe-point/count-group-by-appendage
   * @secure
   */
  apiBsPipePointCountGroupByAppendagePost = (
    data: BsPipePointStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipePointCountGroupByAppendagePostData, any>({
      path: `/api/bs-pipe-point/count-group-by-appendage`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point
   * @name ApiBsPipePointEditPost
   * @summary 编辑数据
   * @request POST:/api/bs-pipe-point/edit
   * @secure
   */
  apiBsPipePointEditPost = (data: BsPipePointFO, params: RequestParams = {}) =>
    this.http.request<ApiBsPipePointEditPostData, any>({
      path: `/api/bs-pipe-point/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point
   * @name ApiBsPipePointImportDataPost
   * @summary 导入数据
   * @request POST:/api/bs-pipe-point/import-data
   * @secure
   */
  apiBsPipePointImportDataPost = (params: RequestParams = {}) =>
    this.http.request<ApiBsPipePointImportDataPostData, any>({
      path: `/api/bs-pipe-point/import-data`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point
   * @name ApiBsPipePointListPost
   * @summary 查询全部对象
   * @request POST:/api/bs-pipe-point/list
   * @secure
   */
  apiBsPipePointListPost = (data: BsPipePointQO, params: RequestParams = {}) =>
    this.http.request<ApiBsPipePointListPostData, any>({
      path: `/api/bs-pipe-point/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point
   * @name ApiBsPipePointPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/bs-pipe-point/paged-list
   * @secure
   */
  apiBsPipePointPagedListPost = (
    data: BsPipePointPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipePointPagedListPostData, any>({
      path: `/api/bs-pipe-point/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point
   * @name ApiBsPipePointRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/bs-pipe-point/remove-mul
   * @secure
   */
  apiBsPipePointRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBsPipePointRemoveMulPostData, any>({
      path: `/api/bs-pipe-point/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point
   * @name ApiBsPipePointRemovePost
   * @summary 删除1条数据
   * @request POST:/api/bs-pipe-point/remove
   * @secure
   */
  apiBsPipePointRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiBsPipePointRemovePostData, any>({
      path: `/api/bs-pipe-point/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pipe-point
   * @name ApiBsPipePointShowPost
   * @summary 查询1个对象
   * @request POST:/api/bs-pipe-point/show
   * @secure
   */
  apiBsPipePointShowPost = (data: BsPipePointQO, params: RequestParams = {}) =>
    this.http.request<ApiBsPipePointShowPostData, any>({
      path: `/api/bs-pipe-point/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pmc
   * @name ApiBsPmcAddPost
   * @summary 新增数据
   * @request POST:/api/bs-pmc/add
   * @secure
   */
  apiBsPmcAddPost = (data: BsPmcFO, params: RequestParams = {}) =>
    this.http.request<ApiBsPmcAddPostData, any>({
      path: `/api/bs-pmc/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pmc
   * @name ApiBsPmcEditPost
   * @summary 编辑数据
   * @request POST:/api/bs-pmc/edit
   * @secure
   */
  apiBsPmcEditPost = (data: BsPmcFO, params: RequestParams = {}) =>
    this.http.request<ApiBsPmcEditPostData, any>({
      path: `/api/bs-pmc/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pmc
   * @name ApiBsPmcListPost
   * @summary 查询全部对象
   * @request POST:/api/bs-pmc/list
   * @secure
   */
  apiBsPmcListPost = (data: BsPmcQO, params: RequestParams = {}) =>
    this.http.request<ApiBsPmcListPostData, any>({
      path: `/api/bs-pmc/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pmc
   * @name ApiBsPmcPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/bs-pmc/paged-list
   * @secure
   */
  apiBsPmcPagedListPost = (data: BsPmcPQO, params: RequestParams = {}) =>
    this.http.request<ApiBsPmcPagedListPostData, any>({
      path: `/api/bs-pmc/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pmc
   * @name ApiBsPmcRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/bs-pmc/remove-mul
   * @secure
   */
  apiBsPmcRemoveMulPost = (data: RemoveMulQO, params: RequestParams = {}) =>
    this.http.request<ApiBsPmcRemoveMulPostData, any>({
      path: `/api/bs-pmc/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pmc
   * @name ApiBsPmcRemovePost
   * @summary 删除1条数据
   * @request POST:/api/bs-pmc/remove
   * @secure
   */
  apiBsPmcRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiBsPmcRemovePostData, any>({
      path: `/api/bs-pmc/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-pmc
   * @name ApiBsPmcShowPost
   * @summary 查询1个对象
   * @request POST:/api/bs-pmc/show
   * @secure
   */
  apiBsPmcShowPost = (data: BsPmcQO, params: RequestParams = {}) =>
    this.http.request<ApiBsPmcShowPostData, any>({
      path: `/api/bs-pmc/show`,
      method: "POST",
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
   * @tags bs-zone
   * @name ApiBsZoneAddPost
   * @summary 新增数据
   * @request POST:/api/bs-zone/add
   * @secure
   */
  apiBsZoneAddPost = (data: BsZoneFO, params: RequestParams = {}) =>
    this.http.request<ApiBsZoneAddPostData, any>({
      path: `/api/bs-zone/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-zone
   * @name ApiBsZoneEditPost
   * @summary 编辑数据
   * @request POST:/api/bs-zone/edit
   * @secure
   */
  apiBsZoneEditPost = (data: BsZoneFO, params: RequestParams = {}) =>
    this.http.request<ApiBsZoneEditPostData, any>({
      path: `/api/bs-zone/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-zone
   * @name ApiBsZoneListPost
   * @summary 查询全部对象
   * @request POST:/api/bs-zone/list
   * @secure
   */
  apiBsZoneListPost = (data: BsZoneQO, params: RequestParams = {}) =>
    this.http.request<ApiBsZoneListPostData, any>({
      path: `/api/bs-zone/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-zone
   * @name ApiBsZonePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/bs-zone/paged-list
   * @secure
   */
  apiBsZonePagedListPost = (data: BsZonePQO, params: RequestParams = {}) =>
    this.http.request<ApiBsZonePagedListPostData, any>({
      path: `/api/bs-zone/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-zone
   * @name ApiBsZoneRemovePost
   * @summary 删除数据
   * @request POST:/api/bs-zone/remove
   * @secure
   */
  apiBsZoneRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiBsZoneRemovePostData, any>({
      path: `/api/bs-zone/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-zone
   * @name ApiBsZoneShowPost
   * @summary 查询1个对象
   * @request POST:/api/bs-zone/show
   * @secure
   */
  apiBsZoneShowPost = (data: BsZoneQO, params: RequestParams = {}) =>
    this.http.request<ApiBsZoneShowPostData, any>({
      path: `/api/bs-zone/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-zone
   * @name ApiBsZoneTreedataPost
   * @summary 获取树形结构数据
   * @request POST:/api/bs-zone/treedata
   * @secure
   */
  apiBsZoneTreedataPost = (data: BsZoneQO, params: RequestParams = {}) =>
    this.http.request<ApiBsZoneTreedataPostData, any>({
      path: `/api/bs-zone/treedata`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bs-zone
   * @name ApiBsZoneTypedataPost
   * @summary 按父级编码获取数据
   * @request POST:/api/bs-zone/typedata
   * @secure
   */
  apiBsZoneTypedataPost = (data: DdTypedataQO, params: RequestParams = {}) =>
    this.http.request<ApiBsZoneTypedataPostData, any>({
      path: `/api/bs-zone/typedata`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bumen-jsc
   * @name ApiBumenJscDetailJoinAlarmPost
   * @summary 查询详情(关联报警信息)
   * @request POST:/api/bumen-jsc/detail-join-alarm
   * @secure
   */
  apiBumenJscDetailJoinAlarmPost = (data: CaseQO, params: RequestParams = {}) =>
    this.http.request<ApiBumenJscDetailJoinAlarmPostData, any>({
      path: `/api/bumen-jsc/detail-join-alarm`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bumen-jsc
   * @name ApiBumenJscDetailPost
   * @summary 查询详情
   * @request POST:/api/bumen-jsc/detail
   * @secure
   */
  apiBumenJscDetailPost = (data: CaseQO, params: RequestParams = {}) =>
    this.http.request<ApiBumenJscDetailPostData, any>({
      path: `/api/bumen-jsc/detail`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bumen-jsc
   * @name ApiBumenJscEquipmentListPost
   * @summary 设备列表
   * @request POST:/api/bumen-jsc/equipment-list
   * @secure
   */
  apiBumenJscEquipmentListPost = (
    data: EquipmentQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBumenJscEquipmentListPostData, any>({
      path: `/api/bumen-jsc/equipment-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bumen-jsc
   * @name ApiBumenJscEventPagePost
   * @summary 分页查询
   * @request POST:/api/bumen-jsc/event-page
   * @secure
   */
  apiBumenJscEventPagePost = (
    data: ProcessEventPageQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBumenJscEventPagePostData, any>({
      path: `/api/bumen-jsc/event-page`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bumen-jsc
   * @name ApiBumenJscEventStatisticsPost
   * @summary 统计查询
   * @request POST:/api/bumen-jsc/event-statistics
   * @secure
   */
  apiBumenJscEventStatisticsPost = (
    data: EventStatisticsQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBumenJscEventStatisticsPostData, any>({
      path: `/api/bumen-jsc/event-statistics`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bumen-jsc
   * @name ApiBumenJscPrealarmRecordListPost
   * @summary 报警记录列表
   * @request POST:/api/bumen-jsc/prealarm-record-list
   * @secure
   */
  apiBumenJscPrealarmRecordListPost = (
    data: PrealarmRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBumenJscPrealarmRecordListPostData, any>({
      path: `/api/bumen-jsc/prealarm-record-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bumen-jsc
   * @name ApiBumenJscRepairDetailPost
   * @summary 查询流程图片路径
   * @request POST:/api/bumen-jsc/repair-detail
   * @secure
   */
  apiBumenJscRepairDetailPost = (data: CaseQO, params: RequestParams = {}) =>
    this.http.request<ApiBumenJscRepairDetailPostData, any>({
      path: `/api/bumen-jsc/repair-detail`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bumen-jsc
   * @name ApiBumenJscStatusMapPost
   * @summary 批量查询状态
   * @request POST:/api/bumen-jsc/status-map
   * @secure
   */
  apiBumenJscStatusMapPost = (
    data: ApiBumenJscStatusMapPostPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBumenJscStatusMapPostData, any>({
      path: `/api/bumen-jsc/status-map`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bumen-jsc
   * @name ApiBumenJscTaskDetailPost
   * @summary 查询流程信息
   * @request POST:/api/bumen-jsc/task-detail
   * @secure
   */
  apiBumenJscTaskDetailPost = (data: CaseQO, params: RequestParams = {}) =>
    this.http.request<ApiBumenJscTaskDetailPostData, any>({
      path: `/api/bumen-jsc/task-detail`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bumen-jsc
   * @name ApiBumenJscTechnicsListPost
   * @summary 监测点位列表
   * @request POST:/api/bumen-jsc/technics-list
   * @secure
   */
  apiBumenJscTechnicsListPost = (
    data: TechnicsQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBumenJscTechnicsListPostData, any>({
      path: `/api/bumen-jsc/technics-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags bumen-jsc
   * @name ApiBumenJscTsLastPrealarmRecordListPost
   * @summary 最新报警记录列表,按technicsId分组
   * @request POST:/api/bumen-jsc/ts-last-prealarm-record-list
   * @secure
   */
  apiBumenJscTsLastPrealarmRecordListPost = (
    data: TsLastPrealarmRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBumenJscTsLastPrealarmRecordListPostData, any>({
      path: `/api/bumen-jsc/ts-last-prealarm-record-list`,
      method: "POST",
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
   * @tags device-info
   * @name ApiDeviceInfoDeviceListByPositionGet
   * @summary 根据起始和结束经纬度获取监控资源
   * @request GET:/api/device-info/device-list-by-position
   * @secure
   */
  apiDeviceInfoDeviceListByPositionGet = (
    data: GetDeviceListByPositionQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiDeviceInfoDeviceListByPositionGetData, any>({
      path: `/api/device-info/device-list-by-position`,
      method: "GET",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags device-info
   * @name ApiDeviceInfoDeviceListByPositionScopeGet
   * @summary 根据经纬度及范围查询监控资源
   * @request GET:/api/device-info/device-list-by-position-scope
   * @secure
   */
  apiDeviceInfoDeviceListByPositionScopeGet = (
    data: GetDeviceListByPositionScopeQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiDeviceInfoDeviceListByPositionScopeGetData, any>({
      path: `/api/device-info/device-list-by-position-scope`,
      method: "GET",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags device-info
   * @name ApiDeviceInfoMonitorByOrganizationPost
   * @summary 获取监控资源列表
   * @request POST:/api/device-info/monitor-by-organization
   * @secure
   */
  apiDeviceInfoMonitorByOrganizationPost = (
    data: GetMonitorByOrganizationQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiDeviceInfoMonitorByOrganizationPostData, any>({
      path: `/api/device-info/monitor-by-organization`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags device-info
   * @name ApiDeviceInfoMonitorListByDeviceIdPost
   * @summary 根据监控国标编码获取监控信息
   * @request POST:/api/device-info/monitor-list-by-device-id
   * @secure
   */
  apiDeviceInfoMonitorListByDeviceIdPost = (
    data: GetMonitorListByDeviceIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiDeviceInfoMonitorListByDeviceIdPostData, any>({
      path: `/api/device-info/monitor-list-by-device-id`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags device-info
   * @name ApiDeviceInfoOrganizationListPost
   * @summary 获取目录信息
   * @request POST:/api/device-info/organization-list
   * @secure
   */
  apiDeviceInfoOrganizationListPost = (
    data: GetOrganizationListQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiDeviceInfoOrganizationListPostData, any>({
      path: `/api/device-info/organization-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags emergency-plan
   * @name ApiEmergencyPlanAddPost
   * @summary 新增数据
   * @request POST:/api/emergency-plan/add
   * @secure
   */
  apiEmergencyPlanAddPost = (
    data: ApiEmergencyPlanAddPostPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEmergencyPlanAddPostData, any>({
      path: `/api/emergency-plan/add`,
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
   * @tags emergency-plan
   * @name ApiEmergencyPlanEditPost
   * @summary 编辑数据
   * @request POST:/api/emergency-plan/edit
   * @secure
   */
  apiEmergencyPlanEditPost = (
    data: ApiEmergencyPlanEditPostPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEmergencyPlanEditPostData, any>({
      path: `/api/emergency-plan/edit`,
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
   * @tags emergency-plan
   * @name ApiEmergencyPlanListPost
   * @summary 查询全部对象
   * @request POST:/api/emergency-plan/list
   * @secure
   */
  apiEmergencyPlanListPost = (
    data: EmergencyPlanQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEmergencyPlanListPostData, any>({
      path: `/api/emergency-plan/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags emergency-plan
   * @name ApiEmergencyPlanPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/emergency-plan/paged-list
   * @secure
   */
  apiEmergencyPlanPagedListPost = (
    data: EmergencyPlanPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEmergencyPlanPagedListPostData, any>({
      path: `/api/emergency-plan/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags emergency-plan
   * @name ApiEmergencyPlanRemovePost
   * @summary 删除数据
   * @request POST:/api/emergency-plan/remove
   * @secure
   */
  apiEmergencyPlanRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiEmergencyPlanRemovePostData, any>({
      path: `/api/emergency-plan/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags emergency-plan
   * @name ApiEmergencyPlanShowPost
   * @summary 查询1个对象
   * @request POST:/api/emergency-plan/show
   * @secure
   */
  apiEmergencyPlanShowPost = (
    data: EmergencyPlanQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEmergencyPlanShowPostData, any>({
      path: `/api/emergency-plan/show`,
      method: "POST",
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
   * @name ApiEquipmentParamDdEditPost
   * @summary 编辑数据
   * @request POST:/api/equipment-param-dd/edit
   * @secure
   */
  apiEquipmentParamDdEditPost = (
    data: EquipmentParamDdFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamDdEditPostData, any>({
      path: `/api/equipment-param-dd/edit`,
      method: "POST",
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
   * @name ApiEquipmentParamDdRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/equipment-param-dd/remove-mul
   * @secure
   */
  apiEquipmentParamDdRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamDdRemoveMulPostData, any>({
      path: `/api/equipment-param-dd/remove-mul`,
      method: "POST",
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
   * @name ApiEquipmentParamDdRemovePost
   * @summary 删除1条数据
   * @request POST:/api/equipment-param-dd/remove
   * @secure
   */
  apiEquipmentParamDdRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamDdRemovePostData, any>({
      path: `/api/equipment-param-dd/remove`,
      method: "POST",
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
   * @name ApiEquipmentParamEquipmentParamRainConditionPost
   * @summary 实时雨水情数据
   * @request POST:/api/equipment-param/equipment-param-rain-condition
   * @secure
   */
  apiEquipmentParamEquipmentParamRainConditionPost = (
    data: EquipmentParamRainConditionQO,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ApiEquipmentParamEquipmentParamRainConditionPostData,
      any
    >({
      path: `/api/equipment-param/equipment-param-rain-condition`,
      method: "POST",
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
   * @name ApiEquipmentParamGetEquipmentParamByIdPost
   * @summary 根据监测因子ID获取监测因子详情
   * @request POST:/api/equipment-param/get-equipment-param-by-id
   * @secure
   */
  apiEquipmentParamGetEquipmentParamByIdPost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamGetEquipmentParamByIdPostData, any>({
      path: `/api/equipment-param/get-equipment-param-by-id`,
      method: "POST",
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
   * @name ApiEquipmentParamHdEditPost
   * @summary 编辑数据
   * @request POST:/api/equipment-param-hd/edit
   * @secure
   */
  apiEquipmentParamHdEditPost = (
    data: EquipmentParamHdFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamHdEditPostData, any>({
      path: `/api/equipment-param-hd/edit`,
      method: "POST",
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
   * @name ApiEquipmentParamHdRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/equipment-param-hd/remove-mul
   * @secure
   */
  apiEquipmentParamHdRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamHdRemoveMulPostData, any>({
      path: `/api/equipment-param-hd/remove-mul`,
      method: "POST",
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
   * @name ApiEquipmentParamHdRemovePost
   * @summary 删除1条数据
   * @request POST:/api/equipment-param-hd/remove
   * @secure
   */
  apiEquipmentParamHdRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamHdRemovePostData, any>({
      path: `/api/equipment-param-hd/remove`,
      method: "POST",
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
   * @name ApiEquipmentParamMdEditPost
   * @summary 编辑数据
   * @request POST:/api/equipment-param-md/edit
   * @secure
   */
  apiEquipmentParamMdEditPost = (
    data: EquipmentParamMdFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamMdEditPostData, any>({
      path: `/api/equipment-param-md/edit`,
      method: "POST",
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
   * @name ApiEquipmentParamMdGetEquipmentParamMdListByIdPost
   * @summary 根据因子获取分钟数据
   * @request POST:/api/equipment-param-md/get-equipment-param-md-list-by-id
   * @secure
   */
  apiEquipmentParamMdGetEquipmentParamMdListByIdPost = (
    data: TimeAndIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ApiEquipmentParamMdGetEquipmentParamMdListByIdPostData,
      any
    >({
      path: `/api/equipment-param-md/get-equipment-param-md-list-by-id`,
      method: "POST",
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
   * @name ApiEquipmentParamMdQueryByWaterRainfallEigenvaluePost
   * @summary 雨水情最新及特征测值
   * @request POST:/api/equipment-param-md/query-by-water-rainfall-eigenvalue
   * @secure
   */
  apiEquipmentParamMdQueryByWaterRainfallEigenvaluePost = (
    data: EquipmentParamMdPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ApiEquipmentParamMdQueryByWaterRainfallEigenvaluePostData,
      any
    >({
      path: `/api/equipment-param-md/query-by-water-rainfall-eigenvalue`,
      method: "POST",
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
   * @name ApiEquipmentParamMdQueryByWaterRainfallInformationPost
   * @summary 雨水情统计
   * @request POST:/api/equipment-param-md/query-by-water-rainfall-information
   * @secure
   */
  apiEquipmentParamMdQueryByWaterRainfallInformationPost = (
    data: EquipmentParamMdPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ApiEquipmentParamMdQueryByWaterRainfallInformationPostData,
      any
    >({
      path: `/api/equipment-param-md/query-by-water-rainfall-information`,
      method: "POST",
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
   * @name ApiEquipmentParamMdRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/equipment-param-md/remove-mul
   * @secure
   */
  apiEquipmentParamMdRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamMdRemoveMulPostData, any>({
      path: `/api/equipment-param-md/remove-mul`,
      method: "POST",
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
   * @name ApiEquipmentParamMdRemovePost
   * @summary 删除1条数据
   * @request POST:/api/equipment-param-md/remove
   * @secure
   */
  apiEquipmentParamMdRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamMdRemovePostData, any>({
      path: `/api/equipment-param-md/remove`,
      method: "POST",
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
   * @tags equipment-param
   * @name ApiEquipmentParamRealTimeReportPost
   * @summary 实时数据报表
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
   * @name ApiEquipmentParamRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/equipment-param/remove-mul
   * @secure
   */
  apiEquipmentParamRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamRemoveMulPostData, any>({
      path: `/api/equipment-param/remove-mul`,
      method: "POST",
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
   * @summary 删除1条数据
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
   * @tags equipment
   * @name ApiEquipmentRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/equipment/remove-mul
   * @secure
   */
  apiEquipmentRemoveMulPost = (data: RemoveMulQO, params: RequestParams = {}) =>
    this.http.request<ApiEquipmentRemoveMulPostData, any>({
      path: `/api/equipment/remove-mul`,
      method: "POST",
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
   * @summary 删除1条数据
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
   * @tags inspection-issue
   * @name ApiInspectionIssueEditPost
   * @summary 修改问题
   * @request POST:/api/inspection-issue/edit
   * @secure
   */
  apiInspectionIssueEditPost = (
    data: InspectionIssueFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionIssueEditPostData, any>({
      path: `/api/inspection-issue/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-issue
   * @name ApiInspectionIssueHandlePost
   * @summary 问题处理
   * @request POST:/api/inspection-issue/handle
   * @secure
   */
  apiInspectionIssueHandlePost = (
    data: IssueHandleFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionIssueHandlePostData, any>({
      path: `/api/inspection-issue/handle`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-issue
   * @name ApiInspectionIssueListPost
   * @summary 查询全部对象
   * @request POST:/api/inspection-issue/list
   * @secure
   */
  apiInspectionIssueListPost = (
    data: InspectionIssueQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionIssueListPostData, any>({
      path: `/api/inspection-issue/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-issue
   * @name ApiInspectionIssuePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/inspection-issue/paged-list
   * @secure
   */
  apiInspectionIssuePagedListPost = (
    data: InspectionIssuePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionIssuePagedListPostData, any>({
      path: `/api/inspection-issue/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-issue
   * @name ApiInspectionIssueRemovePost
   * @summary 删除问题（逻辑删除）
   * @request POST:/api/inspection-issue/remove
   * @secure
   */
  apiInspectionIssueRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiInspectionIssueRemovePostData, any>({
      path: `/api/inspection-issue/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-issue
   * @name ApiInspectionIssueReportPost
   * @summary 问题上报
   * @request POST:/api/inspection-issue/report
   * @secure
   */
  apiInspectionIssueReportPost = (
    data: InspectionIssueFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionIssueReportPostData, any>({
      path: `/api/inspection-issue/report`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-issue-severity
   * @name ApiInspectionIssueSeverityAddPost
   * @summary 新增数据
   * @request POST:/api/inspection-issue-severity/add
   * @secure
   */
  apiInspectionIssueSeverityAddPost = (
    data: InspectionIssueSeverityFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionIssueSeverityAddPostData, any>({
      path: `/api/inspection-issue-severity/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-issue-severity
   * @name ApiInspectionIssueSeverityEditPost
   * @summary 编辑数据
   * @request POST:/api/inspection-issue-severity/edit
   * @secure
   */
  apiInspectionIssueSeverityEditPost = (
    data: InspectionIssueSeverityFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionIssueSeverityEditPostData, any>({
      path: `/api/inspection-issue-severity/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-issue-severity
   * @name ApiInspectionIssueSeverityListPost
   * @summary 查询全部对象
   * @request POST:/api/inspection-issue-severity/list
   * @secure
   */
  apiInspectionIssueSeverityListPost = (
    data: InspectionIssueSeverityQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionIssueSeverityListPostData, any>({
      path: `/api/inspection-issue-severity/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-issue-severity
   * @name ApiInspectionIssueSeverityPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/inspection-issue-severity/paged-list
   * @secure
   */
  apiInspectionIssueSeverityPagedListPost = (
    data: InspectionIssueSeverityPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionIssueSeverityPagedListPostData, any>({
      path: `/api/inspection-issue-severity/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-issue-severity
   * @name ApiInspectionIssueSeverityRemovePost
   * @summary 删除数据
   * @request POST:/api/inspection-issue-severity/remove
   * @secure
   */
  apiInspectionIssueSeverityRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionIssueSeverityRemovePostData, any>({
      path: `/api/inspection-issue-severity/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-issue-severity
   * @name ApiInspectionIssueSeverityShowPost
   * @summary 查询1个对象
   * @request POST:/api/inspection-issue-severity/show
   * @secure
   */
  apiInspectionIssueSeverityShowPost = (
    data: InspectionIssueSeverityQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionIssueSeverityShowPostData, any>({
      path: `/api/inspection-issue-severity/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-issue
   * @name ApiInspectionIssueShowPost
   * @summary 查询1个对象
   * @request POST:/api/inspection-issue/show
   * @secure
   */
  apiInspectionIssueShowPost = (
    data: InspectionIssueQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionIssueShowPostData, any>({
      path: `/api/inspection-issue/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-issue-type
   * @name ApiInspectionIssueTypeAddPost
   * @summary 新增数据
   * @request POST:/api/inspection-issue-type/add
   * @secure
   */
  apiInspectionIssueTypeAddPost = (
    data: InspectionIssueTypeFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionIssueTypeAddPostData, any>({
      path: `/api/inspection-issue-type/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-issue-type
   * @name ApiInspectionIssueTypeEditPost
   * @summary 编辑数据
   * @request POST:/api/inspection-issue-type/edit
   * @secure
   */
  apiInspectionIssueTypeEditPost = (
    data: InspectionIssueTypeFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionIssueTypeEditPostData, any>({
      path: `/api/inspection-issue-type/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-issue-type
   * @name ApiInspectionIssueTypeListPost
   * @summary 查询全部对象
   * @request POST:/api/inspection-issue-type/list
   * @secure
   */
  apiInspectionIssueTypeListPost = (
    data: InspectionIssueTypeQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionIssueTypeListPostData, any>({
      path: `/api/inspection-issue-type/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-issue-type
   * @name ApiInspectionIssueTypePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/inspection-issue-type/paged-list
   * @secure
   */
  apiInspectionIssueTypePagedListPost = (
    data: InspectionIssueTypePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionIssueTypePagedListPostData, any>({
      path: `/api/inspection-issue-type/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-issue-type
   * @name ApiInspectionIssueTypeRemovePost
   * @summary 删除数据
   * @request POST:/api/inspection-issue-type/remove
   * @secure
   */
  apiInspectionIssueTypeRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionIssueTypeRemovePostData, any>({
      path: `/api/inspection-issue-type/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-issue-type
   * @name ApiInspectionIssueTypeShowPost
   * @summary 查询1个对象
   * @request POST:/api/inspection-issue-type/show
   * @secure
   */
  apiInspectionIssueTypeShowPost = (
    data: InspectionIssueTypeQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionIssueTypeShowPostData, any>({
      path: `/api/inspection-issue-type/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-record
   * @name ApiInspectionRecordAppendTrackPost
   * @summary 轨迹上报（追加模式）
   * @request POST:/api/inspection-record/append-track
   * @secure
   */
  apiInspectionRecordAppendTrackPost = (
    data: TrackReportFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionRecordAppendTrackPostData, any>({
      path: `/api/inspection-record/append-track`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-record
   * @name ApiInspectionRecordListPost
   * @summary 查询全部对象
   * @request POST:/api/inspection-record/list
   * @secure
   */
  apiInspectionRecordListPost = (
    data: InspectionRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionRecordListPostData, any>({
      path: `/api/inspection-record/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-record
   * @name ApiInspectionRecordPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/inspection-record/paged-list
   * @secure
   */
  apiInspectionRecordPagedListPost = (
    data: InspectionRecordPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionRecordPagedListPostData, any>({
      path: `/api/inspection-record/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-record
   * @name ApiInspectionRecordShowPost
   * @summary 查询1个对象
   * @request POST:/api/inspection-record/show
   * @secure
   */
  apiInspectionRecordShowPost = (
    data: InspectionRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionRecordShowPostData, any>({
      path: `/api/inspection-record/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-task
   * @name ApiInspectionTaskDispatchPost
   * @summary 派发任务
   * @request POST:/api/inspection-task/dispatch
   * @secure
   */
  apiInspectionTaskDispatchPost = (
    data: InspectionTaskFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionTaskDispatchPostData, any>({
      path: `/api/inspection-task/dispatch`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-task
   * @name ApiInspectionTaskEditPost
   * @summary 修改任务
   * @request POST:/api/inspection-task/edit
   * @secure
   */
  apiInspectionTaskEditPost = (
    data: InspectionTaskFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionTaskEditPostData, any>({
      path: `/api/inspection-task/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-task
   * @name ApiInspectionTaskEndPost
   * @summary 结束任务
   * @request POST:/api/inspection-task/end
   * @secure
   */
  apiInspectionTaskEndPost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiInspectionTaskEndPostData, any>({
      path: `/api/inspection-task/end`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-task
   * @name ApiInspectionTaskListPost
   * @summary 查询全部对象
   * @request POST:/api/inspection-task/list
   * @secure
   */
  apiInspectionTaskListPost = (
    data: InspectionTaskQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionTaskListPostData, any>({
      path: `/api/inspection-task/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-task
   * @name ApiInspectionTaskPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/inspection-task/paged-list
   * @secure
   */
  apiInspectionTaskPagedListPost = (
    data: InspectionTaskPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionTaskPagedListPostData, any>({
      path: `/api/inspection-task/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-task
   * @name ApiInspectionTaskRemovePost
   * @summary 删除任务
   * @request POST:/api/inspection-task/remove
   * @secure
   */
  apiInspectionTaskRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiInspectionTaskRemovePostData, any>({
      path: `/api/inspection-task/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-task
   * @name ApiInspectionTaskShowPost
   * @summary 查询1个对象
   * @request POST:/api/inspection-task/show
   * @secure
   */
  apiInspectionTaskShowPost = (
    data: InspectionTaskQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiInspectionTaskShowPostData, any>({
      path: `/api/inspection-task/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags inspection-task
   * @name ApiInspectionTaskStartPost
   * @summary 开始任务
   * @request POST:/api/inspection-task/start
   * @secure
   */
  apiInspectionTaskStartPost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiInspectionTaskStartPostData, any>({
      path: `/api/inspection-task/start`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-file
   * @name ApiKnowledgeFileAddPost
   * @summary 新增数据
   * @request POST:/api/knowledge-file/add
   * @secure
   */
  apiKnowledgeFileAddPost = (
    data: KnowledgeFileQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeFileAddPostData, any>({
      path: `/api/knowledge-file/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-file
   * @name ApiKnowledgeFileEditPost
   * @summary 编辑数据
   * @request POST:/api/knowledge-file/edit
   * @secure
   */
  apiKnowledgeFileEditPost = (
    data: KnowledgeFileQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeFileEditPostData, any>({
      path: `/api/knowledge-file/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-file
   * @name ApiKnowledgeFileListPost
   * @summary 查询全部对象
   * @request POST:/api/knowledge-file/list
   * @secure
   */
  apiKnowledgeFileListPost = (
    data: KnowledgeFileQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeFileListPostData, any>({
      path: `/api/knowledge-file/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-file
   * @name ApiKnowledgeFilePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/knowledge-file/paged-list
   * @secure
   */
  apiKnowledgeFilePagedListPost = (
    data: KnowledgeFilePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeFilePagedListPostData, any>({
      path: `/api/knowledge-file/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-file
   * @name ApiKnowledgeFileRemovePost
   * @summary 删除数据
   * @request POST:/api/knowledge-file/remove
   * @secure
   */
  apiKnowledgeFileRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiKnowledgeFileRemovePostData, any>({
      path: `/api/knowledge-file/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-file
   * @name ApiKnowledgeFileShowPost
   * @summary 查询1个对象
   * @request POST:/api/knowledge-file/show
   * @secure
   */
  apiKnowledgeFileShowPost = (
    data: KnowledgeFileQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeFileShowPostData, any>({
      path: `/api/knowledge-file/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-file
   * @name ApiKnowledgeFileTreedataPost
   * @summary 获取树形结构数据
   * @request POST:/api/knowledge-file/treedata
   * @secure
   */
  apiKnowledgeFileTreedataPost = (
    data: KnowledgeFileQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeFileTreedataPostData, any>({
      path: `/api/knowledge-file/treedata`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-file
   * @name ApiKnowledgeFileUploadPost
   * @summary 上传文件
   * @request POST:/api/knowledge-file/upload
   * @secure
   */
  apiKnowledgeFileUploadPost = (
    data: ApiKnowledgeFileUploadPostPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeFileUploadPostData, any>({
      path: `/api/knowledge-file/upload`,
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
   * @name ApiPrealarmRecordListPost
   * @summary 查询全部对象
   * @request POST:/api/prealarm-record/list
   * @secure
   */
  apiPrealarmRecordListPost = (
    data: PrealarmRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiPrealarmRecordListPostData, any>({
      path: `/api/prealarm-record/list`,
      method: "POST",
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
   * @summary 查询分页数据
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
   * @name ApiPrealarmRecordRtPrealarmRecordPost
   * @summary 查询实时的预警记录
   * @request POST:/api/prealarm-record/rt-prealarm-record
   * @secure
   */
  apiPrealarmRecordRtPrealarmRecordPost = (
    data: RtPrealarmRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiPrealarmRecordRtPrealarmRecordPostData, any>({
      path: `/api/prealarm-record/rt-prealarm-record`,
      method: "POST",
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
   * @name ApiPrealarmRecordShowPost
   * @summary 查询1个对象
   * @request POST:/api/prealarm-record/show
   * @secure
   */
  apiPrealarmRecordShowPost = (
    data: PrealarmRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiPrealarmRecordShowPostData, any>({
      path: `/api/prealarm-record/show`,
      method: "POST",
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
   * @name ApiPrealarmRuleAddPost
   * @summary 新增数据
   * @request POST:/api/prealarm-rule/add
   * @secure
   */
  apiPrealarmRuleAddPost = (data: PrealarmRuleFO, params: RequestParams = {}) =>
    this.http.request<ApiPrealarmRuleAddPostData, any>({
      path: `/api/prealarm-rule/add`,
      method: "POST",
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
   * @name ApiPrealarmRuleEditPost
   * @summary 编辑数据
   * @request POST:/api/prealarm-rule/edit
   * @secure
   */
  apiPrealarmRuleEditPost = (
    data: PrealarmRuleFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiPrealarmRuleEditPostData, any>({
      path: `/api/prealarm-rule/edit`,
      method: "POST",
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
   * @name ApiPrealarmRuleGetRpsPost
   * @summary 查询关联的责任人
   * @request POST:/api/prealarm-rule/get-rps
   * @secure
   */
  apiPrealarmRuleGetRpsPost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiPrealarmRuleGetRpsPostData, any>({
      path: `/api/prealarm-rule/get-rps`,
      method: "POST",
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
   * @name ApiPrealarmRuleListPost
   * @summary 查询全部对象
   * @request POST:/api/prealarm-rule/list
   * @secure
   */
  apiPrealarmRuleListPost = (
    data: PrealarmRuleQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiPrealarmRuleListPostData, any>({
      path: `/api/prealarm-rule/list`,
      method: "POST",
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
   * @name ApiPrealarmRulePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/prealarm-rule/paged-list
   * @secure
   */
  apiPrealarmRulePagedListPost = (
    data: PrealarmRulePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiPrealarmRulePagedListPostData, any>({
      path: `/api/prealarm-rule/paged-list`,
      method: "POST",
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
   * @name ApiPrealarmRuleRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/prealarm-rule/remove-mul
   * @secure
   */
  apiPrealarmRuleRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiPrealarmRuleRemoveMulPostData, any>({
      path: `/api/prealarm-rule/remove-mul`,
      method: "POST",
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
   * @name ApiPrealarmRuleRemovePost
   * @summary 删除1条数据
   * @request POST:/api/prealarm-rule/remove
   * @secure
   */
  apiPrealarmRuleRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiPrealarmRuleRemovePostData, any>({
      path: `/api/prealarm-rule/remove`,
      method: "POST",
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
   * @name ApiPrealarmRuleShowPost
   * @summary 查询1个对象
   * @request POST:/api/prealarm-rule/show
   * @secure
   */
  apiPrealarmRuleShowPost = (
    data: PrealarmRuleQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiPrealarmRuleShowPostData, any>({
      path: `/api/prealarm-rule/show`,
      method: "POST",
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
   * @name ApiPrealarmRuleUpdateRpsPost
   * @summary 查询关联的责任人
   * @request POST:/api/prealarm-rule/update-rps
   * @secure
   */
  apiPrealarmRuleUpdateRpsPost = (
    data: UpdateRpsQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiPrealarmRuleUpdateRpsPostData, any>({
      path: `/api/prealarm-rule/update-rps`,
      method: "POST",
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
   * @tags reservoir-capacity
   * @name ApiReservoirCapacityAddBatchPost
   * @summary 批量新增
   * @request POST:/api/reservoir-capacity/add-batch
   * @secure
   */
  apiReservoirCapacityAddBatchPost = (
    data: ApiReservoirCapacityAddBatchPostPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirCapacityAddBatchPostData, any>({
      path: `/api/reservoir-capacity/add-batch`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-capacity
   * @name ApiReservoirCapacityAddPost
   * @summary 新增数据
   * @request POST:/api/reservoir-capacity/add
   * @secure
   */
  apiReservoirCapacityAddPost = (
    data: ReservoirCapacityFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirCapacityAddPostData, any>({
      path: `/api/reservoir-capacity/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-capacity
   * @name ApiReservoirCapacityDelBatchPost
   * @summary 批量删除
   * @request POST:/api/reservoir-capacity/del-batch
   * @secure
   */
  apiReservoirCapacityDelBatchPost = (
    data: ReservoirCapacityQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirCapacityDelBatchPostData, any>({
      path: `/api/reservoir-capacity/del-batch`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-capacity
   * @name ApiReservoirCapacityEditBatchPost
   * @summary 批量修改
   * @request POST:/api/reservoir-capacity/edit-batch
   * @secure
   */
  apiReservoirCapacityEditBatchPost = (
    data: ApiReservoirCapacityEditBatchPostPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirCapacityEditBatchPostData, any>({
      path: `/api/reservoir-capacity/edit-batch`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-capacity
   * @name ApiReservoirCapacityEditPost
   * @summary 编辑数据
   * @request POST:/api/reservoir-capacity/edit
   * @secure
   */
  apiReservoirCapacityEditPost = (
    data: ReservoirCapacityFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirCapacityEditPostData, any>({
      path: `/api/reservoir-capacity/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-capacity
   * @name ApiReservoirCapacityListPost
   * @summary 查询全部对象
   * @request POST:/api/reservoir-capacity/list
   * @secure
   */
  apiReservoirCapacityListPost = (
    data: ReservoirCapacityQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirCapacityListPostData, any>({
      path: `/api/reservoir-capacity/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-capacity
   * @name ApiReservoirCapacityPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/reservoir-capacity/paged-list
   * @secure
   */
  apiReservoirCapacityPagedListPost = (
    data: ReservoirCapacityPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirCapacityPagedListPostData, any>({
      path: `/api/reservoir-capacity/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-capacity
   * @name ApiReservoirCapacityRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/reservoir-capacity/remove-mul
   * @secure
   */
  apiReservoirCapacityRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirCapacityRemoveMulPostData, any>({
      path: `/api/reservoir-capacity/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-capacity
   * @name ApiReservoirCapacityRemovePost
   * @summary 删除1条数据
   * @request POST:/api/reservoir-capacity/remove
   * @secure
   */
  apiReservoirCapacityRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirCapacityRemovePostData, any>({
      path: `/api/reservoir-capacity/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-capacity
   * @name ApiReservoirCapacityShowPost
   * @summary 查询1个对象
   * @request POST:/api/reservoir-capacity/show
   * @secure
   */
  apiReservoirCapacityShowPost = (
    data: ReservoirCapacityQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirCapacityShowPostData, any>({
      path: `/api/reservoir-capacity/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-flow
   * @name ApiReservoirFlowAddBatchPost
   * @summary 批量新增
   * @request POST:/api/reservoir-flow/add-batch
   * @secure
   */
  apiReservoirFlowAddBatchPost = (
    data: ApiReservoirFlowAddBatchPostPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirFlowAddBatchPostData, any>({
      path: `/api/reservoir-flow/add-batch`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-flow
   * @name ApiReservoirFlowAddPost
   * @summary 新增数据
   * @request POST:/api/reservoir-flow/add
   * @secure
   */
  apiReservoirFlowAddPost = (
    data: ReservoirFlowFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirFlowAddPostData, any>({
      path: `/api/reservoir-flow/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-flow
   * @name ApiReservoirFlowDelBatchPost
   * @summary 批量删除
   * @request POST:/api/reservoir-flow/del-batch
   * @secure
   */
  apiReservoirFlowDelBatchPost = (
    data: ReservoirFlowQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirFlowDelBatchPostData, any>({
      path: `/api/reservoir-flow/del-batch`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-flow
   * @name ApiReservoirFlowEditBatchPost
   * @summary 批量修改
   * @request POST:/api/reservoir-flow/edit-batch
   * @secure
   */
  apiReservoirFlowEditBatchPost = (
    data: ApiReservoirFlowEditBatchPostPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirFlowEditBatchPostData, any>({
      path: `/api/reservoir-flow/edit-batch`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-flow
   * @name ApiReservoirFlowEditPost
   * @summary 编辑数据
   * @request POST:/api/reservoir-flow/edit
   * @secure
   */
  apiReservoirFlowEditPost = (
    data: ReservoirFlowFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirFlowEditPostData, any>({
      path: `/api/reservoir-flow/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-flow
   * @name ApiReservoirFlowListPost
   * @summary 查询全部对象
   * @request POST:/api/reservoir-flow/list
   * @secure
   */
  apiReservoirFlowListPost = (
    data: ReservoirFlowQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirFlowListPostData, any>({
      path: `/api/reservoir-flow/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-flow
   * @name ApiReservoirFlowPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/reservoir-flow/paged-list
   * @secure
   */
  apiReservoirFlowPagedListPost = (
    data: ReservoirFlowPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirFlowPagedListPostData, any>({
      path: `/api/reservoir-flow/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-flow
   * @name ApiReservoirFlowRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/reservoir-flow/remove-mul
   * @secure
   */
  apiReservoirFlowRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirFlowRemoveMulPostData, any>({
      path: `/api/reservoir-flow/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-flow
   * @name ApiReservoirFlowRemovePost
   * @summary 删除1条数据
   * @request POST:/api/reservoir-flow/remove
   * @secure
   */
  apiReservoirFlowRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiReservoirFlowRemovePostData, any>({
      path: `/api/reservoir-flow/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-flow
   * @name ApiReservoirFlowShowPost
   * @summary 查询1个对象
   * @request POST:/api/reservoir-flow/show
   * @secure
   */
  apiReservoirFlowShowPost = (
    data: ReservoirFlowQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirFlowShowPostData, any>({
      path: `/api/reservoir-flow/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-project
   * @name ApiReservoirProjectAddPost
   * @summary 新增数据
   * @request POST:/api/reservoir-project/add
   * @secure
   */
  apiReservoirProjectAddPost = (
    data: ReservoirProjectFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirProjectAddPostData, any>({
      path: `/api/reservoir-project/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-project
   * @name ApiReservoirProjectEditPost
   * @summary 编辑数据
   * @request POST:/api/reservoir-project/edit
   * @secure
   */
  apiReservoirProjectEditPost = (
    data: ReservoirProjectFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirProjectEditPostData, any>({
      path: `/api/reservoir-project/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-project
   * @name ApiReservoirProjectGetProjectTsFilePost
   * @summary 查询逃生相关图片和文件
   * @request POST:/api/reservoir-project/get-project-ts-file
   * @secure
   */
  apiReservoirProjectGetProjectTsFilePost = (
    data: PtfQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirProjectGetProjectTsFilePostData, any>({
      path: `/api/reservoir-project/get-project-ts-file`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-project
   * @name ApiReservoirProjectGetPtfPagedListPost
   * @summary 分页查询水库逃生相关图片和文件
   * @request POST:/api/reservoir-project/get-ptf-paged-list
   * @secure
   */
  apiReservoirProjectGetPtfPagedListPost = (
    data: PtfPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirProjectGetPtfPagedListPostData, any>({
      path: `/api/reservoir-project/get-ptf-paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-project
   * @name ApiReservoirProjectListPost
   * @summary 查询全部对象
   * @request POST:/api/reservoir-project/list
   * @secure
   */
  apiReservoirProjectListPost = (
    data: ReservoirProjectQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirProjectListPostData, any>({
      path: `/api/reservoir-project/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-project
   * @name ApiReservoirProjectPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/reservoir-project/paged-list
   * @secure
   */
  apiReservoirProjectPagedListPost = (
    data: ReservoirProjectPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirProjectPagedListPostData, any>({
      path: `/api/reservoir-project/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-project
   * @name ApiReservoirProjectRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/reservoir-project/remove-mul
   * @secure
   */
  apiReservoirProjectRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirProjectRemoveMulPostData, any>({
      path: `/api/reservoir-project/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-project
   * @name ApiReservoirProjectRemovePost
   * @summary 删除1条数据
   * @request POST:/api/reservoir-project/remove
   * @secure
   */
  apiReservoirProjectRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirProjectRemovePostData, any>({
      path: `/api/reservoir-project/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-project
   * @name ApiReservoirProjectSaveProjectTsFilePost
   * @summary 保存逃生相关图片和文件
   * @request POST:/api/reservoir-project/save-project-ts-file
   * @secure
   */
  apiReservoirProjectSaveProjectTsFilePost = (
    data: ProjectTsFileSaveFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirProjectSaveProjectTsFilePostData, any>({
      path: `/api/reservoir-project/save-project-ts-file`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-project
   * @name ApiReservoirProjectShowPost
   * @summary 查询1个对象
   * @request POST:/api/reservoir-project/show
   * @secure
   */
  apiReservoirProjectShowPost = (
    data: ReservoirProjectQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirProjectShowPostData, any>({
      path: `/api/reservoir-project/show`,
      method: "POST",
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
   * @tags reservoir-vr
   * @name ApiReservoirVrAddPost
   * @summary 新增数据
   * @request POST:/api/reservoir-vr/add
   * @secure
   */
  apiReservoirVrAddPost = (
    data: ApiReservoirVrAddPostPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirVrAddPostData, any>({
      path: `/api/reservoir-vr/add`,
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
   * @tags reservoir-vr
   * @name ApiReservoirVrEditPost
   * @summary 编辑数据
   * @request POST:/api/reservoir-vr/edit
   * @secure
   */
  apiReservoirVrEditPost = (
    data: ApiReservoirVrEditPostPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirVrEditPostData, any>({
      path: `/api/reservoir-vr/edit`,
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
   * @tags reservoir-vr
   * @name ApiReservoirVrListPost
   * @summary 查询全部对象
   * @request POST:/api/reservoir-vr/list
   * @secure
   */
  apiReservoirVrListPost = (data: ReservoirVrQO, params: RequestParams = {}) =>
    this.http.request<ApiReservoirVrListPostData, any>({
      path: `/api/reservoir-vr/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-vr
   * @name ApiReservoirVrPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/reservoir-vr/paged-list
   * @secure
   */
  apiReservoirVrPagedListPost = (
    data: ReservoirVrPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirVrPagedListPostData, any>({
      path: `/api/reservoir-vr/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-vr
   * @name ApiReservoirVrRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/reservoir-vr/remove_mul
   * @secure
   */
  apiReservoirVrRemoveMulPost = (
    data: ReservoirVrRemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReservoirVrRemoveMulPostData, any>({
      path: `/api/reservoir-vr/remove_mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-vr
   * @name ApiReservoirVrRemovePost
   * @summary 删除数据
   * @request POST:/api/reservoir-vr/remove
   * @secure
   */
  apiReservoirVrRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiReservoirVrRemovePostData, any>({
      path: `/api/reservoir-vr/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags reservoir-vr
   * @name ApiReservoirVrShowPost
   * @summary 查询1个对象
   * @request POST:/api/reservoir-vr/show
   * @secure
   */
  apiReservoirVrShowPost = (data: ReservoirVrQO, params: RequestParams = {}) =>
    this.http.request<ApiReservoirVrShowPostData, any>({
      path: `/api/reservoir-vr/show`,
      method: "POST",
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
   * @tags task-source
   * @name ApiTaskSourceAddPost
   * @summary 新增数据
   * @request POST:/api/task-source/add
   * @secure
   */
  apiTaskSourceAddPost = (data: TaskSourceFO, params: RequestParams = {}) =>
    this.http.request<ApiTaskSourceAddPostData, any>({
      path: `/api/task-source/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags task-source
   * @name ApiTaskSourceEditPost
   * @summary 编辑数据
   * @request POST:/api/task-source/edit
   * @secure
   */
  apiTaskSourceEditPost = (data: TaskSourceFO, params: RequestParams = {}) =>
    this.http.request<ApiTaskSourceEditPostData, any>({
      path: `/api/task-source/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags task-source
   * @name ApiTaskSourceListPost
   * @summary 查询全部对象
   * @request POST:/api/task-source/list
   * @secure
   */
  apiTaskSourceListPost = (data: TaskSourceQO, params: RequestParams = {}) =>
    this.http.request<ApiTaskSourceListPostData, any>({
      path: `/api/task-source/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags task-source
   * @name ApiTaskSourcePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/task-source/paged-list
   * @secure
   */
  apiTaskSourcePagedListPost = (
    data: TaskSourcePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiTaskSourcePagedListPostData, any>({
      path: `/api/task-source/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags task-source
   * @name ApiTaskSourceRemovePost
   * @summary 删除数据
   * @request POST:/api/task-source/remove
   * @secure
   */
  apiTaskSourceRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiTaskSourceRemovePostData, any>({
      path: `/api/task-source/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags task-source
   * @name ApiTaskSourceShowPost
   * @summary 查询1个对象
   * @request POST:/api/task-source/show
   * @secure
   */
  apiTaskSourceShowPost = (data: TaskSourceQO, params: RequestParams = {}) =>
    this.http.request<ApiTaskSourceShowPostData, any>({
      path: `/api/task-source/show`,
      method: "POST",
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
   * @name ApiTechnicsGetCoverNumByVillagePost
   * @summary 乡镇分组查询设备覆盖率
   * @request POST:/api/technics/get-cover-num-by-village
   * @secure
   */
  apiTechnicsGetCoverNumByVillagePost = (
    data: TechnicsQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiTechnicsGetCoverNumByVillagePostData, any>({
      path: `/api/technics/get-cover-num-by-village`,
      method: "POST",
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
   * @name ApiTechnicsGetCoverNumPost
   * @summary 查询设备覆盖率
   * @request POST:/api/technics/get-cover-num
   * @secure
   */
  apiTechnicsGetCoverNumPost = (data: TechnicsQO, params: RequestParams = {}) =>
    this.http.request<ApiTechnicsGetCoverNumPostData, any>({
      path: `/api/technics/get-cover-num`,
      method: "POST",
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
   * @name ApiTechnicsQueryByConventionalWaterLevelReportPost
   * @summary 常规水位报表
   * @request POST:/api/technics/query-by-conventional-water-level-report
   * @secure
   */
  apiTechnicsQueryByConventionalWaterLevelReportPost = (
    data: TechnicsPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ApiTechnicsQueryByConventionalWaterLevelReportPostData,
      any
    >({
      path: `/api/technics/query-by-conventional-water-level-report`,
      method: "POST",
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
   * @name ApiTechnicsQueryByDailyWaterLevelReportPost
   * @summary 水位日报表
   * @request POST:/api/technics/query-by-daily-water-level-report
   * @secure
   */
  apiTechnicsQueryByDailyWaterLevelReportPost = (
    data: TechnicsPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiTechnicsQueryByDailyWaterLevelReportPostData, any>({
      path: `/api/technics/query-by-daily-water-level-report`,
      method: "POST",
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
   * @name ApiTechnicsQueryByReservoirInfoPost
   * @summary 水库报表接口（实时溢洪道泄流量报表）
   * @request POST:/api/technics/query-by-reservoir-info
   * @secure
   */
  apiTechnicsQueryByReservoirInfoPost = (
    data: TechnicsQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiTechnicsQueryByReservoirInfoPostData, any>({
      path: `/api/technics/query-by-reservoir-info`,
      method: "POST",
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
   * @name ApiTechnicsQueryByReservoirRpPost
   * @summary 查询水库责任人落实情况
   * @request POST:/api/technics/query-by-reservoir-rp
   * @secure
   */
  apiTechnicsQueryByReservoirRpPost = (
    data: TechnicsQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiTechnicsQueryByReservoirRpPostData, any>({
      path: `/api/technics/query-by-reservoir-rp`,
      method: "POST",
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
   * @name ApiTechnicsQueryByReservoirStatusPost
   * @summary 查询水库概况
   * @request POST:/api/technics/query-by-reservoir-status
   * @secure
   */
  apiTechnicsQueryByReservoirStatusPost = (
    data: TechnicsQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiTechnicsQueryByReservoirStatusPostData, any>({
      path: `/api/technics/query-by-reservoir-status`,
      method: "POST",
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
   * @name ApiTechnicsRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/technics/remove-mul
   * @secure
   */
  apiTechnicsRemoveMulPost = (data: RemoveMulQO, params: RequestParams = {}) =>
    this.http.request<ApiTechnicsRemoveMulPostData, any>({
      path: `/api/technics/remove-mul`,
      method: "POST",
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
   * @summary 删除1条数据
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
