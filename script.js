const elems = document.querySelectorAll('[id*="title"]');
setTimeout((()=>{for (let i of elems){
    if (i.innerHTML.includes('Shorts')){
        while (i = i.parentElement){
            if (i.id = 'content' && i.tagName == 'YTD-RICH-SECTION-RENDERER'){
                i.innerHTML = '';
                console.log("ОЧИЩЕНО!");
                break;
            }
        }
    }
}})(elems),6000);
