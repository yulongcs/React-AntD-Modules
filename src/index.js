import React from "react";
import ReactDOM from "react-dom";
import App from "./modules/test-module";
import registerServiceWorker from "./registerServiceWorker";
import 'antd/dist/antd.css';

ReactDOM.render(<App />,
  document.getElementById("root")
);
registerServiceWorker();
