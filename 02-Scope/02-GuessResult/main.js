let phrase = 'Hello';
if (true) {
  let user = 'John';
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}
sayHi();

// Hello, John เนื่องจากไม่มี phrase ใน function scope เลยต้องไปยืมข้างนอกมา