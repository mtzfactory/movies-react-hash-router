[![Skylab-coders](https://mtzfactory.github.io/logos/png/skylab-coders.png)](http://www.skylabcoders.com/)
![react](https://mtzfactory.github.io/logos/png/react.png)
![bootstrap](https://mtzfactory.github.io/logos/png/bootstrap.png)
![html-5](https://mtzfactory.github.io/logos/png/html-5.png)
![css-3](https://mtzfactory.github.io/logos/png/css-3.png)

### Movies Collection ~ realizado en React, react-router-dom y un poco de Bootstrap.

Ejemplo de uso del componente [```react-router-dom```][react-router-dom], con los metodos [**HashRouter**][hashrouter], para enrutados a través del _hash_ de la URL, y el método [**withRouter**][withrouter], para el acceso al objeto _history_ del navegador.

[Movies Collection](http://movies-collection.surge.sh)

Para instalar este ejemplo:

```bash
$ git clone https://github.com/mtzfactory/movies-react-hash-router.git
$ cd movies-react-hash-router
$ npm install
$ npm start
```

Si quereis empezar de cero, podeis hacer:

```bash
$ npm install -g create-react-app

$ create-react-app my-movie-app
$ cd my-movie-app/

$ npm install --save react-router-dom
$ npm install --save jquery
$ npm install --save bootstrap
$ npm run start
```

Una vez instalado por _npm_ los paquetes **JQuery** y **Bootstrap**, recuerda importarlos en el fichero _index.js_, respetando el orden:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';

import App from './App';

import $ from 'jquery';
window.jQuery = window.$ = $;
require('bootstrap');

ReactDOM.render(<App/>, document.getElementById('root'));
```
De este modo, el menú se podrá desplegar cuando este en la vista móvil.

![screenshoot-1](./screenshoots/screenshoot-1.png)

![screenshoot-2](./screenshoots/screenshoot-2.png)


#### SkylabCoders Academy - Full Stack Web Development Bootcamp

[create-react-app]: https://github.com/facebookincubator/create-react-app
[react-router-dom]: https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom
[hashrouter]: https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/HashRouter.md
[withrouter]: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/withRouter.md