// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation to elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all post cards
document.querySelectorAll('.post-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Vui lòng điền đầy đủ thông tin!');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Đang gửi...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Blog post data
const blogPosts = {
    1: {
        title: "Xu Hướng Công Nghệ 2025: Những Điều Bạn Cần Biết",
        date: "20 Tháng 7, 2025",
        category: "Công Nghệ",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
        content: `
            <p>Năm 2025 đánh dấu một bước ngoặt quan trọng trong lĩnh vực công nghệ với sự phát triển vượt bậc của nhiều xu hướng mới. Trong bài viết này, chúng ta sẽ khám phá những xu hướng công nghệ quan trọng nhất sẽ định hình tương lai.</p>

            <h2>1. Trí Tuệ Nhân Tạo Generative</h2>
            <p>AI Generative đã và đang thay đổi cách chúng ta làm việc, sáng tạo và giải quyết vấn đề. Từ việc tạo ra nội dung, hình ảnh đến code, AI đang trở thành công cụ không thể thiếu trong nhiều lĩnh vực.</p>

            <blockquote>
                "AI không thay thế con người, mà giúp con người làm việc hiệu quả hơn và sáng tạo hơn."
            </blockquote>

            <h2>2. Web3 và Blockchain</h2>
            <p>Công nghệ blockchain đang tiếp tục phát triển với các ứng dụng thực tế trong nhiều lĩnh vực:</p>
            <ul>
                <li>Tài chính phi tập trung (DeFi)</li>
                <li>NFT và nghệ thuật số</li>
                <li>Hợp đồng thông minh</li>
                <li>Quản lý chuỗi cung ứng</li>
            </ul>

            <h2>3. Internet of Things (IoT)</h2>
            <p>IoT đang mở rộng từ các thiết bị thông minh đơn lệ đến hệ sinh thái kết nối toàn diện. Smart cities, smart homes và industrial IoT đang trở thành hiện thực.</p>

            <h3>Ứng dụng của IoT:</h3>
            <ol>
                <li>Nhà thông minh tự động hóa</li>
                <li>Nông nghiệp thông minh</li>
                <li>Y tế từ xa</li>
                <li>Quản lý giao thông thông minh</li>
            </ol>

            <h2>4. Quantum Computing</h2>
            <p>Máy tính lượng tử đang bước vào giai đoạn thương mại hóa với khả năng giải quyết các bài toán phức tạp mà máy tính truyền thống không thể xử lý.</p>

            <pre><code>// Ví dụ về quantum algorithm cơ bản
function quantumSearch(database) {
    // Grover's algorithm implementation
    let qubits = initializeQubits(database.length);
    let iterations = Math.floor(Math.PI / 4 * Math.sqrt(database.length));
    
    for (let i = 0; i < iterations; i++) {
        applyGroverIteration(qubits);
    }
    
    return measureResult(qubits);
}</code></pre>

            <h2>Kết Luận</h2>
            <p>Những xu hướng công nghệ này không chỉ là các khái niệm tương lai mà đang trở thành hiện thực trong cuộc sống hàng ngày. Việc hiểu và theo kịp những xu hướng này sẽ giúp chúng ta chuẩn bị tốt hơn cho tương lai số.</p>
        `
    },
    2: {
        title: "Học JavaScript Hiệu Quả Cho Người Mới Bắt Đầu",
        date: "18 Tháng 7, 2025",
        category: "Lập Trình",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop",
        content: `
            <p>JavaScript là ngôn ngữ lập trình phổ biến nhất hiện nay và là chìa khóa để trở thành một web developer. Trong bài viết này, tôi sẽ chia sẻ roadmap học JavaScript hiệu quả cho người mới bắt đầu.</p>

            <h2>Tại Sao Nên Học JavaScript?</h2>
            <p>JavaScript không chỉ chạy trên trình duyệt mà còn có thể sử dụng để:</p>
            <ul>
                <li>Phát triển web frontend (React, Vue, Angular)</li>
                <li>Phát triển backend (Node.js)</li>
                <li>Phát triển mobile app (React Native)</li>
                <li>Phát triển desktop app (Electron)</li>
            </ul>

            <h2>Roadmap Học JavaScript</h2>
            
            <h3>1. Nền Tảng Cơ Bản</h3>
            <p>Trước khi học JavaScript, bạn cần nắm vững:</p>
            <ul>
                <li>HTML - Cấu trúc trang web</li>
                <li>CSS - Styling và layout</li>
                <li>Tư duy lập trình cơ bản</li>
            </ul>

            <h3>2. JavaScript Core Concepts</h3>
            <p>Những khái niệm cốt lõi cần học:</p>

            <pre><code>// Variables và Data Types
let name = "John";
const age = 25;
var isStudent = true;

// Functions
function greetUser(name) {
    return "Hello, " + name + "!";
}

// Objects và Arrays
const person = {
    name: "Alice",
    age: 30,
    hobbies: ["reading", "coding", "gaming"]
};

// Loops và Conditions
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}</code></pre>

            <h3>3. DOM Manipulation</h3>
            <p>Học cách tương tác với HTML elements:</p>

            <pre><code>// Selecting elements
const button = document.getElementById('myButton');
const items = document.querySelectorAll('.item');

// Event handling
button.addEventListener('click', function() {
    alert('Button clicked!');
});

// Modifying content
document.getElementById('title').textContent = 'New Title';</code></pre>

            <h3>4. Asynchronous JavaScript</h3>
            <p>Hiểu về callbacks, promises và async/await:</p>

            <pre><code>// Promises
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Async/Await
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}</code></pre>

            <h2>Tips Học Hiệu Quả</h2>
            
            <blockquote>
                "Code every day, even if it's just 30 minutes. Consistency is key to mastering programming."
            </blockquote>

            <ol>
                <li><strong>Practice Daily:</strong> Viết code mỗi ngày, dù chỉ 30 phút</li>
                <li><strong>Build Projects:</strong> Áp dụng kiến thức vào các dự án thực tế</li>
                <li><strong>Read Code:</strong> Đọc code của người khác để học patterns</li>
                <li><strong>Debug Actively:</strong> Học cách debug và xử lý lỗi</li>
                <li><strong>Join Communities:</strong> Tham gia cộng đồng để học hỏi</li>
            </ol>

            <h2>Resources Hữu Ích</h2>
            <ul>
                <li>MDN Web Docs - Documentation chính thức</li>
                <li>JavaScript.info - Tutorial toàn diện</li>
                <li>freeCodeCamp - Khóa học miễn phí</li>
                <li>Codecademy - Interactive learning</li>
                <li>YouTube channels: Traversy Media, The Net Ninja</li>
            </ul>

            <h2>Kết Luận</h2>
            <p>Học JavaScript cần thời gian và kiên nhẫn, nhưng với roadmap rõ ràng và thực hành đều đặn, bạn sẽ thành thạo ngôn ngữ này. Hãy bắt đầu từ những khái niệm cơ bản và dần dần nâng cao kỹ năng.</p>
        `
    },
    3: {
        title: "Thiết Kế Web Responsive: Bí Quyết Thành Công",
        date: "15 Tháng 7, 2025",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
        content: `
            <p>Trong thời đại mobile-first, thiết kế web responsive không còn là lựa chọn mà đã trở thành yêu cầu bắt buộc. Bài viết này sẽ chia sẻ những nguyên tắc và kỹ thuật để tạo ra website responsive hoàn hảo.</p>

            <h2>Tại Sao Responsive Design Quan Trọng?</h2>
            <p>Với hơn 60% lượng truy cập web đến từ mobile devices, responsive design giúp:</p>
            <ul>
                <li>Cải thiện user experience trên mọi thiết bị</li>
                <li>Tăng SEO ranking (Google ưu tiên mobile-friendly sites)</li>
                <li>Giảm bounce rate và tăng conversion</li>
                <li>Tiết kiệm chi phí phát triển (một site cho tất cả thiết bị)</li>
            </ul>

            <h2>Mobile-First Approach</h2>
            <p>Bắt đầu thiết kế từ mobile screen rồi mở rộng lên desktop:</p>

            <pre><code>/* Mobile-first CSS */
.container {
    width: 100%;
    padding: 0 15px;
}

.grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        max-width: 750px;
        margin: 0 auto;
    }
    
    .grid {
        flex-direction: row;
        flex-wrap: wrap;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
    }
}</code></pre>

            <h2>Flexible Grid Systems</h2>
            <p>Sử dụng CSS Grid và Flexbox để tạo layout linh hoạt:</p>

            <pre><code>/* CSS Grid Layout */
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
}

/* Flexbox Layout */
.flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
}

.flex-item {
    flex: 1 1 300px;
    margin: 1rem;
}</code></pre>

            <h3>Breakpoints Strategy</h3>
            <p>Chọn breakpoints dựa trên content, không phải thiết bị cụ thể:</p>

            <pre><code>/* Common breakpoints */
/* Extra small devices */
@media (max-width: 575px) { }

/* Small devices */
@media (min-width: 576px) { }

/* Medium devices */
@media (min-width: 768px) { }

/* Large devices */
@media (min-width: 992px) { }

/* Extra large devices */
@media (min-width: 1200px) { }</code></pre>

            <h2>Responsive Images</h2>
            <p>Tối ưu hóa hình ảnh cho mọi thiết bị:</p>

            <pre><code>/* CSS responsive images */
img {
    max-width: 100%;
    height: auto;
}

/* HTML responsive images */
&lt;picture&gt;
    &lt;source media="(min-width: 768px)" 
            srcset="large-image.jpg"&gt;
    &lt;source media="(min-width: 480px)" 
            srcset="medium-image.jpg"&gt;
    &lt;img src="small-image.jpg" alt="Description"&gt;
&lt;/picture&gt;</code></pre>

            <h2>Typography Responsive</h2>
            <p>Font sizes và line spacing cần thay đổi theo screen size:</p>

            <pre><code>/* Fluid typography */
html {
    font-size: 16px;
}

h1 {
    font-size: clamp(1.5rem, 4vw, 3rem);
    line-height: 1.2;
}

p {
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    line-height: 1.6;
}

/* Media query approach */
@media (max-width: 768px) {
    h1 { font-size: 1.8rem; }
    p { font-size: 0.9rem; }
}</code></pre>

            <h2>Touch-Friendly Design</h2>
            <p>Thiết kế phù hợp với touch interfaces:</p>

            <blockquote>
                "Kích thước tối thiểu cho touch targets là 44px x 44px theo guidelines của Apple."
            </blockquote>

            <pre><code>/* Touch-friendly buttons */
.button {
    min-height: 44px;
    min-width: 44px;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

/* Hover states for non-touch devices */
@media (hover: hover) {
    .button:hover {
        background-color: #0066cc;
        transform: translateY(-2px);
    }
}</code></pre>

            <h2>Performance Optimization</h2>
            <ol>
                <li><strong>Lazy Loading:</strong> Load images khi cần thiết</li>
                <li><strong>Critical CSS:</strong> Inline CSS quan trọng</li>
                <li><strong>Minimize HTTP Requests:</strong> Gộp files CSS/JS</li>
                <li><strong>Optimize Images:</strong> Sử dụng WebP format</li>
                <li><strong>Enable Compression:</strong> Gzip/Brotli compression</li>
            </ol>

            <h2>Testing Tools</h2>
            <ul>
                <li>Chrome DevTools Device Mode</li>
                <li>BrowserStack cho real device testing</li>
                <li>Google Mobile-Friendly Test</li>
                <li>PageSpeed Insights</li>
                <li>Responsive Design Checker</li>
            </ul>

            <h2>Common Pitfalls</h2>
            <ul>
                <li>Fixed width elements</li>
                <li>Quá nhỏ touch targets</li>
                <li>Horizontal scrolling</li>
                <li>Slow loading images</li>
                <li>Không test trên real devices</li>
            </ul>

            <h2>Kết Luận</h2>
            <p>Responsive web design là một skill cần thiết cho mọi web developer. Bằng cách áp dụng mobile-first approach, sử dụng flexible layouts và tối ưu hóa performance, bạn có thể tạo ra những website hoạt động mượt mà trên mọi thiết bị.</p>
        `
    },
    4: {
        title: "10 Mẹo Làm Việc Hiệu Quả Khi Work From Home",
        date: "12 Tháng 7, 2025",
        category: "Kinh Nghiệm",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
        content: `
            <p>Work from home đã trở thành xu hướng phổ biến, nhưng để làm việc hiệu quả tại nhà không phải là điều dễ dàng. Sau 3 năm làm việc remote, tôi muốn chia sẻ những bí quyết giúp duy trì năng suất cao và cân bằng cuộc sống.</p>

            <h2>1. Tạo Không Gian Làm Việc Riêng Biệt</h2>
            <p>Một workspace chuyên dụng giúp não bộ chuyển đổi sang "work mode":</p>
            <ul>
                <li>Chọn góc yên tĩnh, có ánh sáng tự nhiên</li>
                <li>Đầu tư bàn ghế ergonomic</li>
                <li>Loại bỏ những thứ gây phân tâm</li>
                <li>Trang trí không gian theo sở thích cá nhân</li>
            </ul>

            <blockquote>
                "Your environment shapes your mindset. A dedicated workspace signals to your brain that it's time to focus and be productive."
            </blockquote>

            <h2>2. Xây Dựng Routine Hàng Ngày</h2>
            <p>Thói quen giúp tạo cảm giác bình thường như đi làm:</p>
            <ol>
                <li>Thức dậy cùng giờ mỗi ngày</li>
                <li>Tập thể dục buổi sáng</li>
                <li>Ăn sáng và uống coffee</li>
                <li>"Commute" đến workspace (dù chỉ từ phòng ngủ ra phòng khách)</li>
                <li>Bắt đầu ngày với task quan trọng nhất</li>
            </ol>

            <h2>3. Sử dụng Kỹ Thuật Pomodoro</h2>
            <p>Chia công việc thành các khoảng thời gian tập trung:</p>
            
            <pre><code>// Pomodoro timer JavaScript
class PomodoroTimer {
    constructor() {
        this.workTime = 25 * 60; // 25 minutes
        this.breakTime = 5 * 60; // 5 minutes
        this.isWorking = true;
        this.timeLeft = this.workTime;
    }
    
    start() {
        this.interval = setInterval(() => {
            this.timeLeft--;
            this.updateDisplay();
            
            if (this.timeLeft === 0) {
                this.switchMode();
            }
        }, 1000);
    }
    
    switchMode() {
        this.isWorking = !this.isWorking;
        this.timeLeft = this.isWorking ? this.workTime : this.breakTime;
        this.playNotification();
    }
}</code></pre>

            <h2>4. Quản Lý Thời Gian Hiệu Quả</h2>
            <p>Time blocking và prioritization:</p>
            
            <h3>Công Cụ Quản Lý Thời Gian:</h3>
            <ul>
                <li><strong>Calendar blocking:</strong> Schedule cụ thể cho từng task</li>
                <li><strong>Todoist/Notion:</strong> Task management</li>
                <li><strong>RescueTime:</strong> Theo dõi thời gian sử dụng</li>
                <li><strong>Focus apps:</strong> Block social media</li>
            </ul>

            <h3>Eisenhower Matrix:</h3>
            <ul>
                <li><strong>Urgent + Important:</strong> Làm ngay</li>
                <li><strong>Important + Not Urgent:</strong> Schedule</li>
                <li><strong>Urgent + Not Important:</strong> Delegate</li>
                <li><strong>Not Urgent + Not Important:</strong> Eliminate</li>
            </ul>

            <h2>5. Giao Tiếp Hiệu Quả Với Team</h2>
            <p>Over-communication là chìa khóa khi làm việc remote:</p>
            
            <ul>
                <li>Daily standup qua video call</li>
                <li>Update tiến độ thường xuyên</li>
                <li>Sử dụng collaboration tools (Slack, Teams)</li>
                <li>Ghi chép meeting notes chi tiết</li>
                <li>Set expectation rõ ràng về availability</li>
            </ul>

            <h2>6. Dress for Success</h2>
            <p>Trang phục ảnh hưởng đến tâm lý làm việc:</p>
            <ul>
                <li>Không làm việc trong đồ ngủ</li>
                <li>Mặc quần áo "proper" dù ở nhà</li>
                <li>Chuẩn bị sẵn outfit cho video calls</li>
                <li>Personal grooming vẫn quan trọng</li>
            </ul>

            <h2>7. Chăm Sóc Sức Khỏe</h2>
            
            <h3>Sức Khỏe Thể Chất:</h3>
            <ul>
                <li>Đứng dậy và di chuyển mỗi 30 phút</li>
                <li>Tập thể dục ít nhất 30 phút/ngày</li>
                <li>Uống đủ nước (2-3 lít/ngày)</li>
                <li>Ăn uống đều đặn, không skip meals</li>
            </ul>

            <h3>Sức Khỏe Tinh Thần:</h3>
            <ul>
                <li>Meditation 10-15 phút/ngày</li>
                <li>Giới hạn news/social media</li>
                <li>Duy trì kết nối xã hội</li>
                <li>Có hobbies ngoài công việc</li>
            </ul>

            <h2>8. Thiết Lập Boundaries</h2>
            <blockquote>
                "When you work from home, it's easy for work to take over your entire life. Setting boundaries is crucial for mental health."
            </blockquote>

            <ul>
                <li>Định giờ bắt đầu và kết thúc làm việc</li>
                <li>Tắt notifications sau giờ làm</li>
                <li>Có separate accounts cho work và personal</li>
                <li>Communicate boundaries với family/roommates</li>
            </ul>

            <h2>9. Minimize Distractions</h2>
            <p>Strategies để maintain focus:</p>
            
            <ul>
                <li>Phone ở silent mode hoặc khác phòng</li>
                <li>Website blockers (Cold Turkey, Freedom)</li>
                <li>Noise-cancelling headphones</li>
                <li>Background music hoặc white noise</li>
                <li>Inform household về working hours</li>
            </ul>

            <h2>10. Continuous Learning & Development</h2>
            <p>Invest trong skill development:</p>
            
            <ul>
                <li>Online courses (Udemy, Coursera)</li>
                <li>Virtual conferences và webinars</li>
                <li>Reading technical blogs</li>
                <li>Side projects để practice</li>
                <li>Networking qua LinkedIn/Twitter</li>
            </ul>

            <h2>Bonus Tips</h2>
            
            <h3>Tech Setup:</h3>
            <ul>
                <li>Stable internet connection (backup plan)</li>
                <li>Good webcam và microphone</li>
                <li>External monitor để increase productivity</li>
                <li>Ergonomic keyboard và mouse</li>
            </ul>

            <h3>End-of-Day Ritual:</h3>
            <ol>
                <li>Review ngày hôm nay</li>
                <li>Plan cho ngày mai</li>
                <li>Tidy up workspace</li>
                <li>Shutdown computer</li>
                <li>Change clothes để signal end of workday</li>
            </ol>

            <h2>Kết Luận</h2>
            <p>Work from home thành công đòi hỏi discipline, organization và self-awareness. Không có one-size-fits-all solution, hãy thử nghiệm và tìm ra method phù hợp với bản thân. Remember: productivity không chỉ về việc làm nhiều hơn, mà làm thông minh hơn.</p>

            <p>Quan trọng nhất là maintain work-life balance. WFH không có nghĩa là work 24/7. Hãy enjoy flexibility này và tạo ra lifestyle sustainable cho long-term success.</p>
        `
    }
};

