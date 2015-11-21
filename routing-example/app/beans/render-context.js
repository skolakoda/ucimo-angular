(function(ng, app) {

    "use strict";

    // provide information about the current route request, local to the given render path.
    app.value(
        "RenderContext",
        function(requestContext, actionPrefix, paramNames) {

            // return the next section after the location being watched.
            function getNextSection() {
                return (
                    requestContext.getNextSection(actionPrefix)
                );
            }

            // check to see if the action has changed (and is local to the current location).
            function isChangeLocal() {
                return (
                    requestContext.startsWith(actionPrefix)
                );
            }


            // determine if the last change in the request context is relevant
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
            }	// isChangeRelevant


            // Return the public API.
            return ({
                getNextSection: getNextSection,
                isChangeLocal: isChangeLocal,
                isChangeRelevant: isChangeRelevant
            });

        }
    );

})(angular, Demo);
