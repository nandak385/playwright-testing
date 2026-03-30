const nums = [2,4,5,2,1,2];
const k=2
let count=0

for(i=0; i<nums.length; i++){
    if(nums[i]===k)
        count=count+1
}
console.log(k + " apperead " + count + " Times")