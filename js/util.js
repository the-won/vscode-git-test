!function(){
    $ = {}; 

    $.el = html => {
        const parent = document.createElement('div'); 
        const el = parent.innerHTML = html;
        return el.children()[0];
    }

    window.$ = $;
}();