/* eslint-disable */

import { ChangeEventHandler, FC, forwardRef, useState } from "react";
import classNames from "classnames";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
// import { SvgEyeClose, SvgOpenEye } from "./Svg/SvgAll";

type FormInputProps = {
  id: string;
  label?: string;
  className?: string;
  labelError?: boolean;
  error?:
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined
    | boolean;
  type?: HTMLInputElement["type"];
  required?: boolean;
  placeholder?: string;
  value?: number;
  onShow?: (event: any) => void;
  autoComplete?: string;
  identifier?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
};

type LabelProps = {
  label: string | undefined;
  required?: boolean | undefined;
  error: boolean | undefined;
  id: string;
};

export const Label: FC<LabelProps> = ({ label, required, error, id }) => {
  return (
    <label htmlFor={id} className="block mb-0.5 text-left">
      <span
        className={classNames("text-sm sm:text-base", {
          "text-red-500": error,
          "text-gray-01": !error,
        })}
      >
        {label}{" "}
      </span>
      {required && (
        <span
          className={classNames("pl-1", {
            "text-neutral-100": !error,
            "text-red-500": error,
          })}
        >
          *
        </span>
      )}
    </label>
  );
};

const Field = forwardRef<HTMLInputElement, FormInputProps>((props, ref) => {
  const {
    id,
    label,
    className,
    placeholder,
    error,
    required,
    value,
    labelError,
    type = "text",
    ...rest
  } = props;

  const [show, setShow] = useState(false);

  return (
    <div>
      <Label
        id={id ? id : "defaultId"}
        label={label ? label : ""}
        required={required ? required : false}
        error={labelError}
      />

      <div className="mt-0.5 text-left">
        <div className="relative">
          <input
            onChange={rest.onChange}
            value={value}
            ref={ref}
            {...props}
            type={type === "password" && show ? "text" : type}
            id={id}
            placeholder={placeholder}
            autoComplete={rest.autoComplete}
            className={classNames(
              `block w-full appearance-none rounded-md border px-4 py-2 shadow-field placeholder:text-gray-400 focus:outline-none text-sm sm:text-base ${className}`,
              {
                "border-red-500 text-red-500 focus:border-red-500 focus:ring-red-500":
                  error,
                "border-gray-01 text-gray-01": !error,
              }
            )}
          />
          {/* {type === "password" && (
            <div
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShow((val) => !val)}
            >
              {show ? (
                <SvgEyeClose
                  className={` ${error ? "text-red-500" : "text-N400"}`}
                />
              ) : (
                <SvgOpenEye
                  className={` ${error ? "text-red-500" : "text-N400"}`}
                />
              )}
            </div>
          )} */}
        </div>
        {error && typeof error === "object" && (
          <span className="text-red-500 text-xs">
            {error?.message?.toString()}
          </span>
        )}
      </div>
    </div>
  );
});
export { Field };
