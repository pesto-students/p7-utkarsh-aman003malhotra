function validPath(n, edges, source, destination) {
    let graph = {};
    for (let [u, v] of edges) {
        if (!graph[u]) graph[u] = [];
        if (!graph[v]) graph[v] = [];
        graph[u].push(v);
        graph[v].push(u);
    }

    let queue = [source];
    let visited = new Set(queue);
    while (queue.length > 0) {
        let curr = queue.shift();
        if (curr === destination) return true;
        if (!graph[curr]) continue;
        for (let neighbor of graph[curr]) {
            if (!visited.has(neighbor)) {
                queue.push(neighbor);
                visited.add(neighbor);
            }
        }
    }
    return false;
}