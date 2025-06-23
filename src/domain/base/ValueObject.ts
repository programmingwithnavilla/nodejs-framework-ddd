export abstract class ValueObject<T extends Record<string, unknown>> {
  protected readonly props: Readonly<T>;

  constructor(props: T) {
    if (props === null || props === undefined) {
      throw new Error("Props must be defined");
    }
    this.props = Object.freeze({ ...props }) as Readonly<T>;
  }

  public equals(vo?: ValueObject<T>): boolean {
    if (!vo) return false;
    if (vo.constructor.name !== this.constructor.name) return false;
    return ValueObject.deepEqual(this.props, vo.props);
  }

  public toString(): string {
    return JSON.stringify(this.props);
  }

  public getProps(): Readonly<T> {
    return this.props;
  }

  private static deepEqual<T extends unknown>(a: T, b: T): boolean {
    if (a === b) return true;

    if (typeof a !== typeof b) return false;

    if (typeof a !== "object" || a === null || b === null) {
      return false;
    }

    if (Array.isArray(a) !== Array.isArray(b)) {
      return false;
    }

    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;
      return a.every((val, i) => this.deepEqual(val, b[i]));
    }

    const aKeys = Object.keys(a as Record<string, unknown>);
    const bKeys = Object.keys(b as Record<string, unknown>);
    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every((key) => {
      const aVal = (a as Record<string, unknown>)[key];
      const bVal = (b as Record<string, unknown>)[key];
      return this.deepEqual(aVal, bVal);
    });
  }
}
