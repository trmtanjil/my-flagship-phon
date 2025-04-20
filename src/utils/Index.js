export const getDatalocalStorage=()=>{
    const fevoriets = localStorage.getItem('fevoriets');
    if(fevoriets) return JSON.parse(fevoriets)
    return []
}

export const addataLogalStorage= phone =>{
   const fevoriets = getDatalocalStorage()
   const ifExist = fevoriets.find(p=>p.id===phone.id)  
   if(ifExist) return;
    fevoriets.push(phone)
    localStorage.setItem('fevoriets',JSON.stringify(fevoriets))
}

export const removeDataLocalStorage =id=>{
    const fevoriets = getDatalocalStorage()

   const remainingdata = fevoriets.filter(phone=>phone.id !== id);

   localStorage.setItem('fevoriets', JSON.stringify(remainingdata))
}