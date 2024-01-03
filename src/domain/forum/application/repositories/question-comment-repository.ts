import { QuestionComment } from '@/domain/forum/enterprise/entities/question-comment'

export interface QuestionCommentRepository {
  create(questionComment: QuestionComment): Promise<void>
}
