// ts -> .d.ts -> js 
// 如果我们的项目是ts文件，但是引入是的js的文件，这样就需要一个.d.ts的翻译文件 @types/superagent
import path from 'path';
import fs from 'fs';
import superagent from 'superagent'; // 爬虫的包
import DellAnalyzer from './dellAnalyzer';

export interface Analyzer {
  analyze: (html: string, filePath: string) => string
}

class Crowller {
  private readonly filePath = path.resolve(__dirname, '../data/course.json');

  constructor(private url: string, private anlayzer: Analyzer) {
    this.initSpiderProcess()
  }
  // 爬虫入口
  async initSpiderProcess() {
    const html = await this.getRawHtml();
    const fileContent = this.anlayzer.analyze(html, this.filePath);
    fileContent && this.writeFile(fileContent)
  }
  // 获取原始html
  async getRawHtml() {
    const result = await superagent.get(this.url);
    return result.text;
  }
  // 写文件
  writeFile(content: string) {
    fs.writeFileSync(this.filePath, content);
  }
}

// 爬虫url：http://www.dell-lee.com/typescript/demo.html?secret=secret
const secret = 'secretKey';
const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;

const anlayzer = DellAnalyzer.getInstance();
new Crowller(url, anlayzer);


