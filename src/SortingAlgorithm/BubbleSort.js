
export const  bubbleSort = (array) => {
    const animations =[];       //this array holds all copmarisons and swaping.
    let n=array.length;
    for(let i=0;i<n-1;i++){
        for(let j=0 ; j< n-i-1 ;j++){
            const animation={};  //local object 

            animation.comparison=[j,j+1];  //push of comparison into animation.
            
            if(array[j]>array[j+1]){
                animation.swap=[j,j+1];//push of swap into animation .
                
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
            animations.push(animation); //push the local object.
        }
    }
    return animations;
}

export const BubbleSortDesc = {
    title: 'Bubble Sort',
    description: (
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Bubble_sort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bubble Sort
        </a>{' '}
        is a simple sorting algorithm that repeatedly steps through the
        list, compares adjacent elements and swaps them if they are in the
        wrong order.The pass through the list is repeated until the list
        is sorted. The algorithm, which is a comparison sort, is named for
        the way smaller or larger elements "bubble" to the top of the
        list. Although the algorithm is simple, it is too slow and
        impractical for most problems
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