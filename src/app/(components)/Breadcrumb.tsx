import Link from "next/link";
import { SvgChevron } from "../(svg)/AllSvg";

type propTypes = {
  links: {
    label: string;
    path?: string;
  }[];
};

const Breadcrumb = ({ links }: propTypes) => {
  return (
    <div className="flex overflow-x-auto w-fit items-center gap-3.5 px-3 py-2 bg-blue-50 rounded-lg text-sm mb-8">
      {links.map((link, i) => {
        const isLastItem = i === links.length - 1;

        return (
          <>
            {i ? <SvgChevron /> : ""}
            {isLastItem ? (
              <span className="font-regular min-w-fit text-gray-600">
                {link.label}
              </span>
            ) : (
              <Link
                href={link.path!}
                className="text-primary-01 min-w-fit font-semibold"
              >
                {link.label}
              </Link>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
