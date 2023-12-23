import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { AnswersRepository } from '@/domain/repositories/answers-repository'
import { Answer } from '@/domain/entities/answer'

const fakeAnswersRepository: AnswersRepository = {
  async create(answer: Answer) {},
}

test('create an question', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    instructorId: '1',
    questionId: '1',
    content: 'Nova Resposta',
  })

  expect(answer.content).toEqual('Nova Resposta')
})
