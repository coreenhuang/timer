const args = process.argv.slice(2);

const sortArgs = args.sort((a, b) => a - b);

for (let i = 0; i < sortArgs.length; i++) {
  if (Number(sortArgs[i]) > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, sortArgs[i] * 1000); 
  }
}
