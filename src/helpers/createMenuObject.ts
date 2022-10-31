type MenuOption = '' | 'all'| 'dog' | 'cat' | 'fish';


export const createMenuObject = (activeMenu: MenuOption) => {       

    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

   if(activeMenu !== ''){
       returnObject[activeMenu] = true;
   }

   return returnObject;



}