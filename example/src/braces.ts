function foo() {
  return true;
}
function bar() {
  return true;
}
function somethingRisky() {
  return true;
}
function handleError() {
  return true;
}
function baz() {
  return true;
}

if (foo()) {
  bar();
}

try {
  somethingRisky();
} catch {
  handleError();
}

if (foo()) {
  bar();
} else {
  baz();
}

// when there are no braces, there are problems
// eslint-disable-next-line curly
if (foo()) bar();
// eslint-disable-next-line curly
else if (baz()) bar();

if (foo()) {
  bar();
} else if (baz()) {
  bar();
}

class C {
  public t = false;

  static {
    foo();
  }

  // eslint-disable-next-line @stylistic/max-len
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor, @typescript-eslint/no-empty-function
  public constructor() {}

  public bar() {
    this.baz();
  }

  public baz() {
    this.t = true;
  }
}

export { C };
