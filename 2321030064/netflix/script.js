var danhSachPhim = [
        {
        id: 1,
        ten: "Nhà Bà Nữ",
        duongDanYoutube: "https://www.youtube.com/embed/uZKa7Pcquec?si=Rb8tnXbx0-SUN6Bq"
    },
    {
        id: 2,
        ten: "Mưa Đỏ",
        duongDanYoutube: "https://www.youtube.com/embed/cu0JFCxqXzc?si=ETPGOnWn24q_5p5B"
    },
    {
        id: 3,
        ten: "Mai",
        duongDanYoutube: "https://www.youtube.com/embed/gAxteW7CulI?si=B7MptDHuSGp0KHGR"
    },
    {
        id: 4,
        ten: "Đào, Phở Và Piano",
        duongDanYoutube: "https://www.youtube.com/embed/7GHTMU6UfcY?si=HppMcprnOVry227B"
    },
    {
        id: 5,
        ten: "Em Và Trịnh",
        duongDanYoutube: "https://www.youtube.com/embed/IosqnBOkk2I?si=Xr9oZXUARQ7XD8Td"
    },
];
        
    
function chonPhim(id){
        for (let i= 0; i < danhSachPhim.length; i++){
            if(danhSachPhim[i].id ==id){
                document.getElementsByClassName("video")[0].src =danhSachPhim[i].duongDanYoutube
            }
        }
    }