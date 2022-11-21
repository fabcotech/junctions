export interface RecordA {
  type: 'A';
  name: string;
  data: string;
}

export interface RecordTXT {
  type: 'TXT';
  name: string;
  data: string;
}

export type NameRecord = RecordA | RecordTXT;

export type JunctionRecords = [RecordA, RecordTXT];

export type JunctionErrorCode =
  | 'RESOLVER_NOT_FOUND'
  | 'RESOLVER_ERROR'
  | 'RECORDS_MISMATCH'
  | 'JUNCTION_MALFORMED'
  | 'JUNCTION_MISSING_TLD';

export interface JunctionError {
  code: JunctionErrorCode;
  message: string;
}

export interface Ok<T> {
  ok: true;
  result: T;
}

export interface Err<E> {
  ok: false;
  error: E;
}

export type Result<T, E> = Ok<T> | Err<E>;
