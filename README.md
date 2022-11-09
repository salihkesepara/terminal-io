# terminal-io

This is a terminal for React web apps.

## Installation

### 1- Create a new react app

`npx create-react-app my-terminal-project`
`cd my-terminal-project`

### 2- Install terminal-io

`npm i terminal-io` or `yarn add terminal-io`

### 3- Update your body style

```css
/* src/index.css */

body {
  padding: 16px;
  margin: 0;
  background: #211d1b;
}
```

### 4- Add terminal-io into your project

update `App.js` and add these codes

```js
// src/App.js

import "./index.css";
import Terminal from "terminal-io";
import React from "react";

const App = () => {
  const commands = [
    { name: "summary", value: () => <p>This is summary text</p> },
  ];
  return <Terminal commands={commands} />;
};

export default App;
```

### 5- Run the project

`npm run start` or `yarn start`

### 6- Go to localhost server

http://localhost:3000/

## Events

| Event      | Description                             |
| ---------- | :-------------------------------------- |
| onEnter    | When the user presses the enter         |
| onDidMount | When the component install successfully |

## Props

| Prop        | Description                                                                 |
| ----------- | :-------------------------------------------------------------------------- |
| initialData | This data will add the command line automatically when the component loaded |
| commands    | All command list                                                            |

### Demo

https://salihkesepara.com

### Realworl example

https://github.com/salihkesepara/salihkeseparacom

### License

MIT
