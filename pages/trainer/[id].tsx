import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import { Trainer } from "../../src/screens/Trainer";
import { api } from "../../src/services/api";
import { Trainer as TrainerType } from "../../src/types/Trainer";

interface Props {
  //   trainer: TrainerType;
  id: string;
}

type Data = {};

export default function TrainerPage({
  id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(id);

  return <Trainer id={id} />;
}

export const getServerSideProps = async (ctx) => {
  const id = String(ctx.params.id);
  return {
    props: {
      id,
    },
  };
};
