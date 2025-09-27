import dayjs from "dayjs";
import { Slug } from "./value-objects/slug";
import { Entity } from "../../core/entities/entity";
import { UniqueentityID } from "../../core/entities/unique-entity-id";
import { Optional } from "../../core/types/optional";

interface QuestionProps {
  title: string;
  content: string;
  slug: Slug;
  authorId: UniqueentityID;
  bestAnswerId?: UniqueentityID | undefined;
  createdAt: Date;
  updatedAt?: Date;
}

export class Question extends Entity<QuestionProps> {
  get title() {
    return this.props.title;
  }

  get content() {
    return this.props.content;
  }

  get slug() {
    return this.props.slug;
  }

  get authorId() {
    return this.props.authorId;
  }

  get bestAnswerId() {
    return this.props.bestAnswerId;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  get isNew() {
    return dayjs().diff(this.createdAt, "days") <= 3;
  }

  get excerpt() {
    return this.content.substring(0, 120).trimEnd().concat("...");
  }

  set content(content) {
    this.props.content = content;

    this.touch();
  }

  set bestAnswerId(bestAnswerId) {
    this.props.bestAnswerId = bestAnswerId;

    this.touch();
  }

  set title(title) {
    this.props.title = title;
    this.props.slug = Slug.createFromText(title);

    this.touch();
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  static create(
    props: Optional<QuestionProps, "createdAt" | "slug">,
    id?: UniqueentityID
  ) {
    const question = new Question(
      {
        ...props,
        slug: props.slug ?? Slug.createFromText(props.title),
        createdAt: new Date(),
      },
      id
    );

    return question;
  }
}
