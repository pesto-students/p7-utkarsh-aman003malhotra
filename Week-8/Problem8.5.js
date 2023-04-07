function findJudge(n, trust) {
    let trusts = new Array(n + 1).fill(0);
     let trustedBy = new Array(n + 1).fill(0);
 
     for (let [a, b] of trust) {
         trusts[a]++;
         trustedBy[b]++;
     }
 
     for (let i = 1; i <= n; i++) {
         if (trusts[i] === 0 && trustedBy[i] === n - 1) {
             return i;
         }
     }
 
     return -1; 
 };