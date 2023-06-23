import { capitalizeFistLetter } from "./capitalizeFistLetter";

const useYupValidationResolver = (schema: any) => async (data: any) => {
  try {
    const values = await schema.validate(data, {
      abortEarly: false,
    });

    return {
      values,
      errors: {},
    };
  } catch (errors: any) {
    return {
      values: {},
      errors: errors.inner.reduce(
        (allErrors: any, currentError: any) => ({
          ...allErrors,
          [currentError.path]: {
            type: currentError.type ?? 'validation',
            message: capitalizeFistLetter(currentError.message),
          },
        }),
        {},
      ),
    };
  }
};

export { useYupValidationResolver };
