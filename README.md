# UI Test Library with typescript

This is a simple **UI Library** for only test purpose

Install the library just with the next code:
```
npm install jav-ts-ui-library
```

## How to use

Import the main package in your js|ts file just using:
```
import { ElementName } from 'jav-ui-library'
```

## List of components(ElementName)

* TestAvatar
* TestButton
* TestDropDown

## Configuration in project

* Install quasar

* add quasar to the main file(main TS|JS)
```
import { QBtn, QAvatar, Quasar} from 'quasar'
...
app.use(Quasar, {
    plugins: {},
    components: {}
    })
```

* add Main quasar class and extras(extras are optional)
```
import 'quasar/src/css/index.sass'

// Optionals, there are more
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-symbols-rounded/material-symbols-rounded.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import '@quasar/extras/ionicons-v4/ionicons-v4.css'
import '@quasar/extras/bootstrap-icons/bootstrap-icons.css'

...
app.use(Quasar, {
    plugins: {},
    components: {}
    })
```

* You must add quasar components that you are go going to use in the app, Ex: QBtn, QAvatar
```
import { QBtn, QAvatar, Quasar} from 'quasar'
...

app.use(Quasar, {
    plugins: {},
    components: {
        QBtn,
        QAvatar
    }
})
```

* In vite.config(ts|js) add ***transformAssetUrls*** as a configuration in vue-template plugins section and quasar with a scss|sass quasar styles sheet variable configuration if you have one
```
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
...
vue({
      template: { transformAssetUrls }
    }),
quasar({
      sassVariables: 'src/quasar-variables.sass'
    })
```

* stylesheet usually content (src/quasar-variables.sass)
```
$primary   : #1976D2
$secondary : #26A69A
$accent    : #9C27B0

$dark      : #1D1D1D

$positive  : #21BA45
$negative  : #C10015
$info      : #31CCEC
$warning   : #F2C037
```


