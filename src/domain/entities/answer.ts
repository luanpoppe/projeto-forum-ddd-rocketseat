import { randomUUID } from "node:crypto";

interface AnswerProps {
  content: string;
  authorId: string;
  questionId: string;
}

export class Answer {
  content: string;
  authorId: string;
  questionId: string;

  constructor(props: AnswerProps, public id: string = randomUUID()) {
    this.content = props.content;
    this.authorId = props.authorId;
    this.questionId = props.questionId;
  }
}
