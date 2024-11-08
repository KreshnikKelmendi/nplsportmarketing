import image1 from "../img/pishina-e-germise.jpg";
import image4 from "../img/ger7.jpg"
import image5 from "../img/14logo.png"
import file1 from "../img/shpallje_-_oferte_per_hapesirat_ne_pishine_-_final (1).pdf"
import file2 from "../img/Njoftim per shtyerje te afatit per aplikim.pdf"
import file3 from "../img/Njoftimi per kompanine fituese te tenderit 2022 1.pdf"
import file4 from "../img/NJOFTIM.pdf"
import file5 from "../img/rishpallje_-_oferte_per_hapesirat_ne_pishine_-_final (1).pdf"
import file6 from "../img/Njoftimi per kompanine fituese te tenderit.pdf"
import file7 from "../img/KONKURSI PER KRYESHEF 2024.pdf"
import file8 from "../img/Aplikacioni-Sport-Marketing.docx"
import file9 from "../img/DeklarataNenBetim.doc"
import kryeshef from "../img/Lista perfundimtare per konkursin e shpallur me dt. 08.07.2024.pdf"
import kryeshefi from "../img/emerimi KE 2024.pdf"
import zkth from "../img/ZKF1.pdf"
import sekretar from "../img/Sekretari1.pdf"
import shoferFurniues from "../img/Konkurs per shofer-furnizues.pdf"
import file10 from "../img/Njoftim per shtyrje te afatit te konkursit.pdf"
import file11 from "../img/Njoftim-25 shtator 2024.pdf"
import file12 from "../img/sekretari rishpallje.pdf"
import file13 from "../img/NR.225-02.10.2024-NJOFIM PER LISTEN PERFUNDIMTARE TE TESTIT ME GOJE-INTERVISTA PER ZKFTH.pdf"
import file14 from "../img/KËRKESË PËR OFERTIM - PËR BASHKË MENAXHIMIN E TREGUT VEROR DHE DIMËROR.pdf"
import file15 from "../img/NR.239-11.10.2024-VENDIM PER PERZGJEDHJEN E KANDIDATIT ME TE SUKSESSHEM SHOFER-FURNIZUES.pdf"
import file16 from "../img/NR.243-17.10.2024-VENDIM PER EMERIMIN E ZYRTARIT KRYESOR FINANCIAR DHE I THESARIT ISMET PACOLLI.pdf"
import file17 from "../img/Njoftim per thirrjen publike.pdf"
import file18 from "../img/NR.252-21.10.2024-VENDIM PER ANULIMIN E KONKURSIT TE RISHPALLUR PER KESHILLTAR TE PERGJITHSHEM-SEKRETAR.pdf"
import file19 from "../img/Njoftim per kompanine fituese per bashkmenaxhim te tregut verore dhe dimeror.pdf"
import file20 from "../img/Thirrja per aplikim per tregun e fundvitit (3).pdf"

