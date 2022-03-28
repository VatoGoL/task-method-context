import { EventEmitter } from './EventEmitter';

/*
1) В методе subscribe подпишитесь на событие click с помощью EventEmitter.on(eventName, callback).
В обработчике нужно увеличивать значение поля count на 1
2)В методе unsubscribe отпишитесь от события click с помощью EventEmitter.off(eventName, callback).
В качестве callback нужно передавать тот же самый обработчик, который был передан при подписке.
 */
export const obj = {
    count: 0,
    call: () => {},
    subscribe() {
        let callback = () => this.count++;
        this.call = callback;
        EventEmitter.on('click', callback);
    },

    unsubscribe() {
        EventEmitter.off('click', this.call);
    },
};

/*
Сделайте так, чтобы метод first вызывал метод second со своими аргументами, но в обратном порядке:

obj1.first(1, 2, 3);
// Внутренний вызов должен быть равносилен obj1.second(3, 2, 1)
 */
export const obj1 = {
    first(...args) {
        let arg = new Array(args.length);
        for (let i = 0; i < args.length; i++) {
            arg[i] = args[args.length - 1 - i];
        }
        this.second(...arg);
    },
    second() {
        // здесь ничего писать не нужно
    },
};
