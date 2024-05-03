import {getFullYear, getFooterCopy, getLatestNotification} from './utils'

test('should get current year', () => { 
    expect(getFullYear()).toBe(2024)
 });
 
 test('check get footer to return correct string', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard')
 });

 test('check the getLatestNotification string', () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD")
  });