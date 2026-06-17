package expo.modules.locations

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoLocationsModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoLocations")

    Function("getLocation") {
      "Hello world! 👋"
    }
  }
}
