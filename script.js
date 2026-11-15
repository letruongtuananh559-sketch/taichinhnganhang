// Lấy các phần tử DOM giao diện
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const subjectModal = document.getElementById('subjectModal');

const openLoginBtn = document.getElementById('openLoginBtn');
const openRegisterBtn = document.getElementById('openRegisterBtn');

const closeLogin = document.getElementById('closeLogin');
const closeRegister = document.getElementById('closeRegister');
const closeSubject = document.getElementById('closeSubject');

const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');

const modalSubjectTitle = document.getElementById('modalSubjectTitle');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// Xử lý sự kiện mở Modal Đăng Nhập
openLoginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

// Xử lý sự kiện mở Modal Đăng Ký
openRegisterBtn.addEventListener('click', () => {
    registerModal.style.display = 'flex';
});

// Đóng các Modal khi bấm dấu nhân (X)
closeLogin.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

closeRegister.addEventListener('click', () => {
    registerModal.style.display = 'none';
});

closeSubject.addEventListener('click', () => {
    subjectModal.style.display = 'none';
});

// Chuyển đổi qua lại giữa form Đăng Nhập và Đăng Ký
switchToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'none';
    registerModal.style.display = 'flex';
});

switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.style.display = 'none';
    loginModal.style.display = 'flex';
});

// Đóng modal khi bấm vào vùng nền tối bên ngoài
window.addEventListener('click', (e) => {
    if (e.target === loginModal) loginModal.style.display = 'none';
    if (e.target === registerModal) registerModal.style.display = 'none';
    if (e.target === subjectModal) subjectModal.style.display = 'none';
});

// Hàm mở Modal Chi Tiết Môn Học khi người dùng bấm vào xem bài tập
function openSubjectModal(subjectName) {
    modalSubjectTitle.innerText = subjectName;
    subjectModal.style.display = 'flex';
}

// Xử lý sự kiện gửi form Đăng nhập / Đăng ký (Giả lập thông báo thành công)
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Đăng nhập thành công vào hệ thống FinBank Hub!');
    loginModal.style.display = 'none';
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Đăng ký tài khoản sinh viên thành công! Vui lòng đăng nhập.');
    registerModal.style.display = 'none';
    loginModal.style.display = 'flex';
});

// Chức năng tìm kiếm môn học tự động lọc danh sách
searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const filter = searchInput.value.toLowerCase().trim();
    const subjectCards = document.querySelectorAll('.subject-card');

    let foundCount = 0;
    subjectCards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        const desc = card.querySelector('p').innerText.toLowerCase();

        if (title.includes(filter) || desc.includes(filter)) {
            card.style.display = 'block';
            foundCount++;
        } else {
            card.style.display = 'none';
        }
    });

    if (filter !== '') {
        console.log(`Tìm thấy ${foundCount} kết quả cho từ khóa: "${filter}"`);
    }
}