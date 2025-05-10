const ProdutoService = require('../services/produtoService');

class ProdutoController {
  async getAll(req, res) {
    try {
      const produtos = await ProdutoService.getAllProdutos();
      res.status(200).json(produtos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const produto = await ProdutoService.getProdutoById(req.params.id);
      res.status(200).json(produto);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const produto = await ProdutoService.createProduto(req.body);
      res.status(201).json(produto);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const produto = await ProdutoService.updateProduto(req.params.id, req.body);
      res.status(200).json(produto);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      await ProdutoService.deleteProduto(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new ProdutoController();