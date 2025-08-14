export type JsonPatchOp = {
  op: string;
  path: string;
  value: string | number;
};