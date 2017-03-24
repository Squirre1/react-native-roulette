import React, { Component, PropTypes, Children } from 'react';
import { View, Animated, PanResponder, Easing } from 'react-native';

import RouletteItem from './RouletteItem';
import styles from './styles';

class Roulette extends Component {

  constructor(props) {
    super(props);
    this.state = {
      _animatedValue: new Animated.Value(0),
      activeItem: 0
    };

    this.step = props.step || (2 * Math.PI) / props.children.length;

    this.panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderRelease: () => {
        const { children } = this.props;
        const { activeItem } = this.state;
        const nextItem = activeItem + 1;

        this.state._animatedValue.setValue(activeItem);
        Animated.timing(this.state._animatedValue, { toValue: nextItem, easing: Easing.linear }).start();

        this.setState({ activeItem: nextItem > children.length ? 1 : nextItem });
      }
    });
  }

  getCenterCoordinates({ x, y, width, height }) {
    this.setState({ centerX: x + (width / 2), centerY: y + (height / 2) });
  }

  renderDefaultCenter() {
    const { radius, customCenterStyle } = this.props;

    return (
      <View
        style={[
          styles.center,
          { width: radius / 10, height: radius / 10, borderRadius: radius },
          customCenterStyle
        ]}
        onLayout={(event) => this.getCenterCoordinates(event.nativeEvent.layout)}
      />
    );
  }

  render() {
    const { children, radius, distance, renderCenter, customStyle } = this.props;

    const interpolatedRotateAnimation = this.state._animatedValue.interpolate({
      inputRange: [0, children.length],
      outputRange: ['0deg', '360deg']
    });

    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[
          styles.container,
          { width: radius, height: radius, borderRadius: radius / 2 },
          { transform: [{ rotate: interpolatedRotateAnimation }] },
          customStyle
        ]}
      >
          {
            Children.map(children, (child, index) =>
              <RouletteItem
                item={child}
                index={index}
                radius={radius}
                step={this.step}
                distance={distance}
              />
          )}
          {renderCenter ? renderCenter() : this.renderDefaultCenter()}
      </Animated.View>
    );
  }
}

Roulette.propTypes = {
  step: PropTypes.number,
  radius: PropTypes.number,
  distance: PropTypes.number,
  children: PropTypes.element,
  renderCenter: PropTypes.func,
  customStyle: PropTypes.any,
  customCenterStyle: PropTypes.any
};

Roulette.defaultProps = {
  radius: 300,
  distance: 100
};

export default Roulette;
