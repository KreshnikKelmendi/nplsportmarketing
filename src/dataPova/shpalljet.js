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

const shpalljet = [
    {
        id: 12,
        title: "Shofer / Furnizues",
        date: "04 Gusht 2024",
        name: "",
        photo: image5,
        pdfFile: shoferFurniues,
        deklarata: file9,
        aplikacioni: file8
    },
    {
        id: 11,
        title: "Këshilltar i përgjithshëm / Sekretar",
        date: "26 Gusht 2024",
        name: "",
        photo: image5,
        pdfFile: sekretar,
        deklarata: file9,
        aplikacioni: file8
    },
    {
        id: 10,
        title: "Zyrtar Kryesor Financiar dhe i Thesarit",
        date: "26 Gusht 2024",
        name: "",
        photo: image5,
        pdfFile: zkth,
        deklarata: file9,
        aplikacioni: file8
    },
    {
        id: 9,
        title: "Vendim i emërimit të Kryeshefit Ekzekutiv",
        date: "07 Gusht 2024",
        name: "",
        photo: image5,
        pdfFile: kryeshefi,
    },
    {
        id: 8,
        title: "Lista përfundimtare për vendin e punës",
        date: "31 Korrik 2024",
        name: "Kryeshef Ekzekutiv",
        photo: image5,
        pdfFile: kryeshef,
    },
    {
        id: 7,
        title: "KONKURS PUBLIK",
        date: "08 Korrik 2024",
        name: "Kryeshef Ekzekutiv",
        photo: image5,
        pdfFile: file7,
        deklarata: file9,
        aplikacioni: file8
    },
    {
        id:6,
        title: "NJOFTIM PËR KOMPANINË FITUESE",
        date: "10 Qershor 2024",
        name: "MENAXHIMI I PISHINËS DHE SHËRBIMET HOTELIERE NË PISHINËN E GËRMISË NË PRISHTINË",
        photo: image4,
        pdfFile: file6
    },
    {
        id:5,
        title: "RISHPALLJE KËRKESË PËR OFERTIM",
        date: "30 Maj 2024",
        name: "MENAXHIMI I PISHINËS DHE SHËRBIMET HOTELIERE NË PISHINËN E GËRMISË NË PRISHTINË",
        photo: image4,
        pdfFile: file5
    },
    {
        id:4,
        title: "NJOFTIM PËR TËRHEQJE TË OPERATORIT EKONOMIK",
        date: "30 Maj 2024",
        name: "MENAXHIMI I PISHINËS DHE SHËRBIMET HOTELIERE NË PISHINËN E GËRMISË NË PRISHTINË",
        photo: image4,
        pdfFile: file4
    },
    {
        id:3,
        title: "NJOFTIM PËR KOMPANINË FITUESE",
        date: "28 Maj 2024",
        name: "MENAXHIMI I PISHINËS DHE SHËRBIMET HOTELIERE NË PISHINËN E GËRMISË NË PRISHTINË",
        photo: image1,
        pdfFile: file3
    },
    {
        id:2,
        title: "NJOFTIM PËR SHTYERJE TË AFATIT PËR APLIKIM",
        date: "20 Maj 2024",
        name: "MENAXHIMI I PISHINËS DHE SHËRBIMET HOTELIERE NË PISHINËN E GËRMISË NË PRISHTINË",
        photo: image1,
        pdfFile: file2
    },
    {
        id:1,
        title: "KËRKESË PËR OFERTIM",
        date: "15 Maj 2024",
        name: "MENAXHIMI I PISHINËS DHE SHËRBIMET HOTELIERE NË PISHINËN E GËRMISË NË PRISHTINË",
        photo: image1,
        pdfFile: file1
    }
]

export { shpalljet }