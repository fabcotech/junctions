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
  | 'RECORDS_MISMATCH';

export interface JunctionError {
  code: JunctionErrorCode;
  message: string;
}

export interface JunctionResponse {
  result?: JunctionRecords;
  error?: JunctionError;
}
