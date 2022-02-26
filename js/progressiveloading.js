
const imgElemets= document.querySelectorAll('img[data-src]');
const lazyLoadingObservation = new IntersectionObserver((entries,observer)=>{
    entries.forEach((entry)=>{
        if(!entry.isIntersecting) return;
        entry.target.src = entry.target.dataset.src;
    });
},
{ threshold: 1,
 }
)

imgElemets.forEach((img)=> lazyLoadingObservation.observe(img));



