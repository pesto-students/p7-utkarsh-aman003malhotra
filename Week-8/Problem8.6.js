function allPathsSourceTarget(graph) {
    let n = graph.length;
    let paths = [];

    function dfs(node, path) {
        // Add the current node to the path
        path.push(node);

       if (node === n - 1) {
            paths.push(path.slice());
        } else {
           for (let neighbor of graph[node]) {
                dfs(neighbor, path);
            }
        }

        path.pop();
    }

    dfs(0, []);

    return paths;
}