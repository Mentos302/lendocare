import Breadcrumb from "@/app/(components)/Breadcrumb";
import { Product } from "@/app/types";

type propTypes = { product: Product };

export const ProductBreadcrumb = ({ product }: propTypes) => {
  const { name, subCategory } = product;

  const links = [
    {
      label: "Каталог",
      path: "/catalog",
    },
    {
      label: subCategory.name,
      path: "/catalog/" + subCategory.id,
    },
    {
      label: name,
    },
  ];

  return <Breadcrumb links={links} />;
};
