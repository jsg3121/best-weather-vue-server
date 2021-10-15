import { get } from "lodash";

/**
 * ! .env 파일 변수 가져와 리턴
 * * 'true', 'false'는 `boolean`으로 리턴
 * * 그 외의 경우 `string`으로 리턴
 *
 * @param {string} val
 * @returns {boolean | string}
 */
export const env = (val: string): boolean | string => {
  const data = get(process.env, val);
  if (data) {
    if (data === "true") {
      return true;
    } else if (data === "false") {
      return false;
    } else {
      return data;
    }
  } else {
    throw new Error("not found env value!!");
  }
};
