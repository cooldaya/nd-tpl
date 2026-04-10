<template>
    <div class="container">
        <div class="timeLine">
            <TimeLine
                ref="timelineCompRef"
                :initTime="refData.currentTime"
                @dragTimeChange="handles.handleClickTimeLine"
                :timeSegments="timeSegments"
                @click_timeline="handles.handleClickTimeLine"
                :initZoomIndex="refData.zoom"
            >
            </TimeLine>
        </div>
        <div class="condition-wrap">
            <label class="condition-item">
                观测时间：
                <el-date-picker
                    v-model="refData.currentTime"
                    type="datetime"
                    placeholder="选择日期时间"
                    :disabled-date="handles.disabledDate"
                />
            </label>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, nextTick } from "vue";
import { TimeLine } from "./TimeLine";
import { ElMessage } from "element-plus";
import { endOfDay, startOfDay } from "date-fns";
defineOptions({ name: "SegmentCom" });

const props = defineProps({
    immediate: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["timeRangeChange"]);
const refData = reactive({
    // 显示时间段
    currentTime: startOfDay(new Date()).getTime(),
    zoom: 4,
    durationList: [
        {
            label: "30秒",
            value: 0.5,
            zoom: 1,
        },
        {
            label: "1分钟",
            value: 1,
            zoom: 1,
        },
        {
            label: "5分钟",
            value: 5,
            zoom: 1,
        },
        {
            label: "10分钟",
            value: 10,
            zoom: 2,
        },
        {
            label: "30分钟",
            value: 30,
            zoom: 3,
        },
        {
            label: "1小时",
            value: 60,
            zoom: 3,
        },
        {
            label: "2小时",
            value: 120,
            zoom: 3,
        },
        {
            label: "6小时",
            value: 360,
            zoom: 4,
        },
    ],
});

const timeSegments = computed(() => {
    const beginTime = new Date(refData.currentTime).getTime();
    const endTime = endOfDay(new Date(beginTime)).getTime();
    return [
        {
            name: "时间段1",
            beginTime: beginTime,
            endTime: endTime,
            color: "#1a94bc",
            startRatio: 0.65,
            endRatio: 0.9,
        },
    ];
});

const timelineCompRef = ref(null);

const handles = {
    handleClickTimeLine(val) {
        // debugger
        const timestamp = new Date(val).getTime();
        if (timestamp > Date.now()) {
            ElMessage.error("选择的时间超出了可观测范围");
            return;
        }
        refData.currentTime = timestamp;
        timelineCompRef.value.setTime(timestamp);
        timelineCompRef.value.reRender();
        handles.emitTimeRangeChange();
    },

    disabledDate(date) {
        // 大于当前时间
        return new Date(date).getTime() > Date.now();
    },
    emitTimeRangeChange() {
        nextTick(() => {
            emit("timeRangeChange", timeSegments.value[0]);
        });
    },
};

onMounted(() => {
    if (props.immediate) {
        handles.handleClickTimeLine(refData.currentTime);
    }
});
</script>

<style lang="scss" scoped>
.container {
    width: 100%;

    .time-show {
        margin: 10px 0;
        display: flex;
        justify-content: center;
        user-select: none;
    }

    .timeLine {
        height: 50px;
    }

    .condition-wrap {
        margin: 10px 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        user-select: none;
        column-gap: 20px;
        font-size: 14px;
        color: #afafaf;

        .condition-item {
            display: flex;
            align-items: center;
        }
    }
}
</style>
