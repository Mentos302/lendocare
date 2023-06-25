import Disclosure from "@/app/(components)/Disclosure";
import { ALL_CATEGORIES } from "@/utils/static-categories";
import classNames from "classnames";
import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";

type ProductsFilteringProps = {
  preselected: number;
  setCategories: Dispatch<SetStateAction<number[]>>;
};

const ProductsFiltering: FC<ProductsFilteringProps> = (props) => {
  const { preselected, setCategories } = props;
  const [checkedItems, setCheckedItems] = useState<number[]>([preselected]);

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
    setCheckedItems((prevCheckedItems) => {
      if (prevCheckedItems.includes(id)) {
        const updatedItems = prevCheckedItems.filter((item) => item !== id);

        return updatedItems.length ? updatedItems : [];
      } else {
        return [...prevCheckedItems, id];
      }
    });
  };

  return (
    <div className="space-y-3 md:space-y-6">
      <Disclosure className="py-3 md:py-6 px-3 md:px-6" title="Категорії">
        <label
          className={classNames(
            "flex gap-3 items-center cursor-pointer text-gray-01 text-sm font-medium",
            {
              "text-primary-01": checkedItems.includes(153),
            }
          )}
        >
          <input
            className="h-4 w-4 text-sm cursor-pointer accent-primary-01 focus:ring-0 focus:ring-offset-0"
            type="checkbox"
            id="153"
            onChange={selectCategory}
            defaultChecked={checkedItems.includes(153)}
          />
          Коляски
        </label>
        <label
          className={classNames(
            "flex gap-3 items-center cursor-pointer text-gray-01 text-sm font-medium",
            {
              "text-primary-01": checkedItems.includes(154),
            }
          )}
        >
          <input
            className="h-4 w-4 text-sm cursor-pointer accent-primary-01 focus:ring-0 focus:ring-offset-0"
            type="checkbox"
            id="154"
            onChange={selectCategory}
            defaultChecked={checkedItems.includes(154)}
          />
          Роллатори
        </label>
      </Disclosure>
      <Disclosure className="py-3 md:py-6 px-3 md:px-6" title="Сортування">
        <label
          className={classNames(
            "flex gap-3 items-center cursor-pointer text-gray-01 text-sm font-medium"
          )}
        >
          <input
            className="h-4 w-4 text-sm cursor-pointer accent-primary-01 focus:ring-0 focus:ring-offset-0"
            type="checkbox"
            id="popular"
          />
          За популярністю
        </label>

        <label
          className={classNames(
            "flex gap-3 items-center cursor-pointer text-gray-01 text-sm font-medium"
          )}
        >
          <input
            className="h-4 w-4 text-sm cursor-pointer accent-primary-01 focus:ring-0 focus:ring-offset-0"
            type="checkbox"
            id="cheap"
          />
          Спочатку дешеві
        </label>
        <label
          className={classNames(
            "flex gap-3 items-center cursor-pointer text-gray-01 text-sm font-medium"
          )}
        >
          <input
            className="h-4 w-4 text-sm cursor-pointer accent-primary-01 focus:ring-0 focus:ring-offset-0"
            type="checkbox"
            id="expensive"
          />
          Спочатку дорогі
        </label>
      </Disclosure>
    </div>
  );
};
export default ProductsFiltering;
