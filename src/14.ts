export { }
// 声明文件怎么写
/**
 * 1.你把ts重写一遍
 * 2.给它配上声明文件
 * jquery js写的没有 ts
 *  */
declare const $: (selector: string) => {
    click(): void;
    width(length: number): void
}

$("#root").click();
$("#root").width(52);

declare let name: string;
declare let age: number;
declare function getname(): string;
declare class Animal { name: string }

interface Person6 {
    name: string
}
type Student = Person6 | string

declare enum Season {
    Spring,
    Summer,
    Autumn,
    Winter
}
let season: Season[] = [Season.Spring, Season.Summer, Season.Autumn, Season.Winter];
console.log(season);
