/**
 * Created by pxv63 on 6/1/2017.
 */

var componentExports = function() {
    require.context("./components", true, /\.components\.js$/);
    require.context("./components", true, /\.components\.html$/);

}
module.exports = componentExports();