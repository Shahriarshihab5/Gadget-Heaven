const getStoredDeviceList = () =>{

const storedListStr =localStorage.getItem('details');
if(storedListStr){
const storedList =JSON.parse(storedListStr);
return storedList;

}

else{

return [] ;

} 


}




const addToStoredDeviceList = (id) => {
const storedList = getStoredDeviceList();
if(storedList.includes(id)){

 console.log(id,'Already exixt in the read list')   ;
}
else {

    storedList.push(id);
    const storedListStr=JSON.stringify(storedList);
    localStorage.setItem('details',storedListStr);

}



}

export {addToStoredDeviceList,getStoredDeviceList}