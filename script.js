document.getElementById('menu-button').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    
	// 切换侧边栏显示状态
	if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px'; // 隐藏侧边栏
	} else {
        sidebar.style.left = '0'; // 显示侧边栏
	}
});

// 使用 Fetch API 获取 README.md 内容并插入到页面中。
fetch('./README.md')
.then(response => response.text())
.then(data => {
	document.getElementById('readme-content').textContent = data;

	const searchResults = document.getElementById('search-results');
	const lines = data.split('\n');

	lines.forEach((line, index) => {		
	    if(line.trim()) {	
	        const li = document.createElement('li');		
	        li.textContent = line.trim();		
	        li.addEventListener('click', () => {			
	            window.scrollTo(0, index * lineHeight); // 根据行高滚动到相应位置			
            });		
            searchResults.appendChild(li);	
	    }	
	});
})
.catch(error => console.error(error));
