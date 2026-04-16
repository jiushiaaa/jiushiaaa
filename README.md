<div align="center">

# 褚新磊 · Chu Xinlei

**AI 产品经理 · 大模型应用开发者 · 南京财经大学 2027届应届生**

**AI Product Manager · LLM Application Developer · NUFE, Class of 2027**

[![Email](https://img.shields.io/badge/邮箱-443252622@qq.com-red?logo=gmail)](mailto:443252622@qq.com)
[![飞桨星河社区](https://img.shields.io/badge/飞桨星河社区-旧石.-0062B0?logo=paddlepaddle)](https://aistudio.baidu.com/personalcenter/thirdview/11368538)
[![GitHub](https://img.shields.io/badge/GitHub-jiushiaaa-black?logo=github)](https://github.com/jiushiaaa)

</div>

---

## 🧑‍💻 About Me · 关于我

> 南京财经大学国际经济与贸易专业（国家一流专业），GPA 3.61/5（前10%），2027届应届生。
> 专注 AI 产品方向，拥有**三段 AI 产品经理实习经历**，横跨 AI Coding 工具、AI+保险、AI+K12教育三大赛道。
> 具备从用户研究、PRD 撰写到 AI Coding 快速实现 MVP 的全链路产品能力。
> 活跃于百度飞桨开源社区，开源项目总浏览量 **6.7K+**，被 fork **356次**。

> Student at Nanjing University of Finance & Economics (National First-Class Program, GPA 3.61/5, Top 10%), Class of 2027.  
> Three AI product manager internships across AI Coding tools, AI+Insurance, and AI+K12 Education.  
> Full-stack product capability: user research → PRD → rapid MVP via AI Coding.  
> Active PaddlePaddle open-source contributor: 6.7K+ views, 356 forks across projects.

---

## 💼 Work Experience · 实习经历

### 维沃通信有限公司（vivo） | AI 产品经理 · 蓝心编码助手（内部 AI Coding 工具）
`2025.12 - 至今`

> 作为组内唯二的产品经理，负责追踪全球 AI Coding 产品动态（Cursor、Claude Code、CodeBuddy、Trae），主导多个核心功能从调研到上线的全流程。

- **Agent Skills**：深度调研竞品，独立输出 PRD 与技术概要设计；主持需求评审，独立编写 `Skills.md` 实现内置 create-skill 能力
- **Rules 改造优化**：针对 Token 窗口内上下文精准加载痛点，设计基于元数据的动态上下文路由系统，实现千人千面编码体验
- **上下文管理与压缩**：制定"自动+手动压缩"混合策略，通过 Tool Use 实现无感压缩，解决长会话 Token 溢出与幻觉问题
- **Credits 体系设计**：负责用量详情页交互设计与积分消耗逻辑，设计余额不足降级引导策略，控制服务端推理成本
- **Agent 联网搜索拓展**：设计 Web Search / Web Fetch / URL Parser 三个 Web 工具，扩展 Agent 实时知识边界

---

### 上海百事通信息技术股份有限公司 | AI 产品经理 · 宝单侠（AI+保险产品）
`2025.07 - 2025.10`

> 参与新业务线 AI 保险产品宝单侠从 0 到 1 的产品设计，独立使用 Cursor 搭建20+核心交互页面的高保真 MVP。

- **保单解析引擎**：采用 PaddleOCR (PP-StructureV3) 实现版面分析；基于自研 32B 模型引入 Claude 蒸馏方案微调，将决策效率提升 **10倍**，专业解读门槛降低 **60%**
- **System Prompt 架构设计**：协同行业专家建立保险分析标准化模型，引入三层知识图谱（监管规则库+判例库），显著降低幻觉率
- **AI 驱动的快速原型**：Vibe Coding 模式（Cursor + Gemini）快速产出可交互 Demo，优化 **300+** 字段命名规则，MVP 直接作为 PRD 动态演示

---

### 上海格马伊智能科技有限公司 | AI 产品经理 · 美术智能体（TOG AI 教育产品）
`2025.03 - 2025.06`

> 初创公司早期产品经理，面向 K12 美育场景，推动 AI 产品从概念到上线的全流程执行。

- **"小道新貌"智能研学助手**：接入百度地图 MCP + 文心大模型，实现一键生成含路线导航、分站点教学任务的研学手册
- **"五步法" AI 教案辅助工具**：基于教育厅美育标准，设计教案生成链路，实现零散素材到规范成品的秒级转化，显著提升教研效率

---

## 🔬 Projects · 项目经历

### 📄 [KnowMat2 — 材料科学文献结构化数据抽取 Agentic 流水线](https://github.com/jiushiaaa/KnowMat2)
> 与**太行国家实验室（四川）**合作，负责从前期调研到落地的全流程推进

- 技术选型：PaddleOCR-VL + PP-StructureV3 双引擎 OCR + MiniMax2.7 模型
- 设计端到端业务流：原始文献 → OCR解析 → 子领域路由 → 多轮抽取 → LLM校验 → 质控出口

`Python` `PaddlePaddle` `PaddleOCR` `LLM` `Agentic Pipeline`

---

### 📑 [PaperExtraction — 基于 ERNIE 5.0 的论文结构化提取](https://github.com/jiushiaaa/PaperExtraction)
> 基于 LangExtract 和 ERNIE 5.0 构建论文结构化提取工具

`Python` `ERNIE 5.0` `LangExtract` `NLP`

---

### 🏫 [WenxinClassroom — 智能学习路径生成平台](https://github.com/jiushiaaa/WenxinClassroom)
> 基于 Django + 星河大模型 API，自动将学习主题分解为知识模块并推荐最优学习路径

`Python` `Django` `ERNIE API` `HTML`

---

### 🏘️ [AItown — Multi-Agent 协作仿真](https://github.com/jiushiaaa/AItown)
> AI Agent 多角色协作仿真平台

`Python` `LLM Agent`

---

### 🌟 百度飞桨 AI Studio 星河社区 · 精品项目作者
> 开源项目总浏览量 **6.7K+**，被 fork **356次**，项目包括：美食探店智能助手（Qwen2.5-VL + DeepSeek R1）、智能财务单据自动化处理系统（PaddleOCR + ERNIE-4.5，字段提取准确率 **96.7%**，效率提升 **15倍**）等

🔗 [查看飞桨社区主页](https://aistudio.baidu.com/personalcenter/thirdview/11368538)

---

## 🛠️ Tech Stack · 技术栈

**AI / LLM**

![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![PaddlePaddle](https://img.shields.io/badge/PaddlePaddle-0062B0?style=flat&logo=paddlepaddle&logoColor=white)
![LLM](https://img.shields.io/badge/LLM_Application-FF6B35?style=flat)
![ERNIE](https://img.shields.io/badge/ERNIE_Series-blue?style=flat)
![PaddleOCR](https://img.shields.io/badge/PaddleOCR-purple?style=flat)

**开发工具 / Dev Tools**

![Django](https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Cursor](https://img.shields.io/badge/AI_Coding-Cursor-black?style=flat)

**产品工具 / Product Tools**

![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white)
![Axure](https://img.shields.io/badge/Axure_RP-orange?style=flat)
![Coze](https://img.shields.io/badge/Agent_Platform-Coze/Dify-green?style=flat)

---

## 🏆 Honors · 个人荣誉

- 校二等奖学金 · 校优秀大学生
- 统计建模大赛 **省二等奖**
- 大学生创新创业项目 **国家级立项**
- 互联网+ 本科生创意赛道 **省三等奖**
- CET-4: 530分 · CET-6: 516分

---

## 📬 Contact · 联系方式

- 📧 **邮箱**：[443252622@qq.com](mailto:443252622@qq.com)
- 🏄 **飞桨社区**：[旧石. @ AI Studio](https://aistudio.baidu.com/personalcenter/thirdview/11368538)
- 💼 **求职意向**：AI 产品经理 / AI 产品运营 / 大模型应用产品相关岗位（2027届应届生，可立即实习）
