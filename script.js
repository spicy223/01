const m=document.querySelector('.menu'),n=document.querySelector('nav');m?.addEventListener('click',()=>{const o=n.classList.toggle('open');m.setAttribute('aria-expanded',o);m.textContent=o?'關閉 ×':'選單 ＋'});document.querySelectorAll('.options button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.options button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');document.querySelector('#amount').textContent='NT$'+b.dataset.price}));const qrImage=document.querySelector('#qr-image');document.querySelectorAll('.options button').forEach(button=>button.addEventListener('click',()=>{if(qrImage){qrImage.src='assets/qr-'+button.dataset.price+'.jpg';qrImage.alt='NT$'+button.dataset.price+' 贊助 QR Code';}}));document.querySelectorAll('.options button').forEach(button=>button.addEventListener('click',()=>{button.classList.remove('button-pop');void button.offsetWidth;button.classList.add('button-pop');}));const flowGallery=document.querySelector('.flow-gallery');
if(flowGallery&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const flowCards=[...flowGallery.querySelectorAll('.flow-card')];
  flowGallery.addEventListener('pointermove',event=>{
    if(window.innerWidth<=900)return;
    const rect=flowGallery.getBoundingClientRect();
    const nx=(event.clientX-rect.left)/rect.width-.5;
    const ny=(event.clientY-rect.top)/rect.height-.5;
    flowCards.forEach(card=>{
      const moveX=Number(card.dataset.mx||80);
      const moveY=Number(card.dataset.my||55);
      const cross=Number(card.dataset.cross||0);
      const rotate=Number(card.dataset.rot||8);
      card.style.setProperty('--dx',(nx*moveX+ny*cross)+'px');
      card.style.setProperty('--dy',(ny*moveY-nx*cross*.45)+'px');
      card.style.setProperty('--dr',(nx*rotate+ny*rotate*.35)+'deg');
    });
  });
  flowGallery.addEventListener('pointerleave',()=>flowCards.forEach(card=>{
    card.style.setProperty('--dx','0px');card.style.setProperty('--dy','0px');card.style.setProperty('--dr','0deg');
  }));
}