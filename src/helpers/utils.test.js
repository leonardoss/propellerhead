import { formatDate } from './utils';

let arr = [
  '',
  '2018-08-24T10:32:00.000'
];

test('date is empty', () => {
    expect(formatDate(arr[0])).toMatch("Invalid date");
});

test('date valid', () => {
  expect(formatDate(arr[1])).not.toMatch("Invalid date");
});