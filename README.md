## Roulette component for react-native

[react-native-roulette](https://www.npmjs.com/package/react-native-roulette)

### Installation
```bash
npm install react-native-roulette
```

### Properties

```
step // Roulette items margin
radius={300} // Roulette radius
distance={100} // Distance from center
renderCenter=() => {} // Render custom center
customStyle // Roulette styles
customCenterStyle // Center styles
```

### Usage example
```
...

import Roulette from 'react-native-roulette';

<Roulette>
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
