import dbErrorHandler from "../helpers/dbErrorHandler.js";
const handleError = (req, res) => {
  // Your code to handle the error
};
const getErrorMessage = (err) => {
  return dbErrorHandler.getErrorMessage(err);
}; // Export the controller function
export default {
  handleError: handleError,
  getErrorMessage: getErrorMessage,
};
