# Bypass QClaw - 非官方使用指南

⚠ 免责声明：本文档仅供技术研究使用，正式使用请通过官方渠道[申请邀请码](https://wj.qq.com/s2/25871229/abe7/)。任何不当使用造成的后果与作者无关。

使用截图：  
<img src="qclaw-screenshot.png" width="640">


## 功能特性与限制说明


### 可用功能

  
✅  可以正常使用 QClaw App 的几乎所有功能

使用示例：

<img src="qclaw-screenshot.png" width="640">

### 已知限制
~~✅ **完整微信关联功能**~~ (微信已不可用，会提示“设备不在线，请确认客户端已启动并连接网络” 2026-3-10 14:30）
- ~~支持所有微信账号绑定操作~~
- ~~可正常使用消息收发等核心功能~~

  <img src="qclaw-link-to-wechat.png" width="640">

❌ **内置API服务不可用**
- 未激活状态下无法使用平台提供的免费API和KEY
- 解决方案：需自行配置第三方API服务（如DeepSeek、火山引擎等）

> 提示：当系统弹出API选择窗口时，请选择其他支持的云服务厂商进行配置。


## 安装 

### Surge Module
需要开启

✅ MITM  
✅ Scripting
```
https://raw.githubusercontent.com/XueshiQiao/QClawByPass/refs/heads/main/qclaw_bypass.sgmodule
```

<img src="qclaw-surge-01.png" width="640">
<img src="qclaw-surge-02.png" width="640">


### 其他格式欢迎提 PR （主要代码参考qclaw_bypass.sgmodule文件）

### 验证
#### 开全局代理，请求一下 https://jprx.m.qq.com/data/4056/forward

```
❯ curl -X POST https://jprx.m.qq.com/data/4056/forward -H "Content-Type: application/json" -d '{"test": "ping"}' 

```
#### 返回如果是 already_verified":true 就说明成功了

```
{"ret":0,"common":{"code":0,"message":"success"},"data":{"already_verified":true},"resp":{"data":{"already_verified":true},"common":{"code":0,"message":"success"}}}%

```

## 使用建议
1. 建议优先考虑官方授权使用方式
2. 自行配置API时请注意数据安全和合规性
3. 本方案可能存在不稳定性，不建议用于生产环境
