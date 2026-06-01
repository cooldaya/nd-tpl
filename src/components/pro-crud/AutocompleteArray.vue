<script setup lang="ts">
import EpPlus from '~icons/ep/plus'
import EpMinus from '~icons/ep/minus'
import { nanoid } from 'nanoid'
import { ref, watch } from 'vue'

const model = defineModel<string[]>({
  default: () =>[],
})

const cusList = ref<{ route: string; key: string }[]>([])

// 1. 初始化逻辑：将 model 同步到本地 cusList
const init = () => {
  if (model.value.length === 0) {
    cusList.value = [{ route: '', key: nanoid() }]
  } else {
    cusList.value = model.value.map((item) => ({
      route: item,
      key: nanoid(),
    }))
  }
}

// 2. 同步逻辑：当 cusList 变化时，更新 model
const syncToModel = () => {
  model.value = cusList.value.map((item) => item.route)
}

const handles = {
  add() {
    cusList.value.push({ route: '', key: nanoid() })
    syncToModel()
  },
  remove(idx: number) {
    cusList.value.splice(idx, 1)
    syncToModel()
  },
}

init()
</script>

<template>
  <div class="w-full">
    <div v-for="(item, idx) in cusList" :key="item.key" class="flex mt-1.5">
      <!-- v-model 绑定的是 cusList 内部的 route -->
      <el-autocomplete
        :fetchSuggestions="$attrs.fetchSuggestions"
        class="grow"
        v-model="item.route"
        @input="syncToModel"
      />
      <div class="w-30 ml-3">
        <el-button :icon="EpMinus" @click="handles.remove(idx)" v-if="cusList.length > 1" />
        <el-button :icon="EpPlus" @click="handles.add" v-if="cusList.length - 1 === idx" />
      </div>
    </div>
  </div>
</template>
