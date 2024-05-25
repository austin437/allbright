import { NextFunction, Request, Response } from "express";

interface ErrorStatus extends Error {
  status: number;
}

interface ResponseBody extends Response {
  body: {
    data: Object | string;
  };
}

interface RequestParams {}

interface RequestBody {}

interface RequestQuery {
  shortUrl: string;
}

interface DbQuery {
  longUrl: string;
}

export {
  ErrorStatus,
  DbQuery,
  NextFunction,
  Request,
  RequestBody,
  RequestParams,
  RequestQuery,
  Response,
  ResponseBody
};

