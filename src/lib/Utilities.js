/**
 * Utility functions used by multiple components.
 * 
 * @author Thomas J. Daley, J.D.
 * @version 0.0.1
 * @copyright Copyright (c) 2019 by Thomas J. Daley, J.D. All Rights Reserved.
 */

 class Utilities
 {
     static cleanString(s)
     {
        let nopunc = s.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"");
        return nopunc.replace(/\s{2,}/g," ");
     }
 }

 export default Utilities;