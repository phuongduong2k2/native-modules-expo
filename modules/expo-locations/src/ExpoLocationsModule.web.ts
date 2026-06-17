import { registerWebModule, NativeModule } from 'expo';

// ExpoLocationsModule is not available on the web platform.
class ExpoLocationsModule extends NativeModule<{}> {}

export default registerWebModule(ExpoLocationsModule, 'ExpoLocationsModule');
