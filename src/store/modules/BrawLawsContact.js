export default {
    state: {
        contact: {
            title:
                "Как добраться",
            blockInfo: [
                {
                    title: "На автомобиле из центра:",
                    text: "При движении из центра в область: по Рублевскому шоссе съехать на дублер по указателю «Осенний бульвар». Свернуть направо на Осенний бульвар, продолжать движение до конца Осеннего бульвара, на светофоре сделать разворот налево на противоположную сторону Осеннего бульвара. Салон красоты «АИДА» расположен на 3-м этаже Дома Бытовых услуг (Осенний бульвар, д.21). Ориентиры: вывеска на здании «Салон Красоты BrawLaws».",
                },
                {
                    title: "На автомобиле с МКАД:",
                    text: "Двигаясь по МКАД, по указателю повернуть на Рублевское шоссе. Не въезжая на эстакаду, держаться правее. Далее на втором светофоре свернуть под эстакаду налево, повернуть еще раз налево и свернуть направо по указателю «Осенний бульвар». Продолжать движение до конца Осеннего бульвара, на светофоре сделать разворот налево на противоположную сторону Осеннего бульвара. Салон красоты «АИДА» расположен на 3-м этаже Дома Бытовых услуг (Осенний бульвар, д.21). Ориентиры: вывеска на здании «Салон Красоты BrawLaws».",
                },
                {
                    title: "На метро:",
                    text: "Метро «Крылатское». Первый вагон из Центра, через турникеты налево, по лестнице направо, далее прямо по Осеннему бульвару (5-7 мин). С левой стороны трехэтажное здание Дома Бытовых услуг. Ориентиры: «Салон Красоты BrawLaws». Салон красоты находится на 1 этаже.",
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
        }
    },
};
