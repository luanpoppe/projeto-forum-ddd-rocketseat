import { Entity } from "../../core/entities/entity";
import { UniqueentityID } from "../../core/entities/unique-entity-id";

interface InstructorProps {
  name: string;
}

export class Instructor extends Entity<InstructorProps> {
  static create(props: InstructorProps, id?: UniqueentityID) {
    const instructor = new Instructor(props, id);

    return instructor;
  }
}
