const TestController = require('./TestController');
const UserController = require('./UserController');
const AdminController = require('./admin-module/AdminController');
const AgentController = require('./agent-module/AgentController');
const RegisterController = require('./Authentication/RegisterController')
// const BookingController = require('./BookingController');
// const CommentController = require('./CommentController');
// const CompanyController = require('./CompanyController');
// const CountryController = require('./CountryController');
// const CountyController = require('./CountyController');
// const CourseController = require('./CourseController');
// const DefaultController = require('./DefaultController');
// const DepositController = require('./DepositController');
// const EmployeeController = require('./EmployeeController');
// const EvictionController = require('./EvictionController');
// const FeedbackController = require('./FeedbackController');
// const GenderController = require('./GenderController');
const HouseController = require('./house-module/HouseController');
// const House_TypeController = require('./House_TypeController');
// const House_StatisticController = require('./House_StatisticController');
// const House_RecordController = require('./House_RecordController');
// const IssueController = require('./othercontrollers/IssueController');
const LandlordController = require('./landlord-module/LandlordController');
// const LocationController = require('./othercontrollers/LocatonModel');
// const MaintenanceController = require('./othercontrollers/MaintenanceController');
// const Marital_StatusController = require('./othercontrollers/Marital_StatusController');
// const NationalityController = require('./othercontrollers/NationalityController');
// const Password_ResetController = require('./othercontrollers/Password_ResetController');
// const PaymentController = require('./othercontrollers/PaymentController');
// const Postal_CodeController = require('./othercontrollers/Postal_CodeController');
// const ReferallController = require('./othercontrollers/ReferralController');
// const RegionController = require('./othercontrollers/RegionController');
// const RentController = require('./othercontrollers/RentController');
const RoleController = require('./admin-module/RoleController');
// const RoomController = require('./othercontrollers/RoomController');
// const Room_HistoryController = require('./othercontrollers/Room_HistoryController');
const TenantController = require('./tenant-module/TenantController');
// const Tenant_historyController = require('./othercontrollers/Tenant_HistoryController');
// const StudentController = require('./othercontrollers/StudentController');
// const StorageController = require('./othercontrollers/StorageController');
// const UniversityController = require('./othercontrollers/UniversityController');

module.exports = {
    UserController, AgentController, AdminController, TestController, TenantController, HouseController, LandlordController, 
    RoleController, RegisterController
}

// module.exports = {
//     TestController, UserController, DefaultController, CourseController, CountyController, CountryController, CompanyController,
//     CommentController, BookingController, AgentController, AdminController, Marital_StatusController, NationalityController, 
//     MaintenanceController, LocationController, LandlordController, IssueController, House_RecordController, House_TypeController,
//     HouseController, GenderController, FeedbackController, EvictionController, EmployeeController, DepositController, 
//     House_StatisticController, TenantController, Room_HistoryController, RoomController, RoleController, RentController,
//     RegionController, ReferallController, Postal_CodeController, Postal_CodeController, PaymentController, Password_ResetController,
//     UniversityController, StorageController, StudentController, Tenant_historyController
// }