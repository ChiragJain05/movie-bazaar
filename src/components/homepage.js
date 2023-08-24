import MultiActionAreaCard from "./common/cards";
import Footer from "./common/footer";
import ResponsiveGrid from "./common/grid";
import DrawerAppBar from "./common/header";

function HomePage(){


    return(
    <>
    <div>

        <DrawerAppBar/>
        <div>
            
            <ResponsiveGrid/>
        </div>
        

        <Footer/>
    </div>
    </>
    )
}

export default HomePage