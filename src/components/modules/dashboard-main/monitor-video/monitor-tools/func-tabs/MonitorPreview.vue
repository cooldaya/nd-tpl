<script setup>
import { computed, inject, useTemplateRef } from "vue";
import PreviewMonitorVideo from "../comps/PreviewMonitorVideo.vue";
import { getSvgIcon } from "../utils/get-assets.js";
import { MONIT_INJECT_KEY } from "../utils/constant.js";

const {
    handles: monitorHandles,
    monitorRefData,
    monitorOption,
} = inject(MONIT_INJECT_KEY);

const monitorPreviewRef = useTemplateRef("monitorPreviewRef");
const videosWrapRef = useTemplateRef("videosWrapRef");
const monitorTools = [
    {
        iconUrl: getSvgIcon("capture-icon"),
        label: "拍照",
        toolCode: "capture",
        action: () => {
            handles.captureAllVideo();
        },
    },
    {
        iconUrl: getSvgIcon("close-all-icon"),
        label: "关闭全部",
        toolCode: "close-all",
        action: () => {
            console.log("close all");
            monitorHandles.changePreviewSVNodes(
                monitorHandles.getResetVideoNodes(),
                true,
            );
        },
    },
    {
        iconUrl: getSvgIcon("fullscreen-icon"),
        label: "全屏",
        toolCode: "fullscreen",
        action: () => {
            handles.toggleFullscreen();
        },
    },
];

const handles = {
    getGridSize(n, max = 4) {
        let i = 1;
        if (n > Math.pow(max, 2)) return max;
        while (i <= max) {
            if (n <= Math.pow(i, 2)) return i;
            i++;
        }
    },
    captureAllVideo() {
        const wrapEl = videosWrapRef.value;
        if (!wrapEl) return;
        const videoEls = Array.from(wrapEl.querySelectorAll("video"));

        console.log("videos", videoEls, wrapEl);
        const warpClientRect = wrapEl.getBoundingClientRect();

        const canvas = document.createElement("canvas");
        Object.assign(canvas, {
            width: warpClientRect.width,
            height: warpClientRect.height,
        });
        const ctx = canvas.getContext("2d");
        videoEls.forEach((videoEl) => {
            const videoElClientRect = videoEl.getBoundingClientRect();
            const videoX = videoElClientRect.x - warpClientRect.x;
            const videoY = videoElClientRect.y - warpClientRect.y;
            ctx.drawImage(
                videoEl,
                videoX,
                videoY,
                videoElClientRect.width,
                videoElClientRect.height,
            );
        });
        canvas.toBlob(
            (blob) => {
                const a = document.createElement("a");
                a.href = URL.createObjectURL(blob);
                a.download = `videos-${new Date().getTime()}.jpg`;
                a.click();
                URL.revokeObjectURL(a.href); // 释放内存
            },
            "image/jpeg", // 图片格式
            0.8, // 压缩质量（0-1）
        );
    },
    toggleFullscreen() {
        const targetEl = monitorPreviewRef.value;
        document.fullscreenElement
            ? document.exitFullscreen()
            : targetEl.requestFullscreen();
    },
    changeSelectedWrapIdx(idx) {
        monitorRefData.selectedWrapIndex =
            monitorRefData.selectedWrapIndex === idx ? -1 : idx;
    },
};

const videoContainerStyle = computed(() => {
    const bs = monitorRefData.currentBs;
    return {
        display: "grid",
        gridTemplateColumns: `repeat(${bs}, 1fr)`,
        gridTemplateRows: `repeat(${bs}, 1fr)`,
        bsCount: Math.pow(bs, 2),
    };
});
</script>

<template>
    <div class="monitor-preview" ref="monitorPreviewRef">
        <div
            class="multiple-monitor"
            :style="videoContainerStyle"
            ref="videosWrapRef"
        >
            <div
                v-for="(_, idx) in videoContainerStyle.bsCount"
                :key="monitorRefData.selectedVideoNodes[idx]?.value || idx"
                class="monitor-item"
                :class="{
                    selected: monitorRefData.selectedWrapIndex === idx,
                }"
                @click="handles.changeSelectedWrapIdx(idx)"
            >
                <PreviewMonitorVideo
                    :video-node="monitorRefData.selectedVideoNodes[idx]"
                    v-if="monitorRefData.selectedVideoNodes[idx]"
                />
            </div>
        </div>
        <div class="monitor-tools">
            <el-popover
                title=""
                placement="top-end"
                trigger="click"
                popper-class="monitor-tools-popover"
            >
                <template #reference>
                    <div class="tool-item">
                        <img
                            :src="getSvgIcon('grid-layout-icon')"
                            alt="多窗口"
                            class="svg-icon"
                        />
                    </div>
                </template>
                <div class="grid-layout-options">
                    <el-button
                        v-for="bs in monitorOption.maxBs"
                        :key="bs"
                        plain
                        @click="monitorRefData.currentBs = bs"
                        :type="
                            monitorRefData.currentBs === bs
                                ? 'primary'
                                : 'default'
                        "
                        >{{ bs }}X{{ bs }}</el-button
                    >
                </div>
            </el-popover>

            <div
                class="tool-item"
                v-for="toolItem in monitorTools"
                :key="toolItem.label"
                @click="toolItem.action(toolItem)"
                :title="toolItem.label"
            >
                <img
                    :src="toolItem.iconUrl"
                    :alt="toolItem.label"
                    class="svg-icon"
                />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.monitor-preview {
    height: 100%;
    display: flex;
    flex-direction: column;

    .multiple-monitor {
        flex: 1;
        min-height: 0;

        .monitor-item {
            border: 1px solid #4d4d4d;
            background-color: #262626;
            min-height: 0;
            min-width: 0;
            //overflow: hidden;
            padding: 1px 0;

            &.selected {
                border-color: #ffcc00;
            }
        }
    }

    .monitor-tools {
        height: 40px;
        background-color: #696969;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 16px;
        column-gap: 10px;

        .tool-item {
            width: 20px;
            height: 20px;
            cursor: pointer;
            transition-duration: 300ms;
            display: flex;
            align-items: center;

            &:hover {
                filter: brightness(1.6);
            }

            .svg-icon {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
