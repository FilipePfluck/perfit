import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { Button } from "../../components/Button";
import { GenericModal } from "../../components/GenericModal";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import { useAuth } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import * as S from "./styles";

interface handleClickItemProps {
  weekday: string;
  hour: string;
  hourIndex: number;
  weekdayIndex: number;
}

interface TrainerProps{
  id: string
}

export const Trainer: React.FC<TrainerProps> = ({ id }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [trainerData, setTrainerData] = useState(null);
  const [selectedWeekDay, setSelectedWeekDay] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const [weekdayIndex, setWeekdayIndex] = useState(null);
  const [hourIndex, setHourIndex] = useState(null);

  const personal = {
    name: "Filipe",
    weekdays: "Sábado",
    hour: "08:00AM",
  };

  const days = [
    {
      hours: [
        null,
        null,
        { isAvailable: true },
        { isAvailable: true },
        { isAvailable: false },
        { isAvailable: true },
        null,
        null,
        { isAvailable: true },
        { isAvailable: true },
        { isAvailable: false },
        { isAvailable: false },
      ],
    },
    {
      hours: [
        { isAvailable: true },
        { isAvailable: false },
        { isAvailable: false },
        { isAvailable: true },
        { isAvailable: true },
        null,
        { isAvailable: false },
        { isAvailable: false },
        { isAvailable: true },
        { isAvailable: true },
        null,
        null,
      ],
    },
    {
      hours: [
        null,
        { isAvailable: false },
        { isAvailable: false },
        { isAvailable: true },
        { isAvailable: true },
        null,
        null,
        null,
        { isAvailable: false },
        { isAvailable: false },
        { isAvailable: true },
        { isAvailable: true },
      ],
    },
    {
      hours: [
        null,
        null,
        { isAvailable: true },
        { isAvailable: true },
        { isAvailable: false },
        { isAvailable: true },
        null,
        null,
        { isAvailable: true },
        { isAvailable: true },
        { isAvailable: false },
        { isAvailable: false },
      ],
    },
    {
      hours: [
        { isAvailable: true },
        { isAvailable: false },
        { isAvailable: false },
        { isAvailable: true },
        { isAvailable: true },
        null,
        null,
        null,
        { isAvailable: true },
        { isAvailable: true },
        { isAvailable: false },
        { isAvailable: false },
      ],
    },
    {
      hours: [
        null,
        { isAvailable: false },
        { isAvailable: false },
        { isAvailable: true },
        { isAvailable: true },
        null,
        { isAvailable: true },
        { isAvailable: true },
        { isAvailable: false },
        null,
        { isAvailable: true },
        { isAvailable: true },
      ],
    },
    {
      hours: [
        null,
        { isAvailable: false },
        { isAvailable: false },
        { isAvailable: true },
        { isAvailable: true },
        null,
        null,
        null,
        { isAvailable: false },
        { isAvailable: false },
        { isAvailable: true },
        { isAvailable: true },
      ],
    },
  ];

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleClickItem = ({
    weekday,
    hour,
    weekdayIndex,
    hourIndex,
  }: handleClickItemProps) => {
    setSelectedWeekDay(weekday);
    setSelectedHour(hour);
    setWeekdayIndex(weekdayIndex);
    setHourIndex(hourIndex);
    handleOpenModal();
  };

  const { user } = useAuth()

  const handleCreateTraining = async () => {
    await api
      .post("/trainings", {
        personal_id: "b599802a-1bea-4e6e-9794-637981c660bd",
        day: weekdayIndex,
        hour: hourIndex,
      })
      .then((res) => {
        setModalOpen(false);
      })
      .catch((err) => console.log("err:", err));
  };

  useEffect(()=>{
    api.get(`/personal/${id}`).then(response => {
      console.log('response',response.data)
      console.log(id)
      setTrainerData(response.data)
    })
  },[])

  useEffect(()=>{
    console.log('trainerData',trainerData)
  },[trainerData])

  return (
    <S.Container>
      <Header shouldGoBack />
      <S.Content>
        <S.UserInfo>
          <header>
            <div />
            <h1>{trainerData && trainerData.name}</h1>
          </header>
          <div>
            <p>Preço: R${trainerData && trainerData.price}</p>
            <p>Número: {trainerData && trainerData.phone}</p>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            voluptatibus quo molestiae modi vel quis illum sed eius at minus
            exercitationem, aperiam sequi quos iste voluptate totam praesentium
            maxime eligendi.
          </div>
        </S.UserInfo>

        <Table
          onItemClick={handleClickItem}
          days={days}
        />
      </S.Content>

      <GenericModal ariaHideApp={true} isOpen={modalOpen}>
        <S.ContainerIcons>
          <FiX size={32} onClick={handleCloseModal} />
        </S.ContainerIcons>
        <S.ModalContent>
          <h1>Deseja marcar aula com {personal.name}?</h1>
          <p>
            {selectedWeekDay} - {selectedHour}
          </p>
          <Button
            text="Confirmar"
            type="button"
            onClick={handleCreateTraining}
          />
        </S.ModalContent>
      </GenericModal>
    </S.Container>
  );
};
