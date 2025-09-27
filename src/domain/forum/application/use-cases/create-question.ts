import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Question } from "../../enterprise/entities/question";
import { QuestionsRepository } from "../repositories/questions.repository";

interface CreationQuestionUseCaseRequest {
  authorId: string;
  title: string;
  content: string;
}

interface CreationQuestionUseCaseResponse {
  question: Question;
}

export class CreationQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    authorId,
    content,
    title,
  }: CreationQuestionUseCaseRequest): Promise<CreationQuestionUseCaseResponse> {
    const question = Question.create({
      authorId: new UniqueEntityID(authorId),
      content,
      title,
    });

    await this.questionsRepository.create(question);

    return { question };
  }
}
