import { computed, reactive, provide } from "vue";
import { useMitt } from "./use-mitt.js";
import { useFuncModeTaber } from "./use-func-mode-taber.js";
import {
  MONIT_INJECT_KEY,
  EVENT_TYPES,
  PLAY_FUNC_MODES,
} from "../utils/constant.js";

export function useMonitorTool(option = {}) {
  const monitorOption = reactive({
    maxBs: option.maxBs || 4,
    protocol: option.protocol || "hls", // hls、ws
  });

  function getResetVideoNodes() {
    return Array.from({
      length: Math.pow(monitorOption.maxBs, 2),
    }).fill(null);
  }

  const monitorRefData = reactive({
    selectedVideoNodes: getResetVideoNodes(),
    selectedWrapIndex: -1,
    playFuncMode: PLAY_FUNC_MODES.PREVIEW,
    playbackNode: null,
    otherModeSNM: {
      // 其他模式选择的节点
    },
    currentBs: 2,
  });

  const uit = useMitt();
  const funcModeTaber = useFuncModeTaber({
    uit,
    monitorRefData,
    addPlayModes: option.addPlayModes || [],
  });

  // 选中，云台控制
  const selectedVideoNode = computed(() => {
    return monitorRefData.selectedVideoNodes[monitorRefData.selectedWrapIndex];
  });

  const handles = {
    changePreviewSVNodes(newVal, updateTreeSelected = false) {
      if (
        !Array.isArray(newVal) ||
        newVal.length !== Math.pow(monitorOption.maxBs, 2)
      ) {
        return console.error(
          "changePreviewSVNodes newVal must be array and length must be Math.pow(monitorOption.maxBs, 2)",
        );
      }
      handles.changeSelectedVideoNodesByMode(
        PLAY_FUNC_MODES.PREVIEW,
        newVal,
        updateTreeSelected,
      );
    },
    changeSelectedVideoNodesByMode(
      playMode = PLAY_FUNC_MODES.PREVIEW,
      newVal = [],
      updateTreeSelected = false,
    ) {
      if (!Array.isArray(newVal))
        return console.error(
          "changeSelectedVideoNodesByMode newVal must be array",
        );
      switch (playMode) {
        case PLAY_FUNC_MODES.PREVIEW:
          monitorRefData.selectedVideoNodes = newVal;
          break;
        case PLAY_FUNC_MODES.PLAYBACK:
          monitorRefData.playbackNode = newVal.at(-1);
          break;
        default:
          monitorRefData.otherModeSNM[playMode] = newVal;
      }
      if (updateTreeSelected) {
        uit.emit(EVENT_TYPES.UPDATE_TREE_SELECTED, newVal);
      }
    },
    getResetVideoNodes,
  };

  const monitorTool = {
    uit,
    monitorRefData,
    selectedVideoNode,
    monitorOption,
    funcModeTaber,
    handles,
  };

  provide(MONIT_INJECT_KEY, monitorTool);

  return monitorTool;
}
