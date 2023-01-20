const myButtons = document.getElementsByTagName("button");
const myQnts = document.getElementsByTagName("input");
const myImages = document.getElementsByTagName("img");
const myPrices = document.getElementsByClassName("price");
const myDishes = document.getElementsByClassName("card-title");
const myErrors = document.getElementsByClassName("demo");

const myBill = document.getElementById('bill');


let limit = 6;
let noOfSelectedItems = 0;
let i = 0;
let indeicesArray = [];


const checkoutButton = document.getElementById('checkout');



checkoutButton.addEventListener('click', function(){
    
    
    if(noOfSelectedItems === 0){
        alert('You dont have selected any item');
    }

else{

    const myNode = myBill.children[1];

    while (myNode.children[1]) {
    
      myNode.removeChild(myNode.lastChild);
    }
    
    indeicesArray.sort(function(a, b){return a - b});
    let totalQty = 0;
    let totalAmount = 0;
    let str = '';
        for(let i = 0; i<indeicesArray.length; i++){
            const newNode = document.createElement('tr');
            const newTd0 = document.createElement('td');
            const newTd1 = document.createElement('td');
            const newTd2 = document.createElement('td');
            const newTd3 = document.createElement('td');
            const newTdItem = document.createTextNode(myDishes[indeicesArray[i]].textContent);
            const text0 = document.createTextNode(i+1);

            let newTdQty; 
            let qty = myQnts[indeicesArray[i]].value;
            
            if(qty){
                
            newTdQty = document.createTextNode(qty);

            }else{
                
            newTdQty = document.createTextNode('1');
            qty = '1';    
        }
        totalQty += Number(qty);
            const totalEach = Number(qty) * prices[indeicesArray[i]];
            totalAmount += totalEach;
            const newTdTotal = document.createTextNode(totalEach);

            newTd0.appendChild(text0);
            newTd1.appendChild(newTdItem);
            newTd2.appendChild(newTdQty);
            newTd3.appendChild(newTdTotal);
            newTd0.className = 'td1';
            newTd1.className = 'td1';
            newTd2.className = 'td1';
            newTd3.className = 'td1';
            newTd1.style.textAlign = 'center';
            newTd2.style.textAlign = 'center';
            newTd3.style.textAlign = 'center';
            newNode.appendChild(newTd0);
            newNode.appendChild(newTd1);
            newNode.appendChild(newTd2);
            newNode.appendChild(newTd3);
            
            newNode.className = 'tr1';
            
            myBill.children[1].appendChild(newNode);

        }

        const gst = totalAmount * 0.12;
        const totalBill = totalAmount + gst;
        let arr = ['---', totalQty, totalAmount, gst, 'Rs. ' + totalBill];
        let arr2 = ['--- ', 'Total Quantity', 'Total Amount', 'GST', 'Total'];

        for(let j=0; j<5; j++){
            const newNode5 = document.createElement('tr');
            const newTd014 = document.createElement('td');
            newTd014.appendChild(document.createTextNode(''));
            const newTd14 = document.createElement('td');
        
            const newTd15 = document.createElement('td');
            
            const newTd16 = document.createElement('td');
            
            const textNode10 = document.createTextNode('');
            const bold7 = document.createElement('strong');
            const bold8 = document.createElement('strong');
            const textNode11 = document.createTextNode(arr2[j]);
            bold7.appendChild(textNode11);
            const textNode12 = document.createTextNode(arr[j]);
            bold8.appendChild(textNode12);
            newTd14.appendChild(textNode10);
            newTd15.appendChild(bold7);
            newTd16.appendChild(bold8);
            newTd014.className = 'td1';
            newTd14.className = 'td1';
            newTd15.className = 'td1';
            newTd16.className = 'td1';
            newTd14.style.textAlign = 'center';
            newTd15.style.textAlign = 'center';
            newTd16.style.textAlign = 'center';
            newNode5.appendChild(newTd014);
            newNode5.appendChild(newTd14);
                newNode5.appendChild(newTd15);
                newNode5.appendChild(newTd16);
                newNode5.className = 'tr1';
                myBill.children[1].appendChild(newNode5);

        }

        myBill.style.visibility = 'visible';

}

}



    );
    

