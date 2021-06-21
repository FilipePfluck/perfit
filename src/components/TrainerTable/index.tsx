import { useState } from 'react'
import { useViewport } from '../../hooks/useViewport'
import { hours } from '../../utils/hours'
import { weekdays } from '../../utils/weekdays'
import { TableItem } from '../TableItem'
import { TrainerTableItem } from '../TrainerTableItem'
import * as S from './styles'

interface Hour {
    name: string,
    address: string
  }
  
interface Day {
  hours: (Hour | null)[];
}

interface TrainerTableProps {
  days: Day[]
}

export const TrainerTable: React.FC<TrainerTableProps> = ({days}) => {
    const { width } = useViewport()

    const [selectedDay, setSelectedDay] = useState(0)

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
              return !!day.hours[hourindex] ? (
                <TrainerTableItem 
                  name={'Filipe'}
                  address={'teste'}
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
                {weekdays.map((day,index) => (
                    <S.SelectableDay 
                        key={day.longName}
                        isSelected={selectedDay === index} 
                        isSmall={width < 700}
                        onClick={()=>setSelectedDay(index)}
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
                <TrainerTableItem 
                  name={'Filipe'}
                  address={'teste'}
                />
              ) : (
                <div />
              )}
            </>
        ))}
            </S.Body>
        </S.Container>
    )
}