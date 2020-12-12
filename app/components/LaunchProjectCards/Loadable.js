/**
 *
 * Asynchronously loads the component for LaunchProjectCards
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
