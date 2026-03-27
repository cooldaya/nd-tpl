<script setup lang="ts">
import { createCurdData } from './curd-datas/user-message-data.ts'
import EpArrowUp from '~icons/ep/arrow-up'
definePage({
  meta: {
    title: '用户消息管理',
  },
})

const { curdRefData, crudProps, paginationRefData, menuRefData } = createCurdData()
</script>

<template>
  <div class="nd-wh-full">
    <pro-card header="用户消息管理" class="h-[calc(100%-24px)]">
      <pro-crud
        v-bind="crudProps"
        v-model="curdRefData.form"
        v-model:search="curdRefData.searchForm"
        v-model:current-page="paginationRefData.currentPage"
        v-model:page-size="paginationRefData.pageSize"
      >
        <template #search-menu-right>
          <el-button @click="menuRefData.searchFormExpand = !menuRefData.searchFormExpand">
            <EpArrowUp
              class="duration-300"
              :class="[menuRefData.searchFormExpand ? '' : '-rotate-180']"
            />
          </el-button>
        </template>
      </pro-crud>
    </pro-card>
  </div>
</template>

<style lang="scss" scoped></style>
