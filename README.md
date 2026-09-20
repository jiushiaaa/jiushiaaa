<div align="center">

# 褚新磊 · Chu Xinlei

**AI 产品经理 · Agent 产品与工作流 · AI 视频创作**

AI Product Manager & Builder · 南京财经大学 2027 届 · 可立即到岗

从真实业务需求出发，把 AI 能力做成可使用、可评估、可持续迭代的产品。

邮箱：443252622@qq.com · 手机号 & 微信号：15805145079

[抖音作品](https://v.douyin.com/rD_OP4_kMSI/) · [B站作品](https://www.bilibili.com/video/BV1WtYC6UEEN/?vd_source=e0643483c6a3517007cd0589b285add0#reply117268142886086) · [飞桨 AI Studio](https://aistudio.baidu.com/personalcenter/thirdview/11368538)·[小红书主页](https://www.xiaohongshu.com/user/profile/663202e70000000007007b63?tab=note) 

</div>

## 代表项目 · OpenDramaFlow

### 你来讲故事，Codex 来组织制作。

我正在开发 **OpenDramaFlow**：面向 Windows Codex Desktop 的开源 AI 视频生产插件，把专业创作 Skills、模型调用、素材版本和本地后期整合到同一条制作流程中。用自然语言推进创作，在画布中查看素材、镜头与成片，让创意从剧本走到交付。

**已用项目完成《从姑获鸟开始》城寨风云篇第一集，并发布至小红书、抖音、B 站：全平台累计播放量 30,000+，点赞与收藏合计 300+。**

<p align="center"><a href="https://github.com/jiushiaaa/open-drama-flow"><img src="https://raw.githubusercontent.com/jiushiaaa/open-drama-flow/main/plugins/ai-drama-studio/public/assets/studio-pixel-hero.png" alt="OpenDramaFlow 机器人制片工作室" width="640" /></a></p>

| 产品问题 | 我的实现 |
| --- | --- |
| 创作步骤分散，生成工具之间反复切换 | 由 Codex 组织剧本、分镜、素材生成与后期，按任务调用专业 Skills 和 MCP 工具 |
| 角色、场景与镜头素材难以持续管理 | 项目库 + 无限画布，统一展示素材、版本、视频和制作关系 |
| 长流程生成失败后难以接续 | 保存供应商任务 ID 与制作状态，支持恢复和局部修复，减少重复生成 |
| 一次实验容易干扰已认可的设定 | 区分候选素材、已确认版本与生产记忆，保留人工验收环节 |

**从产品到作品：** 需求与交互设计 → 插件开发 → 实际剧集制作 → 跨平台发布与反馈。

[查看源码与安装指南](https://github.com/jiushiaaa/open-drama-flow) · [中文产品介绍](https://github.com/jiushiaaa/open-drama-flow/blob/main/README_zh.md) · [抖音观看第一集](https://v.douyin.com/rD_OP4_kMSI/) · [小红书观看第一集](https://www.xiaohongshu.com/discovery/item/6aa5351d0000000028029cea?source=webshare&xhsshare=pc_web&xsec_token=ABrDK3KvgGOlzmvmtG_QMrbUaz73mft1F4ZsnKcv3A3k4=&xsec_source=pc_share)

[![第一集片头节选：城寨、拳台与锁链](https://raw.githubusercontent.com/jiushiaaa/open-drama-flow/main/production/publish-examples/opening-showcase.gif)](https://v.douyin.com/rD_OP4_kMSI/)

<details>
<summary>查看产品界面与制作流程</summary>

![OpenDramaFlow 无限画布](https://raw.githubusercontent.com/jiushiaaa/open-drama-flow/main/docs/images/production-canvas.png)

**创意 / 剧本 → 导演分镜 → 角色与场景参考 → 视频生成 → 镜头复核 → 声音、剪辑与交付**

`Codex Plugin` `MCP` `Agent Skills` `React` `TypeScript` `Seedance` `FFmpeg`

</details>

## 关于我

南京财经大学 2027 届本科生，GPA **3.61/5（前 10%）**。四段 AI 产品经理实习，覆盖 **AI 销售与经营分析、AI Coding 与办公 Agent、保险、K12 美育**。

我关注的不只是模型能做什么，更是如何把它接入业务：通过用户研究明确问题，用 PRD 与可交互 Demo 验证方案，再通过评测、真实使用反馈和数据推动迭代。近期重点在 **Agent Harness、自然语言工作流搭建、业务评估闭环与 AI 视频生产**。

## 实习经历

### 湖州云梯科技有限公司 · AI 产品经理

**云梯智客｜多 Agent 协同的销售与经营分析平台** · `2026.04 - 至今`

负责 AI 销售与数据分析方向的产品探索、快速验证和交付落地，将客户需求转化为 AI 技能或工作流 Demo，并在业务试用中沉淀通用平台能力。

- **多 Agent 销售平台：** 参与设计客户维护、Agent 搭建、转人工协同、A/B 测试与数据复盘，将销售 SOP 和历史对话经验转化为可配置、可追踪的智能体能力，支撑月均 **13 万+ 真实对话客户**的服务需求。
- **自然语言 Agent Builder：** 设计通过上传 SOP 或描述流程来搭建工作流的交互，由 AI 经 n8n MCP 完成需求解析、节点生成、参数配置、编排与校验；参与基于 DeerFlow 的 Agent Harness 方案，将规划、工具调用、反馈纠错与人工确认纳入执行链路。
- **经营分析 Agent：** 从异常指标出发，下钻数据看板和真实客户会话，输出问题归因、修改方案及预期效果；方案经人工采纳后，通过小流量 A/B 测试验证策略。
- **评估与迭代：** 建立可信解决率、未解决归因和上线质量围栏；基于真实会话沉淀测试集，设计模型批量测试与业务人员横向评分流程，支持模型选型、意图规则和知识库优化。
- **业务结果：** AI 成交率 **1.58%**，达到真人销售 **2.00%** 转化水平的 **79%**。上述数据为业务整体表现。

### 维沃通信有限公司（vivo） · AI 产品经理

**BlueCode & BlueWork｜内部 AI Coding 工具与办公 Agent** · `2025.11 - 2026.04`

参与内部 AI 生产力产品矩阵建设，负责竞品研究、用户访谈与 NPS 反馈整理，推进 BlueCode 多版本迭代，并参与桌面端办公 Agent BlueWork 的 0 → 1 设计。

- **Agent Skills：** 调研 Cursor、Claude Code 等产品，输出 PRD 与技术概要设计，推进 Skill 管理页交互、需求评审与开发排期；独立编写 `Skills.md`，实现内置 create-skill 能力。
- **BlueWork 场景探索：** 围绕信息检索、文档处理、应用调用和办公自动化，探索将 Skills、Rules、上下文管理与工具调用能力从编码场景迁移至通用办公。
- **Rules 改造：** 针对有限 Token 窗口中的上下文加载问题，设计基于元数据的动态上下文路由方案，支持用户配置 AI 编码规范。
- **用量与 Credits：** 设计用量详情页和积分消耗逻辑，将 Token 消耗转化为可理解的额度视图，并设计余额不足时的降级引导。

### 上海百事通信息技术股份有限公司 · AI 产品经理

**宝单侠｜AI 保险产品** · `2025.07 - 2025.10`

- **产品设计与 MVP：** 围绕保单上传、智能解析、风险报告和多轮咨询，输出 PRD、用户旅程与交互流程；使用 Cursor 搭建高保真 Demo，验证交互、字段规则与技术可行性。
- **保单解析方案：** 设计 PaddleOCR 版面分析 → 文本标准化 → 条款对象池匹配 → 向量化索引 → LLM 解读链路，支撑条款结构化和风险评估。
- **Prompt 优化：** 协同行业专家，将保险术语、条款对标规则与核保边界转化为结构化约束，通过模型生成、专家反馈和对比实验持续优化。

### 上海格马伊智能科技有限公司 · AI 产品经理

**美术智能体｜TOG AI 教育产品** · `2025.03 - 2025.06`

- **智能研学助手：** 面向 K12 美育场景，参与设计“小道新貌”，结合地图与大模型生成上海虹口文化地标研学路线、分站点任务及研学笔记框架。
- **AI 教案工具：** 设计“五步法”教案辅助工具，结合教师模板、美育标准与优秀示例，将零散备课材料重构为包含教学目标、流程和评价维度的规范教案。

## 更多项目

### [KnowMat2 · 材料科研文献结构化抽取](https://github.com/jiushiaaa/KnowMat2)

作为百度飞桨开发者，与太行国家实验室（四川）合作，参与材料科研文献结构化抽取项目。将复杂论文中的成分、工艺、性能、表格与公式抽取拆解为可组合任务，设计从文献解析到数据质控的 Agentic 流水线。

**OCR 解析 → 子领域识别 → Router Agent 路由 → 信息抽取 → 规则聚合 → Review Agent 校验 → 人工复核**

`Agent Harness` `Tools / Skills` `PaddleOCR` `LLM` `Human-in-the-loop`

### [百度飞桨 AI Studio · 独立开发](https://aistudio.baidu.com/personalcenter/thirdview/11368538)

围绕智能金融、智能财务场景构建 AI 应用 Demo。项目总浏览量 **6.7K+**，Fork **356 次**。

- **智能财务单据处理：** 设计版面解析、字段提取、业务识别、规则校验、人工复核与归档链路。在自建票据测试集上，关键字段提取准确率 **96.7%**，单张处理时间从人工平均 **8 分钟**缩短至 **30 秒内**。
- **金融伪证检测：** 设计大模型语义分析与小模型视觉定位的双通道检测方案；构建 **5,463 份**训练样本。项目测试中检测精度提升约 **6%**，新图像检测覆盖提升 **10%+**。

<details>
<summary>其他开源探索与社区作品</summary>

- [PaperExtraction](https://github.com/jiushiaaa/PaperExtraction) · 基于 ERNIE 与 LangExtract 的论文结构化提取
- [AItown](https://github.com/jiushiaaa/AItown) · Multi-Agent 交互与协作仿真
- [Research-Study-Assistant](https://github.com/jiushiaaa/Research-Study-Assistant) · AI 科研学习助手
- [ERNIE-Pruning](https://github.com/jiushiaaa/ERNIE-Pruning) · 模型剪枝与轻量化实验
- [古风诗人](https://aistudio.baidu.com/projectdetail/8926374) · ERNIE 指令微调
- [老照片智能解析与档案系统](https://aistudio.baidu.com/projectdetail/9752009) · OCR 与多模态理解
- [智能美食探店助手](https://aistudio.baidu.com/projectdetail/8950514) · 视觉理解与推理协作
- [AI 人生模拟器](https://aistudio.baidu.com/projectdetail/8949354) · 多模态互动叙事

</details>

## 能力与工具

| 方向 | 实践 |
| --- | --- |
| 产品设计 | 用户研究、竞品分析、PRD、交互原型、MVP 验证、交付反馈 |
| Agent 产品 | Skills / MCP、Agent Harness、工具编排、人工确认、评测与 A/B 测试 |
| AI 应用 | OCR、结构化抽取、RAG、多模态理解、Prompt 优化 |
| 开发与工作流 | Codex、Claude Code、Cursor、Python、TypeScript、React、n8n、Coze、Dify |

## 教育与荣誉

**南京财经大学** · `2023.09 - 2027.06` · GPA **3.61/5（前 10%）**

校二等奖学金 · 校优秀大学生 · 统计建模大赛省二等奖 · 大学生创新创业项目国家级立项 · 互联网+ 本科生创意赛道省三等奖

英语：CET-4 **530** · CET-6 **516**

## 联系与创作

- **合作 / 实习：** 443252622@qq.com · AI 产品经理方向，2027 届，可立即实习到岗
- **手机号 & 微信号：** 15805145079
- **飞桨社区：** [旧石. · AI Studio](https://aistudio.baidu.com/personalcenter/thirdview/11368538)
- **抖音作品：** [《从姑获鸟开始》第一集](https://v.douyin.com/rD_OP4_kMSI/)
- **小红书作品：** [《从姑获鸟开始》第一集](https://www.xiaohongshu.com/discovery/item/6aa5351d0000000028029cea?source=webshare&xhsshare=pc_web&xsec_token=ABrDK3KvgGOlzmvmtG_QMrbUaz73mft1F4ZsnKcv3A3k4=&xsec_source=pc_share)

<sub>持续分享 AI 产品实践、Agent 工作流与 OpenDramaFlow 创作过程。</sub>
