import { ErrorLog } from '../../types/logsTypes.js';

export function ErrorLogs(type: string, message: string) {
  let status = 501;
  if (type === 'not-unique') {
    status = 500;
  }
  const error: ErrorLog = {
    type,
    message,
    status,
  };
  return error;
}
