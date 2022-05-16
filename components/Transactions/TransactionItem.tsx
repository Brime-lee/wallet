import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

import { colors } from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
import TransactionAvi from './TransactionAvi';

import { TransactionProps } from './types';

const TransactionRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const LeftView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  flex: 2;
`;

const RightView = styled.View`
  flex: 1;
`;

const TransactionItem: FunctionComponent<TransactionProps> = (props) => {
  return (
    <TransactionRow>
      <LeftView>
        <TransactionAvi
          background={props.art.background}
          icon={props.art.icon}
        />
        <View style={{ marginLeft: 10 }}>
          <RegularText
            textStyles={{
              textAlign: 'left',
              marginBottom: 5,
              color: colors.secondary,
            }}
          >
            {props.title}
          </RegularText>
          <SmallText textStyles={{ textAlign: 'left', color: colors.graydark }}>
            {props.subtitle}
          </SmallText>
        </View>
      </LeftView>
      <RightView>
        <RegularText
          textStyles={{
            textAlign: 'right',
            marginBottom: 5,
            color: colors.secondary,
          }}
        >
          {props.amount}
        </RegularText>
        <SmallText textStyles={{ textAlign: 'right', color: colors.graydark }}>
          {props.date}
        </SmallText>
      </RightView>
    </TransactionRow>
  );
};

export default TransactionItem;
