import fs from 'fs';
import cheerio from 'cheerio'; // 数据截取的包
import { Analyzer } from './crowller';

interface Course {
  index: number;
  title: string;
}
interface CourseResult {
  time: number,
  data: Course[]
}
interface Content {
  [propName: number]: Course[];
}
export default class DellAnalyzer implements Analyzer {
  private static instance: DellAnalyzer
  static getInstance() {
    if (!DellAnalyzer.instance) {
      DellAnalyzer.instance = new DellAnalyzer();
    }
    return DellAnalyzer.instance;
  } 
  private constructor () {
     
  }
   // 获取课程信息
   private getCourseInfo(html: string) {
    const $ = cheerio.load(html);
    const courseItems = $('.course-item');
    const courseInfos: Course[] = [];
    courseItems.map((index, element) => {
      const desc = $(element).find(".course-desc");
      const title = desc.text();
      courseInfos.push({ index, title })
    })
    const result = {
      time: new Date().getTime(),
      data: courseInfos
    }
    return result;
  }
  // 存储到json文件[先读取文件，如果有就添加。没有就创建]
  private generateJsonContent(courseInfos: CourseResult, filePath:string) {
    let fileContent: Content = {};
    if (fs.existsSync(filePath)) {
      const readFileContent = fs.readFileSync(filePath, 'utf-8');
      readFileContent && (fileContent = JSON.parse(readFileContent));
    }
    fileContent[courseInfos.time] = courseInfos.data;
    return fileContent;
    
  }
  // 提供外部调用的分析接口
  public analyze(html: string, filePath:string) {
    const courseInfos = this.getCourseInfo(html);
    const fileContent =  this.generateJsonContent(courseInfos, filePath);
    return JSON.stringify(fileContent);
  }
}