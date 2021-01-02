import React ,{ Component } from 'react';
import SortInfo from './SortInfo'
import './SortingVisualizer.css'; 
import {selectionSort} from '../SortingAlgorithm/SelectionSort.js';
import {insertionSort} from '../SortingAlgorithm/InsertionSort.js';
import {bubbleSort} from '../SortingAlgorithm/BubbleSort.js';
import {mergeSort} from '../SortingAlgorithm/MergeSort.js';
import { SelectionSortDesc } from '../SortingAlgorithm/SelectionSort.js';
import { BubbleSortDesc } from '../SortingAlgorithm/BubbleSort.js';
import { InsertionSortDesc } from '../SortingAlgorithm/InsertionSort.js';
import { MergeSortDesc } from '../SortingAlgorithm/MergeSort.js';
import { QuickSortDesc } from '../SortingAlgorithm/quickSort.js';

import {quickSort} from '../SortingAlgorithm/quickSort.js';

class SortingVisualizer extends Component{
    
    constructor(props) {
        super(props);
        this.state ={
            algorithm:null,    //for description purpose
            array: [],          //for holding array
            time : 20,          //for speed of algorithm
        };
    }
    
    componentDidMount(){        //when program start this function run automatically
        this.resetArray(45);
    }


    everyThingChange(total){
        for(let i=0;i<total;i++){
        const arrayBars=document.getElementsByClassName('array-bar');
        const barOneStyle=arrayBars[i].style;
        barOneStyle.backgroundColor='turquoise';
        }
    }

    myArrayRange() {
        var x = document.getElementById("myRange").value;
        

        this.resetArray(x);
       // this.everyThingChange(x);
    }


    myTime() {
         const time = document.getElementById("myTiming").value;
         this.setState({time:time});
    }

    myAlgoDesc(algo) {
        this.setState({algorithm:algo});
   }

 
    resetArray(total) {
        const array =[];
        //window.location.reload(false);
        //location.reload();
        for(let i=0;i<total ;i++)
        {
            array.push(randomIntFromInterval(5,425));
        }
        this.setState({array});   
    }


    myButtonToggle(flag){
        
        document.getElementById('myRange').disabled=flag;
        document.getElementById('myTiming').disabled=flag;
        document.getElementById('button2').disabled=flag;
        document.getElementById('button3').disabled=flag;
        document.getElementById('button4').disabled=flag;
        document.getElementById('button5').disabled=flag;
        document.getElementById('button6').disabled=flag;
        document.getElementById('button7').disabled=flag;
        document.getElementById('button8').disabled=flag;
    }

    stopSort()
    {
        
        // async function myDisplay() {
        //     let myPromise = new Promise(function(myResolve, myReject) {
        //       setTimeout(function() { myResolve("I love You !!"); }, 300);
        //     });
        //     document.getElementById("demo").innerHTML = await myPromise;
        //   }
    }

