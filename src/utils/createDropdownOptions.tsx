export type Option = { name: string; id: number };

export const createDropdownOptions = (options: string[]): Option[] =>
  options.map((option, i) => ({
    name: option,
    id: i,
  }));
