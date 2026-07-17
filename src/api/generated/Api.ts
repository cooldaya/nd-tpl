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
  AlarmRecordFO,
  AlarmRecordPQO,
  AlarmRecordQO,
  AmJobFO,
  AmJobPQO,
  AmJobQO,
  AmPostFO,
  AmPostPQO,
  AmPostQO,
  ApiAlarmRecordAddPostData,
  ApiAlarmRecordEditPostData,
  ApiAlarmRecordListPostData,
  ApiAlarmRecordPagedListPostData,
  ApiAlarmRecordRemoveMulPostData,
  ApiAlarmRecordRemovePostData,
  ApiAlarmRecordShowPostData,
  ApiAmJobAddPostData,
  ApiAmJobEditPostData,
  ApiAmJobListPostData,
  ApiAmJobPagedListPostData,
  ApiAmJobRemoveMulPostData,
  ApiAmJobRemovePostData,
  ApiAmJobShowPostData,
  ApiAmPostAddPostData,
  ApiAmPostCountByNamePostData,
  ApiAmPostEditPostData,
  ApiAmPostListPostData,
  ApiAmPostPagedListPostData,
  ApiAmPostRemoveMulPostData,
  ApiAmPostRemovePostData,
  ApiAmPostShowPostData,
  ApiAuthCheckloginPostData,
  ApiAuthLoginByUserNamePostData,
  ApiAuthLoginPostData,
  ApiAuthLogoutPostData,
  ApiAuthPkinfoPostData,
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
  ApiEquipmentParamMdListPostData,
  ApiEquipmentParamMdPagedListPostData,
  ApiEquipmentParamMdRemoveMulPostData,
  ApiEquipmentParamMdRemovePostData,
  ApiEquipmentParamMdShowPostData,
  ApiEquipmentParamPagedListPostData,
  ApiEquipmentParamRemoveMulPostData,
  ApiEquipmentParamRemovePostData,
  ApiEquipmentParamShowPostData,
  ApiEquipmentRemoveMulPostData,
  ApiEquipmentRemovePostData,
  ApiEquipmentShowPostData,
  ApiEsAlarmRecordAddPostData,
  ApiEsAlarmRecordEditPostData,
  ApiEsAlarmRecordGetCountByMonthPostData,
  ApiEsAlarmRecordListPostData,
  ApiEsAlarmRecordPagedListPostData,
  ApiEsAlarmRecordRemoveMulPostData,
  ApiEsAlarmRecordRemovePostData,
  ApiEsAlarmRecordShowPostData,
  ApiEsFleetAddPostData,
  ApiEsFleetEditPostData,
  ApiEsFleetListPostData,
  ApiEsFleetPagedListPostData,
  ApiEsFleetRemoveMulPostData,
  ApiEsFleetRemovePostData,
  ApiEsFleetShowPostData,
  ApiEsGarbageCategoryListPostData,
  ApiEsGarbageCategoryPagedListPostData,
  ApiEsGarbageCategoryShowPostData,
  ApiEsGarbageCategoryTreedataPostData,
  ApiEsGarbageTypeListPostData,
  ApiEsGarbageTypePagedListPostData,
  ApiEsGarbageTypeShowPostData,
  ApiEsGpsAlarmRecordAddPostData,
  ApiEsGpsAlarmRecordEditPostData,
  ApiEsGpsAlarmRecordFileAddPostData,
  ApiEsGpsAlarmRecordFileEditPostData,
  ApiEsGpsAlarmRecordFileListPostData,
  ApiEsGpsAlarmRecordFilePagedListPostData,
  ApiEsGpsAlarmRecordFileRemoveMulPostData,
  ApiEsGpsAlarmRecordFileRemovePostData,
  ApiEsGpsAlarmRecordFileShowPostData,
  ApiEsGpsAlarmRecordGetGpsAlarmRecordPostData,
  ApiEsGpsAlarmRecordGroupByDayPostData,
  ApiEsGpsAlarmRecordGroupByLicencePostData,
  ApiEsGpsAlarmRecordGroupByMonthPostData,
  ApiEsGpsAlarmRecordGroupByYearPostData,
  ApiEsGpsAlarmRecordListPostData,
  ApiEsGpsAlarmRecordPagedListPostData,
  ApiEsGpsAlarmRecordRemoveMulPostData,
  ApiEsGpsAlarmRecordRemovePostData,
  ApiEsGpsAlarmRecordShowPostData,
  ApiEsSanitationFacilityAddPostData,
  ApiEsSanitationFacilityEditPostData,
  ApiEsSanitationFacilityListPostData,
  ApiEsSanitationFacilityPagedListPostData,
  ApiEsSanitationFacilityRemoveMulPostData,
  ApiEsSanitationFacilityRemovePostData,
  ApiEsSanitationFacilityShowPostData,
  ApiEsSanitationFacilityTypeAddPostData,
  ApiEsSanitationFacilityTypeEditPostData,
  ApiEsSanitationFacilityTypeListPostData,
  ApiEsSanitationFacilityTypePagedListPostData,
  ApiEsSanitationFacilityTypeRemoveMulPostData,
  ApiEsSanitationFacilityTypeRemovePostData,
  ApiEsSanitationFacilityTypeShowPostData,
  ApiEsShipAddPostData,
  ApiEsShipEditPostData,
  ApiEsShipListPostData,
  ApiEsShipPagedListPostData,
  ApiEsShipRealtimeAddPostData,
  ApiEsShipRealtimeEditPostData,
  ApiEsShipRealtimeListPostData,
  ApiEsShipRealtimePagedListPostData,
  ApiEsShipRealtimeRemoveMulPostData,
  ApiEsShipRealtimeRemovePostData,
  ApiEsShipRealtimeShowPostData,
  ApiEsShipRemovePostData,
  ApiEsShipShowPostData,
  ApiEsVehicleAddPostData,
  ApiEsVehicleDpRecordAddPostData,
  ApiEsVehicleDpRecordEditPostData,
  ApiEsVehicleDpRecordListPostData,
  ApiEsVehicleDpRecordPagedListPostData,
  ApiEsVehicleDpRecordShowPostData,
  ApiEsVehicleEditPostData,
  ApiEsVehicleGetVehicleCountByTypeNamePostData,
  ApiEsVehicleGetVehicleCountByTypePostData,
  ApiEsVehicleLcRecordAddPostData,
  ApiEsVehicleLcRecordEditPostData,
  ApiEsVehicleLcRecordGroupByDayPostData,
  ApiEsVehicleLcRecordGroupByMonthPostData,
  ApiEsVehicleLcRecordGroupByYearPostData,
  ApiEsVehicleLcRecordListPostData,
  ApiEsVehicleLcRecordPagedListPostData,
  ApiEsVehicleLcRecordRemoveMulPostData,
  ApiEsVehicleLcRecordRemovePostData,
  ApiEsVehicleLcRecordShowPostData,
  ApiEsVehicleListPostData,
  ApiEsVehiclePagedListPostData,
  ApiEsVehicleRealtimeAddPostData,
  ApiEsVehicleRealtimeEditPostData,
  ApiEsVehicleRealtimeListPostData,
  ApiEsVehicleRealtimePagedListPostData,
  ApiEsVehicleRealtimeRemoveMulPostData,
  ApiEsVehicleRealtimeRemovePostData,
  ApiEsVehicleRealtimeShowPostData,
  ApiEsVehicleRealtimeVehicleStateStPostData,
  ApiEsVehicleRemovePostData,
  ApiEsVehicleShowPostData,
  ApiEsVehicleTrackPostData,
  ApiEsWeightRecordAddPostData,
  ApiEsWeightRecordEditPostData,
  ApiEsWeightRecordGroupByDayPostData,
  ApiEsWeightRecordGroupByLicencePostData,
  ApiEsWeightRecordGroupByMonthPostData,
  ApiEsWeightRecordGroupByYearPostData,
  ApiEsWeightRecordListPostData,
  ApiEsWeightRecordMainStPostData,
  ApiEsWeightRecordPagedListPostData,
  ApiEsWeightRecordQueryStatisticsPostData,
  ApiEsWeightRecordRemoveMulPostData,
  ApiEsWeightRecordRemovePostData,
  ApiEsWeightRecordShowPostData,
  ApiEsWorkPlanPwAddPostData,
  ApiEsWorkPlanPwEditPostData,
  ApiEsWorkPlanPwGroupByDayPostData,
  ApiEsWorkPlanPwGroupByMonthPostData,
  ApiEsWorkPlanPwGroupByYearPostData,
  ApiEsWorkPlanPwListPostData,
  ApiEsWorkPlanPwPagedListPostData,
  ApiEsWorkPlanPwRemovePostData,
  ApiEsWorkPlanPwSaveListPostData,
  ApiEsWorkPlanPwShowPostData,
  ApiEsWorkPlanSwAddPostData,
  ApiEsWorkPlanSwEditPostData,
  ApiEsWorkPlanSwGroupByDayPostData,
  ApiEsWorkPlanSwGroupByMonthPostData,
  ApiEsWorkPlanSwGroupByYearPostData,
  ApiEsWorkPlanSwListPostData,
  ApiEsWorkPlanSwPagedListPostData,
  ApiEsWorkPlanSwRemovePostData,
  ApiEsWorkPlanSwSaveListPostData,
  ApiEsWorkPlanSwShowPostData,
  ApiEsWorkPlanVwAddPostData,
  ApiEsWorkPlanVwEditPostData,
  ApiEsWorkPlanVwGroupByDayPostData,
  ApiEsWorkPlanVwGroupByMonthPostData,
  ApiEsWorkPlanVwGroupByYearPostData,
  ApiEsWorkPlanVwListPostData,
  ApiEsWorkPlanVwPagedListPostData,
  ApiEsWorkPlanVwRemovePostData,
  ApiEsWorkPlanVwSaveListPostData,
  ApiEsWorkPlanVwShowPostData,
  ApiEsWorkRouteAddPostData,
  ApiEsWorkRouteEditPostData,
  ApiEsWorkRouteListPostData,
  ApiEsWorkRoutePagedListPostData,
  ApiEsWorkRoutePointListPostData,
  ApiEsWorkRoutePointPagedListPostData,
  ApiEsWorkRoutePointShowPostData,
  ApiEsWorkRouteRemovePostData,
  ApiEsWorkRouteShowPostData,
  ApiEsWorkRuleAddPostData,
  ApiEsWorkRuleEditPostData,
  ApiEsWorkRuleListPostData,
  ApiEsWorkRulePagedListPostData,
  ApiEsWorkRuleRemovePostData,
  ApiEsWorkRuleShowPostData,
  ApiEsWorkShiftPwAddPostData,
  ApiEsWorkShiftPwEditPostData,
  ApiEsWorkShiftPwListPostData,
  ApiEsWorkShiftPwPagedListPostData,
  ApiEsWorkShiftPwRemoveMulPostData,
  ApiEsWorkShiftPwRemovePostData,
  ApiEsWorkShiftPwShowPostData,
  ApiEsWorkShiftSwAddPostData,
  ApiEsWorkShiftSwEditPostData,
  ApiEsWorkShiftSwListPostData,
  ApiEsWorkShiftSwPagedListPostData,
  ApiEsWorkShiftSwRemoveMulPostData,
  ApiEsWorkShiftSwRemovePostData,
  ApiEsWorkShiftSwShowPostData,
  ApiEsWorkShiftVwAddPostData,
  ApiEsWorkShiftVwEditPostData,
  ApiEsWorkShiftVwListPostData,
  ApiEsWorkShiftVwPagedListPostData,
  ApiEsWorkShiftVwRemoveMulPostData,
  ApiEsWorkShiftVwRemovePostData,
  ApiEsWorkShiftVwShowPostData,
  ApiEsWorkWatercourseAddPostData,
  ApiEsWorkWatercourseEditPostData,
  ApiEsWorkWatercourseListPostData,
  ApiEsWorkWatercoursePagedListPostData,
  ApiEsWorkWatercoursePointAddPostData,
  ApiEsWorkWatercoursePointEditPostData,
  ApiEsWorkWatercoursePointListPostData,
  ApiEsWorkWatercoursePointPagedListPostData,
  ApiEsWorkWatercoursePointRemoveMulPostData,
  ApiEsWorkWatercoursePointRemovePostData,
  ApiEsWorkWatercoursePointShowPostData,
  ApiEsWorkWatercourseRemovePostData,
  ApiEsWorkWatercourseShowPostData,
  ApiEsWtGeneralAddPostData,
  ApiEsWtGeneralEditPostData,
  ApiEsWtGeneralListPostData,
  ApiEsWtGeneralPagedListPostData,
  ApiEsWtGeneralRemoveMulPostData,
  ApiEsWtGeneralRemovePostData,
  ApiEsWtGeneralShowPostData,
  ApiEsWtGeneralTreedataPostData,
  ApiEsWtShiftListPostData,
  ApiEsWtShiftPagedListPostData,
  ApiEsWtShiftShowPostData,
  ApiEsWtSpecificAddPostData,
  ApiEsWtSpecificEditPostData,
  ApiEsWtSpecificListPostData,
  ApiEsWtSpecificPagedListPostData,
  ApiEsWtSpecificRemoveMulPostData,
  ApiEsWtSpecificRemovePostData,
  ApiEsWtSpecificShowPostData,
  ApiGpsGpsTokenPostData,
  ApiHikCruiseRoutesControllingPostData,
  ApiHikPlaybackHlsUrlPostData,
  ApiHikPlaybackUrlPostData,
  ApiHikPreviewUrlPostData,
  ApiHikPtzsControllingPostData,
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
  ApiMmInventoryListPostData,
  ApiMmInventoryPagedListPostData,
  ApiMmInventoryShowPostData,
  ApiMmMaterialAddPostData,
  ApiMmMaterialCategoryAddPostData,
  ApiMmMaterialCategoryEditPostData,
  ApiMmMaterialCategoryListPostData,
  ApiMmMaterialCategoryPagedListPostData,
  ApiMmMaterialCategoryRemovePostData,
  ApiMmMaterialCategoryShowPostData,
  ApiMmMaterialEditPostData,
  ApiMmMaterialListPostData,
  ApiMmMaterialPagedListPostData,
  ApiMmMaterialRemovePostData,
  ApiMmMaterialShowPostData,
  ApiMmRequisitionApproveRequisitionPostData,
  ApiMmRequisitionGenerateStockOutPostData,
  ApiMmRequisitionListPostData,
  ApiMmRequisitionPagedListPostData,
  ApiMmRequisitionShowPostData,
  ApiMmRequisitionSubmitRequisitionPostData,
  ApiMmStockInOutApprovePostData,
  ApiMmStockInOutListPostData,
  ApiMmStockInOutPagedListPostData,
  ApiMmStockInOutPendingApproveListPostData,
  ApiMmStockInOutShowPostData,
  ApiMmStockInOutStockInPostData,
  ApiMmStockInOutStockOutPostData,
  ApiOrganizationAddPostData,
  ApiOrganizationEditPostData,
  ApiOrganizationListPostData,
  ApiOrganizationPagedListPostData,
  ApiOrganizationRemovePostData,
  ApiOrganizationShowPostData,
  ApiOrganizationTreedataPostData,
  ApiReportStwaGroupByDayPostData,
  ApiReportStwaGroupByMonthPostData,
  ApiReportStwaGroupByYearPostData,
  ApiReportStwpGroupByGeneralPostData,
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
  ApiSysNoticeAddPostData,
  ApiSysNoticeEditPostData,
  ApiSysNoticeListPostData,
  ApiSysNoticePagedListPostData,
  ApiSysNoticeRemovePostData,
  ApiSysNoticeShowPostData,
  ApiTechnicsAddPostData,
  ApiTechnicsEditPostData,
  ApiTechnicsListPostData,
  ApiTechnicsPagedListPostData,
  ApiTechnicsRemoveMulPostData,
  ApiTechnicsRemovePostData,
  ApiTechnicsShowPostData,
  ApiUserAddPostData,
  ApiUserAssignRolesPostData,
  ApiUserAssignUsergroupsPostData,
  ApiUserCountByJobPostData,
  ApiUserEditPostData,
  ApiUserEditPwdPostData,
  ApiUserEditSelfPostData,
  ApiUserGetRolesPostData,
  ApiUserGetUserCountPostData,
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
  ApiUserPagedListWpPostData,
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
  ApproveRequisitionFO,
  ApproveSioFO,
  CruiseRoutesControllingQO,
  DataDictionaryFO,
  DataDictionaryPQO,
  DataDictionaryQO,
  DdTypedataQO,
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
  EquipmentQO,
  EsAlarmRecordFO,
  EsAlarmRecordPQO,
  EsAlarmRecordQO,
  EsFleetFO,
  EsFleetPQO,
  EsFleetQO,
  EsGarbageCategoryPQO,
  EsGarbageCategoryQO,
  EsGarbageTypePQO,
  EsGarbageTypeQO,
  EsGpsAlarmRecordFO,
  EsGpsAlarmRecordFileFO,
  EsGpsAlarmRecordFilePQO,
  EsGpsAlarmRecordFileQO,
  EsGpsAlarmRecordPQO,
  EsGpsAlarmRecordQO,
  EsSanitationFacilityFO,
  EsSanitationFacilityPQO,
  EsSanitationFacilityQO,
  EsSanitationFacilityTypeFO,
  EsSanitationFacilityTypePQO,
  EsSanitationFacilityTypeQO,
  EsShipFO,
  EsShipPQO,
  EsShipQO,
  EsShipRealtimeFO,
  EsShipRealtimePQO,
  EsShipRealtimeQO,
  EsVehicleDpRecordFO,
  EsVehicleDpRecordPQO,
  EsVehicleDpRecordQO,
  EsVehicleFO,
  EsVehicleLcRecordFO,
  EsVehicleLcRecordPQO,
  EsVehicleLcRecordQO,
  EsVehicleLcRecordStQO,
  EsVehiclePQO,
  EsVehicleQO,
  EsVehicleRealtimeFO,
  EsVehicleRealtimePQO,
  EsVehicleRealtimeQO,
  EsWeightRecordFO,
  EsWeightRecordPQO,
  EsWeightRecordQO,
  EsWeightRecordStQO,
  EsWorkPlanPwFO,
  EsWorkPlanPwPQO,
  EsWorkPlanPwQO,
  EsWorkPlanPwStQO,
  EsWorkPlanStQO,
  EsWorkPlanSwFO,
  EsWorkPlanSwPQO,
  EsWorkPlanSwQO,
  EsWorkPlanSwStQO,
  EsWorkPlanVwFO,
  EsWorkPlanVwPQO,
  EsWorkPlanVwQO,
  EsWorkPlanVwStQO,
  EsWorkRouteFO,
  EsWorkRoutePQO,
  EsWorkRoutePointPQO,
  EsWorkRoutePointQO,
  EsWorkRouteQO,
  EsWorkRuleFO,
  EsWorkRulePQO,
  EsWorkRuleQO,
  EsWorkShiftPwFO,
  EsWorkShiftPwPQO,
  EsWorkShiftPwQO,
  EsWorkShiftSwFO,
  EsWorkShiftSwPQO,
  EsWorkShiftSwQO,
  EsWorkShiftVwFO,
  EsWorkShiftVwPQO,
  EsWorkShiftVwQO,
  EsWorkWatercourseFO,
  EsWorkWatercoursePQO,
  EsWorkWatercoursePointFO,
  EsWorkWatercoursePointPQO,
  EsWorkWatercoursePointQO,
  EsWorkWatercourseQO,
  EsWtGeneralFO,
  EsWtGeneralPQO,
  EsWtGeneralQO,
  EsWtShiftPQO,
  EsWtShiftQO,
  EsWtSpecificFO,
  EsWtSpecificPQO,
  EsWtSpecificQO,
  GpsAlarmStQO,
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
  MmInventoryPQO,
  MmInventoryQO,
  MmMaterialCategoryFO,
  MmMaterialCategoryPQO,
  MmMaterialCategoryQO,
  MmMaterialFO,
  MmMaterialPQO,
  MmMaterialQO,
  MmRequisitionFO,
  MmRequisitionPQO,
  MmRequisitionQO,
  MmStockInOutFO,
  MmStockInOutPQO,
  MmStockInOutQO,
  OnlyIdQO,
  OnlyMsgIdList,
  OrganizationForm,
  OrganizationPQO,
  OrganizationQO,
  PlaybackHlsUrlQO,
  PlaybackUrlQO,
  PreviewUrlQO,
  PtzsControllingQO,
  RemoveMulQO,
  ReqIdsQO,
  ResourceForm,
  ResourcePQO,
  ResourceQO,
  RoleAssignResourcesQO,
  RoleFO,
  RolePQO,
  RoleQO,
  StwpQO,
  SysNoticeFO,
  SysNoticePQO,
  SysNoticeQO,
  TechnicsFO,
  TechnicsPQO,
  TechnicsQO,
  TrackQO,
  UserAssignRolesQO,
  UserAssignUsergroupsQO,
  UserForm,
  UserFormAdd,
  UserMessagePQO,
  UserMessageQO,
  UserNameQO,
  UserPQO,
  UserQO,
  UserResetPwdQO,
  UserSelfForm,
  UsergroupAssignRolesQO,
  UsergroupFO,
  UsergroupPQO,
  UsergroupQO,
  WpPwSaveFO,
  WpSwSaveFO,
  WpVwSaveFO,
  WrMainStQO,
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
   * @tags alarm-record
   * @name ApiAlarmRecordAddPost
   * @summary 新增数据
   * @request POST:/api/alarm-record/add
   * @secure
   */
  apiAlarmRecordAddPost = (data: AlarmRecordFO, params: RequestParams = {}) =>
    this.http.request<ApiAlarmRecordAddPostData, any>({
      path: `/api/alarm-record/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags alarm-record
   * @name ApiAlarmRecordEditPost
   * @summary 编辑数据
   * @request POST:/api/alarm-record/edit
   * @secure
   */
  apiAlarmRecordEditPost = (data: AlarmRecordFO, params: RequestParams = {}) =>
    this.http.request<ApiAlarmRecordEditPostData, any>({
      path: `/api/alarm-record/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags alarm-record
   * @name ApiAlarmRecordListPost
   * @summary 查询全部对象
   * @request POST:/api/alarm-record/list
   * @secure
   */
  apiAlarmRecordListPost = (data: AlarmRecordQO, params: RequestParams = {}) =>
    this.http.request<ApiAlarmRecordListPostData, any>({
      path: `/api/alarm-record/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags alarm-record
   * @name ApiAlarmRecordPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/alarm-record/paged-list
   * @secure
   */
  apiAlarmRecordPagedListPost = (
    data: AlarmRecordPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiAlarmRecordPagedListPostData, any>({
      path: `/api/alarm-record/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags alarm-record
   * @name ApiAlarmRecordRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/alarm-record/remove-mul
   * @secure
   */
  apiAlarmRecordRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiAlarmRecordRemoveMulPostData, any>({
      path: `/api/alarm-record/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags alarm-record
   * @name ApiAlarmRecordRemovePost
   * @summary 删除1条数据
   * @request POST:/api/alarm-record/remove
   * @secure
   */
  apiAlarmRecordRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiAlarmRecordRemovePostData, any>({
      path: `/api/alarm-record/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags alarm-record
   * @name ApiAlarmRecordShowPost
   * @summary 查询1个对象
   * @request POST:/api/alarm-record/show
   * @secure
   */
  apiAlarmRecordShowPost = (data: AlarmRecordQO, params: RequestParams = {}) =>
    this.http.request<ApiAlarmRecordShowPostData, any>({
      path: `/api/alarm-record/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags am-job
   * @name ApiAmJobAddPost
   * @summary 新增数据
   * @request POST:/api/am-job/add
   * @secure
   */
  apiAmJobAddPost = (data: AmJobFO, params: RequestParams = {}) =>
    this.http.request<ApiAmJobAddPostData, any>({
      path: `/api/am-job/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags am-job
   * @name ApiAmJobEditPost
   * @summary 编辑数据
   * @request POST:/api/am-job/edit
   * @secure
   */
  apiAmJobEditPost = (data: AmJobFO, params: RequestParams = {}) =>
    this.http.request<ApiAmJobEditPostData, any>({
      path: `/api/am-job/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags am-job
   * @name ApiAmJobListPost
   * @summary 查询全部对象
   * @request POST:/api/am-job/list
   * @secure
   */
  apiAmJobListPost = (data: AmJobQO, params: RequestParams = {}) =>
    this.http.request<ApiAmJobListPostData, any>({
      path: `/api/am-job/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags am-job
   * @name ApiAmJobPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/am-job/paged-list
   * @secure
   */
  apiAmJobPagedListPost = (data: AmJobPQO, params: RequestParams = {}) =>
    this.http.request<ApiAmJobPagedListPostData, any>({
      path: `/api/am-job/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags am-job
   * @name ApiAmJobRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/am-job/remove-mul
   * @secure
   */
  apiAmJobRemoveMulPost = (data: RemoveMulQO, params: RequestParams = {}) =>
    this.http.request<ApiAmJobRemoveMulPostData, any>({
      path: `/api/am-job/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags am-job
   * @name ApiAmJobRemovePost
   * @summary 删除1条数据
   * @request POST:/api/am-job/remove
   * @secure
   */
  apiAmJobRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiAmJobRemovePostData, any>({
      path: `/api/am-job/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags am-job
   * @name ApiAmJobShowPost
   * @summary 查询1个对象
   * @request POST:/api/am-job/show
   * @secure
   */
  apiAmJobShowPost = (data: AmJobQO, params: RequestParams = {}) =>
    this.http.request<ApiAmJobShowPostData, any>({
      path: `/api/am-job/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags am-post
   * @name ApiAmPostAddPost
   * @summary 新增数据
   * @request POST:/api/am-post/add
   * @secure
   */
  apiAmPostAddPost = (data: AmPostFO, params: RequestParams = {}) =>
    this.http.request<ApiAmPostAddPostData, any>({
      path: `/api/am-post/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags am-post
   * @name ApiAmPostCountByNamePost
   * @summary 查询数量统计
   * @request POST:/api/am-post/count-by-name
   * @secure
   */
  apiAmPostCountByNamePost = (params: RequestParams = {}) =>
    this.http.request<ApiAmPostCountByNamePostData, any>({
      path: `/api/am-post/count-by-name`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags am-post
   * @name ApiAmPostEditPost
   * @summary 编辑数据
   * @request POST:/api/am-post/edit
   * @secure
   */
  apiAmPostEditPost = (data: AmPostFO, params: RequestParams = {}) =>
    this.http.request<ApiAmPostEditPostData, any>({
      path: `/api/am-post/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags am-post
   * @name ApiAmPostListPost
   * @summary 查询全部对象
   * @request POST:/api/am-post/list
   * @secure
   */
  apiAmPostListPost = (data: AmPostQO, params: RequestParams = {}) =>
    this.http.request<ApiAmPostListPostData, any>({
      path: `/api/am-post/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags am-post
   * @name ApiAmPostPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/am-post/paged-list
   * @secure
   */
  apiAmPostPagedListPost = (data: AmPostPQO, params: RequestParams = {}) =>
    this.http.request<ApiAmPostPagedListPostData, any>({
      path: `/api/am-post/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags am-post
   * @name ApiAmPostRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/am-post/remove-mul
   * @secure
   */
  apiAmPostRemoveMulPost = (data: RemoveMulQO, params: RequestParams = {}) =>
    this.http.request<ApiAmPostRemoveMulPostData, any>({
      path: `/api/am-post/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags am-post
   * @name ApiAmPostRemovePost
   * @summary 删除1条数据
   * @request POST:/api/am-post/remove
   * @secure
   */
  apiAmPostRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiAmPostRemovePostData, any>({
      path: `/api/am-post/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags am-post
   * @name ApiAmPostShowPost
   * @summary 查询1个对象
   * @request POST:/api/am-post/show
   * @secure
   */
  apiAmPostShowPost = (data: AmPostQO, params: RequestParams = {}) =>
    this.http.request<ApiAmPostShowPostData, any>({
      path: `/api/am-post/show`,
      method: "POST",
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
   * @name ApiAuthLoginByUserNamePost
   * @summary 用户名登录
   * @request POST:/api/auth/login-by-user-name
   * @secure
   */
  apiAuthLoginByUserNamePost = (data: UserNameQO, params: RequestParams = {}) =>
    this.http.request<ApiAuthLoginByUserNamePostData, any>({
      path: `/api/auth/login-by-user-name`,
      method: "POST",
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
   * @tags es-alarm-record
   * @name ApiEsAlarmRecordAddPost
   * @summary 新增数据
   * @request POST:/api/es-alarm-record/add
   * @secure
   */
  apiEsAlarmRecordAddPost = (
    data: EsAlarmRecordFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsAlarmRecordAddPostData, any>({
      path: `/api/es-alarm-record/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-alarm-record
   * @name ApiEsAlarmRecordEditPost
   * @summary 编辑数据
   * @request POST:/api/es-alarm-record/edit
   * @secure
   */
  apiEsAlarmRecordEditPost = (
    data: EsAlarmRecordFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsAlarmRecordEditPostData, any>({
      path: `/api/es-alarm-record/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-alarm-record
   * @name ApiEsAlarmRecordGetCountByMonthPost
   * @summary 报警记录统计
   * @request POST:/api/es-alarm-record/get-count-by-month
   * @secure
   */
  apiEsAlarmRecordGetCountByMonthPost = (params: RequestParams = {}) =>
    this.http.request<ApiEsAlarmRecordGetCountByMonthPostData, any>({
      path: `/api/es-alarm-record/get-count-by-month`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-alarm-record
   * @name ApiEsAlarmRecordListPost
   * @summary 查询全部对象
   * @request POST:/api/es-alarm-record/list
   * @secure
   */
  apiEsAlarmRecordListPost = (
    data: EsAlarmRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsAlarmRecordListPostData, any>({
      path: `/api/es-alarm-record/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-alarm-record
   * @name ApiEsAlarmRecordPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-alarm-record/paged-list
   * @secure
   */
  apiEsAlarmRecordPagedListPost = (
    data: EsAlarmRecordPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsAlarmRecordPagedListPostData, any>({
      path: `/api/es-alarm-record/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-alarm-record
   * @name ApiEsAlarmRecordRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/es-alarm-record/remove-mul
   * @secure
   */
  apiEsAlarmRecordRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsAlarmRecordRemoveMulPostData, any>({
      path: `/api/es-alarm-record/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-alarm-record
   * @name ApiEsAlarmRecordRemovePost
   * @summary 删除1条数据
   * @request POST:/api/es-alarm-record/remove
   * @secure
   */
  apiEsAlarmRecordRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiEsAlarmRecordRemovePostData, any>({
      path: `/api/es-alarm-record/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-alarm-record
   * @name ApiEsAlarmRecordShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-alarm-record/show
   * @secure
   */
  apiEsAlarmRecordShowPost = (
    data: EsAlarmRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsAlarmRecordShowPostData, any>({
      path: `/api/es-alarm-record/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-fleet
   * @name ApiEsFleetAddPost
   * @summary 新增数据
   * @request POST:/api/es-fleet/add
   * @secure
   */
  apiEsFleetAddPost = (data: EsFleetFO, params: RequestParams = {}) =>
    this.http.request<ApiEsFleetAddPostData, any>({
      path: `/api/es-fleet/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-fleet
   * @name ApiEsFleetEditPost
   * @summary 编辑数据
   * @request POST:/api/es-fleet/edit
   * @secure
   */
  apiEsFleetEditPost = (data: EsFleetFO, params: RequestParams = {}) =>
    this.http.request<ApiEsFleetEditPostData, any>({
      path: `/api/es-fleet/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-fleet
   * @name ApiEsFleetListPost
   * @summary 查询全部对象
   * @request POST:/api/es-fleet/list
   * @secure
   */
  apiEsFleetListPost = (data: EsFleetQO, params: RequestParams = {}) =>
    this.http.request<ApiEsFleetListPostData, any>({
      path: `/api/es-fleet/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-fleet
   * @name ApiEsFleetPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-fleet/paged-list
   * @secure
   */
  apiEsFleetPagedListPost = (data: EsFleetPQO, params: RequestParams = {}) =>
    this.http.request<ApiEsFleetPagedListPostData, any>({
      path: `/api/es-fleet/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-fleet
   * @name ApiEsFleetRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/es-fleet/remove-mul
   * @secure
   */
  apiEsFleetRemoveMulPost = (data: RemoveMulQO, params: RequestParams = {}) =>
    this.http.request<ApiEsFleetRemoveMulPostData, any>({
      path: `/api/es-fleet/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-fleet
   * @name ApiEsFleetRemovePost
   * @summary 删除1条数据
   * @request POST:/api/es-fleet/remove
   * @secure
   */
  apiEsFleetRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiEsFleetRemovePostData, any>({
      path: `/api/es-fleet/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-fleet
   * @name ApiEsFleetShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-fleet/show
   * @secure
   */
  apiEsFleetShowPost = (data: EsFleetQO, params: RequestParams = {}) =>
    this.http.request<ApiEsFleetShowPostData, any>({
      path: `/api/es-fleet/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-garbage-category
   * @name ApiEsGarbageCategoryListPost
   * @summary 查询全部对象
   * @request POST:/api/es-garbage-category/list
   * @secure
   */
  apiEsGarbageCategoryListPost = (
    data: EsGarbageCategoryQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGarbageCategoryListPostData, any>({
      path: `/api/es-garbage-category/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-garbage-category
   * @name ApiEsGarbageCategoryPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-garbage-category/paged-list
   * @secure
   */
  apiEsGarbageCategoryPagedListPost = (
    data: EsGarbageCategoryPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGarbageCategoryPagedListPostData, any>({
      path: `/api/es-garbage-category/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-garbage-category
   * @name ApiEsGarbageCategoryShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-garbage-category/show
   * @secure
   */
  apiEsGarbageCategoryShowPost = (
    data: EsGarbageCategoryQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGarbageCategoryShowPostData, any>({
      path: `/api/es-garbage-category/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-garbage-category
   * @name ApiEsGarbageCategoryTreedataPost
   * @summary 获取树形结构数据
   * @request POST:/api/es-garbage-category/treedata
   * @secure
   */
  apiEsGarbageCategoryTreedataPost = (params: RequestParams = {}) =>
    this.http.request<ApiEsGarbageCategoryTreedataPostData, any>({
      path: `/api/es-garbage-category/treedata`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-garbage-type
   * @name ApiEsGarbageTypeListPost
   * @summary 查询全部对象
   * @request POST:/api/es-garbage-type/list
   * @secure
   */
  apiEsGarbageTypeListPost = (
    data: EsGarbageTypeQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGarbageTypeListPostData, any>({
      path: `/api/es-garbage-type/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-garbage-type
   * @name ApiEsGarbageTypePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-garbage-type/paged-list
   * @secure
   */
  apiEsGarbageTypePagedListPost = (
    data: EsGarbageTypePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGarbageTypePagedListPostData, any>({
      path: `/api/es-garbage-type/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-garbage-type
   * @name ApiEsGarbageTypeShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-garbage-type/show
   * @secure
   */
  apiEsGarbageTypeShowPost = (
    data: EsGarbageTypeQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGarbageTypeShowPostData, any>({
      path: `/api/es-garbage-type/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-gps-alarm-record
   * @name ApiEsGpsAlarmRecordAddPost
   * @summary 新增数据
   * @request POST:/api/es-gps-alarm-record/add
   * @secure
   */
  apiEsGpsAlarmRecordAddPost = (
    data: EsGpsAlarmRecordFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGpsAlarmRecordAddPostData, any>({
      path: `/api/es-gps-alarm-record/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-gps-alarm-record
   * @name ApiEsGpsAlarmRecordEditPost
   * @summary 编辑数据
   * @request POST:/api/es-gps-alarm-record/edit
   * @secure
   */
  apiEsGpsAlarmRecordEditPost = (
    data: EsGpsAlarmRecordFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGpsAlarmRecordEditPostData, any>({
      path: `/api/es-gps-alarm-record/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-gps-alarm-record-file
   * @name ApiEsGpsAlarmRecordFileAddPost
   * @summary 新增数据
   * @request POST:/api/es-gps-alarm-record-file/add
   * @secure
   */
  apiEsGpsAlarmRecordFileAddPost = (
    data: EsGpsAlarmRecordFileFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGpsAlarmRecordFileAddPostData, any>({
      path: `/api/es-gps-alarm-record-file/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-gps-alarm-record-file
   * @name ApiEsGpsAlarmRecordFileEditPost
   * @summary 编辑数据
   * @request POST:/api/es-gps-alarm-record-file/edit
   * @secure
   */
  apiEsGpsAlarmRecordFileEditPost = (
    data: EsGpsAlarmRecordFileFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGpsAlarmRecordFileEditPostData, any>({
      path: `/api/es-gps-alarm-record-file/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-gps-alarm-record-file
   * @name ApiEsGpsAlarmRecordFileListPost
   * @summary 查询全部对象
   * @request POST:/api/es-gps-alarm-record-file/list
   * @secure
   */
  apiEsGpsAlarmRecordFileListPost = (
    data: EsGpsAlarmRecordFileQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGpsAlarmRecordFileListPostData, any>({
      path: `/api/es-gps-alarm-record-file/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-gps-alarm-record-file
   * @name ApiEsGpsAlarmRecordFilePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-gps-alarm-record-file/paged-list
   * @secure
   */
  apiEsGpsAlarmRecordFilePagedListPost = (
    data: EsGpsAlarmRecordFilePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGpsAlarmRecordFilePagedListPostData, any>({
      path: `/api/es-gps-alarm-record-file/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-gps-alarm-record-file
   * @name ApiEsGpsAlarmRecordFileRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/es-gps-alarm-record-file/remove-mul
   * @secure
   */
  apiEsGpsAlarmRecordFileRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGpsAlarmRecordFileRemoveMulPostData, any>({
      path: `/api/es-gps-alarm-record-file/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-gps-alarm-record-file
   * @name ApiEsGpsAlarmRecordFileRemovePost
   * @summary 删除1条数据
   * @request POST:/api/es-gps-alarm-record-file/remove
   * @secure
   */
  apiEsGpsAlarmRecordFileRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGpsAlarmRecordFileRemovePostData, any>({
      path: `/api/es-gps-alarm-record-file/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-gps-alarm-record-file
   * @name ApiEsGpsAlarmRecordFileShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-gps-alarm-record-file/show
   * @secure
   */
  apiEsGpsAlarmRecordFileShowPost = (
    data: EsGpsAlarmRecordFileQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGpsAlarmRecordFileShowPostData, any>({
      path: `/api/es-gps-alarm-record-file/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-gps-alarm-record
   * @name ApiEsGpsAlarmRecordGetGpsAlarmRecordPost
   * @summary 获取GPS报警记录
   * @request POST:/api/es-gps-alarm-record/get-gps-alarm-record
   * @secure
   */
  apiEsGpsAlarmRecordGetGpsAlarmRecordPost = (
    data: EsGpsAlarmRecordPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGpsAlarmRecordGetGpsAlarmRecordPostData, any>({
      path: `/api/es-gps-alarm-record/get-gps-alarm-record`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-gps-alarm-record
   * @name ApiEsGpsAlarmRecordGroupByDayPost
   * @summary 按日统计
   * @request POST:/api/es-gps-alarm-record/group-by-day
   * @secure
   */
  apiEsGpsAlarmRecordGroupByDayPost = (
    data: GpsAlarmStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGpsAlarmRecordGroupByDayPostData, any>({
      path: `/api/es-gps-alarm-record/group-by-day`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-gps-alarm-record
   * @name ApiEsGpsAlarmRecordGroupByLicencePost
   * @summary 按车牌号统计
   * @request POST:/api/es-gps-alarm-record/group-by-licence
   * @secure
   */
  apiEsGpsAlarmRecordGroupByLicencePost = (
    data: GpsAlarmStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGpsAlarmRecordGroupByLicencePostData, any>({
      path: `/api/es-gps-alarm-record/group-by-licence`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-gps-alarm-record
   * @name ApiEsGpsAlarmRecordGroupByMonthPost
   * @summary 按月统计
   * @request POST:/api/es-gps-alarm-record/group-by-month
   * @secure
   */
  apiEsGpsAlarmRecordGroupByMonthPost = (
    data: GpsAlarmStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGpsAlarmRecordGroupByMonthPostData, any>({
      path: `/api/es-gps-alarm-record/group-by-month`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-gps-alarm-record
   * @name ApiEsGpsAlarmRecordGroupByYearPost
   * @summary 按年统计
   * @request POST:/api/es-gps-alarm-record/group-by-year
   * @secure
   */
  apiEsGpsAlarmRecordGroupByYearPost = (
    data: GpsAlarmStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGpsAlarmRecordGroupByYearPostData, any>({
      path: `/api/es-gps-alarm-record/group-by-year`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-gps-alarm-record
   * @name ApiEsGpsAlarmRecordListPost
   * @summary 查询全部对象
   * @request POST:/api/es-gps-alarm-record/list
   * @secure
   */
  apiEsGpsAlarmRecordListPost = (
    data: EsGpsAlarmRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGpsAlarmRecordListPostData, any>({
      path: `/api/es-gps-alarm-record/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-gps-alarm-record
   * @name ApiEsGpsAlarmRecordPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-gps-alarm-record/paged-list
   * @secure
   */
  apiEsGpsAlarmRecordPagedListPost = (
    data: EsGpsAlarmRecordPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGpsAlarmRecordPagedListPostData, any>({
      path: `/api/es-gps-alarm-record/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-gps-alarm-record
   * @name ApiEsGpsAlarmRecordRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/es-gps-alarm-record/remove-mul
   * @secure
   */
  apiEsGpsAlarmRecordRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGpsAlarmRecordRemoveMulPostData, any>({
      path: `/api/es-gps-alarm-record/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-gps-alarm-record
   * @name ApiEsGpsAlarmRecordRemovePost
   * @summary 删除1条数据
   * @request POST:/api/es-gps-alarm-record/remove
   * @secure
   */
  apiEsGpsAlarmRecordRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGpsAlarmRecordRemovePostData, any>({
      path: `/api/es-gps-alarm-record/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-gps-alarm-record
   * @name ApiEsGpsAlarmRecordShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-gps-alarm-record/show
   * @secure
   */
  apiEsGpsAlarmRecordShowPost = (
    data: EsGpsAlarmRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsGpsAlarmRecordShowPostData, any>({
      path: `/api/es-gps-alarm-record/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-sanitation-facility
   * @name ApiEsSanitationFacilityAddPost
   * @summary 新增数据
   * @request POST:/api/es-sanitation-facility/add
   * @secure
   */
  apiEsSanitationFacilityAddPost = (
    data: EsSanitationFacilityFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsSanitationFacilityAddPostData, any>({
      path: `/api/es-sanitation-facility/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-sanitation-facility
   * @name ApiEsSanitationFacilityEditPost
   * @summary 编辑数据
   * @request POST:/api/es-sanitation-facility/edit
   * @secure
   */
  apiEsSanitationFacilityEditPost = (
    data: EsSanitationFacilityFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsSanitationFacilityEditPostData, any>({
      path: `/api/es-sanitation-facility/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-sanitation-facility
   * @name ApiEsSanitationFacilityListPost
   * @summary 查询全部对象
   * @request POST:/api/es-sanitation-facility/list
   * @secure
   */
  apiEsSanitationFacilityListPost = (
    data: EsSanitationFacilityQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsSanitationFacilityListPostData, any>({
      path: `/api/es-sanitation-facility/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-sanitation-facility
   * @name ApiEsSanitationFacilityPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-sanitation-facility/paged-list
   * @secure
   */
  apiEsSanitationFacilityPagedListPost = (
    data: EsSanitationFacilityPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsSanitationFacilityPagedListPostData, any>({
      path: `/api/es-sanitation-facility/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-sanitation-facility
   * @name ApiEsSanitationFacilityRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/es-sanitation-facility/remove-mul
   * @secure
   */
  apiEsSanitationFacilityRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsSanitationFacilityRemoveMulPostData, any>({
      path: `/api/es-sanitation-facility/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-sanitation-facility
   * @name ApiEsSanitationFacilityRemovePost
   * @summary 删除1条数据
   * @request POST:/api/es-sanitation-facility/remove
   * @secure
   */
  apiEsSanitationFacilityRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsSanitationFacilityRemovePostData, any>({
      path: `/api/es-sanitation-facility/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-sanitation-facility
   * @name ApiEsSanitationFacilityShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-sanitation-facility/show
   * @secure
   */
  apiEsSanitationFacilityShowPost = (
    data: EsSanitationFacilityQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsSanitationFacilityShowPostData, any>({
      path: `/api/es-sanitation-facility/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-sanitation-facility-type
   * @name ApiEsSanitationFacilityTypeAddPost
   * @summary 新增数据
   * @request POST:/api/es-sanitation-facility-type/add
   * @secure
   */
  apiEsSanitationFacilityTypeAddPost = (
    data: EsSanitationFacilityTypeFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsSanitationFacilityTypeAddPostData, any>({
      path: `/api/es-sanitation-facility-type/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-sanitation-facility-type
   * @name ApiEsSanitationFacilityTypeEditPost
   * @summary 编辑数据
   * @request POST:/api/es-sanitation-facility-type/edit
   * @secure
   */
  apiEsSanitationFacilityTypeEditPost = (
    data: EsSanitationFacilityTypeFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsSanitationFacilityTypeEditPostData, any>({
      path: `/api/es-sanitation-facility-type/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-sanitation-facility-type
   * @name ApiEsSanitationFacilityTypeListPost
   * @summary 查询全部对象
   * @request POST:/api/es-sanitation-facility-type/list
   * @secure
   */
  apiEsSanitationFacilityTypeListPost = (
    data: EsSanitationFacilityTypeQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsSanitationFacilityTypeListPostData, any>({
      path: `/api/es-sanitation-facility-type/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-sanitation-facility-type
   * @name ApiEsSanitationFacilityTypePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-sanitation-facility-type/paged-list
   * @secure
   */
  apiEsSanitationFacilityTypePagedListPost = (
    data: EsSanitationFacilityTypePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsSanitationFacilityTypePagedListPostData, any>({
      path: `/api/es-sanitation-facility-type/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-sanitation-facility-type
   * @name ApiEsSanitationFacilityTypeRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/es-sanitation-facility-type/remove-mul
   * @secure
   */
  apiEsSanitationFacilityTypeRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsSanitationFacilityTypeRemoveMulPostData, any>({
      path: `/api/es-sanitation-facility-type/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-sanitation-facility-type
   * @name ApiEsSanitationFacilityTypeRemovePost
   * @summary 删除1条数据
   * @request POST:/api/es-sanitation-facility-type/remove
   * @secure
   */
  apiEsSanitationFacilityTypeRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsSanitationFacilityTypeRemovePostData, any>({
      path: `/api/es-sanitation-facility-type/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-sanitation-facility-type
   * @name ApiEsSanitationFacilityTypeShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-sanitation-facility-type/show
   * @secure
   */
  apiEsSanitationFacilityTypeShowPost = (
    data: EsSanitationFacilityTypeQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsSanitationFacilityTypeShowPostData, any>({
      path: `/api/es-sanitation-facility-type/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-ship
   * @name ApiEsShipAddPost
   * @summary 新增数据
   * @request POST:/api/es-ship/add
   * @secure
   */
  apiEsShipAddPost = (data: EsShipFO, params: RequestParams = {}) =>
    this.http.request<ApiEsShipAddPostData, any>({
      path: `/api/es-ship/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-ship
   * @name ApiEsShipEditPost
   * @summary 编辑数据
   * @request POST:/api/es-ship/edit
   * @secure
   */
  apiEsShipEditPost = (data: EsShipFO, params: RequestParams = {}) =>
    this.http.request<ApiEsShipEditPostData, any>({
      path: `/api/es-ship/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-ship
   * @name ApiEsShipListPost
   * @summary 查询全部对象
   * @request POST:/api/es-ship/list
   * @secure
   */
  apiEsShipListPost = (data: EsShipQO, params: RequestParams = {}) =>
    this.http.request<ApiEsShipListPostData, any>({
      path: `/api/es-ship/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-ship
   * @name ApiEsShipPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-ship/paged-list
   * @secure
   */
  apiEsShipPagedListPost = (data: EsShipPQO, params: RequestParams = {}) =>
    this.http.request<ApiEsShipPagedListPostData, any>({
      path: `/api/es-ship/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-ship-realtime
   * @name ApiEsShipRealtimeAddPost
   * @summary 新增数据
   * @request POST:/api/es-ship-realtime/add
   * @secure
   */
  apiEsShipRealtimeAddPost = (
    data: EsShipRealtimeFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsShipRealtimeAddPostData, any>({
      path: `/api/es-ship-realtime/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-ship-realtime
   * @name ApiEsShipRealtimeEditPost
   * @summary 编辑数据
   * @request POST:/api/es-ship-realtime/edit
   * @secure
   */
  apiEsShipRealtimeEditPost = (
    data: EsShipRealtimeFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsShipRealtimeEditPostData, any>({
      path: `/api/es-ship-realtime/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-ship-realtime
   * @name ApiEsShipRealtimeListPost
   * @summary 查询全部对象
   * @request POST:/api/es-ship-realtime/list
   * @secure
   */
  apiEsShipRealtimeListPost = (
    data: EsShipRealtimeQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsShipRealtimeListPostData, any>({
      path: `/api/es-ship-realtime/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-ship-realtime
   * @name ApiEsShipRealtimePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-ship-realtime/paged-list
   * @secure
   */
  apiEsShipRealtimePagedListPost = (
    data: EsShipRealtimePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsShipRealtimePagedListPostData, any>({
      path: `/api/es-ship-realtime/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-ship-realtime
   * @name ApiEsShipRealtimeRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/es-ship-realtime/remove-mul
   * @secure
   */
  apiEsShipRealtimeRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsShipRealtimeRemoveMulPostData, any>({
      path: `/api/es-ship-realtime/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-ship-realtime
   * @name ApiEsShipRealtimeRemovePost
   * @summary 删除1条数据
   * @request POST:/api/es-ship-realtime/remove
   * @secure
   */
  apiEsShipRealtimeRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiEsShipRealtimeRemovePostData, any>({
      path: `/api/es-ship-realtime/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-ship-realtime
   * @name ApiEsShipRealtimeShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-ship-realtime/show
   * @secure
   */
  apiEsShipRealtimeShowPost = (
    data: EsShipRealtimeQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsShipRealtimeShowPostData, any>({
      path: `/api/es-ship-realtime/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-ship
   * @name ApiEsShipRemovePost
   * @summary 删除数据
   * @request POST:/api/es-ship/remove
   * @secure
   */
  apiEsShipRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiEsShipRemovePostData, any>({
      path: `/api/es-ship/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-ship
   * @name ApiEsShipShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-ship/show
   * @secure
   */
  apiEsShipShowPost = (data: EsShipQO, params: RequestParams = {}) =>
    this.http.request<ApiEsShipShowPostData, any>({
      path: `/api/es-ship/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle
   * @name ApiEsVehicleAddPost
   * @summary 新增数据
   * @request POST:/api/es-vehicle/add
   * @secure
   */
  apiEsVehicleAddPost = (data: EsVehicleFO, params: RequestParams = {}) =>
    this.http.request<ApiEsVehicleAddPostData, any>({
      path: `/api/es-vehicle/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle-dp-record
   * @name ApiEsVehicleDpRecordAddPost
   * @summary 新增数据
   * @request POST:/api/es-vehicle-dp-record/add
   * @secure
   */
  apiEsVehicleDpRecordAddPost = (
    data: EsVehicleDpRecordFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehicleDpRecordAddPostData, any>({
      path: `/api/es-vehicle-dp-record/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle-dp-record
   * @name ApiEsVehicleDpRecordEditPost
   * @summary 编辑数据
   * @request POST:/api/es-vehicle-dp-record/edit
   * @secure
   */
  apiEsVehicleDpRecordEditPost = (
    data: EsVehicleDpRecordFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehicleDpRecordEditPostData, any>({
      path: `/api/es-vehicle-dp-record/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle-dp-record
   * @name ApiEsVehicleDpRecordListPost
   * @summary 查询全部对象
   * @request POST:/api/es-vehicle-dp-record/list
   * @secure
   */
  apiEsVehicleDpRecordListPost = (
    data: EsVehicleDpRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehicleDpRecordListPostData, any>({
      path: `/api/es-vehicle-dp-record/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle-dp-record
   * @name ApiEsVehicleDpRecordPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-vehicle-dp-record/paged-list
   * @secure
   */
  apiEsVehicleDpRecordPagedListPost = (
    data: EsVehicleDpRecordPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehicleDpRecordPagedListPostData, any>({
      path: `/api/es-vehicle-dp-record/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle-dp-record
   * @name ApiEsVehicleDpRecordShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-vehicle-dp-record/show
   * @secure
   */
  apiEsVehicleDpRecordShowPost = (
    data: EsVehicleDpRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehicleDpRecordShowPostData, any>({
      path: `/api/es-vehicle-dp-record/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle
   * @name ApiEsVehicleEditPost
   * @summary 编辑数据
   * @request POST:/api/es-vehicle/edit
   * @secure
   */
  apiEsVehicleEditPost = (data: EsVehicleFO, params: RequestParams = {}) =>
    this.http.request<ApiEsVehicleEditPostData, any>({
      path: `/api/es-vehicle/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle
   * @name ApiEsVehicleGetVehicleCountByTypeNamePost
   * @summary 获取车辆类型数量
   * @request POST:/api/es-vehicle/get-vehicle-count-by-type-name
   * @secure
   */
  apiEsVehicleGetVehicleCountByTypeNamePost = (params: RequestParams = {}) =>
    this.http.request<ApiEsVehicleGetVehicleCountByTypeNamePostData, any>({
      path: `/api/es-vehicle/get-vehicle-count-by-type-name`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle
   * @name ApiEsVehicleGetVehicleCountByTypePost
   * @summary 获取车辆类型数量
   * @request POST:/api/es-vehicle/get-vehicle-count-by-type
   * @secure
   */
  apiEsVehicleGetVehicleCountByTypePost = (params: RequestParams = {}) =>
    this.http.request<ApiEsVehicleGetVehicleCountByTypePostData, any>({
      path: `/api/es-vehicle/get-vehicle-count-by-type`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle-lc-record
   * @name ApiEsVehicleLcRecordAddPost
   * @summary 新增数据
   * @request POST:/api/es-vehicle-lc-record/add
   * @secure
   */
  apiEsVehicleLcRecordAddPost = (
    data: EsVehicleLcRecordFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehicleLcRecordAddPostData, any>({
      path: `/api/es-vehicle-lc-record/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle-lc-record
   * @name ApiEsVehicleLcRecordEditPost
   * @summary 编辑数据
   * @request POST:/api/es-vehicle-lc-record/edit
   * @secure
   */
  apiEsVehicleLcRecordEditPost = (
    data: EsVehicleLcRecordFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehicleLcRecordEditPostData, any>({
      path: `/api/es-vehicle-lc-record/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle-lc-record
   * @name ApiEsVehicleLcRecordGroupByDayPost
   * @summary 按日统计
   * @request POST:/api/es-vehicle-lc-record/group-by-day
   * @secure
   */
  apiEsVehicleLcRecordGroupByDayPost = (
    data: EsVehicleLcRecordStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehicleLcRecordGroupByDayPostData, any>({
      path: `/api/es-vehicle-lc-record/group-by-day`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle-lc-record
   * @name ApiEsVehicleLcRecordGroupByMonthPost
   * @summary 按月统计
   * @request POST:/api/es-vehicle-lc-record/group-by-month
   * @secure
   */
  apiEsVehicleLcRecordGroupByMonthPost = (
    data: EsVehicleLcRecordStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehicleLcRecordGroupByMonthPostData, any>({
      path: `/api/es-vehicle-lc-record/group-by-month`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle-lc-record
   * @name ApiEsVehicleLcRecordGroupByYearPost
   * @summary 按年统计
   * @request POST:/api/es-vehicle-lc-record/group-by-year
   * @secure
   */
  apiEsVehicleLcRecordGroupByYearPost = (
    data: EsVehicleLcRecordStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehicleLcRecordGroupByYearPostData, any>({
      path: `/api/es-vehicle-lc-record/group-by-year`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle-lc-record
   * @name ApiEsVehicleLcRecordListPost
   * @summary 查询全部对象
   * @request POST:/api/es-vehicle-lc-record/list
   * @secure
   */
  apiEsVehicleLcRecordListPost = (
    data: EsVehicleLcRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehicleLcRecordListPostData, any>({
      path: `/api/es-vehicle-lc-record/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle-lc-record
   * @name ApiEsVehicleLcRecordPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-vehicle-lc-record/paged-list
   * @secure
   */
  apiEsVehicleLcRecordPagedListPost = (
    data: EsVehicleLcRecordPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehicleLcRecordPagedListPostData, any>({
      path: `/api/es-vehicle-lc-record/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle-lc-record
   * @name ApiEsVehicleLcRecordRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/es-vehicle-lc-record/remove-mul
   * @secure
   */
  apiEsVehicleLcRecordRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehicleLcRecordRemoveMulPostData, any>({
      path: `/api/es-vehicle-lc-record/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle-lc-record
   * @name ApiEsVehicleLcRecordRemovePost
   * @summary 删除1条数据
   * @request POST:/api/es-vehicle-lc-record/remove
   * @secure
   */
  apiEsVehicleLcRecordRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehicleLcRecordRemovePostData, any>({
      path: `/api/es-vehicle-lc-record/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle-lc-record
   * @name ApiEsVehicleLcRecordShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-vehicle-lc-record/show
   * @secure
   */
  apiEsVehicleLcRecordShowPost = (
    data: EsVehicleLcRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehicleLcRecordShowPostData, any>({
      path: `/api/es-vehicle-lc-record/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle
   * @name ApiEsVehicleListPost
   * @summary 查询全部对象
   * @request POST:/api/es-vehicle/list
   * @secure
   */
  apiEsVehicleListPost = (data: EsVehicleQO, params: RequestParams = {}) =>
    this.http.request<ApiEsVehicleListPostData, any>({
      path: `/api/es-vehicle/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle
   * @name ApiEsVehiclePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-vehicle/paged-list
   * @secure
   */
  apiEsVehiclePagedListPost = (
    data: EsVehiclePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehiclePagedListPostData, any>({
      path: `/api/es-vehicle/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle-realtime
   * @name ApiEsVehicleRealtimeAddPost
   * @summary 新增数据
   * @request POST:/api/es-vehicle-realtime/add
   * @secure
   */
  apiEsVehicleRealtimeAddPost = (
    data: EsVehicleRealtimeFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehicleRealtimeAddPostData, any>({
      path: `/api/es-vehicle-realtime/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle-realtime
   * @name ApiEsVehicleRealtimeEditPost
   * @summary 编辑数据
   * @request POST:/api/es-vehicle-realtime/edit
   * @secure
   */
  apiEsVehicleRealtimeEditPost = (
    data: EsVehicleRealtimeFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehicleRealtimeEditPostData, any>({
      path: `/api/es-vehicle-realtime/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle-realtime
   * @name ApiEsVehicleRealtimeListPost
   * @summary 查询全部对象
   * @request POST:/api/es-vehicle-realtime/list
   * @secure
   */
  apiEsVehicleRealtimeListPost = (
    data: EsVehicleRealtimeQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehicleRealtimeListPostData, any>({
      path: `/api/es-vehicle-realtime/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle-realtime
   * @name ApiEsVehicleRealtimePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-vehicle-realtime/paged-list
   * @secure
   */
  apiEsVehicleRealtimePagedListPost = (
    data: EsVehicleRealtimePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehicleRealtimePagedListPostData, any>({
      path: `/api/es-vehicle-realtime/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle-realtime
   * @name ApiEsVehicleRealtimeRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/es-vehicle-realtime/remove-mul
   * @secure
   */
  apiEsVehicleRealtimeRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehicleRealtimeRemoveMulPostData, any>({
      path: `/api/es-vehicle-realtime/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle-realtime
   * @name ApiEsVehicleRealtimeRemovePost
   * @summary 删除1条数据
   * @request POST:/api/es-vehicle-realtime/remove
   * @secure
   */
  apiEsVehicleRealtimeRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehicleRealtimeRemovePostData, any>({
      path: `/api/es-vehicle-realtime/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle-realtime
   * @name ApiEsVehicleRealtimeShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-vehicle-realtime/show
   * @secure
   */
  apiEsVehicleRealtimeShowPost = (
    data: EsVehicleRealtimeQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehicleRealtimeShowPostData, any>({
      path: `/api/es-vehicle-realtime/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle-realtime
   * @name ApiEsVehicleRealtimeVehicleStateStPost
   * @summary 获取车辆状态统计
   * @request POST:/api/es-vehicle-realtime/vehicle-state-st
   * @secure
   */
  apiEsVehicleRealtimeVehicleStateStPost = (
    data: EsVehicleRealtimeQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsVehicleRealtimeVehicleStateStPostData, any>({
      path: `/api/es-vehicle-realtime/vehicle-state-st`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle
   * @name ApiEsVehicleRemovePost
   * @summary 删除数据
   * @request POST:/api/es-vehicle/remove
   * @secure
   */
  apiEsVehicleRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiEsVehicleRemovePostData, any>({
      path: `/api/es-vehicle/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle
   * @name ApiEsVehicleShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-vehicle/show
   * @secure
   */
  apiEsVehicleShowPost = (data: EsVehicleQO, params: RequestParams = {}) =>
    this.http.request<ApiEsVehicleShowPostData, any>({
      path: `/api/es-vehicle/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-vehicle
   * @name ApiEsVehicleTrackPost
   * @summary 查询轨迹
   * @request POST:/api/es-vehicle/track
   * @secure
   */
  apiEsVehicleTrackPost = (data: TrackQO, params: RequestParams = {}) =>
    this.http.request<ApiEsVehicleTrackPostData, any>({
      path: `/api/es-vehicle/track`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-weight-record
   * @name ApiEsWeightRecordAddPost
   * @summary 新增数据
   * @request POST:/api/es-weight-record/add
   * @secure
   */
  apiEsWeightRecordAddPost = (
    data: EsWeightRecordFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWeightRecordAddPostData, any>({
      path: `/api/es-weight-record/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-weight-record
   * @name ApiEsWeightRecordEditPost
   * @summary 编辑数据
   * @request POST:/api/es-weight-record/edit
   * @secure
   */
  apiEsWeightRecordEditPost = (
    data: EsWeightRecordFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWeightRecordEditPostData, any>({
      path: `/api/es-weight-record/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-weight-record
   * @name ApiEsWeightRecordGroupByDayPost
   * @summary 按日统计
   * @request POST:/api/es-weight-record/group-by-day
   * @secure
   */
  apiEsWeightRecordGroupByDayPost = (
    data: EsWeightRecordStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWeightRecordGroupByDayPostData, any>({
      path: `/api/es-weight-record/group-by-day`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-weight-record
   * @name ApiEsWeightRecordGroupByLicencePost
   * @summary 按车牌号统计
   * @request POST:/api/es-weight-record/group-by-licence
   * @secure
   */
  apiEsWeightRecordGroupByLicencePost = (
    data: EsWeightRecordStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWeightRecordGroupByLicencePostData, any>({
      path: `/api/es-weight-record/group-by-licence`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-weight-record
   * @name ApiEsWeightRecordGroupByMonthPost
   * @summary 按月统计
   * @request POST:/api/es-weight-record/group-by-month
   * @secure
   */
  apiEsWeightRecordGroupByMonthPost = (
    data: EsWeightRecordStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWeightRecordGroupByMonthPostData, any>({
      path: `/api/es-weight-record/group-by-month`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-weight-record
   * @name ApiEsWeightRecordGroupByYearPost
   * @summary 按年统计
   * @request POST:/api/es-weight-record/group-by-year
   * @secure
   */
  apiEsWeightRecordGroupByYearPost = (
    data: EsWeightRecordStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWeightRecordGroupByYearPostData, any>({
      path: `/api/es-weight-record/group-by-year`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-weight-record
   * @name ApiEsWeightRecordListPost
   * @summary 查询全部对象
   * @request POST:/api/es-weight-record/list
   * @secure
   */
  apiEsWeightRecordListPost = (
    data: EsWeightRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWeightRecordListPostData, any>({
      path: `/api/es-weight-record/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-weight-record
   * @name ApiEsWeightRecordMainStPost
   * @summary 综合数据总览
   * @request POST:/api/es-weight-record/main-st
   * @secure
   */
  apiEsWeightRecordMainStPost = (
    data: WrMainStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWeightRecordMainStPostData, any>({
      path: `/api/es-weight-record/main-st`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-weight-record
   * @name ApiEsWeightRecordPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-weight-record/paged-list
   * @secure
   */
  apiEsWeightRecordPagedListPost = (
    data: EsWeightRecordPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWeightRecordPagedListPostData, any>({
      path: `/api/es-weight-record/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-weight-record
   * @name ApiEsWeightRecordQueryStatisticsPost
   * @summary 进站情况统计
   * @request POST:/api/es-weight-record/query-statistics
   * @secure
   */
  apiEsWeightRecordQueryStatisticsPost = (
    data: EsWeightRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWeightRecordQueryStatisticsPostData, any>({
      path: `/api/es-weight-record/query-statistics`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-weight-record
   * @name ApiEsWeightRecordRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/es-weight-record/remove-mul
   * @secure
   */
  apiEsWeightRecordRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWeightRecordRemoveMulPostData, any>({
      path: `/api/es-weight-record/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-weight-record
   * @name ApiEsWeightRecordRemovePost
   * @summary 删除1条数据
   * @request POST:/api/es-weight-record/remove
   * @secure
   */
  apiEsWeightRecordRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiEsWeightRecordRemovePostData, any>({
      path: `/api/es-weight-record/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-weight-record
   * @name ApiEsWeightRecordShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-weight-record/show
   * @secure
   */
  apiEsWeightRecordShowPost = (
    data: EsWeightRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWeightRecordShowPostData, any>({
      path: `/api/es-weight-record/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-pw
   * @name ApiEsWorkPlanPwAddPost
   * @summary 新增数据
   * @request POST:/api/es-work-plan-pw/add
   * @secure
   */
  apiEsWorkPlanPwAddPost = (data: EsWorkPlanPwFO, params: RequestParams = {}) =>
    this.http.request<ApiEsWorkPlanPwAddPostData, any>({
      path: `/api/es-work-plan-pw/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-pw
   * @name ApiEsWorkPlanPwEditPost
   * @summary 编辑数据
   * @request POST:/api/es-work-plan-pw/edit
   * @secure
   */
  apiEsWorkPlanPwEditPost = (
    data: EsWorkPlanPwFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanPwEditPostData, any>({
      path: `/api/es-work-plan-pw/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-pw
   * @name ApiEsWorkPlanPwGroupByDayPost
   * @summary 按日统计
   * @request POST:/api/es-work-plan-pw/group-by-day
   * @secure
   */
  apiEsWorkPlanPwGroupByDayPost = (
    data: EsWorkPlanPwStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanPwGroupByDayPostData, any>({
      path: `/api/es-work-plan-pw/group-by-day`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-pw
   * @name ApiEsWorkPlanPwGroupByMonthPost
   * @summary 按月统计
   * @request POST:/api/es-work-plan-pw/group-by-month
   * @secure
   */
  apiEsWorkPlanPwGroupByMonthPost = (
    data: EsWorkPlanPwStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanPwGroupByMonthPostData, any>({
      path: `/api/es-work-plan-pw/group-by-month`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-pw
   * @name ApiEsWorkPlanPwGroupByYearPost
   * @summary 按年统计
   * @request POST:/api/es-work-plan-pw/group-by-year
   * @secure
   */
  apiEsWorkPlanPwGroupByYearPost = (
    data: EsWorkPlanPwStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanPwGroupByYearPostData, any>({
      path: `/api/es-work-plan-pw/group-by-year`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-pw
   * @name ApiEsWorkPlanPwListPost
   * @summary 查询全部对象
   * @request POST:/api/es-work-plan-pw/list
   * @secure
   */
  apiEsWorkPlanPwListPost = (
    data: EsWorkPlanPwQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanPwListPostData, any>({
      path: `/api/es-work-plan-pw/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-pw
   * @name ApiEsWorkPlanPwPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-work-plan-pw/paged-list
   * @secure
   */
  apiEsWorkPlanPwPagedListPost = (
    data: EsWorkPlanPwPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanPwPagedListPostData, any>({
      path: `/api/es-work-plan-pw/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-pw
   * @name ApiEsWorkPlanPwRemovePost
   * @summary 删除数据
   * @request POST:/api/es-work-plan-pw/remove
   * @secure
   */
  apiEsWorkPlanPwRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiEsWorkPlanPwRemovePostData, any>({
      path: `/api/es-work-plan-pw/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-pw
   * @name ApiEsWorkPlanPwSaveListPost
   * @summary 保存数据
   * @request POST:/api/es-work-plan-pw/save-list
   * @secure
   */
  apiEsWorkPlanPwSaveListPost = (
    data: WpPwSaveFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanPwSaveListPostData, any>({
      path: `/api/es-work-plan-pw/save-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-pw
   * @name ApiEsWorkPlanPwShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-work-plan-pw/show
   * @secure
   */
  apiEsWorkPlanPwShowPost = (
    data: EsWorkPlanPwQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanPwShowPostData, any>({
      path: `/api/es-work-plan-pw/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-sw
   * @name ApiEsWorkPlanSwAddPost
   * @summary 新增数据
   * @request POST:/api/es-work-plan-sw/add
   * @secure
   */
  apiEsWorkPlanSwAddPost = (data: EsWorkPlanSwFO, params: RequestParams = {}) =>
    this.http.request<ApiEsWorkPlanSwAddPostData, any>({
      path: `/api/es-work-plan-sw/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-sw
   * @name ApiEsWorkPlanSwEditPost
   * @summary 编辑数据
   * @request POST:/api/es-work-plan-sw/edit
   * @secure
   */
  apiEsWorkPlanSwEditPost = (
    data: EsWorkPlanSwFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanSwEditPostData, any>({
      path: `/api/es-work-plan-sw/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-sw
   * @name ApiEsWorkPlanSwGroupByDayPost
   * @summary 按日统计
   * @request POST:/api/es-work-plan-sw/group-by-day
   * @secure
   */
  apiEsWorkPlanSwGroupByDayPost = (
    data: EsWorkPlanSwStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanSwGroupByDayPostData, any>({
      path: `/api/es-work-plan-sw/group-by-day`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-sw
   * @name ApiEsWorkPlanSwGroupByMonthPost
   * @summary 按月统计
   * @request POST:/api/es-work-plan-sw/group-by-month
   * @secure
   */
  apiEsWorkPlanSwGroupByMonthPost = (
    data: EsWorkPlanSwStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanSwGroupByMonthPostData, any>({
      path: `/api/es-work-plan-sw/group-by-month`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-sw
   * @name ApiEsWorkPlanSwGroupByYearPost
   * @summary 按年统计
   * @request POST:/api/es-work-plan-sw/group-by-year
   * @secure
   */
  apiEsWorkPlanSwGroupByYearPost = (
    data: EsWorkPlanSwStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanSwGroupByYearPostData, any>({
      path: `/api/es-work-plan-sw/group-by-year`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-sw
   * @name ApiEsWorkPlanSwListPost
   * @summary 查询全部对象
   * @request POST:/api/es-work-plan-sw/list
   * @secure
   */
  apiEsWorkPlanSwListPost = (
    data: EsWorkPlanSwQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanSwListPostData, any>({
      path: `/api/es-work-plan-sw/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-sw
   * @name ApiEsWorkPlanSwPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-work-plan-sw/paged-list
   * @secure
   */
  apiEsWorkPlanSwPagedListPost = (
    data: EsWorkPlanSwPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanSwPagedListPostData, any>({
      path: `/api/es-work-plan-sw/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-sw
   * @name ApiEsWorkPlanSwRemovePost
   * @summary 删除数据
   * @request POST:/api/es-work-plan-sw/remove
   * @secure
   */
  apiEsWorkPlanSwRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiEsWorkPlanSwRemovePostData, any>({
      path: `/api/es-work-plan-sw/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-sw
   * @name ApiEsWorkPlanSwSaveListPost
   * @summary 保存数据
   * @request POST:/api/es-work-plan-sw/save-list
   * @secure
   */
  apiEsWorkPlanSwSaveListPost = (
    data: WpSwSaveFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanSwSaveListPostData, any>({
      path: `/api/es-work-plan-sw/save-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-sw
   * @name ApiEsWorkPlanSwShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-work-plan-sw/show
   * @secure
   */
  apiEsWorkPlanSwShowPost = (
    data: EsWorkPlanSwQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanSwShowPostData, any>({
      path: `/api/es-work-plan-sw/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-vw
   * @name ApiEsWorkPlanVwAddPost
   * @summary 新增数据
   * @request POST:/api/es-work-plan-vw/add
   * @secure
   */
  apiEsWorkPlanVwAddPost = (data: EsWorkPlanVwFO, params: RequestParams = {}) =>
    this.http.request<ApiEsWorkPlanVwAddPostData, any>({
      path: `/api/es-work-plan-vw/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-vw
   * @name ApiEsWorkPlanVwEditPost
   * @summary 编辑数据
   * @request POST:/api/es-work-plan-vw/edit
   * @secure
   */
  apiEsWorkPlanVwEditPost = (
    data: EsWorkPlanVwFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanVwEditPostData, any>({
      path: `/api/es-work-plan-vw/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-vw
   * @name ApiEsWorkPlanVwGroupByDayPost
   * @summary 按日统计
   * @request POST:/api/es-work-plan-vw/group-by-day
   * @secure
   */
  apiEsWorkPlanVwGroupByDayPost = (
    data: EsWorkPlanVwStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanVwGroupByDayPostData, any>({
      path: `/api/es-work-plan-vw/group-by-day`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-vw
   * @name ApiEsWorkPlanVwGroupByMonthPost
   * @summary 按月统计
   * @request POST:/api/es-work-plan-vw/group-by-month
   * @secure
   */
  apiEsWorkPlanVwGroupByMonthPost = (
    data: EsWorkPlanVwStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanVwGroupByMonthPostData, any>({
      path: `/api/es-work-plan-vw/group-by-month`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-vw
   * @name ApiEsWorkPlanVwGroupByYearPost
   * @summary 按年统计
   * @request POST:/api/es-work-plan-vw/group-by-year
   * @secure
   */
  apiEsWorkPlanVwGroupByYearPost = (
    data: EsWorkPlanVwStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanVwGroupByYearPostData, any>({
      path: `/api/es-work-plan-vw/group-by-year`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-vw
   * @name ApiEsWorkPlanVwListPost
   * @summary 查询全部对象
   * @request POST:/api/es-work-plan-vw/list
   * @secure
   */
  apiEsWorkPlanVwListPost = (
    data: EsWorkPlanVwQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanVwListPostData, any>({
      path: `/api/es-work-plan-vw/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-vw
   * @name ApiEsWorkPlanVwPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-work-plan-vw/paged-list
   * @secure
   */
  apiEsWorkPlanVwPagedListPost = (
    data: EsWorkPlanVwPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanVwPagedListPostData, any>({
      path: `/api/es-work-plan-vw/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-vw
   * @name ApiEsWorkPlanVwRemovePost
   * @summary 删除数据
   * @request POST:/api/es-work-plan-vw/remove
   * @secure
   */
  apiEsWorkPlanVwRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiEsWorkPlanVwRemovePostData, any>({
      path: `/api/es-work-plan-vw/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-vw
   * @name ApiEsWorkPlanVwSaveListPost
   * @summary 保存数据
   * @request POST:/api/es-work-plan-vw/save-list
   * @secure
   */
  apiEsWorkPlanVwSaveListPost = (
    data: WpVwSaveFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanVwSaveListPostData, any>({
      path: `/api/es-work-plan-vw/save-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-plan-vw
   * @name ApiEsWorkPlanVwShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-work-plan-vw/show
   * @secure
   */
  apiEsWorkPlanVwShowPost = (
    data: EsWorkPlanVwQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkPlanVwShowPostData, any>({
      path: `/api/es-work-plan-vw/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-route
   * @name ApiEsWorkRouteAddPost
   * @summary 新增数据
   * @request POST:/api/es-work-route/add
   * @secure
   */
  apiEsWorkRouteAddPost = (data: EsWorkRouteFO, params: RequestParams = {}) =>
    this.http.request<ApiEsWorkRouteAddPostData, any>({
      path: `/api/es-work-route/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-route
   * @name ApiEsWorkRouteEditPost
   * @summary 编辑数据
   * @request POST:/api/es-work-route/edit
   * @secure
   */
  apiEsWorkRouteEditPost = (data: EsWorkRouteFO, params: RequestParams = {}) =>
    this.http.request<ApiEsWorkRouteEditPostData, any>({
      path: `/api/es-work-route/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-route
   * @name ApiEsWorkRouteListPost
   * @summary 查询全部对象
   * @request POST:/api/es-work-route/list
   * @secure
   */
  apiEsWorkRouteListPost = (data: EsWorkRouteQO, params: RequestParams = {}) =>
    this.http.request<ApiEsWorkRouteListPostData, any>({
      path: `/api/es-work-route/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-route
   * @name ApiEsWorkRoutePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-work-route/paged-list
   * @secure
   */
  apiEsWorkRoutePagedListPost = (
    data: EsWorkRoutePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkRoutePagedListPostData, any>({
      path: `/api/es-work-route/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-route-point
   * @name ApiEsWorkRoutePointListPost
   * @summary 查询全部对象
   * @request POST:/api/es-work-route-point/list
   * @secure
   */
  apiEsWorkRoutePointListPost = (
    data: EsWorkRoutePointQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkRoutePointListPostData, any>({
      path: `/api/es-work-route-point/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-route-point
   * @name ApiEsWorkRoutePointPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-work-route-point/paged-list
   * @secure
   */
  apiEsWorkRoutePointPagedListPost = (
    data: EsWorkRoutePointPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkRoutePointPagedListPostData, any>({
      path: `/api/es-work-route-point/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-route-point
   * @name ApiEsWorkRoutePointShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-work-route-point/show
   * @secure
   */
  apiEsWorkRoutePointShowPost = (
    data: EsWorkRoutePointQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkRoutePointShowPostData, any>({
      path: `/api/es-work-route-point/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-route
   * @name ApiEsWorkRouteRemovePost
   * @summary 删除数据
   * @request POST:/api/es-work-route/remove
   * @secure
   */
  apiEsWorkRouteRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiEsWorkRouteRemovePostData, any>({
      path: `/api/es-work-route/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-route
   * @name ApiEsWorkRouteShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-work-route/show
   * @secure
   */
  apiEsWorkRouteShowPost = (data: EsWorkRouteQO, params: RequestParams = {}) =>
    this.http.request<ApiEsWorkRouteShowPostData, any>({
      path: `/api/es-work-route/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-rule
   * @name ApiEsWorkRuleAddPost
   * @summary 新增数据
   * @request POST:/api/es-work-rule/add
   * @secure
   */
  apiEsWorkRuleAddPost = (data: EsWorkRuleFO, params: RequestParams = {}) =>
    this.http.request<ApiEsWorkRuleAddPostData, any>({
      path: `/api/es-work-rule/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-rule
   * @name ApiEsWorkRuleEditPost
   * @summary 编辑数据
   * @request POST:/api/es-work-rule/edit
   * @secure
   */
  apiEsWorkRuleEditPost = (data: EsWorkRuleFO, params: RequestParams = {}) =>
    this.http.request<ApiEsWorkRuleEditPostData, any>({
      path: `/api/es-work-rule/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-rule
   * @name ApiEsWorkRuleListPost
   * @summary 查询全部对象
   * @request POST:/api/es-work-rule/list
   * @secure
   */
  apiEsWorkRuleListPost = (data: EsWorkRuleQO, params: RequestParams = {}) =>
    this.http.request<ApiEsWorkRuleListPostData, any>({
      path: `/api/es-work-rule/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-rule
   * @name ApiEsWorkRulePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-work-rule/paged-list
   * @secure
   */
  apiEsWorkRulePagedListPost = (
    data: EsWorkRulePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkRulePagedListPostData, any>({
      path: `/api/es-work-rule/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-rule
   * @name ApiEsWorkRuleRemovePost
   * @summary 删除数据
   * @request POST:/api/es-work-rule/remove
   * @secure
   */
  apiEsWorkRuleRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiEsWorkRuleRemovePostData, any>({
      path: `/api/es-work-rule/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-rule
   * @name ApiEsWorkRuleShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-work-rule/show
   * @secure
   */
  apiEsWorkRuleShowPost = (data: EsWorkRuleQO, params: RequestParams = {}) =>
    this.http.request<ApiEsWorkRuleShowPostData, any>({
      path: `/api/es-work-rule/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-shift-pw
   * @name ApiEsWorkShiftPwAddPost
   * @summary 新增数据
   * @request POST:/api/es-work-shift-pw/add
   * @secure
   */
  apiEsWorkShiftPwAddPost = (
    data: EsWorkShiftPwFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkShiftPwAddPostData, any>({
      path: `/api/es-work-shift-pw/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-shift-pw
   * @name ApiEsWorkShiftPwEditPost
   * @summary 编辑数据
   * @request POST:/api/es-work-shift-pw/edit
   * @secure
   */
  apiEsWorkShiftPwEditPost = (
    data: EsWorkShiftPwFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkShiftPwEditPostData, any>({
      path: `/api/es-work-shift-pw/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-shift-pw
   * @name ApiEsWorkShiftPwListPost
   * @summary 查询全部对象
   * @request POST:/api/es-work-shift-pw/list
   * @secure
   */
  apiEsWorkShiftPwListPost = (
    data: EsWorkShiftPwQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkShiftPwListPostData, any>({
      path: `/api/es-work-shift-pw/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-shift-pw
   * @name ApiEsWorkShiftPwPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-work-shift-pw/paged-list
   * @secure
   */
  apiEsWorkShiftPwPagedListPost = (
    data: EsWorkShiftPwPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkShiftPwPagedListPostData, any>({
      path: `/api/es-work-shift-pw/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-shift-pw
   * @name ApiEsWorkShiftPwRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/es-work-shift-pw/remove-mul
   * @secure
   */
  apiEsWorkShiftPwRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkShiftPwRemoveMulPostData, any>({
      path: `/api/es-work-shift-pw/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-shift-pw
   * @name ApiEsWorkShiftPwRemovePost
   * @summary 删除1条数据
   * @request POST:/api/es-work-shift-pw/remove
   * @secure
   */
  apiEsWorkShiftPwRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiEsWorkShiftPwRemovePostData, any>({
      path: `/api/es-work-shift-pw/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-shift-pw
   * @name ApiEsWorkShiftPwShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-work-shift-pw/show
   * @secure
   */
  apiEsWorkShiftPwShowPost = (
    data: EsWorkShiftPwQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkShiftPwShowPostData, any>({
      path: `/api/es-work-shift-pw/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-shift-sw
   * @name ApiEsWorkShiftSwAddPost
   * @summary 新增数据
   * @request POST:/api/es-work-shift-sw/add
   * @secure
   */
  apiEsWorkShiftSwAddPost = (
    data: EsWorkShiftSwFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkShiftSwAddPostData, any>({
      path: `/api/es-work-shift-sw/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-shift-sw
   * @name ApiEsWorkShiftSwEditPost
   * @summary 编辑数据
   * @request POST:/api/es-work-shift-sw/edit
   * @secure
   */
  apiEsWorkShiftSwEditPost = (
    data: EsWorkShiftSwFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkShiftSwEditPostData, any>({
      path: `/api/es-work-shift-sw/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-shift-sw
   * @name ApiEsWorkShiftSwListPost
   * @summary 查询全部对象
   * @request POST:/api/es-work-shift-sw/list
   * @secure
   */
  apiEsWorkShiftSwListPost = (
    data: EsWorkShiftSwQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkShiftSwListPostData, any>({
      path: `/api/es-work-shift-sw/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-shift-sw
   * @name ApiEsWorkShiftSwPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-work-shift-sw/paged-list
   * @secure
   */
  apiEsWorkShiftSwPagedListPost = (
    data: EsWorkShiftSwPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkShiftSwPagedListPostData, any>({
      path: `/api/es-work-shift-sw/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-shift-sw
   * @name ApiEsWorkShiftSwRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/es-work-shift-sw/remove-mul
   * @secure
   */
  apiEsWorkShiftSwRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkShiftSwRemoveMulPostData, any>({
      path: `/api/es-work-shift-sw/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-shift-sw
   * @name ApiEsWorkShiftSwRemovePost
   * @summary 删除1条数据
   * @request POST:/api/es-work-shift-sw/remove
   * @secure
   */
  apiEsWorkShiftSwRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiEsWorkShiftSwRemovePostData, any>({
      path: `/api/es-work-shift-sw/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-shift-sw
   * @name ApiEsWorkShiftSwShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-work-shift-sw/show
   * @secure
   */
  apiEsWorkShiftSwShowPost = (
    data: EsWorkShiftSwQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkShiftSwShowPostData, any>({
      path: `/api/es-work-shift-sw/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-shift-vw
   * @name ApiEsWorkShiftVwAddPost
   * @summary 新增数据
   * @request POST:/api/es-work-shift-vw/add
   * @secure
   */
  apiEsWorkShiftVwAddPost = (
    data: EsWorkShiftVwFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkShiftVwAddPostData, any>({
      path: `/api/es-work-shift-vw/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-shift-vw
   * @name ApiEsWorkShiftVwEditPost
   * @summary 编辑数据
   * @request POST:/api/es-work-shift-vw/edit
   * @secure
   */
  apiEsWorkShiftVwEditPost = (
    data: EsWorkShiftVwFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkShiftVwEditPostData, any>({
      path: `/api/es-work-shift-vw/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-shift-vw
   * @name ApiEsWorkShiftVwListPost
   * @summary 查询全部对象
   * @request POST:/api/es-work-shift-vw/list
   * @secure
   */
  apiEsWorkShiftVwListPost = (
    data: EsWorkShiftVwQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkShiftVwListPostData, any>({
      path: `/api/es-work-shift-vw/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-shift-vw
   * @name ApiEsWorkShiftVwPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-work-shift-vw/paged-list
   * @secure
   */
  apiEsWorkShiftVwPagedListPost = (
    data: EsWorkShiftVwPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkShiftVwPagedListPostData, any>({
      path: `/api/es-work-shift-vw/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-shift-vw
   * @name ApiEsWorkShiftVwRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/es-work-shift-vw/remove-mul
   * @secure
   */
  apiEsWorkShiftVwRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkShiftVwRemoveMulPostData, any>({
      path: `/api/es-work-shift-vw/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-shift-vw
   * @name ApiEsWorkShiftVwRemovePost
   * @summary 删除1条数据
   * @request POST:/api/es-work-shift-vw/remove
   * @secure
   */
  apiEsWorkShiftVwRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiEsWorkShiftVwRemovePostData, any>({
      path: `/api/es-work-shift-vw/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-shift-vw
   * @name ApiEsWorkShiftVwShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-work-shift-vw/show
   * @secure
   */
  apiEsWorkShiftVwShowPost = (
    data: EsWorkShiftVwQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkShiftVwShowPostData, any>({
      path: `/api/es-work-shift-vw/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-watercourse
   * @name ApiEsWorkWatercourseAddPost
   * @summary 新增数据
   * @request POST:/api/es-work-watercourse/add
   * @secure
   */
  apiEsWorkWatercourseAddPost = (
    data: EsWorkWatercourseFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkWatercourseAddPostData, any>({
      path: `/api/es-work-watercourse/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-watercourse
   * @name ApiEsWorkWatercourseEditPost
   * @summary 编辑数据
   * @request POST:/api/es-work-watercourse/edit
   * @secure
   */
  apiEsWorkWatercourseEditPost = (
    data: EsWorkWatercourseFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkWatercourseEditPostData, any>({
      path: `/api/es-work-watercourse/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-watercourse
   * @name ApiEsWorkWatercourseListPost
   * @summary 查询全部对象
   * @request POST:/api/es-work-watercourse/list
   * @secure
   */
  apiEsWorkWatercourseListPost = (
    data: EsWorkWatercourseQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkWatercourseListPostData, any>({
      path: `/api/es-work-watercourse/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-watercourse
   * @name ApiEsWorkWatercoursePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-work-watercourse/paged-list
   * @secure
   */
  apiEsWorkWatercoursePagedListPost = (
    data: EsWorkWatercoursePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkWatercoursePagedListPostData, any>({
      path: `/api/es-work-watercourse/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-watercourse-point
   * @name ApiEsWorkWatercoursePointAddPost
   * @summary 新增数据
   * @request POST:/api/es-work-watercourse-point/add
   * @secure
   */
  apiEsWorkWatercoursePointAddPost = (
    data: EsWorkWatercoursePointFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkWatercoursePointAddPostData, any>({
      path: `/api/es-work-watercourse-point/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-watercourse-point
   * @name ApiEsWorkWatercoursePointEditPost
   * @summary 编辑数据
   * @request POST:/api/es-work-watercourse-point/edit
   * @secure
   */
  apiEsWorkWatercoursePointEditPost = (
    data: EsWorkWatercoursePointFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkWatercoursePointEditPostData, any>({
      path: `/api/es-work-watercourse-point/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-watercourse-point
   * @name ApiEsWorkWatercoursePointListPost
   * @summary 查询全部对象
   * @request POST:/api/es-work-watercourse-point/list
   * @secure
   */
  apiEsWorkWatercoursePointListPost = (
    data: EsWorkWatercoursePointQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkWatercoursePointListPostData, any>({
      path: `/api/es-work-watercourse-point/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-watercourse-point
   * @name ApiEsWorkWatercoursePointPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-work-watercourse-point/paged-list
   * @secure
   */
  apiEsWorkWatercoursePointPagedListPost = (
    data: EsWorkWatercoursePointPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkWatercoursePointPagedListPostData, any>({
      path: `/api/es-work-watercourse-point/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-watercourse-point
   * @name ApiEsWorkWatercoursePointRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/es-work-watercourse-point/remove-mul
   * @secure
   */
  apiEsWorkWatercoursePointRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkWatercoursePointRemoveMulPostData, any>({
      path: `/api/es-work-watercourse-point/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-watercourse-point
   * @name ApiEsWorkWatercoursePointRemovePost
   * @summary 删除1条数据
   * @request POST:/api/es-work-watercourse-point/remove
   * @secure
   */
  apiEsWorkWatercoursePointRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkWatercoursePointRemovePostData, any>({
      path: `/api/es-work-watercourse-point/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-watercourse-point
   * @name ApiEsWorkWatercoursePointShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-work-watercourse-point/show
   * @secure
   */
  apiEsWorkWatercoursePointShowPost = (
    data: EsWorkWatercoursePointQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkWatercoursePointShowPostData, any>({
      path: `/api/es-work-watercourse-point/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-watercourse
   * @name ApiEsWorkWatercourseRemovePost
   * @summary 删除数据
   * @request POST:/api/es-work-watercourse/remove
   * @secure
   */
  apiEsWorkWatercourseRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkWatercourseRemovePostData, any>({
      path: `/api/es-work-watercourse/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-work-watercourse
   * @name ApiEsWorkWatercourseShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-work-watercourse/show
   * @secure
   */
  apiEsWorkWatercourseShowPost = (
    data: EsWorkWatercourseQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWorkWatercourseShowPostData, any>({
      path: `/api/es-work-watercourse/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-wt-general
   * @name ApiEsWtGeneralAddPost
   * @summary 新增数据
   * @request POST:/api/es-wt-general/add
   * @secure
   */
  apiEsWtGeneralAddPost = (data: EsWtGeneralFO, params: RequestParams = {}) =>
    this.http.request<ApiEsWtGeneralAddPostData, any>({
      path: `/api/es-wt-general/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-wt-general
   * @name ApiEsWtGeneralEditPost
   * @summary 编辑数据
   * @request POST:/api/es-wt-general/edit
   * @secure
   */
  apiEsWtGeneralEditPost = (data: EsWtGeneralFO, params: RequestParams = {}) =>
    this.http.request<ApiEsWtGeneralEditPostData, any>({
      path: `/api/es-wt-general/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-wt-general
   * @name ApiEsWtGeneralListPost
   * @summary 查询全部对象
   * @request POST:/api/es-wt-general/list
   * @secure
   */
  apiEsWtGeneralListPost = (data: EsWtGeneralQO, params: RequestParams = {}) =>
    this.http.request<ApiEsWtGeneralListPostData, any>({
      path: `/api/es-wt-general/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-wt-general
   * @name ApiEsWtGeneralPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-wt-general/paged-list
   * @secure
   */
  apiEsWtGeneralPagedListPost = (
    data: EsWtGeneralPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWtGeneralPagedListPostData, any>({
      path: `/api/es-wt-general/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-wt-general
   * @name ApiEsWtGeneralRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/es-wt-general/remove-mul
   * @secure
   */
  apiEsWtGeneralRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWtGeneralRemoveMulPostData, any>({
      path: `/api/es-wt-general/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-wt-general
   * @name ApiEsWtGeneralRemovePost
   * @summary 删除1条数据
   * @request POST:/api/es-wt-general/remove
   * @secure
   */
  apiEsWtGeneralRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiEsWtGeneralRemovePostData, any>({
      path: `/api/es-wt-general/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-wt-general
   * @name ApiEsWtGeneralShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-wt-general/show
   * @secure
   */
  apiEsWtGeneralShowPost = (data: EsWtGeneralQO, params: RequestParams = {}) =>
    this.http.request<ApiEsWtGeneralShowPostData, any>({
      path: `/api/es-wt-general/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-wt-general
   * @name ApiEsWtGeneralTreedataPost
   * @summary 获取树形结构数据
   * @request POST:/api/es-wt-general/treedata
   * @secure
   */
  apiEsWtGeneralTreedataPost = (params: RequestParams = {}) =>
    this.http.request<ApiEsWtGeneralTreedataPostData, any>({
      path: `/api/es-wt-general/treedata`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-wt-shift
   * @name ApiEsWtShiftListPost
   * @summary 查询全部对象
   * @request POST:/api/es-wt-shift/list
   * @secure
   */
  apiEsWtShiftListPost = (data: EsWtShiftQO, params: RequestParams = {}) =>
    this.http.request<ApiEsWtShiftListPostData, any>({
      path: `/api/es-wt-shift/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-wt-shift
   * @name ApiEsWtShiftPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-wt-shift/paged-list
   * @secure
   */
  apiEsWtShiftPagedListPost = (
    data: EsWtShiftPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWtShiftPagedListPostData, any>({
      path: `/api/es-wt-shift/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-wt-shift
   * @name ApiEsWtShiftShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-wt-shift/show
   * @secure
   */
  apiEsWtShiftShowPost = (data: EsWtShiftQO, params: RequestParams = {}) =>
    this.http.request<ApiEsWtShiftShowPostData, any>({
      path: `/api/es-wt-shift/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-wt-specific
   * @name ApiEsWtSpecificAddPost
   * @summary 新增数据
   * @request POST:/api/es-wt-specific/add
   * @secure
   */
  apiEsWtSpecificAddPost = (data: EsWtSpecificFO, params: RequestParams = {}) =>
    this.http.request<ApiEsWtSpecificAddPostData, any>({
      path: `/api/es-wt-specific/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-wt-specific
   * @name ApiEsWtSpecificEditPost
   * @summary 编辑数据
   * @request POST:/api/es-wt-specific/edit
   * @secure
   */
  apiEsWtSpecificEditPost = (
    data: EsWtSpecificFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWtSpecificEditPostData, any>({
      path: `/api/es-wt-specific/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-wt-specific
   * @name ApiEsWtSpecificListPost
   * @summary 查询全部对象
   * @request POST:/api/es-wt-specific/list
   * @secure
   */
  apiEsWtSpecificListPost = (
    data: EsWtSpecificQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWtSpecificListPostData, any>({
      path: `/api/es-wt-specific/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-wt-specific
   * @name ApiEsWtSpecificPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/es-wt-specific/paged-list
   * @secure
   */
  apiEsWtSpecificPagedListPost = (
    data: EsWtSpecificPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWtSpecificPagedListPostData, any>({
      path: `/api/es-wt-specific/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-wt-specific
   * @name ApiEsWtSpecificRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/es-wt-specific/remove-mul
   * @secure
   */
  apiEsWtSpecificRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWtSpecificRemoveMulPostData, any>({
      path: `/api/es-wt-specific/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-wt-specific
   * @name ApiEsWtSpecificRemovePost
   * @summary 删除1条数据
   * @request POST:/api/es-wt-specific/remove
   * @secure
   */
  apiEsWtSpecificRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiEsWtSpecificRemovePostData, any>({
      path: `/api/es-wt-specific/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags es-wt-specific
   * @name ApiEsWtSpecificShowPost
   * @summary 查询1个对象
   * @request POST:/api/es-wt-specific/show
   * @secure
   */
  apiEsWtSpecificShowPost = (
    data: EsWtSpecificQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEsWtSpecificShowPostData, any>({
      path: `/api/es-wt-specific/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags gps
   * @name ApiGpsGpsTokenPost
   * @summary 获取gps token
   * @request POST:/api/gps/gps-token
   * @secure
   */
  apiGpsGpsTokenPost = (params: RequestParams = {}) =>
    this.http.request<ApiGpsGpsTokenPostData, any>({
      path: `/api/gps/gps-token`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags hik
   * @name ApiHikCruiseRoutesControllingPost
   * @summary 本接口用于进行巡航路径控制，包括开始、停止巡航两种操作。
   * @request POST:/api/hik/cruise-routes-controlling
   * @secure
   */
  apiHikCruiseRoutesControllingPost = (
    data: CruiseRoutesControllingQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiHikCruiseRoutesControllingPostData, any>({
      path: `/api/hik/cruise-routes-controlling`,
      method: "POST",
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
   * @tags hik
   * @name ApiHikPtzsControllingPost
   * @summary 根据监控点编号进行云台操作
   * @request POST:/api/hik/ptzs-controlling
   * @secure
   */
  apiHikPtzsControllingPost = (
    data: PtzsControllingQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiHikPtzsControllingPostData, any>({
      path: `/api/hik/ptzs-controlling`,
      method: "POST",
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
   * @tags mm-inventory
   * @name ApiMmInventoryListPost
   * @summary 查询全部对象
   * @request POST:/api/mm-inventory/list
   * @secure
   */
  apiMmInventoryListPost = (data: MmInventoryQO, params: RequestParams = {}) =>
    this.http.request<ApiMmInventoryListPostData, any>({
      path: `/api/mm-inventory/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-inventory
   * @name ApiMmInventoryPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/mm-inventory/paged-list
   * @secure
   */
  apiMmInventoryPagedListPost = (
    data: MmInventoryPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMmInventoryPagedListPostData, any>({
      path: `/api/mm-inventory/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-inventory
   * @name ApiMmInventoryShowPost
   * @summary 查询1个对象
   * @request POST:/api/mm-inventory/show
   * @secure
   */
  apiMmInventoryShowPost = (data: MmInventoryQO, params: RequestParams = {}) =>
    this.http.request<ApiMmInventoryShowPostData, any>({
      path: `/api/mm-inventory/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-material
   * @name ApiMmMaterialAddPost
   * @summary 新增数据
   * @request POST:/api/mm-material/add
   * @secure
   */
  apiMmMaterialAddPost = (data: MmMaterialFO, params: RequestParams = {}) =>
    this.http.request<ApiMmMaterialAddPostData, any>({
      path: `/api/mm-material/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-material-category
   * @name ApiMmMaterialCategoryAddPost
   * @summary 新增数据
   * @request POST:/api/mm-material-category/add
   * @secure
   */
  apiMmMaterialCategoryAddPost = (
    data: MmMaterialCategoryFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMmMaterialCategoryAddPostData, any>({
      path: `/api/mm-material-category/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-material-category
   * @name ApiMmMaterialCategoryEditPost
   * @summary 编辑数据
   * @request POST:/api/mm-material-category/edit
   * @secure
   */
  apiMmMaterialCategoryEditPost = (
    data: MmMaterialCategoryFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMmMaterialCategoryEditPostData, any>({
      path: `/api/mm-material-category/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-material-category
   * @name ApiMmMaterialCategoryListPost
   * @summary 查询全部对象
   * @request POST:/api/mm-material-category/list
   * @secure
   */
  apiMmMaterialCategoryListPost = (
    data: MmMaterialCategoryQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMmMaterialCategoryListPostData, any>({
      path: `/api/mm-material-category/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-material-category
   * @name ApiMmMaterialCategoryPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/mm-material-category/paged-list
   * @secure
   */
  apiMmMaterialCategoryPagedListPost = (
    data: MmMaterialCategoryPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMmMaterialCategoryPagedListPostData, any>({
      path: `/api/mm-material-category/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-material-category
   * @name ApiMmMaterialCategoryRemovePost
   * @summary 删除数据
   * @request POST:/api/mm-material-category/remove
   * @secure
   */
  apiMmMaterialCategoryRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMmMaterialCategoryRemovePostData, any>({
      path: `/api/mm-material-category/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-material-category
   * @name ApiMmMaterialCategoryShowPost
   * @summary 查询1个对象
   * @request POST:/api/mm-material-category/show
   * @secure
   */
  apiMmMaterialCategoryShowPost = (
    data: MmMaterialCategoryQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMmMaterialCategoryShowPostData, any>({
      path: `/api/mm-material-category/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-material
   * @name ApiMmMaterialEditPost
   * @summary 编辑数据
   * @request POST:/api/mm-material/edit
   * @secure
   */
  apiMmMaterialEditPost = (data: MmMaterialFO, params: RequestParams = {}) =>
    this.http.request<ApiMmMaterialEditPostData, any>({
      path: `/api/mm-material/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-material
   * @name ApiMmMaterialListPost
   * @summary 查询全部对象
   * @request POST:/api/mm-material/list
   * @secure
   */
  apiMmMaterialListPost = (data: MmMaterialQO, params: RequestParams = {}) =>
    this.http.request<ApiMmMaterialListPostData, any>({
      path: `/api/mm-material/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-material
   * @name ApiMmMaterialPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/mm-material/paged-list
   * @secure
   */
  apiMmMaterialPagedListPost = (
    data: MmMaterialPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMmMaterialPagedListPostData, any>({
      path: `/api/mm-material/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-material
   * @name ApiMmMaterialRemovePost
   * @summary 删除数据
   * @request POST:/api/mm-material/remove
   * @secure
   */
  apiMmMaterialRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiMmMaterialRemovePostData, any>({
      path: `/api/mm-material/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-material
   * @name ApiMmMaterialShowPost
   * @summary 查询1个对象
   * @request POST:/api/mm-material/show
   * @secure
   */
  apiMmMaterialShowPost = (data: MmMaterialQO, params: RequestParams = {}) =>
    this.http.request<ApiMmMaterialShowPostData, any>({
      path: `/api/mm-material/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-requisition
   * @name ApiMmRequisitionApproveRequisitionPost
   * @summary 审批领料申请
   * @request POST:/api/mm-requisition/approve-requisition
   * @secure
   */
  apiMmRequisitionApproveRequisitionPost = (
    data: ApproveRequisitionFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMmRequisitionApproveRequisitionPostData, any>({
      path: `/api/mm-requisition/approve-requisition`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-requisition
   * @name ApiMmRequisitionGenerateStockOutPost
   * @summary 根据申请单生成出库记录
   * @request POST:/api/mm-requisition/generate-stock-out
   * @secure
   */
  apiMmRequisitionGenerateStockOutPost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMmRequisitionGenerateStockOutPostData, any>({
      path: `/api/mm-requisition/generate-stock-out`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-requisition
   * @name ApiMmRequisitionListPost
   * @summary 查询全部对象
   * @request POST:/api/mm-requisition/list
   * @secure
   */
  apiMmRequisitionListPost = (
    data: MmRequisitionQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMmRequisitionListPostData, any>({
      path: `/api/mm-requisition/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-requisition
   * @name ApiMmRequisitionPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/mm-requisition/paged-list
   * @secure
   */
  apiMmRequisitionPagedListPost = (
    data: MmRequisitionPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMmRequisitionPagedListPostData, any>({
      path: `/api/mm-requisition/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-requisition
   * @name ApiMmRequisitionShowPost
   * @summary 查询1个对象
   * @request POST:/api/mm-requisition/show
   * @secure
   */
  apiMmRequisitionShowPost = (
    data: MmRequisitionQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMmRequisitionShowPostData, any>({
      path: `/api/mm-requisition/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-requisition
   * @name ApiMmRequisitionSubmitRequisitionPost
   * @summary 提交领料申请
   * @request POST:/api/mm-requisition/submit-requisition
   * @secure
   */
  apiMmRequisitionSubmitRequisitionPost = (
    data: MmRequisitionFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMmRequisitionSubmitRequisitionPostData, any>({
      path: `/api/mm-requisition/submit-requisition`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-stock-in-out
   * @name ApiMmStockInOutApprovePost
   * @summary 审批出入库
   * @request POST:/api/mm-stock-in-out/approve
   * @secure
   */
  apiMmStockInOutApprovePost = (
    data: ApproveSioFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMmStockInOutApprovePostData, any>({
      path: `/api/mm-stock-in-out/approve`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-stock-in-out
   * @name ApiMmStockInOutListPost
   * @summary 查询全部对象
   * @request POST:/api/mm-stock-in-out/list
   * @secure
   */
  apiMmStockInOutListPost = (
    data: MmStockInOutQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMmStockInOutListPostData, any>({
      path: `/api/mm-stock-in-out/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-stock-in-out
   * @name ApiMmStockInOutPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/mm-stock-in-out/paged-list
   * @secure
   */
  apiMmStockInOutPagedListPost = (
    data: MmStockInOutPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMmStockInOutPagedListPostData, any>({
      path: `/api/mm-stock-in-out/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-stock-in-out
   * @name ApiMmStockInOutPendingApproveListPost
   * @summary 获取待审批列表
   * @request POST:/api/mm-stock-in-out/pending-approve-list
   * @secure
   */
  apiMmStockInOutPendingApproveListPost = (
    data: MmStockInOutPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMmStockInOutPendingApproveListPostData, any>({
      path: `/api/mm-stock-in-out/pending-approve-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-stock-in-out
   * @name ApiMmStockInOutShowPost
   * @summary 查询1个对象
   * @request POST:/api/mm-stock-in-out/show
   * @secure
   */
  apiMmStockInOutShowPost = (
    data: MmStockInOutQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMmStockInOutShowPostData, any>({
      path: `/api/mm-stock-in-out/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-stock-in-out
   * @name ApiMmStockInOutStockInPost
   * @summary 入库申请
   * @request POST:/api/mm-stock-in-out/stock-in
   * @secure
   */
  apiMmStockInOutStockInPost = (
    data: MmStockInOutFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMmStockInOutStockInPostData, any>({
      path: `/api/mm-stock-in-out/stock-in`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags mm-stock-in-out
   * @name ApiMmStockInOutStockOutPost
   * @summary 出库申请
   * @request POST:/api/mm-stock-in-out/stock-out
   * @secure
   */
  apiMmStockInOutStockOutPost = (
    data: MmStockInOutFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiMmStockInOutStockOutPostData, any>({
      path: `/api/mm-stock-in-out/stock-out`,
      method: "POST",
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
   * @tags report
   * @name ApiReportStwaGroupByDayPost
   * @summary 按日统计作业面积
   * @request POST:/api/report/stwa-group-by-day
   * @secure
   */
  apiReportStwaGroupByDayPost = (
    data: EsWorkPlanStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReportStwaGroupByDayPostData, any>({
      path: `/api/report/stwa-group-by-day`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags report
   * @name ApiReportStwaGroupByMonthPost
   * @summary 按月统计作业面积
   * @request POST:/api/report/stwa-group-by-month
   * @secure
   */
  apiReportStwaGroupByMonthPost = (
    data: EsWorkPlanStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReportStwaGroupByMonthPostData, any>({
      path: `/api/report/stwa-group-by-month`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags report
   * @name ApiReportStwaGroupByYearPost
   * @summary 按年统计作业面积
   * @request POST:/api/report/stwa-group-by-year
   * @secure
   */
  apiReportStwaGroupByYearPost = (
    data: EsWorkPlanStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReportStwaGroupByYearPostData, any>({
      path: `/api/report/stwa-group-by-year`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags report
   * @name ApiReportStwpGroupByGeneralPost
   * @summary 按作业方式统计排班记录数量
   * @request POST:/api/report/stwp-group-by-general
   * @secure
   */
  apiReportStwpGroupByGeneralPost = (
    data: StwpQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiReportStwpGroupByGeneralPostData, any>({
      path: `/api/report/stwp-group-by-general`,
      method: "POST",
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
   * @tags sys-notice
   * @name ApiSysNoticeAddPost
   * @summary 新增数据
   * @request POST:/api/sys-notice/add
   * @secure
   */
  apiSysNoticeAddPost = (data: SysNoticeFO, params: RequestParams = {}) =>
    this.http.request<ApiSysNoticeAddPostData, any>({
      path: `/api/sys-notice/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags sys-notice
   * @name ApiSysNoticeEditPost
   * @summary 编辑数据
   * @request POST:/api/sys-notice/edit
   * @secure
   */
  apiSysNoticeEditPost = (data: SysNoticeFO, params: RequestParams = {}) =>
    this.http.request<ApiSysNoticeEditPostData, any>({
      path: `/api/sys-notice/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags sys-notice
   * @name ApiSysNoticeListPost
   * @summary 查询全部对象
   * @request POST:/api/sys-notice/list
   * @secure
   */
  apiSysNoticeListPost = (data: SysNoticeQO, params: RequestParams = {}) =>
    this.http.request<ApiSysNoticeListPostData, any>({
      path: `/api/sys-notice/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags sys-notice
   * @name ApiSysNoticePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/sys-notice/paged-list
   * @secure
   */
  apiSysNoticePagedListPost = (
    data: SysNoticePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiSysNoticePagedListPostData, any>({
      path: `/api/sys-notice/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags sys-notice
   * @name ApiSysNoticeRemovePost
   * @summary 删除数据
   * @request POST:/api/sys-notice/remove
   * @secure
   */
  apiSysNoticeRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiSysNoticeRemovePostData, any>({
      path: `/api/sys-notice/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags sys-notice
   * @name ApiSysNoticeShowPost
   * @summary 查询1个对象
   * @request POST:/api/sys-notice/show
   * @secure
   */
  apiSysNoticeShowPost = (data: SysNoticeQO, params: RequestParams = {}) =>
    this.http.request<ApiSysNoticeShowPostData, any>({
      path: `/api/sys-notice/show`,
      method: "POST",
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
   * @name ApiUserCountByJobPost
   * @summary 根据职务统计
   * @request POST:/api/user/count-by-job
   * @secure
   */
  apiUserCountByJobPost = (params: RequestParams = {}) =>
    this.http.request<ApiUserCountByJobPostData, any>({
      path: `/api/user/count-by-job`,
      method: "POST",
      secure: true,
      format: "json",
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
   * @name ApiUserGetUserCountPost
   * @summary 获取用户数量
   * @request POST:/api/user/get-user-count
   * @secure
   */
  apiUserGetUserCountPost = (params: RequestParams = {}) =>
    this.http.request<ApiUserGetUserCountPostData, any>({
      path: `/api/user/get-user-count`,
      method: "POST",
      secure: true,
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
   * @name ApiUserPagedListWpPost
   * @summary 获取分页列表,带岗位
   * @request POST:/api/user/paged-list-wp
   * @secure
   */
  apiUserPagedListWpPost = (data: UserPQO, params: RequestParams = {}) =>
    this.http.request<ApiUserPagedListWpPostData, any>({
      path: `/api/user/paged-list-wp`,
      method: "POST",
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
