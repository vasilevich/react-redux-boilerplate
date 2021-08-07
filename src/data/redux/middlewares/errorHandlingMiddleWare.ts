/**
 * Sends error handling middleware.
 */

const errorHandlerMiddleWare = store => next => action => {
  /**
   * Do something on general redux error
   * for example, catch all
   */

  next(action);
};

export default errorHandlerMiddleWare;

