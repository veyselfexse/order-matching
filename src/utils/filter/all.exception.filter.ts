import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();

    let httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    let exceptionMessage = 'Internal server error';
    if (exception instanceof HttpException) {
      httpStatus = exception.getStatus();
      exceptionMessage = `${exceptionMessage} | ${exception.message}`;
    } else if (exception instanceof Error) {
      exceptionMessage = `${exceptionMessage} | ${exception.message}`;
    }

    const response = ctx.getResponse();

    response.status(httpStatus).send({
      statusCode: httpStatus,
      message: exceptionMessage,
    });
  }
}
