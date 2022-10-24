export enum ModalTypeModel {
  INFO = 'INFO',
  DESTRUCTIVE = 'DESTRUCTIVE',
}

export enum ModalResultModel {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

export interface ModalModel {
  type: ModalTypeModel;
  // content: JSX.Element;
  title: string;
  content: string;
  primaryLabel: string;
  secondaryLabel: string;
}

export interface ModalHandleResult {
  onPrimary: (cb: () => void) => ModalHandleResult;
  onSecondary: (cb: () => void) => ModalHandleResult;
}