const shpalljet = [
    {
        id: 23,
        title: "NJOFTIM",
        date: "08 NËNTOR 2024",
        name: `NPL Sport Marketing SH.A., në bashkëpunim me Operatorin Ekonomik, shpall thirrjen publike për aplikime në tregun dimëror "Verë N’Dimën".`,
        photo: image5,
        pdfFile: file20,
    },
    {
        id: 22,
        title: "NJOFTIM",
        date: "25 TETOR 2024",
        name: `NPL Sport Marketing SH.A. Njoftim per shpalljen e  kompanise fituese per bashkmenaxhimin e tregut veror dhe dimeror. `,
        photo: image5,
        pdfFile: file19,
    },
    {
        id: 21,
        title: "NJOFTIM",
        date: "21 TETOR 2024",
        name: `Vendimi për anulimin e konkursit të rishpallur për pozitën Këshilltar i Pergjithshëm/ Sekretar`,
        photo: image5,
        pdfFile: file18,
    },
    {
        id: 20,
        title: "NJOFTIM",
        date: "18 TETOR 2024",
        name: `Njoftim për kompaninë fituese në thirrjen publike: PËR BASHKË MENAXHIMIN E TREGUT VEROR DHE DIMËROR "VERË N'DIMËR" DHE "AKULL N'VERË"`,
        photo: image5,
        pdfFile: file17,
    },
    {
        id: 19,
        title: "VENDIM",
        date: "17 TETOR 2024",
        name: `Vendim për emërimin e Zyrtarit Kryesor Financiar dhe i Thesarit`,
        photo: image5,
        pdfFile: file16,
    },
    {
        id: 18,
        title: "VENDIM",
        date: "11 TETOR 2024",
        name: `PËR PËRZGJEDHJEN E KANDIDATIT MË TË SUKSESSHËM PËR POZITËN SHOFER / FURNIZUES`,
        photo: image5,
        pdfFile: file15,
    },
    {
        id: 17,
        title: "KËRKESË PËR OFERTIM",
        date: "04 TETOR 2024",
        name: `PËR BASHKË MENAXHIMIN E TREGUT VEROR DHE DIMËROR "VERË N'DIMËR" DHE "AKULL N'VERË""`,
        photo: image5,
        pdfFile: file14,
    },
    {
        id: 16,
        title: "Lista përfundimtare e pikëve të intervistes për pozitën Zyrtar Kryesor Financiar dhe i Thesarit në NPL Sport Marketing SH.A.",
        date: "02 TETOR 2024",
        name: "",
        photo: image5,
        pdfFile: file13,
    },
    {
        id: 15,
        title: "Rishpallje e konkursit për Këshilltar të Përgjithshëm / Sekretar.",
        date: "26 SHTATOR 2024",
        name: "",
        photo: image5,
        pdfFile: file12,
        deklarata: file9,
        aplikacioni: file8
    },
    {
        id: 14,
        title: "Anulohet konkursi Keshilltar i Pergjithshem /Sekretar ne NPL Sport Marketing SH.A.",
        date: "25 SHTATOR 2024",
        name: "",
        photo: image5,
        pdfFile: file11,
    },
    {
        id: 13,
        title: "Shtyhet afati për aplikim për konkursin e shpallur Këshilltar i përgjithshem / sekretar",
        date: "11 SHTATOR 2024",
        name: "",
        photo: image5,
        pdfFile: file10,
        deklarata: file9,
        aplikacioni: file8
    },
    {
        id: 12,
        title: "Shofer / Furnizues",
        date: "04 SHTATOR 2024",
        name: "",
        photo: image5,
        pdfFile: shoferFurniues,
        deklarata: file9,
        aplikacioni: file8
    },
    {
        id: 11,
        title: "Këshilltar i përgjithshëm / Sekretar",
        date: "26 GUSHT 2024",
        name: "",
        photo: image5,
        pdfFile: sekretar,
        deklarata: file9,
        aplikacioni: file8
    },
    {
        id: 10,
        title: "Zyrtar Kryesor Financiar dhe i Thesarit",
        date: "26 GUSHT 2024",
        name: "",
        photo: image5,
        pdfFile: zkth,
        deklarata: file9,
        aplikacioni: file8
    },
    {
        id: 9,
        title: "Vendim i emërimit të Kryeshefit Ekzekutiv",
        date: "07 GUSHT 2024",
        name: "",
        photo: image5,
        pdfFile: kryeshefi,
    },
    {
        id: 8,
        title: "Lista përfundimtare për vendin e punës",
        date: "31 KORRIK 2024",
        name: "Kryeshef Ekzekutiv",
        photo: image5,
        pdfFile: kryeshef,
    },
    {
        id: 7,
        title: "KONKURS PUBLIK",
        date: "08 KORRIK 2024",
        name: "Kryeshef Ekzekutiv",
        photo: image5,
        pdfFile: file7,
        deklarata: file9,
        aplikacioni: file8
    },
    {
        id:6,
        title: "NJOFTIM PËR KOMPANINË FITUESE",
        date: "10 QERSHOR 2024",
        name: "MENAXHIMI I PISHINËS DHE SHËRBIMET HOTELIERE NË PISHINËN E GËRMISË NË PRISHTINË",
        photo: image4,
        pdfFile: file6
    },
    {
        id:5,
        title: "RISHPALLJE KËRKESË PËR OFERTIM",
        date: "30 MAJ 2024",
        name: "MENAXHIMI I PISHINËS DHE SHËRBIMET HOTELIERE NË PISHINËN E GËRMISË NË PRISHTINË",
        photo: image4,
        pdfFile: file5
    },
    {
        id:4,
        title: "NJOFTIM PËR TËRHEQJE TË OPERATORIT EKONOMIK",
        date: "30 MAJ 2024",
        name: "MENAXHIMI I PISHINËS DHE SHËRBIMET HOTELIERE NË PISHINËN E GËRMISË NË PRISHTINË",
        photo: image4,
        pdfFile: file4
    },
    {
        id:3,
        title: "NJOFTIM PËR KOMPANINË FITUESE",
        date: "28 MAJ 2024",
        name: "MENAXHIMI I PISHINËS DHE SHËRBIMET HOTELIERE NË PISHINËN E GËRMISË NË PRISHTINË",
        photo: image1,
        pdfFile: file3
    },
    {
        id:2,
        title: "NJOFTIM PËR SHTYERJE TË AFATIT PËR APLIKIM",
        date: "20 MAJ 2024",
        name: "MENAXHIMI I PISHINËS DHE SHËRBIMET HOTELIERE NË PISHINËN E GËRMISË NË PRISHTINË",
        photo: image1,
        pdfFile: file2
    },
    {
        id:1,
        title: "KËRKESË PËR OFERTIM",
        date: "15 MAJ 2024",
        name: "MENAXHIMI I PISHINËS DHE SHËRBIMET HOTELIERE NË PISHINËN E GËRMISË NË PRISHTINË",
        photo: image1,
        pdfFile: file1
    }
]

export { shpalljet }