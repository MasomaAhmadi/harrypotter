import S from "./assets/images/slytherin.png";
import G from "./assets/images/gryffindor.jpeg";
import R from "./assets/images/Ravenclaw.avif";
import H from "./assets/images/Hufflepuff.jpg";

import Herminy from "./assets/images/herminy.png";
import harryPotter from './assets/images/harry-potter.png';
import ron from "./assets/images/ron.png"
import dombeldor from "./assets/images/dambeldor.png"
import hogrid from "./assets/images/hogrid.png"
import severous from "./assets/images/severous.png"
import draco from "./assets/images/draco.png"
import voldermort from "./assets/images/voldermort.png"
import dobby from "./assets/images/dobby.png";
import slyth from './assets/images/slyth-removebg-preview.png';
import grif from './assets/images/grif-removebg-preview1.png';
import rav from './assets/images/rav-removebg-preview1.png';
import hafel from './assets/images/hafel-removebg-preview1.png';

export const GroupsData = [
  {
    id: 1,
    groupName: "اسلیترین",
    description:
      "دانش آموزانی که وارد گروه اسلیترین می‌شوند از ویژگی‌های مدبربودن، جاه‌طلبی،غرور،خودمراقبتی،مصمم بودن و زیرکی برخوردار هستند. ",
    img: S,
    btn: "#1d7452",
    founder: "سالازار اسلیترین",
    animal: "مار",
    element: "آب",
    color: "سبز و نقره‌ای",
    soul: "باران خونین",
    room: "سیاه چال اسلیترین",
    teacher: "پرفسور سوروس اسنیپ",
    teacherImg:
      slyth,
    text: ` همان طور که گفته شد، این گروه رقابت شدیدی با گریفیندور دارد. سالازار اسلیترین باور داشت که فقط دانش آموزان با خون خالص جادوگری باید وارد مدرسه شوند در حالی که دیگر پایه گذاران، به ویژه گودریک گریفیندور، چنین باوری را قبول نداشتند. برای همین هم اکثر جادوگران جوان با خون خالص توسط کلاه گروه بندی در گروه اسلیترین قرار می‌گیرند.

از پرآوازه‌ترین افرادی که در گروه اسلیترین عضو شده‌اند می‌توان به تام ریدل (بعدها ولدمورت)، سوروس اسنیپ، دراکو مالفوی، بلاتریکس لسترینج، مرلین و آلبوس سوروس پاتر اشاره کرد.`,
  },

  {
    id: 2,
    groupName: "گریفندور",
    description:
      "گروه گریفیندور گروهی است که به دنبال دانش آموزان با ویژگی‌های شجاعت، دلیری، مصمم بودن، جرأت داشتن، قوی دل و جوانمردی می‌گردد. ",
    img: G,
    btn: "#a81945",
    founder: "گودریک گریفیندور",
    animal: "شیر",
    element: "آتش",
    color: "سرخ و طلایی ",
    soul: "نیک بی‌سر",
    room: "برج گریفیندور  ",
    teacher: " پرفسور منیروا مک گونگال",
    teacherImg:
      grif,
    text: `این گروه با گروه اسلیترین یک رقابت شدید دارد و ریشه آن را می‌توان در ماجرای پایه گذاران هر گروه دنبال کرد؛ چرا که گودریک گریفیندور و سالازار اسلیترین در مورد ماهیت مدرسه هاگوارتز با یکدیگر به مشکل خورده بودند.

از پرآوازه‌ترین افرادی که در گروه گریفیندور عضو شده‌اند می‌توان به هری پاتر، هرماینی گرنجر، ران ویزلی، آلبوس دامبلدور، مینروا مک‌گونگال، و سیریوس بلک اشاره کرد.`,
  },
  {
    id: 3,
    groupName: "ریونکلاو",
    description:
      ",سومین گروه, گروه ریونکلا به دنبال دانش آموزان با خلاقیت، علاقه‌مند به یادگیری، هوشمندی، مدارا کننده، زیرکی و دارای دانش بود.",
    img: H,
    btn: "#fee58b",
    founder: " روونا ریونکلا",
    animal: "عقاب",
    element: "هوا",
    color: " آبی و برنزی ",
    soul: " بانوی خاکستری",
    room: "برج ریونکلا   ",
    teacher: "پرفسور فلیوس‌فلیت‌ویک",
    teacherImg:
      rav,
    text: `معمولاً دانش آموزان گروه ریونکلا افراد درون‌گرایی بودند که کم‌تر ویژگی‌های اجتماعی از خود نشان می‌دادند. همچنین برخی از آن‌ها آن قدر تشنه موفقیت بودند که حتی به دیگر دانش آموزان خیانت نیز می‌کنند تا به هدف خود برسند. با این وجود در بین کسانی که عضو گروه ریونکلا شده‌اند می‌توان افرادی را یافت که برای مدتی مورد زورگویی قرار گرفته‌اند ولی در نهایت توانسته‌اند خودشان در به عنوان بهترین در زمینه‌ای اثبات کنند.

از پرآوازه‌ترین افرادی که در گروه ریونکلا عضو شده‌اند می‌توان به فیلیوس فلیت‌ویک، گیلدوری لاک‌هارت، لونا لاوگوود، گریک الیوندر و میلیسنت بگنولد اشاره کرد.`,
  },
  {
    id: 4,
    groupName: "هافلپاف",
    description:
      "دانش آموزان با ویژگی‌های عدالت مداری، سخت کوشی، وفاداری، فروتنی، بردباری و منصف بودن به گروه هافلپاف می‌پیوستند. ",
    img: R,
    btn: "#96b5d4",
    founder: "  هلگا هافلپاف",
    animal: "گورکن",
    element: "زمین",
    color: " زرد و سیاه  ",
    soul: " راهب چاق ",
    room: "زیرزمین هافلپاف   ",
    teacher: " پرفسور پمونا اسپراوت",
    teacherImg:
      hafel,
    text: `گروه هافلپاف جامع‌ترین گروه در بین ۴ گروه هاگوارتز به نظر می‌رسد؛ حتی این باور وجود دارد که دانش آموزانی که به این گروه فرستاده می‌شوند در واقع کسانی هستند که از هیچ کدام از ویژگی‌های به خصوص ۳ گروه دیگر برخوردار نیستند. ولی با این وجود دانش آموزانی که راه به گروه هافلپاف باز می‌کنند بیش از هر چیزی خوش رفتار هستند و در انتخاب درست و اشتباه بهتر از هر فرد دیگری عمل می‌کنند. همچنین گروه هافلپاف معمولاً کم‌ترین رقابت را با دیگر گروه‌ها از خود نشان می‌دهند و با بقیه گروه‌ها به صورت یکسان ارتباط برقرار می‌کنند.

از پرآوازه‌ترین افرادی که در گروه هافلپاف عضو شده‌اند می‌توان به نیوت اسکمندر، سدریک دیگوری، پومونا اسپراوت، هانا ابوت، بریگت ونلاک و هنگیس از وودکرافت اشاره کرد.`,
  },
];


