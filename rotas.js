const rotas = require("express").Router();

const conexao = require("./config/conexao.js");

// const bodyParser = require("body-parser"); //Instanciando para não ocorrer erros no terminal
// const urlencodedParser = bodyParser.urlencoded({
//   extended: false,
// });

rotas.get("/", (req, res) => {
  let sql = "select * from tb_tranferencias";
  conexao.query(sql, (erro, rows, fields) => {
    if (erro) throw erro;
    res.send(rows);
  });
});

rotas.get("/:id", (req, res) => {
  const { id } = req.params;
  let sql = `select * from tb_tranferencias where id_tranferencias ='${id}' `;
  conexao.query(sql, (erro, rows, fields) => {
    if (erro) throw erro;
    res.json(rows[0]);
  });
});

rotas.delete("/:id", (req, res) => {
  const { id } = req.params;
  let sql = `delete from tb_tranferencias where id_tranferencias = '${id}'`;
  conexao.query(sql, (erro, rows, fields) => {
    if (erro) throw erro;
    res.json({ status: "Transferencia Deletada" });
  });
});

rotas.post("/", (req, res) => {
  const { nomeCliente, valor, conta } = req.body;
  let sql = `insert into tb_tranferencias(nomeCliente,valor,conta) values("${nomeCliente}","${valor}","${conta}")`;
  conexao.query(sql, (erro, rows, fields) => {
    if (erro) throw erro;
    res.json({ status: "Transferencia Realizada" });
  });
});
rotas.put("/:id",  (req, res) => {
  const { id } = req.params;
  const { nomeCliente, valor, conta } = req.body;
  let sql = `update tb_tranferencias set nomeCliente = "${nomeCliente}",valor = "${valor}",conta = "${conta}"
    where id_tranferencias = "${id}"`;
  conexao.query(sql, (erro, rows, fields) => {
    if (erro) throw erro;
    res.json({ status: "Alteração Realizada" });
  });
});

module.exports = rotas;
