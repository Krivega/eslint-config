// demo type file for type-only imports
export type Numeric = number;
export type UserId = string & { readonly brand: unique symbol };

export type TGetReleaseNotes = ({ from, to }?: { from?: number; to?: number }) => Promise<string>;

export type TTestIds = {
  list: string;
  listItem: string;
  edit: string;
  addConnectionProfile: string;
  statusIcon: string;
};

export type TParams = {
  testIds: TTestIds;
  toAddSettingsConnectionProfile: ({ isRegisteredUser }?: { isRegisteredUser?: boolean }) => void;
  toEditSettingsConnectionProfile: ({
    uuid,
    isRegisteredUser,
  }: {
    uuid: string;
    isRegisteredUser?: boolean;
  }) => void;
};
