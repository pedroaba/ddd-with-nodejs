import { randomUUID } from 'node:crypto'

export class UniqueEntityID {
  private value: string

  toString() {
    return this.value
  }

  toValue() {
    return this.value
  }

  equals(other: UniqueEntityID | string) {
    if (other instanceof UniqueEntityID) {
      return other.value === this.value
    }

    return this.value === other
  }

  constructor(value?: string) {
    this.value = value ?? randomUUID()
  }
}
