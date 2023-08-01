
const TestController = require('./TestController');
const UserController = require('./UserController');
const AdminController = require('./AdminController');
const AgentController = require('./AgentController');
const BookingController = require('./BookingController');
const CommentController = require('./CommentController');
const CompanyController = require('./CompanyController');
const CountryController = require('./CountryController');
const CountyController = require('./CountyController');
const CourseController = require('./CourseController');
const DefaultController = require('./DefaultController');
const DepositController = require('./DepositController');
const EmployeeController = require('./EmployeeController');
const EvictionController = require('./EvictionController');
const FeedbackController = require('./FeedbackController');
const GenderController = require('./GenderController');
const HouseController = require('./HouseController');
const House_TypeController = require('./House_TypeController');
const House_StatisticController = require('./House_StatisticControler');
const House_RecordController = require('./House_RecordController');
const IssueController = require('./IssueController');
const LandlordController = require('./LandlordController');
const LocationController = require('./LocatonModel');
const MaintenanceController = require('./MaintenanceController');
const Marital_StatusController = require('./Marital_StatusController');
const NationalityController = require('./NationalityController');
const Password_ResetController = require('./Password_ResetController');
const PaymentController = require('./PaymentController');
const Postal_CodeController = require('./Postal_CodeController');
const ReferallController = require('./ReferralController');
const RegionController = require('./RegionController');
const RentController = require('./RentController');
const RoleController = require('./RoleController');
const RoomController = require('./RoomController');
const Room_HistoryController = require('./Room_HistoryController');
const TenantController = require('./TenantController');
const Tenant_historyController = require('./Tenant_HistoryController');
const StudentController = require('./StudentController');
const StorageController = require('./StorageController');
const UniversityController = require('./UniversityController');

module.exports = {
    TestController, UserController, DefaultController, CourseController, CountyController, CountryController, CompanyController,
    CommentController, BookingController, AgentController, AdminController, Marital_StatusController, NationalityController, 
    MaintenanceController, LocationController, LandlordController, IssueController, House_RecordController, House_TypeController,
    HouseController, GenderController, FeedbackController, EvictionController, EmployeeController, DepositController, 
    House_StatisticController, TenantController, Room_HistoryController, RoomController, RoleController, RentController,
    RegionController, ReferallController, Postal_CodeController, Postal_CodeController, PaymentController, Password_ResetController,
    UniversityController, StorageController, StudentController, Tenant_historyController
}