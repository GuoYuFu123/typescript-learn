
/**
 * 针对于不同的网页的爬虫，我们就可以写多个这种的爬虫分析器，进行不同爬虫结果的分析
 */
import { Analyzer } from './crowller';

export default class dellAnalyzer implements Analyzer {
  
  // 提供外部调用的分析接口
  public analyze(html: string, filePath:string) {
    return JSON.stringify(html);
  }
}