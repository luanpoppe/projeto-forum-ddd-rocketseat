import { randomUUID } from "node:crypto";
import { UniqueentityID } from "./unique-entity-id";

export class Entity<Props> {
  private _id: UniqueentityID;

  protected props: Props;

  get id() {
    return this._id;
  }

  protected constructor(props: Props, id?: UniqueentityID) {
    this.props = props;
    this._id = id ?? new UniqueentityID();
  }
}