const dishes = ['Mutton Karahi', 'Beef Karahi', 'Chicken Karahi','Mutton Karahi', 'Beef Karahi', 'Chicken Karahi', 'Biryani', 'Gol Gappay', 'Samosa Chaat','Mutton Karahi', 'Beef Karahi', 'Chicken Karahi','Mutton Karahi', 'Beef Karahi', 'Chicken Karahi', 'Biryani', 'Gol Gappay', 'Samosa Chaat' ];

const imagesURLs = [
    
    'https://photos.smugmug.com/Pakistan/i-V8LQdZd/0/33a83314/X3/pakistan-trip-42-X3.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/c/c4/Pakistani_Food_Karahi_Beef.jpg',
    'https://photos.smugmug.com/Pakistan/i-V8LQdZd/0/33a83314/X3/pakistan-trip-42-X3.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/c/c4/Pakistani_Food_Karahi_Beef.jpg',
    'https://photos.smugmug.com/Pakistan/i-V8LQdZd/0/33a83314/X3/pakistan-trip-42-X3.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/c/c4/Pakistani_Food_Karahi_Beef.jpg',
    'https://www.nfoodsstore.com/wp-content/uploads/52-Pakistani-food-101-min.jpg',
    'https://citybook.pk/wp-content/uploads/2018/02/top-10-best-food-in-Pakistan-karahi-700x394.jpg',
    'http://cdn.cnn.com/cnnnext/dam/assets/181019132110-17-pakistan-food-halwa-poori-chana.jpg',
    'https://www.nfoodsstore.com/wp-content/uploads/52-Pakistani-food-101-min.jpg',
   'https://photos.smugmug.com/Pakistan/i-V8LQdZd/0/33a83314/X3/pakistan-trip-42-X3.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/c/c4/Pakistani_Food_Karahi_Beef.jpg',
    'https://citybook.pk/wp-content/uploads/2018/02/top-10-best-food-in-Pakistan-karahi-700x394.jpg'

];

const prices = [200, 500, 300, 400, 100, 1400, 2000, 100, 1400, 2000, 100, 2500];

for(; i<myButtons.length-1; i++){

    myDishes[i].textContent = dishes[i];
    myButtons[i].id = 'btn'+i;
    myQnts[i].id = 'qty'+i;
    myImages[i].src = imagesURLs[i];
    myQnts[i].setAttribute('min', 1);
    myPrices[i].textContent = 'Rs. ' + prices[i];
    const btn = myButtons[i];
    btn.dataset.prodIndex = i;
    const qtyField = myQnts[i];
    qtyField.dataset.itemIndex = i;
    btn.addEventListener('click', getQuantity);
    
    qtyField.addEventListener('change', checkLength);

}


function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }


  function checkLength(event){
    const INDEX = event.currentTarget.dataset.itemIndex;
    
    if (myQnts[INDEX].validity.rangeOverflow || myQnts[INDEX].validity.rangeUnderflow) {
        text = "Value too large";
        myErrors[INDEX].textContent = "Quantity Range: 1-10";
    myErrors[INDEX].style.color = 'red';
      } else {
        
        myErrors[INDEX].textContent = "";
      } 
    
  }

function getQuantity(event){
    
    const INDEX = event.currentTarget.dataset.prodIndex;
    const btnPressed = document.getElementById('btn'+INDEX);
    const qntField = document.getElementById('qty'+INDEX);

    if(qntField.style.visibility !== "visible")
    {
        
        if(noOfSelectedItems >= limit){
            alert("You can't select more than 6 items")
            
        }else{

            noOfSelectedItems++;
            indeicesArray.push(INDEX);
    qntField.style.visibility = "visible";
    btnPressed.textContent = "Selected";
    btnPressed.style.backgroundColor = "#00308F";
    }

}

    else{
        noOfSelectedItems--;
        removeItemOnce(indeicesArray, INDEX);
        qntField.style.visibility = "hidden";
        btnPressed.textContent = "Select";
        btnPressed.style.backgroundColor = "";
    }
    
}



