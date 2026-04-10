# nd-tpl

nd 模板

实现功能
  -  通过命令自动通过swaggerUrl生成请求文件 `pnpm run api`
  -  通过命令生成crud页面，包括crud页面的权限控制`pnpm run crud entityName [fileName] [pageTitle]`
     - 例如`pnpm run crud User user-manage 用户管理`
  -  实现了系统的权限控制，权限配置
     - 使用方式
     `
     <el-button v-has="'monitor-video:delete'" type="danger">删除-测试</el-button>
     <el-button v-if="pHasPerm('monitor-video:delete')" type="danger">删除-测试</el-button>
     <el-button p-has="monitor-video:delete" type="danger">删除-测试</el-button>`
  -  添加了地图控件(maplibre-gl库)
  -  添加基础echarts组件
  -  添加监控组件
  -  图标(使用unplugin-icons，自动注册)
      - 使用方式`
     https://icones.js.org/
      <i-ant-design-table-outlined />
      import AntDesignBarsOutlined from '~icons/ant-design/bars-outlined'`
  -  使用autofit.js实现各尺寸屏幕自适应
  -  使用了vue-router的基于文件的路由
  -  其他基础细节功能
      - [x] 登陆时可选择记住我，默认账号密码保存30天，加密后保存到indexdb中
      - [x] 封装localforege存储，添加了一层对称加密
      - [x] 填写菜单时有输入提示，可选自动添加crud权限按钮
      - [ ]
