import axios from 'axios'
import { IResponseCepData } from '../DTOs/IResponseCEPData'
import AppError from '../shared/Errors/AppError'

export default class SearchCEPService {
  public async getCep(cep: string): Promise<IResponseCepData> {
    const url = `https://viacep.com.br/ws/${cep}/json`

    const { data } = await axios.get(url)

    if (data.erro) throw new AppError(`CEP ${cep} não possui bairro vinculado`, 404)

    return data
  }
}
