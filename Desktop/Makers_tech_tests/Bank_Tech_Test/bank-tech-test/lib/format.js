class Format {
    todaysDate() {
      let today = new Date();
      let day = today.getDate();
      let month = today.getMonth() + 1;
      let year = today.getFullYear();
  
      return `${day}/${month}/${year}`;
    }

    convertToCurrency(number) {
        return number.toFixed(2)
    }

    transactionColumns(transaction) {
        const transactionAmount = this.convertToCurrency(
          transaction.amount
        );
    
        if (transaction.type == "deposit") return ` ${transactionAmount} || `;
        return ` || ${transactionAmount} `;
    }
}

module.exports = Format;