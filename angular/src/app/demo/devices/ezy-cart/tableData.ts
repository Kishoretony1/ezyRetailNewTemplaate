export interface tableData {
  employeeName? : String, employeeDepartment? : String, employeePosition? : String, employeeType? : String, email? : String, phoneNum? : String, id? : String, status? : any
  }
 export interface id_user{
  outletId: Number,merchantId:Number,userRoleId?: Number
 } 
 export interface beacon_List{
  beacons: [],
  metchantId: Number,
  outletId: Number,
  status: Number,
  zoneId: Number,
  zoneName: String,
  zoneType: String
 }

 export interface product_list_by_promotion{

    id? : Number,
    productName? : String,
    barCode? : Number,
    skuNumber? : any,
    masterCategory? : {
        id? : Number,
        name? : String,
        subCategory? : []
    },
    alcoholFlag? : String,
    supplierProducts? : [],
    price?: any,
    uom? : String,
    unitWeight? : number,
    productWeight? : number,
    weight? : number,
    promoDetails? : {},
    validateWG? : Boolean,
    isFreshItem? : Boolean,
    canAddToCart? : Boolean
 }