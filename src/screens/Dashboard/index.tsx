import Link from "next/link";
import { DefaultTheme } from "styled-components";
import { useInfiniteQuery } from "react-query";

import { Header } from "../../components/Header";
import { MyTrainersCard } from "../../components/MyTrainersCard";
import { PersonalCard } from "../../components/PersonalCard";

import * as S from "./styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
// import { FiSearch } from 'react-icons/fi'

interface apiResponse {}

interface MyLessons {
  [key: string]: {
    name: string;
    lessons: { day: number; hour: number }[];
  };
}

export const Dashboard = () => {
  const [trainers, setTrainers] = useState([]);
  const [myLessons, setMyLessons] = useState<MyLessons[]>([]);

  const { user } = useAuth();

  console.log(user);

  async function fetchTrainer({ pageParam = null }) {
    const { data } = await api.get(`/personal`, {
      params: {
        city: user.city,
        page: 1,
        amountPerPage: 10,
      },
    });

    return data;
  }

  useEffect(() => {
    console.log(user.city);

    api
      .get(`/personal`, {
        params: {
          city: user.city.id,
          page: 1,
          amountPerPage: 10,
        },
      })
      .then((response) => {
        console.log(response.data);
        setTrainers(response.data);
      });
  }, [user]);

  useEffect(() => {
    api.get("/trainings/me").then((response) => {
      const formattedResponse = [];

      response.data.forEach((res) => {
        if (!formattedResponse[res.personal_id]) {
          formattedResponse[res.personal_id] = {
            name: res.personal.user.name,
            lessons: [{ day: res.day, hour: res.hour }],
          };
        } else {
          formattedResponse[res.personal_id].lessons.push({
            day: res.day,
            hour: res.hour,
          });
        }
      });

      setMyLessons(formattedResponse);
    });
  }, []);

  /* const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    fetchTrainer, 
    {
      getNextPageParam: lastPage => lastPage.after ?? null,
    }
  )
  
  useEffect(()=>{
    console.log('react query',data)
  },[data]) */

  return (
    <>
      <Header />
      <S.Container>
        <S.Content>
          <S.Aside>
            <span>Meus agendamentos</span>
            {Object.keys(myLessons).map((key, index) => (
              <MyTrainersCard
                name={myLessons[key].name}
                lessons={myLessons[key].lessons}
              />
            ))}
          </S.Aside>
          <S.Main>
            <S.ContentSearch>
              <span>Buscar personal na minha cidade</span>
            </S.ContentSearch>
            {trainers.length === 0 ? (
              <S.InfoContainer>
                <h1>
                  Ops! Parece que não temos nenhum personal em sua cidade.
                </h1>
                <p>Volte mais tarde para verificar se há algum personal.</p>
              </S.InfoContainer>
            ) : (
              <S.ContentPersonals>
                {trainers.map((trainer) => (
                  <Link key={trainer.id} href={`/trainer/${trainer.user.id}`}>
                    <a>
                      <PersonalCard
                        rating={5}
                        name={trainer.user.name}
                        description={
                          "Sou um profissional que atua desde 2008 na área da musculação. Atuei com grandes celebridades como: jogadores de futebol"
                        }
                      />
                    </a>
                  </Link>
                ))}
              </S.ContentPersonals>
            )}
          </S.Main>
        </S.Content>
      </S.Container>
    </>
  );
};
