import * as React from 'react';

import News from './page/news'
import Data from './page/data'

const router={
    '#/news':{
        compontent:function(){
            return <News/>
        }
    },
    '#/data':{
        compontent:function(){
            return <Data/>
        }
    }
}

// class router extends React.Component{
//     render(){
//         return(
//             <main>
//                 <switch>
//                     <Route exact path='/' component={News}></Route>
//                     <Route path='/data' component={Data}></Route>
//                 </switch>
                
//             </main>
//         )
//     }
// }


export default router;