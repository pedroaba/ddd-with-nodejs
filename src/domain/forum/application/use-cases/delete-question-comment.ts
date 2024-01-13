import { QuestionCommentRepository } from '../repositories/question-comment-repository'

interface DeleteQuestionCommentUseCaseRequest {
  authorId: string
  questionCommentId: string
}

type DeleteQuestionCommentUseCaseResponse = {}

export class DeleteQuestionCommentUseCase {
  constructor(private questionCommentRepository: QuestionCommentRepository) {}

  async execute({
    authorId,
    questionCommentId,
  }: DeleteQuestionCommentUseCaseRequest): Promise<DeleteQuestionCommentUseCaseResponse> {
    const questionComment =
      await this.questionCommentRepository.findById(questionCommentId)

    if (!questionComment) {
      throw new Error('Question Comment not found')
    }

    if (authorId !== questionComment.authorId.toString()) {
      throw new Error('Not allowed')
    }

    await this.questionCommentRepository.delete(questionComment)

    return {}
  }
}
