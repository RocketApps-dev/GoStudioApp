import React, { useState } from 'react';
import { LayoutAnimation, Platform, UIManager } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import EntIcons from 'react-native-vector-icons/Entypo';

import { AppColors } from '../../global/constants/AppColors';

import * as S from './styles';

type ExpandButtons = {
  entIconName: string;
  pressFunction?: () => void;
};

type Props = {
  expandButtons: ExpandButtons[];
};

export const FloatingActionButton: React.FC<Props> = ({ expandButtons }) => {
  const [expanded, setExpanded] = useState(false);
  const [buttonIcon, setButtonIcon] = useState('options');

  if (
    Platform.OS == 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return (
    <>
      <S.BoxButton
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setExpanded(!expanded);

          setButtonIcon(!expanded ? 'close' : 'options');
        }}
        style={{ elevation: 10 }}>
        <Ionicon name={buttonIcon} size={30} color={AppColors.secondary} />
      </S.BoxButton>
      {expanded && (
        <S.ContainerExpandedButtons>
          {expandButtons.map(({ entIconName, pressFunction }) => (
            <S.ExpandedButton key={Math.random()} onPress={pressFunction}>
              <EntIcons
                name={entIconName}
                size={15}
                color={AppColors.secondary}
              />
            </S.ExpandedButton>
          ))}
        </S.ContainerExpandedButtons>
      )}
    </>
  );
};
