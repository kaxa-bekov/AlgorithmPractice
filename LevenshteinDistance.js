const levenshteinD = (str1, str2) => {
    let m = str1.length;
    let n = str2.length;

    let dp = Array.from({length:m+1}, () => Array(n+1).fill(0));

    for(let i = 0; i <= m; i++){
        for(let j = 0; j <= n; j++){
            if(i === 0){
                dp[i][j] = j;
            }else if(j === 0){
                dp[i][j] = i;
            }else if(str1[i - 1] === str2[j - 1]){
                dp[i][j] = dp[i - 1][j - 1];
            }else{
                dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
            }
        }
    }
    console.log(dp);
    console.log(dp[m][n]);
    return dp[m][n];
}

let st1 = 'lol blya';
let st2 = 'pol lymp';
// levenshteinD(st1, st2);

const subStr = (str1, str2) => {
    
    let dp = Array.from({length: str1.length + 1}, () => Array(str2.length + 1).fill(0));

    for(let i=0;i <= str1.length;i++){
        for(let j=0;j <= str2.length;j++){
            if(i === 0){
                dp[i][j] = 0;
            }else if(j === 0){
                dp[i][j] = 0;
            }
            else if(str1[i - 1] === str2[j - 1]){
                dp[i][j] = dp[i-1][j-1] + 1;
            }else{
                dp[i][j] = 0;
            }
        }
    }

    let longest = 0;
    for(let i in dp){
        for(let j in dp[i]){
            if(dp[i][j] > longest){
                longest = dp[i][j];
            }
        }
    }

    console.log(dp);
    return longest;

}

console.log(subStr('traversy', 'brad'))   

const subSeq = (str1, str2) => {
    
    let dp = Array.from({length: str1.length + 1}, () => Array(str2.length + 1).fill(0));

    for(let i=0;i <= str1.length;i++){
        for(let j=0;j <= str2.length;j++){
            if(i === 0){
                dp[i][j] = 0;
            }else if(j === 0){
                dp[i][j] = 0;
            }
            else if(str1[i - 1] === str2[j - 1]){
                dp[i][j] = dp[i-1][j-1] + 1;
            }else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }

    console.log(dp);
    return dp[str1.length][str2.length];

}