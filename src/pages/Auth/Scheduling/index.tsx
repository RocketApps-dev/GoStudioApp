import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button } from '../../../components/Button';
import { Header } from '../../../components/Header';
import { AppColors } from '../../../global/constants/AppColors';

import * as S from './styles';
import { useScheduling } from '../../../hooks/useScheduling';
import { ShimmerTimeSelect } from './components/ShimmerTimeSelect';
import { ButtonTimeSelect } from './components/ButtonTimeSelect';
import { getCurrentDateFormated } from '../../../services/date';
import { ActivityIndicator } from 'react-native';

type DateProps = {
  dateString: string;
  day: number;
  month: number;
  timestamp: number;
  year: number;
};

export const Scheduling: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(getCurrentDateFormated());
  const [timeSelected, setTimeSelected] = useState('');

  const {
    loading,
    availableTimes,
    searchAvailableTimes,
    creatingAppointment,
    createAppointments,
  } = useScheduling();

  useEffect(() => {
    searchAvailableTimes(currentDate);
  }, [currentDate]);

  function setDateCalendar({ dateString }: DateProps) {
    setCurrentDate(dateString);
  }

  function handleSubmit() {
    createAppointments(currentDate, timeSelected);
  }

  if (creatingAppointment) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: AppColors.primary,
        }}>
        <ActivityIndicator size="large" color={AppColors.terciary} />
      </View>
    );
  }

  return (
    <S.Container>
      <Header />

      <S.ContainerCalendarScheduling>
        <View style={{ marginTop: 15, marginBottom: 15, width: '100%' }}>
          <S.TitlePage>Escolha a data</S.TitlePage>
        </View>

        <View style={{ width: '100%', alignItems: 'center' }}>
          <View style={{ width: '90%' }}>
            <Calendar
              onDayPress={day => setDateCalendar(day)}
              style={{
                width: '100%',
                backgroundColor: 'rgba(40, 38, 46, 1)',
                borderRadius: 20,
                marginBottom: 10,
              }}
            />
          </View>
          <View style={{ marginTop: 15, marginBottom: 15, width: '100%' }}>
            <S.TitlePage>Escolha o horário</S.TitlePage>
          </View>

          {loading ? (
            <ShimmerTimeSelect />
          ) : (
            <View style={{ width: '100%', alignItems: 'center' }}>
              <FlatList
                data={availableTimes}
                numColumns={4}
                style={{ height: 150 }}
                renderItem={item => (
                  <ButtonTimeSelect
                    pressFunction={() => {
                      setTimeSelected(item.item);
                    }}
                    isSelected={item.item === timeSelected}
                    key={item.index}
                    timeText={item.item}
                  />
                )}
              />
            </View>
          )}

          <Button title="Agendar" pressFunction={() => handleSubmit()} />
        </View>
      </S.ContainerCalendarScheduling>
    </S.Container>
  );
};
