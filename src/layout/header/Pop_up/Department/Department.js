const ListDepartment = [
    'Savings & Featured Shops',
    'Electronics',
    'Clothing, Shoes & Accessories',
    'Home, Furniture & Appliances',
    'Toys & Video Games',
     'Home Improvement',
     'Baby',
     'Household Essentials',
     'Personal Care',
     'Patio & Garden',
     'Gift Cards',
     'Auto, Tires and Industrial',
     'Movies, Music & Books'      
]

function renderDepartment (){
return(
    {ListDepartment.map((item,key) =>
        <li></li>
    }
)
}
export default renderDepartment;