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

/** 全局返回结果 */
export type ApiAppVersionLastVersionPostData = FurionResultAppVersionVO;

/** 全局返回结果 */
export type ApiAppVersionListPostData = FurionResultListAppVersionVO;

/** 全局返回结果 */
export type ApiAppVersionPagedListPostData =
  FurionResultSqlSugarPagedListAppVersionVO;

/** 全局返回结果 */
export type ApiAppVersionShowPostData = FurionResultAppVersionVO;

/** 全局返回结果 */
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

/** 全局返回结果 */
export type ApiAuthCheckloginPostData = FurionResultLoginResultUserAO;

/** 全局返回结果 */
export type ApiAuthLoginPostData = FurionResultLoginResultVO;

/** 全局返回结果 */
export type ApiAuthLoginSsoGetData = FurionResultIActionResult;

export interface ApiAuthLoginSsoGetParams {
  token?: string;
}

export type ApiAuthLogoutPostData = any;

/** 全局返回结果 */
export type ApiAuthPkinfoPostData = FurionResultString;

/** 全局返回结果 */
export type ApiBizCropsAddPostData = FurionResultBizCropsVO;

/** 全局返回结果 */
export type ApiBizCropsEditPostData = FurionResultBizCropsVO;

/** 全局返回结果 */
export type ApiBizCropsListPostData = FurionResultListBizCropsVO;

/** 全局返回结果 */
export type ApiBizCropsPagedListPostData =
  FurionResultSqlSugarPagedListBizCropsVO;

/** 全局返回结果 */
export type ApiBizCropsRemoveMulPostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiBizCropsRemovePostData = FurionResultInt64;

/** 全局返回结果 */
export type ApiBizCropsShowPostData = FurionResultBizCropsVO;

/** 全局返回结果 */
export type ApiBizCropsTypeAddPostData = FurionResultBizCropsTypeVO;

/** 全局返回结果 */
export type ApiBizCropsTypeEditPostData = FurionResultBizCropsTypeVO;

/** 全局返回结果 */
export type ApiBizCropsTypeListPostData = FurionResultListBizCropsTypeVO;

/** 全局返回结果 */
export type ApiBizCropsTypePagedListPostData =
  FurionResultSqlSugarPagedListBizCropsTypeVO;

/** 全局返回结果 */
export type ApiBizCropsTypeRemoveMulPostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiBizCropsTypeRemovePostData = FurionResultInt64;

/** 全局返回结果 */
export type ApiBizCropsTypeShowPostData = FurionResultBizCropsTypeVO;

/** 全局返回结果 */
export type ApiBizGrowStageAddPostData = FurionResultBizGrowStageVO;

/** 全局返回结果 */
export type ApiBizGrowStageEditPostData = FurionResultBizGrowStageVO;

/** 全局返回结果 */
export type ApiBizGrowStageListPostData = FurionResultListBizGrowStageVO;

/** 全局返回结果 */
export type ApiBizGrowStagePagedListPostData =
  FurionResultSqlSugarPagedListBizGrowStageVO;

/** 全局返回结果 */
export type ApiBizGrowStageRemoveMulPostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiBizGrowStageRemovePostData = FurionResultInt64;

/** 全局返回结果 */
export type ApiBizGrowStageShowPostData = FurionResultBizGrowStageVO;

/** 全局返回结果 */
export type ApiBizIrrigationDistrictAddPostData =
  FurionResultBizIrrigationDistrictVO;

/** 全局返回结果 */
export type ApiBizIrrigationDistrictEditPostData =
  FurionResultBizIrrigationDistrictVO;

/** 全局返回结果 */
export type ApiBizIrrigationDistrictListPostData =
  FurionResultListBizIrrigationDistrictVO;

/** 全局返回结果 */
export type ApiBizIrrigationDistrictPagedListPostData =
  FurionResultSqlSugarPagedListBizIrrigationDistrictVO;

/** 全局返回结果 */
export type ApiBizIrrigationDistrictRemoveMulPostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiBizIrrigationDistrictRemovePostData = FurionResultInt64;

/** 全局返回结果 */
export type ApiBizIrrigationDistrictShowPostData =
  FurionResultBizIrrigationDistrictVO;

/** 全局返回结果 */
export type ApiBizPlantingPlanAddPostData = FurionResultBizPlantingPlanVO;

/** 全局返回结果 */
export type ApiBizPlantingPlanEditPostData = FurionResultBizPlantingPlanVO;

/** 全局返回结果 */
export type ApiBizPlantingPlanListPostData = FurionResultListBizPlantingPlanVO;

/** 全局返回结果 */
export type ApiBizPlantingPlanPagedListPostData =
  FurionResultSqlSugarPagedListBizPlantingPlanVO;

/** 全局返回结果 */
export type ApiBizPlantingPlanRemoveMulPostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiBizPlantingPlanRemovePostData = FurionResultInt64;

/** 全局返回结果 */
export type ApiBizPlantingPlanShowPostData = FurionResultBizPlantingPlanVO;

/** 全局返回结果 */
export type ApiBizPlantingSchemeAddPostData = FurionResultBizPlantingSchemeVO;

/** 全局返回结果 */
export type ApiBizPlantingSchemeEditPostData = FurionResultBizPlantingSchemeVO;

/** 全局返回结果 */
export type ApiBizPlantingSchemeListPostData =
  FurionResultListBizPlantingSchemeVO;

/** 全局返回结果 */
export type ApiBizPlantingSchemePagedListPostData =
  FurionResultSqlSugarPagedListBizPlantingSchemeVO;

/** 全局返回结果 */
export type ApiBizPlantingSchemeRemovePostData = FurionResultInt64;

/** 全局返回结果 */
export type ApiBizPlantingSchemeShowPostData = FurionResultBizPlantingSchemeVO;

export type ApiCommonFileDownloadGetData = any;

export interface ApiCommonFileDownloadGetParams {
  filename?: string;
  filepath?: string;
}

/** 全局返回结果 */
export type ApiCommonGenIdPostData = FurionResultInt64;

/** 全局返回结果 */
export type ApiCommonGenIdsPostData = FurionResultListInt64;

/** 全局返回结果 */
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
}

/** 全局返回结果 */
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

/** 全局返回结果 */
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

/** 全局返回结果 */
export type ApiDataDictionaryAddPostData = FurionResultDataDictionaryVO;

/** 全局返回结果 */
export type ApiDataDictionaryEditPostData = FurionResultDataDictionaryVO;

/** 全局返回结果 */
export type ApiDataDictionaryListPostData = FurionResultListDataDictionaryVO;

/** 全局返回结果 */
export type ApiDataDictionaryPagedListPostData =
  FurionResultSqlSugarPagedListDataDictionaryVO;

/** 全局返回结果 */
export type ApiDataDictionaryRemovePostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiDataDictionaryShowPostData = FurionResultDataDictionaryVO;

/** 全局返回结果 */
export type ApiDataDictionaryTreedataPostData = FurionResultListTreeNode;

/** 全局返回结果 */
export type ApiDataDictionaryTypedataPostData = FurionResultListTreeNode;

/** 全局返回结果 */
export type ApiEquipmentAddPostData = FurionResultEquipmentVO;

/** 全局返回结果 */
export type ApiEquipmentEditPostData = FurionResultEquipmentVO;

/** 全局返回结果 */
export type ApiEquipmentListPostData = FurionResultListEquipmentVO;

/** 全局返回结果 */
export type ApiEquipmentOnlineInfoPostData = FurionResultOnlineInfoVO;

/** 全局返回结果 */
export type ApiEquipmentPagedListPostData =
  FurionResultSqlSugarPagedListEquipmentVO;

/** 全局返回结果 */
export type ApiEquipmentParamAddPostData = FurionResultEquipmentParamVO;

/** 全局返回结果 */
export type ApiEquipmentParamEditPostData = FurionResultEquipmentParamVO;

/** 全局返回结果 */
export type ApiEquipmentParamListPostData = FurionResultListEquipmentParamVO;

/** 全局返回结果 */
export type ApiEquipmentParamPagedListPostData =
  FurionResultSqlSugarPagedListEquipmentParamVO;

/** 全局返回结果 */
export type ApiEquipmentParamRemoveMulPostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiEquipmentParamRemovePostData = FurionResultInt64;

/** 全局返回结果 */
export type ApiEquipmentParamShowPostData = FurionResultEquipmentParamVO;

/** 全局返回结果 */
export type ApiEquipmentRemoveMulPostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiEquipmentRemovePostData = FurionResultInt64;

/** 全局返回结果 */
export type ApiEquipmentShowPostData = FurionResultEquipmentVO;

/** 全局返回结果 */
export type ApiKnowledegUserCollectAddPostData =
  FurionResultKnowledegUserCollectVO;

/** 全局返回结果 */
export type ApiKnowledegUserCollectDeleteMulPostData = FurionResultInt64;

/** 全局返回结果 */
export type ApiKnowledegUserCollectDeletePostData = FurionResultInt64;

/** 全局返回结果 */
export type ApiKnowledegUserCollectKnowledgeUserCollectListPostData =
  FurionResultSqlSugarPagedListKnowledgeBaseFileVO;

/** 全局返回结果 */
export type ApiKnowledegUserCollectListPostData = FurionResultBoolean;

/** 全局返回结果 */
export type ApiKnowledgeBaseFileAddPostData = FurionResultKnowledgeBaseFileVO;

/** 全局返回结果 */
export type ApiKnowledgeBaseFileAllKnowledgeListPostData =
  FurionResultSqlSugarPagedListKnowledgeBaseFileVO;

/** 全局返回结果 */
export type ApiKnowledgeBaseFileEditPostData = FurionResultKnowledgeBaseFileVO;

export type ApiKnowledgeBaseFileExportPostData = any;

/** 全局返回结果 */
export type ApiKnowledgeBaseFileFileDisplayPostData = FurionResultBoolean;

export type ApiKnowledgeBaseFileFileDownloadByIdGetData = any;

export interface ApiKnowledgeBaseFileFileDownloadByIdGetParams {
  filename?: string;
  filepath?: string;
  /** @format int64 */
  id?: number;
}

export type ApiKnowledgeBaseFileFileDownloadPostData = any;

export type ApiKnowledgeBaseFileFileDownloadPostPayload = FileDownloadQO[];

/** 全局返回结果 */
export type ApiKnowledgeBaseFileHotKnowledgeListPostData =
  FurionResultKnowledgeBaseFileVO;

/** 全局返回结果 */
export type ApiKnowledgeBaseFileKnowledgeListPostData =
  FurionResultSqlSugarPagedListKnowledgeBaseFileVO;

/** 全局返回结果 */
export type ApiKnowledgeBaseFileRemovePostData = FurionResultInt64;

/** 全局返回结果 */
export type ApiKnowledgeCatalogueAddPostData = FurionResultKnowledgeCatalogueVO;

/** 全局返回结果 */
export type ApiKnowledgeCatalogueDataDisplayPostData = FurionResultBoolean;

/** 全局返回结果 */
export type ApiKnowledgeCatalogueDataSortPostData = FurionResultBoolean;

/** 全局返回结果 */
export type ApiKnowledgeCatalogueEditPostData =
  FurionResultKnowledgeCatalogueVO;

/** 全局返回结果 */
export type ApiKnowledgeCatalogueRemoveMulPostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiKnowledgeCatalogueRemovePostData = FurionResultInt64;

/** 全局返回结果 */
export type ApiKnowledgeCatalogueTreeDataPostData =
  FurionResultListKnowledgeCatalogueTreeNode;

/** 全局返回结果 */
export type ApiKnowledgeFileAddPostData = FurionResultKnowledgeFileVO;

/** 全局返回结果 */
export type ApiKnowledgeFileEditPostData = FurionResultKnowledgeFileVO;

/** 全局返回结果 */
export type ApiKnowledgeFileListPostData = FurionResultListKnowledgeFileVO;

/** 全局返回结果 */
export type ApiKnowledgeFilePagedListPostData =
  FurionResultSqlSugarPagedListKnowledgeFileVO;

/** 全局返回结果 */
export type ApiKnowledgeFileRemovePostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiKnowledgeFileShowPostData = FurionResultKnowledgeFileVO;

/** 全局返回结果 */
export type ApiKnowledgeFileTreedataPostData = FurionResultListTreeNodeKf;

/** 全局返回结果 */
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
}

/** 全局返回结果 */
export type ApiKnowledgeTypeAddPostData = FurionResultKnowledgeTypeVO;

/** 全局返回结果 */
export type ApiKnowledgeTypeAllListPostData = FurionResultListKnowledgeTypeVO;

/** 全局返回结果 */
export type ApiKnowledgeTypeEditPostData = FurionResultKnowledgeTypeVO;

/** 全局返回结果 */
export type ApiKnowledgeTypeListPostData = FurionResultListKnowledgeTypeVO;

/** 全局返回结果 */
export type ApiKnowledgeTypePagedListPostData =
  FurionResultSqlSugarPagedListKnowledgeTypeVO;

/** 全局返回结果 */
export type ApiKnowledgeTypeRemoveMulPostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiKnowledgeTypeRemovePostData = FurionResultInt64;

/** 全局返回结果 */
export type ApiKnowledgeTypeShowPostData = FurionResultKnowledgeTypeVO;

/** 全局返回结果 */
export type ApiLogaccessAddPostData = FurionResultLogaccessVO;

/** 全局返回结果 */
export type ApiLogaccessEditPostData = FurionResultLogaccessVO;

/** 全局返回结果 */
export type ApiLogaccessListPostData = FurionResultListLogaccessVO;

/** 全局返回结果 */
export type ApiLogaccessPagedListPostData =
  FurionResultSqlSugarPagedListLogaccessVO;

/** 全局返回结果 */
export type ApiLogaccessRemoveMulPostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiLogaccessRemovePostData = FurionResultInt64;

/** 全局返回结果 */
export type ApiLogaccessShowPostData = FurionResultLogaccessVO;

/** 全局返回结果 */
export type ApiLogerrorAddPostData = FurionResultLogerrorVO;

/** 全局返回结果 */
export type ApiLogerrorEditPostData = FurionResultLogerrorVO;

/** 全局返回结果 */
export type ApiLogerrorListPostData = FurionResultListLogerrorVO;

/** 全局返回结果 */
export type ApiLogerrorPagedListPostData =
  FurionResultSqlSugarPagedListLogerrorVO;

/** 全局返回结果 */
export type ApiLogerrorRemoveMulPostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiLogerrorRemovePostData = FurionResultInt64;

