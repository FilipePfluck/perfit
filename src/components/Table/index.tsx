import { useState } from "react";
import { useViewport } from "../../hooks/useViewport";
import { hours } from "../../utils/hours";
import { weekdays } from "../../utils/weekdays";
import { TableItem } from "../TableItem";
import * as S from "./styles";

interface Hour {
  isAvailable: boolean;
}

interface Day {
  hours: (Hour | null)[];
}

interface TableProps {
  days: Day[];
  onItemClick: ({ weekday, hour, weekdayIndex, hourIndex }) => void;
}

export const Table: React.FC<TableProps> = ({
  days,
  onItemClick,
}) => {
  const { width } = useViewport();

  const [selectedDay, setSelectedDay] = useState(0);

  const handleItemClick = (
    isAvailable: boolean,
    weekday: string,
    hour: string,
    weekdayIndex: number,
    hourIndex: number
  ) => {
    if (isAvailable) onItemClick({ weekday, hour, weekdayIndex, hourIndex });
  };

  return width > 900 ? (
    <S.Container>
      <S.Header>
        <strong></strong>
        {weekdays.map((day) => (
          <strong key={day.longName}>{day.longName}</strong>
        ))}
      </S.Header>
      <S.Body>
        {hours.map((hour, hourindex) => (
          <>
            <strong key={hour}>{hour}</strong>
            {days.map((day, dayIndex) => {
              const isAvailable = day.hours[hourindex]
                ? day.hours[hourindex].isAvailable
                : false;

              return day.hours[hourindex] ? (
                <TableItem
                  onClick={() =>
                    handleItemClick(
                      isAvailable,
                      weekdays[dayIndex].longName,
                      hours[hourindex],
                      dayIndex,
                      hourindex
                    )
                  }
                  isAvailable={isAvailable}
                />
              ) : (
                <div />
              );
            })}
          </>
        ))}
      </S.Body>
    </S.Container>
  ) : (
    <S.Container>
      <S.Header>
        {weekdays.map((day, index) => (
          <S.SelectableDay
            key={day.longName}
            isSelected={selectedDay === index}
            isSmall={width < 700}
            onClick={() => setSelectedDay(index)}
          >
            <strong>{width > 700 ? day.longName : day.shortName}</strong>
          </S.SelectableDay>
        ))}
      </S.Header>
      <S.Body>
        {hours.map((hour, hourindex) => (
          <>
            <strong key={hour}>{hour}</strong>
            {days[selectedDay].hours[hourindex] ? (
              <TableItem
                onClick={() =>
                  handleItemClick(
                    days[selectedDay].hours[hourindex].isAvailable,
                    weekdays[selectedDay].longName,
                    hours[hourindex],
                    selectedDay,
                    hourindex
                  )
                }
                isAvailable={days[selectedDay].hours[hourindex].isAvailable}
              />
            ) : (
              <div />
            )}
          </>
        ))}
      </S.Body>
    </S.Container>
  );
};
