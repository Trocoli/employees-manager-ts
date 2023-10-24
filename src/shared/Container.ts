class Container {
  private dependencies: Map<string, any> = new Map();

  public register(key: string, service: any) {
    this.dependencies.set(key, service);
  }

  public resolve(key: string) {
    const dependency = this.dependencies.get(key);
    if (!dependency) {
      throw new Error(`Dependency for ${key} not found!`);
    }
    return dependency;
  }
}

const container = new Container();

export function resolveInjected<T>(key: string): T {
  return container.resolve(key);
}

export function injectDependency(key: string, dependency: any) {
  container.register(key, dependency);
}
