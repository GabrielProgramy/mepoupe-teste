import AppError from '../shared/Errors/AppError'

export default class AverageService {
  public calculate(number1: number, number2: number): number {
    if (!number1 || !number2) throw new AppError('Parametros inexistentes', 422)

    if (typeof number1 !== 'number') throw new AppError(`Tipo de ${number1} não esperado!`, 422)

    if (typeof number2 !== 'number') throw new AppError(`Tipo de ${number2} não esperado!`, 422)

    const average: number = (number1 + number2) / 2
    console.log(`Average: (${number1} + ${number2}) / 2 = ${average}`)

    const rounded = Math.round(average * 100) / 100
    console.log(`Rounded: Math.round(${average} * 100) / 100 = ${rounded}`)

    return rounded
  }
}