/** 全局返回结果 */
export type ApiLogerrorShowPostData = FurionResultLogerrorVO;

/** 全局返回结果 */
export type ApiLogoperationAddPostData = FurionResultLogoperationVO;

/** 全局返回结果 */
export type ApiLogoperationEditPostData = FurionResultLogoperationVO;

/** 全局返回结果 */
export type ApiLogoperationListPostData = FurionResultListLogoperationVO;

/** 全局返回结果 */
export type ApiLogoperationPagedListPostData =
  FurionResultSqlSugarPagedListLogoperationVO;

/** 全局返回结果 */
export type ApiLogoperationRemoveMulPostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiLogoperationRemovePostData = FurionResultInt64;

/** 全局返回结果 */
export type ApiLogoperationShowPostData = FurionResultLogoperationVO;

/** 全局返回结果 */
export type ApiMessageListPostData = FurionResultListMessageVO;

/** 全局返回结果 */
export type ApiMessagePagedListPostData =
  FurionResultSqlSugarPagedListMessageVO;

/** 全局返回结果 */
export type ApiMessageShowPostData = FurionResultMessageVO;

/** 全局返回结果 */
export type ApiOrganizationAddPostData = FurionResultOrganizationVO;

/** 全局返回结果 */
export type ApiOrganizationEditPostData = FurionResultOrganizationVO;

/** 全局返回结果 */
export type ApiOrganizationListPostData = FurionResultListOrganizationVO;

/** 全局返回结果 */
export type ApiOrganizationPagedListPostData =
  FurionResultSqlSugarPagedListOrganizationVO;

/** 全局返回结果 */
export type ApiOrganizationRemovePostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiOrganizationShowPostData = FurionResultOrganizationVO;

/** 全局返回结果 */
export type ApiOrganizationTreedataPostData = FurionResultListTreeNode;

/** 全局返回结果 */
export type ApiRecordFileListPostData = FurionResultListRecordFileVO;

/** 全局返回结果 */
export type ApiRecordFilePagedListPostData =
  FurionResultSqlSugarPagedListRecordFileVO;

/** 全局返回结果 */
export type ApiRecordFileRemoveMulPostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiRecordFileRemovePostData = FurionResultInt64;

/** 全局返回结果 */
export type ApiRecordFileShowPostData = FurionResultRecordFileVO;

/** 全局返回结果 */
export type ApiRegionAddPostData = FurionResultString;

/** 全局返回结果 */
export type ApiRegionEditPostData = FurionResultString;

/** 全局返回结果 */
export type ApiRegionListPostData = FurionResultListRegionVO;

/** 全局返回结果 */
export type ApiRegionPagedListPostData = FurionResultSqlSugarPagedListRegionVO;

/** 全局返回结果 */
export type ApiRegionShowPostData = FurionResultRegionVO;

/** 全局返回结果 */
export type ApiRegionTreedataPostData = FurionResultListTreeNode;

/** 全局返回结果 */
export type ApiResourceAddPostData = FurionResultResourceVO;

/** 全局返回结果 */
export type ApiResourceEditPostData = FurionResultResourceVO;

/** 全局返回结果 */
export type ApiResourceGetResourcesPostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiResourceListPostData = FurionResultListResourceVO;

/** 全局返回结果 */
export type ApiResourcePagedListPostData =
  FurionResultSqlSugarPagedListResourceVO;

/** 全局返回结果 */
export type ApiResourceRemovePostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiResourceRoutePathsPostData = FurionResultListString;

/** 全局返回结果 */
export type ApiResourceShowPostData = FurionResultResourceVO;

/** 全局返回结果 */
export type ApiResourceTreedataPostData = FurionResultListTreeNode;

/** 全局返回结果 */
export type ApiRoleAddPostData = FurionResultRoleVO;

export type ApiRoleAssignResourcePostData = any;

/** 全局返回结果 */
export type ApiRoleEditPostData = FurionResultRoleVO;

/** 全局返回结果 */
export type ApiRoleListPostData = FurionResultListRoleVO;

/** 全局返回结果 */
export type ApiRolePagedListPostData = FurionResultSqlSugarPagedListRoleVO;

/** 全局返回结果 */
export type ApiRoleRemoveMulPostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiRoleRemovePostData = FurionResultInt64;

/** 全局返回结果 */
export type ApiRoleShowPostData = FurionResultRoleVO;

/** 全局返回结果 */
export type ApiSsoDoLoginByTicketPostData = FurionResultUserVO;

export interface ApiSsoDoLoginByTicketPostParams {
  ticket?: string;
}

/** 全局返回结果 */
export type ApiSsoGetSsoAuthUrlPostData = FurionResultString;

export interface ApiSsoGetSsoAuthUrlPostParams {
  clientloginurl?: string;
}

/** 全局返回结果 */
export type ApiSysCacheDeleteKeyPostData = FurionResultInt32;

export interface ApiSysCacheDeleteKeyPostParams {
  key: string;
}

/** 全局返回结果 */
export type ApiSysCacheDeletebyprekeyPrefixkeyPostData = FurionResultInt32;

export interface ApiSysCacheDeletebyprekeyPrefixkeyPostParams {
  /** 键名前缀 */
  prefixkey: string;
}

/** 全局返回结果 */
export type ApiSysCacheKeyListGetData = FurionResultListString;

/** 全局返回结果 */
export type ApiSysCacheKeysByPrefixKeyPrefixkeyGetData = FurionResultListString;

export interface ApiSysCacheKeysByPrefixKeyPrefixkeyGetParams {
  /** 键名前缀 */
  prefixkey: string;
}

/** 全局返回结果 */
export type ApiSysCacheValueKeyGetData = FurionResultObject;

export interface ApiSysCacheValueKeyGetParams {
  key: string;
}

/** 全局返回结果 */
export type ApiTechnicsAddPostData = FurionResultTechnicsVO;

/** 全局返回结果 */
export type ApiTechnicsEditPostData = FurionResultTechnicsVO;

/** 全局返回结果 */
export type ApiTechnicsListPostData = FurionResultListTechnicsVO;

/** 全局返回结果 */
export type ApiTechnicsPagedListPostData =
  FurionResultSqlSugarPagedListTechnicsVO;

/** 全局返回结果 */
export type ApiTechnicsRemoveMulPostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiTechnicsRemovePostData = FurionResultInt64;

/** 全局返回结果 */
export type ApiTechnicsShowPostData = FurionResultTechnicsVO;

/** 全局返回结果 */
export type ApiTechnicsTypeAddPostData = FurionResultTechnicsTypeVO;

/** 全局返回结果 */
export type ApiTechnicsTypeEditPostData = FurionResultTechnicsTypeVO;

/** 全局返回结果 */
export type ApiTechnicsTypeListPostData = FurionResultListTechnicsTypeVO;

/** 全局返回结果 */
export type ApiTechnicsTypePagedListPostData =
  FurionResultSqlSugarPagedListTechnicsTypeVO;

/** 全局返回结果 */
export type ApiTechnicsTypeRemoveMulPostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiTechnicsTypeRemovePostData = FurionResultInt64;

/** 全局返回结果 */
export type ApiTechnicsTypeShowPostData = FurionResultTechnicsTypeVO;

/** 全局返回结果 */
export type ApiTechnicsWhitePagedListPostData =
  FurionResultSqlSugarPagedListTechnicsVO;

/** 全局返回结果 */
export type ApiTechnicsWhitelistPostData = FurionResultListTechnicsVO;

/** 全局返回结果 */
export type ApiUserAddPostData = FurionResultUserVO;

export type ApiUserAssignRolesPostData = any;

export type ApiUserAssignTechnicsesPostData = any;

export type ApiUserAssignUsergroupsPostData = any;

/** 全局返回结果 */
export type ApiUserEditPostData = FurionResultUserVO;

export type ApiUserEditPwdPostData = any;

/** 全局返回结果 */
export type ApiUserEditSelfPostData = FurionResultUserVO;

/** 全局返回结果 */
export type ApiUserGetRolesPostData = FurionResultListRoleVO;

/** 全局返回结果 */
export type ApiUserGetTechnicsesPostData = FurionResultListTechnicsVO;

/** 全局返回结果 */
export type ApiUserGetUsergroupsPostData = FurionResultListUsergroupVO;

/** 全局返回结果 */
export type ApiUserListPostData = FurionResultListUserVO;

/** 全局返回结果 */
export type ApiUserMessageAmountstPostData = FurionResultMessageStRes;

/** 全局返回结果 */
export type ApiUserMessageDeleteMessagePostData = FurionResultBoolean;

/** 全局返回结果 */
export type ApiUserMessageListPostData = FurionResultListUserMessageVO;

/** 全局返回结果 */
export type ApiUserMessagePagedListPostData =
  FurionResultSqlSugarPagedListUserMessageVO;

/** 全局返回结果 */
export type ApiUserMessageReadAllMessagePostData = FurionResultBoolean;

/** 全局返回结果 */
export type ApiUserMessageReadMessagePostData = FurionResultBoolean;

/** 全局返回结果 */
export type ApiUserMessageShowPostData = FurionResultUserMessageVO;

/** 全局返回结果 */
export type ApiUserPagedListPostData = FurionResultSqlSugarPagedListUserVO;

/** 全局返回结果 */
export type ApiUserRegionAddPostData = FurionResultUserRegionVO;

/** 全局返回结果 */
export type ApiUserRegionEditPostData = FurionResultUserRegionVO;

/** 全局返回结果 */
export type ApiUserRegionListPostData = FurionResultListUserRegionVO;

/** 全局返回结果 */
export type ApiUserRegionPagedListPostData =
  FurionResultSqlSugarPagedListUserRegionVO;

/** 全局返回结果 */
export type ApiUserRegionRemoveMulPostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiUserRegionRemovePostData = FurionResultInt64;

/** 全局返回结果 */
export type ApiUserRegionShowPostData = FurionResultUserRegionVO;

/** 全局返回结果 */
export type ApiUserRemoveMulPostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiUserRemovePostData = FurionResultInt64;

export type ApiUserResetPwdPostData = any;

/** 全局返回结果 */
export type ApiUserShowPostData = FurionResultUserVO;

/** 全局返回结果 */
export type ApiUserShowSelfPostData = FurionResultUserVO;

/** 全局返回结果 */
export type ApiUsergroupAddPostData = FurionResultUsergroupVO;

export type ApiUsergroupAssignRolesPostData = any;

/** 全局返回结果 */
export type ApiUsergroupEditPostData = FurionResultUsergroupVO;

/** 全局返回结果 */
export type ApiUsergroupGetRolesPostData = FurionResultListRoleVO;

/** 全局返回结果 */
export type ApiUsergroupListPostData = FurionResultListUsergroupVO;

/** 全局返回结果 */
export type ApiUsergroupPagedListPostData =
  FurionResultSqlSugarPagedListUsergroupVO;

/** 全局返回结果 */
export type ApiUsergroupRemoveMulPostData = FurionResultListInt64;

/** 全局返回结果 */
export type ApiUsergroupRemovePostData = FurionResultInt64;

/** 全局返回结果 */
export type ApiUsergroupShowPostData = FurionResultUsergroupVO;

/** 全局返回结果 */
export type ApiWeatherWeatherTokenPostData = FurionResultString;

export interface AppVersionPQO {
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 排序字段 */
  field?: null | string;
  filePath?: null | string;
  /** @format int64 */
  id?: number;
  /** 排序方向 */
  order?: null | string;
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
  updatedAt?: null | string;
  updatedPerson?: null | string;
  version?: null | string;
}

export interface AppVersionQO {
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  filePath?: null | string;
  /** @format int64 */
  id?: number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  version?: null | string;
}

export interface AppVersionVO {
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  filePath?: null | string;
  /** @format int64 */
  id?: number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  version?: null | string;
}

export interface BizCropsFO {
  /**
   * 编码
   * @minLength 1
   */
  code: string;
  /**
   * 作物类型
   * @format int64
   */
  cropsTypeId: number;
  /** @format int64 */
  id?: null | number;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /** 备注 */
  remark?: null | string;
}

