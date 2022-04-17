function foo() {
    var x = 1;
    function bar() {
      let y = 2;
      console.log(x); // 1 (function `bar` closes over `x`)
      console.log(y); // 2 (`y` is in scope)
    }
    bar();
    console.log(x); // 1 (`x` is in scope)
    // console.log(y); // ReferenceError in strict mode, `y` is scoped to `bar`
  }
  
  foo();
  console.log(x)