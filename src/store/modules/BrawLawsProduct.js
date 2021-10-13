export default {
    state: {
        product: {
            permanent: [
                {
                    class: "product__img-block",
                    img: [
                        "product/permanent/prod.jpg",
                        "product/permanent/02.jpg",
                    ],
                },
                {
                    class: "product__info-block",
                    title: "Перманентный макияж",
                    text: [
                        'Перманентный макияж — настоящая находка для Вас, если Вы хотите выглядеть 24 часа в сутки идеально!',
                        'Потратив всего 60 минут, вы можете не беспокоиться о внешнем виде более 2 лет!',
                        'Перманентный макияж — процедура введения в верхние слои кожи специального пигмента, количество оттенков которого превышает 3 000 000 вариантов!'
                    ]
                },
                {
                    class: "product__info-block",
                    text: [
                        'Перманентный макияж — это внедрение специального красящего пигмента в верхние слои дермы, чтобы выделить, подчеркнуть или скорректировать некоторые черты лица. Наши мастера - настоящие профессионалы своего дела, постоянно участвуют в международных форумах и занимают призовые места. К каждому клиенту у нас индивидуальный подход. С помощью перманентного макияжа можно улучшить форму бровей, губ, век и многое другое.',
                        'В первую очередь мы позаботились о безопасности и комфорте наших клиенток, сделав все возможное , что бы создать идеальные условия. Студия оснащена импортным оборудованием. В работе используются пигменты самого высокого качества. Их отличает особая устойчивость, гипоаллергенность и безвредность для здоровья. Местная анестезия применяется с учетом противопоказаний и индивидуальных особенностей.',
                    ]
                },
                {
                    class: "product__info-block",
                    text: [
                        'Все работы по созданию перманентного макияжа проводятся исключительно в стерильных условиях с применением одноразовых расходных материалов. Посетительницы студии получают все необходимые консультации о правильном уходе за лицом в период заживления после процедуры.',
                        'Благодаря перманентному макияжу можно отказаться от многих видов косметики и больше не тратить пол-утра на рисование стрелок, подкрашивание губ. Смывать мейкап тоже не придется — это еще сильнее экономит время.',
                        'Клиентки BROW & LAWS всегда отмечают приятную атмосферу в студии и высокий профессионализм мастеров.',
                    ]
                },
                {
                    class: "product__img-block",
                    img: [
                        "product/permanent/01.jpg",
                    ],
                },
                {
                    class: "product__info-block",
                    title: "Перманет Бровей",
                    text: [
                        'Перманентный макияж бровей – процедура, во время которой под кожу вводится пигмент с целью коррекции формы, густоты и цвета бровей.',
                        'Однако в отличие от настоящей татуировки при перманентном макияже пигмент закладывают лишь в самые верхние слои кожи. Благодаря этому процедура перманентного макияжа бровей безболезненна.',
                        'Перманентный макияж бровей как правильно держится от 1 года до 2-х лет. Обусловлено это глубиной ввода пигмента и консистенцией самого пигмента.',
                        'Со временем он постепенно рассасывается, а спустя несколько лет полностью исчезает. Это дает возможность обладательнице перманентного макияжа выбрать другой вид услуги и поэкспериментировать.',
                    ]
                },
                {
                    class: "product__info-block",
                    title: "Перманент Межреснички и Стрелки",
                    text: [
                        'Перманентный макияж межресничного пространства и стрелки – это введение красящего вещества в эпидермис по контору глаз. Перманентный макияж делает взгляд насыщеннее и пронзительнее, также с помощью него можно подкорректировать форму глаз. Наличие перманентного макияжа на лице позволяет представительницам женского пола существенно уменьшить время, которое тратится на повседневный макияж, и достигнуть эффекта густых и объемных ресниц. Полученный результат сохраняется от 2 до 5 лет – это зависит от типа кожи, возраста, глубины внедрения красящегося вещества.',
                    ]
                },
                {
                    class: "product__img-block",
                    img: [
                        "product/permanent/ayes.jpg",
                    ],
                },
                {
                    class: "product__info-block",
                    title: "Перманент Губ",
                    text: [
                        'Перманентный макияж губ – это особая техника пигментации верхнего слоя кожи. Её проводят при помощи микропроколов, в которые вносится специальные красящие соединения.',
                        'В какой-то степени техника напоминает известную всем татуировку. Только при татуировке пигмент вводится в глубокие слои кожи, а проколы для перманентного макияжа делаются на глубину 0,3.',
                    ]
                },
                {
                    class: "product__img-block",
                    img: [
                        "product/permanent/lips.jpg",
                    ],
                },
            ],
        },
    },
    getters: {
        product(state) {
            return state.product;
        },
    },
    mutations: {
        product(state, payload) {
            console.log(state.product);
        },
    },
    actions: {
        product({ commit, state }, products) {
            console.log(commit.product);
        }
    }
}