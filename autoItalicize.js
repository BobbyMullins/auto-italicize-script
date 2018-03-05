$.fn.wrapInTag = function (opts) {
    function getText(obj) {
        return obj.textContent ? obj.textContent : obj.innerText;
    }
        
    var tag = opts.tag || 'i', //defines what html tag to add to the selected element
        words = opts.words || [],
        regex = RegExp(words.join('|'), 'gi'),
        replacement = '<' + tag + '>$&</' + tag + '>';
        
    $(this).contents().each(function () {
        if (this.nodeType === 3) {
            $(this).replaceWith(getText(this).replace(regex, replacement));
        }
        else if (!opts.ignoreChildNodes) {
            $(this).wrapInTag(opts);
        }
    });
};
        
$('html').wrapInTag({"words" : ["legionella"]});


