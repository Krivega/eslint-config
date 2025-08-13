// simple logger used to test alias value imports
const logger = (...args: unknown[]) => {
  // eslint-disable-next-line no-console
  console.log('[logger]', ...args);
};

export default logger;
