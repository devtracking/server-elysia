const logError = (msg: string): never => {  
  throw new Error(msg);
};

const logWarning = (msg: string): void => {
  console.warn(msg);
};

const logInfo = (msg: string): void => {
  console.info(msg);
}

export {
  logError,
  logWarning,
  logInfo
};