/*
 * @Description: 通用函数库
 * @Author: didadida262
 * @Date: 2024-04-22 16:27:00
 * @LastEditors: didadida262
 * @LastEditTime: 2024-04-23 13:43:42
 */
export const getRandomColor = () => {
    // rgba(x,y,z,透明度)
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const t = Math.random().toFixed(1)
    return `rgba(${r}, ${g}, ${b}, ${t})`
  }
  
  /**
   * @description: 比特转换器
   * @param {*} name 名称
   * @param {*} bytes 比特值大小
   * @return {*} MB单位值
   */
  export const formatBytes = (name, bytes) => {
    return name + ': ' + (bytes / 1024 / 1024).toFixed(2) + ' MB '
  }
  
  export const formatTime = (name, time) => {
    return time / 1000 + 's'
  }
  
  /**
     * @description: 程序耗时检测器
     * @param {*} 输出名称
     * @param {*} fn
     * @return {*} 输出程序用时
     */
  export const costTime = (name, fn) => {
    console.time(name)
    fn()
    console.timeEnd(name)
  }
  
  export const generateAtoZ = () => {
    // 'a'.charCodeAt()
  }
  
  /**
    * @description: 万能字符获取器
    * @param {*} type small、big、num、any
    * @param {*} start 若类型为any则需要输入开始和结束值，否则输出空
    * @param {*} end
    * @return {*} 返回结果数组
    */
