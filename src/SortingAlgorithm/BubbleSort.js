
export const  bubbleSort = (array) => {
    const animations =[];
    let n=array.length;
    for(let i=0;i<n-1;i++){
        for(let j=0 ; j< n-i-1 ;j++){
            const animation={};

            animation.comparison=[j,j+1];
            
            if(array[j]>array[j+1]){
                animation.swap=[j,j+1];
                
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
            animations.push(animation);
        }
    }
    return animations;
}