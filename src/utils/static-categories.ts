export const ALL_CATEGORIES = process.env
  .NEXT_PUBLIC_CATEGORIES!.split(",")
  .map((cat) => parseFloat(cat));