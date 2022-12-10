import React from 'react'
import bg from '../../assets/bg3.jpg'
import MenuList from '../MenuList/MenuList'

const MenuSection = () => {
  return (
    <div className='menu-page'>
        <div className="jumbotron">
            <img src={bg} alt="" />
        </div>
        <div className='text'>
            <h1>It's Menu</h1>
        </div>

        <div className="main-menu">
            <div className="coffea-list row">
                <h1 className='text-center mt-5 pt-3 mb-5 text-uppercase'>Our Coffee</h1>             
                <div className="col-md ">
                    <MenuList title="Cappucino" desc="The top layer is milk foam and decorated with cocoa powder" price='$4.00'/>
                    <MenuList title="Mocha" desc="The uniqueness of this type of coffee drink is the combination of chocolate mixed with espresso and milk." price='$4.00'/>

                </div>
                <div className="col-md">
                    <MenuList title="Cold Brew" desc="The aroma of coffee and the resulting taste is distinctive, namely not too bitter and not too sour" price='$6.00'/>
                    <MenuList title="Americano" desc="This drink can be served hot or cold." price='$5.00'/>

                </div>
            </div>
            <div className="tea-list row">
                <h1 className='text-center mt-5 pt-3 mb-5 text-uppercase'>Our tea</h1>             
                <div className="col-md">
                    <MenuList title="Green Tea" desc="Consuming 4 cups of green tea every day for 2 months can lose weight up to 2.7 kilograms." price='$4.00'/>
                    <MenuList title="White Tea" desc="Routin consumption of white tea can suppress appetite and increase metabolism." price='$2.00'/>
                </div>

                <div className="col-md">
                    <MenuList title="Pappermint Tea" desc="Contains menthol flavor which can help relax the digestive tract and treat flatulence." price='$2.00'/>
                    <MenuList title="Pu-erh Tea" desc="Pu-erh tea is a type of fermented tea made from wild old trees. This tea comes from Yunnan province, China." price='$3.00'/>
                </div>
            </div>

            <div className="snack-list row">
                <h1 className='text-center mt-5 pt-3 mb-5 text-uppercase'>Snack</h1>             
                <div className="col-md">
                    <MenuList title="Banana Bread" desc="A brunch table classic, served with wildflower honey or maple syrup" price='$5.00'/>
                    <MenuList title="Bagels" desc="Soft and chewy, choose from our daily fillings ranging from cream cheese to smoked salmon" price='$5.00'/>
                </div>

                <div className="col-md">
                    <MenuList title="French Toast" desc="Sweet French toast made with free-range eggs and served with a selection of local marmalades" price='$4.00'/>
                    <MenuList title="Egg and Bacon" desc="Toasted 5 seed bread with avocado and a drizzle of extra virgin olive oil" price='$8.00'/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default MenuSection