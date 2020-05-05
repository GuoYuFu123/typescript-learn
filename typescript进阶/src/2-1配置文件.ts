/**
 * 1、tsc src/2-1配置文件.ts 这个是用全局的tsc的配置文件进行编辑
 * 2、tsc  在根目录下，进行tsc，会首先去找tsconfig.json,根据tsconfig.json的配置进行编辑
 * 
 * ts.config配置 https://www.tslang.cn/docs/handbook/tsconfig-json.html
 */
const teacher: string = "guoguo";
function fn(name:any) {
  return name
}