
function RandomN(){
    let nums = []
    for(i=0;i<3;i++){
        nums[i] = Math.floor(Math.random() * 101);
    }
    console.log(nums);
    return nums;
}

let nums = RandomN()
        let sum = 0;
        let min = 101;
        let max = 0;

        for (let i = 0; i < nums.length; i++) {
            sum += nums[i]
        }
        console.log(sum);
        
        for (let i = 0; i < nums.length; i++) {
            if(nums[i] < min){
                min = nums[i]
            }
        }
        console.log(min);
        
        for(i=0;i<nums.length;i++){
            if(max < nums[i]){
                max = nums[i]
            }
        }
        console.log(max);