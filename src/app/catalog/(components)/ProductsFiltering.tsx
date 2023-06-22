import { ALL_CATEGORIES } from "@/utils/static-categories";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type propTypes = { setCategories: Dispatch<SetStateAction<number[]>> };

export default function ProductsFiltering({ setCategories }: propTypes) {
  const selectCategory = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const id = parseFloat(target.id);

    setCategories((categories) => {
      if (categories.some((cat) => cat === id)) {
        const updatedCategories = categories.filter((cat) => cat !== id);

        return updatedCategories.length ? updatedCategories : ALL_CATEGORIES;
      } else {
        return [...categories, id];
      }
    });
  };

  return (
    <div>
      <label>
        <input type="checkbox" id="153" onChange={selectCategory} />
        <b>Коляски</b>
      </label>
      <label>
        <input type="checkbox" id="154" onChange={selectCategory} />
        <b>Роллатори</b>
      </label>
    </div>
  );
}
