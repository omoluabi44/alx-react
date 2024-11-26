import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test('return correct year ', () => {
    expect(getFullYear().toBe(2024))
    
});
test('return correct string  ', () => {
    expect(getFooterCopy(true).toBe("Holberton School"))
    expect(getFooterCopy(false).toBe("Holberton School main dashboard"))
    
});

test('return correct year ', () => {
    expect(getLatestNotification().toBe("<strong>Urgent requirement</strong> - complete by EOD"))
});
