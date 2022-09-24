import { Request, Response } from 'express'

import AverageService from '../services/AverageService'
import AppError from '../shared/Errors/AppError'

export default class AverageController {
  public calculate(req: Request, res: Response) {
    try {
      const { number1, number2 } = req.body

      const service = new AverageService()

      const rounding = service.calculate(number1, number2)

      return res.status(200).json(rounding)
    } catch (err: any) {
      if (err instanceof AppError) return res.status(err.statusCode).json({ message: err.message })
      return res.status(500).json({ message: err.message })
    }
  }
}
