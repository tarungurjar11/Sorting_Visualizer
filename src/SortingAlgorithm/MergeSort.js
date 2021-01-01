export const mergeSort =(array) =>{
    const animations=[];
    if(array.length===1)return animations;
    //const auxilaryArray=array.slice();
    mergeSort1(array,0,array.length-1,animations);
    return animations;
}







function merge(arr,l,m,r,animations ) {
    
    console.log(l,m,r);
    let n1 = m - l + 1;
    let n2 = r - m ;
    //console.log(n1,n2);
    // Create temp arrays
    // L[n1], R[n2];
     var L = new Array(n1);
     var R = new Array(n2);
    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    let i = 0;
 
    let j = 0;
 
    let k = l;
 
    while (i < n1 && j < n2) {
        const animation={};
        animation.comparison=[i+l,j+m + 1];
        if (L[i] <= R[j]) {
            
            animation.swap=[k,L[i]];
            arr[k] = L[i];
            i++;
        }
        else {
            animation.swap=[k, R[j]];
            arr[k] = R[j];

            j++;
        }
        k++;
        console.log(animation);
        animations.push(animation);
    }
    //console.log(arr[k]);
    while (i < n1) {
        animations.push({
            comparison:[i+l,i+l],
            swap :[k,L[i]],
        });
        
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        animations.push({
            comparison:[j +m + 1,j +m + 1],
            swap :[k,R[j]],
        });
        arr[k] = R[j];
        j++;
        k++;
    }
}
function mergeSort1(arr,l,r,animations){
    if(l>=r){
        return ;
    }
    const m = Math.floor((l+r-1)/2);
    mergeSort1(arr,l,m,animations);
    mergeSort1(arr,m+1,r,animations);
    merge(arr,l,m,r,animations);
    
}