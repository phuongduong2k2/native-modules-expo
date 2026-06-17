import { NativeModule, requireNativeModule } from 'expo';

declare class ExpoSettingsModule extends NativeModule<{}> {
  hello(): string;
}

export default requireNativeModule<ExpoSettingsModule>('ExpoSettings');
