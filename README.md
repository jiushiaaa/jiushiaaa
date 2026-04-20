<div align="center">

# 褚新磊 · Chu Xinlei

**AI 产品经理 · 大模型应用开发者 · 南京财经大学 2027届应届生**

**AI Product Manager · LLM Application Developer · NUFE, Class of 2027**

[![Email](https://img.shields.io/badge/邮箱-443252622@qq.com-red?logo=gmail&logoColor=white)](mailto:443252622@qq.com)
[![飞桨星河社区](https://img.shields.io/badge/飞桨星河社区-旧石.-0062B0?logo=paddlepaddle&logoColor=white)](https://aistudio.baidu.com/personalcenter/thirdview/11368538)
[![GitHub followers](https://img.shields.io/github/followers/jiushiaaa?style=social)](https://github.com/jiushiaaa)

</div>

---

## About Me · 关于我

> 南京财经大学国际经济与贸易专业（国家一流专业），GPA 3.61/5（前10%），2027届应届生。  
> 三段 AI 产品经理实习，横跨 **AI Coding 工具 / AI+保险 / AI+K12教育** 三大赛道。  
> 具备从用户研究、PRD 撰写，到 Vibe Coding 快速落地 MVP 的全链路产品能力。  
> 飞桨星河社区**精品项目作者 · 领航团团长**，单项目热度 **7.2K**，被 fork **364次**。

> Student at NUFE (National First-Class Program, GPA 3.61/5, Top 10%), Class of 2027.  
> Three AI PM internships: AI Coding tools / AI+Insurance / AI+K12 Education.  
> Full-stack product capability: user research → PRD → rapid MVP via Vibe Coding.  
> PaddlePaddle AI Studio featured author & navigator: 7.2K views, 364 forks (single project).

---

## 💼 Work Experience · 实习经历

### 维沃通信有限公司（vivo） · AI 产品经理 · 蓝心编码助手（内部 AI Coding 工具）
`2025.12 - 至今`

> 作为组内唯二的 PM，追踪全球 AI Coding 产品动态（Cursor / Claude Code / CodeBuddy / Trae），主导多个核心功能从调研到上线全流程。

- **Agent Skills**：深度调研竞品后独立输出 PRD；主持需求评审；**独立编写 `Skills.md` 实现内置 create-skill 能力**
- **Rules 改造**：针对 Token 窗口内上下文精准加载痛点，设计基于元数据的动态上下文路由系统，实现千人千面编码体验
- **上下文压缩**：制定"自动+手动"混合策略，通过 Tool Use 实现无感压缩，解决长会话 Token 溢出与幻觉问题
- **Credits 体系**：设计用量详情页与积分消耗逻辑，设计余额不足降级引导策略，有效控制服务端推理成本
- **Agent 联网搜索**：设计 Web Search / Web Fetch / URL Parser 三个 Web 工具，扩展 Agent 实时知识边界

---

### 上海百事通信息技术股份有限公司 · AI 产品经理 · 宝单侠（AI+保险产品）
`2025.07 - 2025.10`

> 参与新业务线 AI 保险产品从 0 到 1 的产品设计，利用 Cursor **独立搭建 20+ 核心交互页面高保真 MVP**。

- **保单解析引擎**：PaddleOCR (PP-StructureV3) 版面分析 + Claude 蒸馏方案微调 32B 模型，决策效率提升 **10倍**，专业解读门槛降低 **60%**
- **System Prompt 架构**：协同行业专家建立保险分析标准化模型，引入三层知识图谱（监管规则库+判例库），显著降低幻觉率
- **快速原型验证**：Cursor + Gemini Vibe Coding 模式，优化 **300+ 字段命名规则**，MVP 直接作为 PRD 动态演示

---

### 上海格马伊智能科技有限公司 · AI 产品经理 · 美术智能体（TOG AI 教育产品）
`2025.03 - 2025.06`

> 初创公司早期 AI PM，面向 K12 美育场景，推动产品从概念到上线全流程执行。

- **"小道新貌"智能研学助手**：接入百度地图 MCP + 文心大模型，一键生成含精细化路线导航与分站点教学任务的研学手册
- **"五步法" AI 教案工具**：基于教育厅美育标准设计教案生成链路，实现零散素材到规范成品的秒级转化

---

## 🚀 Projects · 项目经历

### GitHub 开源项目

#### 📄 [KnowMat2 — 材料科学文献结构化数据抽取 Agentic 流水线](https://github.com/jiushiaaa/KnowMat2)
> 与**太行国家实验室（四川）**合作，负责从前期调研到落地全流程推进

- 技术选型：PaddleOCR-VL + PP-StructureV3 双引擎 OCR + MiniMax2.7 模型进行材料专业信息抽取
- 端到端业务流：原始文献入库 → OCR解析 → 子领域路由 → 多轮抽取/评估 → LLM校验 → 质控出口

`Python` `PaddlePaddle` `PaddleOCR` `LLM` `Agentic Pipeline`

---

#### 📑 [PaperExtraction — 基于 ERNIE 5.0 的论文结构化提取](https://github.com/jiushiaaa/PaperExtraction)
> 基于 LangExtract 和 ERNIE 5.0，构建学术论文结构化信息提取工具，支持标题/摘要/方法/实验等字段自动解析

`Python` `ERNIE 5.0` `LangExtract` `NLP`

---

#### 🏘️ [AItown — Multi-Agent 协作仿真](https://github.com/jiushiaaa/AItown)
> 受斯坦福 Smallville 论文启发，构建多 AI Agent 在虚拟小镇中自主交互、协作与决策的仿真平台

`Python` `LLM Agent` `Multi-Agent`

---

#### 🔬 [Research-Study-Assistant — AI 科研学习助手](https://github.com/jiushiaaa/Research-Study-Assistant)
> 面向科研人员的智能学习辅助工具，支持文献检索、摘要生成与知识点问答，降低科研信息获取门槛

`TypeScript` `LLM` `RAG`

---

#### ✂️ [ERNIE-Pruning — ERNIE 模型剪枝实验](https://github.com/jiushiaaa/ERNIE-Pruning)
> 探索 ERNIE 系列模型结构化剪枝与轻量化部署方案，在保留模型性能的同时降低推理成本

`Python` `PaddlePaddle` `ERNIE` `Model Compression`

---

### 🌟 百度飞桨 AI Studio 星河社区 · 精品项目作者

> 🔗 [查看飞桨社区主页 →](https://aistudio.baidu.com/personalcenter/thirdview/11368538)

---

#### 🖋️ [基于 PaddleNLP + ERNIE 4.5 微调的古风诗人](https://aistudio.baidu.com/projectdetail/8926374)
> 基于 PaddleNLP 框架对 ERNIE 4.5 进行 SFT 微调，训练具有古典诗歌风格的生成模型

- **技术要点**：构建古风诗歌语料数据集，设计 Prompt 模板，完成 ERNIE 4.5 指令微调全流程
- **产品价值**：可根据主题/意境一键生成符合平仄韵律的古体诗，探索大模型在垂直文化领域的创意应用

`PaddleNLP` `ERNIE 4.5` `SFT微调` `文本生成` `PaddlePaddle`

---

#### 📷 [老照片智能解析与档案系统](https://aistudio.baidu.com/projectdetail/9752009)
> 融合 PaddleOCR-VL 文字识别 + ERNIE-4.5-VL-Thinking 视觉理解，实现历史照片自动化数字化、场景还原与智能问答

- **技术架构**：PaddleOCR-VL（多语言文字识别）并行处理 + ERNIE-4.5-VL-Thinking（深度视觉推理）→ ERNIE-X1-Turbo 多模态融合分析
- **核心功能**：历史档案数字化（结构化 JSON）、场景还原（Markdown 文档）、智能问答（支持历史/文化/地理深度推理）
- **产品价值**：让每一份旧物都成为一段温暖的回忆，支持博物馆、家族档案、历史研究等多场景落地

`PaddleOCR-VL` `ERNIE-4.5-VL-Thinking` `多模态融合` `PaddlePaddle`

---

#### 🍜 [基于 Qwen2.5-VL + DeepSeek-R1 的智能美食探店助手](https://aistudio.baidu.com/projectdetail/8950514)
> 针对美食爱好者缺乏专业点评工具的痛点，构建多模态 AI 拍照即得专业点评产品

- **技术架构**：视觉理解（Qwen2.5-VL 3B）+ 深度推理（DeepSeek-R1）双模型协作，基于 PaddleMIX 框架
- **核心功能**：专业美食分析（外观/食材/烹饪技法）、多维度点评（营养价值/价格定位/推荐指数）、社交创意内容生成（故事/标签/文案/拍照建议）

`Qwen2.5-VL` `DeepSeek-R1` `PaddleMIX` `多模态` `Gradio`

---

#### 🎲 [AI 人生模拟器](https://aistudio.baidu.com/projectdetail/8949354)
> 以"人生关键节点 + AI 多维度决策分析"为核心机制，构建沉浸式 AI 互动叙事产品 · 热度 **7.2K** · Fork **364**

- **产品设计**：用户输入人生关键节点（时间/事件/个人状态/环境因素），AI 从风险评估、机会预测、阶段方案等多维度生成决策分析
- **技术实现**：PaddleMIX 框架，Qwen2.5-VL（图像理解用户上传照片）+ DeepSeek-R1（深度推理生成人生分析报告）双模型协同

`PaddleMIX` `Qwen2.5-VL` `DeepSeek-R1` `多模态` `PaddlePaddle`

---

## 🛠️ Tech Stack · 技术栈

**AI / LLM**

![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![PaddlePaddle](https://img.shields.io/badge/PaddlePaddle-0062B0?style=flat&logo=paddlepaddle&logoColor=white)
![ERNIE](https://img.shields.io/badge/ERNIE_Series-1677FF?style=flat)
![PaddleOCR](https://img.shields.io/badge/PaddleOCR-9B59B6?style=flat)
![LLM](https://img.shields.io/badge/LLM_Application-FF6B35?style=flat)

**开发 / Dev**

![Django](https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

**产品工具 / Product**

![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white)
![Axure](https://img.shields.io/badge/Axure_RP-FF6600?style=flat)
![Cursor](https://img.shields.io/badge/AI_Coding-Cursor-black?style=flat)
![Coze](https://img.shields.io/badge/Agent_Workflow-Coze/Dify-27AE60?style=flat)

---

## 🏆 Honors · 荣誉奖项

| 奖项 | 级别 |
|------|------|
| 校二等奖学金 · 校优秀大学生 | 校级 |
| 统计建模大赛 | 省二等奖 |
| 大学生创新创业项目 | 国家级立项 |
| 互联网+ 本科生创意赛道 | 省三等奖 |
| CET-4: 530分 · CET-6: 516分 | — |

---

## 📬 Contact · 联系方式

- 📧 **邮箱**：[443252622@qq.com](mailto:443252622@qq.com)
- 🏄 **飞桨社区**：[旧石. @ AI Studio](https://aistudio.baidu.com/personalcenter/thirdview/11368538)
- 💼 **求职意向**：AI 产品经理 （2027届应届生，可立即实习到岗）
