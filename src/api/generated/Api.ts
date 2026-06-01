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
  ApiBizCropsAddPostData,
  ApiBizCropsEditPostData,
  ApiBizCropsListPostData,
  ApiBizCropsPagedListPostData,
  ApiBizCropsRemovePostData,
  ApiBizCropsShowPostData,
  ApiBizCropsTypeAddPostData,
  ApiBizCropsTypeEditPostData,
  ApiBizCropsTypeListPostData,
  ApiBizCropsTypePagedListPostData,
  ApiBizCropsTypeRemoveMulPostData,
  ApiBizCropsTypeRemovePostData,
  ApiBizCropsTypeShowPostData,
  ApiBizDayTotalFlowAddPostData,
  ApiBizDayTotalFlowEditPostData,
  ApiBizDayTotalFlowExportExcelPostData,
  ApiBizDayTotalFlowListPostData,
  ApiBizDayTotalFlowPagedListPostData,
  ApiBizDayTotalFlowRemoveMulPostData,
  ApiBizDayTotalFlowRemovePostData,
  ApiBizDayTotalFlowShowPostData,
  ApiBizGrowStageAddPostData,
  ApiBizGrowStageEditPostData,
  ApiBizGrowStageListPostData,
  ApiBizGrowStagePagedListPostData,
  ApiBizGrowStageRemoveMulPostData,
  ApiBizGrowStageRemovePostData,
  ApiBizGrowStageShowPostData,
  ApiBizGysDispatchDocAddPostData,
  ApiBizGysDispatchDocEditPostData,
  ApiBizGysDispatchDocListPostData,
  ApiBizGysDispatchDocPagedListPostData,
  ApiBizGysDispatchDocRemovePostData,
  ApiBizGysDispatchDocShowPostData,
  ApiBizGysDispatchRecordAddPostData,
  ApiBizGysDispatchRecordEditPostData,
  ApiBizGysDispatchRecordListPostData,
  ApiBizGysDispatchRecordPagedListPostData,
  ApiBizGysDispatchRecordRemoveMulPostData,
  ApiBizGysDispatchRecordRemovePostData,
  ApiBizGysDispatchRecordShowPostData,
  ApiBizIrrigationDistrictAddPostData,
  ApiBizIrrigationDistrictEditPostData,
  ApiBizIrrigationDistrictListPostData,
  ApiBizIrrigationDistrictPagedListPostData,
  ApiBizIrrigationDistrictRemoveMulPostData,
  ApiBizIrrigationDistrictRemovePostData,
  ApiBizIrrigationDistrictShowPostData,
  ApiBizPlantingPlanAddPostData,
  ApiBizPlantingPlanEditPostData,
  ApiBizPlantingPlanListPostData,
  ApiBizPlantingPlanPagedListPostData,
  ApiBizPlantingPlanRemoveMulPostData,
  ApiBizPlantingPlanRemovePostData,
  ApiBizPlantingPlanShowPostData,
  ApiBizPlantingSchemeAddPostData,
  ApiBizPlantingSchemeEditPostData,
  ApiBizPlantingSchemeListPostData,
  ApiBizPlantingSchemePagedListPostData,
  ApiBizPlantingSchemeRemovePostData,
  ApiBizPlantingSchemeShowPostData,
  ApiBizPoliciyRegulationAddPostData,
  ApiBizPoliciyRegulationEditPostData,
  ApiBizPoliciyRegulationListPostData,
  ApiBizPoliciyRegulationPagedListPostData,
  ApiBizPoliciyRegulationRemovePostData,
  ApiBizPoliciyRegulationShowPostData,
  ApiBizWaterDemandPlanAddPostData,
  ApiBizWaterDemandPlanEditPostData,
  ApiBizWaterDemandPlanListPostData,
  ApiBizWaterDemandPlanPagedListPostData,
  ApiBizWaterDemandPlanRemoveMulPostData,
  ApiBizWaterDemandPlanRemovePostData,
  ApiBizWaterDemandPlanShowPostData,
  ApiBizWaterDistributionPlanAddPostData,
  ApiBizWaterDistributionPlanEditPostData,
  ApiBizWaterDistributionPlanListPostData,
  ApiBizWaterDistributionPlanPagedListPostData,
  ApiBizWaterDistributionPlanRemoveMulPostData,
  ApiBizWaterDistributionPlanRemovePostData,
  ApiBizWaterDistributionPlanShowPostData,
  ApiBizWaterEfficiencyRecordAddPostData,
  ApiBizWaterEfficiencyRecordEditPostData,
  ApiBizWaterEfficiencyRecordListPostData,
  ApiBizWaterEfficiencyRecordPagedListPostData,
  ApiBizWaterEfficiencyRecordRemoveMulPostData,
  ApiBizWaterEfficiencyRecordRemovePostData,
  ApiBizWaterEfficiencyRecordShowPostData,
  ApiBizYieldRecordAddPostData,
  ApiBizYieldRecordEditPostData,
  ApiBizYieldRecordListPostData,
  ApiBizYieldRecordPagedListPostData,
  ApiBizYieldRecordRemoveMulPostData,
  ApiBizYieldRecordRemovePostData,
  ApiBizYieldRecordShowPostData,
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
  ApiEquipmentOnlineInfoPostData,
  ApiEquipmentPagedListPostData,
  ApiEquipmentParamAddPostData,
  ApiEquipmentParamEditPostData,
  ApiEquipmentParamListPostData,
  ApiEquipmentParamPagedListPostData,
  ApiEquipmentParamRealTimeSwllPostData,
  ApiEquipmentParamRemoveMulPostData,
  ApiEquipmentParamRemovePostData,
  ApiEquipmentParamShowPostData,
  ApiEquipmentParamTreeDataPostData,
  ApiEquipmentRemoveMulPostData,
  ApiEquipmentRemovePostData,
  ApiEquipmentShowPostData,
  ApiKnowledegUserCollectAddPostData,
  ApiKnowledegUserCollectDeleteMulPostData,
  ApiKnowledegUserCollectDeletePostData,
  ApiKnowledegUserCollectKnowledgeUserCollectListPostData,
  ApiKnowledegUserCollectListPostData,
  ApiKnowledgeBaseFileAddPostData,
  ApiKnowledgeBaseFileAllKnowledgeListPostData,
  ApiKnowledgeBaseFileEditPostData,
  ApiKnowledgeBaseFileExportPostData,
  ApiKnowledgeBaseFileFileDisplayPostData,
  ApiKnowledgeBaseFileFileDownloadByIdGetData,
  ApiKnowledgeBaseFileFileDownloadByIdGetParams,
  ApiKnowledgeBaseFileFileDownloadPostData,
  ApiKnowledgeBaseFileFileDownloadPostPayload,
  ApiKnowledgeBaseFileHotKnowledgeListPostData,
  ApiKnowledgeBaseFileKnowledgeListPostData,
  ApiKnowledgeBaseFileRemovePostData,
  ApiKnowledgeCatalogueAddPostData,
  ApiKnowledgeCatalogueDataDisplayPostData,
  ApiKnowledgeCatalogueDataSortPostData,
  ApiKnowledgeCatalogueEditPostData,
  ApiKnowledgeCatalogueRemoveMulPostData,
  ApiKnowledgeCatalogueRemovePostData,
  ApiKnowledgeCatalogueTreeDataPostData,
  ApiKnowledgeFileAddPostData,
  ApiKnowledgeFileEditPostData,
  ApiKnowledgeFileListPostData,
  ApiKnowledgeFilePagedListPostData,
  ApiKnowledgeFileRemovePostData,
  ApiKnowledgeFileShowPostData,
  ApiKnowledgeFileTreedataPostData,
  ApiKnowledgeFileUploadPostData,
  ApiKnowledgeFileUploadPostPayload,
  ApiKnowledgeTypeAddPostData,
  ApiKnowledgeTypeAllListPostData,
  ApiKnowledgeTypeEditPostData,
  ApiKnowledgeTypeListPostData,
  ApiKnowledgeTypePagedListPostData,
  ApiKnowledgeTypeRemoveMulPostData,
  ApiKnowledgeTypeRemovePostData,
  ApiKnowledgeTypeShowPostData,
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
  ApiMdRecordAllListPostData,
  ApiMdRecordPagedListPostData,
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
  ApiPrealarmRecordPrealarmCountPostData,
  ApiPrealarmRecordRemoveMulPostData,
  ApiPrealarmRecordRemovePostData,
  ApiPrealarmRecordShowOnePostData,
  ApiPrealarmRecordShowPostData,
  ApiPrealarmRecordWhitePagedListPostData,
  ApiPrealarmRecordWhitelistPostData,
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
  ApiRegionAddPostData,
  ApiRegionEditPostData,
  ApiRegionListPostData,
  ApiRegionPagedListPostData,
  ApiRegionShowPostData,
  ApiRegionTreedataPostData,
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
  ApiTechnicsAddPostData,
  ApiTechnicsEditPostData,
  ApiTechnicsListPostData,
  ApiTechnicsPagedListPostData,
  ApiTechnicsRemoveMulPostData,
  ApiTechnicsRemovePostData,
  ApiTechnicsShowPostData,
  ApiTechnicsTypeAddPostData,
  ApiTechnicsTypeEditPostData,
  ApiTechnicsTypeListPostData,
  ApiTechnicsTypePagedListPostData,
  ApiTechnicsTypeRemoveMulPostData,
  ApiTechnicsTypeRemovePostData,
  ApiTechnicsTypeShowPostData,
  ApiTechnicsWhitePagedListPostData,
  ApiTechnicsWhitelistPostData,
  ApiUserAddPostData,
  ApiUserAssignRolesPostData,
  ApiUserAssignTechnicsesPostData,
  ApiUserAssignUsergroupsPostData,
  ApiUserEditPostData,
  ApiUserEditPwdPostData,
  ApiUserEditSelfPostData,
  ApiUserGetRolesPostData,
  ApiUserGetTechnicsesPostData,
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
  ApiUserRegionAddPostData,
  ApiUserRegionEditPostData,
  ApiUserRegionListPostData,
  ApiUserRegionPagedListPostData,
  ApiUserRegionRemoveMulPostData,
  ApiUserRegionRemovePostData,
  ApiUserRegionShowPostData,
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
  ApiWaterSupplyGroupByMonthPostData,
  ApiWaterSupplyGroupByYearPostData,
  ApiWeatherWeatherTokenPostData,
  AppVersionPQO,
  AppVersionQO,
  BizCropsFO,
  BizCropsPQO,
  BizCropsQO,
  BizCropsTypeFO,
  BizCropsTypePQO,
  BizCropsTypeQO,
  BizDayTotalFlowFO,
  BizDayTotalFlowPQO,
  BizDayTotalFlowQO,
  BizGrowStageFO,
  BizGrowStagePQO,
  BizGrowStageQO,
  BizGysDispatchDocFO,
  BizGysDispatchDocPQO,
  BizGysDispatchDocQO,
  BizGysDispatchRecordFO,
  BizGysDispatchRecordPQO,
  BizGysDispatchRecordQO,
  BizIrrigationDistrictFO,
  BizIrrigationDistrictPQO,
  BizIrrigationDistrictQO,
  BizPlantingPlanFO,
  BizPlantingPlanPQO,
  BizPlantingPlanQO,
  BizPlantingSchemeFO,
  BizPlantingSchemePQO,
  BizPlantingSchemeQO,
  BizPoliciyRegulationFO,
  BizPoliciyRegulationPQO,
  BizPoliciyRegulationQO,
  BizWaterDemandPlanFO,
  BizWaterDemandPlanPQO,
  BizWaterDemandPlanQO,
  BizWaterDistributionPlanFO,
  BizWaterDistributionPlanPQO,
  BizWaterDistributionPlanQO,
  BizWaterEfficiencyRecordFO,
  BizWaterEfficiencyRecordPQO,
  BizWaterEfficiencyRecordQO,
  BizYieldRecordFO,
  BizYieldRecordPQO,
  BizYieldRecordQO,
  DataDictionaryFO,
  DataDictionaryPQO,
  DataDictionaryQO,
  DdTypedataQO,
  EquipmentFO,
  EquipmentPQO,
  EquipmentParamFO,
  EquipmentParamPQO,
  EquipmentParamQO,
  EquipmentQO,
  KnowledegUserCollectFO,
  KnowledegUserCollectPQO,
  KnowledgeBaseFileDeleteQO,
  KnowledgeBaseFileFO,
  KnowledgeBaseFilePQO,
  KnowledgeBaseFileQO,
  KnowledgeCatalogueDataDisplayFO,
  KnowledgeCatalogueDataSortFO,
  KnowledgeCatalogueFO,
  KnowledgeCatalogueTreeFO,
  KnowledgeFilePQO,
  KnowledgeFileQO,
  KnowledgeTypeFO,
  KnowledgeTypePQO,
  KnowledgeTypeQO,
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
  MdRecordPQO,
  MdRecordQO,
  MessagePQO,
  MessageQO,
  OnlyIdQO,
  OnlyIrrIdQO,
  OnlyMsgIdList,
  OrganizationForm,
  OrganizationPQO,
  OrganizationQO,
  PrealarmRecordFO,
  PrealarmRecordPQO,
  PrealarmRecordQO,
  PrealarmRuleFO,
  PrealarmRulePQO,
  PrealarmRuleQO,
  RecordFilePQO,
  RecordFileQO,
  RegionFO,
  RegionPQO,
  RegionQO,
  RemoveMulQO,
  ReqIdsQO,
  ResourceForm,
  ResourcePQO,
  ResourceQO,
  RoleAssignResourcesQO,
  RoleFO,
  RolePQO,
  RoleQO,
  TechnicsFO,
  TechnicsPQO,
  TechnicsQO,
  TechnicsTypeFO,
  TechnicsTypePQO,
  TechnicsTypeQO,
  UpdateRpsQO,
  UserAssignRolesQO,
  UserAssignTechnicsesQO,
  UserAssignUsergroupsQO,
  UserForm,
  UserFormAdd,
  UserMessagePQO,
  UserMessageQO,
  UserPQO,
  UserQO,
  UserRegionFO,
  UserRegionPQO,
  UserRegionQO,
  UserResetPwdQO,
  UserSelfForm,
  UsergroupAssignRolesQO,
  UsergroupFO,
  UsergroupPQO,
  UsergroupQO,
  WaterSupplyStQO,
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
   * @tags biz-crops
   * @name ApiBizCropsAddPost
   * @summary 新增数据
   * @request POST:/api/biz-crops/add
   * @secure
   */
  apiBizCropsAddPost = (data: BizCropsFO, params: RequestParams = {}) =>
    this.http.request<ApiBizCropsAddPostData, any>({
      path: `/api/biz-crops/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-crops
   * @name ApiBizCropsEditPost
   * @summary 编辑数据
   * @request POST:/api/biz-crops/edit
   * @secure
   */
  apiBizCropsEditPost = (data: BizCropsFO, params: RequestParams = {}) =>
    this.http.request<ApiBizCropsEditPostData, any>({
      path: `/api/biz-crops/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-crops
   * @name ApiBizCropsListPost
   * @summary 查询全部对象
   * @request POST:/api/biz-crops/list
   * @secure
   */
  apiBizCropsListPost = (data: BizCropsQO, params: RequestParams = {}) =>
    this.http.request<ApiBizCropsListPostData, any>({
      path: `/api/biz-crops/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-crops
   * @name ApiBizCropsPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/biz-crops/paged-list
   * @secure
   */
  apiBizCropsPagedListPost = (data: BizCropsPQO, params: RequestParams = {}) =>
    this.http.request<ApiBizCropsPagedListPostData, any>({
      path: `/api/biz-crops/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-crops
   * @name ApiBizCropsRemovePost
   * @summary 删除数据
   * @request POST:/api/biz-crops/remove
   * @secure
   */
  apiBizCropsRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiBizCropsRemovePostData, any>({
      path: `/api/biz-crops/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-crops
   * @name ApiBizCropsShowPost
   * @summary 查询1个对象
   * @request POST:/api/biz-crops/show
   * @secure
   */
  apiBizCropsShowPost = (data: BizCropsQO, params: RequestParams = {}) =>
    this.http.request<ApiBizCropsShowPostData, any>({
      path: `/api/biz-crops/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-crops-type
   * @name ApiBizCropsTypeAddPost
   * @summary 新增数据
   * @request POST:/api/biz-crops-type/add
   * @secure
   */
  apiBizCropsTypeAddPost = (data: BizCropsTypeFO, params: RequestParams = {}) =>
    this.http.request<ApiBizCropsTypeAddPostData, any>({
      path: `/api/biz-crops-type/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-crops-type
   * @name ApiBizCropsTypeEditPost
   * @summary 编辑数据
   * @request POST:/api/biz-crops-type/edit
   * @secure
   */
  apiBizCropsTypeEditPost = (
    data: BizCropsTypeFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizCropsTypeEditPostData, any>({
      path: `/api/biz-crops-type/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-crops-type
   * @name ApiBizCropsTypeListPost
   * @summary 查询全部对象
   * @request POST:/api/biz-crops-type/list
   * @secure
   */
  apiBizCropsTypeListPost = (
    data: BizCropsTypeQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizCropsTypeListPostData, any>({
      path: `/api/biz-crops-type/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-crops-type
   * @name ApiBizCropsTypePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/biz-crops-type/paged-list
   * @secure
   */
  apiBizCropsTypePagedListPost = (
    data: BizCropsTypePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizCropsTypePagedListPostData, any>({
      path: `/api/biz-crops-type/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-crops-type
   * @name ApiBizCropsTypeRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/biz-crops-type/remove-mul
   * @secure
   */
  apiBizCropsTypeRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizCropsTypeRemoveMulPostData, any>({
      path: `/api/biz-crops-type/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-crops-type
   * @name ApiBizCropsTypeRemovePost
   * @summary 删除1条数据
   * @request POST:/api/biz-crops-type/remove
   * @secure
   */
  apiBizCropsTypeRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiBizCropsTypeRemovePostData, any>({
      path: `/api/biz-crops-type/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-crops-type
   * @name ApiBizCropsTypeShowPost
   * @summary 查询1个对象
   * @request POST:/api/biz-crops-type/show
   * @secure
   */
  apiBizCropsTypeShowPost = (
    data: BizCropsTypeQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizCropsTypeShowPostData, any>({
      path: `/api/biz-crops-type/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-day-total-flow
   * @name ApiBizDayTotalFlowAddPost
   * @summary 新增数据
   * @request POST:/api/biz-day-total-flow/add
   * @secure
   */
  apiBizDayTotalFlowAddPost = (
    data: BizDayTotalFlowFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizDayTotalFlowAddPostData, any>({
      path: `/api/biz-day-total-flow/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-day-total-flow
   * @name ApiBizDayTotalFlowEditPost
   * @summary 编辑数据
   * @request POST:/api/biz-day-total-flow/edit
   * @secure
   */
  apiBizDayTotalFlowEditPost = (
    data: BizDayTotalFlowFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizDayTotalFlowEditPostData, any>({
      path: `/api/biz-day-total-flow/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-day-total-flow
   * @name ApiBizDayTotalFlowExportExcelPost
   * @summary 导出
   * @request POST:/api/biz-day-total-flow/export-excel
   * @secure
   */
  apiBizDayTotalFlowExportExcelPost = (
    data: BizDayTotalFlowQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizDayTotalFlowExportExcelPostData, any>({
      path: `/api/biz-day-total-flow/export-excel`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-day-total-flow
   * @name ApiBizDayTotalFlowListPost
   * @summary 查询全部对象
   * @request POST:/api/biz-day-total-flow/list
   * @secure
   */
  apiBizDayTotalFlowListPost = (
    data: BizDayTotalFlowQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizDayTotalFlowListPostData, any>({
      path: `/api/biz-day-total-flow/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-day-total-flow
   * @name ApiBizDayTotalFlowPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/biz-day-total-flow/paged-list
   * @secure
   */
  apiBizDayTotalFlowPagedListPost = (
    data: BizDayTotalFlowPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizDayTotalFlowPagedListPostData, any>({
      path: `/api/biz-day-total-flow/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-day-total-flow
   * @name ApiBizDayTotalFlowRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/biz-day-total-flow/remove-mul
   * @secure
   */
  apiBizDayTotalFlowRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizDayTotalFlowRemoveMulPostData, any>({
      path: `/api/biz-day-total-flow/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-day-total-flow
   * @name ApiBizDayTotalFlowRemovePost
   * @summary 删除1条数据
   * @request POST:/api/biz-day-total-flow/remove
   * @secure
   */
  apiBizDayTotalFlowRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiBizDayTotalFlowRemovePostData, any>({
      path: `/api/biz-day-total-flow/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-day-total-flow
   * @name ApiBizDayTotalFlowShowPost
   * @summary 查询1个对象
   * @request POST:/api/biz-day-total-flow/show
   * @secure
   */
  apiBizDayTotalFlowShowPost = (
    data: BizDayTotalFlowQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizDayTotalFlowShowPostData, any>({
      path: `/api/biz-day-total-flow/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-grow-stage
   * @name ApiBizGrowStageAddPost
   * @summary 新增数据
   * @request POST:/api/biz-grow-stage/add
   * @secure
   */
  apiBizGrowStageAddPost = (data: BizGrowStageFO, params: RequestParams = {}) =>
    this.http.request<ApiBizGrowStageAddPostData, any>({
      path: `/api/biz-grow-stage/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-grow-stage
   * @name ApiBizGrowStageEditPost
   * @summary 编辑数据
   * @request POST:/api/biz-grow-stage/edit
   * @secure
   */
  apiBizGrowStageEditPost = (
    data: BizGrowStageFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizGrowStageEditPostData, any>({
      path: `/api/biz-grow-stage/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-grow-stage
   * @name ApiBizGrowStageListPost
   * @summary 查询全部对象
   * @request POST:/api/biz-grow-stage/list
   * @secure
   */
  apiBizGrowStageListPost = (
    data: BizGrowStageQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizGrowStageListPostData, any>({
      path: `/api/biz-grow-stage/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-grow-stage
   * @name ApiBizGrowStagePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/biz-grow-stage/paged-list
   * @secure
   */
  apiBizGrowStagePagedListPost = (
    data: BizGrowStagePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizGrowStagePagedListPostData, any>({
      path: `/api/biz-grow-stage/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-grow-stage
   * @name ApiBizGrowStageRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/biz-grow-stage/remove-mul
   * @secure
   */
  apiBizGrowStageRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizGrowStageRemoveMulPostData, any>({
      path: `/api/biz-grow-stage/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-grow-stage
   * @name ApiBizGrowStageRemovePost
   * @summary 删除1条数据
   * @request POST:/api/biz-grow-stage/remove
   * @secure
   */
  apiBizGrowStageRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiBizGrowStageRemovePostData, any>({
      path: `/api/biz-grow-stage/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-grow-stage
   * @name ApiBizGrowStageShowPost
   * @summary 查询1个对象
   * @request POST:/api/biz-grow-stage/show
   * @secure
   */
  apiBizGrowStageShowPost = (
    data: BizGrowStageQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizGrowStageShowPostData, any>({
      path: `/api/biz-grow-stage/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-gys-dispatch-doc
   * @name ApiBizGysDispatchDocAddPost
   * @summary 新增数据
   * @request POST:/api/biz-gys-dispatch-doc/add
   * @secure
   */
  apiBizGysDispatchDocAddPost = (
    data: BizGysDispatchDocFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizGysDispatchDocAddPostData, any>({
      path: `/api/biz-gys-dispatch-doc/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-gys-dispatch-doc
   * @name ApiBizGysDispatchDocEditPost
   * @summary 编辑数据
   * @request POST:/api/biz-gys-dispatch-doc/edit
   * @secure
   */
  apiBizGysDispatchDocEditPost = (
    data: BizGysDispatchDocFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizGysDispatchDocEditPostData, any>({
      path: `/api/biz-gys-dispatch-doc/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-gys-dispatch-doc
   * @name ApiBizGysDispatchDocListPost
   * @summary 查询全部对象
   * @request POST:/api/biz-gys-dispatch-doc/list
   * @secure
   */
  apiBizGysDispatchDocListPost = (
    data: BizGysDispatchDocQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizGysDispatchDocListPostData, any>({
      path: `/api/biz-gys-dispatch-doc/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-gys-dispatch-doc
   * @name ApiBizGysDispatchDocPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/biz-gys-dispatch-doc/paged-list
   * @secure
   */
  apiBizGysDispatchDocPagedListPost = (
    data: BizGysDispatchDocPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizGysDispatchDocPagedListPostData, any>({
      path: `/api/biz-gys-dispatch-doc/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-gys-dispatch-doc
   * @name ApiBizGysDispatchDocRemovePost
   * @summary 删除数据
   * @request POST:/api/biz-gys-dispatch-doc/remove
   * @secure
   */
  apiBizGysDispatchDocRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizGysDispatchDocRemovePostData, any>({
      path: `/api/biz-gys-dispatch-doc/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-gys-dispatch-doc
   * @name ApiBizGysDispatchDocShowPost
   * @summary 查询1个对象
   * @request POST:/api/biz-gys-dispatch-doc/show
   * @secure
   */
  apiBizGysDispatchDocShowPost = (
    data: BizGysDispatchDocQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizGysDispatchDocShowPostData, any>({
      path: `/api/biz-gys-dispatch-doc/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-gys-dispatch-record
   * @name ApiBizGysDispatchRecordAddPost
   * @summary 新增数据
   * @request POST:/api/biz-gys-dispatch-record/add
   * @secure
   */
  apiBizGysDispatchRecordAddPost = (
    data: BizGysDispatchRecordFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizGysDispatchRecordAddPostData, any>({
      path: `/api/biz-gys-dispatch-record/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-gys-dispatch-record
   * @name ApiBizGysDispatchRecordEditPost
   * @summary 编辑数据
   * @request POST:/api/biz-gys-dispatch-record/edit
   * @secure
   */
  apiBizGysDispatchRecordEditPost = (
    data: BizGysDispatchRecordFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizGysDispatchRecordEditPostData, any>({
      path: `/api/biz-gys-dispatch-record/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-gys-dispatch-record
   * @name ApiBizGysDispatchRecordListPost
   * @summary 查询全部对象
   * @request POST:/api/biz-gys-dispatch-record/list
   * @secure
   */
  apiBizGysDispatchRecordListPost = (
    data: BizGysDispatchRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizGysDispatchRecordListPostData, any>({
      path: `/api/biz-gys-dispatch-record/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-gys-dispatch-record
   * @name ApiBizGysDispatchRecordPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/biz-gys-dispatch-record/paged-list
   * @secure
   */
  apiBizGysDispatchRecordPagedListPost = (
    data: BizGysDispatchRecordPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizGysDispatchRecordPagedListPostData, any>({
      path: `/api/biz-gys-dispatch-record/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-gys-dispatch-record
   * @name ApiBizGysDispatchRecordRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/biz-gys-dispatch-record/remove-mul
   * @secure
   */
  apiBizGysDispatchRecordRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizGysDispatchRecordRemoveMulPostData, any>({
      path: `/api/biz-gys-dispatch-record/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-gys-dispatch-record
   * @name ApiBizGysDispatchRecordRemovePost
   * @summary 删除1条数据
   * @request POST:/api/biz-gys-dispatch-record/remove
   * @secure
   */
  apiBizGysDispatchRecordRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizGysDispatchRecordRemovePostData, any>({
      path: `/api/biz-gys-dispatch-record/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-gys-dispatch-record
   * @name ApiBizGysDispatchRecordShowPost
   * @summary 查询1个对象
   * @request POST:/api/biz-gys-dispatch-record/show
   * @secure
   */
  apiBizGysDispatchRecordShowPost = (
    data: BizGysDispatchRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizGysDispatchRecordShowPostData, any>({
      path: `/api/biz-gys-dispatch-record/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-irrigation-district
   * @name ApiBizIrrigationDistrictAddPost
   * @summary 新增数据
   * @request POST:/api/biz-irrigation-district/add
   * @secure
   */
  apiBizIrrigationDistrictAddPost = (
    data: BizIrrigationDistrictFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizIrrigationDistrictAddPostData, any>({
      path: `/api/biz-irrigation-district/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-irrigation-district
   * @name ApiBizIrrigationDistrictEditPost
   * @summary 编辑数据
   * @request POST:/api/biz-irrigation-district/edit
   * @secure
   */
  apiBizIrrigationDistrictEditPost = (
    data: BizIrrigationDistrictFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizIrrigationDistrictEditPostData, any>({
      path: `/api/biz-irrigation-district/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-irrigation-district
   * @name ApiBizIrrigationDistrictListPost
   * @summary 查询全部对象
   * @request POST:/api/biz-irrigation-district/list
   * @secure
   */
  apiBizIrrigationDistrictListPost = (
    data: BizIrrigationDistrictQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizIrrigationDistrictListPostData, any>({
      path: `/api/biz-irrigation-district/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-irrigation-district
   * @name ApiBizIrrigationDistrictPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/biz-irrigation-district/paged-list
   * @secure
   */
  apiBizIrrigationDistrictPagedListPost = (
    data: BizIrrigationDistrictPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizIrrigationDistrictPagedListPostData, any>({
      path: `/api/biz-irrigation-district/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-irrigation-district
   * @name ApiBizIrrigationDistrictRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/biz-irrigation-district/remove-mul
   * @secure
   */
  apiBizIrrigationDistrictRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizIrrigationDistrictRemoveMulPostData, any>({
      path: `/api/biz-irrigation-district/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-irrigation-district
   * @name ApiBizIrrigationDistrictRemovePost
   * @summary 删除1条数据
   * @request POST:/api/biz-irrigation-district/remove
   * @secure
   */
  apiBizIrrigationDistrictRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizIrrigationDistrictRemovePostData, any>({
      path: `/api/biz-irrigation-district/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-irrigation-district
   * @name ApiBizIrrigationDistrictShowPost
   * @summary 查询1个对象
   * @request POST:/api/biz-irrigation-district/show
   * @secure
   */
  apiBizIrrigationDistrictShowPost = (
    data: BizIrrigationDistrictQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizIrrigationDistrictShowPostData, any>({
      path: `/api/biz-irrigation-district/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-planting-plan
   * @name ApiBizPlantingPlanAddPost
   * @summary 新增数据
   * @request POST:/api/biz-planting-plan/add
   * @secure
   */
  apiBizPlantingPlanAddPost = (
    data: BizPlantingPlanFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizPlantingPlanAddPostData, any>({
      path: `/api/biz-planting-plan/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-planting-plan
   * @name ApiBizPlantingPlanEditPost
   * @summary 编辑数据
   * @request POST:/api/biz-planting-plan/edit
   * @secure
   */
  apiBizPlantingPlanEditPost = (
    data: BizPlantingPlanFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizPlantingPlanEditPostData, any>({
      path: `/api/biz-planting-plan/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-planting-plan
   * @name ApiBizPlantingPlanListPost
   * @summary 查询全部对象
   * @request POST:/api/biz-planting-plan/list
   * @secure
   */
  apiBizPlantingPlanListPost = (
    data: BizPlantingPlanQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizPlantingPlanListPostData, any>({
      path: `/api/biz-planting-plan/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-planting-plan
   * @name ApiBizPlantingPlanPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/biz-planting-plan/paged-list
   * @secure
   */
  apiBizPlantingPlanPagedListPost = (
    data: BizPlantingPlanPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizPlantingPlanPagedListPostData, any>({
      path: `/api/biz-planting-plan/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-planting-plan
   * @name ApiBizPlantingPlanRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/biz-planting-plan/remove-mul
   * @secure
   */
  apiBizPlantingPlanRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizPlantingPlanRemoveMulPostData, any>({
      path: `/api/biz-planting-plan/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-planting-plan
   * @name ApiBizPlantingPlanRemovePost
   * @summary 删除1条数据
   * @request POST:/api/biz-planting-plan/remove
   * @secure
   */
  apiBizPlantingPlanRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiBizPlantingPlanRemovePostData, any>({
      path: `/api/biz-planting-plan/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-planting-plan
   * @name ApiBizPlantingPlanShowPost
   * @summary 查询1个对象
   * @request POST:/api/biz-planting-plan/show
   * @secure
   */
  apiBizPlantingPlanShowPost = (
    data: BizPlantingPlanQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizPlantingPlanShowPostData, any>({
      path: `/api/biz-planting-plan/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-planting-scheme
   * @name ApiBizPlantingSchemeAddPost
   * @summary 新增数据
   * @request POST:/api/biz-planting-scheme/add
   * @secure
   */
  apiBizPlantingSchemeAddPost = (
    data: BizPlantingSchemeFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizPlantingSchemeAddPostData, any>({
      path: `/api/biz-planting-scheme/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-planting-scheme
   * @name ApiBizPlantingSchemeEditPost
   * @summary 编辑数据
   * @request POST:/api/biz-planting-scheme/edit
   * @secure
   */
  apiBizPlantingSchemeEditPost = (
    data: BizPlantingSchemeFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizPlantingSchemeEditPostData, any>({
      path: `/api/biz-planting-scheme/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-planting-scheme
   * @name ApiBizPlantingSchemeListPost
   * @summary 查询全部对象
   * @request POST:/api/biz-planting-scheme/list
   * @secure
   */
  apiBizPlantingSchemeListPost = (
    data: BizPlantingSchemeQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizPlantingSchemeListPostData, any>({
      path: `/api/biz-planting-scheme/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-planting-scheme
   * @name ApiBizPlantingSchemePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/biz-planting-scheme/paged-list
   * @secure
   */
  apiBizPlantingSchemePagedListPost = (
    data: BizPlantingSchemePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizPlantingSchemePagedListPostData, any>({
      path: `/api/biz-planting-scheme/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-planting-scheme
   * @name ApiBizPlantingSchemeRemovePost
   * @summary 删除数据
   * @request POST:/api/biz-planting-scheme/remove
   * @secure
   */
  apiBizPlantingSchemeRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizPlantingSchemeRemovePostData, any>({
      path: `/api/biz-planting-scheme/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-planting-scheme
   * @name ApiBizPlantingSchemeShowPost
   * @summary 查询1个对象
   * @request POST:/api/biz-planting-scheme/show
   * @secure
   */
  apiBizPlantingSchemeShowPost = (
    data: BizPlantingSchemeQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizPlantingSchemeShowPostData, any>({
      path: `/api/biz-planting-scheme/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-policiy-regulation
   * @name ApiBizPoliciyRegulationAddPost
   * @summary 新增数据
   * @request POST:/api/biz-policiy-regulation/add
   * @secure
   */
  apiBizPoliciyRegulationAddPost = (
    data: BizPoliciyRegulationFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizPoliciyRegulationAddPostData, any>({
      path: `/api/biz-policiy-regulation/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-policiy-regulation
   * @name ApiBizPoliciyRegulationEditPost
   * @summary 编辑数据
   * @request POST:/api/biz-policiy-regulation/edit
   * @secure
   */
  apiBizPoliciyRegulationEditPost = (
    data: BizPoliciyRegulationFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizPoliciyRegulationEditPostData, any>({
      path: `/api/biz-policiy-regulation/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-policiy-regulation
   * @name ApiBizPoliciyRegulationListPost
   * @summary 查询全部对象
   * @request POST:/api/biz-policiy-regulation/list
   * @secure
   */
  apiBizPoliciyRegulationListPost = (
    data: BizPoliciyRegulationQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizPoliciyRegulationListPostData, any>({
      path: `/api/biz-policiy-regulation/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-policiy-regulation
   * @name ApiBizPoliciyRegulationPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/biz-policiy-regulation/paged-list
   * @secure
   */
  apiBizPoliciyRegulationPagedListPost = (
    data: BizPoliciyRegulationPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizPoliciyRegulationPagedListPostData, any>({
      path: `/api/biz-policiy-regulation/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-policiy-regulation
   * @name ApiBizPoliciyRegulationRemovePost
   * @summary 删除数据
   * @request POST:/api/biz-policiy-regulation/remove
   * @secure
   */
  apiBizPoliciyRegulationRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizPoliciyRegulationRemovePostData, any>({
      path: `/api/biz-policiy-regulation/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-policiy-regulation
   * @name ApiBizPoliciyRegulationShowPost
   * @summary 查询1个对象
   * @request POST:/api/biz-policiy-regulation/show
   * @secure
   */
  apiBizPoliciyRegulationShowPost = (
    data: BizPoliciyRegulationQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizPoliciyRegulationShowPostData, any>({
      path: `/api/biz-policiy-regulation/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-water-demand-plan
   * @name ApiBizWaterDemandPlanAddPost
   * @summary 新增数据
   * @request POST:/api/biz-water-demand-plan/add
   * @secure
   */
  apiBizWaterDemandPlanAddPost = (
    data: BizWaterDemandPlanFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizWaterDemandPlanAddPostData, any>({
      path: `/api/biz-water-demand-plan/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-water-demand-plan
   * @name ApiBizWaterDemandPlanEditPost
   * @summary 编辑数据
   * @request POST:/api/biz-water-demand-plan/edit
   * @secure
   */
  apiBizWaterDemandPlanEditPost = (
    data: BizWaterDemandPlanFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizWaterDemandPlanEditPostData, any>({
      path: `/api/biz-water-demand-plan/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-water-demand-plan
   * @name ApiBizWaterDemandPlanListPost
   * @summary 查询全部对象
   * @request POST:/api/biz-water-demand-plan/list
   * @secure
   */
  apiBizWaterDemandPlanListPost = (
    data: BizWaterDemandPlanQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizWaterDemandPlanListPostData, any>({
      path: `/api/biz-water-demand-plan/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-water-demand-plan
   * @name ApiBizWaterDemandPlanPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/biz-water-demand-plan/paged-list
   * @secure
   */
  apiBizWaterDemandPlanPagedListPost = (
    data: BizWaterDemandPlanPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizWaterDemandPlanPagedListPostData, any>({
      path: `/api/biz-water-demand-plan/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-water-demand-plan
   * @name ApiBizWaterDemandPlanRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/biz-water-demand-plan/remove-mul
   * @secure
   */
  apiBizWaterDemandPlanRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizWaterDemandPlanRemoveMulPostData, any>({
      path: `/api/biz-water-demand-plan/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-water-demand-plan
   * @name ApiBizWaterDemandPlanRemovePost
   * @summary 删除1条数据
   * @request POST:/api/biz-water-demand-plan/remove
   * @secure
   */
  apiBizWaterDemandPlanRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizWaterDemandPlanRemovePostData, any>({
      path: `/api/biz-water-demand-plan/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-water-demand-plan
   * @name ApiBizWaterDemandPlanShowPost
   * @summary 查询1个对象
   * @request POST:/api/biz-water-demand-plan/show
   * @secure
   */
  apiBizWaterDemandPlanShowPost = (
    data: BizWaterDemandPlanQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizWaterDemandPlanShowPostData, any>({
      path: `/api/biz-water-demand-plan/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-water-distribution-plan
   * @name ApiBizWaterDistributionPlanAddPost
   * @summary 新增数据
   * @request POST:/api/biz-water-distribution-plan/add
   * @secure
   */
  apiBizWaterDistributionPlanAddPost = (
    data: BizWaterDistributionPlanFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizWaterDistributionPlanAddPostData, any>({
      path: `/api/biz-water-distribution-plan/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-water-distribution-plan
   * @name ApiBizWaterDistributionPlanEditPost
   * @summary 编辑数据
   * @request POST:/api/biz-water-distribution-plan/edit
   * @secure
   */
  apiBizWaterDistributionPlanEditPost = (
    data: BizWaterDistributionPlanFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizWaterDistributionPlanEditPostData, any>({
      path: `/api/biz-water-distribution-plan/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-water-distribution-plan
   * @name ApiBizWaterDistributionPlanListPost
   * @summary 查询全部对象
   * @request POST:/api/biz-water-distribution-plan/list
   * @secure
   */
  apiBizWaterDistributionPlanListPost = (
    data: BizWaterDistributionPlanQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizWaterDistributionPlanListPostData, any>({
      path: `/api/biz-water-distribution-plan/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-water-distribution-plan
   * @name ApiBizWaterDistributionPlanPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/biz-water-distribution-plan/paged-list
   * @secure
   */
  apiBizWaterDistributionPlanPagedListPost = (
    data: BizWaterDistributionPlanPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizWaterDistributionPlanPagedListPostData, any>({
      path: `/api/biz-water-distribution-plan/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-water-distribution-plan
   * @name ApiBizWaterDistributionPlanRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/biz-water-distribution-plan/remove-mul
   * @secure
   */
  apiBizWaterDistributionPlanRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizWaterDistributionPlanRemoveMulPostData, any>({
      path: `/api/biz-water-distribution-plan/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-water-distribution-plan
   * @name ApiBizWaterDistributionPlanRemovePost
   * @summary 删除1条数据
   * @request POST:/api/biz-water-distribution-plan/remove
   * @secure
   */
  apiBizWaterDistributionPlanRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizWaterDistributionPlanRemovePostData, any>({
      path: `/api/biz-water-distribution-plan/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-water-distribution-plan
   * @name ApiBizWaterDistributionPlanShowPost
   * @summary 查询1个对象
   * @request POST:/api/biz-water-distribution-plan/show
   * @secure
   */
  apiBizWaterDistributionPlanShowPost = (
    data: BizWaterDistributionPlanQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizWaterDistributionPlanShowPostData, any>({
      path: `/api/biz-water-distribution-plan/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-water-efficiency-record
   * @name ApiBizWaterEfficiencyRecordAddPost
   * @summary 新增数据
   * @request POST:/api/biz-water-efficiency-record/add
   * @secure
   */
  apiBizWaterEfficiencyRecordAddPost = (
    data: BizWaterEfficiencyRecordFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizWaterEfficiencyRecordAddPostData, any>({
      path: `/api/biz-water-efficiency-record/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-water-efficiency-record
   * @name ApiBizWaterEfficiencyRecordEditPost
   * @summary 编辑数据
   * @request POST:/api/biz-water-efficiency-record/edit
   * @secure
   */
  apiBizWaterEfficiencyRecordEditPost = (
    data: BizWaterEfficiencyRecordFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizWaterEfficiencyRecordEditPostData, any>({
      path: `/api/biz-water-efficiency-record/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-water-efficiency-record
   * @name ApiBizWaterEfficiencyRecordListPost
   * @summary 查询全部对象
   * @request POST:/api/biz-water-efficiency-record/list
   * @secure
   */
  apiBizWaterEfficiencyRecordListPost = (
    data: BizWaterEfficiencyRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizWaterEfficiencyRecordListPostData, any>({
      path: `/api/biz-water-efficiency-record/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-water-efficiency-record
   * @name ApiBizWaterEfficiencyRecordPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/biz-water-efficiency-record/paged-list
   * @secure
   */
  apiBizWaterEfficiencyRecordPagedListPost = (
    data: BizWaterEfficiencyRecordPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizWaterEfficiencyRecordPagedListPostData, any>({
      path: `/api/biz-water-efficiency-record/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-water-efficiency-record
   * @name ApiBizWaterEfficiencyRecordRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/biz-water-efficiency-record/remove-mul
   * @secure
   */
  apiBizWaterEfficiencyRecordRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizWaterEfficiencyRecordRemoveMulPostData, any>({
      path: `/api/biz-water-efficiency-record/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-water-efficiency-record
   * @name ApiBizWaterEfficiencyRecordRemovePost
   * @summary 删除1条数据
   * @request POST:/api/biz-water-efficiency-record/remove
   * @secure
   */
  apiBizWaterEfficiencyRecordRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizWaterEfficiencyRecordRemovePostData, any>({
      path: `/api/biz-water-efficiency-record/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-water-efficiency-record
   * @name ApiBizWaterEfficiencyRecordShowPost
   * @summary 查询1个对象
   * @request POST:/api/biz-water-efficiency-record/show
   * @secure
   */
  apiBizWaterEfficiencyRecordShowPost = (
    data: BizWaterEfficiencyRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizWaterEfficiencyRecordShowPostData, any>({
      path: `/api/biz-water-efficiency-record/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-yield-record
   * @name ApiBizYieldRecordAddPost
   * @summary 新增数据
   * @request POST:/api/biz-yield-record/add
   * @secure
   */
  apiBizYieldRecordAddPost = (
    data: BizYieldRecordFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizYieldRecordAddPostData, any>({
      path: `/api/biz-yield-record/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-yield-record
   * @name ApiBizYieldRecordEditPost
   * @summary 编辑数据
   * @request POST:/api/biz-yield-record/edit
   * @secure
   */
  apiBizYieldRecordEditPost = (
    data: BizYieldRecordFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizYieldRecordEditPostData, any>({
      path: `/api/biz-yield-record/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-yield-record
   * @name ApiBizYieldRecordListPost
   * @summary 查询全部对象
   * @request POST:/api/biz-yield-record/list
   * @secure
   */
  apiBizYieldRecordListPost = (
    data: BizYieldRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizYieldRecordListPostData, any>({
      path: `/api/biz-yield-record/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-yield-record
   * @name ApiBizYieldRecordPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/biz-yield-record/paged-list
   * @secure
   */
  apiBizYieldRecordPagedListPost = (
    data: BizYieldRecordPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizYieldRecordPagedListPostData, any>({
      path: `/api/biz-yield-record/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-yield-record
   * @name ApiBizYieldRecordRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/biz-yield-record/remove-mul
   * @secure
   */
  apiBizYieldRecordRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizYieldRecordRemoveMulPostData, any>({
      path: `/api/biz-yield-record/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-yield-record
   * @name ApiBizYieldRecordRemovePost
   * @summary 删除1条数据
   * @request POST:/api/biz-yield-record/remove
   * @secure
   */
  apiBizYieldRecordRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiBizYieldRecordRemovePostData, any>({
      path: `/api/biz-yield-record/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags biz-yield-record
   * @name ApiBizYieldRecordShowPost
   * @summary 查询1个对象
   * @request POST:/api/biz-yield-record/show
   * @secure
   */
  apiBizYieldRecordShowPost = (
    data: BizYieldRecordQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiBizYieldRecordShowPostData, any>({
      path: `/api/biz-yield-record/show`,
      method: "POST",
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
   * @name ApiEquipmentParamRealTimeSwllPost
   * @summary 查询实时水位流量
   * @request POST:/api/equipment-param/real-time-swll
   * @secure
   */
  apiEquipmentParamRealTimeSwllPost = (
    data: OnlyIrrIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamRealTimeSwllPostData, any>({
      path: `/api/equipment-param/real-time-swll`,
      method: "POST",
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
   * @tags equipment-param
   * @name ApiEquipmentParamTreeDataPost
   * @summary 查询树形结构
   * @request POST:/api/equipment-param/tree-data
   * @secure
   */
  apiEquipmentParamTreeDataPost = (
    data: EquipmentParamQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiEquipmentParamTreeDataPostData, any>({
      path: `/api/equipment-param/tree-data`,
      method: "POST",
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
   * @tags knowledeg-user-collect
   * @name ApiKnowledegUserCollectAddPost
   * @summary 新增
   * @request POST:/api/knowledeg-user-collect/add
   * @secure
   */
  apiKnowledegUserCollectAddPost = (
    data: KnowledegUserCollectFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledegUserCollectAddPostData, any>({
      path: `/api/knowledeg-user-collect/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledeg-user-collect
   * @name ApiKnowledegUserCollectDeleteMulPost
   * @summary 批量删除
   * @request POST:/api/knowledeg-user-collect/delete-mul
   * @secure
   */
  apiKnowledegUserCollectDeleteMulPost = (
    data: KnowledegUserCollectFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledegUserCollectDeleteMulPostData, any>({
      path: `/api/knowledeg-user-collect/delete-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledeg-user-collect
   * @name ApiKnowledegUserCollectDeletePost
   * @summary 删除
   * @request POST:/api/knowledeg-user-collect/delete
   * @secure
   */
  apiKnowledegUserCollectDeletePost = (
    data: KnowledegUserCollectFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledegUserCollectDeletePostData, any>({
      path: `/api/knowledeg-user-collect/delete`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledeg-user-collect
   * @name ApiKnowledegUserCollectKnowledgeUserCollectListPost
   * @summary 获取用户收藏知识库文件列表
   * @request POST:/api/knowledeg-user-collect/knowledge-user-collect-list
   * @secure
   */
  apiKnowledegUserCollectKnowledgeUserCollectListPost = (
    data: KnowledegUserCollectPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<
      ApiKnowledegUserCollectKnowledgeUserCollectListPostData,
      any
    >({
      path: `/api/knowledeg-user-collect/knowledge-user-collect-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledeg-user-collect
   * @name ApiKnowledegUserCollectListPost
   * @summary 批量收藏
   * @request POST:/api/knowledeg-user-collect/list
   * @secure
   */
  apiKnowledegUserCollectListPost = (
    data: KnowledegUserCollectFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledegUserCollectListPostData, any>({
      path: `/api/knowledeg-user-collect/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-base-file
   * @name ApiKnowledgeBaseFileAddPost
   * @summary 新增数据
   * @request POST:/api/knowledge-base-file/add
   * @secure
   */
  apiKnowledgeBaseFileAddPost = (
    data: KnowledgeBaseFileFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeBaseFileAddPostData, any>({
      path: `/api/knowledge-base-file/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-base-file
   * @name ApiKnowledgeBaseFileAllKnowledgeListPost
   * @summary 知识管理列表
   * @request POST:/api/knowledge-base-file/all-knowledge-list
   * @secure
   */
  apiKnowledgeBaseFileAllKnowledgeListPost = (
    data: KnowledgeBaseFilePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeBaseFileAllKnowledgeListPostData, any>({
      path: `/api/knowledge-base-file/all-knowledge-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-base-file
   * @name ApiKnowledgeBaseFileEditPost
   * @summary 编辑数据
   * @request POST:/api/knowledge-base-file/edit
   * @secure
   */
  apiKnowledgeBaseFileEditPost = (
    data: KnowledgeBaseFileFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeBaseFileEditPostData, any>({
      path: `/api/knowledge-base-file/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-base-file
   * @name ApiKnowledgeBaseFileExportPost
   * @summary 批量导出
   * @request POST:/api/knowledge-base-file/export
   * @secure
   */
  apiKnowledgeBaseFileExportPost = (
    data: KnowledgeBaseFileQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeBaseFileExportPostData, any>({
      path: `/api/knowledge-base-file/export`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-base-file
   * @name ApiKnowledgeBaseFileFileDisplayPost
   * @summary 批量隐藏显示
   * @request POST:/api/knowledge-base-file/file-display
   * @secure
   */
  apiKnowledgeBaseFileFileDisplayPost = (
    data: KnowledgeBaseFileFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeBaseFileFileDisplayPostData, any>({
      path: `/api/knowledge-base-file/file-display`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-base-file
   * @name ApiKnowledgeBaseFileFileDownloadByIdGet
   * @summary 文件下载
   * @request GET:/api/knowledge-base-file/file-download-by-id
   * @secure
   */
  apiKnowledgeBaseFileFileDownloadByIdGet = (
    query: ApiKnowledgeBaseFileFileDownloadByIdGetParams,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeBaseFileFileDownloadByIdGetData, any>({
      path: `/api/knowledge-base-file/file-download-by-id`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-base-file
   * @name ApiKnowledgeBaseFileFileDownloadPost
   * @summary 批量下载
   * @request POST:/api/knowledge-base-file/file-download
   * @secure
   */
  apiKnowledgeBaseFileFileDownloadPost = (
    data: ApiKnowledgeBaseFileFileDownloadPostPayload,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeBaseFileFileDownloadPostData, any>({
      path: `/api/knowledge-base-file/file-download`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-base-file
   * @name ApiKnowledgeBaseFileHotKnowledgeListPost
   * @summary 热门知识推荐列表
   * @request POST:/api/knowledge-base-file/hot-knowledge-list
   * @secure
   */
  apiKnowledgeBaseFileHotKnowledgeListPost = (
    data: KnowledgeBaseFileQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeBaseFileHotKnowledgeListPostData, any>({
      path: `/api/knowledge-base-file/hot-knowledge-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-base-file
   * @name ApiKnowledgeBaseFileKnowledgeListPost
   * @summary 列表查询
   * @request POST:/api/knowledge-base-file/knowledge-list
   * @secure
   */
  apiKnowledgeBaseFileKnowledgeListPost = (
    data: KnowledgeBaseFilePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeBaseFileKnowledgeListPostData, any>({
      path: `/api/knowledge-base-file/knowledge-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-base-file
   * @name ApiKnowledgeBaseFileRemovePost
   * @summary 删除数据
   * @request POST:/api/knowledge-base-file/remove
   * @secure
   */
  apiKnowledgeBaseFileRemovePost = (
    data: KnowledgeBaseFileDeleteQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeBaseFileRemovePostData, any>({
      path: `/api/knowledge-base-file/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-catalogue
   * @name ApiKnowledgeCatalogueAddPost
   * @summary 新增数据
   * @request POST:/api/knowledge-catalogue/add
   * @secure
   */
  apiKnowledgeCatalogueAddPost = (
    data: KnowledgeCatalogueFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeCatalogueAddPostData, any>({
      path: `/api/knowledge-catalogue/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-catalogue
   * @name ApiKnowledgeCatalogueDataDisplayPost
   * @summary 知识目录隐藏
   * @request POST:/api/knowledge-catalogue/data-display
   * @secure
   */
  apiKnowledgeCatalogueDataDisplayPost = (
    data: KnowledgeCatalogueDataDisplayFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeCatalogueDataDisplayPostData, any>({
      path: `/api/knowledge-catalogue/data-display`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-catalogue
   * @name ApiKnowledgeCatalogueDataSortPost
   * @summary 知识目录排序
   * @request POST:/api/knowledge-catalogue/data-sort
   * @secure
   */
  apiKnowledgeCatalogueDataSortPost = (
    data: KnowledgeCatalogueDataSortFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeCatalogueDataSortPostData, any>({
      path: `/api/knowledge-catalogue/data-sort`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-catalogue
   * @name ApiKnowledgeCatalogueEditPost
   * @summary 编辑数据
   * @request POST:/api/knowledge-catalogue/edit
   * @secure
   */
  apiKnowledgeCatalogueEditPost = (
    data: KnowledgeCatalogueFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeCatalogueEditPostData, any>({
      path: `/api/knowledge-catalogue/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-catalogue
   * @name ApiKnowledgeCatalogueRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/knowledge-catalogue/remove-mul
   * @secure
   */
  apiKnowledgeCatalogueRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeCatalogueRemoveMulPostData, any>({
      path: `/api/knowledge-catalogue/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-catalogue
   * @name ApiKnowledgeCatalogueRemovePost
   * @summary 删除1条数据
   * @request POST:/api/knowledge-catalogue/remove
   * @secure
   */
  apiKnowledgeCatalogueRemovePost = (
    data: OnlyIdQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeCatalogueRemovePostData, any>({
      path: `/api/knowledge-catalogue/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-catalogue
   * @name ApiKnowledgeCatalogueTreeDataPost
   * @summary 获取树形结构数据
   * @request POST:/api/knowledge-catalogue/tree-data
   * @secure
   */
  apiKnowledgeCatalogueTreeDataPost = (
    data: KnowledgeCatalogueTreeFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeCatalogueTreeDataPostData, any>({
      path: `/api/knowledge-catalogue/tree-data`,
      method: "POST",
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
   * @tags knowledge-type
   * @name ApiKnowledgeTypeAddPost
   * @summary 新增数据
   * @request POST:/api/knowledge-type/add
   * @secure
   */
  apiKnowledgeTypeAddPost = (
    data: KnowledgeTypeFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeTypeAddPostData, any>({
      path: `/api/knowledge-type/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-type
   * @name ApiKnowledgeTypeAllListPost
   * @summary 查询全部数据
   * @request POST:/api/knowledge-type/all-list
   * @secure
   */
  apiKnowledgeTypeAllListPost = (
    data: KnowledgeTypeQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeTypeAllListPostData, any>({
      path: `/api/knowledge-type/all-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-type
   * @name ApiKnowledgeTypeEditPost
   * @summary 编辑数据
   * @request POST:/api/knowledge-type/edit
   * @secure
   */
  apiKnowledgeTypeEditPost = (
    data: KnowledgeTypeFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeTypeEditPostData, any>({
      path: `/api/knowledge-type/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-type
   * @name ApiKnowledgeTypeListPost
   * @summary 查询全部对象
   * @request POST:/api/knowledge-type/list
   * @secure
   */
  apiKnowledgeTypeListPost = (
    data: KnowledgeTypeQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeTypeListPostData, any>({
      path: `/api/knowledge-type/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-type
   * @name ApiKnowledgeTypePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/knowledge-type/paged-list
   * @secure
   */
  apiKnowledgeTypePagedListPost = (
    data: KnowledgeTypePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeTypePagedListPostData, any>({
      path: `/api/knowledge-type/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-type
   * @name ApiKnowledgeTypeRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/knowledge-type/remove-mul
   * @secure
   */
  apiKnowledgeTypeRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeTypeRemoveMulPostData, any>({
      path: `/api/knowledge-type/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-type
   * @name ApiKnowledgeTypeRemovePost
   * @summary 删除1条数据
   * @request POST:/api/knowledge-type/remove
   * @secure
   */
  apiKnowledgeTypeRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiKnowledgeTypeRemovePostData, any>({
      path: `/api/knowledge-type/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags knowledge-type
   * @name ApiKnowledgeTypeShowPost
   * @summary 查询1个对象
   * @request POST:/api/knowledge-type/show
   * @secure
   */
  apiKnowledgeTypeShowPost = (
    data: KnowledgeTypeQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiKnowledgeTypeShowPostData, any>({
      path: `/api/knowledge-type/show`,
      method: "POST",
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
   * @tags md-record
   * @name ApiMdRecordAllListPost
   * @summary 所有数据
   * @request POST:/api/md-record/all-list
   * @secure
   */
  apiMdRecordAllListPost = (data: MdRecordQO, params: RequestParams = {}) =>
    this.http.request<ApiMdRecordAllListPostData, any>({
      path: `/api/md-record/all-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags md-record
   * @name ApiMdRecordPagedListPost
   * @summary 分页数据
   * @request POST:/api/md-record/paged-list
   * @secure
   */
  apiMdRecordPagedListPost = (data: MdRecordPQO, params: RequestParams = {}) =>
    this.http.request<ApiMdRecordPagedListPostData, any>({
      path: `/api/md-record/paged-list`,
      method: "POST",
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
   * @name ApiPrealarmRecordPrealarmCountPost
   * @summary 预警事件统计
   * @request POST:/api/prealarm-record/prealarm-count
   * @secure
   */
  apiPrealarmRecordPrealarmCountPost = (params: RequestParams = {}) =>
    this.http.request<ApiPrealarmRecordPrealarmCountPostData, any>({
      path: `/api/prealarm-record/prealarm-count`,
      method: "POST",
      secure: true,
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
   * @summary 修改关联的责任人
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
   * @tags region
   * @name ApiRegionAddPost
   * @summary 新增
   * @request POST:/api/region/add
   * @secure
   */
  apiRegionAddPost = (data: RegionFO, params: RequestParams = {}) =>
    this.http.request<ApiRegionAddPostData, any>({
      path: `/api/region/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags region
   * @name ApiRegionEditPost
   * @summary 编辑
   * @request POST:/api/region/edit
   * @secure
   */
  apiRegionEditPost = (data: RegionFO, params: RequestParams = {}) =>
    this.http.request<ApiRegionEditPostData, any>({
      path: `/api/region/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags region
   * @name ApiRegionListPost
   * @summary 查询全部对象
   * @request POST:/api/region/list
   * @secure
   */
  apiRegionListPost = (data: RegionQO, params: RequestParams = {}) =>
    this.http.request<ApiRegionListPostData, any>({
      path: `/api/region/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags region
   * @name ApiRegionPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/region/paged-list
   * @secure
   */
  apiRegionPagedListPost = (data: RegionPQO, params: RequestParams = {}) =>
    this.http.request<ApiRegionPagedListPostData, any>({
      path: `/api/region/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags region
   * @name ApiRegionShowPost
   * @summary 查询1个对象
   * @request POST:/api/region/show
   * @secure
   */
  apiRegionShowPost = (data: RegionQO, params: RequestParams = {}) =>
    this.http.request<ApiRegionShowPostData, any>({
      path: `/api/region/show`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags region
   * @name ApiRegionTreedataPost
   * @summary 获取树形结构数据
   * @request POST:/api/region/treedata
   * @secure
   */
  apiRegionTreedataPost = (data: RegionQO, params: RequestParams = {}) =>
    this.http.request<ApiRegionTreedataPostData, any>({
      path: `/api/region/treedata`,
      method: "POST",
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
   * @tags technics-type
   * @name ApiTechnicsTypeAddPost
   * @summary 新增数据
   * @request POST:/api/technics-type/add
   * @secure
   */
  apiTechnicsTypeAddPost = (data: TechnicsTypeFO, params: RequestParams = {}) =>
    this.http.request<ApiTechnicsTypeAddPostData, any>({
      path: `/api/technics-type/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags technics-type
   * @name ApiTechnicsTypeEditPost
   * @summary 编辑数据
   * @request POST:/api/technics-type/edit
   * @secure
   */
  apiTechnicsTypeEditPost = (
    data: TechnicsTypeFO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiTechnicsTypeEditPostData, any>({
      path: `/api/technics-type/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags technics-type
   * @name ApiTechnicsTypeListPost
   * @summary 查询全部对象
   * @request POST:/api/technics-type/list
   * @secure
   */
  apiTechnicsTypeListPost = (
    data: TechnicsTypeQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiTechnicsTypeListPostData, any>({
      path: `/api/technics-type/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags technics-type
   * @name ApiTechnicsTypePagedListPost
   * @summary 查询分页数据
   * @request POST:/api/technics-type/paged-list
   * @secure
   */
  apiTechnicsTypePagedListPost = (
    data: TechnicsTypePQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiTechnicsTypePagedListPostData, any>({
      path: `/api/technics-type/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags technics-type
   * @name ApiTechnicsTypeRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/technics-type/remove-mul
   * @secure
   */
  apiTechnicsTypeRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiTechnicsTypeRemoveMulPostData, any>({
      path: `/api/technics-type/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags technics-type
   * @name ApiTechnicsTypeRemovePost
   * @summary 删除1条数据
   * @request POST:/api/technics-type/remove
   * @secure
   */
  apiTechnicsTypeRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiTechnicsTypeRemovePostData, any>({
      path: `/api/technics-type/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags technics-type
   * @name ApiTechnicsTypeShowPost
   * @summary 查询1个对象
   * @request POST:/api/technics-type/show
   * @secure
   */
  apiTechnicsTypeShowPost = (
    data: TechnicsTypeQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiTechnicsTypeShowPostData, any>({
      path: `/api/technics-type/show`,
      method: "POST",
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
   * @name ApiTechnicsWhitelistPost
   * @summary 不设权限查询所有测站
   * @request POST:/api/technics/whitelist
   * @secure
   */
  apiTechnicsWhitelistPost = (data: TechnicsQO, params: RequestParams = {}) =>
    this.http.request<ApiTechnicsWhitelistPostData, any>({
      path: `/api/technics/whitelist`,
      method: "POST",
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
   * @name ApiTechnicsWhitePagedListPost
   * @summary 不设权限分页查询测站
   * @request POST:/api/technics/white-paged-list
   * @secure
   */
  apiTechnicsWhitePagedListPost = (
    data: TechnicsPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiTechnicsWhitePagedListPostData, any>({
      path: `/api/technics/white-paged-list`,
      method: "POST",
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
   * @name ApiUserAssignTechnicsesPost
   * @summary 分配水库数据权限
   * @request POST:/api/user/assign-technicses
   * @secure
   */
  apiUserAssignTechnicsesPost = (
    data: UserAssignTechnicsesQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiUserAssignTechnicsesPostData, any>({
      path: `/api/user/assign-technicses`,
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
   * @name ApiUserGetTechnicsesPost
   * @summary 根据用户id查询水库列表
   * @request POST:/api/user/get-technicses
   * @secure
   */
  apiUserGetTechnicsesPost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiUserGetTechnicsesPostData, any>({
      path: `/api/user/get-technicses`,
      method: "POST",
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
   * @tags user-region
   * @name ApiUserRegionAddPost
   * @summary 新增数据
   * @request POST:/api/user-region/add
   * @secure
   */
  apiUserRegionAddPost = (data: UserRegionFO, params: RequestParams = {}) =>
    this.http.request<ApiUserRegionAddPostData, any>({
      path: `/api/user-region/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user-region
   * @name ApiUserRegionEditPost
   * @summary 编辑数据
   * @request POST:/api/user-region/edit
   * @secure
   */
  apiUserRegionEditPost = (data: UserRegionFO, params: RequestParams = {}) =>
    this.http.request<ApiUserRegionEditPostData, any>({
      path: `/api/user-region/edit`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user-region
   * @name ApiUserRegionListPost
   * @summary 查询全部对象
   * @request POST:/api/user-region/list
   * @secure
   */
  apiUserRegionListPost = (data: UserRegionQO, params: RequestParams = {}) =>
    this.http.request<ApiUserRegionListPostData, any>({
      path: `/api/user-region/list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user-region
   * @name ApiUserRegionPagedListPost
   * @summary 查询分页数据
   * @request POST:/api/user-region/paged-list
   * @secure
   */
  apiUserRegionPagedListPost = (
    data: UserRegionPQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiUserRegionPagedListPostData, any>({
      path: `/api/user-region/paged-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user-region
   * @name ApiUserRegionRemoveMulPost
   * @summary 删除多条数据
   * @request POST:/api/user-region/remove-mul
   * @secure
   */
  apiUserRegionRemoveMulPost = (
    data: RemoveMulQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiUserRegionRemoveMulPostData, any>({
      path: `/api/user-region/remove-mul`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user-region
   * @name ApiUserRegionRemovePost
   * @summary 删除1条数据
   * @request POST:/api/user-region/remove
   * @secure
   */
  apiUserRegionRemovePost = (data: OnlyIdQO, params: RequestParams = {}) =>
    this.http.request<ApiUserRegionRemovePostData, any>({
      path: `/api/user-region/remove`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user-region
   * @name ApiUserRegionShowPost
   * @summary 查询1个对象
   * @request POST:/api/user-region/show
   * @secure
   */
  apiUserRegionShowPost = (data: UserRegionQO, params: RequestParams = {}) =>
    this.http.request<ApiUserRegionShowPostData, any>({
      path: `/api/user-region/show`,
      method: "POST",
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
   * @tags water-supply
   * @name ApiWaterSupplyGroupByMonthPost
   * @summary 供水量按月统计
   * @request POST:/api/water-supply/group-by-month
   * @secure
   */
  apiWaterSupplyGroupByMonthPost = (
    data: WaterSupplyStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiWaterSupplyGroupByMonthPostData, any>({
      path: `/api/water-supply/group-by-month`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags water-supply
   * @name ApiWaterSupplyGroupByYearPost
   * @summary 供水量按年统计
   * @request POST:/api/water-supply/group-by-year
   * @secure
   */
  apiWaterSupplyGroupByYearPost = (
    data: WaterSupplyStQO,
    params: RequestParams = {},
  ) =>
    this.http.request<ApiWaterSupplyGroupByYearPostData, any>({
      path: `/api/water-supply/group-by-year`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
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
