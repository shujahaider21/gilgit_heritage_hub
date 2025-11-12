// Minimal JS: nav active marker + smooth scroll
document.addEventListener('DOMContentLoaded', ()=>{
  // highlight nav link that matches current file
  const links = document.querySelectorAll('.nav-link');
  links.forEach(a=>{
    try {
      const href = a.getAttribute('href');
      if(location.pathname.endsWith(href) || (href === 'index.html' && location.pathname.endsWith('/'))) {
        a.classList.add('active');
      }
    } catch(e){}
  });

  // smooth scroll for # anchors (if used)
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        history.pushState(null,'',this.getAttribute('href'));
      }
    });
  });
});
