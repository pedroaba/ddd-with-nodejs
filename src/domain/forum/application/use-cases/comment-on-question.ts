import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { QuestionsRepository } from '../repositories/question-repository'
import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'
import { QuestionCommentRepository } from '@/domain/forum/application/repositories/question-comment-repository'

interface CommentOnQuestionUseCaseRequest {
  authorId: string
  questionId: string
  content: string
}

interface CommentOnQuestionUseCaseResponse {
  questionComment: QuestionComment
}

export class CommentOnQuestionUseCase {
  constructor(
    private questionsRepository: QuestionsRepository,
    private questionCommentRepository: QuestionCommentRepository,
  ) {}

  async execute({
    authorId,
    content,
    questionId,
  }: CommentOnQuestionUseCaseRequest): Promise<CommentOnQuestionUseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId)

    if (!question) {
      throw new Error('Question not found')
    }

    const questionComment = QuestionComment.create({
      authorId: new UniqueEntityID(authorId),
      questionId: new UniqueEntityID(questionId),
      content,
    })

    await this.questionCommentRepository.create(questionComment)
    return {
      questionComment,
    }
  }
}
