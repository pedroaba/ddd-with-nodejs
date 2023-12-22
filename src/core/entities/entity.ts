import { randomUUID } from 'node:crypto'

export class Entity<Props> {
  private _id: string
  protected props: Props

  get id(): string {
    return this._id
  }

  protected constructor(props: Props, id?: string) {
    this._id = id ?? randomUUID()
    this.props = props
  }
}
