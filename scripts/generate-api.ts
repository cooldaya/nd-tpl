import { generateApi } from "swagger-typescript-api";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  await generateApi({
    // ========== 输入/输出 ==========
    url: "http://113.249.105.12:9931/netcore/swagger/Default/swagger.json",
    output: path.resolve(__dirname, "../src/api/generated"),

    // ========== 文件分割配置 ==========
    modular: true, // 启用模块化（按Tag分文件）
    fileName: "Api", // 主文件名（如禁用modular会生成单一文件）

    // ========== HTTP客户端配置 ==========
    httpClientType: "axios",
    singleHttpClient: true, // 所有模块共享一个HTTP客户端实例

    // ========== 类型抽取配置（拆分Api.ts的关键）==========
    extractRequestParams: true, // 提取请求参数类型为单独文件
    extractRequestBody: true, // 提取请求体类型为单独文件
    extractResponseBody: true, // 提取响应体类型为单独文件
    extractResponseError: true, // 提取错误响应类型为单独文件
    extractEnums: true, // 提取枚举为单独文件

    // ========== API类名相关 ==========
    apiClassName: "ApiClient", // 自定义API类名

    // ========== 代码优化 ==========
    sortTypes: true, // 按字母排序类型
    sortRoutes: true, // 按字母排序路由
    addReadonly: true, // 给类属性添加readonly

    // ========== 类型前后缀 ==========
    typePrefix: "", // 类型前缀（如 "I"）
    typeSuffix: "", // 类型后缀（如 "DTO"）

    // ========== 响应处理 ==========
    unwrapResponseData: true, // 自动解包响应数据
    defaultResponseAsSuccess: true, // 将默认响应视为成功

    // ========== 其他 ==========
    cleanOutput: true, // 生成前清理输出目录
    enumNamesAsValues: true, // 枚举名称作为值
    generateUnionEnums: true, // 生成联合枚举

    // ========== 调试 ==========
    silent: false, // 显示详细日志
    debug: false, // 调试模式
  });
}

run();
