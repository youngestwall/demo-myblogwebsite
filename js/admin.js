// Blog Management System - Professional CMS
class BlogManager {
    constructor() {
        this.posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        this.init();
    }

    init() {
        this.loadPosts();
        this.updateStatistics();
        this.setupEventListeners();
        this.loadSampleData();
    }

    setupEventListeners() {
        const form = document.getElementById('postForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.savePost();
            });
        }
    }

    loadSampleData() {
        if (this.posts.length === 0) {
            const samplePosts = [
                {
                    id: Date.now() + 1,
                    title: "Khởi đầu hành trình AI và Machine Learning",
                    category: "🤖 AI & Machine Learning",
                    excerpt: "Tìm hiểu những kiến thức cơ bản về AI và ML, từ lý thuyết đến thực hành với Python và TensorFlow.",
                    content: `
                        <h2>🚀 Giới thiệu về AI và Machine Learning</h2>
                        <p>Trí tuệ nhân tạo (AI) và Học máy (Machine Learning) đang thay đổi thế giới một cách mạnh mẽ. Trong bài viết này, chúng ta sẽ cùng khám phá những khái niệm cơ bản và cách bắt đầu học tập hiệu quả.</p>
                        
                        <h3>📚 Các khái niệm cơ bản</h3>
                        <ul>
                            <li><strong>Artificial Intelligence (AI):</strong> Khả năng máy tính mô phỏng trí thông minh con người</li>
                            <li><strong>Machine Learning (ML):</strong> Phương pháp dạy máy tính học từ dữ liệu</li>
                            <li><strong>Deep Learning:</strong> Mạng neural sâu mô phỏng não bộ con người</li>
                        </ul>
                        
                        <h3>🛠️ Công cụ và ngôn ngữ</h3>
                        <p>Để bắt đầu với AI/ML, bạn cần học:</p>
                        <ul>
                            <li><strong>Python:</strong> Ngôn ngữ phổ biến nhất cho AI/ML</li>
                            <li><strong>TensorFlow/PyTorch:</strong> Framework cho Deep Learning</li>
                            <li><strong>Scikit-learn:</strong> Thư viện ML cơ bản</li>
                            <li><strong>Jupyter Notebook:</strong> Môi trường phát triển tương tác</li>
                        </ul>
                        
                        <h3>🎯 Lộ trình học tập</h3>
                        <ol>
                            <li>Nắm vững Python cơ bản</li>
                            <li>Học toán: Linear Algebra, Statistics, Calculus</li>
                            <li>Thực hành với dataset đơn giản</li>
                            <li>Xây dựng project thực tế</li>
                        </ol>
                        
                        <p><em>Hành trình học AI/ML cần kiên trì và thực hành liên tục. Hãy bắt đầu ngay hôm nay!</em></p>
                    `,
                    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
                    date: new Date().toLocaleDateString('vi-VN'),
                    createdAt: Date.now()
                },
                {
                    id: Date.now() + 2,
                    title: "Modern Web Development với React và Next.js",
                    category: "💻 Web Development", 
                    excerpt: "Khám phá các công nghệ web hiện đại với React, Next.js và TypeScript để xây dựng ứng dụng web mạnh mẽ.",
                    content: `
                        <h2>⚡ Web Development hiện đại</h2>
                        <p>Công nghệ web phát triển không ngừng. Hôm nay chúng ta sẽ tìm hiểu về React và Next.js - những công cụ mạnh mẽ nhất cho frontend development.</p>
                        
                        <h3>🔥 Tại sao chọn React?</h3>
                        <ul>
                            <li><strong>Component-based:</strong> Tái sử dụng code hiệu quả</li>
                            <li><strong>Virtual DOM:</strong> Performance tối ưu</li>
                            <li><strong>Ecosystem mạnh:</strong> Rất nhiều thư viện hỗ trợ</li>
                            <li><strong>Community lớn:</strong> Hỗ trợ và tài liệu phong phú</li>
                        </ul>
                        
                        <h3>🚀 Next.js - Framework tuyệt vời</h3>
                        <p>Next.js mang đến những tính năng cao cấp:</p>
                        <ul>
                            <li><strong>Server-Side Rendering (SSR)</strong></li>
                            <li><strong>Static Site Generation (SSG)</strong></li>
                            <li><strong>API Routes tích hợp</strong></li>
                            <li><strong>Automatic code splitting</strong></li>
                            <li><strong>Built-in CSS support</strong></li>
                        </ul>
                        
                        <h3>💡 Best Practices</h3>
                        <pre><code>// Component tái sử dụng
const Button = ({ children, onClick, variant = 'primary' }) => {
  return (
    &lt;button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
    &gt;
      {children}
    &lt;/button&gt;
  );
};</code></pre>
                        
                        <p>Kết hợp React + Next.js + TypeScript sẽ cho bạn một stack development cực kỳ mạnh mẽ!</p>
                    `,
                    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
                    date: new Date().toLocaleDateString('vi-VN'),
                    createdAt: Date.now() + 1000
                }
            ];

            this.posts = samplePosts;
            this.savePosts();
        }
    }

    savePost() {
        const title = document.getElementById('postTitle').value.trim();
        const category = document.getElementById('postCategory').value;
        const excerpt = document.getElementById('postExcerpt').value.trim();
        const image = document.getElementById('postImage').value.trim();
        
        // Get content from Quill editor if available, otherwise from textarea
        let content = '';
        if (window.quill) {
            content = window.quill.root.innerHTML;
            // Update hidden textarea
            document.getElementById('postContent').value = content;
        } else {
            content = document.getElementById('postContent').value.trim();
        }

        if (!title || !category || !excerpt || !content || content === '<p><br></p>') {
            this.showToast('❌ Vui lòng điền đầy đủ thông tin!', 'error');
            return;
        }

        const post = {
            id: Date.now(),
            title,
            category,
            excerpt,
            content,
            image: image || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop',
            date: new Date().toLocaleDateString('vi-VN'),
            createdAt: Date.now()
        };

        this.posts.unshift(post);
        this.savePosts();
        this.loadPosts();
        this.updateStatistics();
        this.clearForm();
        this.showToast('✅ Bài viết đã được lưu thành công!');
        
        // Clear draft after successful save
        localStorage.removeItem('blogDraft');
    }

    editPost(id) {
        const post = this.posts.find(p => p.id === id);
        if (!post) return;

        document.getElementById('postTitle').value = post.title;
        document.getElementById('postCategory').value = post.category;
        document.getElementById('postExcerpt').value = post.excerpt;
        document.getElementById('postImage').value = post.image;
        
        // Load content into Quill editor if available
        if (window.quill) {
            window.quill.root.innerHTML = post.content;
            document.getElementById('postContent').value = post.content;
        } else {
            document.getElementById('postContent').value = post.content;
        }

        // Remove old post and scroll to editor
        this.deletePost(id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.showToast('📝 Bài viết đã được tải để chỉnh sửa');
    }

    deletePost(id) {
        if (confirm('🗑️ Bạn có chắc muốn xóa bài viết này?')) {
            this.posts = this.posts.filter(post => post.id !== id);
            this.savePosts();
            this.loadPosts();
            this.updateStatistics();
            this.showToast('🗑️ Đã xóa bài viết thành công');
        }
    }

    clearAllPosts() {
        if (confirm('⚠️ Bạn có chắc muốn xóa TẤT CẢ bài viết? Hành động này không thể hoàn tác!')) {
            this.posts = [];
            this.savePosts();
            this.loadPosts();
            this.updateStatistics();
            this.showToast('🗑️ Đã xóa tất cả bài viết');
        }
    }

    loadPosts() {
        const container = document.getElementById('postsList');
        if (!container) return;

        if (this.posts.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                    <i class="fas fa-folder-open" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                    <p>Chưa có bài viết nào. Hãy tạo bài viết đầu tiên!</p>
                </div>
            `;
            return;
        }

        const postsHTML = this.posts.map(post => `
            <div class="post-item" data-id="${post.id}">
                <div class="post-info">
                    <h4>${this.escapeHtml(post.title)}</h4>
                    <p>
                        <span style="background: rgba(102, 126, 234, 0.1); color: var(--primary-color); padding: 0.2rem 0.6rem; border-radius: 15px; font-size: 0.8rem; font-weight: 500;">
                            ${post.category}
                        </span>
                        · ${post.date}
                    </p>
                </div>
                <div class="post-actions">
                    <button onclick="blogManager.editPost(${post.id})" class="btn btn-secondary btn-small">
                        <i class="fas fa-edit"></i>
                        Sửa
                    </button>
                    <button onclick="blogManager.deletePost(${post.id})" class="btn btn-secondary btn-small" style="color: #dc3545;">
                        <i class="fas fa-trash"></i>
                        Xóa
                    </button>
                </div>
            </div>
        `).join('');

        container.innerHTML = postsHTML;
    }

    updateStatistics() {
        const totalPosts = this.posts.length;
        const categories = [...new Set(this.posts.map(post => post.category))].length;
        const lastUpdate = this.posts.length > 0 ? 
            new Date(Math.max(...this.posts.map(p => p.createdAt))).toLocaleDateString('vi-VN') : 
            '-';

        document.getElementById('totalPosts').textContent = totalPosts;
        document.getElementById('totalCategories').textContent = categories;
        document.getElementById('lastUpdate').textContent = lastUpdate;
        document.getElementById('postCount').textContent = `${totalPosts} bài viết`;
    }

    previewPost() {
        const title = document.getElementById('postTitle').value.trim();
        const category = document.getElementById('postCategory').value;
        const image = document.getElementById('postImage').value.trim();
        
        // Get content from Quill editor if available, otherwise from textarea
        let content = '';
        if (window.quill) {
            content = window.quill.root.innerHTML;
        } else {
            content = document.getElementById('postContent').value.trim();
        }

        if (!title || !content || content === '<p><br></p>') {
            this.showToast('❌ Cần có tiêu đề và nội dung để xem trước', 'error');
            return;
        }

        const previewHTML = `
            <div class="post-preview">
                ${image ? `<img src="${image}" alt="${this.escapeHtml(title)}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px; margin-bottom: 1rem;">` : ''}
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 1rem;">
                    ${category ? `<span style="background: rgba(102, 126, 234, 0.1); color: var(--primary-color); padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.8rem; font-weight: 600;">${category}</span>` : ''}
                    <span style="color: var(--text-secondary); font-size: 0.9rem;">${new Date().toLocaleDateString('vi-VN')}</span>
                </div>
                <h1 style="margin: 0 0 1rem 0; color: var(--text-primary); font-size: 1.5rem; line-height: 1.3;">${this.escapeHtml(title)}</h1>
                <div class="content-preview" style="color: var(--text-primary); line-height: 1.6;">
                    ${content}
                </div>
            </div>
        `;

        document.getElementById('previewArea').innerHTML = previewHTML;
        this.showToast('👁️ Preview đã được cập nhật');
    }

    clearForm() {
        document.getElementById('postForm').reset();
        
        // Clear Quill editor if available
        if (window.quill) {
            window.quill.setContents([]);
            document.getElementById('postContent').value = '';
        }
        
        // Reset template buttons
        document.querySelectorAll('.template-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        document.getElementById('previewArea').innerHTML = `
            <p style="text-align: center; color: var(--text-secondary); font-style: italic;">
                Nhấn "Xem trước" để preview bài viết của bạn
            </p>
        `;
        
        // Clear draft
        localStorage.removeItem('blogDraft');
    }

    exportBlog() {
        const blogData = {
            posts: this.posts,
            exported: new Date().toISOString(),
            version: '1.0.0'
        };

        const dataStr = JSON.stringify(blogData, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `blog-backup-${new Date().toISOString().split('T')[0]}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
        
        this.showToast('📦 Blog đã được export thành công!');
    }

    savePosts() {
        localStorage.setItem('blogPosts', JSON.stringify(this.posts));
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        
        toastMessage.textContent = message;
        
        if (type === 'error') {
            toast.style.background = 'linear-gradient(135deg, #ff6b6b, #ff5252)';
        } else {
            toast.style.background = 'var(--primary-gradient)';
        }
        
        // Show toast
        toast.style.transform = 'translateX(0)';
        
        // Hide after 3 seconds
        setTimeout(() => {
            toast.style.transform = 'translateX(400px)';
        }, 3000);
    }
}

// Global functions for inline event handlers
window.previewPost = function() {
    blogManager.previewPost();
};

window.clearAllPosts = function() {
    blogManager.clearAllPosts();
};

window.exportBlog = function() {
    blogManager.exportBlog();
};

// Initialize blog manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.blogManager = new BlogManager();
});

