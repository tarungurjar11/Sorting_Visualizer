export const insertionSort = (arr) =>{ 
    //console.log('aa');
    let i, key, j; 
    let n=arr.length ;
    const animations =[];
    for (i = 1; i < n; i++) 
    {  
        
        key = arr[i];  
        j = i - 1;  


        while (j >= 0) 
        { 
            const animation={};
            animation.comparison=[j,j+1]
            //console.log(j+1,j);
            if(arr[j] > key) 
            {
                animation.swap=[j,j+1]
                
                arr[j + 1] = arr[j];  
                j = j - 1; 
            } 
            else{
                animations.push(animation);
                break;
            }
            animations.push(animation);


            
        }  
        arr[j + 1] = key;
        
    }  
    return animations;
}  