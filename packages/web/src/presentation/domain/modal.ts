export enum ModalTypeModel {
  INFO = 'INFO',
  DESTRUCTIVE = 'DESTRUCTIVE',
}

export enum ModalResultTypeModel {
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

export interface ModalResultModel {
  onPrimary: (cb: () => void) => ModalResultModel;
  onSecondary: (cb: () => void) => ModalResultModel;
}
