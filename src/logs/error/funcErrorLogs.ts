import { ErrorLog } from '../../types/logsTypes.js';
import { _notUniqueType } from './typesTextErrorLogs.js';

export function ErrorLogs(type: string, message: string) {
  let status = 501;
  if (type === _notUniqueType) {
    status = 500;
  }
  const error: ErrorLog = {
    type,
    message,
    status,
  };
  return error;
}
