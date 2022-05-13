import React, { useState } from 'react';
import { View } from 'react-native';

import * as S from './styles';

type Props = {
  visible: boolean;
  title: string;
  message: string;
  onClosed?: () => void;
  buttons: {
    buttonOk?: {
      title: string;
      function: () => void;
    };
    buttonCancel: {
      title: string;
      function: () => void;
    };
  };
};

export const Modal: React.FC<Props> = props => {
  const [modalVisible, setModalVisible] = useState(props.visible);

  const {
    title,
    message,
    onClosed,
    buttons: { buttonOk, buttonCancel },
  } = props;

  return (
    <S.Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onClosed}>
      <S.Container>
        <S.BoxModal
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}>
          <S.TitleModal>{title}</S.TitleModal>
          <S.TextModal>{message}</S.TextModal>

          <View style={{ flexDirection: 'row' }}>
            <S.ButtonLeft
              style={{ elevation: 5 }}
              onPress={() => {
                setModalVisible(!modalVisible);
                buttonCancel.function();
              }}>
              <S.TextButton>{buttonCancel.title}</S.TextButton>
            </S.ButtonLeft>

            <S.ButtonRight
              style={{ elevation: 5 }}
              onPress={() => buttonOk?.function()}>
              <S.TextButton style={{ color: 'white' }}>
                {buttonOk?.title}
              </S.TextButton>
            </S.ButtonRight>
          </View>
        </S.BoxModal>
      </S.Container>
    </S.Modal>
  );
};
