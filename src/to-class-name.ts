export type ToClassNameParameterType =
  | undefined
  | null
  | string
  | number
  | boolean;

/** Функция для удобного преобразования перечня значений для использования в classname в react.
 * Правила преобразования:
 * 1. удаляются значения (undefined, null, '', true, false), которые могут из-за невнимательности попасть в итоговую строку.
 * 2. можно использовать тернарный и логические операторы для вычисления части строки.
 */
export function toClassName(...values: ToClassNameParameterType[]): string {
  const filteredValues = values.filter((item) => {
    return item && item !== true;
  });

  return filteredValues.join(" ");
}
