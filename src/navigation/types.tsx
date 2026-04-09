export type RootStackParamList = {
  Home: undefined;
  Profile: { user: string };
  Settings: undefined;
  MoreTabs: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
