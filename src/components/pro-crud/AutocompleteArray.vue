<script setup lang="ts">
import EpPlus from '~icons/ep/plus'
import EpMinus from '~icons/ep/minus'
import { nanoid } from 'nanoid' // 如果项目没有 nanoid
import { ref } from 'vue'

// 定义数组 model
const model = defineModel<string[]>({
  default: [],
})

const cusList = ref<
  {
    route: string
    key: string
  }[]
>([])

const handles = {
  add() {
    cusList.value = [...cusList.value, {
      route: '',
      key: nanoid(),
    }]
    model.value = cusList.value.map((item) => item.route)
  },
  remove(idx: number) {
    cusList.value = cusList.value.filter((_, i) => i !== idx)
    model.value = cusList.value.map((item) => item.route)
  },
  initData() {
    cusList.value = model.value.map((item) => ({
      route: item as string,
      key: nanoid(),
    }))
  },
}
handles.initData();
if (model.value.length < 1) {
  handles.add()
}
</script>

<template>
  <div class="w-full">
    <div v-for="(item, idx) in cusList" :key="item.key" class="flex mt-1.5">
      <el-autocomplete
        :fetchSuggestions="$attrs.fetchSuggestions"
        class="grow"
        v-model="model[idx]"
      />
      <div class="w-30 ml-3">
        <el-button :icon="EpMinus" @click="handles.remove(idx)" v-if="model.length > 1" />
        <el-button :icon="EpPlus" @click="handles.add" v-show="model.length - 1 === idx" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
