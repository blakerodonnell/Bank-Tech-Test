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
    
}

module.exports = Format;