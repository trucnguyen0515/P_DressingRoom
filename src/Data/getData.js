import Item from './Item';
import Room from './Room';
import Data from './Data';

let room = new Room();

for(let item of Data){
    let id = item.id;
    let type = item.type;
    let name = item.name;
    let desc = item.desc;
    let imgSrc_jpg = item.imgSrc_jpg;
    let imgSrc_png = item.imgSrc_png;

    let newItem = new Item(id, type, name, desc, imgSrc_jpg, imgSrc_png);
    room.addItem(newItem);
}

export default room;