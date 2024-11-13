import{j as n}from"./jsx-runtime-CQsLhzk5.js";import{useMDXComponents as i}from"./index-C2WH5l5l.js";import"./index-Wp2u197Z.js";function r(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"component-alpha-rank",children:"component-alpha-rank"}),`
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
`,n.jsx(e.h3,{id:"publish",children:"Publish"}),`
`,n.jsx(e.p,{children:"To publish the package:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"For a beta release:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm run publish:beta
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"For a public release:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm run publish
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
`,n.jsx(e.p,{children:"For questions or support, please reach out to the author via email."})]})}function a(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{a as default};
