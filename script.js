document.addEventListener('DOMContentLoaded', function() {
  // 设置当前年份
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // 移动端菜单切换
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav');
  
  if (menuBtn) {
    menuBtn.addEventListener('click', function() {
      nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
      this.classList.toggle('active');
    });
  }
  
  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // 如果是移动端，点击后关闭菜单
        if (window.innerWidth <= 768 && nav.style.display === 'block') {
          nav.style.display = 'none';
          menuBtn.classList.remove('active');
        }
      }
    });
  });
});