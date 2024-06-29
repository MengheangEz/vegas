document.getElementsByClassName('header')[0].innerHTML = `
<header class="w-full bg-black">
        <div class="max-w-6xl mx-auto flex flex-wrap justify-between items-center bg-[#0A0A0A] py-3 px-3">
            <div class="max-md:w-full flex justify-between">
                <div class="md:hidden flex">
                    <button class="text-white font-medium rounded-lg text-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>
                <div id="drawer-navigation" class="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
                    <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close menu</span>
                    </button>
                    <div class="py-4 overflow-y-auto mt-5">
                        <ul class="space-y-2 font-medium text-[#8A8A8A]">
                            <li>
                                <a href="../index.html" class="flex items-center p-2 hover:bg-gray-100 border-b dark:hover:bg-gray-700 group">    
                                    <span class="ms-3"><i class="fa-solid fa-house-chimney px-1 mx-3"></i>TRANG CHỦ</span>
                                </a>
                            </li>
                            <li>
                                <a href="../houngdan/houngdan.html" class="flex items-center p-2 hover:bg-gray-100 border-b dark:hover:bg-gray-700 group">
                                    <span class="flex-1 ms-3 whitespace-nowrap text-center">HƯỚNG DẪN</span>
                                </a>
                            </li>
                            <li>
                                <a href="../casino/casino.html" class="flex gap-9 items-center p-2 hover:bg-gray-100 border-b dark:hover:bg-gray-700 group">
                                    <span class="flex-1 flex ms-3 whitespace-nowrap"><img class="w-[25px] mx-3" src="../img/icon-casino.png" alt=""> LIVE CASINO</span>
                                </a>
                            </li>
                            <li>
                                <a href="../gameslot/gameslot.html" class="flex items-center p-2 hover:bg-gray-100 border-b dark:hover:bg-gray-700 group">
                                    <span class="flex-1 flex ms-3 whitespace-nowrap"><img class="w-[25px] mx-3" src="../img/icon-slot-game.png" alt="">GAME SLOT</span>
                                </a>
                            </li>
                            <li>
                                <a href="../banca/banca.html" class="flex items-center p-2 hover:bg-gray-100 border-b dark:hover:bg-gray-700 group">
                                    <span class="flex-1 flex ms-3 whitespace-nowrap"><img class="w-[25px] mx-3" src="../img/icon-ban-ca.png" alt="">BANCA28</span>
                                </a>
                            </li>
                            <li>
                                <a href="../lode/lode.html" class="flex items-center p-2 hover:bg-gray-100 border-b dark:hover:bg-gray-700 group">
                                    <span class="flex-1 flex ms-3 whitespace-nowrap"><img class="w-[25px] mx-3" src="../img/icon-xo-so.png" alt="">LÔ ĐỀ</span>
                                </a>
                            </li>
                            <li>
                                <a href="../thethao/thethao.html" class="flex items-center p-2 hover:bg-gray-100 border-b dark:hover:bg-gray-700 group">
                                    <span class="flex-1 flex ms-3 whitespace-nowrap"><img class="w-[25px] mx-3" src="../img/icon-the-thao.png" alt="">THỂ THAO</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <a href="../index.html"><img class="w-[200px]" src="../img/logo.png" alt=""></a>
                <span class="md:hidden"></span>
            </div>
            <div class="text-white max-md:w-full md:block hidden">
                <a class="bg-[#B20000] py-2 px-4 rounded-[50px] font-bold hover:bg-[#8E0000] mx-2" href="https://www.hay88.one/?inviteCode=3765773">ĐĂNG KÝ + 79K</a>
                <a class="bg-[#B20000] py-2 px-4 rounded-[50px] font-bold hover:bg-[#8E0000]" href="https://www.hay88.one/?inviteCode=3765773">ĐĂNG NHẬP</a>
            </div>
        </div>
        <div class="max-w-6xl mx-auto flex-wrap items-center bg-white justify-center gap-9 py-3 hidden md:flex">
            <a href="../index.html"><i class="fa-solid fa-house-chimney px-1"></i>TRANG CHỦ</a>
            <a href="../houngdan/houngdan.html">HƯỚNG DẪN</a>
            <a class="flex gap-2" href="../casino/casino.html"><img class="w-[25px]" src="../img/icon-casino.png" alt="">LIVE CASINO</a>
            <a class="flex gap-2" href="../gameslot/gameslot.html\"><img class="w-[25px]" src="../img/icon-slot-game.png" alt="">GAME SLOT</a>
            <a class="flex gap-2" href="../banca/banca.html"><img class="w-[25px]" src="../img/icon-ban-ca.png" alt="">BANCA28</a>
            <a class="flex gap-2" href="../lode/lode.html"><img class="w-[25px]" src="../img/icon-xo-so.png" alt="">LÔ ĐỀ</a>
            <a class="flex gap-2" href="../thethao/thethao.html"><img class="w-[25px]" src="../img/icon-the-thao.png" alt="">THỂ THAO</a>
        </div>
        <div class="text-white max-md:w-full md:hidden flex bg-white justify-center py-2">
            <a class="bg-[#B20000] py-2 px-4 rounded-[50px] font-bold hover:bg-[#8E0000] mx-2" href="https://www.hay88.one/?inviteCode=3765773">ĐĂNG KÝ + 79K</a>
            <a class="bg-[#B20000] py-2 px-4 rounded-[50px] font-bold hover:bg-[#8E0000]" href="https://www.hay88.one/?inviteCode=3765773">ĐĂNG NHẬP</a>
        </div>
    </header>
`

