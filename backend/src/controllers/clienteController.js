const ClienteService = require('../services/clienteService');

class ClienteController {
  async getAll(req, res) {
    try {
      const clientes = await ClienteService.getAllClientes();
      res.status(200).json(clientes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const cliente = await ClienteService.getClienteById(req.params.id);
      res.status(200).json(cliente);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const cliente = await ClienteService.createCliente(req.body);
      res.status(201).json(cliente);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const cliente = await ClienteService.updateCliente(req.params.id, req.body);
      res.status(200).json(cliente);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      await ClienteService.deleteCliente(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new ClienteController();