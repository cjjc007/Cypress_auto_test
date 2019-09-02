# cypress_auto_test
Cypress是目前比较火的端对端测试框架，内部绑定macha、chai断言库，开箱即用。  
但是其开发有一个问题，就是难以复用，数据和业务逻辑耦合严重，所以该项目以“内容的增删改查”为案例，将测试过程中涉及到的页面对象、业务流、数据模拟、所用接口都拆分抽象分离开，使得各个测试用例只需集中关注需要测试的关键功能即可。  

## 开发环境
cypress.io + MockJS + TypeScript

## 工程模块
1) fixtures：自定义json文件  
2) integration：编写测试用例  
3) plugins：插件  
4) support：目前未用到，需要自定义指令的时候可以深入研究  
  
主要在integration中进行操作  
通用模块 common  
内容模块 content  
...  
plugins：插件主要用其引用ts-loader对进行解析编译  
  
## 命名格式
FlowXXX 继承 FlowBase // 业务流  
PageXXX 继承 PageBase // 页面对象  
SubPageXXX 继承 SubPageBase // 子页面对象  
FactoryXXX 继承 FactoryBase // 数据工厂  
....  
  
## 元素定位选择优先级
1. cy-name  
2. 文案定位  
3. id定位  
4. 层级定位  
5. 样式类定位  
