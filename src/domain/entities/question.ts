import { randomUUID } from "node:crypto";

interface QuestionProps {
  title: string;
  content: string;
  authorId: string;
}

export class Question {
  public title: string;
  public content: string;
  public authorId: string;

  constructor(props: QuestionProps, public id: string = randomUUID()) {
    this.title = props.title;
    this.content = props.content;
    this.authorId = props.authorId;
  }
}
