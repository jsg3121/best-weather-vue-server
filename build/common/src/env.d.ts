/**
 * ! .env 파일 변수 가져와 리턴
 * * 'true', 'false'는 `boolean`으로 리턴
 * * 그 외의 경우 `string`으로 리턴
 *
 * @param {string} val
 * @returns {boolean | string}
 */
export declare const env: (val: string) => boolean | string;
