import { QuestionsRepository } from "../repositories/questions.repository";
import { Question } from "../../enterprise/entities/question";
import { CreationQuestionUseCase } from "./create-question";

const fakeQuestionsRepository: QuestionsRepository = {
  create: async (question: Question) => {
    return;
  },
};

it("should create a question", async () => {
  const createQuestion = new CreationQuestionUseCase(fakeQuestionsRepository);

  const { question } = await createQuestion.execute({
    authorId: "1",
    title: "Nova pergunta",
    content: "Conteúdo da pergunta",
  });

  expect(question.id).toBeTruthy();
});
