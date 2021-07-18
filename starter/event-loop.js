const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 2;

setTimeout(() => console.log('timer one finished'), 0);
setImmediate(() => console.log('immediate 1 finished'));

fs.readFile('test-file.txt', () => {
  console.log('i/o finished');

  console.log('------------------');
  setTimeout(() => console.log('timer one finished'), 0);
  setTimeout(() => console.log('timer two finished'), 3000);
  setImmediate(() => console.log('immediate two finished'));

  process.nextTick(() => console.log('process.nextTick'));

  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
    console.log(Date.now() - start, 'password encrypted');
  
  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
    console.log(Date.now() - start, 'password encrypted');
  
  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
    console.log(Date.now() - start, 'password encrypted');
  
});

console.log('Hello from the top level code');
 