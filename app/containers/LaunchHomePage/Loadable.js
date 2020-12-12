/**
 *
 * Asynchronously loads the component for LaunchHomePage
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
