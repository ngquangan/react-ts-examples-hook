import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HelloComponent } from './hello';

ReactDOM.render(
  <HelloComponent
    username = "ngquangan"
  />,
  document.getElementById('root')
);