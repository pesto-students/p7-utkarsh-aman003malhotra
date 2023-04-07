var levelOrder = function(root) {
    if(root == null){
        return [];
    }
    finalList = [];
    const queue = [];
    queue.push(root);
    while(queue.length) {
        insideList = [];
        let size = queue.length;
        while(size > 0){
            const temp = queue.shift();
            insideList.push(temp.val);
            if(temp.left){
                queue.push(temp.left);
            }
            if(temp.right){
                queue.push(temp.right);
            }
            size--
        }
        finalList.push(insideList);
        
    }
    return finalList;
};