import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface ButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  children: React.ReactNode;
}

import { colors } from '../colors';
import RegularText from '../Texts/RegularText';

const Buttonview = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <Buttonview onPress={props.onPress} style={props.btnStyles}>
      <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
    </Buttonview>
  );
};

export default RegularButton;
