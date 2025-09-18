<!-- markdownlint-disable-file MD033 MD041 -->
<h1 align="center">FixItsDoc | FixIt</h1>

## Demo

![FixIt Demo](images/demo.jpeg)

## 安装组件

安装方式与 [安装主题](https://fixit.lruihao.cn/zh-cn/documentation/installation/) 相同，有多种安装方式，任选一种即可，这里介绍作为 Git 子模块安装。

将 [FixIt](https://github.com/hugo-fixit/FixIt) 和此 git 存储库克隆到你的主题文件夹中，并将其作为网站目录的子模块添加。

```bash
git submodule add https://github.com/hugo-fixit/FixIt.git themes/FixIt
git submodule add https://github.com/wmsnp/FixItsDoc.git themes/FixItsDoc
```

接下来编辑项目的 `hugo.toml` 并将此主题组件添加到你的主题中：

```toml
theme = ["FixItsDoc", "FixIt"]
```

## 配置

为了通过 FixIt 主题在 `layouts/partials/custom.html` 文件中开放的 [自定义块](https://fixit.lruihao.cn/references/blocks/) 将 `fixitsdoc.html` 注入到 `custom-assets` 中，你需要填写以下必要配置：

```toml
[params]
  [params.customPartials]
    # ... other partials
    assets = [
      "inject/fixitsdoc.html",
    ]
    # ... other partials
```

## 使用

在文档顶层文件夹的 `_index.md` 文件中，添加以下内容：
```yaml
---
cascade:
  params:
    type: docs
isTopLevel: true
---
```
对于每个文件和目录，均根据 `weight` 排序

## 更多功能

通过覆盖 FixIt 主题的 `seo.html` 和 `post-author.html`，FixItsDoc 支持为每篇文章文章配置多个作者：

```yaml
author: 
  - wmsnp
  - {name: "another wmsnp", link: "https://github.com/wmsnp", avatar: "xxx"}
---
```

如果你想体验 FixIt 主题的最新功能，请在项目的 `hugo.toml` 中将此主题组件添加到 `FixIt` 之后以禁用此功能：

```toml
theme = ["FixIt", "FixItsDoc"]
```