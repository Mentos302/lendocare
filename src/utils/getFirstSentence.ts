export const getFirstSentence = (text: string) => {
   const firstPeriodIndex = text.indexOf(".");

   const firstSentence = text.slice(0, firstPeriodIndex + 1);

   return firstSentence.trim();
 };