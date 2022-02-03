import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pet from 'App/Models/Pet'

export default class PetsController {
  public async index() {
    return await Pet.all()
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.all()
    response.status(201)
    return await Pet.create(data)
  }

  public async show({ params }: HttpContextContract) {
    return await Pet.findOrFail(params.id)
  }

  public async update({ params, request }: HttpContextContract) {
    const data = request.all()
    const pet = await Pet.findOrFail(params.id)
    pet.merge(data)
    return await pet.save()
  }

  public async destroy({ params, response }: HttpContextContract) {
    const pet = await Pet.findOrFail(params.id)
    response.status(204)
    return pet.delete()
  }
}
