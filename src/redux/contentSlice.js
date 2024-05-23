import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  
  languages:[
    { value: 0, label: "Polish", icon: "pl" },
    { value: 1, label: "English", icon: "gb" },
    { value: 2, label: "Ukranian", icon: "ua" },
    { value: 3, label: "Turkish", icon: "tr" },
    { value: 4, label: "Russian", icon: "ru" },
  ],
  company:{
    name:'SAVIS',
    logo:'/savislogo',
    mobile:['+48 573 896 692','+48 600 004 428'],
    address:[{value:'https://maps.app.goo.gl/MMWmk2Avcd7o7YaPA',label:'ul. Aleja Jana Pawła II 27, 00-867 Warszawa Poland'}],
    mail:['biuro@savis.cc'],
    info:[
      'Nip 5273058656',
      'Rgn 525420371',
      'Krs 0001038514',
    ],
    social:[
      {
        icon:"instagram",
        link:"https://instagram.com"
      },
      {
        icon:"facebook",
        link:"https://facebook.com"
      },
      {
        icon:"twitter",
        link:"https://twitter.com"
      },
      {
        icon:"youtube",
        link:"https://youtube.com"
      },
      {
        icon:"linkedin",
        link:"https://linkedin.com"
      },
  
    ]
  },
  language:0,
  
  texts:[
    {
      language:0,//pl
      navbar:{
        home:'Strona główna',
        offers:'Nasza oferta',
        candidates:'Kandydaci',
        contacts:'Kontakt z nami'
      },
      main:{
        header:'NAJBARDZIEJ EFEKTYWNE ROZWIĄZANIE DLA TWOJEJ FIRMY!',
        description:'Nasza doświadczona kadra świadczy usługi outsourcingu kontraktowego w celu wspomagania procesów logistycznych oraz magazynowych a także linii produkcyjnych z uwzględnieniem infrastruktury naszych Klientów.',
        button:'Kontakt z nami'
      },
      content1:{
        title:"OUTSOURCING",
        desc:"NAJBARDZIEJ EFEKTYWNE ROZWIĄZANIE DLA TWOJEJ FIRMY!",
        messages :[
          "Nasza doświadczona kadra świadczy usługi outsourcingu kontraktowego w celu wspomagania procesów logistycznych oraz magazynowych a także linii produkcyjnych z uwzględnieniem infrastruktury naszych Klientów. ",
          "Powierzenie nam wskazanego odcinka funkcjonowania pozwoli zabezpieczyć oraz efektywnie wykorzystać dedykowane procesy w każdej firmie, bez angażowania działu HR, gdyż w pełni odpowiadamy za rekrutację, zatrudnienie, planowanie oraz stały nadzór nad Pracownikiem.Reasumując – nasz outsourcing to gwarantowany wzrost wydajności i jakości obsługiwanych procesów.","Mając świadomość, jak ogromną rolę na dzisiejszym rynku pracy stanowi efektywny zespół oferujemy elastyczne modele współpracy, które zagwarantują pozyskanie doświadczonej kadry, bez konieczności zatrudniania jej na stałe."
        ]
      },
      content2:{
        title:"REKRUTACJA STAŁA",
        desc:"TWOJA KORZYŚĆ, NASZ OBOWIĄZEK!",
        messages:["Jesteśmy specjalistami w zakresie rekrutacji zarówno w wąskich dziedzinach, jak i w branżach powszechnych typu FMCG, magazynowanie czy produkcja wyrobów sztucznych dzięki szerokiemu dostępowi do potencjalnych kandydatów a także dzięki profesjonalnym rekruterom.","Rekrutacja za pośrednictwem naszej firmy to gwarancja pozyskania kandydatów dopasowanych do potrzeb Pracodawcy."]
      },
      content3:{
        title:"DLA KANDYDATÓW",
        desc:"WZROST KOMPETENCJI POPRZEZ UDZIAŁ W CIEKAWYCH PROJEKTACH!",
        messages:["Kandydatom do pracy oferujemy szeroki wybór ofert, dopasowanych do ich kompetencji oraz możliwości. Dzięki nam zdobędziesz pracę, która pozwoli rozwinąć Twój potencjał.Oferujemy stabilne warunki zatrudnienia oraz atrakcyjne wynagrodzenie, zawsze adekwatne do wykonywanych czynności.","Z nami znajdziesz zakwaterowanie na preferencyjnych warunkach, pomoc w uzyskaniu opieki zdrowotnej, zwrot części kosztów za dojazd czy pomoc w uzyskaniu pomocy prawnej."]
      },
      showcase:{
        header:"KORZYŚCI",
        description:"O nas",
        items:[
          {
            icon:"price",
            title:"Cost Reduce",
            desc:"Redukcja kosztów"
          },
          {
            icon:"time",
            title:"Time Saving",
            desc:"Oszczędność czasu"
          },
          {
            icon:"calc",
            title:"Calculation Costs",
            desc:"Możliwość dokładnej kalkulacji kosztów"
          },
          {
            icon:"plus",
            title:"Quality",
            desc:"Stały wzrost produktywności przy zachowaniu wysokiej jakości"
          }
        ]
      },
      testimonials:{
        header:"Referencje",
        description:"Opinie o naszej pracy",
        items:[
          {
            "photo": "testimonials1.png",
            "name": "Darya C.",
            "message": "Jestem zadowolony z terminowości świadczonej usługi.",
            "language": "Polish"
          },
          {
            "photo": "testimonials2.png",
            "name": "Sinan Z.",
            "message": "Cena usługi była rozsądna i spełniła moje oczekiwania.",
            "language": "Polish"
          },
          {
            "photo": "testimonials3.png",
            "name": "Kamlai W.",
            "message": "Uznałem usługę za niezawodną i godną zaufania.",
            "language": "Polish"
          }
        ]
      },
      counts:[
        {
          icon:"business",
          name:"Klienci biznesowi",
          count:5 
        },
        {
          icon:"project",
          name:"Projekty",
          count:6
        },
        {
          icon:"individual",
          name:"Klienci indywidualni",
          count:7
        },
      ],
      contacts: {
        header:'Kontakt z nami',
        description:'Nie wahaj się zadać pytania',
        
        yourname:'Twoje imię',
        yourmail:'Twój email',
        yourmessage:'Twoja wiadomość',
        send:'Wyślij'
      },
      
    },
    {
      "language": 0, //en
      "navbar": {
        "home": "Home Page",
        "offers": "Our Offer",
        "candidates": "Candidates",
        "contacts": "Contact Us"
      },
      "main": {
        "header": "THE MOST EFFECTIVE SOLUTION FOR YOUR COMPANY!",
        "description": "Our experienced staff provides contractual outsourcing services to support logistic and warehouse processes as well as production lines, taking into account our Clients' infrastructure.",
        "button": "Contact Us"
      },
      "content1": {
        "title": "OUTSOURCING",
        "desc": "THE MOST EFFECTIVE SOLUTION FOR YOUR COMPANY!",
        "messages": [
          "Our experienced staff provides contractual outsourcing services to support logistic and warehouse processes as well as production lines, taking into account our Clients' infrastructure.",
          "Entrusting us with a specified segment of operations will secure and efficiently utilize dedicated processes in any company, without the involvement of the HR department, as we fully manage recruitment, employment, planning, and continuous supervision over the Employee. In summary - our outsourcing guarantees an increase in productivity and quality of serviced processes.",
          "Being aware of the significant role an efficient team plays in today's job market, we offer flexible cooperation models that guarantee the acquisition of experienced staff without the need for permanent employment."
        ]
      },
      "content2": {
        "title": "PERMANENT RECRUITMENT",
        "desc": "YOUR BENEFIT, OUR DUTY!",
        "messages": [
          "We are specialists in recruitment in both niche fields and common industries such as FMCG, warehousing, or artificial products manufacturing, thanks to wide access to potential candidates and professional recruiters.",
          "Recruitment through our company guarantees the acquisition of candidates tailored to the Employer's needs."
        ]
      },
      "content3": {
        "title": "FOR CANDIDATES",
        "desc": "SKILL DEVELOPMENT THROUGH PARTICIPATION IN INTERESTING PROJECTS!",
        "messages": [
          "We offer candidates a wide selection of job offers, tailored to their skills and possibilities. With us, you will find a job that allows you to develop your potential. We offer stable employment conditions and attractive salaries, always commensurate with the tasks performed.",
          "With us, you will find accommodation on preferential terms, assistance in obtaining healthcare, reimbursement of part of the travel costs, or assistance in obtaining legal help."
        ]
      },
      "showcase": {
        "header": "BENEFITS",
        "description": "About Us",
        "items": [
          {
            "icon": "price",
            "title": "Cost Reduction",
            "desc": "Cost reduction"
          },
          {
            "icon": "time",
            "title": "Time Saving",
            "desc": "Time saving"
          },
          {
            "icon": "calc",
            "title": "Cost Calculation",
            "desc": "Possibility of precise cost calculation"
          },
          {
            "icon": "plus",
            "title": "Quality",
            "desc": "Continuous increase in productivity while maintaining high quality"
          }
        ]
      },
      "testimonials": {
        "header": "Testimonials",
        "description": "Opinions about our work",
        "items": [
          {
            "photo": "testimonials1.png",
            "name": "Darya C.",
            "message": "I'm satisfied with the promptness of the service provided."
          },
          {
            "photo": "testimonials2.png",
            "name": "Sinan Z.",
            "message": "The price for the service was reasonable and met my expectations."
          },
          {
            "photo": "testimonials3.png",
            "name": "Kamlai W.",
            "message": "I found the service to be reliable and trustworthy."
          }
        ]
      },
      "counts": [
        {
          "icon": "business",
          "name": "Business Clients",
          "count": 5
        },
        {
          "icon": "project",
          "name": "Projects",
          "count": 6
        },
        {
          "icon": "individual",
          "name": "Individual Clients",
          "count": 7
        }
      ],
      "contacts": {
        "header": "Contact Us",
        "description": "Do not hesitate to ask a question",
        "yourname": "Your Name",
        "yourmail": "Your Email",
        "yourmessage": "Your Message",
        "send": "Send"
      }
    },
    {
      "language": 0, //ua
      "navbar": {
        "home": "Головна сторінка",
        "offers": "Наша пропозиція",
        "candidates": "Кандидати",
        "contacts": "Зв'язатися з нами"
      },
      "main": {
        "header": "НАЙЕФЕКТИВНІШЕ РІШЕННЯ ДЛЯ ВАШОЇ КОМПАНІЇ!",
        "description": "Наш досвідчений персонал надає послуги контрактного аутсорсингу для підтримки логістичних і складських процесів, а також виробничих ліній, враховуючи інфраструктуру наших клієнтів.",
        "button": "Зв'язатися з нами"
      },
      "content1": {
        "title": "АУТСОРСИНГ",
        "desc": "НАЙЕФЕКТИВНІШЕ РІШЕННЯ ДЛЯ ВАШОЇ КОМПАНІЇ!",
        "messages": [
          "Наш досвідчений персонал надає послуги контрактного аутсорсингу для підтримки логістичних і складських процесів, а також виробничих ліній, враховуючи інфраструктуру наших клієнтів.",
          "Довіряючи нам певний сегмент операцій, ви забезпечите та ефективно використаєте призначені процеси в будь-якій компанії без залучення відділу HR, оскільки ми повністю відповідаємо за набір, працевлаштування, планування та постійний нагляд за працівником. Підсумовуючи - наш аутсорсинг гарантує зростання продуктивності та якості обслуговуваних процесів.",
          "Усвідомлюючи значну роль ефективної команди на сьогоднішньому ринку праці, ми пропонуємо гнучкі моделі співпраці, які гарантують залучення досвідченого персоналу без необхідності постійного працевлаштування."
        ]
      },
      "content2": {
        "title": "ПОСТІЙНИЙ НАБІР",
        "desc": "ВАША ВИГОДА, НАШ ОБОВ'ЯЗОК!",
        "messages": [
          "Ми спеціалісти в галузі рекрутингу як у вузьких спеціальностях, так і в загальних галузях, таких як FMCG, складське господарство або виробництво штучних виробів, завдяки широкому доступу до потенційних кандидатів та професійним рекрутерам.",
          "Рекрутинг через нашу компанію гарантує залучення кандидатів, які відповідають потребам роботодавця."
        ]
      },
      "content3": {
        "title": "ДЛЯ КАНДИДАТІВ",
        "desc": "РОЗВИТОК НАВИЧОК ЧЕРЕЗ УЧАСТЬ В ЦІКАВИХ ПРОЕКТАХ!",
        "messages": [
          "Ми пропонуємо кандидатам широкий вибір вакансій, адаптованих до їхніх навичок та можливостей. З нами ви знайдете роботу, яка дозволить розвинути ваш потенціал. Ми пропонуємо стабільні умови працевлаштування та привабливу зарплату, завжди відповідну до виконуваних завдань.",
          "З нами ви знайдете житло на преференційних умовах, допомогу в отриманні медичного обслуговування, компенсацію частини витрат на проїзд або допомогу в отриманні правової допомоги."
        ]
      },
      "showcase": {
        "header": "ПЕРЕВАГИ",
        "description": "Про нас",
        "items": [
          {
            "icon": "price",
            "title": "Зниження витрат",
            "desc": "Зниження витрат"
          },
          {
            "icon": "time",
            "title": "Економія часу",
            "desc": "Економія часу"
          },
          {
            "icon": "calc",
            "title": "Розрахунок витрат",
            "desc": "Можливість точного розрахунку витрат"
          },
          {
            "icon": "plus",
            "title": "Якість",
            "desc": "Постійне зростання продуктивності при збереженні високої якості"
          }
        ]
      },
      "testimonials": {
        "header": "Відгуки",
        "description": "Думки про нашу роботу",
        "items": [
          {
            "photo": "testimonials1.png",
            "name": "Darya C.",
            "message": "Я задоволений швидкістю надання послуги.",
            "language": "Ukrainian"
          },
          {
            "photo": "testimonials2.png",
            "name": "Sinan Z.",
            "message": "Ціна за послугу була розумною і відповідала моїм очікуванням.",
            "language": "Ukrainian"
          },
          {
            "photo": "testimonials3.png",
            "name": "Kamlai W.",
            "message": "Я вважаю сервіс надійним і заслуговуючим довіри.",
            "language": "Ukrainian"
          }
        ]
      },
      "counts": [
        {
          "icon": "business",
          "name": "Бізнес клієнти",
          "count": 5
        },
        {
          "icon": "project",
          "name": "Проекти",
          "count": 6
        },
        {
          "icon": "individual",
          "name": "Індивідуальні клієнти",
          "count": 7
        }
      ],
      "contacts": {
        "header": "Зв'язатися з нами",
        "description": "Не соромтеся задавати питання",
        "yourname": "Ваше ім'я",
        "yourmail": "Ваш email",
        "yourmessage": "Ваше повідомлення",
        "send": "Відправити"
      },
    },
    {
      "language": 0, //pl
      "navbar": {
        "home": "Ana Sayfa",
        "offers": "Tekliflerimiz",
        "candidates": "Adaylar",
        "contacts": "Bize Ulaşın"
      },
      "main": {
        "header": "ŞİRKETİNİZ İÇİN EN ETKİLİ ÇÖZÜM!",
        "description": "Deneyimli kadromuz, müşterilerimizin altyapısını göz önünde bulundurarak lojistik ve depo süreçlerinin yanı sıra üretim hatlarını desteklemek için sözleşmeli outsourcing hizmetleri sunmaktadır.",
        "button": "Bize Ulaşın"
      },
      "content1": {
        "title": "OUTSOURCING",
        "desc": "ŞİRKETİNİZ İÇİN EN ETKİLİ ÇÖZÜM!",
        "messages": [
          "Deneyimli kadromuz, müşterilerimizin altyapısını göz önünde bulundurarak lojistik ve depo süreçlerinin yanı sıra üretim hatlarını desteklemek için sözleşmeli outsourcing hizmetleri sunmaktadır.",
          "Belirli bir işlemin bize devredilmesi, herhangi bir şirkette belirlenen süreçlerin güvenli bir şekilde korunmasını ve verimli bir şekilde kullanılmasını sağlar, HR departmanının dahil edilmesine gerek kalmadan, işe alım, istihdam, planlama ve çalışan üzerinde sürekli denetimden tamamen biz sorumluyuz. Özetle - outsourcingimiz, hizmet verilen süreçlerin üretkenliğinde ve kalitesinde garanti edilen artış anlamına gelir.",
          "Günümüz iş piyasasında etkili bir ekibin ne kadar önemli bir rol oynadığının farkında olarak, deneyimli personeli kalıcı olarak istihdam etme zorunluluğu olmadan edinme garantisi veren esnek işbirliği modelleri sunuyoruz."
        ]
      },
      "content2": {
        "title": "SÜREKLİ İŞE ALIM",
        "desc": "AVANTAJINIZ, GÖREVİMİZ!",
        "messages": [
          "FMCG, depolama veya yapay ürünler üretimi gibi genel endüstrilerde ve dar alanlarda uzmanlaşmış olarak, potansiyel adaylara geniş erişimimiz ve profesyonel işe alımcılarımız sayesinde işe alım konusunda uzmanız.",
          "Firmamız aracılığıyla yapılan işe alım, İşverenin ihtiyaçlarına uygun adayların kazanılmasını garanti eder."
        ]
      },
      "content3": {
        "title": "ADAYLAR İÇİN",
        "desc": "İLGİ ÇEKİCİ PROJELERDE YER ALARAK YETENEKLERİNİZİN GELİŞTİRİLMESİ!",
        "messages": [
          "Adaylara, yetenekleri ve olanaklarına uygun geniş bir iş teklifi yelpazesi sunuyoruz. Bizimle birlikte, potansiyelinizi geliştirebileceğiniz bir iş bulacaksınız. Yapılan işlere her zaman uygun, cazip maaşlar ve istikrarlı istihdam koşulları sunuyoruz.",
          "Bizimle birlikte, tercihli şartlarda konaklama, sağlık hizmeti alımında yardım, yol masraflarının bir kısmının karşılanması veya hukuki yardım alımında destek bulacaksınız."
        ]
      },
      "showcase": {
        "header": "AVANTAJLAR",
        "description": "Hakkımızda",
        "items": [
          {
            "icon": "price",
            "title": "Maliyet Azaltma",
            "desc": "Maliyetlerin azaltılması"
          },
          {
            "icon": "time",
            "title": "Zaman Tasarrufu",
            "desc": "Zaman tasarrufu"
          },
          {
            "icon": "calc",
            "title": "Maliyet Hesaplama",
            "desc": "Maliyetlerin tam olarak hesaplanabilmesi"
          },
          {
            "icon": "plus",
            "title": "Kalite",
            "desc": "Yüksek kaliteyi korurken sürekli üretkenlik artışı"
          }
        ]
      },
      "testimonials": {
        "header": "Referanslar",
        "description": "İşimiz hakkındaki görüşler",
        "items": [
          {
            "photo": "testimonials1.png",
            "name": "Darya C.",
            "message": "Sunulan hizmetin hızından memnunum.",
            "language": "Turkish"
          },
          {
            "photo": "testimonials2.png",
            "name": "Sinan Z.",
            "message": "Hizmetin fiyatı makuldu ve beklentilerimi karşıladı.",
            "language": "Turkish"
          },
          {
            "photo": "testimonials3.png",
            "name": "Kamlai W.",
            "message": "Hizmeti güvenilir ve güven verici buldum.",
            "language": "Turkish"
          }
        ]
      },
      "counts": [
        {
          "icon": "business",
          "name": "İş Dünyası Müşterileri",
          "count": 5
        },
        {
          "icon": "project",
          "name": "Projeler",
          "count": 6
        },
        {
          "icon": "individual",
          "name": "Bireysel Müşteriler",
          "count": 7
        }
      ],
      "contacts": {
        "header": "Bize Ulaşın",
        "description": "Soru sormaktan çekinmeyin",
        "yourname": "Adınız",
        "yourmail": "E-postanız",
        "yourmessage": "Mesajınız",
        "send": "Gönder"
      },
    },
    {
      "language": 0, //pl
      "navbar": {
        "home": "Главная",
        "offers": "Наши предложения",
        "candidates": "Кандидаты",
        "contacts": "Контакты"
      },
      "main": {
        "header": "САМОЕ ЭФФЕКТИВНОЕ РЕШЕНИЕ ДЛЯ ВАШЕЙ КОМПАНИИ!",
        "description": "Наш опытный персонал предоставляет услуги контрактного аутсорсинга для поддержки логистических и складских процессов, а также производственных линий с учетом инфраструктуры наших клиентов.",
        "button": "Связаться с нами"
      },
      "content1": {
        "title": "АУТСОРСИНГ",
        "desc": "САМОЕ ЭФФЕКТИВНОЕ РЕШЕНИЕ ДЛЯ ВАШЕЙ КОМПАНИИ!",
        "messages": [
          "Наш опытный персонал предоставляет услуги контрактного аутсорсинга для поддержки логистических и складских процессов, а также производственных линий с учетом инфраструктуры наших клиентов.",
          "Доверяя нам определенный сегмент операций, вы обеспечиваете и эффективно используете назначенные процессы в любой компании, без вовлечения отдела HR, так как мы полностью берем на себя набор, трудоустройство, планирование и постоянный контроль над работником. Вкратце - наш аутсорсинг гарантирует рост производительности и качества обслуживаемых процессов.",
          "Осознавая, насколько важную роль играет эффективная команда на сегодняшнем рынке труда, мы предлагаем гибкие модели сотрудничества, которые гарантируют привлечение опытного персонала без необходимости его постоянного найма."
        ]
      },
      "content2": {
        "title": "ПОСТОЯННЫЙ НАБОР",
        "desc": "ВАША ВЫГОДА, НАША ОБЯЗАННОСТЬ!",
        "messages": [
          "Мы специалисты в области рекрутинга как в узких специализациях, так и в общих отраслях, таких как FMCG, складирование или производство искусственных изделий, благодаря широкому доступу к потенциальным кандидатам и профессиональным рекрутерам.",
          "Рекрутинг через нашу компанию гарантирует привлечение кандидатов, соответствующих потребностям работодателя."
        ]
      },
      "content3": {
        "title": "ДЛЯ КАНДИДАТОВ",
        "desc": "РАЗВИТИЕ НАВЫКОВ ЧЕРЕЗ УЧАСТИЕ В ИНТЕРЕСНЫХ ПРОЕКТАХ!",
        "messages": [
          "Кандидатам мы предлагаем широкий выбор вакансий, соответствующих их навыкам и возможностям. С нами вы найдете работу, которая позволит развить ваш потенциал. Мы предлагаем стабильные условия трудоустройства и привлекательную заработную плату, всегда соответствующую выполненной работе.",
          "С нами вы найдете жилье на предпочтительных условиях, помощь в получении медицинского обслуживания, компенсацию части затрат на проезд или помощь в получении юридической помощи."
        ]
      },
      "showcase": {
        "header": "ПРЕИМУЩЕСТВА",
        "description": "О нас",
        "items": [
          {
            "icon": "price",
            "title": "Сокращение расходов",
            "desc": "Сокращение расходов"
          },
          {
            "icon": "time",
            "title": "Экономия времени",
            "desc": "Экономия времени"
          },
          {
            "icon": "calc",
            "title": "Расчет затрат",
            "desc": "Возможность точного расчета затрат"
          },
          {
            "icon": "plus",
            "title": "Качество",
            "desc": "Постоянный рост производительности при сохранении высокого качества"
          }
        ]
      },
      "testimonials": {
        "header": "Отзывы",
        "description": "Мнения о нашей работе",
        "items": [
          {
            "photo": "testimonials1.png",
            "name": "Darya C.",
            "message": "Я доволен оперативностью предоставленной услуги.",
            "language": "Russian"
          },
          {
            "photo": "testimonials2.png",
            "name": "Sinan Z.",
            "message": "Цена за услугу была разумной и соответствовала моим ожиданиям.",
            "language": "Russian"
          },
          {
            "photo": "testimonials3.png",
            "name": "Kamlai W.",
            "message": "Я нашел услугу надежной и заслуживающей доверия.",
            "language": "Russian"
          }
        ]
      },
      "counts": [
        {
          "icon": "business",
          "name": "Бизнес клиенты",
          "count": 5
        },
        {
          "icon": "project",
          "name": "Проекты",
          "count": 6
        },
        {
          "icon": "individual",
          "name": "Индивидуальные клиенты",
          "count": 7
        }
      ],
      "contacts": {
        "header": "Связаться с нами",
        "description": "Не стесняйтесь задавать вопросы",
        "yourname": "Ваше имя",
        "yourmail": "Ваш email",
        "yourmessage": "Ваше сообщение",
        "send": "Отправить"
      }
    }
  ],
  
}

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setLanguage: (state,action) => {
      state.language = action.payload
    },
  },
})


export const { setLanguage} = contentSlice.actions

export default contentSlice.reducer