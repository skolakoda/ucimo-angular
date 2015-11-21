(function() {
    "use strict";

    angular
        .module("Demo")
        .value("RenderContext", function(requestContext, actionPrefix, paramNames) {

            function getNextSection() {
                return (
                    requestContext.getNextSection(actionPrefix)
                );
            }

            function isChangeLocal() {
                return (
                    requestContext.startsWith(actionPrefix)
                );
            }

            function isChangeRelevant() {
                if (!requestContext.startsWith(actionPrefix)) {
                    return (false);
                }
                if (requestContext.hasActionChanged()) {
                    return (true);
                }
                return (
                    paramNames.length &&
                    requestContext.haveParamsChanged(paramNames)
                );
            } // isChangeRelevant


            return ({
                getNextSection: getNextSection,
                isChangeLocal: isChangeLocal,
                isChangeRelevant: isChangeRelevant
            });

        });

})();
