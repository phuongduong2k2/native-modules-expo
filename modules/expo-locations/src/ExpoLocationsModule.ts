import { NativeModule, requireNativeModule } from "expo";

declare class ExpoLocationsModule extends NativeModule<{}> {
  getLocation(): string;
}

export default requireNativeModule<ExpoLocationsModule>("ExpoLocations");
