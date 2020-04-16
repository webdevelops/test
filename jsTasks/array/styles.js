const styles = ["Jazz", "Blues"];

styles.push("Rock");
styles[Math.floor((styles.length - 1) / 2)] = "Classic";
styles.shift();
styles.unshift("Rap", "Raggy");


console.log(styles);