// Each binding has a scope, which is the part of the program in which the binding
// is visible. For bindings defined outside of any function, block, or module (see
// Chapter 10), the scope is the whole program—you can refer to such bindings
// wherever you want. These are called global.
// Bindings created for function parameters or declared inside a function can
// be referenced only in that function, so they are known as local bindings. Every time the function is called, new instances of these bindings are created.
// This provides some isolation between functions—each function call acts in its
// own little world (its local environment) and can often be understood without
// knowing a lot about what’s going on in the global environment.

