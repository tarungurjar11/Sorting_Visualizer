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

export const InsertionSortDesc = {
    title: 'Insertion Sort',
    description: (
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Insertion_sort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Insertion Sort
        </a>{' '}
        is a simple sorting algorithm that iterates through an array and
        at each iteration it removes one element from the array, finds the
        location it belongs to in the sorted list and inserts it there,
        repeating until no elements remain in the unsorted list. It is an
        in-place, stable sorting algorithm that is inefficient on large
        input arrays but works well for data sets that are almost sorted.
        It is more efficient in practice compared to other quadratic
        sorting algorithms like bubble sort and selection sort.
      </p>
    ),
    worstCase: (
      <span>
        O(n<sup>2</sup>)
      </span>
    ),
    avgCase: (
      <span>
        O(n<sup>2</sup>)
      </span>
    ),
    bestCase: <span>O(n)</span>,
    space: <span>O(1)</span>
  };