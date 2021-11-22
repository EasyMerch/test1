/*
В объекте mobile_init хранятся данные
mobile_init = {
    skus:       [{ id: 1, name: '', category_id: 1 }...],                       // товары
    categories: [{ id: 1, name: ''}{ id: 2, name: '', parent_id: 1 }...],       // категории
    shop_skus:  {                                                               // матрица
        [matrix_type_id typeof int]: {
            [shop_id typeof int]: [{sku_id: 1}...]
        }
    }
}
*/

// 0. Сделать хеш-таблицы по категориям и товарам [{id:''}] -> {id:{}}}
// 1. Отрисовать на странице дерево категорий и товаров (вывести в дереве названия товаров и категорий )
// 2. Отрисовать на странице дерево категорий и товаров, category_ids = (169,172)
// 3. преобразовать shop_skus в массив объектов в виде [{shop_id: 1, sku_id: 0, matrix_type_id: 0},{..]

//дерево  отрисовать в виде
//  -- 1й уровень
//      -- 2й уровень 
//      -- 2й уровень
//          -- товар
//  -- 1й уровень
//      -- 2й уровень
//      -- товар


/**
 * Parameters:
 *      category_ids typeof Array - Если не заполнено то выводим все
 */
 function render_skus(category_ids = [168,268]){
    const skus = mobile_init["skus"].filter(el => el.category_id>=category_ids[0]&&el.category_id<=category_ids[1])
    return skus
}

function make_categories_hash(){
  let categoriesArr = Object.values(mobile_init["categories"]).map(el=>[el.id,el.parent_id,el.name])
  noParentCategory = categoriesArr.filter(el=>!el[1])
  haveParentCategory = categoriesArr.filter(el=>el[1]).sort((a,b)=>a[1]-b[1])
  categoriesArr = [...noParentCategory,...haveParentCategory]
  
  return categoriesArr;
}

function make_shop_skus_array(){
 const arr = Object.values(Object.values(mobile_init["shop_skus"])[0])
 const res =[]
 arr.forEach(el=>{res.push(...el)})
 return res;
}

var categories_hash = make_categories_hash();

render_skus();
render_skus([169,172]);

var shop_skus_array = make_shop_skus_array();
