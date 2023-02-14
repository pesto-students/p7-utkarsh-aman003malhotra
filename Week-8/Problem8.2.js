function isValidBST(root) {
    return isValidNode(root, null, null);
 };
 
function isValidNode(node, min, max) {
if (node == null) {
    return true;
}
if ((min != null && node.val <= min) || (max != null && node.val >= max)) {
    return false;
}
return isValidNode(node.left, min, node.val) && isValidNode(node.right, node.val, max);
};