import { makeAnswer } from 'test/factories/make-answer'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { expect } from 'vitest'
import { DeleteAnswerUseCase } from '@/domain/forum/application/use-cases/delete-answer'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { ChooseQuestionBestAnswerUseCase } from '@/domain/forum/application/use-cases/choose-question-best-answer'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { makeQuestion } from '../../../../../test/factories/make-question'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let inMemoryAnswerRepository: InMemoryAnswersRepository
let sut: ChooseQuestionBestAnswerUseCase

describe('Choose Question Best Answer', () => {
  beforeEach(() => {
    inMemoryAnswerRepository = new InMemoryAnswersRepository()
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()

    sut = new ChooseQuestionBestAnswerUseCase(
      inMemoryAnswerRepository,
      inMemoryQuestionsRepository,
    )
  })

  it('should be able to choose question best answer', async () => {
    const question = makeQuestion()
    const newAnswer = makeAnswer({ questionId: question.id })
    await inMemoryQuestionsRepository.create(question)
    await inMemoryAnswerRepository.create(newAnswer)

    await sut.execute({
      answerId: newAnswer.id.toString(),
      authorId: question.authorId.toString(),
    })

    expect(inMemoryQuestionsRepository.items[0].bestAnswerId).toEqual(
      newAnswer.id,
    )
  })

  it('should not be able to delete a answer from another user', async () => {
    const question = makeQuestion({ authorId: new UniqueEntityID('author-1') })
    const newAnswer = makeAnswer({ questionId: question.id })
    await inMemoryQuestionsRepository.create(question)
    await inMemoryAnswerRepository.create(newAnswer)

    expect(() => {
      return sut.execute({
        answerId: newAnswer.id.toString(),
        authorId: 'author-2',
      })
    }).rejects.toBeInstanceOf(Error)
  })
})
