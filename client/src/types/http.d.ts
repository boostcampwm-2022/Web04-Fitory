export interface HttpSuccess {
  ok: true;
  statusCode: 200;
  response: unknown;
}

export interface HttpFailed {
  ok: false;
  statusCode: number;
  response: string;
}
