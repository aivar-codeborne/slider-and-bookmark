var CssPseudoSelector = {
    isSupported: function(pseudoSelector) {
        try {
            var tmpStyle = document.createElement('style');
            document.head.appendChild(tmpStyle);
            var tmpStyleSheet = Array.from(document.styleSheets).find(function (styleSheet) {
                return !styleSheet.cssRules.length
            });
            document.head.removeChild(tmpStyle);
            tmpStyleSheet.insertRule('html' + pseudoSelector + '{}', 0);
            tmpStyleSheet.deleteRule(0);
            return true;
        } catch (e) {
            return false;
        }
    }
};