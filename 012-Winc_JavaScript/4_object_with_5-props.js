const object1 = {
    a: 'somestring',
    b: '2nd-string',
    c: '3rd-string',
    d: '4th-string',
    e: '5th-string'
};
for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}