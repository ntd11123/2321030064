var danhSachBaiHat = [
        {
            id:1,
            ten: "Nếu em còn tồn tại",
            duongDanAnh:"nectt.jpg" ,
            duongDanYoutube:"https://www.youtube.com/embed/1Zn4L7vi9gg?si=VKiudE0E3pNUyIFt"

        },
        {
            id:2,
            ten: "mưa trong lòng",
            duongDanAnh:"mtl.jpg" ,
            duongDanYoutube:"https://www.youtube.com/embed/YWyuzXyLg68?si=S9XnF2W2m4LHt46m"
        },
        {
            id:3,
            ten: "=Thất Tình",
            duongDanAnh:"thattinh.jpg" ,
            duongDanYoutube:"https://www.youtube.com/embed/FSeGrBw5eFA?si=2LkiE-00crXRGyaf"
        },
        {
            id:4,
            ten: "Buồn Lắm em ơi",
            duongDanAnh:"bleo.jpg" ,
            duongDanYoutube:"https://www.youtube.com/embed/GG24j6KtLLk?si=gEp8dvGNnZhlPnC7"
        },
        {
            id:5,
            ten: "Kẻ Say Tình",
            duongDanAnh:"kst.jpg" ,
            duongDanYoutube:"https://www.youtube.com/embed/l4Pkem30Q60?si=qpHrcpZTnjN0TqQG"
        },
        
    ];
    
function chonBai(id){
    for (let i=0;i < danhSachBaiHat.length; i++)
        if(danhSachBaiHat[i].id == id){
            document.getElementsByClassName("video")[0].src =danhSachBaiHat[i].duongDanYoutube;
        }

}
        