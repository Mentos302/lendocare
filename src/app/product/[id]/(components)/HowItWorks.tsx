import {
  SvgHowBus,
  SvgHowCalendar,
  SvgHowHeart,
  SvgHowRoute,
} from "@/app/(svg)/AllSvg";

const HowItWorks = () => {
  return (
    <div>
      <div className="mt-5 mb-4 text-xl">Як це працює</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-3.5 p-4 text-xs how-it-works-bg-1 rounded-lg">
          <SvgHowCalendar />
          <span className="w-3/4">
            Обираєте дату користування (звичайну або гнучку)
          </span>
        </div>
        <div className="flex flex-col gap-3.5 p-4 text-xs how-it-works-bg-2 rounded-lg">
          <SvgHowBus />
          <span className="w-3/4">
            Оформляєте замовлення та чекаєте на доставку
          </span>
        </div>
        <div className="flex flex-col gap-3.5 p-4 text-xs how-it-works-bg-3 rounded-lg">
          <SvgHowHeart />
          <span className="w-3/4">Користуєтесь потрібним обладнанням</span>
        </div>
        <div className="flex flex-col gap-3.5 p-4 text-xs how-it-works-bg-4 rounded-lg">
          <SvgHowRoute />
          <span className="w-3/4">
            Після користування повертаєте його нам назад
          </span>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
