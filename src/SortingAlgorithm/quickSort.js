 
export const quickSort =(array) =>{
    const animations=[];
    if(array.length===1)return animations;
    //const auxilaryArray=array.slice();
    quickSort1(animations,array,0,array.length-1);
    return animations;
}



/* This function takes last element as pivot, places  
the pivot element at its correct position in sorted  
array, and places all smaller (smaller than pivot)  
to left of pivot and all greater elements to right  
of pivot */
function partition (animations,arr , low, high)  
{  
    animations.push({
        pivot:[high],
    });
    let pivot = arr[high];  
    let i = (low - 1); // Index of smaller element  
  
    for (let j = low; j <= high - 1; j++)  
    {  
        // If current element is smaller than the pivot
        const animation={}; 
        animation.comparison=[i+1,j]; 
        if (arr[j] < pivot)  
        {  
            i++; // increment index of smaller element 
            animation.swap=[i,j]; 
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
        animations.push(animation);  
    } 
    
    animations.push({
        comparison:[i+1,high],
        swap:[i+1,high],
        fix:[i+1],
    }); 
    
    let temp=arr[i+1];
    arr[i+1]=arr[high];
    arr[high]=temp;
    return (i + 1);  
}  
  
/* The main function that implements QuickSort  
arr[] --> Array to be sorted,  
low --> Starting index,  
high --> Ending index */
function quickSort1(animations,arr,low,high)  
{  
    if(low===high)
    {
        animations.push({
            fix:[low],
        }); 
    }
    else if (low < high)  
    {  
        /* pi is partitioning index, arr[p] is now  
        at right place */
        let pi = partition(animations,arr, low, high);  
        
        // Separately sort elements before  
        // partition and after partition  
        quickSort1(animations,arr, low, pi - 1);  
        quickSort1(animations,arr, pi + 1, high);  
    }  
}  