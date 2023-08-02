class Table {
  static print = (req, res) => {
    try {
      const number = req.params.number;
      let table = [];

      for (let i = 1; i <= 10; i++) {
        table.push(`number x ${i} = ${number * i}`);
      }
      res.status(200).send(table);
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  };
}

export default Table;
