import { randomUUID } from "node:crypto";

export class UniqueentityID {
  toString() {
    return this.value;
  }

  toValue() {
    return this.value;
  }

  constructor(private value: string = randomUUID()) {}
}
