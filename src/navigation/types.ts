export type HomeParamList = { Dashboard: undefined; Profile: { user: string } };

export type RootStackParamList = {
  FruitsList: undefined;
};

export type TabParamList = {
  Home: undefined;
  Settings: undefined;
  Updates: undefined;
  Search: undefined;
  Notifications: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
