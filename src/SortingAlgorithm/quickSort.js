 
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

export const QuickSortDesc = {
    title: 'Quick Sort',
    description: (
      <div>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Quicksort"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quick Sort
          </a>{' '}
          is an efficient, in-place sorting algorith that in practice is
          faster than MergeSort and HeapSort. However, it is not a stable
          sorting algorithm, meaning that the relative positioning of
          equal sort items is not preserved.Quicksort is a divide and
          conquer algorithm. Quicksort first divides a large array into
          two smaller sub-arrays: the low elements and the high elements.
          Quicksort can then recursively sort the sub-arrays. The steps
          are:
        </p>
        <ol>
          <li>
            Pick an element, called a pivot, from the array. This is
            usually done at random.
          </li>
          <li>Move pivot element to the start of the array.</li>
          <li>
            <em>Partitioning:</em> reorder the array so that all elements
            with values less than the pivot come before the pivot, while
            all elements with values greater than the pivot come after it
            (equal values can go either way). After this partitioning, the
            pivot is in its final position. This is called the{' '}
            <em>partition</em> operation.
          </li>
          <li>
            Recursively apply the above steps to the sub-array of elements
            with smaller values and separately to the sub-array of
            elements with greater values.
          </li>
        </ol>
        <p>
          The base case of the recursion is an array of size zero or one,
          which are sorted by definition.
        </p>
      </div>
    ),
    worstCase: (
      <span>
        O(<em>n</em>
        <sup>2</sup>)
      </span>
    ),
    avgCase: (
      <span>
        O(<em>n</em>log<em>n</em>)
      </span>
    ),
    bestCase: (
      <span>
        O(<em>n</em>log<em>n</em>)
      </span>
    ),
    space: (
      <span>
        O(log<em>n</em>)
      </span>
    )
  };