### Installation
```bash
npm install react-native-roulette
```

### Properties

```
children // must be greater than 1

step // Roulette items margin
radius = {300} // Roulette radius
distance = {100} // Distance from center
rouletteRotate = {0} // Roulette rotate angle
enableUserRotate = {false} // Enable user input for rotate

renderCenter = () => {} // Render custom center
handlerOfRotate = () => {} // Return active item props after rotation

customStyle // Roulette styles
customCenterStyle // Center styles
```

### Usage example
```
...

import Roulette from 'react-native-roulette';

<Roulette rouletteRotate={10} enableUserRotate onRotate={(props) => console.log(props)} >
  <AppIcon
    ref="icon"
    logo={TAPBOO_LOGO}
    title="TAPBOO"
    onPress={() => Actions.tapboo()}
  />
  <AppIcon
    ref="icon"
    logo={TUCHAT_LOGO}
    title="TUCHAT"
    onPress={() => Actions.tuchat()}
  />
  <AppIcon
    ref="icon"
    logo={DEV2UP_LOGO}
    title="DEV2UP"
    onPress={() => Actions.dev2up()}
  />
  <AppIcon
    ref="icon"
    logo={TAPBOO_LOGO}
    title="TAPBOO"
    onPress={() => Actions.tapboo()}
  />
  <AppIcon
    ref="icon"
    logo={TUCHAT_LOGO}
    title="TUCHAT"
    onPress={() => Actions.tuchat()}
  />
  <AppIcon
    ref="icon"
    logo={TUCHAT_LOGO}
    title="TUCHAT"
    onPress={() => Actions.tuchat()}
  />
</Roulette>
...

```

![](http://i.imgur.com/MVfhifa.gif)
