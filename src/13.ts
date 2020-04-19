namespace a {
    let a = { name: "sdas" }
    let b = typeof a;
    type c = typeof a;
    console.log(b);


    class Person {
        name: string
    }
    type PartialPerson = Partial<Person>;
    let p: PartialPerson = {
        name: "sd"
    }


    interface Fish {
        name: string
    }
    interface Water {
        name: string
    }
    interface Bird {
        name: string
    }
    interface Skey {
        name: string
    }
}
namespace b {
    type E = Exclude<string | number, string>;//重前者中排除后者等价于 E:number
    let e: E = 55;//
    type D = Extract<string | number | null, string>;//
    let d: D = "SDS";
    type E3 = NonNullable<string | number | null | undefined>//
    let e3: E3 = "455445"
    let e4: E3 = 444
    let e5: E3 = undefined;
    let e6: E3 = null;

    // redux 中使用ReturnType
    function getUserInfo() {
        return { name: "sdsd", age: 44 }
    }
    type UserInfo = ReturnType<typeof getUserInfo>
    let user: UserInfo = {
        name: "IOSDFJS",
        age: 8
    }
    // InstanceType 获取构造函数的实例类型
    class Person5 {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    }
    type P = InstanceType<typeof Person5>;

    let p: P = new Person5("SFSKLF")
    let p1 = new Person5("SFSKLF")
    console.log(p1.name);

}
