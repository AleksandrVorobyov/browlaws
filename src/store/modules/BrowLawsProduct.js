import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
  state: {
    product: {
      permanentlips: [
        {
          class: "product__img-block",
          img: ["product/permanentLips/01.jpg"],
        },
        {
          class: "product__info-block",
          title: `Виды перманентного макияжа губ.`,
          text: [
            "1. Только контур, рекомендуется тем, кто имеет от природы хорошую форму губ и хочет подчеркнуть их контур. Оттенки при этом подбираются пастельные или полностью совпадающие с собственным цветом губ.",
            "2. Полное заполнение (перманентная помада) предпочтительна для тех, кто хочет полностью изменить собственный цвет губ, визуально увеличить объем и придать им сексуальности.",
            "3. Эффект 3D позволит сделать губы более сочными, вернуть им свежесть и молодость, а также визуально увеличить объем и придать губам рельефности.",
            "4. Акварельная техника дает цвет губ, очень близкий к естественному, так как плотность заполнения губ цветом минимальна. Губы будут выглядеть так, будто на них нанесли матовый блеск.",
          ],
        },
        {
          class: "product__info-block",
          text: [
            "☝🏻 Перед процедурой перманентного макияжа губ, убедитесь…",
            "🔺 что ваши губы здоровы (у вас нет герпеса, нет ран и других повреждений);",
            "🔺 что ваши губы увлажнены (чтобы избавиться от сухости начинайте за 5 дней до процедуры их активно увлажнять);",
            "🔺если есть склонность герпеса, то в день процедуры нужно начать пропивать противовирусные препараты, например, ацикловир;",
            "🔺 если вы увеличивали губы, то после процедуры должно пройти не менее двух недель.",
          ],
        },
        {
          class: "product__info-block",
          title: "Открываю тайну",
          text: [
            "Губы делать - больно😱",

            "Девочки, ну, конечно же, НЕТ ❌  ",

            "😍 Процедура перманентного макияжа губ проходит очень комфортно и спокойно, если работать в правильной технике и на правильной глубине.",

            "Для чувствительных девушек перед процедурой я наношу аппликационную анестезию на 10 минут, чтобы губки немного заморозились 🌹Но в большинстве случаях я использую только вторичную анестезию, потому что «зачем лишний раз замораживать губки, если и так все хорошо?» 😅",
          ],
        },
        {
          class: "product__info-block",
          title: "Мои материалы",
          text: [
            "✅ У меня всегда одноразовые макси, перчатки, шапочки и тд.",
            "✅ Все пигменты имею сертификат качества.",
            "✅ После каждого клиента рабочая поверхность обрабатывается специализированными растворами и оборачивается одноразовой пленкой.",
            "✅ У меня большой опыт работы и множество пройденных повышений квалификаций. Поэтому вы можете доверится мне на все 100%!",
          ],
        },
        {
          class: "product__img-block",
          img: ["product/permanentLips/02.jpg"],
        },
      ],
      permanentbrow: [
        {
          class: "product__img-block",
          img: ["product/permanentBrow/04.jpg"],
        },
        {
          class: "product__info-block",
          title: "Перманент бровей",
          text: [
            "Особый акцент на лице девушки создают брови, правильно подобранная форма которых поможет подчеркнуть достоинства лица🌸",
            "В современном мире все чаще мы задумываемся о том, чтобы сделать эту часть лица красивой на долгое время, в чем им и могут помочь  две наиболее распространённые техники - волосковая и пудровая☺️",
            "Микроблейдинг в технике волосковой прорисовки – это когда с помощью специальной ручки-манипулы с тончайшими лезвиями делается аккуратный микроразрез на коже, своим рисунком напоминающий родной волосок брови, в который затекает краска-пигмент. Но так ли хороша эта техника?🤔",
            "☝🏻Волосковая техника делается лезвием, в следствии чего происходит:",
            "▪️Повреждение луковицы волоса;",
            "▪️Рубцевание кожи.",
          ],
        },
        {
          class: "product__info-block",
          text: [
            "😔К сожалению, волосковая техника смотрится красиво на лице первые 2-3 дня, после чего пигмент под кожей начинает растекаться, что выглядит не совсем привлекательно",
            "💕А в технике пудрового напыления ручка-игла рисует пигментом многочисленные точки в более поверхностном слое кожи,что не травмирует луковицу волоса и не разрушает его. В итоге это визуально напоминает легкое напыление с мягкой растушевкой, словно вы аккуратно подвели брови тенями и смотрится красиво и естественно ещё долгое время после процедуры.",
          ],
        },
        {
          class: "product__info-block",
          title: "Рекомендации после процедуры",
          text: [
            "❗️Мочить рану запрещено, это снижает скорость восстановления кожных покровов.",
            "❗️Запрещается загорать на солнце и ходить в солярий, до восстановления кожи.",
            "❗️Первые дни воспаления обрабатывается антисептическим раствором, не на спиртовой основе или заживляющей мазью (припухлость или отечность можно унять прикладывать пакет со льдом).",
            "❗️При появлении корочки нельзя трогать руками, так как повышается риск попадания инфекции.",
            "❗️Отдирать корочку самостоятельно нельзя, иначе пигмент не усвоится. Она должна полностью сойти самостоятельно.",
          ],
        },
        {
          class: "product__info-block",
          title: "Для чего же нужна коррекция?",
          text: [
            "🔸Предугадать результат после первого сеанса невозможно. Каждый организм по своему реагирует на пигмент. Поэтому первичная коррекция назначается для корректировки и увеличения цвета;",
            "🔸На первичной коррекции добавляется не только цвет, но и доводятся точность линий до совершенства;",
            "🔸Первичная коррекция назначается не раньше, чем через месяц, но не позднее трёх месяцев. За это время пигмент примет окончательную форму и станет ясно, где нужно добавить цвета или доработать рисунок;",
            "🔸Последующие коррекции нужны по желанию клиента для того, чтобы обновить перманентный макияж и цвет.",
          ],
        },
        {
          class: "product__img-block",
          img: ["product/permanentBrow/01.jpg"],
        },
      ],
      permanenteyes: [
        {
          class: "product__img-block",
          img: ["product/permanentEyes/01.jpg"],
        },
        {
          class: "product__info-block",
          title: "Перманент межреснички",
          text: [
            "Перманент межресничного пространства пользуется большим спросом на протяжении многих лет. При помощи перманента можно забыть о ежедневных попытках сделать свой взгляд более выразительным, используя декоративную косметику. Данная процедура обладает массой преимуществ.",
            "Пигмент вводится на глубину не более 0,8 мм, при этом многое зависит от техники и особенностей глаз клиентки. В отличие от обычного перманентного макияжа, межресничный способен сделать ресницы визуально гуще. К другим преимуществам процедуры стоит отнести возможность корректировки линии роста с целью получения красивой формы.",
            "К основным достоинствам межресничного перманента можно отнести эффект густых темных ресниц, визуальное увеличение и раскрытие глаза, отсутствие потребности ежедневно наносить макияж и длительный срок.",
          ],
        },
        {
          class: "product__info-block",
          title: "Как подготовиться к процедуре перманентного макияжа?",
          text: [
            "Конечный результат перманентного макияжа зависит не только от профессионализма мастера, выполняющего его, и качества пигментов, расходников и оборудования. Большое значение имеет качество и своевременность подготовки к перманенту и ухода за ним. И если об уходовых процедурах расскажет мастер после проведенного татуажа, подробно указав, что, как и когда делать, то о подготовке необходимо узнать самостоятельно. В этом посте,  мы расскажем, как готовиться к процедуре и что необходимо делать👌🏻",
            "Не важно, на какой зоне будет проведена процедура, но стоит обратить внимание на то, что она имеет ряд абсолютных противопоказаний, при которых перманентный макияж под полным запретом.",
          ],
        },
        {
          class: "product__img-block",
          img: ["product/permanentEyes/02.jpg"],
        },
        {
          class: "product__info-block",
          title: "Что запрещено перед процедурой перманентного макияжа?",
          text: [
            "Есть ряд правил, которых рекомендуется придерживаться для того, чтобы после процедуры пигмент лучше осел, а результат был ожидаемым и правильным☝🏻",
            "🚨Откажитесь от спиртного",
            "🚨Лечите герпес",
            "🚨Откажитесь от энергетиков и кофеина в больших дозах",
            "🚨Не принимайте антибиотики",
            "🚨Нельзя проводить косметологические процедуры: пилинг, скрабирование и тому подобное.",
          ],
        },
        {
          class: "product__info-block",
          text: [
            "😇Если вы хотите получить красивый перманентный макияж с полным периодом видимого эффекта для него в зависимости от зоны, обязательно соблюдайте рекомендации по подготовке к процедуре. От этого зависит конечный результат процедуры, ваша внешность и красота. При любых вопросах обращайтесь к мастеру за консультацией и строго следуйте его советам.",
            "На период приема лекарств, которые влияют на гормональный фон, от перманента следует отказаться.",
          ],
        },
      ],
      laminationbrow: [
        {
          class: "product__img-block",
          img: ["product/permanent/prod.jpg", "product/brow/02.jpg"],
        },
        {
          class: "product__info-block",
          title: "Ламинирование бровей",
          text: [
            "Ламинирование бровей – это процедура, при которой мастер покрывает брови особыми составами для долговременной укладки и фиксации. Иногда ламинирование бровей сопровождается окрашиванием. В результате брови становятся яркими, аккуратными и ухоженными, а заданная форма остаётся неизменной несколько месяцев.",
            "Выполняя ламинирование, специалист сначала тщательно очищает брови, затем обезжиривает их и последовательно наносит несколько сывороток. Каждую из них нужно выдержать для воздействия определённое время, которое мастер может корректировать в зависимости от жёсткости ваших бровей.",
          ],
        },
        {
          class: "product__info-block",
          text: [
            "Ламинирование бровей подходит практически всем, но в первую очередь тем, у кого жёсткие и непослушные брови, нуждающиеся в ежедневной укладке. Также на эту процедуру стоит обратить внимание девушкам, которые хотят укрепить и уплотнить брови, сделать их густыми и пышными. Если у вас редкие брови с заметными пробелами между волосками, ламинирование не спасёт ситуацию. В вашем случае лучше подумать о перманентном макияже.",
            "Чтобы понять, подойдёт вам ламинирование или нет, зачешите брови наверх с помощью средства для укладки сильной фиксации, геля для бровей или клея для накладных ресниц. Примерно так и будет выглядеть результат процедуры – объёмные, дерзкие брови с трендовым «подиумным» эффектом.",
          ],
        },
        {
          class: "product__img-block",
          img: ["product/brow/03.jpg"],
        },
        {
          class: "product__info-block",
          text: [
            "В среднем результат ламинирования длится минимум два месяца. Это, безусловно, удобно, поскольку на длительный срок избавляет вас от необходимости укладывать брови. А лицо выглядит выразительным и ухоженным благодаря аккуратным, но объёмным бровям.",
            "Длительность процедуры ламинирования бровей составляет от 40 минут до часа.",
            "Перед ламинированием не требуется особых приготовлений. Единственная рекомендация – накануне отказаться от пилинга или других агрессивных процедур на лице.",
          ],
        },
        {
          class: "product__info-block",
          title: "Уход за бровями после ламинирования",
          text: [
            "Ухаживать за бровями после ламинирования совсем несложно. В течение суток лучше не мочить и не распаривать зону, на которой проводилась процедура, поэтому стоит отказаться от посещения бани, сауны и бассейна, не принимать слишком горячую ванну. Это поможет ламинирующему составу закрепиться на волосках и обеспечить должный результат.",
            "Начиная со второго дня, все ограничения снимаются: вы можете плавать, париться в бане, делать макияж любой сложности и пользоваться средствами ухода за лицом, в том числе в зоне глаз и бровей.",
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
    productSectionAnim() {
      gsap.registerPlugin(ScrollTrigger);

      let aboutItems = document.querySelectorAll(".product-wrap > *");

      aboutItems.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            toggleActions: "play pause play pause",
          },
          opacity: 0,
          y: 30,
          duration: 0.7,
        });
      });
    },
  },
  actions: {
    product({ commit, state }, products) {
      console.log(commit.product);
    },
  },
};
