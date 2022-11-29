function test(): Function {
    return function(a: number, b: number) {
        console.log("hello");
    }
} 

test()();