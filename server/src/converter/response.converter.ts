import { HttpStatus } from "@nestjs/common";

export const HttpResponse = {
  success: (response: any) => {
    return {
      ok: true,
      statusCode: HttpStatus.OK,
      response,
    };
  },

  failed: (statusCode: number, message: string) => {
    return {
      ok: false,
      statusCode,
      response: message,
    };
  },
};
