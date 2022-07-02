import { transformDate } from './lib'

test('formats with do MMM yyyy', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'do MMM yyyy')).toBe("2nd Jul 2022");
});

test('formats with do MMMM yyyy', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'do MMMM yyyy')).toBe("2nd July 2022");
});

test('formats with MMM do, yyyy', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'MMM do, yyyy')).toBe("Jul 2nd, 2022");
});

test('formats with MMMM do, yyyy', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'MMMM do, yyyy')).toBe("July 2nd, 2022");
});

test('formats with E, dd-MM-yyyy', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'E, dd-MM-yyyy')).toBe("Sat, 02-07-2022");
});

test('formats with E, dd.MM.yyyy', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'E, dd.MM.yyyy')).toBe("Sat, 02.07.2022");
});

test('formats with E, MM/dd/yyyy', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'E, MM/dd/yyyy')).toBe("Sat, 07/02/2022");
});

test('formats with E, yyyy/MM/dd', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'E, yyyy/MM/dd')).toBe("Sat, 2022/07/02");
});

test('formats with EEE, dd-MM-yyyy', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'EEE, dd-MM-yyyy')).toBe("Sat, 02-07-2022");
});

test('formats with EEE, dd.MM.yyyy', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'EEE, dd.MM.yyyy')).toBe("Sat, 02.07.2022");
});

test('formats with EEE, MM/dd/yyyy', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'EEE, MM/dd/yyyy')).toBe("Sat, 07/02/2022");
});

test('formats with EEE, yyyy/MM/dd', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'EEE, yyyy/MM/dd')).toBe("Sat, 2022/07/02");
});

test('formats with EEEE, dd-MM-yyyy', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'EEEE, dd-MM-yyyy')).toBe("Saturday, 02-07-2022");
});

test('formats with EEEE, dd.MM.yyyy', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'EEEE, dd.MM.yyyy')).toBe("Saturday, 02.07.2022");
});

test('formats with EEEE, MM/dd/yyyy', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'EEEE, MM/dd/yyyy')).toBe("Saturday, 07/02/2022");
});

test('formats with EEEE, yyyy/MM/dd', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'EEEE, yyyy/MM/dd')).toBe("Saturday, 2022/07/02");
});

test('formats with dd-MM-yyyy', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'dd-MM-yyyy')).toBe("02-07-2022");
});

test('formats with dd.MM.yyyy', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'dd.MM.yyyy')).toBe("02.07.2022");
});

test('formats with MM/dd/yyyy', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'MM/dd/yyyy')).toBe("07/02/2022");
});

test('formats with MM-dd-yyyy', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'MM-dd-yyyy')).toBe("07-02-2022");
});

test('formats with MM_dd_yyyy', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'MM_dd_yyyy')).toBe("07_02_2022");
});

test('formats with yyyy/MM/dd', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'yyyy/MM/dd')).toBe("2022/07/02");
});

test('formats with yyyy-MM-dd', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'yyyy-MM-dd')).toBe("2022-07-02");
});

test('formats with yyyy-MM-dd EEEE', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'yyyy-MM-dd EEEE')).toBe("2022-07-02 Saturday");
});

test('formats with yyyy_MM_dd', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'yyyy_MM_dd')).toBe("2022_07_02");
});

test('formats with yyyyMMdd', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'yyyyMMdd')).toBe("20220702");
});

test('formats with yyyy年MM月dd日', () => {
  let date = new Date("2022-07-02");

  expect(transformDate(date, 'yyyy年MM月dd日')).toBe("2022年07月02日");
});
