import { randomUUID } from "node:crypto";
import { UniqueentityID } from "./unique-entity-id";

export class Entity<Props> {
  private _id: UniqueentityID;

  protected props: Props;

  get id() {
    return this._id;
  }

  constructor(props: Props, id?: string) {
    this.props = props;
    this._id = new UniqueentityID(id);
  }
}
