
import { Request, Response } from 'express'

import SearchCEPService from '../services/SearchCEPService'
import AppError from '../shared/Errors/AppError'

export default class CEPController {
  public async getCep(req: Request, res: Response) {
    try {
      const cep = req.params.cep

      const service = new SearchCEPService()

      const data = await service.getCep(cep)

      return res.status(200).json(data)
    } catch (error: any) {
      if (error instanceof AppError) return res.status(error.statusCode).json({ message: error.message })
      return res.status(500).json({ message: error.message })
    }
  }
}