export interface BizCropsPQO {
  /** 编码 */
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /**
   * 作物类型
   * @format int64
   */
  cropsTypeId?: number;
  /** 排序字段 */
  field?: null | string;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: null | string;
  /** 排序方向 */
  order?: null | string;
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
  remark?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface BizCropsQO {
  /** 编码 */
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /**
   * 作物类型
   * @format int64
   */
  cropsTypeId?: number;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: null | string;
  /** 备注 */
  remark?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface BizCropsTypeFO {
  /**
   * 编码
   * @minLength 1
   */
  code: string;
  /**
   * id
   * @format int64
   */
  id?: null | number;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
}

export interface BizCropsTypePQO {
  /** 编码 */
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 排序字段 */
  field?: null | string;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: null | string;
  /** 排序方向 */
  order?: null | string;
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
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface BizCropsTypeQO {
  /** 编码 */
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface BizCropsTypeVO {
  /** 编码 */
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface BizCropsVO {
  /** 编码 */
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 作物类型编码 */
  cropsTypeCode?: null | string;
  /**
   * 作物类型
   * @format int64
   */
  cropsTypeId?: number;
  /** 作物类型名称 */
  cropsTypeName?: null | string;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: null | string;
  /** 备注 */
  remark?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface BizGrowStageFO {
  /**
   * 结束天数
   * @format int32
   */
  endDn: number;
  /**
   * id
   * @format int64
   */
  id?: null | number;
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
   * 所属种植方案
   * @format int64
   */
  plantingSchemeId?: null | number;
  /**
   * 开始天数
   * @format int32
   */
  startDn: number;
  /**
   * 需水占比
   * @format double
   */
  waterRatio: number;
}

export interface BizGrowStagePQO {
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /**
   * 结束天数
   * @format int32
   */
  endDn?: number;
  /** 排序字段 */
  field?: null | string;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: null | string;
  /** 排序方向 */
  order?: null | string;
  /**
   * 序号
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
  /**
   * 所属种植方案
   * @format int64
   */
  plantingSchemeId?: number;
  /**
   * 开始天数
   * @format int32
   */
  startDn?: number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /**
   * 需水占比
   * @format double
   */
  waterRatio?: number;
}

export interface BizGrowStageQO {
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /**
   * 结束天数
   * @format int32
   */
  endDn?: number;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: null | string;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number;
  /**
   * 所属种植方案
   * @format int64
   */
  plantingSchemeId?: number;
  /**
   * 开始天数
   * @format int32
   */
  startDn?: number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /**
   * 需水占比
   * @format double
   */
  waterRatio?: number;
}

export interface BizGrowStageVO {
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /**
   * 结束天数
   * @format int32
   */
  endDn?: number;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: null | string;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number;
  /**
   * 所属种植方案
   * @format int64
   */
  plantingSchemeId?: number;
  /** 所属种植方案名称 */
  plantingSchemeName?: null | string;
  /**
   * 开始天数
   * @format int32
   */
  startDn?: number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /**
   * 需水占比
   * @format double
   */
  waterRatio?: number;
}

export interface BizIrrigationDistrictFO {
  /**
   * 编码
   * @minLength 1
   */
  code: string;
  geojson?: null | string;
  /** @format int64 */
  id?: null | number;
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
   * 所属行政区域
   * @format int64
   */
  regionId: number;
}

export interface BizIrrigationDistrictPQO {
  /** 编码 */
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 排序字段 */
  field?: null | string;
  geojson?: null | string;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: null | string;
  /** 排序方向 */
  order?: null | string;
  /**
   * 序号
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
  /** @format int64 */
  regionId?: number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface BizIrrigationDistrictQO {
  /** 编码 */
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  geojson?: null | string;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: null | string;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number;
  /** @format int64 */
  regionId?: number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface BizIrrigationDistrictVO {
  /** 编码 */
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  geojson?: null | string;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: null | string;
  /**
   * 序号
   * @format int32
   */
  orderNumber?: number;
  /** @format int64 */
  regionId?: number;
  /** 所属行政区划名称 */
  regionName?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface BizPlantingPlanFO {
  /**
   * 面积
   * @format double
   */
  area: number;
  /**
   * 农作物
   * @format int64
   */
  cropsId: number;
  /** 农户 */
  farmer?: null | string;
  /**
   * id
   * @format int64
   */
  id?: null | number;
  /**
   * 种植开始时间
   * @format date-time
   */
  startDate: string;
  /**
   * 关联站点
   * @format int64
   */
  technicsId: number;
  /**
   * 年份
   * @format int32
   */
  year: number;
}

export interface BizPlantingPlanPQO {
  /**
   * 面积
   * @format double
   */
  area?: null | number;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /**
   * 农作物
   * @format int64
   */
  cropsId?: null | number;
  farmer?: null | string;
  /** 排序字段 */
  field?: null | string;
  /** @format int64 */
  id?: number;
  /** 排序方向 */
  order?: null | string;
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
   * 种植开始时间
   * @format date-time
   */
  startDate?: null | string;
  /**
   * 结束时间(按种植开始时间查询)
   * @format date-time
   */
  startDateEt?: null | string;
  /**
   * 开始时间(按种植开始时间查询)
   * @format date-time
   */
  startDateSt?: null | string;
  /**
   * 关联站点
   * @format int64
   */
  technicsId?: null | number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /**
   * 年份
   * @format int32
   */
  year?: null | number;
}

export interface BizPlantingPlanQO {
  /**
   * 面积
   * @format double
   */
  area?: null | number;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /**
   * 农作物
   * @format int64
   */
  cropsId?: null | number;
  farmer?: null | string;
  /** @format int64 */
  id?: number;
  /**
   * 种植开始时间
   * @format date-time
   */
  startDate?: null | string;
  /**
   * 结束时间(按种植开始时间查询)
   * @format date-time
   */
  startDateEt?: null | string;
  /**
   * 开始时间(按种植开始时间查询)
   * @format date-time
   */
  startDateSt?: null | string;
  /**
   * 关联站点
   * @format int64
   */
  technicsId?: null | number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /**
   * 年份
   * @format int32
   */
  year?: null | number;
}

export interface BizPlantingPlanVO {
  /**
   * 面积
   * @format double
   */
  area?: null | number;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /**
   * 农作物
   * @format int64
   */
  cropsId?: null | number;
  /** 作物名称 */
  readonly cropsName?: null;
  farmer?: null | string;
  /** @format int64 */
  id?: number;
  /** 灌区名称 */
  readonly irrigationDistrictName?: null;
  /**
   * 种植开始时间
   * @format date-time
   */
  startDate?: null | string;
  /**
   * 关联站点
   * @format int64
   */
  technicsId?: null | number;
  /** 监测点位名称 */
  readonly technicsName?: null;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /**
   * 年份
   * @format int32
   */
  year?: null | number;
}

export interface BizPlantingSchemeFO {
  /**
   * 编码
   * @minLength 1
   */
  code: string;
  /**
   * 农作物
   * @format int64
   */
  cropsId: number;
  /**
   * 预期产量(kg每亩)
   * @format double
   */
  expectedYield?: null | number;
  /** 生育阶段列表 */
  growStageList?: null | BizGrowStageFO[];
  /**
   * id
   * @format int64
   */
  id?: null | number;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /**
   * 方案年份
   * @format int32
   */
  planYear: number;
  /** 备注 */
  remark?: null | string;
  /**
   * 亩需水量(立方米每亩)
   * @format double
   */
  wrpm: number;
}

export interface BizPlantingSchemePQO {
  /** 编码 */
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /**
   * 农作物
   * @format int64
   */
  cropsId?: number;
  /**
   * 预期产量(kg每亩)
   * @format double
   */
  expectedYield?: null | number;
  /** 排序字段 */
  field?: null | string;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: null | string;
  /** 排序方向 */
  order?: null | string;
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
   * 方案年份
   * @format int32
   */
  planYear?: number;
  remark?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /**
   * 亩需水量(立方米每亩)
   * @format double
   */
  wrpm?: number;
}

export interface BizPlantingSchemeQO {
  /** 编码 */
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /**
   * 农作物
   * @format int64
   */
  cropsId?: number;
  /**
   * 预期产量(kg每亩)
   * @format double
   */
  expectedYield?: null | number;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: null | string;
  /**
   * 方案年份
   * @format int32
   */
  planYear?: number;
  remark?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /**
   * 亩需水量(立方米每亩)
   * @format double
   */
  wrpm?: number;
}

export interface BizPlantingSchemeVO {
  /** 编码 */
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 农作物编码 */
  cropsCode?: null | string;
  /**
   * 农作物
   * @format int64
   */
  cropsId?: number;
  /** 农作物名称 */
  cropsName?: null | string;
  /**
   * 预期产量(kg每亩)
   * @format double
   */
  expectedYield?: null | number;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: null | string;
  /**
   * 方案年份
   * @format int32
   */
  planYear?: number;
  remark?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /**
   * 亩需水量(立方米每亩)
   * @format double
   */
  wrpm?: number;
}

export interface DataDictionaryFO {
  /** 编号 */
  code?: null | string;
  /**
   * created_at
   * @format date-time
   */
  createdAt?: null | string;
  /** created_person */
  createdPerson?: null | string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 是否启用 */
  isEnable?: null | boolean;
  /**
   * 级别
   * @format int32
   */
  level?: null | number;
  /** 名称 */
  name?: null | string;
  nestedcode?: null | string;
  /** 路径 */
  nestedpath?: null | string;
  parentCode?: null | string;
  /**
   * 父级
   * @format int64
   */
  parentId?: null | number;
  parentName?: null | string;
  /**
   * 路径key
   * @format int32
   */
  pathkey?: number;
  /** 其他属性 */
  props?: null | string;
  /** 备注 */
  remark?: null | string;
  /**
   * updated_at
   * @format date-time
   */
  updatedAt?: null | string;
  /** updated_person */
  updatedPerson?: null | string;
}

export interface DataDictionaryPQO {
  /** 编号 */
  code?: null | string;
  /**
   * created_at
   * @format date-time
   */
  createdAt?: null | string;
  /** created_person */
  createdPerson?: null | string;
  /** 排序字段 */
  field?: null | string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 是否启用 */
  isEnable?: null | boolean;
  /**
   * 级别
   * @format int32
   */
  level?: null | number;
  /** 名称 */
  name?: null | string;
  nestedcode?: null | string;
  /** 路径 */
  nestedpath?: null | string;
  /** 排序方向 */
  order?: null | string;
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
  parentCode?: null | string;
  /**
   * 父级
   * @format int64
   */
  parentId?: null | number;
  parentName?: null | string;
  /**
   * 路径key
   * @format int32
   */
  pathkey?: number;
  /** 其他属性 */
  props?: null | string;
  /** 备注 */
  remark?: null | string;
  /**
   * updated_at
   * @format date-time
   */
  updatedAt?: null | string;
  /** updated_person */
  updatedPerson?: null | string;
}

export interface DataDictionaryQO {
  /** 编号 */
  code?: null | string;
  /**
   * created_at
   * @format date-time
   */
  createdAt?: null | string;
  /** created_person */
  createdPerson?: null | string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 是否启用 */
  isEnable?: null | boolean;
  /**
   * 级别
   * @format int32
   */
  level?: null | number;
  /** 名称 */
  name?: null | string;
  nestedcode?: null | string;
  /** 路径 */
  nestedpath?: null | string;
  parentCode?: null | string;
  /**
   * 父级
   * @format int64
   */
  parentId?: null | number;
  parentName?: null | string;
  /**
   * 路径key
   * @format int32
   */
  pathkey?: number;
  /** 其他属性 */
  props?: null | string;
  /** 备注 */
  remark?: null | string;
  /**
   * updated_at
   * @format date-time
   */
  updatedAt?: null | string;
  /** updated_person */
  updatedPerson?: null | string;
}

export interface DataDictionaryVO {
  /** 编号 */
  code?: null | string;
  /**
   * created_at
   * @format date-time
   */
  createdAt?: null | string;
  /** created_person */
  createdPerson?: null | string;
  /** @format int64 */
  id?: number;
  /** 是否启用 */
  isEnable?: null | boolean;
  /**
   * 级别
   * @format int32
   */
  level?: null | number;
  /** 名称 */
  name?: null | string;
  nestedcode?: null | string;
  parentCode?: null | string;
  /**
   * 父级
   * @format int64
   */
  parentId?: null | number;
  parentName?: null | string;
  /** 其他属性 */
  props?: null | string;
  /** 备注 */
  remark?: null | string;
  /**
   * updated_at
   * @format date-time
   */
  updatedAt?: null | string;
  /** updated_person */
  updatedPerson?: null | string;
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
  address?: null | string;
  /** 品牌 */
  brand?: null | string;
  /** 编码 */
  code?: null | string;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: null | string;
  /** 创建人 */
  createdPerson?: null | string;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: null | string;
  /** 设备功率 */
  equipmentPower?: null | string;
  /** 俯视图vr位置pitch */
  fvrPitch?: null | string;
  /** 俯视图vr位置yaw */
  fvrYaw?: null | string;
  /** 后视图vr位置pitch */
  hvrPitch?: null | string;
  /** 后视图vr位置yaw */
  hvrYaw?: null | string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** imei */
  imei?: null | string;
  /** 是否启用 */
  isEnable?: null | boolean;
  /** 是否在线 */
  isOnline?: null | boolean;
  /**
   * 纬度
   * @format double
   */
  latitude?: null | number;
  /**
   * 经度
   * @format double
   */
  longitude?: null | number;
  /** 规格型号 */
  modelSpec?: null | string;
  /** 名称 */
  name?: null | string;
  /**
   * 排序序号
   * @format int32
   */
  orderNumber?: null | number;
  /** 图片路径 */
  picUrl?: null | string;
  /** 前景图vr位置pitch */
  qvrPitch?: null | string;
  /** 前景图vr位置yaw */
  qvrYaw?: null | string;
  /** 备注 */
  remark?: null | string;
  /** 是否在vr显示 */
  showInVr?: null | boolean;
  /** 测站编码 */
  stcode?: null | string;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: null | number;
  /** 设备类型编码 */
  typeCode?: null | string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: null | string;
  /** 更新人 */
  updatedPerson?: null | string;
}

export interface EquipmentPQO {
  /** 地址 */
  address?: null | string;
  /** 品牌 */
  brand?: null | string;
  /** 编码 */
  code?: null | string;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: null | string;
  /** 创建人 */
  createdPerson?: null | string;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: null | string;
  /** 设备功率 */
  equipmentPower?: null | string;
  /** 排序字段 */
  field?: null | string;
  /** 俯视图vr位置pitch */
  fvrPitch?: null | string;
  /** 俯视图vr位置yaw */
  fvrYaw?: null | string;
  /** 后视图vr位置pitch */
  hvrPitch?: null | string;
  /** 后视图vr位置yaw */
  hvrYaw?: null | string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** imei */
  imei?: null | string;
  /** 是否启用 */
  isEnable?: null | boolean;
  /** 是否在线 */
  isOnline?: null | boolean;
  /**
   * 纬度
   * @format double
   */
  latitude?: null | number;
  /**
   * 经度
   * @format double
   */
  longitude?: null | number;
  /** 规格型号 */
  modelSpec?: null | string;
  /** 名称 */
  name?: null | string;
  /** 排序方向 */
  order?: null | string;
  /**
   * 排序序号
   * @format int32
   */
  orderNumber?: null | number;
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
  picUrl?: null | string;
  /** 前景图vr位置pitch */
  qvrPitch?: null | string;
  /** 前景图vr位置yaw */
  qvrYaw?: null | string;
  /** 备注 */
  remark?: null | string;
  /** 是否在vr显示 */
  showInVr?: null | boolean;
  /** 测站编码 */
  stcode?: null | string;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: null | number;
  /** 设备类型编码 */
  typeCode?: null | string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: null | string;
  /** 更新人 */
  updatedPerson?: null | string;
}

export interface EquipmentParamFO {
  /** 编码 */
  code?: null | string;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: null | string;
  /** 创建人 */
  createdPerson?: null | string;
  /** 数据代码 */
  dataCode?: null | string;
  /**
   * 数据信号（0-模拟量，1-开关量，2-文本型）
   * @format int32
   */
  dataSignal?: null | number;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: null | string;
  /**
   * 数据类型（0-实时，1-统计）
   * @format int32
   */
  dataType?: null | number;
  /**
   * 数据值
   * @format double
   */
  dataValue?: null | number;
  /**
   * 小数位数
   * @format int32
   */
  decimalPlaces?: number;
  /** 展示名称 */
  displayName?: null | string;
  /**
   * 所属设备
   * @format int64
   */
  equipmentId?: null | number;
  /** 分组 */
  groupCode?: null | string;
  /** 渗压所在因子组的位置 */
  groupPos?: null | string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 是否显示 */
  isDisplay?: null | boolean;
  /** 是否启用 */
  isEnable?: null | boolean;
  /** 是否在线 */
  isOnline?: null | boolean;
  /** 单位 */
  measureUnit?: null | string;
  /** 名称 */
  name?: null | string;
  /** 关状态颜色 */
  offColor?: null | string;
  /** 关状态标签 */
  offLabel?: null | string;
  /**
   * 离线判断时长，距离当前时间多久算离线(秒)
   * @format int32
   */
  offlineTimespan?: number;
  /** 开状态颜色 */
  onColor?: null | string;
  /** 开状态标签 */
  onLabel?: null | string;
  /**
   * 排序序号
   * @format int32
   */
  orderNumber?: null | number;
  /**
   * 读写类型（0-只读，1-读写，2-只写）
   * @format int32
   */
  readWrite?: null | number;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: null | number;
  /** 备注 */
  remark?: null | string;
  /**
   * 传输间隔
   * @format int32
   */
  transInterval?: null | number;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: null | string;
  /** 更新人 */
  updatedPerson?: null | string;
}

export interface EquipmentParamPQO {
  /** 编码 */
  code?: null | string;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: null | string;
  /** 创建人 */
  createdPerson?: null | string;
  /** 数据代码 */
  dataCode?: null | string;
  /**
   * 数据信号（0-模拟量，1-开关量，2-文本型）
   * @format int32
   */
  dataSignal?: null | number;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: null | string;
  /**
   * 数据类型（0-实时，1-统计）
   * @format int32
   */
  dataType?: null | number;
  /**
   * 数据值
   * @format double
   */
  dataValue?: null | number;
  /**
   * 小数位数
   * @format int32
   */
  decimalPlaces?: number;
  /** 展示名称 */
  displayName?: null | string;
  /**
   * 所属设备
   * @format int64
   */
  equipmentId?: null | number;
  /** 排序字段 */
  field?: null | string;
  /** 分组 */
  groupCode?: null | string;
  /** 渗压所在因子组的位置 */
  groupPos?: null | string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 是否显示 */
  isDisplay?: null | boolean;
  /** 是否启用 */
  isEnable?: null | boolean;
  /** 是否在线 */
  isOnline?: null | boolean;
  /** 单位 */
  measureUnit?: null | string;
  /** 名称 */
  name?: null | string;
  /** 关状态颜色 */
  offColor?: null | string;
  /** 关状态标签 */
  offLabel?: null | string;
  /**
   * 离线判断时长，距离当前时间多久算离线(秒)
   * @format int32
   */
  offlineTimespan?: number;
  /** 开状态颜色 */
  onColor?: null | string;
  /** 开状态标签 */
  onLabel?: null | string;
  /** 排序方向 */
  order?: null | string;
  /**
   * 排序序号
   * @format int32
   */
  orderNumber?: null | number;
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
  readWrite?: null | number;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: null | number;
  /** 备注 */
  remark?: null | string;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: null | number;
  /**
   * 传输间隔
   * @format int32
   */
  transInterval?: null | number;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: null | string;
  /** 更新人 */
  updatedPerson?: null | string;
}

export interface EquipmentParamQO {
  /** 编码 */
  code?: null | string;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: null | string;
  /** 创建人 */
  createdPerson?: null | string;
  /** 数据代码 */
  dataCode?: null | string;
  /**
   * 数据信号（0-模拟量，1-开关量，2-文本型）
   * @format int32
   */
  dataSignal?: null | number;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: null | string;
  /**
   * 数据类型（0-实时，1-统计）
   * @format int32
   */
  dataType?: null | number;
  /**
   * 数据值
   * @format double
   */
  dataValue?: null | number;
  /**
   * 小数位数
   * @format int32
   */
  decimalPlaces?: number;
  /** 展示名称 */
  displayName?: null | string;
  /**
   * 所属设备
   * @format int64
   */
  equipmentId?: null | number;
  /** 分组 */
  groupCode?: null | string;
  /** 渗压所在因子组的位置 */
  groupPos?: null | string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 是否显示 */
  isDisplay?: null | boolean;
  /** 是否启用 */
  isEnable?: null | boolean;
  /** 是否在线 */
  isOnline?: null | boolean;
  /** 单位 */
  measureUnit?: null | string;
  /** 名称 */
  name?: null | string;
  /** 关状态颜色 */
  offColor?: null | string;
  /** 关状态标签 */
  offLabel?: null | string;
  /**
   * 离线判断时长，距离当前时间多久算离线(秒)
   * @format int32
   */
  offlineTimespan?: number;
  /** 开状态颜色 */
  onColor?: null | string;
  /** 开状态标签 */
  onLabel?: null | string;
  /**
   * 排序序号
   * @format int32
   */
  orderNumber?: null | number;
  /**
   * 读写类型（0-只读，1-读写，2-只写）
   * @format int32
   */
  readWrite?: null | number;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: null | number;
  /** 备注 */
  remark?: null | string;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: null | number;
  /**
   * 传输间隔
   * @format int32
   */
  transInterval?: null | number;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: null | string;
  /** 更新人 */
  updatedPerson?: null | string;
}

export interface EquipmentParamVO {
  /** 编码 */
  code?: null | string;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: null | string;
  /** 创建人 */
  createdPerson?: null | string;
  /** 数据代码 */
  dataCode?: null | string;
  /**
   * 数据信号（0-模拟量，1-开关量，2-文本型）
   * @format int32
   */
  dataSignal?: null | number;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: null | string;
  /**
   * 数据类型（0-实时，1-统计）
   * @format int32
   */
  dataType?: null | number;
  /**
   * 数据值
   * @format double
   */
  dataValue?: null | number;
  /**
   * 小数位数
   * @format int32
   */
  decimalPlaces?: number;
  /** 展示名称 */
  displayName?: null | string;
  /**
   * 所属设备
   * @format int64
   */
  equipmentId?: null | number;
  /** 设备名称 */
  equipmentName?: null | string;
  /** 分组 */
  groupCode?: null | string;
  /** 渗压所在因子组的位置 */
  groupPos?: null | string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 是否显示 */
  isDisplay?: null | boolean;
  /** 是否启用 */
  isEnable?: null | boolean;
  /** 是否在线 */
  isOnline?: null | boolean;
  /** 单位 */
  measureUnit?: null | string;
  /** 名称 */
  name?: null | string;
  /** 关状态颜色 */
  offColor?: null | string;
  /** 关状态标签 */
  offLabel?: null | string;
  /**
   * 离线判断时长，距离当前时间多久算离线(秒)
   * @format int32
   */
  offlineTimespan?: number;
  /** 开状态颜色 */
  onColor?: null | string;
  /** 开状态标签 */
  onLabel?: null | string;
  /**
   * 排序序号
   * @format int32
   */
  orderNumber?: null | number;
  /**
   * 读写类型（0-只读，1-读写，2-只写）
   * @format int32
   */
  readWrite?: null | number;
  /**
   * 获取方式（0-自动，1-手动）
   * @format int32
   */
  receiveFlag?: null | number;
  /** 备注 */
  remark?: null | string;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: null | number;
  /** 所属水库 */
  technicsName?: null | string;
  /**
   * 传输间隔
   * @format int32
   */
  transInterval?: null | number;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: null | string;
  /** 更新人 */
  updatedPerson?: null | string;
}

export interface EquipmentQO {
  /** 地址 */
  address?: null | string;
  /** 品牌 */
  brand?: null | string;
  /** 编码 */
  code?: null | string;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: null | string;
  /** 创建人 */
  createdPerson?: null | string;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: null | string;
  /** 设备功率 */
  equipmentPower?: null | string;
  /** 俯视图vr位置pitch */
  fvrPitch?: null | string;
  /** 俯视图vr位置yaw */
  fvrYaw?: null | string;
  /** 后视图vr位置pitch */
  hvrPitch?: null | string;
  /** 后视图vr位置yaw */
  hvrYaw?: null | string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** imei */
  imei?: null | string;
  /** 是否启用 */
  isEnable?: null | boolean;
  /** 是否在线 */
  isOnline?: null | boolean;
  /**
   * 纬度
   * @format double
   */
  latitude?: null | number;
  /**
   * 经度
   * @format double
   */
  longitude?: null | number;
  /** 规格型号 */
  modelSpec?: null | string;
  /** 名称 */
  name?: null | string;
  /**
   * 排序序号
   * @format int32
   */
  orderNumber?: null | number;
  /** 图片路径 */
  picUrl?: null | string;
  /** 前景图vr位置pitch */
  qvrPitch?: null | string;
  /** 前景图vr位置yaw */
  qvrYaw?: null | string;
  /** 备注 */
  remark?: null | string;
  /** 是否在vr显示 */
  showInVr?: null | boolean;
  /** 测站编码 */
  stcode?: null | string;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: null | number;
  /** 设备类型编码 */
  typeCode?: null | string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: null | string;
  /** 更新人 */
  updatedPerson?: null | string;
}

export interface EquipmentVO {
  /** 地址 */
  address?: null | string;
  /** 品牌 */
  brand?: null | string;
  /** 编码 */
  code?: null | string;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: null | string;
  /** 创建人 */
  createdPerson?: null | string;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: null | string;
  /** 设备功率 */
  equipmentPower?: null | string;
  /** 俯视图vr位置pitch */
  fvrPitch?: null | string;
  /** 俯视图vr位置yaw */
  fvrYaw?: null | string;
  /** 后视图vr位置pitch */
  hvrPitch?: null | string;
  /** 后视图vr位置yaw */
  hvrYaw?: null | string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** imei */
  imei?: null | string;
  /** 是否启用 */
  isEnable?: null | boolean;
  /** 是否在线 */
  isOnline?: null | boolean;
  /**
   * 纬度
   * @format double
   */
  latitude?: null | number;
  /**
   * 经度
   * @format double
   */
  longitude?: null | number;
  /** 规格型号 */
  modelSpec?: null | string;
  /** 名称 */
  name?: null | string;
  /**
   * 排序序号
   * @format int32
   */
  orderNumber?: null | number;
  /** 图片路径 */
  picUrl?: null | string;
  /** 前景图vr位置pitch */
  qvrPitch?: null | string;
  /** 前景图vr位置yaw */
  qvrYaw?: null | string;
  /** 备注 */
  remark?: null | string;
  /** 是否在vr显示 */
  showInVr?: null | boolean;
  /** 测站编码 */
  stcode?: null | string;
  /**
   * 所属水库
   * @format int64
   */
  technicsId?: null | number;
  /** 所属水库 */
  technicsName?: null | string;
  /** 设备类型编码 */
  typeCode?: null | string;
  /** 设备类型 */
  typeName?: null | string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: null | string;
  /** 更新人 */
  updatedPerson?: null | string;
}

export interface FileDownloadQO {
  filePath?: null | string;
}

/** 全局返回结果 */
export interface FurionResultAppVersionVO {
  /** 数据 */
  data?: AppVersionVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultBizCropsTypeVO {
  /** 数据 */
  data?: BizCropsTypeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultBizCropsVO {
  /** 数据 */
  data?: BizCropsVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultBizGrowStageVO {
  /** 数据 */
  data?: BizGrowStageVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultBizIrrigationDistrictVO {
  /** 数据 */
  data?: BizIrrigationDistrictVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultBizPlantingPlanVO {
  /** 数据 */
  data?: BizPlantingPlanVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultBizPlantingSchemeVO {
  /** 数据 */
  data?: BizPlantingSchemeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
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
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultDataDictionaryVO {
  /** 数据 */
  data?: DataDictionaryVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEquipmentParamVO {
  /** 数据 */
  data?: EquipmentParamVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultEquipmentVO {
  /** 数据 */
  data?: EquipmentVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultIActionResult {
  /** 数据 */
  data?: IActionResult;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
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
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
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
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultKnowledegUserCollectVO {
  /** 数据 */
  data?: KnowledegUserCollectVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultKnowledgeBaseFileVO {
  /** 数据 */
  data?: KnowledgeBaseFileVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultKnowledgeCatalogueVO {
  /** 数据 */
  data?: KnowledgeCatalogueVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultKnowledgeFile {
  /** 数据 */
  data?: KnowledgeFile;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultKnowledgeFileVO {
  /** 数据 */
  data?: KnowledgeFileVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultKnowledgeTypeVO {
  /** 数据 */
  data?: KnowledgeTypeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListAppVersionVO {
  /** 数据 */
  data?: null | AppVersionVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListBizCropsTypeVO {
  /** 数据 */
  data?: null | BizCropsTypeVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListBizCropsVO {
  /** 数据 */
  data?: null | BizCropsVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListBizGrowStageVO {
  /** 数据 */
  data?: null | BizGrowStageVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListBizIrrigationDistrictVO {
  /** 数据 */
  data?: null | BizIrrigationDistrictVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListBizPlantingPlanVO {
  /** 数据 */
  data?: null | BizPlantingPlanVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListBizPlantingSchemeVO {
  /** 数据 */
  data?: null | BizPlantingSchemeVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListDataDictionaryVO {
  /** 数据 */
  data?: null | DataDictionaryVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEquipmentParamVO {
  /** 数据 */
  data?: null | EquipmentParamVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListEquipmentVO {
  /** 数据 */
  data?: null | EquipmentVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListInt64 {
  /** 数据 */
  data?: null | number[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListKnowledgeCatalogueTreeNode {
  /** 数据 */
  data?: null | KnowledgeCatalogueTreeNode[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListKnowledgeFileVO {
  /** 数据 */
  data?: null | KnowledgeFileVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListKnowledgeTypeVO {
  /** 数据 */
  data?: null | KnowledgeTypeVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListLogaccessVO {
  /** 数据 */
  data?: null | LogaccessVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListLogerrorVO {
  /** 数据 */
  data?: null | LogerrorVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListLogoperationVO {
  /** 数据 */
  data?: null | LogoperationVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListMessageVO {
  /** 数据 */
  data?: null | MessageVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListOrganizationVO {
  /** 数据 */
  data?: null | OrganizationVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListRecordFile {
  /** 数据 */
  data?: null | RecordFile[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListRecordFileVO {
  /** 数据 */
  data?: null | RecordFileVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListRegionVO {
  /** 数据 */
  data?: null | RegionVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListResourceVO {
  /** 数据 */
  data?: null | ResourceVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListRoleVO {
  /** 数据 */
  data?: null | RoleVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListString {
  /** 数据 */
  data?: null | string[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListTechnicsTypeVO {
  /** 数据 */
  data?: null | TechnicsTypeVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListTechnicsVO {
  /** 数据 */
  data?: null | TechnicsVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListTreeNode {
  /** 数据 */
  data?: null | TreeNode[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListTreeNodeKf {
  /** 数据 */
  data?: null | TreeNodeKf[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListUserMessageVO {
  /** 数据 */
  data?: null | UserMessageVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListUserRegionVO {
  /** 数据 */
  data?: null | UserRegionVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListUserVO {
  /** 数据 */
  data?: null | UserVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultListUsergroupVO {
  /** 数据 */
  data?: null | UsergroupVO[];
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultLogaccessVO {
  /** 数据 */
  data?: LogaccessVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultLogerrorVO {
  /** 数据 */
  data?: LogerrorVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultLoginResultUserAO {
  /** 数据 */
  data?: LoginResultUserAO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultLoginResultVO {
  /** 数据 */
  data?: LoginResultVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultLogoperationVO {
  /** 数据 */
  data?: LogoperationVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultMessageStRes {
  /** 数据 */
  data?: MessageStRes;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultMessageVO {
  /** 数据 */
  data?: MessageVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultObject {
  /** 数据 */
  data?: null;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultOnlineInfoVO {
  /** 数据 */
  data?: OnlineInfoVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultOrganizationVO {
  /** 数据 */
  data?: OrganizationVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultRecordFile {
  /** 数据 */
  data?: RecordFile;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultRecordFileVO {
  /** 数据 */
  data?: RecordFileVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultRegionVO {
  /** 数据 */
  data?: RegionVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultResourceVO {
  /** 数据 */
  data?: ResourceVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultRoleVO {
  /** 数据 */
  data?: RoleVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListAppVersionVO {
  /** 数据 */
  data?: SqlSugarPagedListAppVersionVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListBizCropsTypeVO {
  /** 数据 */
  data?: SqlSugarPagedListBizCropsTypeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListBizCropsVO {
  /** 数据 */
  data?: SqlSugarPagedListBizCropsVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListBizGrowStageVO {
  /** 数据 */
  data?: SqlSugarPagedListBizGrowStageVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListBizIrrigationDistrictVO {
  /** 数据 */
  data?: SqlSugarPagedListBizIrrigationDistrictVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListBizPlantingPlanVO {
  /** 数据 */
  data?: SqlSugarPagedListBizPlantingPlanVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListBizPlantingSchemeVO {
  /** 数据 */
  data?: SqlSugarPagedListBizPlantingSchemeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListDataDictionaryVO {
  /** 数据 */
  data?: SqlSugarPagedListDataDictionaryVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEquipmentParamVO {
  /** 数据 */
  data?: SqlSugarPagedListEquipmentParamVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListEquipmentVO {
  /** 数据 */
  data?: SqlSugarPagedListEquipmentVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListKnowledgeBaseFileVO {
  /** 数据 */
  data?: SqlSugarPagedListKnowledgeBaseFileVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListKnowledgeFileVO {
  /** 数据 */
  data?: SqlSugarPagedListKnowledgeFileVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListKnowledgeTypeVO {
  /** 数据 */
  data?: SqlSugarPagedListKnowledgeTypeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListLogaccessVO {
  /** 数据 */
  data?: SqlSugarPagedListLogaccessVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListLogerrorVO {
  /** 数据 */
  data?: SqlSugarPagedListLogerrorVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListLogoperationVO {
  /** 数据 */
  data?: SqlSugarPagedListLogoperationVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListMessageVO {
  /** 数据 */
  data?: SqlSugarPagedListMessageVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListOrganizationVO {
  /** 数据 */
  data?: SqlSugarPagedListOrganizationVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListRecordFileVO {
  /** 数据 */
  data?: SqlSugarPagedListRecordFileVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListRegionVO {
  /** 数据 */
  data?: SqlSugarPagedListRegionVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListResourceVO {
  /** 数据 */
  data?: SqlSugarPagedListResourceVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListRoleVO {
  /** 数据 */
  data?: SqlSugarPagedListRoleVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListTechnicsTypeVO {
  /** 数据 */
  data?: SqlSugarPagedListTechnicsTypeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListTechnicsVO {
  /** 数据 */
  data?: SqlSugarPagedListTechnicsVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListUserMessageVO {
  /** 数据 */
  data?: SqlSugarPagedListUserMessageVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListUserRegionVO {
  /** 数据 */
  data?: SqlSugarPagedListUserRegionVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListUserVO {
  /** 数据 */
  data?: SqlSugarPagedListUserVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultSqlSugarPagedListUsergroupVO {
  /** 数据 */
  data?: SqlSugarPagedListUsergroupVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultString {
  /** 数据 */
  data?: null | string;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultTechnicsTypeVO {
  /** 数据 */
  data?: TechnicsTypeVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultTechnicsVO {
  /** 数据 */
  data?: TechnicsVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultUserMessageVO {
  /** 数据 */
  data?: UserMessageVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultUserRegionVO {
  /** 数据 */
  data?: UserRegionVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultUserVO {
  /** 数据 */
  data?: UserVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

/** 全局返回结果 */
export interface FurionResultUsergroupVO {
  /** 数据 */
  data?: UsergroupVO;
  /**
   * 错误状态码
   * @format int32
   */
  errorCode?: null | number;
  /** 附加数据 */
  extras?: null;
  /** 错误信息 */
  message?: null | string;
  /**
   * 状态码
   * @format int32
   */
  statusCode?: number;
  /** 类型success、warning、error */
  succeeded?: null | string;
  /**
   * 时间
   * @format int64
   */
  timestamp?: number;
}

export type IActionResult = object;

export interface IdName {
  /**
   * Id
   * @format int64
   */
  id?: number;
  /** Name */
  name?: null | string;
}

export interface KnowledegUserCollectFO {
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /**
   * 知识库文件id
   * @format int64
   */
  fileId?: number;
  fileIds?: null | number[];
  /** @format int64 */
  id?: number;
  /**
   * 类型(1:灌区灌溉 2:防汛抗旱)
   * @format int32
   */
  type?: number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface KnowledegUserCollectPQO {
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 排序字段 */
  field?: null | string;
  /**
   * 知识库文件id
   * @format int64
   */
  fileId?: number;
  /** @format int64 */
  id?: number;
  /** 排序方向 */
  order?: null | string;
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
   * 类型(1:灌区灌溉 2:防汛抗旱)
   * @format int32
   */
  type?: number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface KnowledegUserCollectVO {
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /**
   * 知识库文件id
   * @format int64
   */
  fileId?: number;
  /** @format int64 */
  id?: number;
  /**
   * 类型(1:灌区灌溉 2:防汛抗旱)
   * @format int32
   */
  type?: number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

/** 知识库文件 */
export interface KnowledgeBaseFile {
  /** 作者名称 */
  authorName?: null | string;
  /**
   * 知识目录id
   * @format int64
   */
  catalogueId?: number;
  /**
   * 收藏数量
   * @format int32
   */
  collectCount?: number;
  /** 内容描述 */
  content?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  display?: boolean;
  /**
   * 下载数量
   * @format int32
   */
  downloadCount?: number;
  /** 文件名 */
  fileName?: null | string;
  /**
   * 文件大小(Byte)
   * @format int64
   */
  fileSize?: number;
  /** @format int64 */
  id?: number;
  /** 文件路径 */
  path?: null | string;
  /** 关键词 */
  primaryKey?: null | string;
  /** 来源 */
  source?: null | string;
  /** 文件标题 */
  title?: null | string;
  /**
   * 类型(1:灌区灌溉 2:防汛抗旱)
   * @format int32
   */
  type?: number;
  /**
   * 知识类型id
   * @format int64
   */
  typeId?: number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface KnowledgeBaseFileDeleteQO {
  /**
   * 知识目录Id
   * @format int64
   */
  catalogueId: number;
  /**
   * Id
   * @format int64
   */
  id: number;
}

export interface KnowledgeBaseFileFO {
  /** 作者名称 */
  authorName?: null | string;
  /**
   * 知识目录id
   * @format int64
   */
  catalogueId?: number;
  /**
   * 收藏数量
   * @format int32
   */
  collectCount?: number;
  /** 内容描述 */
  content?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  display?: boolean;
  /** true:批量显示 false:批量隐藏 */
  displayType?: boolean;
  /**
   * 下载数量
   * @format int32
   */
  downloadCount?: number;
  /** 文件名 */
  fileName?: null | string;
  /**
   * 文件大小(Byte)
   * @format int64
   */
  fileSize?: number;
  /** @format int64 */
  id?: number;
  /** 批量隐藏显示的id集合 */
  ids?: null | number[];
  /** 文件路径 */
  path?: null | string;
  /** 关键词 */
  primaryKey?: null | string;
  /** 来源 */
  source?: null | string;
  /** 文件标题 */
  title?: null | string;
  /**
   * 类型(1:灌区灌溉 2:防汛抗旱)
   * @format int32
   */
  type?: number;
  /**
   * 知识类型id
   * @format int64
   */
  typeId?: number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface KnowledgeBaseFilePQO {
  /** 作者名称 */
  authorName?: null | string;
  /**
   * 知识目录id
   * @format int64
   */
  catalogueId?: number;
  catalogueIds?: null | number[];
  /**
   * 收藏数量
   * @format int32
   */
  collectCount?: number;
  /** 内容描述 */
  content?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  display?: boolean;
  /**
   * 下载数量
   * @format int32
   */
  downloadCount?: number;
  /** 排序字段 */
  field?: null | string;
  /** 文件名 */
  fileName?: null | string;
  /**
   * 文件大小(Byte)
   * @format int64
   */
  fileSize?: number;
  /** @format int64 */
  id?: number;
  ids?: null | number[];
  /** 搜索关键字内容 */
  keyword?: null | string;
  /** 排序方向 */
  order?: null | string;
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
  /** 文件路径 */
  path?: null | string;
  /** 关键词 */
  primaryKey?: null | string;
  /**
   * 1:标题 2:内容 3:作者 4:关键词
   * @format int32
   */
  queryType?: number;
  /**
   * 1:时间升序 2:时间降序 3:相关性升序  4:相关性降序
   * @format int32
   */
  sort?: number;
  /** 来源 */
  source?: null | string;
  /** 文件标题 */
  title?: null | string;
  /**
   * 类型(1:灌区灌溉 2:防汛抗旱)
   * @format int32
   */
  type?: number;
  /**
   * 知识类型id
   * @format int64
   */
  typeId?: number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface KnowledgeBaseFileQO {
  /** 作者名称 */
  authorName?: null | string;
  /**
   * 知识目录id
   * @format int64
   */
  catalogueId?: number;
  catalogueIds?: null | number[];
  /**
   * 收藏数量
   * @format int32
   */
  collectCount?: number;
  /** 内容描述 */
  content?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  display?: boolean;
  /**
   * 下载数量
   * @format int32
   */
  downloadCount?: number;
  /** 文件名 */
  fileName?: null | string;
  /**
   * 文件大小(Byte)
   * @format int64
   */
  fileSize?: number;
  /** @format int64 */
  id?: number;
  ids?: null | number[];
  /** 搜索关键字内容 */
  keyword?: null | string;
  /** 文件路径 */
  path?: null | string;
  /** 关键词 */
  primaryKey?: null | string;
  /**
   * 1:标题 2:内容 3:作者 4:关键词
   * @format int32
   */
  queryType?: number;
  /**
   * 1:时间升序 2:时间降序 3:相关性升序  4:相关性降序
   * @format int32
   */
  sort?: number;
  /** 来源 */
  source?: null | string;
  /** 文件标题 */
  title?: null | string;
  /**
   * 类型(1:灌区灌溉 2:防汛抗旱)
   * @format int32
   */
  type?: number;
  /**
   * 知识类型id
   * @format int64
   */
  typeId?: number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface KnowledgeBaseFileVO {
  /** 作者名称 */
  authorName?: null | string;
  /**
   * 知识目录id
   * @format int64
   */
  catalogueId?: number;
  /**
   * 收藏数量
   * @format int32
   */
  collectCount?: number;
  /** 内容描述 */
  content?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  display?: boolean;
  /**
   * 下载数量
   * @format int32
   */
  downloadCount?: number;
  /** 文件名 */
  fileName?: null | string;
  /**
   * 文件大小(Byte)
   * @format int64
   */
  fileSize?: number;
  /** @format int64 */
  id?: number;
  /** 是否收藏 */
  isCollect?: boolean;
  list?: null | KnowledgeBaseFile[];
  /** 文件路径 */
  path?: null | string;
  /** 关键词 */
  primaryKey?: null | string;
  primaryKeyList?: null | string[];
  /** 来源 */
  source?: null | string;
  /** 文件标题 */
  title?: null | string;
  /**
   * 类型(1:灌区灌溉 2:防汛抗旱)
   * @format int32
   */
  type?: number;
  /**
   * 知识类型id
   * @format int64
   */
  typeId?: number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /** @format date-time */
  userCollectDateTime?: null | string;
}

export interface KnowledgeCatalogueDataDisplay {
  display?: boolean;
  /** @format int64 */
  id?: number;
}

export interface KnowledgeCatalogueDataDisplayFO {
  dataList?: null | KnowledgeCatalogueDataDisplay[];
}

export interface KnowledgeCatalogueDataSort {
  /** @format int64 */
  id?: number;
  /** @format int32 */
  sort?: number;
}

export interface KnowledgeCatalogueDataSortFO {
  dataList?: null | KnowledgeCatalogueDataSort[];
}

export interface KnowledgeCatalogueFO {
  /**
   * 目录对应文件数量
   * @format int32
   */
  count?: number;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 是否显示 */
  display?: boolean;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 名称 */
  name?: null | string;
  /**
   * 父级id
   * @format int64
   */
  parentId?: number;
  /**
   * 排序号
   * @format int32
   */
  sort?: number;
  /**
   * 类型(1:灌区灌溉 2:防汛抗旱)
   * @format int32
   */
  type?: number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface KnowledgeCatalogueTreeFO {
  /** @format int32 */
  type?: number;
}

export interface KnowledgeCatalogueTreeNode {
  children?: null | KnowledgeCatalogueTreeNode[];
  /** @format int32 */
  count?: number;
  /** 是否显示 */
  display?: boolean;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: null | string;
  /**
   * 父级id
   * @format int64
   */
  parentId?: number;
  /**
   * 排序号
   * @format int32
   */
  sort?: number;
}

export interface KnowledgeCatalogueVO {
  /**
   * 目录对应文件数量
   * @format int32
   */
  count?: number;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 是否显示 */
  display?: boolean;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 名称 */
  name?: null | string;
  /**
   * 父级id
   * @format int64
   */
  parentId?: number;
  /**
   * 排序号
   * @format int32
   */
  sort?: number;
  /**
   * 类型(1:灌区灌溉 2:防汛抗旱)
   * @format int32
   */
  type?: number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

/** 知识库文件 */
export interface KnowledgeFile {
  /**
   * Desc:是否可以删除
   * Default:1
   * Nullable:True
   */
  canDelete?: null | boolean;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  createdAt?: null | string;
  /**
   * Desc:
   * Default:
   * Nullable:True
   */
  createdPerson?: null | string;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  deleteAt?: null | string;
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
  isDelete?: null | boolean;
  /**
   * Desc:级别
   * Default:
   * Nullable:True
   * @format int32
   */
  level?: null | number;
  /**
   * Desc:名称
   * Default:
   * Nullable:False
   */
  name?: null | string;
  /**
   * Desc:路径
   * Default:
   * Nullable:True
   */
  nestedpath?: null | string;
  /**
   * Desc:父级id
   * Default:
   * Nullable:True
   * @format int64
   */
  parentId?: null | number;
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
  remark?: null | string;
  /**
   * Desc:类型(文件、文件夹)
   * Default:
   * Nullable:False
   */
  type?: null | string;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  updatedAt?: null | string;
  /**
   * Desc:
   * Default:
   * Nullable:True
   */
  updatedPerson?: null | string;
}

export interface KnowledgeFilePQO {
  /**
   * Desc:是否可以删除
   * Default:1
   * Nullable:True
   */
  canDelete?: null | boolean;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  createdAt?: null | string;
  /**
   * Desc:
   * Default:
   * Nullable:True
   */
  createdPerson?: null | string;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  deleteAt?: null | string;
  /** 排序字段 */
  field?: null | string;
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
  isDelete?: null | boolean;
  /**
   * Desc:级别
   * Default:
   * Nullable:True
   * @format int32
   */
  level?: null | number;
  /**
   * Desc:名称
   * Default:
   * Nullable:False
   */
  name?: null | string;
  /**
   * Desc:路径
   * Default:
   * Nullable:True
   */
  nestedpath?: null | string;
  /** 排序方向 */
  order?: null | string;
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
  parentId?: null | number;
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
  remark?: null | string;
  /**
   * Desc:类型(文件、文件夹)
   * Default:
   * Nullable:False
   */
  type?: null | string;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  updatedAt?: null | string;
  /**
   * Desc:
   * Default:
   * Nullable:True
   */
  updatedPerson?: null | string;
}

export interface KnowledgeFileQO {
  /**
   * Desc:是否可以删除
   * Default:1
   * Nullable:True
   */
  canDelete?: null | boolean;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  createdAt?: null | string;
  /**
   * Desc:
   * Default:
   * Nullable:True
   */
  createdPerson?: null | string;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  deleteAt?: null | string;
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
  isDelete?: null | boolean;
  /**
   * Desc:级别
   * Default:
   * Nullable:True
   * @format int32
   */
  level?: null | number;
  /**
   * Desc:名称
   * Default:
   * Nullable:False
   */
  name?: null | string;
  /**
   * Desc:路径
   * Default:
   * Nullable:True
   */
  nestedpath?: null | string;
  /**
   * Desc:父级id
   * Default:
   * Nullable:True
   * @format int64
   */
  parentId?: null | number;
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
  remark?: null | string;
  /**
   * Desc:类型(文件、文件夹)
   * Default:
   * Nullable:False
   */
  type?: null | string;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  updatedAt?: null | string;
  /**
   * Desc:
   * Default:
   * Nullable:True
   */
  updatedPerson?: null | string;
}

export interface KnowledgeFileVO {
  /**
   * Desc:是否可以删除
   * Default:1
   * Nullable:True
   */
  canDelete?: null | boolean;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  createdAt?: null | string;
  /**
   * Desc:
   * Default:
   * Nullable:True
   */
  createdPerson?: null | string;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  deleteAt?: null | string;
  /** 后缀名 */
  extname?: null | string;
  /** 文件标识 */
  fileId?: null | string;
  /** 文件名 */
  fileName?: null | string;
  /** 文件路径 */
  filePath?: null | string;
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
  isDelete?: null | boolean;
  /**
   * Desc:级别
   * Default:
   * Nullable:True
   * @format int32
   */
  level?: null | number;
  /**
   * Desc:名称
   * Default:
   * Nullable:False
   */
  name?: null | string;
  /**
   * Desc:路径
   * Default:
   * Nullable:True
   */
  nestedpath?: null | string;
  /**
   * Desc:父级id
   * Default:
   * Nullable:True
   * @format int64
   */
  parentId?: null | number;
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
  remark?: null | string;
  /**
   * Desc:类型(文件、文件夹)
   * Default:
   * Nullable:False
   */
  type?: null | string;
  /**
   * Desc:
   * Default:
   * Nullable:True
   * @format date-time
   */
  updatedAt?: null | string;
  /**
   * Desc:
   * Default:
   * Nullable:True
   */
  updatedPerson?: null | string;
}

export interface KnowledgeTypeFO {
  /**
   * 作者配置长度
   * @format int32
   */
  authorLength?: null | number;
  /** 内容模板 */
  contentTemplate?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 时间格式配置 */
  dateFormat?: null | string;
  /**
   * 目录id
   * @format int64
   */
  directoryId?: null | number;
  /** 文件格式配置 */
  fileFormat?: null | string;
  /** @format int64 */
  id?: number;
  /** 预设关键字 */
  initKeywrods?: null | string;
  /** 标题 */
  title?: null | string;
  /**
   * 类型(1:灌区灌溉 2:防汛抗旱)
   * @format int32
   */
  type?: number;
  /** 类别描述 */
  typeRemark?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface KnowledgeTypePQO {
  /**
   * 作者配置长度
   * @format int32
   */
  authorLength?: null | number;
  /** 内容模板 */
  contentTemplate?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 时间格式配置 */
  dateFormat?: null | string;
  /**
   * 目录id
   * @format int64
   */
  directoryId?: null | number;
  /** 排序字段 */
  field?: null | string;
  /** 文件格式配置 */
  fileFormat?: null | string;
  /** @format int64 */
  id?: number;
  /** 预设关键字 */
  initKeywrods?: null | string;
  /** 排序方向 */
  order?: null | string;
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
  title?: null | string;
  /**
   * 类型(1:灌区灌溉 2:防汛抗旱)
   * @format int32
   */
  type?: number;
  /** 类别描述 */
  typeRemark?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface KnowledgeTypeQO {
  /**
   * 作者配置长度
   * @format int32
   */
  authorLength?: null | number;
  /** 内容模板 */
  contentTemplate?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 时间格式配置 */
  dateFormat?: null | string;
  /**
   * 目录id
   * @format int64
   */
  directoryId?: null | number;
  /** 文件格式配置 */
  fileFormat?: null | string;
  /** @format int64 */
  id?: number;
  /** 预设关键字 */
  initKeywrods?: null | string;
  /** 标题 */
  title?: null | string;
  /**
   * 类型(1:灌区灌溉 2:防汛抗旱)
   * @format int32
   */
  type?: number;
  /** 类别描述 */
  typeRemark?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface KnowledgeTypeVO {
  /**
   * 作者配置长度
   * @format int32
   */
  authorLength?: null | number;
  /** 内容模板 */
  contentTemplate?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 时间格式配置 */
  dateFormat?: null | string;
  /**
   * 目录id
   * @format int64
   */
  directoryId?: null | number;
  /** 文件格式配置 */
  fileFormat?: null | string;
  /** @format int64 */
  id?: number;
  /** 预设关键字 */
  initKeywrods?: null | string;
  /** 标题 */
  title?: null | string;
  /**
   * 类型(1:灌区灌溉 2:防汛抗旱)
   * @format int32
   */
  type?: number;
  /** 类别描述 */
  typeRemark?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface LogaccessFO {
  /** 登录名 */
  authkey?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** @format int64 */
  id?: number;
  /** ip地址 */
  ip?: null | string;
  /** 是否异常 */
  isException?: null | boolean;
  /** 访问结果 */
  result?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface LogaccessPQO {
  /** 登录名 */
  authkey?: null | string;
  /**
   * 开始时间(访问时间)
   * @format date-time
   */
  beginTime?: null | string;
  /**
   * 结束时间(访问时间)
   * @format date-time
   */
  endTime?: null | string;
  /** 排序字段 */
  field?: null | string;
  /** @format int64 */
  id?: number;
  /** ip地址 */
  ip?: null | string;
  /** 是否异常 */
  isException?: null | boolean;
  /** 排序方向 */
  order?: null | string;
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
  result?: null | string;
}

export interface LogaccessQO {
  /** 登录名 */
  authkey?: null | string;
  /**
   * 开始时间(访问时间)
   * @format date-time
   */
  beginTime?: null | string;
  /**
   * 结束时间(访问时间)
   * @format date-time
   */
  endTime?: null | string;
  /** @format int64 */
  id?: number;
  /** ip地址 */
  ip?: null | string;
  /** 是否异常 */
  isException?: null | boolean;
  /** 访问结果 */
  result?: null | string;
}

export interface LogaccessVO {
  /** 登录名 */
  authkey?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** @format int64 */
  id?: number;
  /** ip地址 */
  ip?: null | string;
  /** 是否异常 */
  isException?: null | boolean;
  /** 访问结果 */
  result?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface LogerrorFO {
  /** action */
  action?: null | string;
  /** controller */
  controller?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** @format int64 */
  id?: number;
  /** ip */
  ip?: null | string;
  /** 异常信息 */
  message?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /**
   * 操作用户标识
   * @format int64
   */
  userId?: null | number;
}

export interface LogerrorPQO {
  /** action */
  action?: null | string;
  /**
   * 开始时间(异常时间)
   * @format date-time
   */
  beginTime?: null | string;
  /** controller */
  controller?: null | string;
  createdPerson?: null | string;
  /**
   * 结束时间(异常时间)
   * @format date-time
   */
  endTime?: null | string;
  /** 排序字段 */
  field?: null | string;
  /** @format int64 */
  id?: number;
  /** ip */
  ip?: null | string;
  /** 异常信息 */
  message?: null | string;
  /** 排序方向 */
  order?: null | string;
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
  action?: null | string;
  /**
   * 开始时间(异常时间)
   * @format date-time
   */
  beginTime?: null | string;
  /** controller */
  controller?: null | string;
  createdPerson?: null | string;
  /**
   * 结束时间(异常时间)
   * @format date-time
   */
  endTime?: null | string;
  /** @format int64 */
  id?: number;
  /** ip */
  ip?: null | string;
  /** 异常信息 */
  message?: null | string;
}

export interface LogerrorVO {
  /** action */
  action?: null | string;
  /** controller */
  controller?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** @format int64 */
  id?: number;
  /** ip */
  ip?: null | string;
  /** 异常信息 */
  message?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /**
   * 操作用户标识
   * @format int64
   */
  userId?: null | number;
}

export interface LoginQO {
  /** 用户名 */
  authkey?: null | string;
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
  loginname?: null | string;
  /** 手机号 */
  mobile?: null | string;
  /** 姓名 */
  name?: null | string;
  /**
   * 部门id
   * @format int64
   */
  organizationId?: null | number;
  /** 部门名称 */
  organizationName?: null | string;
  resources?: null | string[];
  roles?: null | IdName[];
  /** 性别 */
  sex?: null | string;
}

export interface LoginResultVO {
  accessToken?: null | string;
  refreshToken?: null | string;
  user?: LoginResultUserAO;
}

export interface LogoperationFO {
  /** action */
  action?: null | string;
  /** controller */
  controller?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 环境 */
  environment?: null | string;
  /** @format int64 */
  id?: number;
  /** ip */
  ip?: null | string;
  /** 是否异常 */
  isException?: null | boolean;
  /** 参数 */
  parameters?: null | string;
  /** 远程地址 */
  refererUrl?: null | string;
  /** 请求地址 */
  requestUrl?: null | string;
  /**
   * 操作时间(毫秒)
   * @format int64
   */
  timeElapsed?: null | number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /**
   * 操作用户标识
   * @format int64
   */
  userId?: null | number;
}

export interface LogoperationPQO {
  /** action */
  action?: null | string;
  /**
   * 开始时间(异常时间)
   * @format date-time
   */
  beginTime?: null | string;
  /** controller */
  controller?: null | string;
  createdPerson?: null | string;
  /**
   * 结束时间(异常时间)
   * @format date-time
   */
  endTime?: null | string;
  /** 环境 */
  environment?: null | string;
  /** 排序字段 */
  field?: null | string;
  /** @format int64 */
  id?: number;
  /** ip */
  ip?: null | string;
  /** 是否异常 */
  isException?: null | boolean;
  /** 排序方向 */
  order?: null | string;
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
  refererUrl?: null | string;
  /** 请求地址 */
  requestUrl?: null | string;
}

export interface LogoperationQO {
  /** action */
  action?: null | string;
  /**
   * 开始时间(异常时间)
   * @format date-time
   */
  beginTime?: null | string;
  /** controller */
  controller?: null | string;
  createdPerson?: null | string;
  /**
   * 结束时间(异常时间)
   * @format date-time
   */
  endTime?: null | string;
  /** 环境 */
  environment?: null | string;
  /** @format int64 */
  id?: number;
  /** ip */
  ip?: null | string;
  /** 是否异常 */
  isException?: null | boolean;
  /** 远程地址 */
  refererUrl?: null | string;
  /** 请求地址 */
  requestUrl?: null | string;
}

export interface LogoperationVO {
  /** action */
  action?: null | string;
  /** controller */
  controller?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 环境 */
  environment?: null | string;
  /** @format int64 */
  id?: number;
  /** ip */
  ip?: null | string;
  /** 是否异常 */
  isException?: null | boolean;
  /** 参数 */
  parameters?: null | string;
  /** 远程地址 */
  refererUrl?: null | string;
  /** 请求地址 */
  requestUrl?: null | string;
  /**
   * 操作时间(毫秒)
   * @format int64
   */
  timeElapsed?: null | number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /**
   * 操作用户标识
   * @format int64
   */
  userId?: null | number;
}

export interface MessagePQO {
  /** 内容 */
  content?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 排序字段 */
  field?: null | string;
  /** 流程引擎里的id */
  ftwobpmId?: null | string;
  /** @format int64 */
  id?: number;
  /** 排序方向 */
  order?: null | string;
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
  recordId?: null | number;
  /** 标题 */
  title?: null | string;
  /** 类型 */
  type?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface MessageQO {
  /** 内容 */
  content?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 流程引擎里的id */
  ftwobpmId?: null | string;
  /** @format int64 */
  id?: number;
  /**
   * 实体id
   * @format int64
   */
  recordId?: null | number;
  /** 标题 */
  title?: null | string;
  /** 类型 */
  type?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
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
  content?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 流程引擎里的id */
  ftwobpmId?: null | string;
  /** @format int64 */
  id?: number;
  /**
   * 实体id
   * @format int64
   */
  recordId?: null | number;
  /** 标题 */
  title?: null | string;
  /** 类型 */
  type?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
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

export interface OrganizationForm {
  /** 地址 */
  address?: null | string;
  /** 编号 */
  code?: null | string;
  /** 联系人 */
  contactPerson?: null | string;
  /** 联系人联系方式 */
  contactWay?: null | string;
  /** @format int64 */
  id?: number;
  /** 是否在地图中显示 */
  isDisplayInmap?: null | boolean;
  /** 是否启用 */
  isEnable?: null | boolean;
  /** 是否包含视频 */
  isVideo?: null | boolean;
  /**
   * 纬度
   * @format double
   */
  latitude?: null | number;
  /**
   * 经度
   * @format double
   */
  longitude?: null | number;
  /** 名称 */
  name?: null | string;
  /**
   * 父级
   * @format int64
   */
  parentId?: null | number;
  /** 备注 */
  remark?: null | string;
}

export interface OrganizationPQO {
  /** 地址 */
  address?: null | string;
  /** 编号 */
  code?: null | string;
  /** 联系人 */
  contactPerson?: null | string;
  /** 联系人联系方式 */
  contactWay?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 排序字段 */
  field?: null | string;
  /** @format int64 */
  id?: number;
  /** 是否在地图中显示 */
  isDisplayInmap?: null | boolean;
  /** 是否启用 */
  isEnable?: null | boolean;
  /** 是否包含视频 */
  isVideo?: null | boolean;
  /**
   * 纬度
   * @format double
   */
  latitude?: null | number;
  /**
   * 级别
   * @format int32
   */
  level?: null | number;
  /**
   * 经度
   * @format double
   */
  longitude?: null | number;
  /** 名称 */
  name?: null | string;
  /** 路径 */
  nestedpath?: null | string;
  /** 排序方向 */
  order?: null | string;
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
  parentId?: null | number;
  /**
   * 路径key
   * @format int32
   */
  pathkey?: number;
  /** 备注 */
  remark?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface OrganizationQO {
  /** 地址 */
  address?: null | string;
  /** 编号 */
  code?: null | string;
  /** 联系人 */
  contactPerson?: null | string;
  /** 联系人联系方式 */
  contactWay?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** @format int64 */
  id?: number;
  /** 是否在地图中显示 */
  isDisplayInmap?: null | boolean;
  /** 是否启用 */
  isEnable?: null | boolean;
  /** 是否包含视频 */
  isVideo?: null | boolean;
  /**
   * 纬度
   * @format double
   */
  latitude?: null | number;
  /**
   * 级别
   * @format int32
   */
  level?: null | number;
  /**
   * 经度
   * @format double
   */
  longitude?: null | number;
  /** 名称 */
  name?: null | string;
  /** 路径 */
  nestedpath?: null | string;
  /**
   * 父级
   * @format int64
   */
  parentId?: null | number;
  /**
   * 路径key
   * @format int32
   */
  pathkey?: number;
  /** 备注 */
  remark?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface OrganizationVO {
  /** 地址 */
  address?: null | string;
  /** 编号 */
  code?: null | string;
  /** 联系人 */
  contactPerson?: null | string;
  /** 联系人联系方式 */
  contactWay?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** @format int64 */
  id?: number;
  /** 是否在地图中显示 */
  isDisplayInmap?: null | boolean;
  /** 是否启用 */
  isEnable?: null | boolean;
  /** 是否包含视频 */
  isVideo?: null | boolean;
  /**
   * 纬度
   * @format double
   */
  latitude?: null | number;
  /**
   * 级别
   * @format int32
   */
  level?: null | number;
  /**
   * 经度
   * @format double
   */
  longitude?: null | number;
  /** 名称 */
  name?: null | string;
  /** 路径 */
  nestedpath?: null | string;
  /**
   * 父级
   * @format int64
   */
  parentId?: null | number;
  /** 上级组织机构 */
  parentName?: null | string;
  /**
   * 路径key
   * @format int32
   */
  pathkey?: number;
  /** 备注 */
  remark?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface RecordFile {
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 后缀名 */
  extname?: null | string;
  /** 文件标识 */
  fileId?: null | string;
  /** 文件名 */
  fileName?: null | string;
  /** 原始文件名 */
  fileNameOrigin?: null | string;
  /** 文件路径 */
  filePath?: null | string;
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
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

/** 用户分页查询参数类 */
export interface RecordFilePQO {
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 后缀名 */
  extname?: null | string;
  /** 排序字段 */
  field?: null | string;
  /** 文件标识 */
  fileId?: null | string;
  /** 文件名 */
  fileName?: null | string;
  /** 原始文件名 */
  fileNameOrigin?: null | string;
  /** 文件路径 */
  filePath?: null | string;
  /**
   * 文件大小(Byte)
   * @format int64
   */
  fileSize?: number;
  /** @format int64 */
  id?: number;
  /** 排序方向 */
  order?: null | string;
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
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface RecordFileQO {
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 后缀名 */
  extname?: null | string;
  /** 文件标识 */
  fileId?: null | string;
  /** 文件名 */
  fileName?: null | string;
  /** 原始文件名 */
  fileNameOrigin?: null | string;
  /** 文件路径 */
  filePath?: null | string;
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
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface RecordFileVO {
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 后缀名 */
  extname?: null | string;
  /** 文件标识 */
  fileId?: null | string;
  /** 文件名 */
  fileName?: null | string;
  /** 原始文件名 */
  fileNameOrigin?: null | string;
  /** 文件路径 */
  filePath?: null | string;
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
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface RegionFO {
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  geojson?: null | string;
  /** @format int64 */
  id?: number;
  /** @format int32 */
  level?: null | number;
  name?: null | string;
  nestedpath?: null | string;
  /** @format int64 */
  parentId?: null | number;
  /** @format int32 */
  pathkey?: number;
  remark?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface RegionPQO {
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 排序字段 */
  field?: null | string;
  geojson?: null | string;
  /** @format int64 */
  id?: number;
  /** @format int32 */
  level?: null | number;
  name?: null | string;
  nestedpath?: null | string;
  /** 排序方向 */
  order?: null | string;
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
  parentId?: null | number;
  /** @format int32 */
  pathkey?: number;
  remark?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface RegionQO {
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  geojson?: null | string;
  /** @format int64 */
  id?: number;
  /** @format int32 */
  level?: null | number;
  name?: null | string;
  nestedpath?: null | string;
  /** @format int64 */
  parentId?: null | number;
  /** @format int32 */
  pathkey?: number;
  remark?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface RegionVO {
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  geojson?: null | string;
  /** @format int64 */
  id?: number;
  /** @format int32 */
  level?: null | number;
  name?: null | string;
  nestedpath?: null | string;
  /** @format int64 */
  parentId?: null | number;
  /** @format int32 */
  pathkey?: number;
  remark?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
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
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** @format int64 */
  id?: number;
  /** 是否仅限管理员 */
  isAdmin?: null | boolean;
  /** 是否启用 */
  isEnable?: null | boolean;
  /**
   * 级别
   * @format int32
   */
  level?: null | number;
  /** 名称 */
  name?: null | string;
  /** 路径 */
  nestedpath?: null | string;
  /**
   * 父级
   * @format int64
   */
  parentId?: null | number;
  /**
   * 路径key
   * @format int32
   */
  pathkey?: number;
  /** 备注 */
  remark?: null | string;
  /** 路由名称列表 */
  routeNames?: null | string[];
  /** 类型 */
  type?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

/** 用户分页查询参数类 */
export interface ResourcePQO {
  /** 编号 */
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 排序字段 */
  field?: null | string;
  /** @format int64 */
  id?: number;
  /** 是否仅限管理员 */
  isAdmin?: null | boolean;
  /** 是否启用 */
  isEnable?: null | boolean;
  /**
   * 级别
   * @format int32
   */
  level?: null | number;
  /** 名称 */
  name?: null | string;
  /** 路径 */
  nestedpath?: null | string;
  /** 排序方向 */
  order?: null | string;
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
  parentId?: null | number;
  /**
   * 路径key
   * @format int32
   */
  pathkey?: number;
  /** 备注 */
  remark?: null | string;
  /** 类型 */
  type?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface ResourceQO {
  /** 编号 */
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** @format int64 */
  id?: number;
  /** 是否仅限管理员 */
  isAdmin?: null | boolean;
  /** 是否启用 */
  isEnable?: null | boolean;
  /**
   * 级别
   * @format int32
   */
  level?: null | number;
  /** 名称 */
  name?: null | string;
  /** 路径 */
  nestedpath?: null | string;
  /**
   * 父级
   * @format int64
   */
  parentId?: null | number;
  /**
   * 路径key
   * @format int32
   */
  pathkey?: number;
  /** 备注 */
  remark?: null | string;
  /** 类型 */
  type?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface ResourceRoute {
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** @format int64 */
  id?: number;
  /**
   * 资源id
   * @format int64
   */
  resourceId?: number;
  /** 后端路由名称 */
  routeName?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface ResourceVO {
  /** 编号 */
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** @format int64 */
  id?: number;
  /** 是否仅限管理员 */
  isAdmin?: null | boolean;
  /** 是否启用 */
  isEnable?: null | boolean;
  /** 名称 */
  name?: null | string;
  /**
   * 父级
   * @format int64
   */
  parentId?: null | number;
  /** 备注 */
  remark?: null | string;
  resourceRoutes?: null | ResourceRoute[];
  /** 路由名称列表 */
  routeNames?: null | string[];
  /** 类型 */
  type?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface RoleAssignResourcesQO {
  resourceIds: number[];
  /** @format int64 */
  roleId: number;
}

export interface RoleFO {
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** @format int64 */
  id?: number;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /** 备注 */
  remark?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

/** 用户分页查询参数类 */
export interface RolePQO {
  /** 排序字段 */
  field?: null | string;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: null | string;
  /** 排序方向 */
  order?: null | string;
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
  name?: null | string;
}

export interface RoleVO {
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** @format int64 */
  id?: number;
  /**
   * 名称
   * @minLength 1
   */
  name: string;
  /** 备注 */
  remark?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

/** 分页泛型集合 */
export interface SqlSugarPagedListAppVersionVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: null | AppVersionVO[];
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
export interface SqlSugarPagedListBizCropsTypeVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: null | BizCropsTypeVO[];
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
export interface SqlSugarPagedListBizCropsVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: null | BizCropsVO[];
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
export interface SqlSugarPagedListBizGrowStageVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: null | BizGrowStageVO[];
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
export interface SqlSugarPagedListBizIrrigationDistrictVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: null | BizIrrigationDistrictVO[];
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
export interface SqlSugarPagedListBizPlantingPlanVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: null | BizPlantingPlanVO[];
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
export interface SqlSugarPagedListBizPlantingSchemeVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: null | BizPlantingSchemeVO[];
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
  items?: null | DataDictionaryVO[];
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
  items?: null | EquipmentParamVO[];
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
  items?: null | EquipmentVO[];
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
export interface SqlSugarPagedListKnowledgeBaseFileVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: null | KnowledgeBaseFileVO[];
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
  items?: null | KnowledgeFileVO[];
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
export interface SqlSugarPagedListKnowledgeTypeVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: null | KnowledgeTypeVO[];
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
  items?: null | LogaccessVO[];
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
  items?: null | LogerrorVO[];
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
  items?: null | LogoperationVO[];
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
  items?: null | MessageVO[];
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
  items?: null | OrganizationVO[];
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
  items?: null | RecordFileVO[];
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
export interface SqlSugarPagedListRegionVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: null | RegionVO[];
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
  items?: null | ResourceVO[];
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
  items?: null | RoleVO[];
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
export interface SqlSugarPagedListTechnicsTypeVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: null | TechnicsTypeVO[];
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
  items?: null | TechnicsVO[];
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
  items?: null | UserMessageVO[];
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
export interface SqlSugarPagedListUserRegionVO {
  /** 是否有下一页 */
  hasNextPage?: boolean;
  /** 是否有上一页 */
  hasPrevPage?: boolean;
  /** 当前页集合 */
  items?: null | UserRegionVO[];
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
  items?: null | UserVO[];
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
  items?: null | UsergroupVO[];
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

export interface TechnicsFO {
  /** 地址 */
  address?: null | string;
  /** 编号 */
  code?: null | string;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: null | string;
  /** @format int64 */
  id?: number;
  /**
   * 所属灌区
   * @format int64
   */
  irrigationDistrictId?: null | number;
  /** 是否启用 */
  isEnable?: null | boolean;
  /** 是否启用监测 */
  isMonitor?: null | boolean;
  /** 是否在线 */
  isOnline?: null | boolean;
  /** 是否预警 */
  isPrealarm?: null | boolean;
  /**
   * 纬度
   * @format double
   */
  latitude?: null | number;
  /**
   * 经度
   * @format double
   */
  longitude?: null | number;
  /** 监测状态 */
  monitorState?: null | string;
  /** 名称 */
  name?: null | string;
  /** 备注 */
  remark?: null | string;
  /** 测站编码 */
  stationCode?: null | string;
  /**
   * 点位类型
   * @format int64
   */
  technicsTypeId?: null | number;
}

export interface TechnicsPQO {
  /** 地址 */
  address?: null | string;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: null | string;
  /** 编号 */
  code?: null | string;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: null | string;
  /** 创建人 */
  createdPerson?: null | string;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: null | string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: null | string;
  /** 排序字段 */
  field?: null | string;
  /** @format int64 */
  id?: number;
  /**
   * 所属灌区
   * @format int64
   */
  irrigationDistrictId?: null | number;
  /** 是否启用 */
  isEnable?: null | boolean;
  /** 是否启用监测 */
  isMonitor?: null | boolean;
  /** 是否在线 */
  isOnline?: null | boolean;
  /** 是否预警 */
  isPrealarm?: null | boolean;
  /**
   * 纬度
   * @format double
   */
  latitude?: null | number;
  /**
   * 经度
   * @format double
   */
  longitude?: null | number;
  /** 监测状态 */
  monitorState?: null | string;
  /** 名称 */
  name?: null | string;
  /** 排序方向 */
  order?: null | string;
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
  remark?: null | string;
  /** 测站编码 */
  stationCode?: null | string;
  /**
   * 点位类型
   * @format int64
   */
  technicsTypeId?: null | number;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: null | string;
  /** 更新人 */
  updatedPerson?: null | string;
}

export interface TechnicsQO {
  /** 地址 */
  address?: null | string;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: null | string;
  /** 编号 */
  code?: null | string;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: null | string;
  /** 创建人 */
  createdPerson?: null | string;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: null | string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: null | string;
  /** @format int64 */
  id?: number;
  /**
   * 所属灌区
   * @format int64
   */
  irrigationDistrictId?: null | number;
  /** 是否启用 */
  isEnable?: null | boolean;
  /** 是否启用监测 */
  isMonitor?: null | boolean;
  /** 是否在线 */
  isOnline?: null | boolean;
  /** 是否预警 */
  isPrealarm?: null | boolean;
  /**
   * 纬度
   * @format double
   */
  latitude?: null | number;
  /**
   * 经度
   * @format double
   */
  longitude?: null | number;
  /** 监测状态 */
  monitorState?: null | string;
  /** 名称 */
  name?: null | string;
  /** 备注 */
  remark?: null | string;
  /** 测站编码 */
  stationCode?: null | string;
  /**
   * 点位类型
   * @format int64
   */
  technicsTypeId?: null | number;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: null | string;
  /** 更新人 */
  updatedPerson?: null | string;
}

export interface TechnicsTypeFO {
  /** 编码 */
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface TechnicsTypePQO {
  /** 编码 */
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 排序字段 */
  field?: null | string;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: null | string;
  /** 排序方向 */
  order?: null | string;
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
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface TechnicsTypeQO {
  /** 编码 */
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface TechnicsTypeVO {
  /** 编码 */
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** @format int64 */
  id?: number;
  /** 名称 */
  name?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
}

export interface TechnicsVO {
  /** 地址 */
  address?: null | string;
  /** 编号 */
  code?: null | string;
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: null | string;
  /** 创建人 */
  createdPerson?: null | string;
  /**
   * 数据时间
   * @format date-time
   */
  dataTime?: null | string;
  /** @format int64 */
  id?: number;
  /**
   * 所属灌区
   * @format int64
   */
  irrigationDistrictId?: null | number;
  /** 所属灌区名称 */
  irrigationDistrictName?: null | string;
  /** 是否启用 */
  isEnable?: null | boolean;
  /** 是否启用监测 */
  isMonitor?: null | boolean;
  /** 是否在线 */
  isOnline?: null | boolean;
  /** 是否预警 */
  isPrealarm?: null | boolean;
  /**
   * 纬度
   * @format double
   */
  latitude?: null | number;
  /**
   * 经度
   * @format double
   */
  longitude?: null | number;
  /** 监测状态 */
  monitorState?: null | string;
  /** 名称 */
  name?: null | string;
  /** 备注 */
  remark?: null | string;
  /** 测站编码 */
  stationCode?: null | string;
  /**
   * 点位类型
   * @format int64
   */
  technicsTypeId?: null | number;
  /** 类型名称 */
  technicsTypeName?: null | string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: null | string;
  /** 更新人 */
  updatedPerson?: null | string;
}

export interface TreeNode {
  children?: null | TreeNode[];
  /** @format int64 */
  id?: number;
  name?: null | string;
}

export interface TreeNodeKf {
  children?: null | TreeNodeKf[];
  /** @format int64 */
  id?: number;
  name?: null | string;
  type?: null | string;
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
  address?: null | string;
  /**
   * 出生日期
   * @format date-time
   */
  birthday?: null | string;
  /** 是否可以登录 */
  canLogin?: null | boolean;
  /**
   * 编号
   * @minLength 0
   * @maxLength 50
   */
  code: string;
  /** 邮箱 */
  email?: null | string;
  /**
   * Id
   * @format int64
   */
  id?: number;
  /** 身份证号码 */
  idcode?: null | string;
  /** 是否启用 */
  isEnable?: null | boolean;
  /** 手机号 */
  mobile?: null | string;
  /**
   * 姓名
   * @minLength 0
   * @maxLength 50
   */
  name: string;
  /** 民族 */
  nation?: null | string;
  /**
   * 组织机构
   * @format int64
   */
  organizationId: number;
  /** 所属区域列表(乡镇级) */
  regionIdList?: null | number[];
  /** 备注 */
  remark?: null | string;
  /** 性别 */
  sex?: null | string;
  typeCode?: null | string;
  /** 微信openid */
  wxopenid?: null | string;
  /** 微信unionid */
  wxunionid?: null | string;
}

export interface UserFormAdd {
  /** 地址 */
  address?: null | string;
  /**
   * 出生日期
   * @format date-time
   */
  birthday?: null | string;
  /** 是否可以登录 */
  canLogin?: null | boolean;
  /**
   * 编号
   * @minLength 0
   * @maxLength 50
   */
  code: string;
  /** 邮箱 */
  email?: null | string;
  /**
   * Id
   * @format int64
   */
  id?: number;
  /** 身份证号码 */
  idcode?: null | string;
  /** 是否启用 */
  isEnable?: null | boolean;
  /**
   * 登录名
   * @minLength 0
   * @maxLength 50
   */
  loginname: string;
  /** 手机号 */
  mobile?: null | string;
  /**
   * 姓名
   * @minLength 0
   * @maxLength 50
   */
  name: string;
  /** 民族 */
  nation?: null | string;
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
  /** 所属区域列表(乡镇级) */
  regionIdList?: null | number[];
  /** 备注 */
  remark?: null | string;
  /** 性别 */
  sex?: null | string;
  typeCode?: null | string;
  /** 微信openid */
  wxopenid?: null | string;
  /** 微信unionid */
  wxunionid?: null | string;
}

export interface UserMessagePQO {
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /**
   * 删除时间
   * @format date-time
   */
  deleteTime?: null | string;
  /** 排序字段 */
  field?: null | string;
  /** @format int64 */
  id?: number;
  /** 是否已删除 */
  isDelete?: null | boolean;
  /** 是否已读 */
  isRead?: null | boolean;
  /** @format int64 */
  messageId?: number;
  /** 排序方向 */
  order?: null | string;
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
  readTime?: null | string;
  /** 标题 */
  title?: null | string;
  /** 类型 */
  type?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /** @format int64 */
  userId?: number;
}

export interface UserMessageQO {
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /**
   * 删除时间
   * @format date-time
   */
  deleteTime?: null | string;
  /** @format int64 */
  id?: number;
  /** 是否已删除 */
  isDelete?: null | boolean;
  /** 是否已读 */
  isRead?: null | boolean;
  /** @format int64 */
  messageId?: number;
  /**
   * 读取时间
   * @format date-time
   */
  readTime?: null | string;
  /** 标题 */
  title?: null | string;
  /** 类型 */
  type?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /** @format int64 */
  userId?: number;
}

export interface UserMessageVO {
  /** 内容 */
  content?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /**
   * 删除时间
   * @format date-time
   */
  deleteTime?: null | string;
  /** @format int64 */
  id?: number;
  /** 是否已删除 */
  isDelete?: null | boolean;
  /** 是否已读 */
  isRead?: null | boolean;
  /** @format int64 */
  messageId?: number;
  /**
   * 读取时间
   * @format date-time
   */
  readTime?: null | string;
  /**
   * 实体id
   * @format int64
   */
  recordId?: null | number;
  /** 标题 */
  title?: null | string;
  /** 类型 */
  type?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /** @format int64 */
  userId?: number;
}

/** 用户分页查询参数类 */
export interface UserPQO {
  /** 地址 */
  address?: null | string;
  /**
   * 出生日期
   * @format date-time
   */
  birthday?: null | string;
  /** 是否可以登录 */
  canLogin?: null | boolean;
  /** 编号 */
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 邮箱 */
  email?: null | string;
  /** 排序字段 */
  field?: null | string;
  /** @format int64 */
  id?: number;
  /** 身份证号码 */
  idcode?: null | string;
  /** 是否启用 */
  isEnable?: null | boolean;
  /**
   * 上次登录时间
   * @format date-time
   */
  lastLoginTime?: null | string;
  /** 登录名 */
  loginname?: null | string;
  /** @format int32 */
  maxNos?: null | number;
  /** 手机号 */
  mobile?: null | string;
  /** 姓名 */
  name?: null | string;
  /** 民族 */
  nation?: null | string;
  /** 排序方向 */
  order?: null | string;
  /** @format int64 */
  organizationId?: null | number;
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
  password?: null | string;
  remark?: null | string;
  /** 性别 */
  sex?: null | string;
  /**
   * ssoid
   * @format int64
   */
  ssoId?: null | number;
  typeCode?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /** 微信openid */
  wxopenid?: null | string;
  /** 微信unionid */
  wxunionid?: null | string;
}

export interface UserQO {
  /** 地址 */
  address?: null | string;
  /**
   * 出生日期
   * @format date-time
   */
  birthday?: null | string;
  /** 是否可以登录 */
  canLogin?: null | boolean;
  /** 编号 */
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 邮箱 */
  email?: null | string;
  /** @format int64 */
  id?: number;
  /** 身份证号码 */
  idcode?: null | string;
  /** 是否启用 */
  isEnable?: null | boolean;
  /**
   * 上次登录时间
   * @format date-time
   */
  lastLoginTime?: null | string;
  /** 登录名 */
  loginname?: null | string;
  /** @format int32 */
  maxNos?: null | number;
  /** 手机号 */
  mobile?: null | string;
  /** 姓名 */
  name?: null | string;
  /** 民族 */
  nation?: null | string;
  /** @format int64 */
  organizationId?: null | number;
  /** 密码 */
  password?: null | string;
  remark?: null | string;
  /** 性别 */
  sex?: null | string;
  /**
   * ssoid
   * @format int64
   */
  ssoId?: null | number;
  typeCode?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /** 微信openid */
  wxopenid?: null | string;
  /** 微信unionid */
  wxunionid?: null | string;
}

export interface UserRegionFO {
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** @format int64 */
  id?: number;
  /**
   * 区域id
   * @format int64
   */
  regionId?: number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface UserRegionPQO {
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 排序字段 */
  field?: null | string;
  /** @format int64 */
  id?: number;
  /** 排序方向 */
  order?: null | string;
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
   * 区域id
   * @format int64
   */
  regionId?: number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface UserRegionQO {
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** @format int64 */
  id?: number;
  /**
   * 区域id
   * @format int64
   */
  regionId?: number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /**
   * 用户id
   * @format int64
   */
  userId?: number;
}

export interface UserRegionVO {
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** @format int64 */
  id?: number;
  /**
   * 区域id
   * @format int64
   */
  regionId?: number;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /**
   * 用户id
   * @format int64
   */
  userId?: number;
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
  address?: null | string;
  /**
   * 出生日期
   * @format date-time
   */
  birthday?: null | string;
  /** 邮箱 */
  email?: null | string;
  /** 身份证号码 */
  idcode?: null | string;
  /** 手机号 */
  mobile?: null | string;
  /**
   * 姓名
   * @minLength 0
   * @maxLength 50
   */
  name: string;
  /** 民族 */
  nation?: null | string;
  /** 性别 */
  sex?: null | string;
}

export interface UserVO {
  /** 地址 */
  address?: null | string;
  /**
   * 出生日期
   * @format date-time
   */
  birthday?: null | string;
  /** 是否可以登录 */
  canLogin?: null | boolean;
  /** 编号 */
  code?: null | string;
  /** @format date-time */
  createdAt?: null | string;
  createdPerson?: null | string;
  /** 邮箱 */
  email?: null | string;
  /** @format int64 */
  id?: number;
  /** 身份证号码 */
  idcode?: null | string;
  /** 是否启用 */
  isEnable?: null | boolean;
  /**
   * 上次登录时间
   * @format date-time
   */
  lastLoginTime?: null | string;
  /** 登录名 */
  loginname?: null | string;
  /** @format int32 */
  maxNos?: null | number;
  /** 手机号 */
  mobile?: null | string;
  /** 姓名 */
  name?: null | string;
  /** 民族 */
  nation?: null | string;
  /** @format int64 */
  organizationId?: null | number;
  /** 组织机构名称 */
  organizationName?: null | string;
  /** 密码 */
  password?: null | string;
  /** 所属区域列表 */
  regionIdList?: null | number[];
  remark?: null | string;
  /** 性别 */
  sex?: null | string;
  /**
   * ssoid
   * @format int64
   */
  ssoId?: null | number;
  typeCode?: null | string;
  /** @format date-time */
  updatedAt?: null | string;
  updatedPerson?: null | string;
  /** 微信openid */
  wxopenid?: null | string;
  /** 微信unionid */
  wxunionid?: null | string;
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
  createdAt?: null | string;
  /** 创建人 */
  createdPerson?: null | string;
  /**
   * Id
   * @format int64
   */
  id?: number;
  /** 名称 */
  name?: null | string;
  /** 备注 */
  remark?: null | string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: null | string;
  /** 更新人 */
  updatedPerson?: null | string;
}

export interface UsergroupPQO {
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: null | string;
  /** 创建人 */
  createdPerson?: null | string;
  /** 排序字段 */
  field?: null | string;
  /**
   * Id
   * @format int64
   */
  id?: number;
  /** 名称 */
  name?: null | string;
  /** 排序方向 */
  order?: null | string;
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
  remark?: null | string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: null | string;
  /** 更新人 */
  updatedPerson?: null | string;
}

export interface UsergroupQO {
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: null | string;
  /** 创建人 */
  createdPerson?: null | string;
  /**
   * Id
   * @format int64
   */
  id?: number;
  /** 名称 */
  name?: null | string;
  /** 备注 */
  remark?: null | string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: null | string;
  /** 更新人 */
  updatedPerson?: null | string;
}

export interface UsergroupVO {
  /**
   * 创建时间
   * @format date-time
   */
  createdAt?: null | string;
  /** 创建人 */
  createdPerson?: null | string;
  /**
   * Id
   * @format int64
   */
  id?: number;
  /** 名称 */
  name?: null | string;
  /** 备注 */
  remark?: null | string;
  /**
   * 更新时间
   * @format date-time
   */
  updatedAt?: null | string;
  /** 更新人 */
  updatedPerson?: null | string;
}
