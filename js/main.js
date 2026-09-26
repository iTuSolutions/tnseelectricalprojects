const root=document.documentElement;
const saved=localStorage.getItem('tnse-theme'); if(saved==='light') root.classList.remove('dark'); else root.classList.add('dark');
document.querySelectorAll('[data-theme]').forEach(b=>b.addEventListener('click',()=>{root.classList.toggle('dark');localStorage.setItem('tnse-theme',root.classList.contains('dark')?'dark':'light')}));
document.querySelectorAll('[data-mobile-toggle]').forEach(b=>b.addEventListener('click',()=>{document.getElementById(b.dataset.mobileToggle)?.classList.toggle('open')}));
document.querySelectorAll('[data-faq]').forEach(b=>b.addEventListener('click',()=>{const a=b.nextElementSibling;a.classList.toggle('hidden');b.querySelector('[data-icon]')?.classList.toggle('rotate-45')}));
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));
const topBtn=document.querySelector('#backTop');window.addEventListener('scroll',()=>topBtn?.classList.toggle('hidden',scrollY<500));topBtn?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
document.querySelectorAll('form[data-contact]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);const subject=encodeURIComponent('TNSE Website Quote Request');const body=encodeURIComponent([...d.entries()].map(x=>`${x[0]}: ${x[1]}`).join('\n'));location.href=`mailto:tnse.electricalprojects@gmail.com?subject=${subject}&body=${body}`}));
