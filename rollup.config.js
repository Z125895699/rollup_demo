/*
 * @Author: zhangdi 1258956799@qq.com
 * @Date: 2023-05-25 21:06:36
 * @LastEditors: zhangdi 1258956799@qq.com
 * @LastEditTime: 2023-05-25 21:26:29
 * @FilePath: /rollup/rollup.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//是为了允许我们加载第三方依赖，否则像import React from 'react' 的依赖导入语句将不会被 Rollup 识别
import resolve from "@rollup/plugin-node-resolve";
//将 CommonJS 格式的代码转换为 ESM 格式
import commonjs from "@rollup/plugin-commonjs";
// rollup.config.js
// 以下注释是为了能使用 VSCode 的类型提示
/**
 * @type { import('rollup').RollupOptions }
 */
const buildOptions = {
  //多入口配置
  input: ["src/index.js","src/util.js"],
  //打包成多种格式
  output: [
    //打包成esm
    {
      // 产物输出目录
      dir: "dist/es",
      // 产物格式
      format: "esm",
    },
    //打包成cjs
    {
      dir: "dist/cjs",
      format: "cjs",
    },
  ],
  plugins:[resolve(),commonjs()]
};

export default buildOptions;
