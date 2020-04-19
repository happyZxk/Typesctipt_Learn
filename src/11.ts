function swap<T, U>(a: T, b: U) {


}
namespace x {
    type logFunc = (a: number | string) => void;
    let log: logFunc;
    function log1(a: number | string | boolean): void {
        console.log(a);
    }
    log = log1;
    console.log(log);

}