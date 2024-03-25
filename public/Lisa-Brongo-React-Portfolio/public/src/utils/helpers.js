 /**
 * Capitalizes the first letter of a string.
 * @param {string} string - The input string to capitalize.
 * @returns {string} The string with the first letter capitalized.
 */
export function capitalizeFirstLetter(string) {
    // if (typeof string !== 'string' || string.length === 0) {
    //   throw new Error('Input must be a non-empty string');
    // }
  
    // return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  /**
   * Validates an email address using a regular expression.
   * @param {string} email - The email address to validate.
   * @returns {boolean} True if the email is valid, false otherwise.
   */
  export function validateEmail(email) {
    if (typeof email !== 'string' || email.length === 0) {
      throw new Error('Input must be a non-empty string');
    }
  
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email.toLowerCase());
  }