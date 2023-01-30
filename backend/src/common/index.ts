export const userStatus = {
    user: 0,
}

export class apiResponse {
    private status: number | null
    private message: string | null
    private data: any | null
    private error: any | null
    constructor(status: number, message: string, data: any, error: any) {
        this.status = status
        this.message = message
        this.data = data
        this.error = error
    }
}

export const image_folder = ['upload']

export const cachingTimeOut = 1800

export const booking_no_generation = (count: any, serial_number: any) => {
    for (let i = count.toString().length; i < 6; i++) {
        serial_number += 0
    }
    return serial_number += count.toString()
}

export const distance_calculation = async (lat1, lat2, lon1, lon2) => {
    lon1 = lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    // Haversine formula
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a = Math.pow(Math.sin(dlat / 2), 2)
        + Math.cos(lat1) * Math.cos(lat2)
        * Math.pow(Math.sin(dlon / 2), 2);

    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956
    // for miles
    let r = 6371;

    // calculate the result
    return (c * r);
}

export const notification_options = {
    priority: 'high',
    timeToLive: 60 * 60 * 24,
};


export const payload10 = async() => {
    return {
       notification : {
         title:"Payment has been added to your wallet.", //req.body.message,
         body: `Payment has been added to your wallet.`, //req.body.message,
       }
     }
};
export const payload101 = async(obj) => {
  return {
     notification : {
       title:"Payment has been added to your wallet.", //req.body.message,
       body: `Payment has been added to your wallet.`
       //req.body.message,
     },
     data:obj
   }
};
export const payload11 = async(driverName) => {
  return {
     notification : {
       title:"Arrived in your destination", //req.body.message,
       body: `${driverName} is on the way to deliver your pets in your destination point. Kindly share the OTP to the driver.`,
     }
   }
};
export const payload111 = async(driverName,obj) => {
return {
   notification : {
     title:"Arrived in your destination", //req.body.message,
     body: `${driverName} is on the way to deliver your pets in your destination point. Kindly share the OTP to the driver.`,
      //req.body.message,
   },
   data:obj
 }
};
export const payload9 = async(driverName) => {
    return {
       notification : {
         title:"On the way to deliver", //req.body.message,
         body: `${driverName} is on the way to deliver your pets in your destination point. Kindly share the OTP to the driver.`, //req.body.message,
       }
     }
};
export const payload91 = async(driverName,obj) => {
  return {
     notification : {
       title:"On the way to deliver", //req.body.message,
       body: `${driverName} is on the way to deliver your pets in your destination point. Kindly share the OTP to the driver.`,
        //req.body.message,
     },
     data:obj
   }
};
export const payload8 = async(driverName) => {
    return {
       notification : {
         title:"Arrived in your location", //req.body.message,
         body: `${driverName} has arrived in your location to pickup your pets. Kindly share the OTP to driver.`, //req.body.message,
       }
     }
};
export const payload81 = async(driverName,obj) => {
  return {
     notification : {
       title:"Arrived in your location", //req.body.message,
       body: `${driverName} has arrived in your location to pickup your pets. Kindly share the OTP to driver.`
       
        //req.body.message,
     },
     data:obj
     
   }
};
export const payload7 = async(driverName) => {
    return {
       notification : {
         title:"Accepted your request", //req.body.message,
         body: `${driverName} has accepted your request.`, //req.body.message,
       }
     }
};
export const payload71 = async(driverName,obj) => {
  return {
     notification : {
       title:"Accepted your request", //req.body.message,
       body: `${driverName} has accepted your request.`,
       
      //  obj:obj //req.body.message,
     },
     data:obj
    
   }
};
export const payload6 = async(reason,driverName) => {
    return {
       notification : {
         title:"Cacelled the request", //req.body.message,
         body: `${driverName} has cacelled the request due to ${reason}.`, //req.body.message,
       }
     }
};
export const payload61 = async(reason,driverName,obj) => {
  return {
     notification : {
       title:"Cacelled the request", //req.body.message,
       body: `${driverName} has cacelled the request due to ${reason}.`
        //req.body.message,
     },
     data:obj
   }
};
export const payload51 = async(reason,userName,obj) => {
  return {
     notification : {
       title:"Cacelled the request", //req.body.message,
       body: `${userName} has cacelled the request due to ${reason}.`
        //req.body.message,
     },
     data:obj
   }
};
export const payload5 = async(reason,userName) => {
    return {
       notification : {
         title:"Cacelled the request", //req.body.message,
         body: `${userName} has cacelled the request due to ${reason}.`, //req.body.message,
       }
     }
};
export const payload4 = async(obj) => {
    return {
       notification : {
         title:"You have received a new request.", //req.body.message,
         body: `You have received a new request.`,
          //req.body.message,
       },
       data:obj
     }
 };
export const payload3 = async(reason) => {
    return {
       notification : {
         title:"Your account is on hold", //req.body.message,
         body: `Your account is on hold due to ${reason}. Contact the Compliance team for more details.`, //req.body.message,
       }
     }
 };
 export const payload03 = async(reason,obj) => {
  return {
     notification : {
       title:"Your account is on hold", //req.body.message,
       body: `Your account is on hold due to ${reason}. Contact the Compliance team for more details.`, //req.body.message,
     },
     data:obj
   }
};
 export const payload2 = async(reason) => {
    return {
       notification : {
         title:"Your account is on hold", //req.body.message,
         body: `Your account is on hold due to ${reason}. Contact the Compliance team for more details.`, //req.body.message,
       }
     }
 };
 export const payload02 = async(reason,obj) => {
  return {
     notification : {
       title:"Your account is on hold", //req.body.message,
       body: `Your account is on hold due to ${reason}. Contact the Compliance team for more details.`, //req.body.message,
     },
     data:obj
   }
};
export const payload1 = async(reason) => {
   return {
      notification : {
        title:"Your request was not approved", //req.body.message,
        body: `We are sorry. Your request was not approved due to ${reason}. Please contact our Compliance team for more details.`, //req.body.message,
      }
    }
};
export const payload011 = async(reason,obj) => {
  return {
     notification : {
       title:"Your request was not approved", //req.body.message,
       body: `We are sorry. Your request was not approved due to ${reason}. Please contact our Compliance team for more details.`, //req.body.message,
     },
     data:obj
   }
};
export const payload = async() => {
    return {
       notification : {
         title:"Account Activated", //req.body.message,
         body: "Congratulations..!!Your account has been activated.", //req.body.message,
       }
     }
 };
 export const payload01 = async(obj) => {
  return {
     notification : {
       title:"Account Activated", //req.body.message,
       body: "Congratulations..!!Your account has been activated.", //req.body.message,
     },
     data:obj
   }
};