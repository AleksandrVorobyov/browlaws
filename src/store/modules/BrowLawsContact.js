import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
    state: {
        contact: {
            title:
                "Как добраться",
            blockInfo: [
                {
                    title: "На автомобиле из центра:",
                    text: "При движении из центра в область: по улице Большая Лубянка. Свернуть налево на Рождественский бульвар, продолжать движение до первого разворота налево, на светофоре сделать разворот налево на противоположную сторону Рождественского бульвара. Через 200 метров поворачиваем направо на Малый Кисельный переулок. Едем до конца улицы и поворачиваем налево на Большой Кисельный переулок. Продолжаете движение до дома 14 строение 1. Салон Красоты «Brow&Laws» находится на 1м этаже.",
                },
                {
                    title: "На автомобиле с МКАД:",
                    text: "Двигаясь по МКАД, по указателю повернуть на Ярославское шоссе. Ярославское шоссе плавно перетекает в улицу Проспект Мира и движемся до садового кольца. Далее поворачиваем направо и движемся до перекрестка. На перекрестке поворачиваем направо и через 50 метром с левой полосы едем на разворот. Продолжаем движение прямо по Цветному Бульвару и доезжаем к Рождественскому бульвару. Через 400 метров поворачиваем направо на Малый Кисельный переулок. Едем до конца улицы и поворачиваем налево на Большой Кисельный переулок. Продолжаете движение до дома 14 строение 1. Салон Красоты «Brow&Laws» находится на 1м этаже.",
                },
                {
                    title: "На метро:",
                    text: "Маршруты от всех ближайших метро до нашего салона отображены на нашей онлайн карте.",
                },
            ],
            map: {
                nav: [
                    {
                        text: "Карта",
                        id: "contact-map-main",
                        class: "contact__map-nav-btn--active",
                        content: `<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Abe0e363c2de93bd3959e3c88d12b51f0ca3db7f36eb8c56a2995b00bdb3d80c3&amp;source=constructor" width="100%" height="390" frameborder="0"></iframe>`
                    },
                    {
                        text: "Лубянка",
                        id: "contact-map-metro-01",
                        class: "",
                        content: `<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A3b29b4090035e0226fbc1a09ddeb684eb158d5b6488f504a73725cba7265517b&amp;source=constructor" width="100%" height="390" frameborder="0"></iframe>`
                    },
                    {
                        text: "Трубная",
                        id: "contact-map-metro-02",
                        class: "",
                        content: `<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A70b43a0bda2c54dafff991af013e8c64908eb5f9761cce37e130b6d36f668c1e&amp;source=constructor" width="100%" height="390" frameborder="0"></iframe>`
                    },
                    {
                        text: "Кузнецкий мост",
                        id: "contact-map-metro-03",
                        class: "",
                        content: `<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A82f52e9e7d4eeb49d30ab1492e3fed909e96d66ea267f23ee76753d421710c16&amp;source=constructor" width="100%" height="390" frameborder="0"></iframe>`
                    },
                    {
                        text: "Тургеневская",
                        id: "contact-map-metro-04",
                        class: "",
                        content: `<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A039f756cbd17e3b7ffbe99a14593a677002c1401411e5db4bc0897a39e0755b6&amp;source=constructor" width="100%" height="390" frameborder="0"></iframe>`
                    },
                ],
                contentActive: `<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Abe0e363c2de93bd3959e3c88d12b51f0ca3db7f36eb8c56a2995b00bdb3d80c3&amp;source=constructor" width="100%" height="390" frameborder="0"></iframe>`
            }
        },
    },
    getters: {
        contact(state) {
            return state.contact;
        },
    },
    mutations: {
        contactMapNav(state, event) {
            const thisBtn = event;
            let thisItem = state.contact.map.nav.find(item => item.id === thisBtn.id)
            document.querySelector(".contact__map-nav-btn.contact__map-nav-btn--active").classList.remove("contact__map-nav-btn--active");
            thisBtn.classList.add("contact__map-nav-btn--active");
            state.contact.map.contentActive = thisItem.content;
        },
        contactSectionAnim() {
            gsap.registerPlugin(ScrollTrigger);
            let contactItems = document.querySelectorAll('.contact-wrap > *')

            contactItems.forEach((item) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        toggleActions: "play pause play pause",
                    },
                    opacity: 0,
                    y: 30,
                    duration: .7,
                });
            })
        }
    },
};