    reverseSortedArray(){
        //var x = document.getElementById("myRange").value;
        const array=this.state.array.slice().sort((a,b)=>b-a);
        
        //array.reverse();
        this.setState({
            algorithm:null,
            array:array});
    }
    selection()
    {
        this.setState({algorithm:SelectionSortDesc});
        setTimeout(() => {
        this.selectionSort()},5);
    }
    selectionSort(){
        this.myButtonToggle(true);

        const animations = selectionSort(this.state.array);
        const newAnimations = [];
        for(const animation of animations){
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.swap);
        }
        this.selectionSortAnimation(newAnimations);
        setTimeout(() => {

            this.everyThingChange(this.state.array.length);
            this.myButtonToggle(false);

    },(newAnimations.length+1)*this.state.time);
    }



    selectionSortAnimation(newAnimations){
        let  len=this.state.array.length-1;
        let count=len;
        for(let i=0;i<newAnimations.length;i++){
            
            const arrayBars=document.getElementsByClassName('array-bar');

            const isColorChange = i % 3 !== 2 ;
            //console.log(newAnimations.length);
            
            if(isColorChange){
                const [barOneIdx,barTwoIdx]=newAnimations[i];
                const barOneStyle=arrayBars[barOneIdx].style;
                const barTwoStyle=arrayBars[barTwoIdx].style;
                let color = i % 3 === 0 ?'slateblue' : 'turquoise';
                setTimeout(() => {
                    if(color!=='slateblue'){
                    if (typeof newAnimations[i+1] === "undefined") {
                        color='#76ff03';
                    }
                    else
                    {
                        color='tomato';
                    }
                }
                    barOneStyle.backgroundColor=color;
                    barTwoStyle.backgroundColor=color;
                    if(i===(len*3) )
                      {
                          //console.log(i);
                          barOneStyle.backgroundColor='MediumSeaGreen';
                          len+= --count;
                      }
                      if(i===newAnimations.length-1){
                        const barOneStyl=arrayBars[barOneIdx+1].style;
                        barOneStyl.backgroundColor='MediumSeaGreen';
                        }

                },i*this.state.time);
            }else{
                setTimeout(() => {
                    const [barOneIdx,barTwoIdx]=newAnimations[i-1];
                    const barOneStyle=arrayBars[barOneIdx].style;
                    const barTwoStyle=arrayBars[barTwoIdx].style;
                    if (typeof newAnimations[i] !== "undefined") {
                         const temp=barOneStyle.height;
                         barOneStyle.height=barTwoStyle.height;
                         barTwoStyle.height=temp;
                      }
                      barOneStyle.backgroundColor='turquoise';
                      barTwoStyle.backgroundColor='turquoise';
                      if(i===(len*3-1))
                      {
                          //console.log(i);
                          barOneStyle.backgroundColor='MediumSeaGreen';
                          len+=--count;
                      }
                      if(i===newAnimations.length-1){
                        const barOneStyl=arrayBars[barOneIdx+1].style;
                        barOneStyl.backgroundColor='MediumSeaGreen';
                        }
                },i*this.state.time);
            }
        }
           
    }
    
    bubble()
    {
        this.setState({algorithm:BubbleSortDesc});
        setTimeout(() => {
        this.bubbleSort()},5);
    }
    



    bubbleSort(){
        this.myButtonToggle(true);
        const animations = bubbleSort(this.state.array);
        
        const newAnimations = [];
        for(const animation of animations){
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.swap);
        }
        this.bubbleSortAnimation(newAnimations);
        setTimeout(() => {
            
            this.everyThingChange(this.state.array.length);
            this.myButtonToggle(false);

    },(newAnimations.length+2)*this.state.time);
    }


    bubbleSortAnimation(newAnimations){
        let  len=this.state.array.length-1;
        let count=len;
        for(let i=0;i<newAnimations.length;i++){
            
            const arrayBars=document.getElementsByClassName('array-bar');

            const isColorChange = i % 3 !== 2 ;
            //console.log(newAnimations.length);
            
            if(isColorChange){
                const [barOneIdx,barTwoIdx]=newAnimations[i];
                const barOneStyle=arrayBars[barOneIdx].style;
                const barTwoStyle=arrayBars[barTwoIdx].style;
                let color = i % 3 === 0 ?'slateblue' : 'turquoise';
                setTimeout(() => {
                    if(color!=='slateblue'){
                    if (typeof newAnimations[i+1] === "undefined") {
                        color='#76ff03';
                    }
                    else
                    {
                        color='tomato';
                    }
                }
                    barOneStyle.backgroundColor=color;
                    barTwoStyle.backgroundColor=color;
                    if(i===(len*3) )
                      {
                          //console.log(i);
                          barTwoStyle.backgroundColor='MediumSeaGreen';
                          len+= --count;
                      }
                      if(i===newAnimations.length-2){
                        const barOneStyl=arrayBars[barOneIdx+1].style;
                        barOneStyl.backgroundColor='MediumSeaGreen';
                        }

                },i*this.state.time);
            }else{
                setTimeout(() => {
                    const [barOneIdx,barTwoIdx]=newAnimations[i-1];
                    const barOneStyle=arrayBars[barOneIdx].style;
                    const barTwoStyle=arrayBars[barTwoIdx].style;
                    if (typeof newAnimations[i] !== "undefined") {
                         const temp=barOneStyle.height;
                         barOneStyle.height=barTwoStyle.height;
                         barTwoStyle.height=temp;
                      }
                      barOneStyle.backgroundColor='turquoise';
                      barTwoStyle.backgroundColor='turquoise';
                      if(i===(len*3-1))
                      {
                          //console.log(i);
                          barTwoStyle.backgroundColor='MediumSeaGreen';
                          len+=--count;
                      }
                      if(i===newAnimations.length-1){
                        const barOneStyl=arrayBars[barOneIdx+1].style;
                        barOneStyl.backgroundColor='MediumSeaGreen';
                        }
                },i*this.state.time);
            }
        }   
        
    }

    insertion()
    {
        this.setState({algorithm:InsertionSortDesc});
        setTimeout(() => {
        this.insertionSort()},5);
    }

    insertionSort(){

        // const jsArray=this.state.array.slice().sort((a,b)=>a-b);
        // const arrayy = insertionSort(this.state.array);
        // console.log(arrayAreEqual(jsArray,arrayy));
        
        this.myButtonToggle(true);

        const animations = insertionSort(this.state.array);
        const newAnimations = [];
        for(const animation of animations){
            //console.log(animation);
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.swap);
        }
        this.insertionSortAnimation(newAnimations);
        setTimeout(() => {
        
        this.myButtonToggle(false);

    },(newAnimations.length+1)*this.state.time);
    }


    insertionSortAnimation(newAnimations){
        
        for(let i=0;i<newAnimations.length;i++){
            
            const arrayBars=document.getElementsByClassName('array-bar');

            const isColorChange = i % 3 !== 2 ;
            //console.log(newAnimations.length);
            
            if(isColorChange){
                const [barOneIdx,barTwoIdx]=newAnimations[i];
                const barOneStyle=arrayBars[barOneIdx].style;
                const barTwoStyle=arrayBars[barTwoIdx].style;
                let color = i % 3 === 0 ?'tomato' : 'turquoise';
                setTimeout(() => {
                    if(color!=='slateblue'){
                    if (typeof newAnimations[i+1] === "undefined") {
                        color='#76ff03';
                    }
                    else
                    {
                        color='tomato';
                    }
                }
                    barOneStyle.backgroundColor=color;
                    barTwoStyle.backgroundColor=color;
                },i*this.state.time);
            }else{
                setTimeout(() => {
                    const [barOneIdx,barTwoIdx]=newAnimations[i-1];
                    const barOneStyle=arrayBars[barOneIdx].style;
                    const barTwoStyle=arrayBars[barTwoIdx].style;
                    if (typeof newAnimations[i] !== "undefined") {
                         const temp=barOneStyle.height;
                         barOneStyle.height=barTwoStyle.height;
                         barTwoStyle.height=temp;
                      }
                      barOneStyle.backgroundColor='turquoise';
                      barTwoStyle.backgroundColor='turquoise';
                },i*this.state.time);
            }
        }   
        
    }
    
    merge()
    {
        this.setState({algorithm:MergeSortDesc});
        setTimeout(() => {
        this.mergeSort()},5);
    }
    

    mergeSort(){
        // const jsArray=this.state.array.slice().sort((a,b)=>a-b);
        // const arrayy = insertionSort(this.state.array);
        // console.log(arrayAreEqual(jsArray,arrayy));

        this.myButtonToggle(true);

        const animations = mergeSort(this.state.array);
        const newAnimations = [];
        for(const animation of animations){
            //console.log(animation);
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.swap);
        }
        this.mergeSortAnimation(newAnimations);
        setTimeout(() => {

        this.myButtonToggle(false);

    },(newAnimations.length+1)*this.state.time);
    }


    mergeSortAnimation(newAnimations){
        
        for(let i=0;i<newAnimations.length;i++){
            
            const arrayBars=document.getElementsByClassName('array-bar');

            const isColorChange = i % 3 !== 2 ;
            //console.log(newAnimations.length);
            
            if(isColorChange){
                const [barOneIdx,barTwoIdx]=newAnimations[i];
                const barOneStyle=arrayBars[barOneIdx].style;
                const barTwoStyle=arrayBars[barTwoIdx].style;
                let color = i % 3 === 0 ?'tomato' : 'turquoise';
                setTimeout(() => {
                   
                    barOneStyle.backgroundColor=color;
                    barTwoStyle.backgroundColor=color;
                },i*this.state.time);
            }else{
                setTimeout(() => {
                    
                    const [barOneIdx,newHeight]=newAnimations[i];
                    const barOneStyle=arrayBars[barOneIdx].style;
                         
                    barOneStyle.height=`${newHeight}px`;
                    barOneStyle.backgroundColor='turquoise';

                },i*this.state.time);
            }
        }   
        
    }

    quick()
    {
        this.setState({algorithm:QuickSortDesc});
        setTimeout(() => {
        this.quickSort()},5);
    }
    
    quickSort(){
        this.setState({algorithm:QuickSortDesc});

        this.myButtonToggle(true);
        
        const animations = quickSort(this.state.array);
        const newAnimations = [];
        for(const animation of animations){
            //console.log(animation);
            newAnimations.push(animation.pivot);
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.comparison);
            newAnimations.push(animation.swap);
            newAnimations.push(animation.fix);
        }
        this.quickSortAnimation(newAnimations);
        setTimeout(() => {
            for(let i=0;i<this.state.array.length;i++){
                //console.log(i);
                const arrayBars=document.getElementsByClassName('array-bar');
                const barOneStyle=arrayBars[i].style;
                barOneStyle.backgroundColor='turquoise';
                }
        this.myButtonToggle(false)
    },(newAnimations.length+1)*this.state.time);
    }


    quickSortAnimation(newAnimations){
        
        for(let i=0;i<newAnimations.length;i++){
            
            const arrayBars=document.getElementsByClassName('array-bar');


            if(i%5===0 && typeof newAnimations[i] !== "undefined")
                {
                    setTimeout(() => {
                    const [barOneIdx]=newAnimations[i];
                    //console.log(barOneIdx);
                    const barOneStyle=arrayBars[barOneIdx].style;
                    barOneStyle.backgroundColor='yellow';
                },i*this.state.time);}
                

            if(i%5===1 && typeof newAnimations[i] !== "undefined")
                {
                    setTimeout(() => {
                    const [barOneIdx,barTwoIdx]=newAnimations[i];
                    const barOneStyle=arrayBars[barOneIdx].style;
                    const barTwoStyle=arrayBars[barTwoIdx].style;
                    
                    barOneStyle.backgroundColor='slateblue';
                    barTwoStyle.backgroundColor='slateblue';
                },i*this.state.time);

                }

            if(i%5===2 && typeof newAnimations[i] !== "undefined")
                {
                    setTimeout(() => {
                    const [barOneIdx,barTwoIdx]=newAnimations[i];
                    const barOneStyle=arrayBars[barOneIdx].style;
                    const barTwoStyle=arrayBars[barTwoIdx].style;
                    
                    let color='turquoise';
                    if (typeof newAnimations[i+1] === "undefined") {
                        color='#76ff03';
                    }
                    else
                    {
                        color='tomato';
                    }
                    barOneStyle.backgroundColor=color;
                    barTwoStyle.backgroundColor=color;
                },i*this.state.time);

                }

                if(i%5===3 && typeof newAnimations[i-1] !== "undefined" )
                {
                    setTimeout(() => {
                        const [barOneIdx,barTwoIdx]=newAnimations[i-1];
                        const barOneStyle=arrayBars[barOneIdx].style;
                        const barTwoStyle=arrayBars[barTwoIdx].style;
                        if(typeof newAnimations[i] !== "undefined"){
                             const temp=barOneStyle.height;
                             barOneStyle.height=barTwoStyle.height;
                             barTwoStyle.height=temp;
                        }
                          barOneStyle.backgroundColor='turquoise';
                          barTwoStyle.backgroundColor='turquoise';
                    },i*this.state.time);

                }


                if(i%5===4 && typeof newAnimations[i] !== "undefined")
                {
                    setTimeout(() => {
                    const [barOneIdx]=newAnimations[i];
                    //console.log(barOneIdx);
                    const barOneStyle=arrayBars[barOneIdx].style;
                    barOneStyle.backgroundColor='MediumSeaGreen';
                    },i*this.state.time);
                }
            
        }

        }   
    

    



    render() {
        const {array} = this.state;
        let total=array.length;
        return (
           
            <div className="array-container"  >
          <p id="tarun">      
          <br/>
          &nbsp; &nbsp;<input type="range" min="10" max="200"  id="myRange"  onChange={() => this.myArrayRange()}></input>
     &nbsp; &nbsp; <input type="range" min="1" max="500"  id="myTiming"  onChange={() => this.myTime()}></input>
           
     &nbsp; &nbsp; <button id="button2" onClick={() => this.myArrayRange()}> Genrate New Array </button>
     
     &nbsp; &nbsp; <button id="button3" onClick={() => this.merge()}> Merge Sort </button>
     &nbsp; &nbsp; <button id="button4" onClick={() => this.insertion()}> Insertion Sort </button>
     &nbsp; &nbsp; <button id="button5" onClick={() => this.selection()}> Selection Sort </button>
     &nbsp; &nbsp; <button id="button6"  onClick={() => this.quick()}> Quick Sort </button>
     &nbsp; &nbsp; <button id="button7" onClick={() => this.bubble()}> Bubble Sort </button>
    
     &nbsp; &nbsp; <button id="button8" onClick={() => this.reverseSortedArray()}> Reverse Sorted Array </button>
     <br></br> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;Size of Array : &nbsp; &nbsp;&nbsp; &nbsp; Time:
     </p>
            <br/>
            {array.map((value,idx) =>(
                <div 
                className="array-bar" 
                key={idx}
                style={{height:`${value}px` ,width:`${Math.ceil(500/total)}px` }}>
                 
                </div>
            ))}
           
           <SortInfo {...this.state.algorithm} />
     
            </div>
        );
    }
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random() * (max-min+1)+min);
}

function arrayAreEqual(array1,array2)
{
    if(array1.length!==array2.length) return false;
    for(let i=0;i< array1.length;i++)
    {
        if(array1[i]!==array2[i])
        {
            return false;
        }
    }
    return true;
}

export default SortingVisualizer;