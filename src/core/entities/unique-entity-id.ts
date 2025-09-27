import { randomUUID } from "node:crypto";

export class UniqueEntityID {
  toString() {
    return this.value;
  }

  toValue() {
    return this.value;
  }

  constructor(private value: string = randomUUID()) {}
}
