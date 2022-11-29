function test() {
    return function (a, b) {
        console.log("hello");
    };
}
test()();
