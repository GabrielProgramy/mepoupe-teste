import AverageService from '../services/AverageService'
import SearchCEPService from '../services/SearchCEPService'
import AppError from '../shared/Errors/AppError'

describe('Teste de Media', () => {
  const average = new AverageService()
  it('deve ser possivel fazer a media de dois numeros e retorna o resultado arredondado', () => {
    const result = average.calculate(7.35, 9.27)

    expect(result).toBe(8.31)
  })

  it('não deve ser possivel fazer a media caso não receba valores validos', () => {
    try {
      average.calculate(Number('a'), Number('b'))
    } catch (e) {
      expect(e).toBeInstanceOf(AppError)
    }
  })
})

describe('Teste de busca de cep', () => {
  const searchCEPService = new SearchCEPService()
  it('deve ser possivel buscar um cep', async () => {
    const result = await searchCEPService.getCep('06541038')

    expect(result.bairro).toBe('Alphaville')
  })
  it('não deve ser possivel buscar um cep que não exista', async () => {
    await expect(searchCEPService.getCep('06561038')).rejects.toEqual({
      message: 'CEP 06561038 não possui bairro vinculado',
      statusCode: 404
    })
  })
})