// Load post content for detail page
function loadPostDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    if (postId && blogPosts[postId]) {
        const post = blogPosts[postId];
        
        // Update page title
        document.title = post.title + ' - My Blog';
        
        // Update post header
        const postHeader = document.querySelector('.post-header h1');
        if (postHeader) {
            postHeader.textContent = post.title;
        }
        
        // Update post meta
        const postMeta = document.querySelector('.post-detail-meta');
        if (postMeta) {
            postMeta.innerHTML = `
                <span class="post-date"><i class="far fa-calendar"></i> ${post.date}</span>
                <span class="post-category">${post.category}</span>
            `;
        }
        
        // Update post content
        const postContent = document.querySelector('.post-detail-content');
        if (postContent) {
            postContent.innerHTML = post.content;
        }
        
        // Update featured image if exists
        const featuredImage = document.querySelector('.post-featured-image');
        if (featuredImage) {
            featuredImage.src = post.image;
            featuredImage.alt = post.title;
        }
    }
}

// Initialize page based on current page
document.addEventListener('DOMContentLoaded', function() {
    // Load post detail if on post detail page
    if (window.location.pathname.includes('post-detail.html')) {
        loadPostDetail();
    }
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
});

// Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
`;

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.opacity = '1';
    } else {
        backToTopButton.style.opacity = '0';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
