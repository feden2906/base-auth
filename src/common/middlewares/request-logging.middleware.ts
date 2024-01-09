import { Logger } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

import { LoggerContextEnum } from '../models/enums/logger-context.enum';

const logger = new Logger(LoggerContextEnum.REQUEST);

export function requestLoggingMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const start = Date.now();
  const id: number = Date.now();

  logger.debug(`${id}: -> ${req.method} ${req.path}`);
  res.on('finish', () => {
    logger.debug(
      `${id}: <- ${req.method} ${req.path}; ${res.statusCode} ${
        res.statusMessage
      }; ${Date.now() - start}ms`,
    );
  });
  next();
}
