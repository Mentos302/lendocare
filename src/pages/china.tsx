import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { lendobox } from "@/lib/lendoService";
import { Product } from "@/@types";

export const getServerSideProps: GetServerSideProps<{
  product: Product;
}> = async () => {
  const product = await lendobox.getProduct("Інвалідний візок");

  return { props: { product } };
};

export default function China({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <h1>{product.lendoProduct.name}</h1>;
}
