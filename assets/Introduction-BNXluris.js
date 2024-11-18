import{j as n}from"./jsx-runtime-CQsLhzk5.js";import{useMDXComponents as o}from"./index-C2WH5l5l.js";import"./index-Wp2u197Z.js";function i(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"component-alpha-rank",children:"component-alpha-rank"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"component-alpha-rank"})," is a component library designed to simplify the creation of UI components. It is built with TypeScript, Vite, and Storybook, providing tools for rapid development and previewing of components."]}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsxs(e.p,{children:["You can install ",n.jsx(e.code,{children:"component-alpha-rank"})," using npm:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install component-alpha-rank
`})}),`
`,n.jsx(e.p,{children:"Or with Yarn:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`yarn add component-alpha-rank
`})}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h3,{id:"tailwind-css-setup",children:"Tailwind CSS Setup"}),`
`,n.jsx(e.p,{children:"The component-alpha-rank styles need to be added to your project's global styles, and they need to be first in the file, in case they're overridden"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@import url(component-alpha-rank/dist/style.css);
`})}),`
`,n.jsx(e.p,{children:"If your project uses tailwind css, you'll need to add the following configuration to the tailwind.config.js attachment:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`module.exports = {
  content: [
    "./node_modules/component-alpha-rank/dist/*.js",
  ],
};
`})}),`
`,n.jsxs(e.p,{children:["To use components from ",n.jsx(e.code,{children:"component-alpha-rank"})," in your project, import them as follows:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { MyComponent } from 'component-alpha-rank';

const App = () => (
  <div>
    <MyComponent />
  </div>
);

export default App;
`})}),`
`,n.jsxs(e.p,{children:["Ensure that you have ",n.jsx(e.code,{children:"react"})," and ",n.jsx(e.code,{children:"react-dom"})," dependencies in your project."]}),`
`,n.jsx(e.h2,{id:"scripts",children:"Scripts"}),`
`,n.jsx(e.h3,{id:"build",children:"Build"}),`
`,n.jsx(e.p,{children:"To build the library for production:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm run build
`})}),`
`,n.jsx(e.p,{children:"This command uses TypeScript and Vite to create production builds for the library."}),`
`,n.jsx(e.h3,{id:"lint",children:"Lint"}),`
`,n.jsx(e.p,{children:"To run ESLint on your codebase:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm run lint
`})}),`
`,n.jsx(e.h3,{id:"storybook",children:"Storybook"}),`
`,n.jsx(e.p,{children:"To run Storybook for component development and preview:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm run storybook
`})}),`
`,n.jsx(e.p,{children:"To build Storybook for production:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm run build-storybook
`})}),`
`,n.jsx(e.h3,{id:"分支管理",children:"分支管理"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"main: 主分支，用于发布包"}),`
`,n.jsx(e.li,{children:"beta: 测试分支，用于发布测试包"}),`
`,n.jsx(e.li,{children:"feat/*: 功能分支"}),`
`]}),`
`,n.jsx(e.h4,{id:"分支合并",children:"分支合并"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"开发分支先合并至beta分支，完成测试后再将开发分支合并至main分支。"}),`
`,n.jsx(e.li,{children:"当往beta分支合并遇见冲突时，从开发分支checkout一个新的分支后合并beta分支，解决冲突后再将checkout的分支合并至beta分支。"}),`
`,n.jsx(e.li,{children:"当往main分支合并遇见冲突时，直接合并main分支代码解决冲突后再提交代码重新合并。"}),`
`]}),`
`,n.jsx(e.p,{children:"beta分支作为测试包分支可能存在多种测试代码，不能直接将beta合并至main分支，合并操作一定要由开发分支直接合并。"}),`
`,n.jsx(e.h3,{id:"storybook-github-publish",children:"Storybook GitHub publish:"}),`
`,n.jsx(e.p,{children:"GitHub Pages 通常部署在 gh-pages 分支。而且需要仓库是一个公开的状态，所以项目创建了另一个仓库存放 Storybook 构建产物。并且使用了github workflows来自动构建并发布。"}),`
`,n.jsx(e.p,{children:"以下是详细步骤，以确保你能够成功地将构建后的文件推送到另一个仓库："}),`
`,n.jsx(e.h4,{id:"创建-github-personal-access-token-pat",children:"创建 GitHub Personal Access Token (PAT)"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["进入 ",n.jsx(e.a,{href:"https://github.com/settings/tokens",rel:"nofollow",children:"GitHub Personal Access Tokens"}),". 页面。"]}),`
`,n.jsx(e.li,{children:"为 token 命名，并选择合适的权限。至少需要 repo 权限。"}),`
`,n.jsx(e.li,{children:"生成 token 后，复制并保存它。"}),`
`]}),`
`,n.jsx(e.h4,{id:"添加-github-secrets",children:"添加 GitHub Secrets"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"进入你的源仓库页面。（这个仓库是源代码仓库，不是存放构建产物的仓库）"}),`
`,n.jsx(e.li,{children:'点击 "Settings"，在左侧栏中选择 "Secrets and variables" -> "Actions"，点击 "New repository secret"。'}),`
`,n.jsx(e.li,{children:'将 secret 命名为 TARGET_REPO_ACCESS_TOKEN，并将你的 PAT 粘贴到 "Value" 字段中，然后点击 "Add secret"。'}),`
`]}),`
`,n.jsx(e.h4,{id:"创建-github-actions-工作流文件",children:"创建 GitHub Actions 工作流文件"}),`
`,n.jsx(e.p,{children:"在你的项目中创建一个 GitHub Actions 工作流文件，路径为 .github/workflows/deploy-storybook.yml。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`name: Deploy Storybook

on:
  push:
    branches:
      - master  # 或者你希望触发的其他分支

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '21'  # 选择你需要的 Node.js 版本

      - name: Install dependencies
        run: npm install

      - name: Build Storybook
        run: npm run build-storybook # 构建命令 可在项目的package.json中配置

      - name: Configure Git
        run: |
          git config --global user.name "github-actions[bot]" # 可以配置自动化的用户名
          git config --global user.email "github-actions[bot]@users.noreply.github.com" # 可以配置自动化的邮箱

      - name: Deploy to GitHub Pages
        env:
          GITHUB_TOKEN: \${{ secrets.TARGET_REPO_ACCESS_TOKEN }} # GitHub Personal Access Token
        run: |
          # 克隆目标仓库的gh-pages分支
          git clone --branch gh-pages https://x-access-token:\${{ secrets.TARGET_REPO_ACCESS_TOKEN }}@github.com/aidc-fe/component-alpha-rank-storybook.git target_repo # 仓库地址 只需修改aidc-fe/component-alpha-rank-storybook即可
          cd target_repo
          # 删除所有旧文件
          rm -rf *
          # 复制新构建的文件
          cp -r ../storybook-static/* .
          # 提交并推送更改
          git add .
          git commit -m "Deploy Storybook to GitHub Pages" # 此次提交的注释
          git push origin gh-pages --force
`})}),`
`,n.jsx(e.h3,{id:"package-publish",children:"Package Publish"}),`
`,n.jsx(e.p,{children:"To publish the package:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"github 自动化发布到npm公网包:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"需要配置NPM_TOKEN:登录NPM官网，创建自己的token，https://www.npmjs.com/settings -> Access Tokens -> Generate New Token -> Classic Token，选择Automation权限后点击Generate Token"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"复制生成的token前往GitHub Secrets"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"进入你的源仓库页面。"}),`
`,n.jsx(e.li,{children:'点击 "Settings"，在左侧栏中选择 "Secrets and variables" -> "Actions"，点击 "New repository secret"。'}),`
`,n.jsx(e.li,{children:'将 secret 命名为 NPM_TOKEN，并将你的 Token 粘贴到 "Value" 字段中，然后点击 "Add secret"。'}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"配置GITHUB_TOKEN权限:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"进入你的源仓库页面。"}),`
`,n.jsx(e.li,{children:'点击 "Settings"，在左侧栏中选择 "Actions" -> "General"。'}),`
`,n.jsx(e.li,{children:'将 "Workflow permissions" 权限配置为 Read and write permissions 然后保存。'}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`name: Publish Beta

on:
  push:
    branches:
      - beta # 这里指定触发发布的分支

jobs:
  publish:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '21.5' # 选择你需要的 Node.js 版本
        cache: 'npm'

    - name: Configure Git
      run: |
        git config --global user.name "github-actions[bot]"
        git config --global user.email "github-actions[bot]@users.noreply.github.com"

    - name: Run prerelease
      run: |
        git remote -v
        npm version prerelease --preid=beta # 更新beta版本号

    - name: Push changes # 更新的版本号push到beta分支
      uses: ad-m/github-push-action@v0.6.0
      with:
        github_token: \${{ secrets.GITHUB_TOKEN }} # Github权限需要配置 此Token不需要在GitHub Secrets配置
        branch: beta  # 推送到的分支，根据需要修改

    - name: Install dependencies
      run: |
        npm install --no-save

    - name: Build the project
      run: npm run build

    - name: Publish beta version
      env:
        NPM_TOKEN: \${{ secrets.NPM_TOKEN }}
      run: npm publish --tag beta # 发布beta版本
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"For a public release:"}),`
`,n.jsx(e.p,{children:"发布正式包如上"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`name: Publish Beta

on:
  push:
    branches:
      - beta # 这里指定触发发布的分支

jobs:
  publish:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '21.5' # 选择你需要的 Node.js 版本
        cache: 'npm'

    - name: Configure Git
      run: |
        git config --global user.name "github-actions[bot]"
        git config --global user.email "github-actions[bot]@users.noreply.github.com"

    - name: Run prerelease
      run: |
        git remote -v
        npm version patch -m "chore: bump version to %s" # 更新beta版本号

    - name: Push changes
      uses: ad-m/github-push-action@v0.6.0
      with:
        github_token: \${{ secrets.GITHUB_TOKEN }} # Github权限需要配置 此Token不需要在GitHub Secrets配置
        branch: beta  # 推送到的分支，根据需要修改

    - name: Install dependencies
      run: |
        npm install --no-save

    - name: Build the project
      run: npm run build

    - name: Publish beta version
      env:
        NPM_TOKEN: \${{ secrets.NPM_TOKEN }}
      run: npm publish --access public # 发布beta版本
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"development",children:"Development"}),`
`,n.jsx(e.h3,{id:"prerequisites",children:"Prerequisites"}),`
`,n.jsxs(e.p,{children:["Ensure you have ",n.jsx(e.code,{children:"Node.js"})," and ",n.jsx(e.code,{children:"npm"})," or ",n.jsx(e.code,{children:"Yarn"})," installed on your machine. You also need ",n.jsx(e.code,{children:"React"})," and ",n.jsx(e.code,{children:"React DOM"})," version ",n.jsx(e.code,{children:"18.3.1"})," or higher as peer dependencies."]}),`
`,n.jsx(e.h3,{id:"setup",children:"Setup"}),`
`,n.jsx(e.p,{children:"To set up the development environment:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Clone the repository:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`git clone https://github.com/your-username/component-alpha-rank.git
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Install dependencies:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install
# or
yarn install
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Run Storybook to start developing components:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm run storybook
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"license",children:"License"}),`
`,n.jsx(e.p,{children:"This project is licensed under the ISC License."}),`
`,n.jsx(e.h2,{id:"author",children:"Author"}),`
`,n.jsxs(e.p,{children:["Created by ",n.jsx(e.a,{href:"mailto:xieningyu.xny@alibaba-inc.com",children:"xieningyu.xny@alibaba-inc.com"}),"."]}),`
`,n.jsx(e.h2,{id:"contributing",children:"Contributing"}),`
`,n.jsx(e.p,{children:"If you'd like to contribute, please create a pull request or raise an issue."}),`
`,n.jsx(e.h2,{id:"contact",children:"Contact"}),`
`,n.jsx(e.p,{children:"For questions or support, please reach out to the author via email."})]})}function c(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{c as default};
