import { Type, applyDecorators } from '@nestjs/common';
import { GenericResponseDto } from './GenericResponseDto';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';

export const ApiOkGenericResponse = <DataDto extends Type<unknown>>(
  dataDto: DataDto,
  type?: string,
) =>
  applyDecorators(
    ApiExtraModels(GenericResponseDto, dataDto),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(GenericResponseDto) },
          {
            properties: {
              data: {
                type: type ? type : 'object',
                $ref: type ? undefined : getSchemaPath(dataDto),
              },
            },
          },
        ],
      },
    }),
  );

export const ApiOkGenericListResponse = <DataDto extends Type<unknown>>(
  dataDto: DataDto,
) =>
  applyDecorators(
    ApiExtraModels(GenericResponseDto, dataDto),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(GenericResponseDto) },
          {
            properties: {
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(dataDto) },
              },
            },
          },
        ],
      },
    }),
  );
