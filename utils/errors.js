/**
 * Helper function to throw errors with the following string template <fileName>.<functionName>:<errorMsg>.
 *
 * @param {string} fileName Holds the file name.
 * @param {string} functionName Holds the function name.
 * @param {string} errMsg Holds the error message.
 */
export function throwError(fileName, functionName, errMsg) {
  const errorMessage = `${fileName}.${functionName}: ${errMsg}`;

  throw new Error(errorMessage);
}

export default throwError;
