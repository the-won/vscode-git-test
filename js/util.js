!function(){
    $ = {}; 

    $.el = html => {
        const parent = document.createElement('div'); 
        parent.innerHTML = html;
        return parent.children()[0];
    }

    window.$ = $;
}();