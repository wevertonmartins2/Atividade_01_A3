const ClienteRepository = require('../repositories/clienteRepository');

class ClienteService {
  async getAllClientes() {
    return await ClienteRepository.findAll();
  }

  async getClienteById(id) {
    const cliente = await ClienteRepository.findById(id);
    if (!cliente) throw new Error('Cliente não encontrado');
    return cliente;
  }

  async createCliente(data) {
    if (!data.nome || !data.email) {
      throw new Error('Nome e email são obrigatórios');
    }
    data.createdAt = new Date();
    data.updatedAt = new Date();
    return await ClienteRepository.create(data);
  }

  async updateCliente(id, data) {
    data.updatedAt = new Date();
    const updated = await ClienteRepository.update(id, data);
    if (!updated) throw new Error('Cliente não encontrado');
    return updated;
  }

  async deleteCliente(id) {
    const deleted = await ClienteRepository.delete(id);
    if (!deleted) throw new Error('Cliente não encontrado');
    return true;
  }
}

module.exports = new ClienteService();