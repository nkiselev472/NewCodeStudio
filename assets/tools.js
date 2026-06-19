
document.querySelectorAll('[data-panel]').forEach(b=>{
 b.onclick=()=>{
   document.querySelectorAll('.panel').forEach(p=>p.style.display='none');
   const map={calc:'calcPanel',notes:'notesPanel',ai:'aiPanel'};
   const el=document.getElementById(map[b.dataset.panel]);
   if(el) el.style.display='block';
 };
});

window.runCalc=()=>{
 try{calcOut.textContent=Function('return '+expr.value)();}
 catch(e){calcOut.textContent='Ошибка';}
};

notes.value=localStorage.getItem('notes')||'';
notes.oninput=()=>localStorage.setItem('notes',notes.value);