export let serials = [
  {
    id: 1,
    title: "هری پاتر و سنگ جادو",
    episod: `۱`,
    link: `https://www.aparat.com/v/tYeoa`,
    img: `https://afarinak.com/media/cache/83/9a/839a5d6208317208068d9b1315ee60ac.jpg`,
  },
  {
    id: 2,
    title: "هری پاتر و تالار اسرار",
    episod: `۲`,
    link: `https://www.aparat.com/v/qOcGR`,
    img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiOTx0As1YJNFRbk3rZUl1-XoCsmpOzW5OEfJxudZkcyXqsVVqwmNq4pThaKUp837Mms&usqp=CAU`,
  },
  {
    id: 3,
    title: "هری پاتر و سنگ جادو",
    episod: `۳`,
    link: `https://www.aparat.com/v/cAEez`,
    img: `https://doostihaa.com/img/uploads/2014/10/Harry-Potter-and-the-Prisoner-of-Azkaban-2004.jpg`,
  },
  {
    id: 4,
    title: "هری پاتر و جام آتش",
    episod: `۴`,
    link: `https://www.aparat.com/v/xYcpw`,
    img: `https://doostihaa.com/img/uploads/2014/10/Harry-Potter-and-the-Goblet-of-Fire-2005.jpg`,
  },
  {
    id: 5,
    title: "هری پاتر و محفل ققنوس",
    episod: `۵`,
    link: `https://www.aparat.com/v/spuxH`,
    img: `https://static.cdn.asset.filimo.com/flmt/mov_5393_1-b.jpg?width=800&quality=85&secret=0Xi9zRWpXF6GsngG0Kz4zA`,
  },
  {
    id: 6,
    title: "هری پاتر و شاهزاده دو رگه",
    episod: `6`,
    link: `https://www.aparat.com/v/cPlKm`,
    img: `https://img.enama.ir/Video/Get/1280/720/3626223/4342427`,
  },
  {
    id: 7,
    title: " هری پاتر و یادگاران مرگ ۱",
    episod: `۷`,
    link: `https://www.aparat.com/v/DreSk`,
    img: `https://doostihaa.com/img/uploads/2014/10/Harry-Potter-and-the-Deathly-Hallows-Part-1-2010.jpg`,
  },
  {
    id: 8,
    title: "هری پاتر و یادگاران مرگ ۲",
    episod: `۸`,
    link: `https://www.aparat.com/v/8xbf3`,
    img: `https://upload.wikimedia.org/wikipedia/fa/9/96/Deathly-hallows-p2-1.jpg`,
  },
];

let CharactersData = [
  {
    id: 0,
    title: "هری جیمز پاتر",
    img: harryPotter,
  },
  {
    id: 1,
    title: "هرماینی جین گرنجر",
    img: Herminy,
  },
  {
    id: 2,
    title: "ران ویزلی",
    img: ron,
  },
  {
    id: 3,
    title: " آلبوس دامبلدور",
    img: dombeldor,
  },
  {
    id: 4,
    title: "روبیوس هاگرید",
    img: hogrid,
  },
  {
    id: 5,
    title: "سوروس سنپ",
    img: severous,
  },
  {
    id: 6,
    title: "ولدمورت",
    img: voldermort,
  },
  {
    id: 7,
    title: "دراکو مالفوی",
    img: draco,
  },
  {
    id: 8,
    title: "دابی",
    img: dobby,
  },
];

export default CharactersData
