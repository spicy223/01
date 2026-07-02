const m=document.querySelector('.menu'),n=document.querySelector('nav');m?.addEventListener('click',()=>{const o=n.classList.toggle('open');m.setAttribute('aria-expanded',o);m.textContent=o?'關閉 ×':'選單 ＋'});document.querySelectorAll('.options button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.options button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');document.querySelector('#amount').textContent='NT$'+b.dataset.price}));const qrImage=document.querySelector('#qr-image');document.querySelectorAll('.options button').forEach(button=>button.addEventListener('click',()=>{if(qrImage){qrImage.src='assets/qr-'+button.dataset.price+'.jpg';qrImage.alt='NT$'+button.dataset.price+' 贊助 QR Code';}}));document.querySelectorAll('.options button').forEach(button=>button.addEventListener('click',()=>{button.classList.remove('button-pop');void button.offsetWidth;button.classList.add('button-pop');}));const flowGallery=document.querySelector('.flow-gallery');
if(flowGallery&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const flowCards=[...flowGallery.querySelectorAll('.flow-card')];
  flowGallery.addEventListener('pointermove',event=>{
    if(window.innerWidth<=900)return;
    const rect=flowGallery.getBoundingClientRect();
    const nx=(event.clientX-rect.left)/rect.width-.5;
    const ny=(event.clientY-rect.top)/rect.height-.5;
    flowCards.forEach(card=>{
      const depth=Number(card.dataset.depth||1);
      card.style.setProperty('--dx',(nx*82*depth)+'px');
      card.style.setProperty('--dy',(ny*54*depth)+'px');
      card.style.setProperty('--dr',(nx*7*depth)+'deg');
    });
  });
  flowGallery.addEventListener('pointerleave',()=>flowCards.forEach(card=>{
    card.style.setProperty('--dx','0px');card.style.setProperty('--dy','0px');card.style.setProperty('--dr','0deg');
  }));
}