// Auto-save draft every 30 seconds
setInterval(() => {
    const title = document.getElementById('postTitle')?.value;
    let content = '';
    
    // Get content from Quill editor if available
    if (window.quill) {
        content = window.quill.root.innerHTML;
    } else {
        content = document.getElementById('postContent')?.value;
    }
    
    if (title || (content && content !== '<p><br></p>')) {
        const draft = {
            title: title || '',
            category: document.getElementById('postCategory')?.value || '',
            excerpt: document.getElementById('postExcerpt')?.value || '',
            content: content || '',
            image: document.getElementById('postImage')?.value || '',
            lastSaved: Date.now()
        };
        
        localStorage.setItem('blogDraft', JSON.stringify(draft));
    }
}, 30000);

// Load draft on page load
window.addEventListener('load', () => {
    const draft = localStorage.getItem('blogDraft');
    if (draft) {
        const draftData = JSON.parse(draft);
        const lastSaved = new Date(draftData.lastSaved);
        const now = new Date();
        
        // Load draft if it's less than 24 hours old
        if (now - lastSaved < 24 * 60 * 60 * 1000) {
            if (confirm('📝 Có bản nháp chưa hoàn thành. Bạn muốn tiếp tục viết?')) {
                document.getElementById('postTitle').value = draftData.title;
                document.getElementById('postCategory').value = draftData.category;
                document.getElementById('postExcerpt').value = draftData.excerpt;
                document.getElementById('postContent').value = draftData.content;
                document.getElementById('postImage').value = draftData.image;
            }
        }
    }
});
