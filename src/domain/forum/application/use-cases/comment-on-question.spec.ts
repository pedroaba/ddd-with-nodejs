import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { CommentOnQuestionUseCase } from '@/domain/forum/application/use-cases/comment-on-question'
import { InMemoryQuestionCommentRepository } from 'test/repositories/in-memory-question-comment-repository'
import { makeQuestion } from '../../../../../test/factories/make-question'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let inMemoryQuestionCommentRepository: InMemoryQuestionCommentRepository
let sut: CommentOnQuestionUseCase

describe('Comment On Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    inMemoryQuestionCommentRepository = new InMemoryQuestionCommentRepository()
    sut = new CommentOnQuestionUseCase(
      inMemoryQuestionsRepository,
      inMemoryQuestionCommentRepository,
    )
  })

  it('should be able to comment on question', async () => {
    const question = makeQuestion()

    await inMemoryQuestionsRepository.create(question)
    await sut.execute({
      questionId: question.id.toString(),
      authorId: question.authorId.toString(),
      content: 'Comentário teste',
    })

    expect(inMemoryQuestionCommentRepository.items[0].content).toEqual(
      'Comentário teste',
    )
  })
})
