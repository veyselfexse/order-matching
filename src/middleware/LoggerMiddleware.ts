import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name);

  use(req: Request, res: Response, next: NextFunction) {
    if (process.env.NODE_ENV === 'development') {
      const { method, originalUrl, headers, body } = req;
      if (originalUrl.indexOf('public/health') === -1) {
        // Log the request details
        this.logger.log(`Request: ${method} ${originalUrl}`, {
          headers,
          body,
        });

        // Capture the original res.send method
        const originalSend = res.send;

        // Override the res.send method to capture the response body
        res.send = (body) => {
          // Log the response details when sending the response
          const { statusCode, statusMessage } = res;
          const responseHeaders = res.getHeaders();

          this.logger.log(`Response: ${method} ${originalUrl}`, {
            statusCode,
            statusMessage,
            responseHeaders,
            body,
          });

          // Call the original res.send method with the body
          return originalSend.call(res, body);
        };
      }
    }

    if (typeof next === 'function') {
      next();
    } else {
      this.logger.error('Next function is not available');
    }
  }
}
