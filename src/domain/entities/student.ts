import { Entity } from "../../core/entities/entity";
import { UniqueentityID } from "../../core/entities/unique-entity-id";

interface StudentProps {
  name: string;
}

export class Student extends Entity<StudentProps> {
  static create(props: StudentProps, id?: UniqueentityID) {
    const student = new Student(props, id);

    return student;
  }
}
