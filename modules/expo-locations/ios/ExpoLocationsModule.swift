import ExpoModulesCore

public class ExpoLocationsModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoLocations")

    Function("getLocation") {
      return "Hello world! 👋"
    }
  }
}
