## this Keyword

In simple way we can say, ```this``` refers to current Object.

```this``` is not an author-time binding but a runtime binding, it is actually a binding that is made when a function is invoked, and what is references is determined entirely by the call-site(how the function is called) where the function is called.

```
function foo() {
    this.name = 'ashu'
}

foo();
```
In the upper example ```this``` keyword will create a global variable ``name``. Meaning this keyword is not referencing to itself(foo).


