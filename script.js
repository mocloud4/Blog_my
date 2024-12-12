const articles = [
    {
        title: "文章标题1",
        link: "/posts/1.html",
        image: "https://i-blog.csdnimg.cn/blog_migrate/8ebd29b7c9714ba777501cb0c04bf21d.png",
        description: "这是文章1的简介..."
    },
    {
        title: "文章标题2",
        link: "#",
        description: "这是文章2的简介..."
    }
    // 可以添加更多文章对象
];

const searchInput = document.getElementById('search');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';
    
    if (query) {
        const filteredArticles = articles.filter(article => 
            article.title.toLowerCase().includes(query)
        );

        if (filteredArticles.length > 0) {
            filteredArticles.forEach(article => {
                const resultItem = document.createElement('div');
                resultItem.innerHTML = `
                    <h3><a href="${article.link}">${article.title}</a></h3>
                    <img src="${article.image}" alt="${article.title}">
                    <p>${article.description}</p>
                `;
                searchResults.appendChild(resultItem);
            });
            searchResults.classList.remove('hidden');
        } else {
            searchResults.innerHTML = '<p>没有搜索到结果呦/(ㄒoㄒ)/~~</p>';
            searchResults.classList.remove('hidden');
        }
    } else {
        searchResults.classList.add('hidden');
    }
});

// 点击空白区域特效
document.addEventListener('click', (event) => {
    if (!event.target.closest('header')) {
        // 获取点击位置
        const x = event.clientX;
        const y = event.clientY;

        // 创建光束元素
        const ray = document.createElement('div');
        ray.classList.add('ray');
        ray.style.left = `${x}px`;
        ray.style.top = `${y}px`;

        // 将光束添加到 body 并在一段时间后移除
        document.body.appendChild(ray);
        setTimeout(() => {
            ray.remove();
        }, 1000); // 1秒后移除光束
    }
});
