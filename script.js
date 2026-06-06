// Sample blog posts data
const blogPosts = [
    {
        id: 1,
        title: "开始我的博客之旅",
        date: "2026-06-06",
        excerpt: "今天我终于启动了我的个人博客。这是一个记录我学习和思考的地方。希望通过这个博客能够与更多人分享我的想法。",
        emoji: "🚀"
    },
    {
        id: 2,
        title: "Web开发最佳实践",
        date: "2026-06-05",
        excerpt: "在这篇文章中，我将分享我在Web开发中学到的一些最佳实践。包括代码组织、性能优化和用户体验设计。",
        emoji: "💻"
    },
    {
        id: 3,
        title: "JavaScript深度探索",
        date: "2026-06-04",
        excerpt: "让我们深入了解JavaScript的一些高级特性。包括闭包、原型链、异步编程等内容。",
        emoji: "⚡"
    },
    {
        id: 4,
        title: "CSS动画技巧",
        date: "2026-06-03",
        excerpt: "通过CSS创建精美的动画效果可以大大提升用户体验。在这篇文章中我将展示一些实用的技巧。",
        emoji: "✨"
    },
    {
        id: 5,
        title: "响应式设计入门",
        date: "2026-06-02",
        excerpt: "响应式设计是现代Web开发的必备技能。学会如何创建在所有设备上都能完美显示的网站。",
        emoji: "📱"
    },
    {
        id: 6,
        title: "Git版本控制完全指南",
        date: "2026-06-01",
        excerpt: "掌握Git对于任何开发者来说都至关重要。本文将介绍Git的基本概念和高级用法。",
        emoji: "🔧"
    }
];

// Function to render blog posts
function renderBlogPosts() {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = '';
    
    blogPosts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            <div class="post-image">${post.emoji}</div>
            <div class="post-content">
                <h3 class="post-title">${post.title}</h3>
                <p class="post-date">${formatDate(post.date)}</p>
                <p class="post-excerpt">${post.excerpt}</p>
            </div>
        `;
        postsContainer.appendChild(postCard);
    });
}

// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('zh-CN', options);
}

// Function to handle navigation link clicks
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Smooth scroll to section
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Function to update active nav link on scroll
function updateNavOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderBlogPosts();
    setupNavigation();
    updateNavOnScroll();
});