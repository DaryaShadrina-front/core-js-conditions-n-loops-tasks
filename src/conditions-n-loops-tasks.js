/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 * Определяет, является ли данное число положительным. Положительным считается ноль.
 * Эта функция не использует методы класса Number или Math.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 * Возвращает максимум из трех чисел без использования методов Array и Math classes.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let maxNumb = a;
  if (b > maxNumb) {
    maxNumb = b;
  }
  if (c > maxNumb) {
    maxNumb = c;
  }
  return maxNumb;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * Проверяет, сможет ли ферзь захватить короля следующим ходом на шахматной доске 8х8.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    king.x === queen.x ||
    king.y === queen.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  ) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 * Определяет, является ли треугольник равнобедренным, исходя из длины его сторон.
 * В этой задаче использование методов классов String и Array запрещено.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  const isoscelTriangle = a + b > c && a + c > b && b + c > a;
  return isoscelTriangle && (a === b || a === c || b === c);
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 * Преобразует число в римскую нумерацию. Число будет находиться в диапазоне от 1 до 39.
 * В этом задании не допускается использование методов классов String и Array.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romanNumber = [
    { roman: 'X', arabic: 10 },
    { roman: 'IX', arabic: 9 },
    { roman: 'V', arabic: 5 },
    { roman: 'IV', arabic: 4 },
    { roman: 'I', arabic: 1 },
  ];
  let roman = '';
  let numCyc = num;

  for (let i = 0; i < romanNumber.length; i += 1) {
    while (numCyc >= romanNumber[i].arabic) {
      roman += romanNumber[i].roman;
      numCyc -= romanNumber[i].arabic;
    }
  }

  return roman;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 * Преобразует число в строку, заменяя цифры словами.
 * В этой задаче не допускается использование методов классов String и Array.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let wordsStr = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    const digital = numberStr[i];
    switch (digital) {
      case '0':
        wordsStr += 'zero';
        break;
      case '1':
        wordsStr += 'one';
        break;
      case '2':
        wordsStr += 'two';
        break;
      case '3':
        wordsStr += 'three';
        break;
      case '4':
        wordsStr += 'four';
        break;
      case '5':
        wordsStr += 'five';
        break;
      case '6':
        wordsStr += 'six';
        break;
      case '7':
        wordsStr += 'seven';
        break;
      case '8':
        wordsStr += 'eight';
        break;
      case '9':
        wordsStr += 'nine';
        break;
      case '-':
        wordsStr += 'minus';
        break;
      case '.':
        wordsStr += 'point';
        break;
      case ',':
        wordsStr += 'point';
        break;
      default:
        break;
    }

    if (i !== numberStr.length - 1) wordsStr += ' ';
  }

  return wordsStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 * Определяет, является ли строка палиндромом.
 * В этой задаче использование методов классов String и Array запрещено.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 * Находит первое вхождение буквы в строку.
 * В этой задаче использование методов классов String и Array не допускается.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 * Проверяет, содержит ли число определенную цифру.
 * В этой задаче использование методов классов String и Array запрещено.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let numStr = Math.abs(num);
  while (numStr > 0) {
    if (numStr % 10 === digit) {
      return true;
    }
    numStr = Math.floor(numStr / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 * Находит индекс элемента в массиве, где сумма элементов слева равна сумме элементов справа.
 * Если такой индекс не возвращает значение -1.
 * В этой задаче использование методов классов Array и String не допускается.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 1; i < arr.length; i += 1) {
    rightSum += arr[i];
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += arr[i];
    rightSum -= arr[i + 1];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 * Генерирует спиральную матрицу заданного размера, заполненную числами в порядке возрастания, начиная с единицы.
 * Направление заполнения числами - по часовой стрелке.
 * Использование методов классов String и Array в этой задаче запрещено.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const spiralMatrix = [];
  let row = 0;
  let column = 0;
  let rowLast = size - 1;
  let columnLast = size - 1;
  let fill = 1;

  for (let i = 0; i < size; i += 1) spiralMatrix[i] = [];

  while (column <= columnLast && row <= rowLast) {
    for (let j = column; j <= columnLast; j += 1) {
      spiralMatrix[row][j] = fill;
      fill += 1;
    }

    row += 1;

    for (let i = row; i <= rowLast; i += 1) {
      spiralMatrix[i][columnLast] = fill;
      fill += 1;
    }

    columnLast -= 1;

    for (let j = columnLast; j >= column; j -= 1) {
      spiralMatrix[rowLast][j] = fill;
      fill += 1;
    }

    rowLast -= 1;

    for (let i = rowLast; i >= row; i -= 1) {
      spiralMatrix[i][column] = fill;
      fill += 1;
    }

    column += 1;
  }

  return spiralMatrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 * Поворачивает матрицу на 90 градусов по часовой стрелке.
 * Примите во внимание, что размер матрицы может быть очень большим. Подумайте, как вы можете оптимизировать свое решение.
 * В этой задаче запрещено использование методов классов String и Array.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const numMatr = matrix;
  const n = numMatr.length;
  for (let i = 0; i < n; i += 1) {
    for (let j = i; j < n; j += 1) {
      [numMatr[i][j], numMatr[j][i]] = [numMatr[j][i], numMatr[i][j]];
    }
  }
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < Math.floor(n / 2); j += 1) {
      [numMatr[i][j], numMatr[i][n - 1 - j]] = [
        numMatr[i][n - 1 - j],
        numMatr[i][j],
      ];
    }
  }
  return numMatr;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 * Сортирует массив чисел по возрастанию на месте.
 * Используйте любой алгоритм сортировки по вашему выбору.
 * Примите во внимание, что массив может быть очень большим. Подумайте, как вы можете оптимизировать свое решение.
 * В данной задаче использование методов классов Array и String не допускается.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const sortArr = arr;

  for (let i = 0; i < sortArr.length; i += 1) {
    const current = sortArr[i];
    let temp = i - 1;

    while (temp >= 0 && sortArr[temp] > current) {
      sortArr[temp + 1] = sortArr[temp];
      temp -= 1;
    }

    sortArr[temp + 1] = current;
  }

  return sortArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 * Перетасовывает символы в строке таким образом, чтобы символы с нечетным индексом перемещались в конец строки на каждой итерации.
 * Примите во внимание, что строка может быть очень длинной, а количество итераций - большим. Подумайте, как вы можете оптимизировать свое решение.
 * В этой задаче запрещено использование методов класса Array.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  if (iterations <= 0) return str;

  let existingStr = str;
  let countedIteration = iterations;

  while (countedIteration > 0) {
    let even = '';
    let noteven = '';

    let i = 0;
    while (i < existingStr.length) {
      if (i % 2 === 0) {
        even += existingStr[i];
      } else {
        noteven += existingStr[i];
      }
      i += 1;
    }

    existingStr = even + noteven;
    countedIteration -= 1;

    if (existingStr === str) {
      const cycleIteration = iterations - countedIteration;
      countedIteration = iterations % cycleIteration;
    }
  }
  return existingStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 * Возвращает ближайшее по величине целое число, состоящее из цифр данного натурального числа.
 * Если такого числа нет, возвращается исходное число.
 * Использование методов класса String в этой задаче запрещено.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const array = [];

  for (let i = number; i > 0; i = Math.floor(i / 10)) {
    array.unshift(i % 10);
  }

  let indexOne = array.length - 2;

  for (let j = indexOne; j >= 0 && array[j] >= array[j + 1]; j -= 1) {
    indexOne -= 1;
  }

  if (indexOne < 0) return number;

  let indexTwo = array.length - 1;

  while (array[indexTwo] <= array[indexOne]) {
    indexTwo -= 1;
  }

  const tempor = array[indexOne];
  array[indexOne] = array[indexTwo];
  array[indexTwo] = tempor;
  const order = array.splice(indexOne + 1);
  order.sort((a, b) => (a > b ? 1 : -1));
  return Number([...array, ...order].join(''));
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
