import chalk from 'chalk';

// static class
class outputUtils {
  static progress(...messages: string[]) {
    console.log(chalk.blue(...messages));
  }

  static error(...messages: string[]) {
    console.log(chalk.bold.red(...messages));
  }

  static warning(...messages: string[]) {
    console.log(chalk.bold.yellow(...messages));
  }

  static info(...messages: string[]) {
    console.log(chalk.cyan(...messages));
  }

  static success(...messages: string[]) {
    console.log(chalk.bold.green(...messages));
  }
}

export { outputUtils };
