declare namespace JSONbig {
  interface Options {
    strict: boolean; // not being strict means do not generate syntax errors for "duplicate key"
    storeAsString: boolean; // toggles whether the values should be stored as BigNumber (default) or a string
  }

  /**
   * This is a function that can parse a JSON text, producing a JavaScript data structure.
   * It is a simple, recursive descent parser.
   * It does not use eval or regular expressions,
   * so it can be used as a model for implementing a JSON parser in other languages.
   * @param source the JSON string that will be parsed into a JavaScript object
   * @param reviver the optional reviver parameter is a function that can filter and transform the results.
   * It receives each of the keys and values, and its return value is used instead of the original value.
   * @param options the optional settings that should be considered when parsing a JSON string.
   */
  export function parse(
    source: string,
    reviver?: (this: any, key: string, value: any) => any,
    options?: Options
  ): object;

  /**
   * The stringify method takes a value and an optional replacer, and an optional
   * space parameter, and returns a JSON text.
   * @param value
   * @param replacer The replacer can be a function that can replace values, or an array of strings that will select the keys.
   * A default replacer method can be provided.
   * @param space Use of the space parameter can produce text that is more easily readable.
   */
  export function stringify(
    value: object,
    replacer?: function | Array,
    space: number | string
  ): string;
}

export default JSONbig;
