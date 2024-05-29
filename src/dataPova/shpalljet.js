import image1 from "../img/pishina-e-germise.jpg";
import file1 from "../img/shpallje_-_oferte_per_hapesirat_ne_pishine_-_final (1).pdf"
import file2 from "../img/Njoftim per shtyerje te afatit per aplikim.pdf"
import file3 from "../img/Njoftimi per kompanine fituese te tenderit 2022 1.pdf"

const shpalljet = [
    {
        id:3,
        title: "NJOFTIM PËR KOMPANINË FITUESE",
        date: "28 Maj 2024",
        name: "MENAXHIMI I PISHINES DHE SHËRBIMET HOTELIERE NË PISHINËN E GËRMISË NË PRISHTINË",
        photo: image1,
        pdfFile: file3
    },
    {
        id:2,
        title: "NJOFTIM PËR SHTYERJE TË AFATIT PËR APLIKIM",
        date: "20 Maj 2024",
        name: "MENAXHIMI I PISHINES DHE SHËRBIMET HOTELIERE NË PISHINËN E GËRMISË NË PRISHTINË",
        photo: image1,
        pdfFile: file2
    },
    {
        id:1,
        title: "KËRKESË PËR OFERTIM",
        date: "15 Maj 2024",
        name: "MENAXHIMI I PISHINES DHE SHËRBIMET HOTELIERE NË PISHINËN E GËRMISË NË PRISHTINË",
        photo: image1,
        pdfFile: file1
    }
]

export { shpalljet }