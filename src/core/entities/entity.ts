import { UniqueEntityID } from './unique-entity-id'

export class Entity<Props> {
  private readonly _id: UniqueEntityID
  protected props: Props

  get id(): UniqueEntityID {
    return this._id
  }

  protected constructor(props: Props, id?: UniqueEntityID) {
    this._id = id ?? new UniqueEntityID(id)
    this.props = props
  }
}