document.getElementsByClassName('footer')[0].innerHTML = `
<div class="container mx-auto bg-white max-w-6xl">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t px-10 mb-16 gap-10">
        <div class="mt-6">
            <h4 class="font-bold text-lg">CHUYÊN MỤC VEGAS79</h4>
            <div class="mt-8">
                <a class="text-[#DD3D33] hover:text-black" href="../index.html">Trang Chủ</a>
            </div>
            <p class="mt-5">Thể Thao Vegas79</p>
            <p class="mt-5">Xổ Số Vegas79</p>
            <p class="mt-5">Hướng Dẫn Vegas79</p>
            <p class="mt-5">Liên Hệ Vegas79</p>
            <p class="mt-5">Điều Khoản Điều Kiện</p>
            <p class="mt-5">Tin Tức Về Sản Phẩm</p>
        </div>
        <div class="mt-6">
            <h4 class="font-bold text-lg">GIỚI THIỆU VEGAS79</h4>
            <div class="mt-8">
                <img src="../img/logo.png" alt="">
            </div>
            <p class="mt-5">Vegas79 là một trong những thương hiệu cá cược vô cùng quen thuộc trên thị trường cá cược Việt Nam trong những năm gần đây. Đơn vị ra đời nhằm mục đích mang đến những trải nghiệm giải trí cá cược thú vị dành cho anh em cược thủ.</p>
            <p class="mt-5">Nhà cái <a class="text-[#DD3D33] hover:text-black font-bold" href="">C54</a> đối tác uy tín và nhiều khuyến mãi mỗi ngày khi gia nhập.</p>
        </div>
        <div class="mt-6">
            <h4 class="font-bold text-lg">HÌNH THỨC THANH TOÁN</h4>
            <div class="mt-8">
                <img src="../img/icon-partner.png" alt="">
            </div>
        </div>
        <div class="mt-6">
            <h4 class="font-bold text-lg">THÔNG TIN LIÊN HỆ VEGAS79</h4>
            <p class="mt-5">Brand: Vegas79</p>
            <p class="mt-5">Web: https://vegas79.work</p>
        </div>
    </div>
    <div class="border-t">
        <div class="mt-20 flex justify-center">
            <a class="mb-5" href=""><img src="../img/dmca_protected_sml_120m.png" alt=""></a>
        </div>
    </div>
</div>
`

document.getElementsByClassName('side-page')[0].innerHTML = `
<div class="mt-5 px-2 py-5">
                <p class="font-bold">CHUYÊN MỤC BÀI VIẾT</p>
                <div class="grid grid-cols-3 mt-10 gap-5">
                    <div class="mt-4">
                        <img src="../houngdan/img/1.jpg" alt="">
                    </div>
                    <div class="col-span-2 mt-4">
                        <a class="text-[#DD338F] hover:text-black" href="../houngdan/extra1.html">Hướng Dẫn Cách Đọc Kèo Bóng Đá Chính Xác Tại Vegas79</a>
                    </div>
                    <div class="mt-4">
                        <img src="../casino/img/1.jpg" alt="">
                    </div>
                    <div class="col-span-2 mt-4">
                        <a class="text-[#DD338F] hover:text-black" href="../casino/extra1.html">Đá Gà Online – Kinh Nghiệm Chơi Đá Gà Online Tại Vegas79</a>
                    </div>
                    <div class="mt-4">
                        <img src="../gameslot/img/1.jpg" alt="">
                    </div>
                    <div class="col-span-2 mt-4">
                        <a class="text-[#DD338F] hover:text-black" href="../gameslot/gameslot.html">Game Slot – Cách Chơi Lựa Chọn Game Slot Phù Hợp Tại Vegas79</a>
                    </div>
                    <div class="mt-4">
                        <img src="../banca/img/1.jpg" alt="">
                    </div>
                    <div class="col-span-2 mt-4">
                        <a class="text-[#DD338F] hover:text-black" href="../banca/banca.html">Banca28 – Sảnh Game Bắn Cá Hiện Đại Nhất Tại Nhà Cái Vegas79</a>
                    </div>
                    <div class="mt-4">
                        <img src="../lode/img/1.jpg" alt="">
                    </div>
                    <div class="col-span-2 mt-4">
                        <a class="text-[#DD338F] hover:text-black" href="../lode/extra1.html">Soi Cầu Lô Đề Vegas79 – Trang web soi cầu lô đề hàng đầu tại việt nam</a>
                    </div>
                    <div class="mt-4">
                        <img src="../thethao/img/1.jpg" alt="">
                    </div>
                    <div class="col-span-2 mt-4">
                        <a class="text-[#DD338F] hover:text-black" href="../thethao/extra1.html">Hướng Dẫn Cách Đọc Kèo Bóng Đá Chính Xác Tại Vegas79</a>
                    </div>
                </div>
            </div>
`

// script.js
window.onscroll = function() {makeHeaderSticky()};

var header = document.querySelector(".header");
var sticky = header.offsetTop;

function makeHeaderSticky() {
    if (window.pageYOffset > 200) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky");
    }
} 
